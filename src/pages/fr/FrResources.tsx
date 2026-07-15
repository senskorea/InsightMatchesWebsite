import { useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';
import { BookOpen, Newspaper, ArrowRight, Globe2, FileText, GitCompare, Handshake } from 'lucide-react';

const FrResources = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => { document.title = 'Ressources — Horizon Europe & R&I UE–Corée | InsightMatches'; }, []);
  if (currentLanguage !== 'fr') return <Navigate to="/resources" replace />;

  const cards = [
    { to: '/resources/insights', icon: BookOpen, title: 'Analyses & Entretiens', desc: "Articles d'expert, entretiens et analyses approfondies sur le financement européen de la recherche et les stratégies de partenariat." },
    { to: '/resources/news', icon: Newspaper, title: 'Actualités & Annonces', desc: "Les dernières mises à jour de l'écosystème européen du financement de la recherche." },
    { to: '/fr/horizon-europe', icon: Globe2, title: "Qu'est-ce qu'Horizon Europe ?", desc: "Présentation complète du programme-cadre de R&I de l'UE doté de 95,5 milliards d'euros." },
    { to: '/fr/guide-horizon-europe', icon: FileText, title: 'Guide Horizon Europe pour la Corée', desc: 'Guide pratique pour les chercheurs et PME coréens souhaitant participer à Horizon Europe.' },
    { to: '/fr/ai-tools-consortium', icon: GitCompare, title: 'Outils IA pour consortiums UE–Corée', desc: 'Les meilleurs outils alimentés par IA pour construire des consortiums UE–Corée gagnants.' },
    { to: '/fr/eu-korea-digital-partnership', icon: Handshake, title: 'Partenariat numérique UE–Corée', desc: 'Analyse du partenariat numérique stratégique entre l\'UE et la Corée du Sud.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO lang="fr" title="Ressources — Horizon Europe & R&I UE–Corée" description="Guides, comparaisons et notes de politique sur Horizon Europe, la collaboration R&I UE–Corée et la formation de consortiums." canonical="/fr/resources" alternates={[{ hreflang: 'en', href: 'https://www.insightmatches.com/resources' }, { hreflang: 'fr', href: 'https://www.insightmatches.com/fr/resources' }, { hreflang: 'ko', href: 'https://www.insightmatches.com/ko/resources' }]} />
      <Navbar />
      <main lang="fr">
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Centre de ressources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Analyses d'expert, tendances du secteur et dernières actualités de l'écosystème européen du financement de la recherche.</p>
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
export default FrResources;
