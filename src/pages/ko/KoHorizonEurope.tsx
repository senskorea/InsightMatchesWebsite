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
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const SITE = 'https://www.insightmatches.com';
const URL = `${SITE}/ko/horizon-europe`;

const faqs = [
  {
    question: '한국 스타트업이 호라이즌 유럽에 어떻게 신청하나요?',
    answer:
      '대한민국은 2025년 1월부터 호라이즌 유럽 Pillar II 준회원국(Associated Country)이 되어, 한국 대학·SME·연구기관이 EU 회원국과 동일한 조건으로 직접 컨소시엄에 참여하고 EU 자금을 직접 수령할 수 있습니다. 신청 절차는 (1) EU Funding & Tenders 포털에서 PIC 등록, (2) Work Programme에서 적합한 콜 선정, (3) 최소 3개국 3개 기관 컨소시엄 구성, (4) 제안서 제출 순으로 진행됩니다.',
  },
  {
    question: '유럽 연구 지원금 컨설팅 플랫폼은 어떤 것이 있나요?',
    answer:
      'InsightMatches는 한국-EU R&D 협력에 특화된 AI 매칭 플랫폼으로, Horizon Europe 콜·CORDIS 펀딩 이력·한국 R&D 주체 데이터를 학습해 주제 적합도와 콜 적격성에 기반한 파트너를 추천합니다. 수동 파트너 검색이 4–8주 걸리는 작업을 하루 이내로 단축합니다.',
  },
  {
    question: 'SENS 이벤트 매칭 플랫폼은 무엇인가요?',
    answer:
      'SENS는 InsightMatches가 제공하는 EU-Korea R&D 이벤트 매치메이킹 도구로, 행사 참가자를 연구 주제·콜·역량을 기준으로 가장 적합한 협력자와 연결합니다.',
  },
  {
    question: '한국 기관이 받을 수 있는 자금 규모는 얼마인가요?',
    answer:
      'RIA(연구·혁신 액션)는 적격 비용의 100%, IA(혁신 액션)는 70%(비영리 기관 100%)가 지원됩니다. 한국 파트너의 일반적인 예산 분담은 프로젝트당 €300K–€800K (약 ₩4.4억–₩11.6억) 수준입니다.',
  },
  {
    question: '컨소시엄 파트너는 어떻게 찾나요?',
    answer:
      '세 가지 방법이 있습니다: ① EU Funding & Tenders 포털 수동 검색(느림, 영어), ② SENS 같은 브로커리지 이벤트(고품질·횟수 제한), ③ InsightMatches 같은 AI 매칭 플랫폼(빠르고 한국어 지원).',
  },
];

