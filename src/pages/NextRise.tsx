import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const RESEARCH_AREAS = [
  "Health & Biotech",
  "Digital, AI, & Industry",
  "Climate, Energy, & Mobility",
  "Food, Bioeconomy, & Natural Resources",
];

const GRANT_OPTIONS = [
  "Yes, actively preparing a proposal",
  "We are looking for the right call/partners",
  "Just exploring for future quarters",
];

const PROJECT_IDEA_OPTIONS = [
  "Yes, I have a project idea",
  "No, still exploring",
];

const requiredFields: Record<string, string> = {
  full_name: "Please enter your full name",
  email: "Please enter your work email",
  company_name: "Please enter your company or institution",
  country: "Please enter your country",
  grant_status: "Please select an option",
};


const fieldIdMap: Record<string, string> = {
  full_name: "fullName",
  email: "email",
  company_name: "company",
  website: "website",
  role: "role",
  country: "country",
  grant_status: "grantStatus",
};

const NextRise = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [phone, setPhone] = useState("");
  const [areas, setAreas] = useState<string[]>([]);
  const [otherChecked, setOtherChecked] = useState(false);
  const [otherText, setOtherText] = useState("");
  const [grantStatus, setGrantStatus] = useState("");
  const [hasProjectIdea, setHasProjectIdea] = useState("");
  const [projectIdea, setProjectIdea] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    document.body.style.background = "hsl(var(--background))";
  }, []);

  const clearError = (field: string) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const makeChangeHandler =
    (setter: (value: string) => void, field: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      clearError(field);
    };

  const toggleArea = (area: string, checked: boolean) => {
    setAreas((prev) =>
      checked ? [...prev, area] : prev.filter((a) => a !== area)
    );
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    for (const [key, msg] of Object.entries(requiredFields)) {
      let value: string | string[] = "";
      switch (key) {
        case "full_name":
          value = fullName.trim();
          break;
        case "email":
          value = email.trim();
          break;
        case "company_name":
          value = companyName.trim();
          break;
        case "website":
          value = website.trim();
          break;
        case "role":
          value = role.trim();
          break;
        case "country":
          value = country.trim();
          break;
        case "grant_status":
          value = grantStatus.trim();
          break;
      }

      if (!value || (Array.isArray(value) && value.length === 0)) {
        nextErrors[key] = msg;
      } else if (key === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          nextErrors[key] = "Please enter a valid email address";
        }
      }
    }

    return nextErrors;
  };

  const scrollToFirstError = (firstKey: string) => {
    const id = fieldIdMap[firstKey];
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      if ("focus" in el && typeof (el as HTMLElement).focus === "function") {
        (el as HTMLElement).focus({ preventScroll: true });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    const errorKeys = Object.keys(validationErrors);

    if (errorKeys.length > 0) {
      setErrors(validationErrors);
      scrollToFirstError(errorKeys[0]);
      toast({
        title: "Please complete the form",
        description: `${errorKeys.length} required field${errorKeys.length === 1 ? "" : "s"} missing — see below.`,
        variant: "destructive",
      });
      return;
    }

    const finalAreas = [...areas];
    if (otherChecked && otherText.trim()) finalAreas.push(`Other: ${otherText.trim()}`);

    setSubmitting(true);
    const { error } = await supabase.from("nextrise_signups").insert({
      full_name: fullName.trim(),
      email: email.trim(),
      company_name: companyName.trim(),
      website: website.trim(),
      role: role.trim(),
      country: country.trim(),
      linkedin_url: linkedin.trim() || null,
      phone: phone.trim() || null,
      research_areas: finalAreas,
      other_area: otherChecked ? otherText.trim() || null : null,
      grant_status: grantStatus.trim(),
      has_project_idea: hasProjectIdea.trim() || null,
      project_idea: hasProjectIdea === "Yes, I have a project idea" ? projectIdea.trim() || null : null,
    });
    setSubmitting(false);

    if (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
      return;
    }

    setSuccess(true);
  };

  const navigate = useNavigate();

  const inputCls =
    "h-12 text-base border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent";

  return (
    <>
      <SEO
        title="Request a demo — InsightMatches"
        description="Request free trial access to InsightMatches, the AI co-pilot for Horizon Europe grants."
        canonical="https://www.insightmatches.com/request-demo"
      />
      <main className="min-h-screen bg-background flex items-center justify-center px-4 py-12 sm:py-20">
        <div className="w-full max-w-xl">
          {success ? (
            <div className="text-center space-y-6 animate-fade-in">
              <div className="flex justify-center">
                <Logo variant="standard" />
              </div>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-9 w-9 text-primary" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                Welcome aboard!
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md mx-auto">
                We will personally review your details and send your free trial access credentials
                within 24–48 hours.
              </p>
              <p className="text-sm text-muted-foreground">
                — InsightMatches Team
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Go back
              </button>

              <header className="space-y-3">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  Early Access — Free Trial
                </span>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                  Apply for Early Access
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Tell us a bit about your team and we'll send your free trial access within 24–48 hours.{" "}
                  <span className="text-muted-foreground/70">(Takes ~1 minute · 5 required fields)</span>
                </p>
              </header>


              <form onSubmit={handleSubmit} className="space-y-10" noValidate>
                {/* About you */}
                <section className="space-y-6">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    About you
                  </h2>

                  <div className="space-y-2">
                    <Label htmlFor="fullName" className={cn("text-sm", errors.full_name && "text-destructive")}>
                      Full name
                    </Label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={makeChangeHandler(setFullName, "full_name")}
                      placeholder="Jane Doe"
                      maxLength={200}
                      className={cn(inputCls, errors.full_name && "border-destructive focus-visible:border-destructive")}
                      autoComplete="name"
                      aria-invalid={!!errors.full_name}
                      aria-describedby={errors.full_name ? "fullName-error" : undefined}
                    />
                    {errors.full_name && (
                      <p id="fullName-error" className="text-sm text-destructive">{errors.full_name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className={cn("text-sm", errors.email && "text-destructive")}>
                      Work email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={makeChangeHandler(setEmail, "email")}
                      placeholder="jane@acme.com"
                      maxLength={320}
                      className={cn(inputCls, errors.email && "border-destructive focus-visible:border-destructive")}
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className={cn("text-sm", errors.role && "text-destructive")}>
                      Your role
                    </Label>
                    <Input
                      id="role"
                      value={role}
                      onChange={makeChangeHandler(setRole, "role")}
                      placeholder="Founder, CTO, Grant Manager…"
                      maxLength={200}
                      className={cn(inputCls, errors.role && "border-destructive focus-visible:border-destructive")}
                      autoComplete="organization-title"
                      aria-invalid={!!errors.role}
                      aria-describedby={errors.role ? "role-error" : undefined}
                    />
                    {errors.role && (
                      <p id="role-error" className="text-sm text-destructive">{errors.role}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country" className={cn("text-sm", errors.country && "text-destructive")}>
                      Country
                    </Label>
                    <Input
                      id="country"
                      value={country}
                      onChange={makeChangeHandler(setCountry, "country")}
                      placeholder="France"
                      maxLength={100}
                      className={cn(inputCls, errors.country && "border-destructive focus-visible:border-destructive")}
                      autoComplete="country-name"
                      aria-invalid={!!errors.country}
                      aria-describedby={errors.country ? "country-error" : undefined}
                    />
                    {errors.country && (
                      <p id="country-error" className="text-sm text-destructive">{errors.country}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedin" className="text-sm text-foreground">
                      LinkedIn URL <span className="text-muted-foreground/70 font-normal">(optional)</span>
                    </Label>
                    <Input id="linkedin" type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="https://linkedin.com/in/…" maxLength={500} className={inputCls} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm text-foreground">
                      Phone / WhatsApp <span className="text-muted-foreground/70 font-normal">(optional)</span>
                    </Label>
                    <Input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+33 6 12 34 56 78" maxLength={50} className={inputCls} autoComplete="tel" />
                  </div>
                </section>

                {/* Company */}
                <section className="space-y-6">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Your company
                  </h2>

                  <div className="space-y-2">
                    <Label htmlFor="company" className={cn("text-sm", errors.company_name && "text-destructive")}>
                      Company or research institution
                    </Label>
                    <Input
                      id="company"
                      value={companyName}
                      onChange={makeChangeHandler(setCompanyName, "company_name")}
                      placeholder="Acme Biotech"
                      maxLength={200}
                      className={cn(inputCls, errors.company_name && "border-destructive focus-visible:border-destructive")}
                      autoComplete="organization"
                      aria-invalid={!!errors.company_name}
                      aria-describedby={errors.company_name ? "company-error" : undefined}
                    />
                    {errors.company_name && (
                      <p id="company-error" className="text-sm text-destructive">{errors.company_name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className={cn("text-sm", errors.website && "text-destructive")}>
                      Website
                    </Label>
                    <Input
                      id="website"
                      type="text"
                      value={website}
                      onChange={makeChangeHandler(setWebsite, "website")}
                      placeholder="https://acme.com"
                      maxLength={500}
                      className={cn(inputCls, errors.website && "border-destructive focus-visible:border-destructive")}
                      autoComplete="url"
                      aria-invalid={!!errors.website}
                      aria-describedby={errors.website ? "website-error" : undefined}
                    />
                    {errors.website && (
                      <p id="website-error" className="text-sm text-destructive">{errors.website}</p>
                    )}
                  </div>
                </section>

                {/* Research areas */}
                <div className="space-y-4">
                  <Label className="text-base font-medium text-foreground">
                    Which research areas or tech domains are you focusing on this year?
                  </Label>
                  <div className="space-y-2">
                    {RESEARCH_AREAS.map((area) => (
                      <label
                        key={area}
                        className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/40 cursor-pointer transition-colors"
                      >
                        <Checkbox
                          checked={areas.includes(area)}
                          onCheckedChange={(c) => toggleArea(area, !!c)}
                        />
                        <span className="text-sm sm:text-base text-foreground">{area}</span>
                      </label>
                    ))}
                    <label className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/40 cursor-pointer transition-colors">
                      <Checkbox
                        checked={otherChecked}
                        onCheckedChange={(c) => setOtherChecked(!!c)}
                      />
                      <span className="text-sm sm:text-base text-foreground">Other</span>
                    </label>
                    {otherChecked && (
                      <Input
                        value={otherText}
                        onChange={(e) => setOtherText(e.target.value)}
                        placeholder="Tell us about your focus area"
                        maxLength={500}
                        className="mt-2"
                      />
                    )}
                  </div>
                </div>

                {/* Project idea */}
                <div className="space-y-4" id="projectIdea">
                  <Label className="text-base font-medium text-foreground">
                    Do you have a specific research project idea in mind?
                  </Label>
                  <RadioGroup
                    value={hasProjectIdea}
                    onValueChange={(value) => {
                      setHasProjectIdea(value);
                      if (value !== "Yes, I have a project idea") {
                        setProjectIdea("");
                      }
                    }}
                    className="space-y-2"
                  >
                    {PROJECT_IDEA_OPTIONS.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/40 cursor-pointer transition-colors"
                      >
                        <RadioGroupItem value={opt} id={opt} />
                        <span className="text-sm sm:text-base text-foreground">{opt}</span>
                      </label>
                    ))}
                  </RadioGroup>
                  {hasProjectIdea === "Yes, I have a project idea" && (
                    <div className="pt-2">
                      <Label htmlFor="projectIdeaText" className="text-sm text-foreground">
                        Tell us briefly about your project idea
                      </Label>
                      <Textarea
                        id="projectIdeaText"
                        value={projectIdea}
                        onChange={(e) => setProjectIdea(e.target.value)}
                        placeholder="e.g., a low-cost AI diagnostic for infectious diseases targeting the Global Health Horizon Europe call..."
                        maxLength={1000}
                        className="mt-2 min-h-[120px]"
                      />
                    </div>
                  )}
                </div>

                {/* Grant status */}
                <div className="space-y-4" id="grantStatus">
                  <Label className={cn("text-base font-medium", errors.grant_status && "text-destructive")}>
                    Do you have a specific Horizon Europe or international grant call you are targeting this quarter?
                  </Label>
                  <RadioGroup
                    value={grantStatus}
                    onValueChange={(value) => {
                      setGrantStatus(value);
                      clearError("grant_status");
                    }}
                    className={cn(
                      "space-y-2",
                      errors.grant_status && "rounded-lg border border-destructive p-3"
                    )}
                    aria-invalid={!!errors.grant_status}
                    aria-describedby={errors.grant_status ? "grantStatus-error" : undefined}
                  >
                    {GRANT_OPTIONS.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/40 cursor-pointer transition-colors"
                      >
                        <RadioGroupItem value={opt} id={opt} />
                        <span className="text-sm sm:text-base text-foreground">{opt}</span>
                      </label>
                    ))}
                  </RadioGroup>
                  {errors.grant_status && (
                    <p id="grantStatus-error" className="text-sm text-destructive">{errors.grant_status}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 text-base font-medium"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    "Request Free Trial Access"
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  No credit card. No sales call unless you ask for one. We reply personally within 24–48h.
                </p>
                <p className="text-xs text-center text-muted-foreground/70">
                  Your details are used only to set up your trial.
                </p>
              </form>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default NextRise;
