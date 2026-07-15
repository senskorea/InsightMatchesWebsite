import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';
import { Newspaper } from 'lucide-react';
import { NewsList } from '@/components/NewsList';

const KoResourcesNews = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => { document.title = '뉴스 & 공지 — InsightMatches'; }, []);
  if (currentLanguage !== 'ko') return <Navigate to="/resources/news" replace />;
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO lang="ko" title="뉴스 & 공지 — InsightMatches" description="InsightMatches의 LinkedIn에서 가져온 최신 소식." canonical="/ko/resources/news" />
      <Navbar />
      <main lang="ko">
        <section className="pt-24 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Newspaper className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">뉴스 & 공지</h1>
            </div>
            <p className="text-xl text-muted-foreground">InsightMatches의 LinkedIn 업데이트에서 직접 가져온 최신 소식입니다.</p>
          </div>
        </section>
        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <NewsList
              lang="ko"
              labels={{
                readMore: 'LinkedIn에서 보기',
                followLinkedIn: 'LinkedIn에서 팔로우하기',
                source: 'LinkedIn',
                empty: '아직 소식이 없습니다. 곧 다시 확인해 주세요!',
              }}
            />
          </div>
        </section>
      </main>
    </div>
  );
};
export default KoResourcesNews;
