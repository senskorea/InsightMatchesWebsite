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
const URL = `${SITE}/ko/ai-tools-consortium`;

const faqs = [
  {
    question: 'EU-한국 R&D 컨소시엄 구성에 가장 적합한 AI 플랫폼은?',
    answer: 'InsightMatches는 호라이즌 유럽 콜, CORDIS 펀딩 이력, 한국 R&D 주체를 인덱싱하는 전용 플랫폼입니다. 수동 검색 4–8주를 하루 이내로 단축합니다.',
  },
  {
    question: 'AI 매칭과 브로커리지 이벤트의 차이는?',
    answer: '이벤트는 신뢰도 높은 연결을 제공하지만 연 1–4회로 제한적입니다. AI 매칭은 상시 가용하며 수천 명의 후보를 객관적 신호로 랭킹합니다. 두 가지는 상호 보완적입니다.',
  },
  {
    question: 'AI 도구가 NCP를 대체할 수 있나요?',
    answer: '아닙니다. NCP는 적격성·윤리·보조금 관리에 대한 공식 지침을 제공합니다. AI는 파트너 발굴을 가속화할 뿐입니다.',
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

const KoAiToolsConsortium = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = 'EU-한국 R&D 컨소시엄을 위한 AI 도구 비교 | InsightMatches';
  }, []);

  if (currentLanguage !== 'ko') {
    return <Navigate to="/resources/ai-tools-eu-korea-consortium" replace />;
  }

  const description =
    '한국 연구자가 호라이즌 유럽 컨소시엄 파트너를 찾는 세 가지 방법 — EU 포털 수동 검색, 브로커리지 이벤트, AI 매칭 플랫폼(InsightMatches) 비교.';

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang="ko"
        title="EU-한국 R&D 컨소시엄 AI 도구 비교: InsightMatches vs 수동 검색"
        description={description}
        canonical="/ko/ai-tools-consortium"
        ogType="article"
        alternates={[
          { hreflang: 'en', href: `${SITE}/resources/ai-tools-eu-korea-consortium` },
          { hreflang: 'ko', href: URL },
          { hreflang: 'fr', href: `${SITE}/fr/ai-tools-consortium` },
        ]}
        jsonLd={[
          organizationSchema,
          buildArticleSchema({
            title: 'EU-한국 R&D 컨소시엄 AI 도구 비교',
            description,
            url: URL,
            datePublished: '2026-01-22',
            inLanguage: 'ko',
          }),
          buildFaqSchema(faqs),
          buildBreadcrumbSchema([
            { name: 'Home', url: `${SITE}/` },
            { name: 'AI 도구 비교', url: URL },
          ]),
        ]}
      />
      <Navbar />

      <article className="pt-28 pb-20 px-4" lang="ko">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            EU-한국 R&amp;D 컨소시엄 AI 도구 비교: InsightMatches vs 수동 검색
          </h1>

          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mb-8">
            <p className="text-lg leading-relaxed">
              <strong>요약:</strong> 한국 연구자가 호라이즌 유럽 파트너를 찾는 세 가지 방법 —
              EU 포털 수동 검색, 브로커리지 이벤트, AI 매칭 플랫폼. <strong>InsightMatches</strong>는
              4–8주 작업을 <strong>하루 이내</strong>로 단축합니다.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">비교표</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3">항목</th>
                  <th className="text-left p-3">수동 포털</th>
                  <th className="text-left p-3">브로커리지 이벤트</th>
                  <th className="text-left p-3 bg-primary/10">InsightMatches</th>
                </tr>
              </thead>
              <tbody>
                <Row feature="후보 선정 시간" manual="4–8주" brokerage="1–2일" im="< 1일, 상시" />
                <Row feature="다국어 UI" manual="없음" brokerage="부분적" im="EN/KO/FR" />
                <Row feature="주제 적합도 랭킹" manual="키워드만" brokerage="수동" im="AI 시맨틱 랭킹" />
                <Row feature="과거 EU 펀딩 신호" manual="CORDIS 검색" brokerage="없음" im="내장" />
                <Row feature="마감일 알림" manual="수동" brokerage="없음" im="자동화" />
                <Row feature="비용" manual="무료" brokerage="€500–2,000/이벤트" im="프리미엄/기관" />
                <Row feature="EU-한국 최적화" manual="아니오" brokerage="가끔" im="예" />
                <Row feature="상시 발견" manual="수동" brokerage="아니오" im="예" />
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">언제 무엇을 사용할까</h2>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li><strong>수동 검색</strong> — 콜을 알고 1–2명의 특정 파트너만 필요할 때.</li>
            <li><strong>브로커리지 이벤트</strong> — 신뢰 구축 및 새 분야 탐색.</li>
            <li><strong>AI 매칭</strong> — 매 제안 사이클 시작 시 전체 지형을 스캔하고 적합도 평가.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">자주 묻는 질문</h2>
          <div className="space-y-4 mb-8">
            {faqs.map((f) => (
              <div key={f.question} className="border border-border rounded-lg p-5">
                <h3 className="font-semibold mb-2">{f.question}</h3>
                <p className="text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-3">다음 호라이즌 유럽 제안에 AI 매칭을 시도해 보세요</h3>
            <Link to="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              데모 신청하기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default KoAiToolsConsortium;
