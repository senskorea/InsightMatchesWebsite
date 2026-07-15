import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Link2, Share2, Wallet } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  full_name: z.string().trim().min(1, "Required").max(120),
  work_email: z.string().trim().email("Invalid email").max(255),
  linkedin_url: z
    .string()
    .trim()
    .max(255)
    .optional()
    .or(z.literal("")),
});

export default function Referral() {
  const [form, setForm] = useState({ full_name: "", work_email: "", linkedin_url: "" });
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
    const { error } = await supabase.from("referral_signups").insert({
      full_name: parsed.data.full_name,
      work_email: parsed.data.work_email,
      linkedin_url: parsed.data.linkedin_url || null,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
  };

  const steps = [
    {
      icon: Link2,
      title: "Sign Up",
      body: "Join our referral program in seconds. We'll send your unique tracking link.",
    },
    {
      icon: Share2,
      title: "Share",
      body: "Share your link with researchers, SMEs, or your network who need R&D funding.",
    },
    {
      icon: Wallet,
      title: "Earn 10%",
      body: "Get 10% of the annual subscription fee for every new customer that signs up.",
    },
  ];

  return (
    <>
      <SEO
        title="Referral Program – Earn 10% | InsightMatches"
        description="Refer deep-tech researchers and SMEs to InsightMatches and earn a 10% commission on their annual subscription."
        canonical="/referral"
      />
      <Navbar />

      <main className="pt-20 md:pt-24 bg-white dark:bg-charcoal-900">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-mint-600 dark:text-mint-400 mb-4">
            Partner & Referral Program
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Refer InsightMatches.<br />
            <span className="bg-gradient-to-r from-mint-500 to-lavender-500 bg-clip-text text-transparent">
              Earn 10% every time.
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Help deep-tech researchers and SMEs fast-track their Horizon Europe funding.
            When they subscribe through your link, you receive a 10% commission on their annual fee.
          </p>
          <a
            href="#join"
            className="inline-block mt-8 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-mint-500 to-lavender-500 text-white shadow-lg hover:shadow-glow transition-all hover:scale-105"
          >
            Become a Partner
          </a>
        </section>

        {/* How it works */}
        <section className="border-y border-gray-200 dark:border-charcoal-700 bg-gray-50 dark:bg-charcoal-800/40 py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              How it works
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className="bg-white dark:bg-charcoal-900 rounded-2xl p-8 border border-gray-200 dark:border-charcoal-700 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mint-500 to-lavender-500 text-white flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <s.icon className="w-5 h-5 text-mint-600 dark:text-mint-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rewards */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Simple, transparent rewards
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            No tiers. No points. Just a straightforward 10% commission on the annual
            subscription fee for every successful referral.
          </p>
          <div className="mt-10 inline-flex flex-col items-center px-12 py-10 rounded-3xl bg-gradient-to-br from-mint-500/10 to-lavender-500/10 border border-mint-500/20">
            <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-mint-500 to-lavender-500 bg-clip-text text-transparent">
              10%
            </span>
            <span className="mt-2 text-sm font-medium tracking-wide uppercase text-gray-700 dark:text-gray-300">
              Annual fee commission
            </span>
          </div>
        </section>

        {/* Form */}
        <section id="join" className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="rounded-2xl border border-gray-200 dark:border-charcoal-700 bg-white dark:bg-charcoal-900 shadow-xl p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-14 h-14 mx-auto text-mint-500 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  You're in.
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  Thanks for joining. We'll email your unique referral link within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Join the program
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Start earning by referring top innovators.
                </p>
                <form onSubmit={onSubmit} className="mt-6 space-y-4">
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
                    <Label htmlFor="linkedin_url">LinkedIn profile (optional)</Label>
                    <Input
                      id="linkedin_url"
                      placeholder="https://linkedin.com/in/…"
                      value={form.linkedin_url}
                      onChange={(e) => setForm({ ...form, linkedin_url: e.target.value })}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-mint-500 to-lavender-500 text-white font-semibold py-6 rounded-lg hover:shadow-glow"
                  >
                    {submitting ? "Submitting…" : "Generate my referral link"}
                  </Button>
                </form>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
