import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Briefcase, Code, Rocket, Award, ChevronRight, CheckCircle, Target } from 'lucide-react';
import { SEO } from '@/components/SEO';

const Careers = () => {
  useEffect(() => {
    document.title = 'Careers - InsightMatches';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO
        title="Careers at InsightMatches"
        description="Join InsightMatches. We are hiring a Founding CTO / Lead Engineer, AI Systems."
        canonical="/careers"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium">Join Our Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Us Build the Future of Agentic AI</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are looking for passionate builders who thrive in ambiguity and deeply understand modern LLM integration.
          </p>

          {/* Quick Nav Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto text-left">
            <button 
              onClick={() => document.getElementById('cto')?.scrollIntoView({behavior: 'smooth'})} 
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-md group text-left flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Founding CTO</h3>
              <p className="text-sm text-muted-foreground">Engineering</p>
            </button>

            <button 
              onClick={() => document.getElementById('project-coordinator')?.scrollIntoView({behavior: 'smooth'})} 
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-md group text-left flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Project Coordinator</h3>
              <p className="text-sm text-muted-foreground">Operations</p>
            </button>

            <button 
              onClick={() => document.getElementById('head-of-growth')?.scrollIntoView({behavior: 'smooth'})} 
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-md group text-left flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Head of Growth</h3>
              <p className="text-sm text-muted-foreground">Sales & Marketing</p>
            </button>
          </div>
        </div>
      </section>

      {/* Job Spec - CTO */}
      <section className="py-8 px-4 scroll-mt-24" id="cto">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-border pb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Founding CTO / Lead Engineer, AI Systems</h2>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                    <Code className="w-4 h-4" /> Engineering
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                    <Rocket className="w-4 h-4" /> Early Stage / Founding Team
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                    <Award className="w-4 h-4" /> Equity Based
                  </span>
                </div>
              </div>
              <a href="mailto:info@insightmatches.com?subject=Application%3A%20Founding%20CTO%20%2F%20Lead%20Engineer%2C%20AI%20Systems" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shrink-0">
                Apply Now <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-10">
              {/* The Opportunity */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Rocket className="w-5 h-5" />
                  </span>
                  The Opportunity
                </h3>
                <div className="pl-10 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    InsightMatches is an AI powered platform helping researchers develop Horizon Europe and Erasmus+ proposals.
                  </p>
                  <p>
                    We already have a solid full stack product built with React, TypeScript, Supabase, Vercel, and Google Vertex AI. We need a hands on technical leader to validate the existing platform, lead its production launch, and develop its agentic capabilities.
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </span>
                  Responsibilities
                </h3>
                <div className="pl-10">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Take technical ownership of the existing codebase and architecture.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Lead production readiness, deployment, security, monitoring, and reliability.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Build and improve customer facing features across the proposal workflow.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Strengthen AI quality, evaluation, observability, fallback handling, and cost controls.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Develop research agents that monitor funding calls, programme requirements, and templates.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Coordinate work between engineers and AI development agents.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Translate business priorities into a practical technical roadmap.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Help build the future engineering team and development culture.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Code className="w-5 h-5" />
                  </span>
                  Requirements
                </h3>
                <div className="pl-10">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>Strong experience building and operating production SaaS applications.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>Excellent TypeScript, React, database, API, and cloud engineering skills.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>Practical experience integrating LLMs into real products.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>Understanding of authentication, data isolation, security, and PostgreSQL.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>Experience with AI evaluation, structured outputs, agent workflows, and human review.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>Ability to improve an existing platform without defaulting to a rewrite.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>Comfortable combining hands on development with technical leadership.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>Supabase, Vercel, and Vertex AI experience is valuable.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Success */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5" />
                  </span>
                  Success
                </h3>
                <div className="pl-10 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    Your first priority will be to independently assess the current release candidate and lead a safe production launch.
                  </p>
                  <p>
                    You will then improve platform reliability, establish measurable AI quality and cost controls, and deliver the next generation of agentic research and proposal tools.
                  </p>
                </div>
              </div>

              {/* Compensation */}
              <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 p-6 md:p-8 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </span>
                  Compensation and Pathway
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed pl-10">
                  <p>
                    The initial role is equity based with clearly agreed scope, vesting, commitment, and decision rights.
                  </p>
                  <p>
                    There is a defined pathway to a full time salaried role when agreed funding or revenue milestones are reached.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Job Spec - Project Coordinator */}
      <section className="py-8 px-4 scroll-mt-24" id="project-coordinator">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-border pb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Founding Project Coordinator, EU Grants & Operations</h2>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                    <Briefcase className="w-4 h-4" /> Operations
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                    <Rocket className="w-4 h-4" /> Early Stage / Founding Team
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                    <Award className="w-4 h-4" /> Equity Based
                  </span>
                </div>
              </div>
              <a href="mailto:info@insightmatches.com?subject=Application%3A%20Founding%20Project%20Coordinator" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shrink-0">
                Apply Now <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-10">
              {/* The Opportunity */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Rocket className="w-5 h-5" />
                  </span>
                  The Opportunity
                </h3>
                <div className="pl-10 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    InsightMatches is an AI-powered platform helping researchers develop Horizon Europe and Erasmus+ proposals.
                  </p>
                  <p>
                    We need a meticulous, hands-on Project Coordinator to act as the operational engine behind our client success. You will take the lead on managing complex EU funding proposals from concept to submission, ensuring our project pipelines run flawlessly.
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </span>
                  Responsibilities
                </h3>
                <div className="pl-10">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Manage complex EU funding proposals (Horizon Europe, EIC, etc.) from concept to final submission.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Coordinate and communicate effectively with cross-border research consortia and key stakeholders.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Ensure all project deliverables strictly adhere to EU compliance and administrative requirements.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Optimize and maintain our internal proposal pipelines and operational workflows.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Act as a domain expert to guide our engineering team in developing and refining our AI-powered proposal software.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* What We're Looking For */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5" />
                  </span>
                  What We're Looking For
                </h3>
                <div className="pl-10">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>Deep understanding of EU funding mechanisms and proposal structures.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>Exceptional organizational skills and a track record of managing complex, multi-stakeholder projects.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>Strong written and verbal communication skills; ability to align diverse international teams.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>A builder's mindset: comfortable operating in an early-stage, fast-paced environment and building processes from scratch.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Compensation */}
              <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 p-6 md:p-8 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </span>
                  Compensation and Pathway
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed pl-10">
                  <p>
                    The initial role is equity based with clearly agreed scope, vesting, commitment, and decision rights.
                  </p>
                  <p>
                    There is a defined pathway to a full-time salaried role when agreed funding or revenue milestones are reached.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Spec - Head of Growth */}
      <section className="py-8 px-4 pb-24 scroll-mt-24" id="head-of-growth">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-border pb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Founding Head of Growth (Marketing & Sales)</h2>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                    <Target className="w-4 h-4" /> Growth & Sales
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                    <Rocket className="w-4 h-4" /> Early Stage / Founding Team
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                    <Award className="w-4 h-4" /> Equity Based
                  </span>
                </div>
              </div>
              <a href="mailto:info@insightmatches.com?subject=Application%3A%20Founding%20Head%20of%20Growth" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shrink-0">
                Apply Now <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-10">
              {/* The Opportunity */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Rocket className="w-5 h-5" />
                  </span>
                  The Opportunity
                </h3>
                <div className="pl-10 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    InsightMatches is an AI-powered platform helping researchers develop Horizon Europe and Erasmus+ proposals.
                  </p>
                  <p>
                    We are looking for a relentless, strategic growth leader to own our Go-To-Market strategy. Your mission is to secure our first cohort of paid users and close high-ticket enterprise deals, laying the foundation for our commercial success.
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </span>
                  Responsibilities
                </h3>
                <div className="pl-10">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Own the Go-To-Market strategy and execute targeted campaigns to drive early revenue.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Identify, engage, and close high-ticket enterprise deals with research institutions, universities, and innovative SMEs across Europe.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Build and manage a robust B2B lead generation and sales pipeline.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Craft high-converting marketing materials and sales narratives tailored to the EU research ecosystem.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* What We're Looking For */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5" />
                  </span>
                  What We're Looking For
                </h3>
                <div className="pl-10">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>Proven track record in B2B enterprise sales, preferably within SaaS, EdTech, or research-adjacent sectors.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>Strategic thinker with the ability to seamlessly execute hands-on outbound sales and marketing campaigns.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>Excellent negotiation, pitching, and relationship-building skills.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>A builder's mindset: comfortable operating in an early-stage, ambiguous environment and scaling revenue from zero.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Compensation */}
              <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 p-6 md:p-8 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </span>
                  Compensation and Pathway
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed pl-10">
                  <p>
                    The initial role is equity based with clearly agreed scope, vesting, commitment, and decision rights.
                  </p>
                  <p>
                    There is a defined pathway to a full-time salaried role when agreed funding or revenue milestones are reached.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
