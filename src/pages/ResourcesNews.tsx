import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { useTranslation } from '@/hooks/useTranslation';
import { Newspaper } from 'lucide-react';
import { NewsList } from '@/components/NewsList';
import { SEO } from '@/components/SEO';

const ResourcesNews = () => {
  const { currentLanguage } = useTranslation();

  useEffect(() => {
    document.title = 'News & Announcements — InsightMatches';
  }, []);

  if (currentLanguage === 'ko') return <Navigate to="/ko/resources/news" replace />;
  if (currentLanguage === 'fr') return <Navigate to="/fr/resources/news" replace />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO
        title="News & Announcements — InsightMatches"
        description="Latest updates from InsightMatches, sourced from our LinkedIn page."
        canonical="/resources/news"
      />
      <Navbar />

      <section className="pt-24 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Newspaper className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">News & Announcements</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            The latest from InsightMatches — sourced directly from our LinkedIn updates.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <NewsList
            lang="en"
            labels={{
              readMore: 'Read on LinkedIn',
              followLinkedIn: 'Follow us on LinkedIn',
              source: 'LinkedIn',
              empty: 'No news yet. Check back soon!',
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default ResourcesNews;
