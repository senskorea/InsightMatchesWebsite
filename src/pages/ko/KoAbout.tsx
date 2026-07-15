import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';
import { aboutPageSchema, organizationSchema } from '@/lib/seo-schemas';
import { Target, Users, Award, ArrowRight, Handshake, Globe, Building2 } from 'lucide-react';

const KoAbout = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = '회사 소개 — InsightMatches';
  }, []);

  if (currentLanguage !== 'ko') {
    return <Navigate to="/about" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO
        lang="ko"
        title="InsightMatches 소개 — 유럽과 아시아의 R&D 가교"
        description="InsightMatches는 유럽과 아시아를 잇는 AI 플랫폼입니다. €20M+ EU R&I 자금 파이프라인 지원, EU 평균의 2배 성공률, 신뢰받는 파트너 네트워크."
        canonical="/ko/about"
        alternates={[
          { hreflang: 'en', href: 'https://www.insightmatches.com/about' },
          { hreflang: 'ko', href: 'https://www.insightmatches.com/ko/about' },
          { hreflang: 'fr', href: 'https://www.insightmatches.com/fr/about' },
        ]}
        jsonLd={[aboutPageSchema, organizationSchema]}
      />
      <Navbar />

      <section className="pt-24 pb-16 px-4" lang="ko">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Handshake className="w-4 h-4" />
            <span className="text-sm font-medium">회사 소개 & 파트너</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">InsightMatches 소개</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI 기반 연구 자금 솔루션과 전략적 파트너십을 통해 유럽과 아시아를 잇습니다.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-xl bg-card border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 mx-auto">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">미션</h3>
              <p className="text-muted-foreground">
                AI와 전문성으로 복잡함을 단순하게 만들어 유럽 연구 자금에 대한 접근을 민주화합니다.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 mx-auto">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">비전</h3>
              <p className="text-muted-foreground">
                연구자가 과학에 집중할 수 있도록 자금 조달의 복잡함은 우리가 해결합니다.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 mx-auto">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">가치</h3>
              <p className="text-muted-foreground">
                탁월함, 혁신, 투명성, 그리고 고객 성공에 대한 헌신.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-border mb-16">
            <h2 className="text-3xl font-bold mb-6">우리의 이야기</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                InsightMatches는 단순한 관찰에서 시작되었습니다 — 뛰어난 연구 아이디어와 성공적인
                EU 자금 신청 사이의 격차는 불필요하게 컸습니다. 호라이즌 유럽, EIC, Erasmus+, Interreg
                전반에서 너무 많은 가치 있는 프로젝트가 가치 부족이 아니라 절차의 복잡함 때문에
                실패하고 있었습니다.
              </p>
              <p>
                우리 팀은 유럽 연구 생태계에 대한 깊은 전문성과 최첨단 AI 기술을 결합해 자금 신청
                과정을 전환합니다. 지금까지 <strong>€20M+ 규모의 자금 파이프라인</strong>을 클라이언트와
                함께 지원했으며 EU 평균의 두 배 성공률을 유지합니다. (파이프라인은 저희가 함께 준비·제출한
                제안서 기준이며, 실제 집행된 자금이 아닙니다.)
              </p>
              <p>
                유럽과 아시아 모두에 기반을 두고 대륙, 문화, 역량을 연결합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">파트너 네트워크</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">신뢰받는 파트너</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              다양한 산업의 혁신적 기업·전문가와 협력해 최첨단 솔루션을 시장에 선보입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">유럽 네트워크</h3>
              <p className="text-sm text-muted-foreground">
                주요 유럽 연구 기관 및 혁신 허브와의 견고한 파트너십.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">산업 파트너</h3>
              <p className="text-sm text-muted-foreground">
                기술 기업, SME, 대기업 혁신 부문과의 협업.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">전략적 동맹</h3>
              <p className="text-sm text-muted-foreground">
                90+ 고객 파이프라인과 컨소시엄 구성 준비된 검증된 파트너.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-border mb-12">
            <h2 className="text-3xl font-bold mb-6">파트너십 철학</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                InsightMatches에서 파트너십은 우리 활동의 중심입니다. 최고의 연구 성과는 국경,
                분야, 부문을 넘어선 다양하고 상호 보완적인 협력에서 나온다고 믿습니다.
              </p>
              <p>
                품질, 신뢰성, EU 연구 자금 요건과의 정합성을 보장하기 위해 파트너 네트워크를
                신중히 선별합니다.
              </p>
              <p className="font-medium text-foreground">
                파트너가 되고 싶으신가요? 유럽 연구 발전에 기여할 혁신적 조직의 합류를 항상
                환영합니다.
              </p>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <Link to="/about/gep" className="group p-6 rounded-xl bg-card border border-border hover:border-primary transition-all flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">젠더 평등 계획</h3>
                <p className="text-sm text-muted-foreground">
                  다양성, 형평성, 포용성에 대한 우리의 약속.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KoAbout;
