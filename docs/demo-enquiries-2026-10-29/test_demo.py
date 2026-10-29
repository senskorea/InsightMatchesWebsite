import copy
import importlib.util
import json
import tempfile
import unittest
import uuid
from pathlib import Path

spec = importlib.util.spec_from_file_location('demo', Path(__file__).with_name('demo_server.py'))
demo = importlib.util.module_from_spec(spec); spec.loader.exec_module(demo)

class DemoTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory(); self.addCleanup(self.tmp.cleanup)
        demo.DB = str(Path(self.tmp.name)/'queue.sqlite3'); demo.DEMO_LIST=4;demo.ACK_TEMPLATE=6;demo.NOTIFY_TEMPLATE=7;demo.initialize()
        self.calls=[];self.sub=None
        self.original_api=demo.api;demo.api=self.api;self.addCleanup(setattr,demo,'api',self.original_api)
    def data(self, consent=False):
        return demo.validate({'name':'Test User','email':'test@example.com','organization':'Test Lab','message':'Help find partners','request_id':str(uuid.uuid4()),'newsletter_consent':consent})
    def api(self,method,path,payload=None):
        self.calls.append((method,path,copy.deepcopy(payload)))
        if method=='GET':return {'results':[copy.deepcopy(self.sub)] if self.sub else []}
        if path=='/api/subscribers' and method=='POST':
            self.sub={**payload,'id':12,'lists':[{'id':4,'subscription_status':'confirmed'}]};return self.sub
        if method=='PATCH':self.sub.setdefault('attribs',{}).update(payload['attribs']);return self.sub
        if path=='/api/subscribers/lists':
            self.sub['lists'] += [{'id':n,'subscription_status':payload['status']} for n in payload['target_list_ids']];return True
        return True
    def run_request(self,data):
        demo.enqueue(data)
        with demo.connection() as db:row=db.execute('SELECT * FROM requests WHERE id=?',(data['request_id'],)).fetchone()
        demo.process(row)
    def test_demo_without_marketing(self):
        self.run_request(self.data())
        self.assertEqual([x['id'] for x in self.sub['lists']],[4])
        self.assertFalse(any(p.endswith('/optin') for _,p,_ in self.calls))
        self.assertEqual(len([1 for _,p,_ in self.calls if p=='/api/tx']),2)
    def test_optin_separate_unconfirmed(self):
        self.run_request(self.data(True))
        self.assertIn({'id':3,'subscription_status':'unconfirmed'},self.sub['lists'])
        self.assertEqual(len([1 for _,p,_ in self.calls if p.endswith('/optin')]),1)
    def test_preserve_existing_unsubscribe_profile_and_blocklist(self):
        self.sub={'id':12,'email':'test@example.com','name':'Original','status':'blocklisted','attribs':{'source':'old'},'lists':[{'id':3,'subscription_status':'unsubscribed'}]}
        self.run_request(self.data(True))
        self.assertEqual(self.sub['name'],'Original');self.assertEqual(self.sub['status'],'blocklisted');self.assertEqual(self.sub['attribs']['source'],'old')
        self.assertIn({'id':3,'subscription_status':'unsubscribed'},self.sub['lists'])
        self.assertFalse(any(p.endswith('/optin') for _,p,_ in self.calls))
        self.assertEqual(len([1 for _,p,_ in self.calls if p=='/api/tx']),1)
    def test_retry_idempotency(self):
        data=self.data(True);self.run_request(data);demo.enqueue(data)
        before=len([1 for _,p,_ in self.calls if p=='/api/tx' or p.endswith('/optin')]);self.run_request(data)
        self.assertEqual(before,len([1 for _,p,_ in self.calls if p=='/api/tx' or p.endswith('/optin')]))
        with demo.connection() as db:self.assertEqual(db.execute('SELECT count(*) FROM requests').fetchone()[0],1)
    def test_repeat_enquiries_retained(self):
        self.run_request(self.data());self.run_request(self.data())
        self.assertEqual(len([k for k in self.sub['attribs'] if k.startswith('demo_')]),2)
    def test_invalid_request_and_honeypot(self):
        with self.assertRaises(ValueError):demo.validate({'name':'X'})
        self.assertIsNone(demo.validate({'website':'bot'}))

if __name__=='__main__':unittest.main()
