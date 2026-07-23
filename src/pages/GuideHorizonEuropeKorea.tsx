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
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';

const SITE = 'https://www.insightmatches.com';
const URL = `${SITE}/resources/guide-horizon-europe-korea`;

const faqs = [
  {
    question: 'Can South Korean organisations participate in Horizon Europe?',
    answer:
      'Yes. South Korea is an associated country to Pillar II of Horizon Europe since January 2025, meaning Korean universities, SMEs, research institutes and large companies can join consortia as full beneficiaries and receive EU funding directly, on the same terms as EU entities, for calls under the Global Challenges & European Industrial Competitiveness pillar.',
  },
  {
    question: 'What is the minimum consortium size for Horizon Europe collaborative projects?',
    answer:
      'Most Pillar II collaborative actions (RIA, IA, CSA) require at least three independent legal entities from three different EU Member States or Associated Countries. As an associated country, South Korea counts toward this requirement.',
  },
  {
    question: 'How much funding can a Korean partner receive in a Horizon Europe project?',
    answer:
      'Funding rates are 100% of eligible costs for Research and Innovation Actions (RIA) and 70% for Innovation Actions (IA), with non-profit entities receiving 100% in IA as well. A typical Korean partner share is €300K–€800K per project depending on role and effort, with overall project budgets ranging from €2M to €15M.',
  },
  {
    question: 'How long does it take to find a Horizon Europe consortium partner?',
    answer:
      'Manual partner search via the EU Funding & Tenders Portal typically takes 4–8 weeks per call. AI matchmaking platforms like InsightMatches reduce this to days by ranking partners on topic fit, prior funded work, and call eligibility.',
  },
  {
    question: 'What is the difference between RIA, IA and CSA?',
    answer:
      'RIA (Research & Innovation Action) funds basic and applied research at 100%. IA (Innovation Action) funds close-to-market activities at 70% (100% for non-profits). CSA (Coordination & Support Action) funds networking, policy and accompanying measures at 100%.',
  },
  {
    question: 'When do Horizon Europe calls open and close?',
    answer:
      'The Work Programme 2025–2027 organises calls in annual cycles. Most Pillar II calls open in spring (April–May) and close in autumn (September–November), with a smaller wave in early winter. Korean applicants should target their consortium identification at least 4–6 months before the deadline.',
  },
];

