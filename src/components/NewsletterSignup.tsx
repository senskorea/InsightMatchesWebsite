import React, { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { submitRegistration } from '@/lib/submitRegistration';

export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  // Marketing consent must be an explicit opt-in: unticked by default, and
  // never bundled into the submit button. Required for a lawful basis under
  // GDPR Art. 6(1)(a) — this is the one form where consent, not legitimate
  // interest, is what we are relying on.
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!consent) {
      setError('Please confirm you would like to receive our newsletter.');
      return;
    }

    setSubmitting(true);
    const result = await submitRegistration({
      source: 'newsletter',
      email: trimmed,
      consent_marketing: true,
      company_website_url: honeypot,
    });
    setSubmitting(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-sky-50/50 to-slate-50/50 dark:from-slate-800 dark:to-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Get the latest insights on European research funding opportunities delivered straight to your inbox.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center space-y-4 py-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900/40">
                <CheckCircle2 className="h-8 w-8 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                You&apos;re subscribed
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Thanks — we&apos;ll be in touch with the next edition.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              {/* Honeypot — hidden from users and screen readers alike. */}
              <input
                type="text"
                name="company_website_url"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <div>
                <label htmlFor="newsletter-email" className="sr-only">
                  Work email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@organisation.eu"
                  aria-invalid={!!error}
                  aria-describedby={error ? 'newsletter-error' : undefined}
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                <span>
                  I agree to receive the InsightMatches newsletter about European
                  research funding. You can unsubscribe at any time.
                </span>
              </label>

              {error && (
                <p id="newsletter-error" role="alert" className="text-sm text-red-600 dark:text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full h-12 rounded-lg bg-sky-600 hover:bg-sky-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {submitting ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
