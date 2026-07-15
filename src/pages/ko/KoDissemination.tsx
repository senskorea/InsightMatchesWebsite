import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';
import { Globe, Target, Users, Megaphone } from 'lucide-react';

const KoDissemination = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => { document.title = '확산 및 임팩트 — InsightMatches'; }, []);
  if (currentLanguage !== 'ko') return <Navigate to="/dissemination" replace />;

  const cards = [
    { icon: Globe, title: '유럽 네트워크', desc: '광범위한 EU 네트워크를 활용하여 유럽 혁신 생태계 전반에서 연구 가시성과 임팩트를 극대화합니다.' },
    { icon: Target, title: '전략적 커뮤니케이션', desc: '핵심 이해관계자, 정책 입안자, 산업 파트너에게 도달하기 위한 타겟 확산 전략.' },
    { icon: Users, title: '커뮤니티 참여', desc: '적극적인 교류와 지식 공유를 통해 유럽과 아시아 연구 커뮤니티 간 가교를 구축합니다.' },
    { icon: Megaphone, title: '다채널 증폭', desc: '컨퍼런스, 출판, 소셜 미디어, 이벤트를 통해 연구 결과를 적합한 청중에게 전달합니다.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO lang="ko" title="확산 및 임팩트 — InsightMatches" description="전략적 커뮤니케이션과 EU–한국 파트너십을 통해 연구의 임팩트를 확장합니다." canonical="/ko/dissemination" alternates={[{ hreflang: 'en', href: 'https://www.insightmatches.com/dissemination' }, { hreflang: 'ko', href: 'https://www.insightmatches.com/ko/dissemination' }, { hreflang: 'fr', href: 'https://www.insightmatches.com/fr/dissemination' }]} />
      <Navbar />
      <main lang="ko">
        <section className="pt-32 sm:pt-28 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">확산 및 임팩트</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">전략적 커뮤니케이션과 파트너십을 통해 연구의 임팩트를 증폭합니다.</p>
          </div>
        </section>
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {cards.map((c, i) => (
              <div key={i} className="p-8 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><c.icon className="w-6 h-6 text-primary" /></div>
                <h3 className="text-2xl font-semibold mb-4">{c.title}</h3>
                <p className="text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
export default KoDissemination;
