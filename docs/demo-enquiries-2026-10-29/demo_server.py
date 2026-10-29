"""Demo enquiry bridge: durable receipt, Listmonk lists and transactional messages."""
import hashlib
import json
import os
import re
import sqlite3
import threading
import time
import uuid
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import quote
from urllib.request import Request, urlopen

ORIGINS = {'https://insightmatches.com', 'https://www.insightmatches.com'}
CONSENT = 'Keep me updated about InsightMatches events, research funding opportunities, and platform news.'
COMMUNITY = 3
DB = os.environ.get('DEMO_DB', '/data/demo.sqlite3')
API = os.environ.get('LISTMONK_URL', 'http://127.0.0.1:9000').rstrip('/')
TOKEN = ''
DEMO_LIST = 0
ACK_TEMPLATE = 0
NOTIFY_TEMPLATE = 0
WINDOWS = {}
LOCK = threading.Lock()


def connection():
    db = sqlite3.connect(DB, timeout=20)
    db.row_factory = sqlite3.Row
    return db


def initialize():
    with connection() as db:
        db.execute('CREATE TABLE IF NOT EXISTS requests (id TEXT PRIMARY KEY, payload TEXT NOT NULL, steps TEXT NOT NULL DEFAULT "[]", attempts INTEGER NOT NULL DEFAULT 0, retry_at REAL NOT NULL DEFAULT 0, done INTEGER NOT NULL DEFAULT 0)')


def validate(raw):
    if not isinstance(raw, dict):
        raise ValueError('Invalid request')
    if raw.get('website'):
        return None
    out = {}
    for key, limit in [('name', 200), ('email', 200), ('organization', 200), ('message', 3000)]:
        value = raw.get(key)
        if not isinstance(value, str) or not value.strip() or len(value) > limit:
            raise ValueError('Invalid ' + key)
        out[key] = value.strip()
    out['email'] = out['email'].lower()
    if not re.fullmatch(r"[A-Za-z0-9.!#$%&'*+/=?^_`{|}~\-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}", out['email']):
        raise ValueError('Invalid email')
    out['request_id'] = str(uuid.UUID(raw.get('request_id', '')))
    if type(raw.get('newsletter_consent')) is not bool:
        raise ValueError('Invalid consent')
    out['newsletter_consent'] = raw['newsletter_consent']
    out['received_at'] = datetime.now(timezone.utc).isoformat()
    return out


def enqueue(data):
    with connection() as db:
        previous = db.execute('SELECT payload FROM requests WHERE id=?', (data['request_id'],)).fetchone()
        if previous:
            old = json.loads(previous['payload'])
            if any(old[k] != data[k] for k in ['name', 'email', 'organization', 'message', 'newsletter_consent']):
                raise ValueError('Request ID already used')
            return
        db.execute('INSERT INTO requests(id,payload) VALUES (?,?)', (data['request_id'], json.dumps(data)))


def api(method, path, payload=None):
    req = Request(API + path, method=method, data=json.dumps(payload).encode() if payload is not None else None,
                  headers={'Authorization': 'token ' + TOKEN, 'Content-Type': 'application/json'})
    with urlopen(req, timeout=20) as response:
        return json.load(response).get('data')


def find_subscriber(email):
    query = "subscribers.email = '" + email.replace("'", "''") + "'"
    results = api('GET', '/api/subscribers?per_page=2&query=' + quote(query))['results']
    return next((s for s in results if s['email'].lower() == email), None)


def process(row):
    data = json.loads(row['payload'])
    steps = set(json.loads(row['steps']))
    def step(name, action):
        if name in steps:
            return
        action()
        steps.add(name)
        with connection() as db:
            db.execute('UPDATE requests SET steps=? WHERE id=?', (json.dumps(sorted(steps)), row['id']))
    subscriber = find_subscriber(data['email'])
    if not subscriber:
        try:
            api('POST', '/api/subscribers', {'email': data['email'], 'name': data['name'], 'status': 'enabled', 'lists': [DEMO_LIST],
                'preconfirm_subscriptions': True, 'attribs': {'source': 'insightmatches_demo'}})
        except HTTPError as err:
            if err.code != 409:
                raise
        subscriber = find_subscriber(data['email'])
    if not subscriber:
        raise RuntimeError('Subscriber save not verified')
    sid = subscriber['id']
    # Never overwrite their verified profile, global status, or unrelated attributes.
    # Requests keyed by UUID preserve repeated enquiries and make retries idempotent.
    step('record', lambda: api('PATCH', f'/api/subscribers/{sid}', {'attribs': {
        'demo_' + data['request_id'].replace('-', ''): {
            'name': data['name'], 'organization': data['organization'], 'message': data['message'],
            'received_at': data['received_at'], 'source': 'insightmatches_request_demo',
            'newsletter_consent': data['newsletter_consent'],
            'consent_text': CONSENT if data['newsletter_consent'] else None,
            'consent_version': 'demo-2026-10-29',
        }}}))
    lists = {x['id']: x for x in subscriber.get('lists', [])}
    # Respect prior unsubscribes: do not reactivate an existing list membership.
    if DEMO_LIST not in lists:
        step('demo_list', lambda: api('PUT', '/api/subscribers/lists', {'ids': [sid], 'action': 'add', 'target_list_ids': [DEMO_LIST], 'status': 'confirmed'}))
    step('notify', lambda: api('POST', '/api/tx', {'subscriber_emails': ['info@insightmatches.com'], 'subscriber_mode': 'external',
        'template_id': NOTIFY_TEMPLATE, 'subject': 'New InsightMatches demo enquiry', 'data': data}))
    enabled = subscriber.get('status') == 'enabled'
    if data['newsletter_consent'] and enabled:
        if COMMUNITY not in lists:
            step('community_list', lambda: api('PUT', '/api/subscribers/lists', {'ids': [sid], 'action': 'add', 'target_list_ids': [COMMUNITY], 'status': 'unconfirmed'}))
        # Only send opt-in for a new/unconfirmed subscription, never confirmed/unsubscribed.
        if COMMUNITY not in lists or lists[COMMUNITY].get('subscription_status') == 'unconfirmed':
            step('optin', lambda: api('POST', f'/api/subscribers/{sid}/optin', {}))
    # Transactional acknowledgements use subscriber mode so global blocklists apply.
    if enabled:
        step('ack', lambda: api('POST', '/api/tx', {'subscriber_email': data['email'], 'template_id': ACK_TEMPLATE,
            'subject': 'Thanks for getting in touch with InsightMatches', 'data': {'name': data['name']}}))
    with connection() as db:
        db.execute('UPDATE requests SET done=1 WHERE id=?', (row['id'],))


