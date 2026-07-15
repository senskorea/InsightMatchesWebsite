import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';
import { aboutPageSchema, organizationSchema } from '@/lib/seo-schemas';
import { Target, Users, Award, ArrowRight, Handshake, Globe, Building2 } from 'lucide-react';

const FrAbout = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = 'À propos — InsightMatches';
  }, []);

  if (currentLanguage !== 'fr') {
    return <Navigate to="/about" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO
        lang="fr"
        title="À propos d'InsightMatches — Trait d'union entre l'Europe et l'Asie en R&D"
        description="Découvrez InsightMatches : la plateforme d'IA qui relie l'Europe et l'Asie. Plus de 20 M€ en pipeline de financement R&I européen soutenu, un taux de succès deux fois supérieur à la moyenne UE."
        canonical="/fr/about"
        alternates={[
          { hreflang: 'en', href: 'https://www.insightmatches.com/about' },
          { hreflang: 'fr', href: 'https://www.insightmatches.com/fr/about' },
        ]}
        jsonLd={[aboutPageSchema, organizationSchema]}
      />
      <Navbar />

      <section className="pt-24 pb-16 px-4" lang="fr">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Handshake className="w-4 h-4" />
            <span className="text-sm font-medium">À propos & nos partenaires</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">À propos d'InsightMatches</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trait d'union entre l'Europe et l'Asie grâce à des solutions de financement de la
            recherche pilotées par l'IA et à des partenariats stratégiques.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-xl bg-card border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 mx-auto">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Notre mission</h3>
              <p className="text-muted-foreground">
                Démocratiser l'accès aux financements européens de la recherche en rendant la
                complexité abordable grâce à l'IA et à l'expertise humaine.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 mx-auto">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Notre vision</h3>
              <p className="text-muted-foreground">
                Un monde où les chercheurs se concentrent sur la science pendant que nous gérons
                la complexité du financement.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 mx-auto">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Nos valeurs</h3>
              <p className="text-muted-foreground">
                Excellence, innovation, transparence et engagement total auprès de nos clients.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-border mb-16">
            <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                InsightMatches est né d'un constat simple : l'écart entre une idée brillante et
                une candidature retenue par l'UE était inutilement large. Sur Horizon Europe, l'EIC,
                Erasmus+ et Interreg, trop de projets de valeur échouent non par manque de mérite,
                mais à cause d'une complexité de navigation excessive.
              </p>
              <p>
                Notre équipe combine une expertise pointue de l'écosystème européen de la recherche
                et des technologies d'IA de pointe pour transformer le parcours de candidature.
                Nous avons contribué à soutenir <strong>plus de 20 M€ en pipeline de financement</strong>
                pour nos clients, avec un taux de succès deux fois supérieur à la moyenne européenne.
                (Le pipeline reflète les propositions que nous avons aidé à préparer et soumettre —
                pas des fonds déjà décaissés.)
              </p>
              <p>
                Présents en Europe comme en Asie, nous relions continents, cultures et compétences
                pour permettre aux chercheurs et innovateurs de réaliser leur plein potentiel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">Réseau de partenaires</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Un réseau de confiance</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nous travaillons avec des entreprises innovantes et des professionnels de tous
              secteurs pour amener des solutions de pointe sur le marché.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Réseau européen</h3>
              <p className="text-sm text-muted-foreground">
                Partenariats solides avec les principales institutions de recherche et hubs
                d'innovation européens.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Partenaires industriels</h3>
              <p className="text-sm text-muted-foreground">
                Collaborations avec des entreprises technologiques, des PME et des innovateurs
                grands comptes.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Alliances stratégiques</h3>
              <p className="text-sm text-muted-foreground">
                Plus de 90 clients dans notre pipeline et un vivier de partenaires qualifiés,
                prêts à constituer des consortiums.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-border mb-12">
            <h2 className="text-3xl font-bold mb-6">Notre philosophie du partenariat</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Chez InsightMatches, les partenariats sont au cœur de notre activité. Nous croyons
                que les meilleurs résultats émergent de collaborations diverses et complémentaires,
                qui dépassent frontières, disciplines et secteurs.
              </p>
              <p>
                Notre réseau de partenaires est sélectionné avec soin pour garantir qualité,
                fiabilité et alignement avec les exigences des financements européens.
              </p>
              <p className="font-medium text-foreground">
                Envie de devenir partenaire ? Nous cherchons en permanence à élargir notre réseau
                à des organisations engagées pour la recherche européenne.
              </p>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <Link to="/about/gep" className="group p-6 rounded-xl bg-card border border-border hover:border-primary transition-all flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">Plan pour l'égalité de genre</h3>
                <p className="text-sm text-muted-foreground">
                  Notre engagement en faveur de la diversité, de l'équité et de l'inclusion.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrAbout;