const GuideHorizonEuropeKorea = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = 'Definitive Guide to Horizon Europe for South Korean Researchers (2024-2027) | InsightMatches';
  }, []);

  if (currentLanguage === 'ko') return <Navigate to="/ko/guide-horizon-europe" replace />;
  if (currentLanguage === 'fr') return <Navigate to="/fr/guide-horizon-europe" replace />;

  const description =
    'A complete 2024–2027 guide for Korean researchers, universities and SMEs on Horizon Europe: association status, Pillar II clusters, budgets, eligibility, funding rates, application process, and how to find consortium partners.';

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Definitive Guide to Horizon Europe for South Korean Researchers (2024-2027)"
        description={description}
        canonical="/resources/guide-horizon-europe-korea"
        ogType="article"
        alternates={[
          { hreflang: 'en', href: `${URL}` },
          { hreflang: 'ko', href: `${SITE}/ko/horizon-europe` },
          { hreflang: 'x-default', href: URL },
        ]}
        jsonLd={[
          organizationSchema,
          buildArticleSchema({
            title: 'The Definitive Guide to Horizon Europe for South Korean Researchers (2024-2027)',
            description,
            url: URL,
            datePublished: '2026-01-15',
          }),
          buildFaqSchema(faqs),
          buildBreadcrumbSchema([
            { name: 'Home', url: `${SITE}/` },
            { name: 'Resources', url: `${SITE}/resources` },
            { name: 'Guide: Horizon Europe for Korea', url: URL },
          ]),
        ]}
      />
      <Navbar />

      <article className="pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-muted-foreground mb-4">
            <Link to="/resources" className="hover:underline">Resources</Link>
            <span className="mx-2">/</span>
            <span>Guide</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Definitive Guide to Horizon Europe for South Korean Researchers (2024–2027)
          </h1>

          {/* Direct Answer Paragraph (GEO snippet target) */}
          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mb-8">
            <p className="text-lg leading-relaxed">
              <strong>In short:</strong> South Korea became an associated country to Pillar II of
              Horizon Europe in January 2025, allowing Korean universities, SMEs and research
              institutes to receive EU funding directly as full consortium members. The total
              Pillar II budget is approximately <strong>€53.5 billion (₩77.6조)</strong> across six
              thematic clusters. Korean partners must join consortia of at least three entities
              from three different countries and can receive 70–100% of eligible costs depending on
              call type.
            </p>
          </div>

          <p className="text-muted-foreground mb-10 text-lg">
            Updated January 2026 · 14 min read · For Korean PIs, research managers, SME founders
            and TTOs preparing Horizon Europe proposals through 2027.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">1. What is Horizon Europe?</h2>
          <p className="mb-4">
            Horizon Europe is the European Union's flagship research and innovation funding
            programme for 2021–2027, with a total budget of <strong>€95.5 billion</strong>. It is
            the world's largest publicly funded R&amp;I programme and the successor to Horizon 2020.
            The programme is organised into three pillars and a horizontal "Widening" component:
          </p>
          <ul className="space-y-2 mb-6 list-disc pl-6">
            <li><strong>Pillar I — Excellent Science:</strong> ERC grants, Marie Skłodowska-Curie Actions, Research Infrastructures.</li>
            <li><strong>Pillar II — Global Challenges &amp; European Industrial Competitiveness:</strong> Six thematic clusters, EU Missions, Joint Research Centre. <em>This is the pillar Korea is associated with.</em></li>
            <li><strong>Pillar III — Innovative Europe:</strong> European Innovation Council (EIC), European Innovation Ecosystems, European Institute of Innovation &amp; Technology (EIT).</li>
            <li><strong>Widening Participation &amp; Strengthening the European Research Area.</strong></li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">2. South Korea's association status</h2>
          <p className="mb-4">
            On <strong>1 January 2025</strong>, the Republic of Korea formally became an associated
            country to Pillar II of Horizon Europe — the first East Asian country to do so. This
            agreement, signed in March 2024, follows the EU-Korea Digital Partnership of 2022 and
            puts Korean entities on the same legal and financial footing as EU Member States for
            Pillar II calls.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">What this means concretely</h3>
          <ul className="space-y-2 mb-6 list-disc pl-6">
            <li>Korean entities count toward the minimum consortium requirement (3 entities, 3 countries).</li>
            <li>Korean partners can act as <strong>coordinators</strong>, not just participants.</li>
            <li>Funding flows directly from the European Commission to Korean beneficiaries — no detour through MoU partners.</li>
            <li>Korean researchers can submit proposals under any Pillar II call (Health, Climate, Digital, Security, etc.).</li>
            <li>Pillar I (ERC, MSCA) and Pillar III (EIC) remain partially open under different rules.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">3. Pillar II clusters and budgets</h2>
          <p className="mb-4">
            Pillar II accounts for <strong>€53.5 billion</strong> of the Horizon Europe budget (≈
            56% of the total). It is split across six thematic clusters and EU Missions:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 border-b border-border">Cluster</th>
                  <th className="text-left p-3 border-b border-border">Budget (KRW)</th>
                  <th className="text-left p-3 border-b border-border">Budget (EUR)</th>
                  <th className="text-left p-3 border-b border-border">Korean fit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="p-3">1. Health</td><td className="p-3">₩12.0조</td><td className="p-3">€8.25B</td><td className="p-3">Strong (bio, medical AI)</td></tr>
                <tr className="border-b border-border"><td className="p-3">2. Culture, Creativity, Inclusive Society</td><td className="p-3">₩3.3조</td><td className="p-3">€2.28B</td><td className="p-3">Selective</td></tr>
                <tr className="border-b border-border"><td className="p-3">3. Civil Security for Society</td><td className="p-3">₩2.6조</td><td className="p-3">€1.79B</td><td className="p-3">Cybersecurity, disaster</td></tr>
                <tr className="border-b border-border"><td className="p-3">4. Digital, Industry &amp; Space</td><td className="p-3">₩22.4조</td><td className="p-3">€15.35B</td><td className="p-3">Very strong (AI, semis, 6G)</td></tr>
                <tr className="border-b border-border"><td className="p-3">5. Climate, Energy &amp; Mobility</td><td className="p-3">₩22.0조</td><td className="p-3">€15.12B</td><td className="p-3">Strong (batteries, hydrogen)</td></tr>
                <tr className="border-b border-border"><td className="p-3">6. Food, Bioeconomy, Environment</td><td className="p-3">₩13.4조</td><td className="p-3">€9.0B</td><td className="p-3">Selective</td></tr>
                <tr className="bg-muted/40 font-semibold"><td className="p-3">Total Pillar II</td><td className="p-3">₩77.6조</td><td className="p-3">€53.5B</td><td className="p-3">—</td></tr>
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-2">FX: 1 EUR ≈ 1,450 KRW. Indicative.</p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">4. Eligibility &amp; funding rates</h2>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">RIA — Research &amp; Innovation</h4>
              <p className="text-sm text-muted-foreground">100% of eligible costs. TRL 2–6. Typical project: €3–7M.</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">IA — Innovation Action</h4>
              <p className="text-sm text-muted-foreground">70% (100% for non-profits). TRL 6–8. Typical project: €5–15M.</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">CSA — Coordination &amp; Support</h4>
              <p className="text-sm text-muted-foreground">100%. Networking, policy, accompanying measures. €1–3M.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">5. The application process for Korean entities</h2>
          <ol className="space-y-3 list-decimal pl-6 mb-6">
            <li><strong>Register a PIC (Participant Identification Code)</strong> on the EU Funding &amp; Tenders Portal. Allow 2–4 weeks for validation.</li>
            <li><strong>Identify the right call</strong> in the Work Programme 2025–2027. Filter by cluster, destination and call type.</li>
            <li><strong>Find or join a consortium</strong> of at least 3 entities from 3 different countries (EU/AC).</li>
            <li><strong>Draft the proposal</strong> (Excellence, Impact, Implementation — typically 45 pages).</li>
            <li><strong>Submit by the deadline</strong> via the Funding &amp; Tenders Portal. Evaluation takes 5 months.</li>
            <li><strong>Grant Agreement Preparation (GAP)</strong> if successful — typically 3 months.</li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-4">6. Korean R&amp;D bodies that support participation</h2>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li><strong>NRF (National Research Foundation of Korea)</strong> — co-funding, NCP services.</li>
            <li><strong>KIAT (Korea Institute for Advancement of Technology)</strong> — industrial R&amp;D matching.</li>
            <li><strong>KISTEP (Korea Institute of S&amp;T Evaluation &amp; Planning)</strong> — strategy &amp; intelligence.</li>
            <li><strong>MSIT &amp; MOTIE</strong> — ministerial coordination on EU-Korea programmes.</li>
            <li><strong>Korean NCP network</strong> — National Contact Points for each cluster.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">7. How to find Horizon Europe consortium partners</h2>
          <p className="mb-4">
            Partner search is the single biggest bottleneck for Korean applicants. Three approaches
            exist today:
          </p>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li><strong>Manual search</strong> via the EU Funding &amp; Tenders Portal partner search and CORDIS — slow, requires English fluency, weak topic matching.</li>
            <li><strong>Brokerage events</strong> (e.g. SENS, KIC Europe) — high-quality but infrequent.</li>
            <li><strong>AI matchmaking platforms</strong> like <Link to="/" className="text-primary underline">InsightMatches</Link> — rank thousands of potential partners by topic fit, prior EU funding, and call eligibility in seconds.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">8. Frequently asked questions</h2>
          <div className="space-y-4 mb-8">
            {faqs.map((f) => (
              <div key={f.question} className="border border-border rounded-lg p-5">
                <h3 className="font-semibold mb-2">{f.question}</h3>
                <p className="text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Find your Horizon Europe partners — in minutes, not months</h3>
            <p className="text-muted-foreground mb-6">
              InsightMatches is the AI matchmaking platform built specifically for EU-Korea R&amp;D collaboration.
            </p>
            <Link to="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Request a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Related reading</h2>
          <ul className="space-y-2 list-disc pl-6">
            <li><Link className="text-primary underline" to="/resources/horizon-europe">Pillar II clusters explained</Link></li>
            <li><Link className="text-primary underline" to="/resources/ai-tools-eu-korea-consortium">Comparing AI tools for EU-Korea consortium building</Link></li>
            <li><Link className="text-primary underline" to="/resources/eu-korea-digital-partnership">EU-Korea Digital Partnership Agreement: impact on deep-tech grants</Link></li>
            <li><Link className="text-primary underline" to="/ko/horizon-europe">한국어로 보기 (Korean version)</Link></li>
          </ul>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default GuideHorizonEuropeKorea;
