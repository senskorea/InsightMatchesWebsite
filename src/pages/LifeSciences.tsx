import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Dna,
  Clock,
  ShieldCheck,
  Banknote,
  FlaskConical,
  Microscope,
  Activity,
  CheckCircle2,
  Globe,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { useTranslation } from '@/hooks/useTranslation';
import type { Language } from '@/translations';

const CALENDAR_URL = 'https://calendar.app.google/ukQe5T1754RKVPedA';
const EUR_TO_KRW = 1450;

/* -------- Locale-aware money -------- */
function formatMoney(eurAmount: number, lang: Language): string {
  if (lang === 'ko') {
    const krw = eurAmount * EUR_TO_KRW;
    if (krw >= 1e12) return `₩${(krw / 1e12).toFixed(1)}조`;
    if (krw >= 1e8) return `₩${Math.round(krw / 1e8).toLocaleString('ko-KR')}억`;
    return `₩${Math.round(krw).toLocaleString('ko-KR')}`;
  }
  if (eurAmount >= 1e9) {
    const v = eurAmount / 1e9;
    return `€${(v % 1 === 0 ? v.toFixed(0) : v.toFixed(1))}B`;
  }
  if (eurAmount >= 1e6) {
    const v = eurAmount / 1e6;
    return `€${(v % 1 === 0 ? v.toFixed(0) : v.toFixed(1))}M`;
  }
  return `€${eurAmount.toLocaleString('en-IE')}`;
}

