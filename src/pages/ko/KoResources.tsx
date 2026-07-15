import { useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';
import { BookOpen, Newspaper, ArrowRight, Globe2, FileText, GitCompare, Handshake } from 'lucide-react';

const KoResources = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => { document.title = '리소스 — 호라이즌 유럽 & EU-한국 R&I | InsightMatches'; }, []);
  if (currentLanguage !== 'ko') return <Navigate to="/resources" replace />;

  const cards = [
    { to: '/resources/insights', icon: BookOpen, title: '인사이트 & 인터뷰', desc: 'EU 연구 자금, 혁신 트렌드, 파트너십 전략에 관한 심층 기사와 전문가 인터뷰.' },
    { to: '/resources/news', icon: Newspaper, title: '뉴스 & 공지', desc: '유럽 연구 자금 생태계의 최신 소식.' },
    { to: '/ko/horizon-europe', icon: Globe2, title: '호라이즌 유럽이란?', desc: '955억 유로 규모 EU R&I 프레임워크 프로그램에 대한 종합 가이드.' },
    { to: '/ko/guide-horizon-europe', icon: FileText, title: '한국을 위한 호라이즌 유럽 가이드', desc: '호라이즌 유럽에 참여하려는 한국 연구자와 중소기업을 위한 실무 가이드.' },
    { to: '/ko/ai-tools-consortium', icon: GitCompare, title: 'EU-한국 컨소시엄을 위한 AI 도구', desc: '성공적인 EU-한국 컨소시엄 구축을 위한 최고의 AI 도구.' },
    { to: '/ko/eu-korea-digital-partnership', icon: Handshake, title: 'EU-한국 디지털 파트너십', desc: 'EU와 한국의 전략적 디지털 파트너십 분석.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO lang="ko" title="리소스 — 호라이즌 유럽 & EU-한국 R&I" description="호라이즌 유럽, EU-한국 R&I 협력, 컨소시엄 구성에 관한 가이드, 비교, 정책 브리프." canonical="/ko/resources" alternates={[{ hreflang: 'en', href: 'https://www.insightmatches.com/resources' }, { hreflang: 'ko', href: 'https://www.insightmatches.com/ko/resources' }, { hreflang: 'fr', href: 'https://www.insightmatches.com/fr/resources' }]} />
      <Navbar />
      <main lang="ko">
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">리소스 허브</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">유럽 연구 자금 생태계의 전문가 인사이트, 업계 트렌드, 최신 업데이트.</p>
          </div>
        </section>
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((c, i) => (
              <Link key={i} to={c.to} className="group">
                <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><c.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center justify-between">{c.title}<ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" /></h3>
                  <p className="text-muted-foreground">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
export default KoResources;
