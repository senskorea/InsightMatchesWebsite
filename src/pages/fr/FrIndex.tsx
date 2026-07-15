import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import {
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from '@/lib/seo-schemas';
import { ArrowRight, Sparkles, Users, Globe2 } from 'lucide-react';

const SITE = 'https://www.insightmatches.com';

const FrIndex = () => {
  useEffect(() => {
    document.title = 'InsightMatches — IA pour trouver des partenaires Horizon Europe';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang="fr"
        title="InsightMatches — IA pour trouver des partenaires Horizon Europe"
        description="Trouvez en quelques minutes vos partenaires de consortium Horizon Europe grâce à l'IA. Plateforme dédiée aux institutions de recherche, universités et PME."
        canonical="/fr/"
        alternates={[
          { hreflang: 'en', href: `${SITE}/` },
          { hreflang: 'ko', href: `${SITE}/ko/` },
          { hreflang: 'fr', href: `${SITE}/fr/` },
          { hreflang: 'x-default', href: `${SITE}/` },
        ]}
        jsonLd={[organizationSchema, softwareApplicationSchema, websiteSchema]}
      />
      <Navbar />

      <main lang="fr" className="pt-28 pb-20 px-4">
        <section className="max-w-5xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs rounded-full bg-primary/10 text-primary font-medium">
            Plateforme dédiée à la R&D EU–Asie
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Vos partenaires Horizon Europe,<br/>trouvés en quelques minutes
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            InsightMatches est la plateforme d'IA qui aide universités, PME et institutions de recherche
            à identifier les bons partenaires de consortium et à décrocher des financements Horizon Europe.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Demander une démo <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/fr/horizon-europe"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition"
            >
              Guide Horizon Europe
            </Link>
          </div>
        </section>

        <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl border border-border">
            <Sparkles className="w-8 h-8 text-primary mb-3" />
            <h2 className="text-lg font-semibold mb-2">Matching IA des partenaires</h2>
            <p className="text-sm text-muted-foreground">
              Des milliers de partenaires européens classés instantanément selon la pertinence
              thématique, l'historique de financement et l'éligibilité aux appels.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border">
            <Globe2 className="w-8 h-8 text-primary mb-3" />
            <h2 className="text-lg font-semibold mb-2">Financements européens</h2>
            <p className="text-sm text-muted-foreground">
              Explorez les six clusters du Pilier II (€53,5 Md) et recevez des alertes sur les
              échéances qui comptent pour vous.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border">
            <Users className="w-8 h-8 text-primary mb-3" />
            <h2 className="text-lg font-semibold mb-2">Matchmaking événements SENS</h2>
            <p className="text-sm text-muted-foreground">
              Un outil dédié pour connecter les participants des événements R&D EU–Corée aux
              meilleurs collaborateurs possibles.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Cas d'usage</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <li>· Horizon Europe — Pilier II</li>
            <li>· Recherche de partenaires consortium</li>
            <li>· Plateforme de conseil en financements européens</li>
            <li>· Comment candidater à Horizon Europe</li>
            <li>· Coopération R&D EU–Corée</li>
            <li>· Matchmaking événementiel SENS</li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground">
            English: <Link className="text-primary underline" to="/">www.insightmatches.com</Link>
            {' · '}한국어: <Link className="text-primary underline" to="/ko/">한국어 버전</Link>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FrIndex;