/* -------- Copy per locale -------- */
type Copy = ReturnType<typeof getCopy>;
function getCopy(lang: Language) {
  if (lang === 'ko') {
    return {
      audience: '바이오텍 · CDMO · 원료의약품 제조사 대상',
      h1a: '유럽 지분 희석 없는 자금으로 ',
      h1b: '바이오텍의 다음 혁신을',
      h1c: ' 이끄세요.',
      sub: 'Horizon Europe 파트너 매칭과 제안서 작성 기간을 3개월에서 며칠로 단축합니다.',
      ctaPrimary: '자격 확인하기',
      ctaSecondary: '2026년 공고 보기',
      keyStats: [
        { k: 'budget', label: 'Horizon Europe 총 예산' },
        { k: 'avg', label: '평균 프로젝트 규모' },
        { k: 'equity', label: '지분 요구', overrideValue: '0%' },
        { k: 'days', label: '컨소시엄 구성 기간', overrideValue: '3일' },
      ],
      painH: '핵심 연구 인력을 R&D에서 빼내지 마세요.',
      painP:
        '100페이지 분량의 EU 제안서 작성은 가장 값비싼 인력의 시간을 소진합니다. 학계·산업계 컨소시엄 파트너를 찾는 것만으로도 몇 분기의 R&D 속도를 잃게 됩니다.',
      guaranteeTag: '보장 사항',
      guaranteeP1: 'AI를 활용해 컨소시엄을 구성하고 제안서를 작성합니다. ',
      guaranteeP2: '컨소시엄 확보에 실패하면 플랫폼 수수료를 받지 않습니다.',

      marketH: '세계 최대 규모의 R&D 펀드',
      marketP:
        'Horizon Europe은 유럽 시장 진입의 핵심 통로입니다. 대한민국의 준회원국 가입으로 생명과학 혁신 기업들에게 전례 없는 기회가 열렸습니다.',
      marketStats: [
        { v: (l: Language) => formatMoney(8.2e9, l), label: "'Cluster 1: Health' 배정 예산" },
        { v: () => '100%', label: '직접 연구비 전액 지원' },
        { v: () => '2025', label: '한국의 준회원 공식 가입 연도' },
        { v: () => '30%', label: 'SME 컨소시엄 의무 배정 비율' },
      ],

      whyNowTag: 'WHY NOW',
      whyNowH: '생명과학을 위한 세대적 자금 지원 창구.',
      cardsWhy: [
        {
          icon: 'banknote',
          num: (l: Language) => formatMoney(95.5e9, l),
          title: (l: Language) => `${formatMoney(95.5e9, l)} 규모 예산`,
          copy:
            "Horizon Europe은 '그린 파마 클러스터'에 대규모 자금을 배정했으며, 한국 기업은 2025년부터 전면 참여할 수 있습니다.",
        },
        {
          icon: 'clock',
          num: () => '3일',
          title: () => '3개월에서 3일로',
          copy: '컨소시엄 구축에 몇 분기를 낭비하지 마세요. AI 엔진이 필요한 파트너를 정확히 찾아드립니다.',
        },
        {
          icon: 'shield',
          num: () => '100%',
          title: () => '지분 희석 0%',
          copy: (l: Language) =>
            `이사회 자리나 경영권을 넘기지 않고도 R&D를 확장할 수 있는 비희석 자금을 확보하세요. 평균 프로젝트 규모는 ${formatMoney(
              2.5e6,
              l,
            )}입니다.`,
        },
      ],

      callsH: '2026년 Horizon Europe 바이오텍 공고',
      callsSub:
        'Cluster 1 Health · 비희석 · 국경 간 컨소시엄 필수. 파트너 매칭, 워크패키지 설계, 제안서 전체 작성을 저희가 담당합니다.',
      matchLink: '이 공고 자격 확인 →',
      matchProfile: '프로필 매칭 →',

      calls: [
        {
          status: '공고 임박',
          tone: 'amber' as const,
          amount: 10.5e6,
          code: 'HORIZON-HLTH-2026-TOOL-01',
          topic: 'ATMP 제조 최적화',
          desc: '독일 프라운호퍼가 주도하는 컨소시엄이 임상 2상용 첨단바이오의약품(ATMP)을 확장 생산할 CDMO를 찾고 있습니다.',
          tags: ['CDMO', 'ATMP', '제조'],
          icon: 'flask',
        },
        {
          status: '컨소시엄 구성 중',
          tone: 'sky' as const,
          amount: 8.0e6,
          code: 'HORIZON-HLTH-DISEASE-2026-02',
          topic: '박테리오파지 치료 효능',
          desc: '유럽 학술 네트워크가 맞춤형 파지 라이브러리로 항생제 내성균에 대응할 바이오텍 파트너를 찾고 있습니다.',
          tags: ['바이오텍', '감염', '파지'],
          icon: 'microscope',
        },
        {
          status: '공고 오픈',
          tone: 'emerald' as const,
          amount: 12.0e6,
          code: 'HORIZON-HLTH-2026-CARE-03',
          topic: '의료기기 디지털화',
          desc: 'CE 적합성 평가를 준비 중이며 AI 기반 진단을 임상 워크플로에 통합할 MedTech 기업을 찾습니다.',
          tags: ['MedTech', 'AI', '진단'],
          icon: 'activity',
        },
      ],

      climaxH: (l: Language) => `다음 ${formatMoney(2.5e6, l)}, 지금 확보하세요.`,
      climaxSub: '귀사의 CDMO 또는 바이오텍이 다음 Horizon Europe 코호트에 부합하는지 확인해 드립니다.',
      trust: ['부담 없는 상담', '지분 희석 없는 자금', '컨소시엄 확보 시에만 청구'],
    };
  }

  if (lang === 'fr') {
    return {
      audience: 'Pour Biotech · CDMO · Fabricants d’API',
      h1a: 'Financez la prochaine avancée de votre biotech avec ',
      h1b: 'un capital européen sans dilution',
      h1c: '.',
      sub: 'Réduisez la recherche de partenaires Horizon Europe et la rédaction de la proposition de 3 mois à quelques jours.',
      ctaPrimary: 'Vérifier votre éligibilité',
      ctaSecondary: 'Voir les appels 2026',
      keyStats: [
        { k: 'budget', label: 'Budget Horizon Europe' },
        { k: 'avg', label: 'Taille moyenne d’un projet' },
        { k: 'equity', label: 'Prise de capital', overrideValue: '0 %' },
        { k: 'days', label: 'Consortium constitué', overrideValue: '3 jours' },
      ],
      painH: 'Cessez de détourner vos meilleurs scientifiques de la R&D.',
      painP:
        'Rédiger une proposition européenne de 100 pages épuise vos talents les plus coûteux. Vous perdez des trimestres de R&D rien qu’à chercher les bons partenaires académiques et industriels.',
      guaranteeTag: 'LA GARANTIE',
      guaranteeP1: 'Nous utilisons l’IA pour bâtir votre consortium et rédiger votre proposition. ',
      guaranteeP2: 'Si nous ne sécurisons pas votre consortium, vous ne payez pas nos frais de plateforme.',

      marketH: 'Le plus grand fonds de R&D au monde',
      marketP:
        'Horizon Europe est un véhicule d’entrée sur le marché européen. L’association de la Corée du Sud ouvre un accès inédit aux innovateurs des sciences du vivant.',
      marketStats: [
        { v: (l: Language) => formatMoney(8.2e9, l), label: "Alloué au 'Cluster 1 : Santé'" },
        { v: () => '100 %', label: 'Financement des coûts directs de recherche' },
        { v: () => '2025', label: 'Année d’association officielle de la Corée' },
        { v: () => '30 %', label: 'Budget dédié aux consortiums PME' },
      ],

      whyNowTag: 'POURQUOI MAINTENANT',
      whyNowH: 'Une fenêtre de financement générationnelle pour les sciences du vivant.',
      cardsWhy: [
        {
          icon: 'banknote',
          num: (l: Language) => formatMoney(95.5e9, l),
          title: (l: Language) => `Budget de ${formatMoney(95.5e9, l)}`,
          copy:
            "Horizon Europe a alloué des capitaux massifs au 'Green Pharma Cluster'. Les entreprises coréennes sont pleinement éligibles depuis 2025.",
        },
        {
          icon: 'clock',
          num: () => '3 jours',
          title: () => 'De 3 mois à 3 jours',
          copy: 'Ne gaspillez plus des trimestres à monter un consortium. Notre moteur IA identifie exactement les partenaires qu’il vous faut.',
        },
        {
          icon: 'shield',
          num: () => '100 %',
          title: () => '100 % sans dilution',
          copy: (l: Language) =>
            `Sécurisez un financement non dilutif pour développer votre R&D sans céder ni sièges ni contrôle. Projet moyen : ${formatMoney(
              2.5e6,
              l,
            )}.`,
        },
      ],

      callsH: 'Appels Biotech Horizon Europe 2026 ouverts',
      callsSub:
        'Cluster 1 Santé · non dilutif · consortiums transfrontaliers requis. Nous prenons en charge le matching, la conception des work packages et la rédaction complète.',
      matchLink: 'Vérifier l’éligibilité à ces appels →',
      matchProfile: 'Matcher un profil →',

      calls: [
        {
          status: 'Ouverture imminente',
          tone: 'amber' as const,
          amount: 10.5e6,
          code: 'HORIZON-HLTH-2026-TOOL-01',
          topic: 'Optimisation de la fabrication ATMP',
          desc: 'Consortium mené par Fraunhofer (Allemagne) recherchant des CDMO capables d’industrialiser des médicaments de thérapie avancée pour la phase II.',
          tags: ['CDMO', 'ATMP', 'Fabrication'],
          icon: 'flask',
        },
        {
          status: 'Phase de consortium',
          tone: 'sky' as const,
          amount: 8.0e6,
          code: 'HORIZON-HLTH-DISEASE-2026-02',
          topic: 'Efficacité de la phagothérapie',
          desc: 'Réseau académique européen cherchant des biotechs pour combattre les infections bactériennes résistantes via des banques de phages personnalisées.',
          tags: ['Biotech', 'Infection', 'Phage'],
          icon: 'microscope',
        },
        {
          status: 'Appel ouvert',
          tone: 'emerald' as const,
          amount: 12.0e6,
          code: 'HORIZON-HLTH-2026-CARE-03',
          topic: 'Digitalisation des dispositifs médicaux',
          desc: 'Recherche de MedTech en cours d’évaluation de conformité pour intégrer un diagnostic piloté par l’IA dans les parcours cliniques standards.',
          tags: ['MedTech', 'IA', 'Diagnostic'],
          icon: 'activity',
        },
      ],

      climaxH: (l: Language) => `Prêt à sécuriser vos prochains ${formatMoney(2.5e6, l)} ?`,
      climaxSub: 'Découvrez si votre CDMO ou biotech est éligible à la prochaine cohorte Horizon Europe.',
      trust: ['Appel sans engagement', 'Capital non dilutif', 'Payez uniquement si nous sécurisons votre consortium'],
    };
  }

  // English default
  return {
    audience: 'For Biotech · CDMOs · API Manufacturers',
    h1a: 'Fund your biotech’s next breakthrough with ',
    h1b: 'Equity-Free EU Capital',
    h1c: '.',
    sub: 'Reduce Horizon Europe partner matching and proposal drafting from 3 months down to a few days.',
    ctaPrimary: 'Check Your Eligibility',
    ctaSecondary: 'See 2026 Open Calls',
    keyStats: [
      { k: 'budget', label: 'Horizon Europe budget' },
      { k: 'avg', label: 'Avg. project size' },
      { k: 'equity', label: 'Equity taken', overrideValue: '0%' },
      { k: 'days', label: 'Consortium built', overrideValue: '3 days' },
    ],
    painH: 'Stop pulling your best scientists off R&D.',
    painP:
      'Writing a 100-page EU grant proposal drains your most expensive talent. You lose quarters of R&D velocity just trying to find the right academic and industrial consortium partners.',
    guaranteeTag: 'THE GUARANTEE',
    guaranteeP1: 'We leverage AI to build your consortium and draft your proposal. ',
    guaranteeP2: 'If we don’t secure your consortium, you don’t pay our platform fee.',

    marketH: 'The world’s largest R&D fund',
    marketP:
      'Horizon Europe is a market-entry vehicle at continental scale. South Korea’s association opens unprecedented access for Life Science innovators.',
    marketStats: [
      { v: (l: Language) => formatMoney(8.2e9, l), label: "Allocated to 'Cluster 1: Health'" },
      { v: () => '100%', label: 'Funding for direct research costs' },
      { v: () => '2025', label: 'Year Korea officially joins as Associate' },
      { v: () => '30%', label: 'Budget mandated for SME consortia' },
    ],

    whyNowTag: 'WHY NOW',
    whyNowH: 'A generational funding window for Life Sciences.',
    cardsWhy: [
      {
        icon: 'banknote',
        num: (l: Language) => formatMoney(95.5e9, l),
        title: (l: Language) => `${formatMoney(95.5e9, l)} Budget`,
        copy:
          "Horizon Europe has allocated massive capital for the 'Green Pharma Cluster'. Korean companies are now fully eligible to participate in 2025.",
      },
      {
        icon: 'clock',
        num: () => '3 days',
        title: () => '3 months to 3 days',
        copy: 'Don’t waste quarters trying to build a consortium. Our AI engine identifies the exact partners you need.',
      },
      {
        icon: 'shield',
        num: () => '100%',
        title: () => '100% equity-free',
        copy: (l: Language) =>
          `Secure non-dilutive funding to scale R&D without giving up board seats or control. Average project size is ${formatMoney(
            2.5e6,
            l,
          )}.`,
      },
    ],

    callsH: 'Open 2026 Horizon Europe Biotech calls',
    callsSub:
      'Cluster 1 Health · Non-dilutive · Cross-border consortia required. We handle partner matching, work-package design and full proposal drafting.',
    matchLink: 'Check eligibility for these calls →',
    matchProfile: 'Match profile →',

    calls: [
      {
        status: 'Opening soon',
        tone: 'amber' as const,
        amount: 10.5e6,
        code: 'HORIZON-HLTH-2026-TOOL-01',
        topic: 'ATMP Manufacturing Optimization',
        desc: 'Consortium led by Fraunhofer (Germany) seeking CDMOs scaling Advanced Therapy Medicinal Products for Phase II trials.',
        tags: ['CDMO', 'ATMP', 'Manufacturing'],
        icon: 'flask',
      },
      {
        status: 'Consortium phase',
        tone: 'sky' as const,
        amount: 8.0e6,
        code: 'HORIZON-HLTH-DISEASE-2026-02',
        topic: 'Phage Therapy Efficacy',
        desc: 'European academic network seeking biotechs to combat antibiotic-resistant bacterial infections using customized phage libraries.',
        tags: ['Biotech', 'Infection', 'Phage'],
        icon: 'microscope',
      },
      {
        status: 'Call open',
        tone: 'emerald' as const,
        amount: 12.0e6,
        code: 'HORIZON-HLTH-2026-CARE-03',
        topic: 'Medical Device Digitization',
        desc: 'Seeking MedTech companies navigating conformity assessment to integrate AI-driven diagnostics into standard clinical workflows.',
        tags: ['MedTech', 'AI', 'Diagnostics'],
        icon: 'activity',
      },
    ],

    climaxH: (l: Language) => `Ready to secure your next ${formatMoney(2.5e6, l)}?`,
    climaxSub: 'Find out if your CDMO or biotech qualifies for the next Horizon Europe cohort.',
    trust: ['No obligation call', 'Equity-free capital', 'Pay only if we secure your consortium'],
  };
}

