import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { useTranslation } from '@/hooks/useTranslation';
import { organizationSchema, buildArticleSchema } from '@/lib/seo-schemas';
import {
  Globe2,
  Lightbulb,
  Users,
  Target,
  Calendar,
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Palette,
  ShieldCheck,
  Cpu,
  Leaf,
  Wheat,
} from 'lucide-react';

// Approx FX used for indicative KRW figures: 1 EUR ≈ 1,450 KRW
const clusters = [
  {
    icon: HeartPulse,
    name: 'Cluster 1 — Health',
    krw: '₩12.3조',
    eur: '€8.25B',
    description:
      'Tackles health challenges including pandemics, non-communicable diseases, healthcare systems, and digital health innovation.',
    topics: ['Pandemic preparedness', 'Cancer & chronic disease', 'Digital health & AI in care', 'Healthcare systems'],
  },
  {
    icon: Palette,
    name: 'Cluster 2 — Culture, Creativity & Inclusive Society',
    krw: '₩3.9조',
    eur: '€2.28B',
    description:
      'Strengthens democracy, cultural heritage, social innovation, and inclusive societies across the EU and partner countries.',
    topics: ['Democracy & governance', 'Cultural heritage', 'Social & economic transformations', 'Creative industries'],
  },
  {
    icon: ShieldCheck,
    name: 'Cluster 3 — Civil Security for Society',
    krw: '₩2.7조',
    eur: '€1.6B',
    description:
      'Protects citizens against crime, terrorism, disasters, and cybersecurity threats while securing infrastructure and borders.',
    topics: ['Cybersecurity', 'Disaster resilience', 'Border & external security', 'Fight against crime'],
  },
  {
    icon: Cpu,
    name: 'Cluster 4 — Digital, Industry & Space',
    krw: '₩22.6조',
    eur: '€15.35B',
    description:
      'Drives EU leadership in digital technologies, advanced manufacturing, AI, robotics, materials, and space — key for global competitiveness.',
    topics: ['AI, data & robotics', 'Advanced manufacturing', 'Next-gen internet & 6G', 'Space & Earth observation'],
  },
  {
    icon: Leaf,
    name: 'Cluster 5 — Climate, Energy & Mobility',
    krw: '₩22.6조',
    eur: '€15.12B',
    description:
      'Accelerates the green transition: clean energy, climate action, and sustainable, smart mobility for people and goods.',
    topics: ['Clean energy systems', 'Climate science & solutions', 'Smart mobility', 'Industrial decarbonisation'],
  },
  {
    icon: Wheat,
    name: 'Cluster 6 — Food, Bioeconomy, Natural Resources, Agriculture & Environment',
    krw: '₩13.4조',
    eur: '€8.95B',
    description:
      'Builds sustainable food systems, protects biodiversity, supports the circular bioeconomy, and safeguards land and ocean ecosystems.',
    topics: ['Sustainable food systems', 'Biodiversity & ecosystems', 'Circular bioeconomy', 'Ocean & water'],
  },
];

const facts = [
  { value: '₩78조', sub: '(€53.5B)', label: 'Pillar II total budget (2021–2027)' },
  { value: '6', sub: 'Thematic clusters', label: 'Covering health, climate, digital & more' },
  { value: '~50%', sub: 'of Horizon Europe', label: 'Largest pillar by budget share' },
  { value: '3+', sub: 'partners required', label: 'Transnational consortia from EU + Associated Countries' },
];