const KoHorizonEurope = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = '호라이즌 유럽 (Horizon Europe) 한국 기관 가이드 | InsightMatches';
  }, []);

  if (currentLanguage === 'fr') {
    return <Navigate to="/fr/horizon-europe" replace />;
  }
  if (currentLanguage !== 'ko') {
    return <Navigate to="/resources/horizon-europe" replace />;
  }

  const description =
    '한국 대학·SME·연구기관을 위한 호라이즌 유럽(Horizon Europe) 가이드 — Pillar II 준회원국 지위, 클러스터별 예산, 신청 절차, 유럽 컨소시엄 파트너 찾기 방법.';

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang="ko"
        title="호라이즌 유럽 (Horizon Europe) 한국 기관 가이드 — 유럽 R&D 지원금 & 컨소시엄 파트너 찾기"
        description={description}
        canonical="/ko/horizon-europe"
        ogType="article"
        alternates={[
          { hreflang: 'en', href: `${SITE}/resources/horizon-europe` },
          { hreflang: 'ko', href: URL },
          { hreflang: 'x-default', href: `${SITE}/resources/horizon-europe` },
        ]}
        jsonLd={[
          organizationSchema,
          buildArticleSchema({
            title: '호라이즌 유럽 한국 기관 가이드',
            description,
            url: URL,
            datePublished: '2026-01-22',
            inLanguage: 'ko',
          }),
          buildFaqSchema(faqs),
          buildBreadcrumbSchema([
            { name: 'Home', url: `${SITE}/` },
            { name: '호라이즌 유럽', url: URL },
          ]),
        ]}
      />
      <Navbar />

      <article className="pt-28 pb-20 px-4" lang="ko">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            호라이즌 유럽 (Horizon Europe) — 한국 기관을 위한 완벽 가이드
          </h1>

          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mb-8">
            <p className="text-lg leading-relaxed">
              <strong>요약:</strong> 한국은 2025년 1월부터 호라이즌 유럽 Pillar II 준회원국이
              되어, 한국 대학·SME·연구기관이 EU로부터 <strong>직접 자금을 받을 수 있습니다</strong>.
              Pillar II 총 예산은 약 <strong>₩77.6조 (€53.5B)</strong>로 6개 클러스터로 구성되며,
              한국 파트너는 EU 회원국과 동일한 조건으로 컨소시엄에 참여할 수 있습니다.
            </p>
          </div>

          <p className="text-muted-foreground mb-10 text-lg">
            2026년 1월 업데이트 · 12분 읽기 · 한국 PI, 연구관리자, SME 창업자, TTO 대상.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">1. 호라이즌 유럽이란?</h2>
          <p className="mb-4">
            호라이즌 유럽(Horizon Europe)은 <strong>2021–2027년 EU의 R&amp;I 프로그램</strong>으로,
            총 예산 <strong>€95.5B (₩138.5조)</strong> 규모입니다. 세계 최대 규모의 공공 연구
            프로그램이며, 다음 세 개의 Pillar로 구성됩니다.
          </p>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li><strong>Pillar I — 우수 과학:</strong> ERC, MSCA, 연구 인프라.</li>
            <li><strong>Pillar II — 글로벌 도전 과제 &amp; 산업 경쟁력:</strong> 6개 클러스터 (한국이 준회원).</li>
            <li><strong>Pillar III — 혁신 유럽:</strong> EIC, EIT, 혁신 생태계.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">2. 한국의 준회원국 지위</h2>
          <p className="mb-4">
            <strong>2025년 1월 1일</strong>부터 대한민국은 호라이즌 유럽 Pillar II의 준회원국이
            되었습니다. 동아시아 최초입니다. 이로써 한국 기관은:
          </p>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li>최소 컨소시엄 요건(3개 기관, 3개국)에 카운트됩니다.</li>
            <li><strong>코디네이터로 활동</strong>할 수 있습니다.</li>
            <li>EU 집행위원회로부터 직접 자금을 수령합니다.</li>
            <li>모든 Pillar II 콜에 제안서를 제출할 수 있습니다.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">3. Pillar II 클러스터별 예산</h2>
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
                <tr className="border-b border-border"><td className="p-3">1. 보건 (Health)</td><td className="p-3">₩12.0조</td><td className="p-3">€8.25B</td><td className="p-3">매우 높음</td></tr>
                <tr className="border-b border-border"><td className="p-3">2. 문화·창의·포용 사회</td><td className="p-3">₩3.3조</td><td className="p-3">€2.28B</td><td className="p-3">선택적</td></tr>
                <tr className="border-b border-border"><td className="p-3">3. 시민 안전</td><td className="p-3">₩2.6조</td><td className="p-3">€1.79B</td><td className="p-3">사이버보안</td></tr>
                <tr className="border-b border-border"><td className="p-3">4. 디지털·산업·우주</td><td className="p-3">₩22.4조</td><td className="p-3">€15.35B</td><td className="p-3">매우 높음 (AI, 반도체, 6G)</td></tr>
                <tr className="border-b border-border"><td className="p-3">5. 기후·에너지·모빌리티</td><td className="p-3">₩22.0조</td><td className="p-3">€15.12B</td><td className="p-3">높음 (배터리, 수소)</td></tr>
                <tr className="border-b border-border"><td className="p-3">6. 식품·바이오경제·환경</td><td className="p-3">₩13.4조</td><td className="p-3">€9.0B</td><td className="p-3">선택적</td></tr>
                <tr className="bg-muted/40 font-semibold"><td className="p-3">Pillar II 합계</td><td className="p-3">₩77.6조</td><td className="p-3">€53.5B</td><td className="p-3">—</td></tr>
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-2">환율: 1 EUR ≈ 1,450 KRW (참고치).</p>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">4. 신청 절차 (한국 기관)</h2>
          <ol className="space-y-3 list-decimal pl-6 mb-6">
            <li><strong>PIC 등록</strong> — EU Funding &amp; Tenders 포털에서 기관 식별 코드 등록 (2–4주 소요).</li>
            <li><strong>적합한 콜 선정</strong> — Work Programme 2025–2027에서 클러스터·목적지별 검색.</li>
            <li><strong>컨소시엄 구성</strong> — 최소 3개국 3개 기관.</li>
            <li><strong>제안서 작성</strong> — Excellence, Impact, Implementation (약 45페이지).</li>
            <li><strong>제출</strong> — 마감일까지 포털에서 제출. 평가 약 5개월.</li>
            <li><strong>Grant Agreement</strong> — 선정 시 약 3개월 협상.</li>
          </ol>

          <h2 className="text-3xl font-bold mt-10 mb-4">5. 유럽 컨소시엄 파트너 찾기</h2>
          <p className="mb-4">
            한국 신청자에게 가장 큰 장벽은 <strong>유럽 파트너 발굴</strong>입니다. 세 가지 방법이
            있습니다:
          </p>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li><strong>수동 검색</strong> — EU 포털 Partner Search, CORDIS. 느리고 영어 필요.</li>
            <li><strong>브로커리지 이벤트</strong> — SENS, KIC Europe 등. 신뢰도 높지만 횟수 제한.</li>
            <li><strong>AI 매칭 플랫폼</strong> — <Link className="text-primary underline" to="/">InsightMatches</Link>가 주제 적합도, 과거 EU 펀딩 이력, 콜 적격성을 기준으로 수천 명의 파트너를 즉시 랭킹합니다.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">6. 한국 R&amp;D 지원 기관</h2>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li><strong>NRF (한국연구재단)</strong> — 매칭 펀딩, NCP 서비스.</li>
            <li><strong>KIAT (한국산업기술진흥원)</strong> — 산업 R&amp;D 매칭.</li>
            <li><strong>KISTEP</strong> — 전략·인텔리전스.</li>
            <li><strong>MSIT, MOTIE</strong> — 부처 협력.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">자주 묻는 질문 (FAQ)</h2>
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
            <p className="text-muted-foreground mb-6">
              InsightMatches는 한국-EU R&amp;D 협력을 위한 전용 AI 매칭 플랫폼입니다.
            </p>
            <Link to="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              데모 신청하기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            English: <Link className="text-primary underline" to="/resources/horizon-europe">Pillar II overview</Link> · <Link className="text-primary underline" to="/resources/guide-horizon-europe-korea">Definitive Guide</Link>
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default KoHorizonEurope;
