import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import SEO from '@/components/SEO';

const ENDPOINT = import.meta.env.DEV && import.meta.env.VITE_DEMO_ENDPOINT
  ? import.meta.env.VITE_DEMO_ENDPOINT
  : 'https://mail.insightmatches.com/demo/request';
const BOOKING = 'https://calendar.app.google/ukQe5T1754RKVPedA';
const CONSENT = 'Keep me updated about InsightMatches events, research funding opportunities, and platform news.';

export default function RequestDemo() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const requestId = useRef(crypto.randomUUID());
  const success = useRef<HTMLDivElement>(null);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const fields = new FormData(event.currentTarget);
    setBusy(true); setError('');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          request_id: requestId.current,
          name: fields.get('name'), email: fields.get('email'),
          organization: fields.get('organization'), message: fields.get('message'),
          newsletter_consent: newsletter, website: fields.get('website'),
        }),
      });
      if (!response.ok) throw new Error(response.status === 429
        ? 'You’ve sent several requests. Please try again later.'
        : 'We couldn’t save your request. Please try again or email info@insightmatches.com.');
      setDone(true);
      requestAnimationFrame(() => { success.current?.focus(); success.current?.scrollIntoView({behavior: 'smooth', block: 'center'}); });
    } catch (err) {
      setError(err instanceof TypeError ? 'Please check your connection and try again. Your details are still here.' : (err as Error).message);
    } finally { setBusy(false); }
  }
  const input = 'mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500';
  return <div className="min-h-screen bg-slate-50 text-slate-900">
    <SEO title="Request a demo | InsightMatches" description="Tell us about your research or organisation. Explore funding opportunities and research partnerships with InsightMatches." canonical="https://insightmatches.com/request-demo" />
    <Navbar />
    <main className="mx-auto max-w-2xl px-5 pb-20 pt-32">
      <Link to="/" className="text-sm text-slate-600 hover:text-sky-600">← Back to InsightMatches</Link>
      {done ? <div ref={success} tabIndex={-1} role="status" className="mt-8 rounded-xl border border-sky-200 bg-white p-8 shadow-sm outline-none sm:p-10">
        <CheckCircle2 className="mb-5 h-12 w-12 text-sky-500" aria-hidden="true" />
        <h1 className="text-3xl font-semibold tracking-tight">Thanks for getting in touch!</h1>
        <p className="mt-4 leading-relaxed text-slate-600">We’ve received your request and look forward to learning more about your work. We’ll be in touch soon, or you can choose a time to speak with us below.</p>
        {newsletter && <p className="mt-4 text-sm leading-relaxed text-slate-600">If you’re new to our mailing list, look out for a separate email asking you to confirm your subscription. Your demo request is already saved.</p>}
        <a href={BOOKING} className="mt-7 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-600">Book a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
      </div> : <>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight">Let’s explore what’s possible.</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">Tell us a little about your work. We’ll show you how InsightMatches can help you find funding opportunities and connect with research partners.</p>
        <form onSubmit={submit} className="mt-8 space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8" aria-busy={busy}>
          <div><label htmlFor="demo-name" className="font-medium">Full name</label><input id="demo-name" name="name" autoComplete="name" required maxLength={200} className={input} /></div>
          <div><label htmlFor="demo-email" className="font-medium">Work email</label><input id="demo-email" name="email" type="email" autoComplete="email" required maxLength={200} className={input} /></div>
          <div><label htmlFor="demo-org" className="font-medium">Organisation or institution</label><input id="demo-org" name="organization" autoComplete="organization" required maxLength={200} className={input} /></div>
          <div><label htmlFor="demo-message" className="font-medium">What would you like help with?</label><textarea id="demo-message" name="message" required maxLength={3000} rows={4} placeholder="For example, finding a funding call or building a research team." className={input} /></div>
          <div className="hidden" aria-hidden="true"><label htmlFor="demo-website">Leave this empty</label><input id="demo-website" name="website" tabIndex={-1} autoComplete="off" /></div>
          <div className="border-t border-slate-100 pt-5"><label className="flex cursor-pointer items-start gap-3"><input type="checkbox" checked={newsletter} onChange={e => setNewsletter(e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-sky-500" /><span className="text-sm leading-relaxed text-slate-600">{CONSENT} <span className="text-slate-400">(optional)</span></span></label><p className="ml-7 mt-2 text-xs text-slate-500">You can unsubscribe at any time. Requesting a demo does not require joining the mailing list.</p></div>
          <p className="text-xs leading-relaxed text-slate-500">We’ll use these details to respond to your enquiry. We store your enquiry in our contact system and never sell your details. For questions or removal requests, email <a href="mailto:info@insightmatches.com" className="text-sky-600 underline">info@insightmatches.com</a>.</p>
          {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
          <button disabled={busy} type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-600 disabled:opacity-60">{busy ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />Saving your request…</> : 'Request a demo'}</button>
        </form>
      </>}
    </main><Footer />
  </div>;
}
