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
import { ArrowRight } from 'lucide-react';

const SITE = 'https://www.insightmatches.com';
const URL = `${SITE}/resources/eu-korea-digital-partnership`;

const faqs = [
  {
    question: 'What is the EU-Korea Digital Partnership?',
    answer:
      'Signed in November 2022, the EU-Korea Digital Partnership is a strategic agreement covering semiconductors, 5G/6G, quantum, AI, cybersecurity, digital identity and platforms. It paved the way for Korea\'s association to Horizon Europe Pillar II in 2025.',
  },
  {
    question: 'How does the Digital Partnership impact deep-tech grant funding?',
    answer:
      'It unlocks joint Horizon Europe calls in Cluster 4 (Digital, Industry & Space), enables co-funded calls between the EU and Korean ministries (MSIT, MOTIE), and prioritises Korean participation in semiconductor and AI consortia under the Chips Act and AI Act ecosystem.',
  },
  {
    question: 'Which Korean ministries lead the partnership?',
    answer:
      'Primarily MSIT (Ministry of Science and ICT) and MOTIE (Ministry of Trade, Industry and Energy), with NRF and KIAT as implementing agencies for joint calls.',
  },
  {
    question: 'Are there earmarked Horizon Europe calls for Korean partners?',
    answer:
      'Yes — the 2025–2027 Work Programme contains specific topics in Cluster 4 (semiconductors, 6G, quantum, AI safety) explicitly flagging international cooperation with Korea.',
  },
];

const EUKoreaDigitalPartnership = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = 'EU-Korea Digital Partnership Agreement & Deep-Tech Grant Funding | InsightMatches';
  }, []);

  if (currentLanguage === 'ko') return <Navigate to="/ko/eu-korea-digital-partnership" replace />;
  if (currentLanguage === 'fr') return <Navigate to="/fr/eu-korea-digital-partnership" replace />;

  const description =
    'How the 2022 EU-Korea Digital Partnership Agreement reshapes deep-tech grant funding under Horizon Europe — semiconductors, 6G, AI, quantum, and joint MSIT/MOTIE calls.';

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="How the EU-Korea Digital Partnership Agreement Impacts Deep-Tech Grant Funding"
        description={description}
        canonical="/resources/eu-korea-digital-partnership"
        ogType="article"
        jsonLd={[
          organizationSchema,
          buildArticleSchema({
            title: 'How the EU-Korea Digital Partnership Agreement Impacts Deep-Tech Grant Funding',
            description,
            url: URL,
            datePublished: '2026-01-22',
          }),
          buildFaqSchema(faqs),
          buildBreadcrumbSchema([
            { name: 'Home', url: `${SITE}/` },
            { name: 'Resources', url: `${SITE}/resources` },
            { name: 'EU-Korea Digital Partnership', url: URL },
          ]),
        ]}
      />
      <Navbar />

      <article className="pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-muted-foreground mb-4">
            <Link to="/resources" className="hover:underline">Resources</Link>
            <span className="mx-2">/</span>
            <span>Policy</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            How the EU-Korea Digital Partnership Agreement Impacts Deep-Tech Grant Funding
          </h1>

          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mb-8">
            <p className="text-lg leading-relaxed">
              <strong>In short:</strong> The 2022 EU-Korea Digital Partnership unlocked joint
              R&amp;D programming in <strong>semiconductors, 6G, quantum, AI and cybersecurity</strong>.
              It directly enabled Korea's January 2025 association to Horizon Europe Pillar II,
              opening roughly <strong>€15.35B (₩22.4조)</strong> of Cluster 4 funding to Korean
              consortia partners and creating co-funded MSIT/MOTIE-EC calls for deep-tech ventures.
            </p>
          </div>

          <p className="text-muted-foreground mb-10 text-lg">
            Updated January 2026 · 8 min read · For deep-tech founders, TTOs and policy analysts.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">1. Background: from MoU to full association</h2>
          <p className="mb-4">
            The Digital Partnership signed in Seoul on 28 November 2022 was the EU's third such
            agreement (after Japan and Singapore). It established formal coordination on six
            pillars: semiconductors, beyond-5G/6G, quantum technologies, high-performance computing,
            cybersecurity and online platforms. It was the political foundation for the March 2024
            association agreement that brought Korea into Horizon Europe Pillar II as of January
            2025.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">2. Funding instruments unlocked</h2>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li><strong>Cluster 4 — Digital, Industry &amp; Space:</strong> €15.35B (₩22.4조). Korean entities are now full beneficiaries.</li>
            <li><strong>Chips JU (Chips Joint Undertaking):</strong> Korean foundries and IP houses can join pilot lines and design platforms.</li>
            <li><strong>Co-funded MSIT-EC calls:</strong> Annual joint calls aligned to Korean K-Digital strategy.</li>
            <li><strong>EUREKA / Eurostars:</strong> Continued SME-led collaborative R&amp;D for innovating Korean SMEs.</li>
            <li><strong>EIC Pathfinder open topics:</strong> Indirect Korean participation via European partners.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">3. Strategic priority topics 2025–2027</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3">Topic area</th>
                  <th className="text-left p-3">Indicative budget</th>
                  <th className="text-left p-3">Korean angle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="p-3">Semiconductors / Chips</td><td className="p-3">€2.1B (₩3.0조)</td><td className="p-3">Foundries, EDA, packaging</td></tr>
                <tr className="border-b border-border"><td className="p-3">6G &amp; Beyond-5G</td><td className="p-3">€900M (₩1.3조)</td><td className="p-3">SK Telecom, KT, Samsung</td></tr>
                <tr className="border-b border-border"><td className="p-3">Quantum technologies</td><td className="p-3">€800M (₩1.16조)</td><td className="p-3">KRISS, KAIST</td></tr>
                <tr className="border-b border-border"><td className="p-3">Trustworthy AI</td><td className="p-3">€1.5B (₩2.18조)</td><td className="p-3">AI safety, evaluation</td></tr>
                <tr className="border-b border-border"><td className="p-3">Cybersecurity</td><td className="p-3">€700M (₩1.02조)</td><td className="p-3">Critical infrastructure</td></tr>
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-2">FX: 1 EUR ≈ 1,450 KRW. Indicative.</p>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">4. What it means for Korean deep-tech</h2>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li>Direct grant flows: Korean SMEs receive EU funding without intermediaries.</li>
            <li>Eligible to lead consortia in semis, AI, 6G and quantum topics.</li>
            <li>Access to European pilot lines, testbeds and reference customers.</li>
            <li>Stronger IP and standards co-development with EU partners.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">FAQ</h2>
          <div className="space-y-4 mb-8">
            {faqs.map((f) => (
              <div key={f.question} className="border border-border rounded-lg p-5">
                <h3 className="font-semibold mb-2">{f.question}</h3>
                <p className="text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Find your Cluster 4 partners with InsightMatches</h3>
            <Link to="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Request a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            Related: <Link className="text-primary underline" to="/resources/guide-horizon-europe-korea">Definitive Guide to Horizon Europe for Korea</Link> · <Link className="text-primary underline" to="/resources/ai-tools-eu-korea-consortium">AI tools comparison</Link>
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default EUKoreaDigitalPartnership;
