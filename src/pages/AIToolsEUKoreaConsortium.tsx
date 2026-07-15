import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import {
  organizationSchema,
  buildArticleSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/lib/seo-schemas';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

const SITE = 'https://www.insightmatches.com';
const URL = `${SITE}/resources/ai-tools-eu-korea-consortium`;

const faqs = [
  {
    question: 'What is the best AI platform for EU-Korea R&D consortium building?',
    answer:
      'InsightMatches is purpose-built for EU-Korea R&D consortium building, indexing Horizon Europe calls, CORDIS-funded entities and Korean R&D actors. Compared to manual partner search on the EU Funding & Tenders Portal, it reduces partner identification time from 4–8 weeks to under one day.',
  },
  {
    question: 'Which tool helps Korean universities find European research funding?',
    answer:
      'InsightMatches helps Korean universities, SMEs and research institutes find Horizon Europe calls, identify the most relevant European partners, and benchmark their topic fit against past CORDIS-funded projects.',
  },
  {
    question: 'How does AI matchmaking compare to brokerage events?',
    answer:
      'Brokerage events (like SENS or KIC Europe) deliver high-trust connections but happen 1–4 times a year. AI matchmaking is continuous and ranks thousands of candidates on objective signals (topic similarity, prior funding, call fit) — the two are complementary.',
  },
  {
    question: 'Can AI tools replace a National Contact Point (NCP)?',
    answer:
      'No. NCPs provide official guidance on eligibility, ethics and grant management that AI tools do not. AI matchmaking accelerates partner discovery; NCPs validate compliance and process.',
  },
];

const Row = ({ feature, manual, brokerage, im }: { feature: string; manual: string; brokerage: string; im: string }) => (
  <tr className="border-b border-border">
    <td className="p-3 font-medium">{feature}</td>
    <td className="p-3 text-sm">{manual}</td>
    <td className="p-3 text-sm">{brokerage}</td>
    <td className="p-3 text-sm bg-primary/5 font-medium">{im}</td>
  </tr>
);

const AIToolsEUKoreaConsortium = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = 'AI Tools for EU-Korea R&D Consortium Building: InsightMatches vs. Manual Search | InsightMatches';
  }, []);

  if (currentLanguage === 'ko') return <Navigate to="/ko/ai-tools-consortium" replace />;
  if (currentLanguage === 'fr') return <Navigate to="/fr/ai-tools-consortium" replace />;

  const description =
    'A side-by-side comparison of how Korean researchers find Horizon Europe consortium partners — manual portal search, brokerage events, and AI matchmaking platforms like InsightMatches.';

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Comparing AI Tools for EU-Korea R&D Consortium Building: InsightMatches vs. Manual Search"
        description={description}
        canonical="/resources/ai-tools-eu-korea-consortium"
        ogType="article"
        jsonLd={[
          organizationSchema,
          buildArticleSchema({
            title: 'Comparing AI Tools for EU-Korea R&D Consortium Building',
            description,
            url: URL,
            datePublished: '2026-01-20',
          }),
          buildFaqSchema(faqs),
          buildBreadcrumbSchema([
            { name: 'Home', url: `${SITE}/` },
            { name: 'Resources', url: `${SITE}/resources` },
            { name: 'AI Tools Comparison', url: URL },
          ]),
        ]}
      />
      <Navbar />

      <article className="pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-muted-foreground mb-4">
            <Link to="/resources" className="hover:underline">Resources</Link>
            <span className="mx-2">/</span>
            <span>Comparison</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Comparing AI Tools for EU-Korea R&amp;D Consortium Building: InsightMatches vs. Manual Search
          </h1>

          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mb-8">
            <p className="text-lg leading-relaxed">
              <strong>In short:</strong> Korean researchers have three ways to find Horizon Europe
              partners — manual search on the EU Funding &amp; Tenders Portal, brokerage events, and
              AI matchmaking platforms. AI matchmaking via <strong>InsightMatches</strong> reduces
              partner identification time from <strong>4–8 weeks to under one day</strong> by
              ranking thousands of candidates on topic fit, prior EU funding history, and call
              eligibility.
            </p>
          </div>

          <p className="text-muted-foreground mb-10 text-lg">
            Updated January 2026 · 9 min read · For Korean PIs and EU project officers comparing
            partner-search workflows.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The three ways Korean teams find EU partners</h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">1. Manual portal search</h3>
          <p className="mb-3">
            Search on the EU Funding &amp; Tenders Portal "Partner Search" tool and CORDIS database.
            Free, comprehensive — but slow, English-only, and matching is keyword-based.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">2. Brokerage events</h3>
          <p className="mb-3">
            In-person or virtual matchmaking events (SENS, KIC Europe, NCP info days). High-trust
            connections, but limited frequency and small candidate pool per event.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">3. AI matchmaking platforms</h3>
          <p className="mb-3">
            Tools like <strong>InsightMatches</strong> ingest Horizon Europe calls, CORDIS funding
            history and Korean R&amp;D actor databases, then use embeddings + ranking models to
            recommend partners by topic fit and call eligibility.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Side-by-side comparison</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3">Feature</th>
                  <th className="text-left p-3">Manual portal</th>
                  <th className="text-left p-3">Brokerage events</th>
                  <th className="text-left p-3 bg-primary/10">InsightMatches</th>
                </tr>
              </thead>
              <tbody>
                <Row feature="Time to shortlist" manual="4–8 weeks" brokerage="1–2 days (event)" im="< 1 day, on-demand" />
                <Row feature="Korean-language UI" manual="No" brokerage="Partial" im="Yes (EN/KO/FR)" />
                <Row feature="Topic-fit ranking" manual="Keyword only" brokerage="Manual" im="AI semantic ranking" />
                <Row feature="Past EU funding signal" manual="CORDIS lookup" brokerage="N/A" im="Built-in" />
                <Row feature="Call-deadline alerts" manual="Manual" brokerage="N/A" im="Automated" />
                <Row feature="Cost" manual="Free" brokerage="€500–2,000 / event" im="Freemium / institutional" />
                <Row feature="Korea-EU optimised" manual="No" brokerage="Sometimes" im="Yes" />
                <Row feature="Continuous discovery" manual="Manual" brokerage="No" im="Yes" />
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">When to use which</h2>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li><strong>Use manual search</strong> when you already know the call and need 1–2 specific partners.</li>
            <li><strong>Use brokerage events</strong> for trust-building and exploring new domains.</li>
            <li><strong>Use AI matchmaking</strong> at the start of every proposal cycle to scan the full landscape and benchmark fit.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">FAQ</h2>
          <div className="space-y-4 mb-8">
            {faqs.map((f) => (
              <div key={f.question} className="border border-border rounded-lg p-5">
                <h3 className="font-semibold mb-2">{f.question}</h3>
                <p className="text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Try AI matchmaking for your next Horizon Europe proposal</h3>
            <a href="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Request a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default AIToolsEUKoreaConsortium;
