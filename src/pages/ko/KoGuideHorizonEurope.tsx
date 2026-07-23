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
const URL = `${SITE}/ko/guide-horizon-europe`;

const faqs = [
  {
    question: '호라이즌 유럽 컨소시엄의 최소 규모는?',
    answer: 'Pillar II 협력 액션(RIA, IA, CSA)의 대부분은 서로 다른 EU 회원국 또는 준회원국에서 3개의 독립적인 법인이 필요합니다. 한국은 준회원국으로 이 요건에 포함됩니다.',
  },
  {
    question: '자금 지원율은 어떻게 되나요?',
    answer: 'RIA(연구·혁신)는 적격 비용의 100%, IA(혁신)는 70%(비영리 100%), CSA(코디네이션)는 100%입니다.',
  },
  {
    question: '파트너 찾는 데 얼마나 걸리나요?',
    answer: '수동 검색은 콜당 4–8주, InsightMatches 같은 AI 매칭 플랫폼은 하루 이내입니다.',
  },
  {
    question: 'RIA, IA, CSA의 차이는?',
    answer: 'RIA는 기초·응용 연구를 100% 지원, IA는 시장 근접 활동을 70% 지원(비영리 100%), CSA는 네트워킹·정책·동반 조치를 100% 지원합니다.',
  },
];

const KoGuideHorizonEurope = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = '호라이즌 유럽 2024–2027 한국 기관 완벽 가이드 | InsightMatches';
  }, []);

  if (currentLanguage !== 'ko') {
    return <Navigate to="/resources/guide-horizon-europe-korea" replace />;
  }

  const description =
    '한국 연구자·대학·SME·연구기관을 위한 2024–2027 호라이즌 유럽 완벽 가이드 — 준회원국 지위, Pillar II 클러스터, 예산, 적격성, 자금 지원율, 신청 절차, 컨소시엄 파트너 찾기.';

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang="ko"
        title="호라이즌 유럽 2024–2027 한국 기관 완벽 가이드"
        description={description}
        canonical="/ko/guide-horizon-europe"
        ogType="article"
        alternates={[
          { hreflang: 'en', href: `${SITE}/resources/guide-horizon-europe-korea` },
          { hreflang: 'ko', href: URL },
          { hreflang: 'fr', href: `${SITE}/fr/guide-horizon-europe` },
        ]}
        jsonLd={[
          organizationSchema,
          buildArticleSchema({
            title: '호라이즌 유럽 2024–2027 한국 기관 완벽 가이드',
            description,
            url: URL,
            datePublished: '2026-01-22',
            inLanguage: 'ko',
          }),
          buildFaqSchema(faqs),
          buildBreadcrumbSchema([
            { name: 'Home', url: `${SITE}/` },
            { name: '가이드', url: URL },
          ]),
        ]}
      />
      <Navbar />

      <article className="pt-28 pb-20 px-4" lang="ko">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            호라이즌 유럽 한국 기관 완벽 가이드 (2024–2027)
          </h1>

          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mb-8">
            <p className="text-lg leading-relaxed">
              <strong>요약:</strong> 한국은 2025년 1월부터 호라이즌 유럽 Pillar II 준회원국이
              되었습니다. Pillar II 예산은 약 <strong>€53.5B (₩77.6조)</strong>이며, 3개국 3개 기관
              컨소시엄에서 적격 비용의 70–100%를 직접 수령할 수 있습니다.
            </p>
          </div>

          <p className="text-muted-foreground mb-10 text-lg">
            2026년 1월 업데이트 · 14분 읽기 · 한국 PI, 연구관리자, SME 창업자, TTO 대상.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">1. Pillar II 클러스터와 예산</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3">클러스터</th>
                  <th className="text-left p-3">예산 (KRW)</th>
                  <th className="text-left p-3">예산 (EUR)</th>
                  <th className="text-left p-3">한국 적합도</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="p-3">1. 보건</td><td className="p-3">₩12.0조</td><td className="p-3">€8.25B</td><td className="p-3">매우 높음</td></tr>
                <tr className="border-b border-border"><td className="p-3">2. 문화·창의·포용 사회</td><td className="p-3">₩3.3조</td><td className="p-3">€2.28B</td><td className="p-3">선택적</td></tr>
                <tr className="border-b border-border"><td className="p-3">3. 시민 안전</td><td className="p-3">₩2.6조</td><td className="p-3">€1.79B</td><td className="p-3">사이버보안</td></tr>
                <tr className="border-b border-border"><td className="p-3">4. 디지털·산업·우주</td><td className="p-3">₩22.4조</td><td className="p-3">€15.35B</td><td className="p-3">매우 높음</td></tr>
                <tr className="border-b border-border"><td className="p-3">5. 기후·에너지·모빌리티</td><td className="p-3">₩22.0조</td><td className="p-3">€15.12B</td><td className="p-3">높음</td></tr>
                <tr className="border-b border-border"><td className="p-3">6. 식품·바이오경제·환경</td><td className="p-3">₩13.4조</td><td className="p-3">€9.0B</td><td className="p-3">선택적</td></tr>
                <tr className="bg-muted/40 font-semibold"><td className="p-3">Pillar II 합계</td><td className="p-3">₩77.6조</td><td className="p-3">€53.5B</td><td className="p-3">—</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">2. 적격성과 자금 지원율</h2>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">RIA — 연구·혁신</h4>
              <p className="text-sm text-muted-foreground">적격 비용 100%. TRL 2–6. 일반 프로젝트: €3–7M.</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">IA — 혁신 액션</h4>
              <p className="text-sm text-muted-foreground">70% (비영리 100%). TRL 6–8. 일반 프로젝트: €5–15M.</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">CSA — 코디네이션·지원</h4>
              <p className="text-sm text-muted-foreground">100%. 네트워킹, 정책, 동반 조치. €1–3M.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">3. 신청 절차</h2>
          <ol className="space-y-3 list-decimal pl-6 mb-6">
            <li><strong>PIC 등록</strong> — EU Funding & Tenders 포털, 2–4주.</li>
            <li><strong>적합한 콜 선정</strong> — Work Programme 2025–2027.</li>
            <li><strong>컨소시엄 구성</strong> — 3개국 3개 기관 이상.</li>
            <li><strong>제안서 작성</strong> — Excellence, Impact, Implementation (약 45페이지).</li>
            <li><strong>제출</strong> — 평가 약 5개월.</li>
            <li><strong>Grant Agreement</strong> — 약 3개월 협상.</li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-4">자주 묻는 질문 (FAQ)</h2>
          <div className="space-y-4 mb-8">
            {faqs.map((f) => (
              <div key={f.question} className="border border-border rounded-lg p-5">
                <h3 className="font-semibold mb-2">{f.question}</h3>
                <p className="text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-3">호라이즌 유럽 파트너, 몇 분 만에 찾기</h3>
            <Link to="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              데모 신청하기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            English: <Link className="text-primary underline" to="/resources/guide-horizon-europe-korea">Definitive Guide</Link> · Français: <Link className="text-primary underline" to="/fr/guide-horizon-europe">Guide en français</Link>
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default KoGuideHorizonEurope;