def worker():
    while True:
        with connection() as db:
            row = db.execute('SELECT * FROM requests WHERE done=0 AND retry_at <= ? ORDER BY rowid LIMIT 1', (time.time(),)).fetchone()
        if not row:
            time.sleep(3)
            continue
        try:
            process(row)
        except Exception:
            # No credentials, submitted text or email addresses in logs.
            print('Demo request processing delayed; queued for retry.', flush=True)
            with connection() as db:
                db.execute('UPDATE requests SET attempts=attempts+1,retry_at=? WHERE id=?',
                           (time.time() + min(3600, 30 * 2 ** min(row['attempts'], 7)), row['id']))


class Handler(BaseHTTPRequestHandler):
    def log_message(self, *_):
        pass
    def reply(self, status, payload=None):
        self.send_response(status)
        if self.headers.get('Origin') in ORIGINS:
            self.send_header('Access-Control-Allow-Origin', self.headers['Origin'])
        self.send_header('Vary', 'Origin')
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        if payload is not None:
            self.wfile.write(json.dumps(payload).encode())
    def do_GET(self):
        self.reply(200 if self.path == '/health' else 404, {'ok': True} if self.path == '/health' else None)
    def do_OPTIONS(self):
        if self.path != '/demo/request' or self.headers.get('Origin') not in ORIGINS:
            return self.reply(403)
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', self.headers['Origin'])
        self.send_header('Vary', 'Origin')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
    def do_POST(self):
        if self.path != '/demo/request':
            return self.reply(404)
        if self.headers.get('Origin') not in ORIGINS:
            return self.reply(403)
        if self.headers.get('Content-Type', '').split(';')[0] != 'application/json':
            return self.reply(415)
        try:
            length = int(self.headers.get('Content-Length', '0'))
            if not 0 < length <= 16384:
                return self.reply(413)
            self.connection.settimeout(10)
            now = time.monotonic()
            ip = self.headers.get('X-Forwarded-For', self.client_address[0]).split(',')[-1].strip()
            with LOCK:
                for key in list(WINDOWS):
                    WINDOWS[key] = [x for x in WINDOWS[key] if now - x < 600]
                    if not WINDOWS[key]: del WINDOWS[key]
                hits = WINDOWS.setdefault(ip, [])
                total = WINDOWS.setdefault('__global__', [])
                if len(hits) >= 5 or len(total) >= 50:
                    return self.reply(429)
                hits.append(now); total.append(now)
            data = validate(json.loads(self.rfile.read(length)))
            if data:
                enqueue(data)
            self.reply(202, {'ok': True})
        except (ValueError, TypeError, AttributeError):
            self.reply(400, {'error': 'Please check your enquiry details.'})
        except Exception:
            self.reply(503, {'error': 'We could not save your request. Please try again.'})


if __name__ == '__main__':
    TOKEN = Path(os.environ['LISTMONK_API_TOKEN_FILE']).read_text().strip()
    DEMO_LIST = int(os.environ['DEMO_LIST_ID'])
    ACK_TEMPLATE = int(os.environ['DEMO_ACK_TEMPLATE_ID'])
    NOTIFY_TEMPLATE = int(os.environ['DEMO_NOTIFY_TEMPLATE_ID'])
    if ':' not in TOKEN or not all([DEMO_LIST, ACK_TEMPLATE, NOTIFY_TEMPLATE]) or DEMO_LIST == COMMUNITY:
        raise RuntimeError('Missing dedicated demo configuration')
    initialize()
    threading.Thread(target=worker, daemon=True).start()
    ThreadingHTTPServer(('127.0.0.1', 9011), Handler).serve_forever()
