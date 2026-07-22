import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitRegistration } from "@/lib/submitRegistration";

// Full-access `trial` on the platform is admin-granted only (not something a
// visitor can switch on themselves) — see the SAAS's three-tier model
// (free / trial / paid). This form is the front door to that grant: it goes
// through the same shared submit-registration edge function every other
// lead-capture form on the site uses (source: 'trial'), landing in
// public.registrations where it shows up in AdminDashboard's Registrations
// tab exactly like any other lead, ready for an admin to grant access from.
const schema = z.object({
  full_name: z.string().trim().min(1, "Required").max(120),
  work_email: z.string().trim().email("Invalid email").max(255),
  organisation: z.string().trim().min(1, "Required").max(300),
  country: z.string().trim().max(100).optional().or(z.literal("")),
  project_idea: z.string().trim().max(2000).optional().or(z.literal("")),
});

export default function TrialRequest() {
  // company_website_url is a honeypot — hidden from users, discarded server-side
  // if a bot fills it in. Deliberately outside the zod schema.
  const [form, setForm] = useState({
    full_name: "",
    work_email: "",
    organisation: "",
    country: "",
    project_idea: "",
    company_website_url: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setSubmitting(true);
    const result = await submitRegistration({
      source: "trial",
      name: parsed.data.full_name,
      email: parsed.data.work_email,
      organisation: parsed.data.organisation,
      country: parsed.data.country || null,
      project_idea: parsed.data.project_idea || null,
      company_website_url: form.company_website_url,
    });
    setSubmitting(false);
    if (!result.ok) {
      toast.error(result.error);
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Request full access — InsightMatches"
        description="Tell us about your organisation and we'll set up full trial access to InsightMatches."
        canonical="/request-trial"
      />
      <Navbar />

      <main className="pt-20 md:pt-24 bg-white dark:bg-slate-900">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Request full access
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full-pipeline trial access — ideation, consortium building, drafting and
            submission — is granted by our team, not self-serve. Tell us a bit about
            your organisation and we'll set you up.
          </p>
        </section>

        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-14 h-14 mx-auto text-sky-500 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Request received
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  We'll be in touch shortly to set up your access.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                {/* Honeypot — hidden from users and screen readers alike. */}
                <input
                  type="text"
                  name="company_website_url"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={form.company_website_url}
                  onChange={(e) => setForm({ ...form, company_website_url: e.target.value })}
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                />
                <div>
                  <Label htmlFor="full_name">Full name</Label>
                  <Input
                    id="full_name"
                    required
                    value={form.full_name}
                    onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="work_email">Work email</Label>
                  <Input
                    id="work_email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={form.work_email}
                    onChange={(e) => setForm({ ...form, work_email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="organisation">Organisation</Label>
                  <Input
                    id="organisation"
                    required
                    value={form.organisation}
                    onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="project_idea">What are you looking to fund? (optional)</Label>
                  <Textarea
                    id="project_idea"
                    rows={4}
                    value={form.project_idea}
                    onChange={(e) => setForm({ ...form, project_idea: e.target.value })}
                  />
                </div>
                <Button type="submit" disabled={submitting} className="w-full">
                  {submitting ? "Submitting…" : "Request access"}
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
