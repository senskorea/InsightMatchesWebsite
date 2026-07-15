import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';
import { BookOpen } from 'lucide-react';

const KoResourcesInsights = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => { document.title = '인사이트 & 인터뷰 — InsightMatches'; }, []);
  if (currentLanguage !== 'ko') return <Navigate to="/resources/insights" replace />;
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO lang="ko" title="인사이트 & 인터뷰 — InsightMatches" description="EU 연구 자금과 파트너십 전략에 관한 전문가 관점." canonical="/ko/resources/insights" />
      <Navbar />
      <main lang="ko">
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6"><BookOpen className="w-8 h-8 text-primary" /><h1 className="text-4xl md:text-5xl font-bold">인사이트 & 인터뷰</h1></div>
            <p className="text-xl text-muted-foreground">EU 연구 자금, 혁신 전략, 파트너십 개발에 관한 전문가 관점.</p>
          </div>
        </section>
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center p-12 rounded-xl bg-card border border-border">
              <h2 className="text-2xl font-semibold mb-4">곧 공개됩니다</h2>
              <p className="text-muted-foreground">유익한 인사이트와 전문가 인터뷰를 준비 중입니다. 곧 다시 방문해 주세요!</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default KoResourcesInsights;
