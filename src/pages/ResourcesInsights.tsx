import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { useTranslation } from '@/hooks/useTranslation';
import { BookOpen } from 'lucide-react';

const ResourcesInsights = () => {
  const { t, currentLanguage } = useTranslation();

  useEffect(() => {
    document.title = 'Insights & Interviews - InsightMatches';
  }, []);

  if (currentLanguage === 'ko') return <Navigate to="/ko/resources/insights" replace />;
  if (currentLanguage === 'fr') return <Navigate to="/fr/resources/insights" replace />;


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Insights & Interviews</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Expert perspectives on EU research funding, innovation strategies, and partnership development
          </p>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center p-12 rounded-xl bg-card border border-border">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">
              We're preparing valuable insights and expert interviews for you. Check back soon!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesInsights;
