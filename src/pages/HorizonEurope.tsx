import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { useTranslation } from '@/hooks/useTranslation';
import { organizationSchema, buildArticleSchema } from '@/lib/seo-schemas';
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Cpu,
  FileCheck2,
  FlaskConical,
  Globe2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  Lightbulb,
  Network,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wheat,
} from 'lucide-react';

const EUR_TO_KRW = 1450;
const formatKrwTrillion = (eurBillions: number) => `₩${(eurBillions * EUR_TO_KRW / 1000).toFixed(1)}조`;

interface Cluster {
  icon: LucideIcon;
  name: string;
  shortName: string;
  eurBillions: number;
  description: string;
  topics: string[];
  organisations: string;
  consortiumRole: string;
}

const clusters: Cluster[] = [
  {
    icon: HeartPulse,
    name: 'Cluster 1: Health',
    shortName: 'Health',
    eurBillions: 8.25,
    description: 'Tackles major health challenges, healthcare systems and digital health innovation.',
    topics: ['Pandemic preparedness', 'Cancer and chronic disease', 'Digital health and AI in care', 'Healthcare systems'],
    organisations: 'Biotech, medtech, hospitals, universities and public health organisations',
    consortiumRole: 'Clinical validation, health technology, research or pilot site partner',
  },
  {
    icon: Palette,
    name: 'Cluster 2: Culture, Creativity and Inclusive Society',
    shortName: 'Culture and Society',
    eurBillions: 2.28,
    description: 'Strengthens democracy, cultural heritage, social innovation and inclusive societies.',
    topics: ['Democracy and governance', 'Cultural heritage', 'Social and economic transformation', 'Creative industries'],
    organisations: 'Universities, cultural institutions, creative companies and public bodies',
    consortiumRole: 'Research, community engagement, policy validation or creative technology partner',
  },
  {
    icon: ShieldCheck,
    name: 'Cluster 3: Civil Security for Society',
    shortName: 'Civil Security',
    eurBillions: 1.6,
    description: 'Protects citizens, infrastructure and borders against crime, disasters and cyber threats.',
    topics: ['Cybersecurity', 'Disaster resilience', 'Border and external security', 'Fight against crime'],
    organisations: 'Cybersecurity companies, emergency services, infrastructure operators and research institutes',
    consortiumRole: 'Technology provider, operational end user, test site or security research partner',
  },
  {
    icon: Cpu,
    name: 'Cluster 4: Digital, Industry and Space',
    shortName: 'Digital and Industry',
    eurBillions: 15.35,
    description: 'Advances AI, robotics, manufacturing, materials, digital infrastructure and space technologies.',
    topics: ['AI, data and robotics', 'Advanced manufacturing', 'Next generation internet and 6G', 'Space and Earth observation'],
    organisations: 'Deep tech companies, manufacturers, universities, RTOs and infrastructure operators',
    consortiumRole: 'Core technology provider, industrial pilot, systems integrator or research partner',
  },
  {
    icon: Leaf,
    name: 'Cluster 5: Climate, Energy and Mobility',
    shortName: 'Climate and Energy',
    eurBillions: 15.12,
    description: 'Accelerates climate action, clean energy and sustainable, intelligent mobility.',
    topics: ['Clean energy systems', 'Climate science and solutions', 'Smart mobility', 'Industrial decarbonisation'],
    organisations: 'Energy companies, mobility providers, cities, manufacturers and climate researchers',
    consortiumRole: 'Demonstration partner, technology provider, asset owner or impact specialist',
  },
  {
    icon: Wheat,
    name: 'Cluster 6: Food, Bioeconomy, Natural Resources, Agriculture and Environment',
    shortName: 'Food and Bioeconomy',
    eurBillions: 8.95,
    description: 'Builds sustainable food systems, protects biodiversity and supports a circular bioeconomy.',
    topics: ['Sustainable food systems', 'Biodiversity and ecosystems', 'Circular bioeconomy', 'Ocean and water'],
    organisations: 'Agritech companies, food producers, environmental organisations and research institutes',
    consortiumRole: 'Technology provider, field trial partner, value chain participant or research partner',
  },
];

const facts = [
  { value: formatKrwTrillion(53.5), sub: '(€53.5B)', label: 'Indicative Pillar II budget for 2021 to 2027' },
  { value: '6', sub: 'thematic clusters', label: 'Health, society, security, digital, climate and food' },
  { value: '~56%', sub: 'of the original €95.5B programme', label: 'The largest Horizon Europe pillar' },
  { value: '3+', sub: 'independent organisations', label: 'The standard minimum for many collaborative actions' },
];

