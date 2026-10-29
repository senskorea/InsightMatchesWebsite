# Demo enquiries implementation

Status: backend deployed October 29; website publication in progress. Backend internal demo-only test completed all steps without retries.

## User experience

New dedicated /request-demo page with normal website navigation, four required fields (name, email, organisation, help needed), and optional unticked newsletter consent. Demo enquiries go to a private single opt in Demo enquiries list. Community list3 remains double opt in. Successful durable receipt displays a thank you panel with https://calendar.app.google/ukQe5T1754RKVPedA. Existing unrelated forms and /nextrise remain on their current flow.

## Deployment prerequisites

Use authenticated Hostinger VPS session. Direct SSH was unavailable. User must confirm creation of a dedicated security-sensitive API connection at action time under browser policy. Do not reuse or widen the existing public community signup account silently.

Provisioned private single opt in Demo enquiries list ID4. Provisioned acknowledgement template6 and internal notification template7. Created dedicated demo-enquiry API user restricted to Demo enquiries4 and Community3; needs subscriber lookup, create, partial attributes update, list membership add, opt-in and transactional send. If those permissions require broader access than intended, explain exact scope before approval. No campaign send, delete or settings privileges. Verify scope on live Listmonk v6.2.0, including PATCH and tx external mode support, before exposing service.

Deploy files to /opt/listmonk/demo-enquiries. Put API_USERNAME:API_TOKEN in /opt/listmonk/secrets/demo_api (restricted, readable by10001). Store list and template IDs in .env for compose. mkdir data and chown10001:10001. Use compose.production.yml as docker-compose.yml. Service binds loopback9011 behind existing Traefik; only /demo/request is public. Existing signup service on9010 remains unchanged. Start only after runtime API tests. No credentials in website bundle.

The service durably stores receipts in SQLite, then processes them into Listmonk and sends notification/acknowledgement with retries. Filesystem data volume must be backed up and monitored for pending requests. TLS remains at Traefik. Origin validation, bounded fields/body, honeypot and rate limits apply. Queue receipts preserve repeated enquiry history as attributes keyed by request UUID. Marketing consent wording and date are recorded with each enquiry. PATCH merges enquiry metadata without changing verified names/global state/unrelated lists. New Community memberships are unconfirmed; existing confirmed/unsubscribed memberships are preserved. Blocklisted subscribers are not acknowledged or opted in. Demo list membership does not authorize newsletter campaigns.

Successful page means receipt saved, not inbox delivery. External calls are at least once: a crash after SMTP acceptance but before recording success can duplicate an email. Do not promise exactly once delivery. Failed steps retry with backoff; monitor queue and SMTP errors. Notifications are processed before optional marketing confirmation and visitor acknowledgement. Permanent failed jobs remain for review.

## Validation

python3 -m unittest discover -s docs/demo-enquiries-2026-10-29 -p 'test_*.py' -v

Six passed: demo only, separate unconfirmed opt-in, preserving existing profile/unsubscribe/blocklist, retry idempotency, repeated enquiry history, validation/honeypot. Browser local receipt-only server test saved enquiry without newsletter consent and showed confirmation with booking link. Local preview server has no worker or live external side effects.

Production build passes with vite.deploy.config.ts, which retains the base config and skips only missing optional entrypoints while requiring main and deck. Unmodified origin/main799e5b0 failed its CI build because practice/index.html was absent. Existing practice work was not changed. Existing TypeScript errors in NewsletterSignup/NextRise/Referral/TrialRequest involve SubmitResult narrowing; no RequestDemo errors. Do not publish a modified global Vite config that discards another agent's work.

Preview files: /Users/paul/.codex/visualizations/demo-form-2026-10-29/form.png and success.png. Website implementation staged in /tmp/insightmatches-mailing-resume-20261027 and copied to canonical source. Runtime preview uses existing public client environment plus DEV-only local demo endpoint; production always posts to https://mail.insightmatches.com/demo/request.

## Publish order

1. Confirm dedicated API access and public endpoint creation, then provision list/templates/connection and deploy server.
2. Verify live backend with internal info@ tests (both consent options), actual Listmonk metadata/list statuses and email receipt. Check existing subscriber/unsubscribed handling with internal test only. Avoid new contacts without consent.
3. Resolve unrelated build-entry prerequisite, fetch latest website main, apply only RequestDemo/App changes, build and deploy via existing Pages pipeline.
4. Check real /request-demo desktop/mobile, success/error behavior, booking link, no credential exposure, no regression of /nextrise or /mailing.
5. Refresh team CSV mirror including multiple list memberships using structured status evidence. Do not flatten two-list contacts to one status.

Rollback frontend by reverting only dedicated route/page change. Stop demo service if needed; preserve queue data and Listmonk records. Do not roll back community signup.

## Live deployment details

Hostinger console provisioned after explicit user confirmation. Actual containers listmonk-app-1 and listmonk-db-1. DB backup /opt/listmonk/backups/before-demo-20261029.sql (restricted). Service demo-enquiries-demo-1 uses loopback9011; public OPTIONS returns204. Restricted roles IDs5 and6 plus per-list children; username demo-enquiry. Secret only on VPS at /opt/listmonk/secrets/demo_api. User role permissions subscribers:get, subscribers:manage, subscribers:sql_query, tx:send, templates:get. No campaigns/settings/delete privileges. API users are cached so Listmonk app was restarted once after creation. Existing signup service unaffected. First internal info@ enquiry: record,demo_list,notify,ack steps complete, attempts0, done1. SMTP accepted; inbox receipt not yet verified.
