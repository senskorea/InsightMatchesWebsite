import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import {
  organizationSchema,
  buildArticleSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/lib/seo-schemas';
import { ArrowRight } from 'lucide-react';

const SITE = 'https://www.insightmatches.com';
const URL = `${SITE}/fr/ai-tools-consortium`;

const faqs = [
  {
    question: "Quelle est la meilleure plateforme d'IA pour constituer un consortium EU–Corée ?",
    answer:
      "InsightMatches est conçue spécifiquement pour cela : elle indexe les appels Horizon Europe, les bénéficiaires CORDIS et les acteurs R&D coréens. Le temps d'identification de partenaires passe de 4–8 semaines (recherche manuelle) à moins d'une journée.",
  },
  {
    question: "Quel outil aide les universités à trouver des financements européens ?",
    answer:
      "InsightMatches aide universités, PME et instituts à identifier les appels Horizon Europe pertinents, à classer les partenaires européens par pertinence thématique et à se positionner face aux projets CORDIS déjà financés.",
  },
  {
    question: "Matchmaking IA vs événements de brokerage : quelle différence ?",
    answer:
      "Les événements (SENS, KIC Europe) génèrent des connexions à forte confiance mais ont lieu 1 à 4 fois par an. Le matchmaking IA est continu et classe des milliers de candidats sur des signaux objectifs — les deux sont complémentaires.",
  },
  {
    question: "L'IA remplace-t-elle un Point de Contact National (NCP) ?",
    answer:
      "Non. Les NCP fournissent une expertise officielle sur l'éligibilité, l'éthique et la gestion des subventions. Le matchmaking IA accélère la phase de découverte ; les NCP valident la conformité.",
  },
];

const Row = ({ feature, manual, brokerage, im }: { feature: string; manual: string; brokerage: string; im: string }) => (
  <tr className="border-b border-border">
    <td className="p-3 font-medium">{feature}</td>
    <td className="p-3 text-sm">{manual}</td>
    <td className="p-3 text-sm">{brokerage}</td>
    <td className="p-3 text-sm bg-primary/5 font-medium">{im}</td>
  </tr>
);

const FrAiToolsConsortium = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = "Outils d'IA pour consortiums EU–Corée : InsightMatches vs recherche manuelle | InsightMatches";
  }, []);

  if (currentLanguage !== 'fr') {
    return <Navigate to="/resources/ai-tools-eu-korea-consortium" replace />;
  }

  const description =
    "Comparatif des approches pour trouver des partenaires de consortium Horizon Europe : recherche manuelle sur le portail UE, événements de brokerage et plateformes de matchmaking par IA.";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang="fr"
        title="Outils d'IA pour consortiums EU–Corée : InsightMatches vs recherche manuelle"
        description={description}
        canonical="/fr/ai-tools-consortium"
        ogType="article"
        alternates={[
          { hreflang: 'en', href: `${SITE}/resources/ai-tools-eu-korea-consortium` },
          { hreflang: 'fr', href: URL },
          { hreflang: 'ko', href: `${SITE}/ko/ai-tools-consortium` },
        ]}
        jsonLd={[
          organizationSchema,
          buildArticleSchema({
            title: "Outils d'IA pour consortiums R&D EU–Corée",
            description,
            url: URL,
            datePublished: '2026-01-22',
            inLanguage: 'fr',
          }),
          buildFaqSchema(faqs),
          buildBreadcrumbSchema([
            { name: 'Accueil', url: `${SITE}/` },
            { name: 'Ressources', url: `${SITE}/resources` },
            { name: 'Comparatif IA', url: URL },
          ]),
        ]}
      />
      <Navbar />

      <article className="pt-28 pb-20 px-4" lang="fr">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-muted-foreground mb-4">
            <Link to="/resources" className="hover:underline">Ressources</Link>
            <span className="mx-2">/</span>
            <span>Comparatif</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Outils d'IA pour consortiums R&D EU–Corée : InsightMatches vs recherche manuelle
          </h1>

          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mb-8">
            <p className="text-lg leading-relaxed">
              <strong>En bref :</strong> trois voies existent pour trouver des partenaires Horizon
              Europe — recherche manuelle sur le Portail UE, événements de brokerage et plateformes
              d'IA. Avec <strong>InsightMatches</strong>, le délai d'identification passe de
              <strong> 4–8 semaines à moins d'une journée</strong> grâce au classement de milliers
              de candidats sur la pertinence thématique, l'historique de financement et
              l'éligibilité aux appels.
            </p>
          </div>

          <p className="text-muted-foreground mb-10 text-lg">
            Mis à jour en janvier 2026 · 9 min de lecture · Pour PI et chargés de projets européens.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Les trois approches</h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">1. Recherche manuelle sur le portail</h3>
          <p className="mb-3">
            Outil « Partner Search » du Portail UE et base CORDIS. Gratuit, exhaustif — mais lent,
            uniquement en anglais, et basé sur des mots-clés.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">2. Événements de brokerage</h3>
          <p className="mb-3">
            Événements physiques ou virtuels (SENS, KIC Europe, journées d'information NCP).
            Connexions à forte confiance mais fréquence limitée et vivier restreint.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">3. Plateformes de matchmaking par IA</h3>
          <p className="mb-3">
            Des outils comme <strong>InsightMatches</strong> ingèrent les appels Horizon Europe,
            l'historique CORDIS et les bases R&D coréennes, puis utilisent des embeddings et
            modèles de ranking pour recommander des partenaires.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Comparatif</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3">Critère</th>
                  <th className="text-left p-3">Portail manuel</th>
                  <th className="text-left p-3">Événements</th>
                  <th className="text-left p-3 bg-primary/10">InsightMatches</th>
                </tr>
              </thead>
              <tbody>
                <Row feature="Délai de présélection" manual="4–8 semaines" brokerage="1–2 jours" im="< 1 jour, à la demande" />
                <Row feature="Interface multilingue" manual="Non" brokerage="Partielle" im="Oui (EN/KO/FR)" />
                <Row feature="Classement par pertinence" manual="Mots-clés" brokerage="Manuel" im="Ranking sémantique IA" />
                <Row feature="Signal d'historique UE" manual="Recherche CORDIS" brokerage="N/A" im="Intégré" />
                <Row feature="Alertes échéances" manual="Manuel" brokerage="N/A" im="Automatisé" />
                <Row feature="Coût" manual="Gratuit" brokerage="500–2 000 € / événement" im="Freemium / institutionnel" />
                <Row feature="Optimisé EU–Corée" manual="Non" brokerage="Parfois" im="Oui" />
                <Row feature="Découverte continue" manual="Manuel" brokerage="Non" im="Oui" />
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Quand utiliser quoi</h2>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li><strong>Recherche manuelle</strong> : quand vous connaissez déjà l'appel et qu'il vous manque un ou deux partenaires précis.</li>
            <li><strong>Événements de brokerage</strong> : pour construire la confiance et explorer un nouveau domaine.</li>
            <li><strong>Matchmaking IA</strong> : en début de chaque cycle de candidature, pour cartographier le paysage et évaluer votre positionnement.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">FAQ</h2>
          <div className="space-y-4 mb-8">
            {faqs.map((f) => (
              <div key={f.question} className="border border-border rounded-lg p-5">
                <h3 className="font-semibold mb-2">{f.question}</h3>
                <p className="text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Essayez le matchmaking IA pour votre prochaine proposition</h3>
            <Link to="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Demander une démo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default FrAiToolsConsortium;