const organisationProfiles = [
  {
    icon: Building2,
    title: 'Company or startup',
    role: 'Technology provider and commercialisation partner',
    text: 'Bring a differentiated technology, define a credible use case and join pilots led by European industry or research partners.',
    fit: 'Often strongest in Clusters 3, 4, 5 and 6',
  },
  {
    icon: GraduationCap,
    title: 'University',
    role: 'Research and work package partner',
    text: 'Contribute scientific expertise, methodology, researchers, facilities and publication or training capacity.',
    fit: 'Potential relevance across all six clusters',
  },
  {
    icon: FlaskConical,
    title: 'Research institute',
    role: 'Research, validation and demonstration partner',
    text: 'Bridge applied research and deployment through testing infrastructure, technical validation and impact measurement.',
    fit: 'Potential relevance across all six clusters',
  },
  {
    icon: Landmark,
    title: 'Public organisation',
    role: 'Challenge owner, pilot site or end user',
    text: 'Define real operational needs, provide implementation environments and support policy or public sector adoption.',
    fit: 'Often strongest in Clusters 1, 2, 3 and 5',
  },
];

const participationSteps = [
  {
    icon: Search,
    title: 'Choose a cluster',
    action: 'Map your technology and project ambition to the most relevant Pillar II cluster.',
    challenge: 'Strong technology can still be a poor fit when it is framed against the wrong policy objective.',
    support: 'InsightMatches structures your organisation profile around capabilities, use cases and intended impact.',
  },
  {
    icon: Calendar,
    title: 'Find the right call',
    action: 'Review the official Work Programmes and identify a topic that matches your maturity and objectives.',
    challenge: 'Calls contain specific scope, outcome, eligibility and consortium requirements.',
    support: 'InsightMatches supports funding discovery and helps assess the relevance of potential opportunities.',
  },
  {
    icon: Network,
    title: 'Build the consortium',
    action: 'Define the capabilities required and assemble independent partners from eligible countries.',
    challenge: 'Most collaborative actions need complementary research, industry and end user organisations.',
    support: 'InsightMatches supports partner discovery, invitations and consortium development.',
  },
  {
    icon: FileCheck2,
    title: 'Prepare the proposal',
    action: 'Develop the concept, work plan, budget, impact pathway and submission package.',
    challenge: 'Proposals are evaluated on excellence, impact and implementation quality.',
    support: 'InsightMatches supports proposal structuring, drafting and submission readiness.',
  },
];

const proofPoints = [
  { value: '6,000+', label: 'teams in the InsightMatches community and waitlist' },
  { value: 'Top 20', label: 'company in the 2025 K Startup Grand Challenge' },
  { value: 'K Scouter', label: 'selected company supporting global startup growth' },
];