/* -------- Small helpers -------- */
const iconFor = (name: string, className = 'w-5 h-5') => {
  switch (name) {
    case 'banknote': return <Banknote className={className} />;
    case 'clock': return <Clock className={className} />;
    case 'shield': return <ShieldCheck className={className} />;
    case 'flask': return <FlaskConical className={className} />;
    case 'microscope': return <Microscope className={className} />;
    case 'activity': return <Activity className={className} />;
    default: return null;
  }
};

const toneClasses = {
  amber: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-400/40',
  sky: 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/40',
  emerald: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-400/40',
} as const;

/* -------- Page -------- */
const LifeSciences: React.FC = () => {
  const { currentLanguage } = useTranslation();
  const lang = currentLanguage as Language;
  const c: Copy = getCopy(lang);

  const budget = formatMoney(95.5e9, lang);
  const avg = formatMoney(2.5e6, lang);

  const keyStatValues: Record<string, string> = {
    budget,
    avg,
    equity: '0%',
    days: '3',
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <SEO
        title="EU Horizon Europe Grants for Biotech & CDMOs | InsightMatches Life Sciences"
        description="Equity-free EU capital for biotech. InsightMatches uses AI to build your Horizon Europe consortium and draft your proposal in days, not months."
        canonical="/lifesciences"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/40 via-background to-background dark:from-slate-900/40 dark:via-background" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300 text-xs sm:text-sm font-medium">
              <Dna className="w-3.5 h-3.5" />
              {c.audience}
            </div>

            <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="text-foreground">{c.h1a}</span>
              <span className="bg-gradient-to-r from-sky-500 via-sky-400 to-slate-500 bg-clip-text text-transparent">
                {c.h1b}
              </span>
              <span className="text-foreground">{c.h1c}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {c.sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-foreground dark:bg-white dark:text-slate-900 hover:opacity-90 shadow-lg transition-all duration-300 button-hover"
              >
                {c.ctaPrimary}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#opportunities"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {c.ctaSecondary} →
              </a>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              {c.keyStats.map((s) => (
                <div key={s.k}>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {s.overrideValue ?? keyStatValues[s.k]}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pain + Guarantee */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {c.painH}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            {c.painP}
          </p>
          <div className="inline-block rounded-2xl border border-sky-500/30 bg-card p-8 md:p-10 shadow-lg text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              {c.guaranteeTag}
            </div>
            <p className="text-lg md:text-xl text-foreground leading-snug">
              {c.guaranteeP1}
              <span className="text-sky-600 dark:text-sky-400 font-semibold">
                {c.guaranteeP2}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Market context */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400 font-semibold mb-3">
              <Globe className="w-3.5 h-3.5 inline -mt-0.5 mr-1.5" />
              Horizon Europe
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
              {c.marketH}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{c.marketP}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {c.marketStats.map((s, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-6 hover:border-sky-500/40 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {s.v(lang)}
                </div>
                <div className="text-sm text-muted-foreground leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400 font-semibold mb-3">
              {c.whyNowTag}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {c.whyNowH}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.cardsWhy.map((card, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-8 hover:border-sky-500/40 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 mb-5">
                  {iconFor(card.icon, 'w-5 h-5')}
                </div>
                <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
                  {card.num(lang)}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {typeof card.title === 'function' ? card.title(lang) : card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {typeof card.copy === 'function' ? card.copy(lang) : card.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section id="opportunities" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3">
                {c.callsH}
              </h2>
              <p className="text-sm text-muted-foreground">{c.callsSub}</p>
            </div>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-medium text-sm whitespace-nowrap"
            >
              {c.matchLink}
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {c.calls.map((call, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col hover:border-sky-500/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${toneClasses[call.tone]}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {call.status}
                  </span>
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
                    {iconFor(call.icon)}
                  </div>
                </div>

                <div className="text-2xl font-bold text-foreground mb-2">
                  {formatMoney(call.amount, lang)}
                </div>
                <div className="text-[11px] font-mono text-muted-foreground tracking-wider mb-3">
                  {call.code}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                  {call.topic}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {call.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {call.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-muted text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 text-sm font-medium mt-auto"
                >
                  {c.matchProfile}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Climax CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-sky-500 via-sky-400 to-slate-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            {c.climaxH(lang)}
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            {c.climaxSub}
          </p>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-lg bg-white text-slate-900 font-semibold text-lg hover:bg-white/95 shadow-xl transition-all button-hover"
          >
            {c.ctaPrimary}
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/90 font-medium">
            {c.trust.map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LifeSciences;
