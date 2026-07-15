import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import {
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from '@/lib/seo-schemas';
import { ArrowRight, Sparkles, Users, Globe2 } from 'lucide-react';

const SITE = 'https://www.insightmatches.com';

const KoIndex = () => {
  useEffect(() => {
    document.title = 'InsightMatches — 한국-EU R&D 컨소시엄 AI 매칭 플랫폼';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang="ko"
        title="InsightMatches — 한국-EU R&D 컨소시엄 AI 매칭 플랫폼"
        description="호라이즌 유럽(Horizon Europe) 컨소시엄 파트너를 AI로 빠르게 찾으세요. 한국 대학·SME·연구기관을 위한 EU R&D 지원금 매칭 플랫폼."
        canonical="/ko/"
        alternates={[
          { hreflang: 'en', href: `${SITE}/` },
          { hreflang: 'ko', href: `${SITE}/ko/` },
          { hreflang: 'x-default', href: `${SITE}/` },
        ]}
        jsonLd={[organizationSchema, softwareApplicationSchema, websiteSchema]}
      />
      <Navbar />

      <main lang="ko" className="pt-28 pb-20 px-4">
        <section className="max-w-5xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs rounded-full bg-primary/10 text-primary font-medium">
            한국 R&amp;D 기관 전용
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            호라이즌 유럽 파트너,<br/>AI로 몇 분 만에 찾기
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            InsightMatches는 한국 대학·SME·연구기관이 호라이즌 유럽(Horizon Europe) 컨소시엄
            파트너와 EU R&amp;D 지원금을 빠르게 찾을 수 있는 AI 매칭 플랫폼입니다.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              데모 신청하기 <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/ko/horizon-europe"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition"
            >
              호라이즌 유럽 가이드 보기
            </Link>
          </div>
        </section>

        <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl border border-border">
            <Sparkles className="w-8 h-8 text-primary mb-3" />
            <h2 className="text-lg font-semibold mb-2">AI 파트너 매칭</h2>
            <p className="text-sm text-muted-foreground">
              주제 적합도, 과거 EU 펀딩 이력, 콜 적격성을 기반으로 수천 명의 유럽 파트너를 즉시 랭킹합니다.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border">
            <Globe2 className="w-8 h-8 text-primary mb-3" />
            <h2 className="text-lg font-semibold mb-2">유럽 R&amp;D 지원금</h2>
            <p className="text-sm text-muted-foreground">
              Pillar II 6개 클러스터 (€53.5B / ₩77.6조) 콜을 한국어로 탐색하고 마감일 알림을 받으세요.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border">
            <Users className="w-8 h-8 text-primary mb-3" />
            <h2 className="text-lg font-semibold mb-2">SENS 이벤트 매칭</h2>
            <p className="text-sm text-muted-foreground">
              EU-Korea R&amp;D 행사 참가자를 가장 적합한 협력자와 연결하는 전용 매치메이킹 도구.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">핵심 키워드</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li>· 호라이즌 유럽</li>
            <li>· 유럽 R&amp;D 지원금</li>
            <li>· 유럽 컨소시엄 파트너 찾기</li>
            <li>· 한국 스타트업 호라이즌 유럽 신청 방법</li>
            <li>· 유럽 연구 지원금 컨설팅 플랫폼</li>
            <li>· SENS 이벤트 매칭 플랫폼</li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground">
            English version: <Link className="text-primary underline" to="/">www.insightmatches.com</Link>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KoIndex;