const HorizonEurope = () => {
  const { currentLanguage } = useTranslation();
  const [selectedCluster, setSelectedCluster] = useState(3);
  const [selectedOrganisation, setSelectedOrganisation] = useState(0);
  const [selectedStep, setSelectedStep] = useState(0);

  if (currentLanguage === 'ko') return <Navigate to="/ko/horizon-europe" replace />;
  if (currentLanguage === 'fr') return <Navigate to="/fr/horizon-europe" replace />;

  const description = 'A practical guide to Horizon Europe Pillar II for Korean organisations, including clusters, indicative budgets, consortium roles and the steps required to participate.';
  const activeCluster = clusters[selectedCluster];
  const ActiveClusterIcon = activeCluster.icon;
  const activeOrganisation = organisationProfiles[selectedOrganisation];
  const ActiveOrganisationIcon = activeOrganisation.icon;
  const activeStep = participationSteps[selectedStep];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-background via-card to-background">
      <SEO
        title="Horizon Europe Pillar II for Korean Organisations | InsightMatches"
        description={description}
        canonical="/resources/horizon-europe"
        ogType="article"
        alternates={[
          { hreflang: 'en', href: 'https://www.insightmatches.com/resources/horizon-europe' },
          { hreflang: 'ko', href: 'https://www.insightmatches.com/ko/horizon-europe' },
          { hreflang: 'fr', href: 'https://www.insightmatches.com/fr/horizon-europe' },
          { hreflang: 'x-default', href: 'https://www.insightmatches.com/resources/horizon-europe' },
        ]}
        jsonLd={[
          organizationSchema,
          buildArticleSchema({
            title: 'Horizon Europe Pillar II for Korean Organisations',
            description,
            url: 'https://www.insightmatches.com/resources/horizon-europe',
            datePublished: '2026-01-15',
          }),
        ]}
      />
      <Navbar />

      <main>
        <section className="relative px-4 pb-16 pt-28 md:pb-20 md:pt-36">
          <div aria-hidden="true" className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-4 py-2 text-sm font-medium text-primary backdrop-blur">
              <Globe2 aria-hidden="true" className="h-4 w-4" />
              Horizon Europe for Korean organisations
            </div>
            <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Access Europe&apos;s largest collaborative <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">research funding ecosystem</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Korea is associated with Horizon Europe Pillar II. Eligible Korean organisations can join European consortia, contribute their technology and expertise, and receive EU grant funding subject to each call&apos;s conditions.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/request-demo" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 to-blue-700 px-7 py-3 font-semibold text-white shadow-lg transition-shadow duration-200 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                Request a Demo <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <a href="#cluster-explorer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-card px-7 py-3 font-semibold transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                Explore Pillar II <ChevronRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section aria-label="Pillar II quick facts" className="px-4 pb-20">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:grid-cols-4">
            {facts.map((fact, index) => (
              <div key={fact.label} className={`p-5 text-center md:p-7 ${index % 2 === 0 ? 'border-r border-border' : ''} ${index < 2 ? 'border-b border-border md:border-b-0' : ''} ${index === 1 ? 'md:border-r' : ''} ${index === 2 ? 'md:border-r' : ''}`}>
                <dt className="text-2xl font-bold text-primary md:text-3xl">{fact.value}</dt>
                <dd className="mt-1 text-xs font-medium text-foreground md:text-sm">{fact.sub}</dd>
                <dd className="mt-2 text-xs leading-relaxed text-muted-foreground">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="cluster-explorer" className="scroll-mt-24 px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Interactive cluster explorer</div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Six clusters. Different pathways to impact.</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Compare the indicative budgets, then select a cluster to explore its themes and the role your organisation could play.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div role="tablist" aria-label="Pillar II clusters" className="space-y-2">
                {clusters.map((cluster, index) => {
                  const Icon = cluster.icon;
                  const selected = selectedCluster === index;
                  return (
                    <button
                      key={cluster.name}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-controls="cluster-detail"
                      onClick={() => setSelectedCluster(index)}
                      className={`group w-full cursor-pointer rounded-xl border p-4 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${selected ? 'border-primary bg-primary/5' : 'border-border bg-card hover:border-primary/40 hover:bg-muted/50'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${selected ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                          <Icon aria-hidden="true" className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <span className="truncate font-semibold">{cluster.shortName}</span>
                            <span className="shrink-0 text-sm font-bold text-primary">€{cluster.eurBillions}B</span>
                          </div>
                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                            <div className="h-full rounded-full bg-gradient-to-r from-sky-500 to-blue-700 transition-[width] duration-500 motion-reduce:transition-none" style={{ width: `${(cluster.eurBillions / 15.35) * 100}%` }} />
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div id="cluster-detail" role="tabpanel" aria-live="polite" className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-6 shadow-lg md:p-8">
                <div aria-hidden="true" className="absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <ActiveClusterIcon aria-hidden="true" className="h-7 w-7" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-primary">Selected cluster</div>
                        <h3 className="mt-1 text-2xl font-bold leading-tight">{activeCluster.name}</h3>
                      </div>
                    </div>
                    <div className="shrink-0 rounded-xl bg-primary/5 px-4 py-3 text-left sm:text-right">
                      <div className="text-2xl font-bold text-primary">€{activeCluster.eurBillions}B</div>
                      <div className="text-sm text-muted-foreground">Approx. {formatKrwTrillion(activeCluster.eurBillions)}</div>
                    </div>
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">{activeCluster.description}</p>
                  <div className="mt-7 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Example themes</h4>
                      <ul className="mt-3 space-y-2">
                        {activeCluster.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-xl border border-border bg-background/70 p-4">
                        <div className="text-xs font-semibold uppercase tracking-wider text-primary">Potential participants</div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeCluster.organisations}</p>
                      </div>
                      <div className="rounded-xl border border-border bg-background/70 p-4">
                        <div className="text-xs font-semibold uppercase tracking-wider text-primary">Potential consortium role</div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeCluster.consortiumRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">Indicative 2021 to 2027 figures. KRW estimates use €1 ≈ ₩1,450 and are provided for orientation only.</p>
          </div>
        </section>

        <section className="border-y border-border bg-muted/30 px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Where could you fit?</div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Start with your organisation&apos;s role</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Choose the profile closest to your organisation to see a practical starting position. This is general guidance, not an eligibility assessment.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" role="tablist" aria-label="Organisation types">
              {organisationProfiles.map((profile, index) => {
                const Icon = profile.icon;
                const selected = selectedOrganisation === index;
                return (
                  <button key={profile.title} type="button" role="tab" aria-selected={selected} aria-controls="organisation-fit" onClick={() => setSelectedOrganisation(index)} className={`cursor-pointer rounded-xl border p-4 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${selected ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card hover:border-primary/40'}`}>
                    <Icon aria-hidden="true" className="mb-4 h-6 w-6" />
                    <span className="font-semibold">{profile.title}</span>
                  </button>
                );
              })}
            </div>
            <div id="organisation-fit" role="tabpanel" aria-live="polite" className="mt-4 grid gap-6 rounded-2xl border border-border bg-card p-6 md:grid-cols-[auto_1fr_1fr] md:items-center md:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary"><ActiveOrganisationIcon aria-hidden="true" className="h-7 w-7" /></div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">Likely consortium role</div>
                <h3 className="mt-2 text-xl font-bold">{activeOrganisation.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeOrganisation.text}</p>
              </div>
              <div className="rounded-xl bg-primary/5 p-4 text-sm font-medium text-primary">{activeOrganisation.fit}</div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Illustrative project pathway</div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">From Korean technology to a European project</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">This hypothetical example shows how an existing capability can be reframed around a Horizon Europe challenge.</p>
            </div>
            <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
              {[
                { label: 'Existing capability', value: 'Energy efficient edge AI for industrial monitoring', icon: Cpu },
                { label: 'Relevant programme area', value: 'Cluster 4: Digital, Industry and Space', icon: Globe2 },
                { label: 'Hypothetical project', value: 'Federated edge intelligence for safer, lower energy industrial sites', icon: Sparkles },
                { label: 'Potential role', value: 'Technology provider and industrial pilot partner', icon: Network },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="contents">
                    <div className="rounded-2xl border border-border bg-card p-5">
                      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon aria-hidden="true" className="h-5 w-5" /></div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-primary">{item.label}</div>
                      <p className="mt-2 text-sm font-semibold leading-relaxed">{item.value}</p>
                    </div>
                    {index < 3 && <div aria-hidden="true" className="flex rotate-90 items-center justify-center text-primary lg:rotate-0"><ArrowRight className="h-5 w-5" /></div>}
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Illustrative only. A real recommendation must be validated against the official call text, eligibility conditions and consortium requirements.</p>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Participation journey</div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Four stages from ambition to submission</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-4" role="tablist" aria-label="Participation steps">
              {participationSteps.map((step, index) => {
                const Icon = step.icon;
                const selected = selectedStep === index;
                return (
                  <button key={step.title} type="button" role="tab" aria-selected={selected} aria-controls="step-detail" onClick={() => setSelectedStep(index)} className={`cursor-pointer rounded-xl border p-5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${selected ? 'border-primary bg-primary/5' : 'border-border bg-card hover:border-primary/40'}`}>
                    <div className="flex items-center justify-between">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${selected ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}><Icon aria-hidden="true" className="h-5 w-5" /></div>
                      <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                    </div>
                    <div className="mt-5 font-semibold">{step.title}</div>
                  </button>
                );
              })}
            </div>
            <div id="step-detail" role="tabpanel" aria-live="polite" className="mt-4 grid gap-5 rounded-2xl border border-border bg-card p-6 md:grid-cols-3 md:p-8">
              <div><div className="text-xs font-semibold uppercase tracking-wider text-primary">What you do</div><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeStep.action}</p></div>
              <div><div className="text-xs font-semibold uppercase tracking-wider text-primary">Common challenge</div><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeStep.challenge}</p></div>
              <div className="rounded-xl bg-primary/5 p-4"><div className="text-xs font-semibold uppercase tracking-wider text-primary">How InsightMatches supports you</div><p className="mt-2 text-sm leading-relaxed text-foreground">{activeStep.support}</p></div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20">
          <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-slate-950 p-7 text-white md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
              <div><div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">Built for global collaboration</div><h2 className="mt-3 text-3xl font-bold">A growing network around research and innovation</h2></div>
              <dl className="grid gap-3 sm:grid-cols-3">
                {proofPoints.map((point) => <div key={point.value} className="rounded-xl border border-white/10 bg-white/5 p-4"><dt className="text-2xl font-bold text-sky-400">{point.value}</dt><dd className="mt-2 text-xs leading-relaxed text-slate-300">{point.label}</dd></div>)}
              </dl>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20">
          <div className="mx-auto max-w-4xl rounded-2xl border border-primary/20 bg-gradient-to-br from-sky-500/10 to-blue-700/10 p-8 text-center md:p-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Discuss your Horizon Europe fit</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">See how InsightMatches supports funding discovery, European partner identification, consortium development and proposal preparation for your organisation.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/request-demo" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 to-blue-700 px-8 py-3 font-semibold text-white shadow-lg transition-shadow duration-200 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Request a Demo <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
              <Link to="/resources" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-card px-8 py-3 font-semibold transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Back to Resources</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HorizonEurope;
