import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';
import { BookOpen } from 'lucide-react';

const FrResourcesInsights = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => { document.title = 'Analyses & Entretiens — InsightMatches'; }, []);
  if (currentLanguage !== 'fr') return <Navigate to="/resources/insights" replace />;
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO lang="fr" title="Analyses & Entretiens — InsightMatches" description="Perspectives d'experts sur le financement européen de la recherche et les stratégies de partenariat." canonical="/fr/resources/insights" />
      <Navbar />
      <main lang="fr">
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6"><BookOpen className="w-8 h-8 text-primary" /><h1 className="text-4xl md:text-5xl font-bold">Analyses & Entretiens</h1></div>
            <p className="text-xl text-muted-foreground">Perspectives d'experts sur le financement européen de la recherche, les stratégies d'innovation et le développement de partenariats.</p>
          </div>
        </section>
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center p-12 rounded-xl bg-card border border-border">
              <h2 className="text-2xl font-semibold mb-4">Bientôt disponible</h2>
              <p className="text-muted-foreground">Nous préparons des analyses précieuses et des entretiens d'experts. Revenez bientôt !</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default FrResourcesInsights;