const HorizonEurope = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = 'Horizon Europe — Pillar II | InsightMatches';
  }, []);

  if (currentLanguage === 'ko') {
    return <Navigate to="/ko/horizon-europe" replace />;
  }
  if (currentLanguage === 'fr') {
    return <Navigate to="/fr/horizon-europe" replace />;
  }

  const description =
    'A focused guide to Horizon Europe Pillar II — Global Challenges & European Industrial Competitiveness. Six clusters, indicative budgets in KRW (EUR) and how Korean organisations get involved.';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO
        title="Horizon Europe Pillar II — Global Challenges & EU Industrial Competitiveness"
        description={description}
        canonical="/resources/horizon-europe"
        ogType="article"
        alternates={[
          { hreflang: 'en', href: 'https://www.insightmatches.com/resources/horizon-europe' },
          { hreflang: 'ko', href: 'https://www.insightmatches.com/ko/horizon-europe' },
          { hreflang: 'x-default', href: 'https://www.insightmatches.com/resources/horizon-europe' },
        ]}
        jsonLd={[
          organizationSchema,
          buildArticleSchema({
            title: 'Horizon Europe Pillar II — Global Challenges & EU Industrial Competitiveness',
            description,
            url: 'https://www.insightmatches.com/resources/horizon-europe',
            datePublished: '2026-01-15',
          }),
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Globe2 className="w-4 h-4" />
            Resources · Horizon Europe Pillar II
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-500 to-slate-500 bg-clip-text text-transparent">
            Pillar II — Global Challenges & European Industrial Competitiveness
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The largest pillar of Horizon Europe funds collaborative research and innovation across
            six thematic clusters — from health and climate to digital, security and the bioeconomy —
            to address society's biggest challenges and boost EU industrial competitiveness.
          </p>
        </div>
      </section>

      {/* Quick facts */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {facts.map((f) => (
            <div
              key={f.label}
              className="p-6 rounded-xl bg-card border border-border text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-slate-500 bg-clip-text text-transparent">
                {f.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{f.sub}</div>
              <div className="text-sm text-muted-foreground mt-2">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Six clusters, one mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pillar II represents roughly half of Horizon Europe's total €95.5B budget. It funds
            mission-driven, collaborative projects through six thematic clusters. All amounts below
            are indicative 2021–2027 budgets shown in <span className="font-semibold text-foreground">KRW (EUR)</span>.
          </p>
        </div>
      </section>

      {/* Clusters */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {clusters.map((c) => (
            <div
              key={c.name}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500/20 to-slate-500/20 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-slate-500 bg-clip-text text-transparent">
                    {c.krw}
                  </div>
                  <div className="text-xs text-muted-foreground">{c.eur}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{c.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{c.description}</p>
              <ul className="space-y-2 mt-auto">
                {c.topics.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="max-w-6xl mx-auto text-xs text-muted-foreground mt-4 text-center">
          Indicative figures based on the European Commission's Horizon Europe Strategic Plan. KRW values are converted at an approximate rate of 1 EUR ≈ 1,450 KRW and shown for reference only.
        </p>
      </section>

      {/* How to get in */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">How Korean organisations can join</h2>
          <div className="space-y-4">
            {[
              {
                icon: Calendar,
                title: 'Track Work Programmes & Calls',
                text: 'The European Commission publishes biennial Work Programmes that define topics and open calls for proposals on the Funding & Tenders Portal.',
              },
              {
                icon: Users,
                title: 'Join a Consortium',
                text: 'Most Pillar II actions require a transnational consortium of at least three partners from three different EU Member States or Associated Countries — Korean partners can join as Associated Partners.',
              },
              {
                icon: Target,
                title: 'Match with the Right Topic',
                text: 'Success depends on aligning your expertise with the right cluster, topic, and consortium. This is where InsightMatches can help.',
              },
              {
                icon: Lightbulb,
                title: 'Submit & Win',
                text: 'Proposals are evaluated by independent experts on excellence, impact, and quality and efficiency of implementation.',
              },
            ].map((step, i) => (
              <div key={step.title} className="flex gap-4 p-5 rounded-xl bg-card border border-border">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium mb-1">Step {i + 1}</div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl bg-gradient-to-br from-sky-500/10 to-slate-500/10 border border-border text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to tap into Pillar II funding?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            See how InsightMatches helps Korean organisations identify the right cluster, find EU
            consortium partners, and position themselves for Horizon Europe success. Book a personalised demo with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/request-demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-sky-500 to-slate-500 text-white shadow-lg hover:shadow-glow hover:scale-105 transition-all"
            >
              Request a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border border-border bg-card hover:bg-muted transition-colors"
            >
              Back to Resources
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HorizonEurope;
