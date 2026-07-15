import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';
import { Globe, Target, Users, Megaphone } from 'lucide-react';

const FrDissemination = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => { document.title = 'Diffusion & Impact — InsightMatches'; }, []);
  if (currentLanguage !== 'fr') return <Navigate to="/dissemination" replace />;

  const cards = [
    { icon: Globe, title: 'Réseau européen', desc: "Nous activons notre réseau dans toute l'UE pour maximiser la visibilité et l'impact de la recherche au sein des écosystèmes d'innovation européens." },
    { icon: Target, title: 'Communication stratégique', desc: "Des stratégies de diffusion ciblées pour atteindre les parties prenantes clés, les décideurs publics et les partenaires industriels." },
    { icon: Users, title: 'Engagement communautaire', desc: "Construire des ponts entre les communautés de recherche en Europe et en Asie grâce à un engagement actif et au partage de connaissances." },
    { icon: Megaphone, title: 'Amplification multicanale', desc: "Conférences, publications, médias sociaux et événements pour porter vos résultats vers les bonnes audiences." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO lang="fr" title="Diffusion & Impact — InsightMatches" description="Amplifier l'impact de la recherche grâce à une communication stratégique et à des partenariats UE–Corée." canonical="/fr/dissemination" alternates={[{ hreflang: 'en', href: 'https://www.insightmatches.com/dissemination' }, { hreflang: 'fr', href: 'https://www.insightmatches.com/fr/dissemination' }, { hreflang: 'ko', href: 'https://www.insightmatches.com/ko/dissemination' }]} />
      <Navbar />
      <main lang="fr">
        <section className="pt-32 sm:pt-28 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Diffusion & Impact</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Amplifier l'impact de la recherche par une communication stratégique et des partenariats ciblés.</p>
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
export default FrDissemination;
