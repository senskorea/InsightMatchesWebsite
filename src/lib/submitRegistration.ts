// Single client-side entry point for every lead-capture form on the site.
//
// Posts to the `submit-registration` edge function on the InsightMatches
// platform project, which owns public.registrations. Deliberately NOT a
// Supabase client call: the function runs pre-auth with the service role and
// applies honeypot + rate-limit checks, so the website needs no Supabase
// credentials of its own.

export type RegistrationSource = 'nextrise' | 'referral' | 'newsletter' | 'demo' | 'trial';

export type RegistrationPayload = {
  source: RegistrationSource;
  email: string;
  name?: string | null;
  organisation?: string | null;
  country?: string | null;
  role?: string | null;
  programme_interest?: string[] | null;
  website?: string | null;
  linkedin_url?: string | null;
  phone?: string | null;
  grant_status?: string | null;
  project_idea?: string | null;
  notes?: string | null;
  /** Explicit marketing opt-in. Required for source: 'newsletter'. */
  consent_marketing?: boolean;
  /** Honeypot — must stay empty. Bots that fill it are silently discarded. */
  company_website_url?: string;
};

const ENDPOINT = import.meta.env.VITE_REGISTRATION_ENDPOINT as string | undefined;

export type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitRegistration(
  payload: RegistrationPayload
): Promise<SubmitResult> {
  if (!ENDPOINT) {
    console.error('VITE_REGISTRATION_ENDPOINT is not configured');
    return { ok: false, error: 'Something went wrong. Please try again in a moment.' };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      // 429 is the rate limiter and deserves its own wording — telling someone
      // to "try again" when the problem is that they tried too often is noise.
      if (res.status === 429) {
        return { ok: false, error: 'Too many submissions. Please try again later.' };
      }
      const body = await res.json().catch(() => null);
      return {
        ok: false,
        error: body?.error ?? 'Something went wrong. Please try again in a moment.',
      };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: 'Network error. Please check your connection and try again.' };
  }
}
