import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';
import { Newspaper } from 'lucide-react';
import { NewsList } from '@/components/NewsList';

const FrResourcesNews = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => { document.title = 'Actualités & Annonces — InsightMatches'; }, []);
  if (currentLanguage !== 'fr') return <Navigate to="/resources/news" replace />;
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO lang="fr" title="Actualités & Annonces — InsightMatches" description="Les dernières actualités d'InsightMatches, issues de notre page LinkedIn." canonical="/fr/resources/news" />
      <Navbar />
      <main lang="fr">
        <section className="pt-24 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Newspaper className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Actualités & Annonces</h1>
            </div>
            <p className="text-xl text-muted-foreground">Les dernières nouvelles d'InsightMatches — directement issues de notre page LinkedIn.</p>
          </div>
        </section>
        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <NewsList
              lang="fr"
              labels={{
                readMore: 'Lire sur LinkedIn',
                followLinkedIn: 'Suivez-nous sur LinkedIn',
                source: 'LinkedIn',
                empty: "Pas encore d'actualités. Revenez bientôt !",
              }}
            />
          </div>
        </section>
      </main>
    </div>
  );
};
export default FrResourcesNews;
