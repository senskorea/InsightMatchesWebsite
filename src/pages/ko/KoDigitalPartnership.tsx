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
const URL = `${SITE}/ko/eu-korea-digital-partnership`;

const faqs = [
  {
    question: 'EU-한국 디지털 파트너십이란?',
    answer: '2022년 11월 서명된 전략적 협정으로 반도체, 5G/6G, 양자, AI, 사이버보안, 디지털 신원, 플랫폼을 다룹니다. 2025년 한국의 호라이즌 유럽 Pillar II 준회원 가입의 정치적 토대가 되었습니다.',
  },
  {
    question: '딥테크 지원금에 어떤 영향이 있나요?',
    answer: '클러스터 4(디지털·산업·우주)의 공동 콜 개방, MSIT·MOTIE 공동 자금 콜 가능, Chips Act 및 AI Act 생태계에서 한국 컨소시엄 참여 우선순위 부여.',
  },
  {
    question: '한국 측 주관 부처는?',
    answer: '주로 MSIT(과학기술정보통신부)와 MOTIE(산업통상자원부), 시행기관으로 NRF·KIAT.',
  },
];

const KoDigitalPartnership = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = 'EU-한국 디지털 파트너십과 딥테크 지원금 | InsightMatches';
  }, []);

  if (currentLanguage !== 'ko') {
    return <Navigate to="/resources/eu-korea-digital-partnership" replace />;
  }

  const description =
    '2022년 EU-한국 디지털 파트너십이 호라이즌 유럽 하 딥테크 지원금을 어떻게 재편하는지 — 반도체, 6G, AI, 양자, MSIT/MOTIE 공동 콜.';

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang="ko"
        title="EU-한국 디지털 파트너십의 딥테크 지원금 영향"
        description={description}
        canonical="/ko/eu-korea-digital-partnership"
        ogType="article"
        alternates={[
          { hreflang: 'en', href: `${SITE}/resources/eu-korea-digital-partnership` },
          { hreflang: 'ko', href: URL },
          { hreflang: 'fr', href: `${SITE}/fr/eu-korea-digital-partnership` },
        ]}
        jsonLd={[
          organizationSchema,
          buildArticleSchema({
            title: 'EU-한국 디지털 파트너십과 딥테크 지원금',
            description,
            url: URL,
            datePublished: '2026-01-22',
            inLanguage: 'ko',
          }),
          buildFaqSchema(faqs),
          buildBreadcrumbSchema([
            { name: 'Home', url: `${SITE}/` },
            { name: '디지털 파트너십', url: URL },
          ]),
        ]}
      />
      <Navbar />

      <article className="pt-28 pb-20 px-4" lang="ko">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            EU-한국 디지털 파트너십이 딥테크 지원금에 미치는 영향
          </h1>

          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mb-8">
            <p className="text-lg leading-relaxed">
              <strong>요약:</strong> 2022년 EU-한국 디지털 파트너십은 <strong>반도체, 6G, 양자, AI,
              사이버보안</strong> 분야에서 공동 R&amp;D 프로그래밍을 가능하게 했습니다. 2025년 1월
              한국의 Pillar II 준회원 가입의 직접적 토대가 되었으며, 약 <strong>€15.35B (₩22.4조)</strong>
              규모의 클러스터 4 자금을 한국 컨소시엄에 개방했습니다.
            </p>
          </div>

          <p className="text-muted-foreground mb-10 text-lg">
            2026년 1월 업데이트 · 8분 읽기 · 딥테크 창업자, TTO, 정책 분석가 대상.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">1. MoU에서 완전 준회원 가입까지</h2>
          <p className="mb-4">
            2022년 11월 28일 서울에서 서명된 디지털 파트너십은 EU의 세 번째 협정(일본·싱가포르 이후)
            이었습니다. 반도체, 5G/6G 이후, 양자 기술, 고성능 컴퓨팅, 사이버보안, 온라인 플랫폼 등
            6개 분야에서 공식적인 협력 조정을 수립했습니다.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">2. 개방된 자금 수단</h2>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li><strong>클러스터 4 — 디지털·산업·우주:</strong> €15.35B (₩22.4조). 한국 기관은 정식 수혜자.</li>
            <li><strong>Chips JU:</strong> 한국 파운드리·IP하우스가 파일럿 라인·디자인 플랫폼 참여 가능.</li>
            <li><strong>MSIT-EC 공동 콜:</strong> K-Digital 전략과 정렬된 연간 공동 콜.</li>
            <li><strong>EUREKA / Eurostars:</strong> 혁신적 한국 SME를 위한 협력 R&amp;D.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">3. 2025–2027 전략 우선 주제</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3">주제 영역</th>
                  <th className="text-left p-3">예산</th>
                  <th className="text-left p-3">한국 앵글</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="p-3">반도체/칩</td><td className="p-3">€2.1B (₩3.0조)</td><td className="p-3">파운드리, EDA, 패키징</td></tr>
                <tr className="border-b border-border"><td className="p-3">6G 및 5G 이후</td><td className="p-3">€900M (₩1.3조)</td><td className="p-3">SK텔레콤, KT, 삼성</td></tr>
                <tr className="border-b border-border"><td className="p-3">양자 기술</td><td className="p-3">€800M (₩1.16조)</td><td className="p-3">KRISS, KAIST</td></tr>
                <tr className="border-b border-border"><td className="p-3">신뢰 AI</td><td className="p-3">€1.5B (₩2.18조)</td><td className="p-3">AI 안전성·평가</td></tr>
                <tr className="border-b border-border"><td className="p-3">사이버보안</td><td className="p-3">€700M (₩1.02조)</td><td className="p-3">기반시설 보호</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">자주 묻는 질문</h2>
          <div className="space-y-4 mb-8">
            {faqs.map((f) => (
              <div key={f.question} className="border border-border rounded-lg p-5">
                <h3 className="font-semibold mb-2">{f.question}</h3>
                <p className="text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-3">InsightMatches로 클러스터 4 파트너 찾기</h3>
            <Link to="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              데모 신청하기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            English: <Link className="text-primary underline" to="/resources/eu-korea-digital-partnership">EN version</Link> · Français: <Link className="text-primary underline" to="/fr/eu-korea-digital-partnership">Version FR</Link>
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default KoDigitalPartnership;
