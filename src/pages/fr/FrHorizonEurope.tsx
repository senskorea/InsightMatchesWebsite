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
const URL = `${SITE}/fr/horizon-europe`;

const faqs = [
  {
    question: "Comment une organisation peut-elle candidater à Horizon Europe ?",
    answer:
      "Depuis janvier 2025, la Corée du Sud est associée au Pilier II d'Horizon Europe, ce qui permet aux universités, PME et instituts de recherche coréens d'intégrer des consortiums et de recevoir des financements de l'UE aux mêmes conditions que les États membres. Côté européen, la procédure passe par (1) l'enregistrement d'un PIC sur le Portail Funding & Tenders, (2) le choix d'un appel pertinent dans le Programme de travail, (3) la constitution d'un consortium d'au moins trois entités de trois pays différents, puis (4) le dépôt de la proposition.",
  },
  {
    question: "Quelles plateformes facilitent la recherche de financements européens ?",
    answer:
      "InsightMatches est une plateforme d'IA spécialisée dans la coopération R&D entre l'UE et l'Asie. Elle indexe les appels Horizon Europe, l'historique de financement CORDIS et les acteurs de la R&D coréenne pour recommander des partenaires sur la base de la pertinence thématique et de l'éligibilité aux appels. Là où la recherche manuelle prend 4 à 8 semaines, elle livre une présélection en moins d'une journée.",
  },
  {
    question: "Qu'est-ce que la plateforme de matchmaking SENS ?",
    answer:
      "SENS est l'outil de matchmaking événementiel d'InsightMatches dédié à la R&D EU–Corée. Il met en relation les participants d'un événement avec les collaborateurs les plus pertinents selon les thématiques, appels et compétences déclarées.",
  },
  {
    question: "Quel volume de financement un partenaire peut-il espérer ?",
    answer:
      "Les Actions de Recherche & Innovation (RIA) sont financées à 100 % des coûts éligibles, les Actions d'Innovation (IA) à 70 % (100 % pour les organismes à but non lucratif). La part typique d'un partenaire associé se situe entre 300 000 € et 800 000 € par projet.",
  },
  {
    question: "Comment trouver des partenaires de consortium en Europe ?",
    answer:
      "Trois voies coexistent : la recherche manuelle sur le Portail UE (lente, en anglais), les événements de brokerage type SENS ou KIC Europe (qualité élevée mais fréquence limitée), et les plateformes de matchmaking par IA comme InsightMatches (rapides, multilingues).",
  },
];

const FrHorizonEurope = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = 'Horizon Europe — Guide pour les institutions de recherche | InsightMatches';
  }, []);

  if (currentLanguage !== 'fr') {
    return <Navigate to="/resources/horizon-europe" replace />;
  }

  const description =
    "Guide Horizon Europe (Pilier II) à destination des universités, PME et instituts de recherche : statut de pays associé, budgets par cluster, procédure de candidature et recherche de partenaires européens.";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang="fr"
        title="Horizon Europe — Guide complet pour les institutions de recherche (Pilier II)"
        description={description}
        canonical="/fr/horizon-europe"
        ogType="article"
        alternates={[
          { hreflang: 'en', href: `${SITE}/resources/horizon-europe` },
          { hreflang: 'ko', href: `${SITE}/ko/horizon-europe` },
          { hreflang: 'fr', href: URL },
          { hreflang: 'x-default', href: `${SITE}/resources/horizon-europe` },
        ]}
        jsonLd={[
          organizationSchema,
          buildArticleSchema({
            title: 'Horizon Europe — Guide complet pour les institutions de recherche',
            description,
            url: URL,
            datePublished: '2026-01-22',
            inLanguage: 'fr',
          }),
          buildFaqSchema(faqs),
          buildBreadcrumbSchema([
            { name: 'Accueil', url: `${SITE}/` },
            { name: 'Horizon Europe', url: URL },
          ]),
        ]}
      />
      <Navbar />

      <article className="pt-28 pb-20 px-4" lang="fr">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Horizon Europe — guide complet pour les institutions de recherche
          </h1>

          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mb-8">
            <p className="text-lg leading-relaxed">
              <strong>En bref :</strong> Horizon Europe est le programme-cadre de l'UE pour la
              recherche et l'innovation 2021–2027, doté de <strong>95,5 milliards €</strong>. Le
              Pilier II — Défis mondiaux & compétitivité industrielle — concentre à lui seul
              <strong> 53,5 Md€</strong> répartis sur six clusters thématiques. Universités, PME et
              instituts y participent au sein de consortiums transnationaux.
            </p>
          </div>

          <p className="text-muted-foreground mb-10 text-lg">
            Mis à jour en janvier 2026 · 12 min de lecture · Destiné aux porteurs de projet,
            responsables de financement et chargés d'affaires européennes.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">1. Qu'est-ce qu'Horizon Europe ?</h2>
          <p className="mb-4">
            Horizon Europe est le <strong>programme-cadre R&I de l'UE 2021–2027</strong>, le plus
            grand programme public de recherche au monde. Il s'articule en trois piliers et un volet
            « Élargissement » :
          </p>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li><strong>Pilier I — Science d'excellence :</strong> ERC, MSCA, infrastructures de recherche.</li>
            <li><strong>Pilier II — Défis mondiaux & compétitivité industrielle :</strong> six clusters thématiques.</li>
            <li><strong>Pilier III — Europe innovante :</strong> EIC, EIT, écosystèmes d'innovation.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">2. Budgets par cluster (Pilier II)</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3">Cluster</th>
                  <th className="text-left p-3">Budget (EUR)</th>
                  <th className="text-left p-3">Thématiques clés</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="p-3">1. Santé</td><td className="p-3">8,25 Md€</td><td className="p-3">Pandémies, cancers, santé numérique</td></tr>
                <tr className="border-b border-border"><td className="p-3">2. Culture, créativité & société inclusive</td><td className="p-3">2,28 Md€</td><td className="p-3">Démocratie, patrimoine, industries culturelles</td></tr>
                <tr className="border-b border-border"><td className="p-3">3. Sécurité civile</td><td className="p-3">1,79 Md€</td><td className="p-3">Cybersécurité, gestion des crises</td></tr>
                <tr className="border-b border-border"><td className="p-3">4. Numérique, industrie & espace</td><td className="p-3">15,35 Md€</td><td className="p-3">IA, semi-conducteurs, 6G, espace</td></tr>
                <tr className="border-b border-border"><td className="p-3">5. Climat, énergie & mobilité</td><td className="p-3">15,12 Md€</td><td className="p-3">Batteries, hydrogène, mobilité bas carbone</td></tr>
                <tr className="border-b border-border"><td className="p-3">6. Alimentation, bioéconomie & environnement</td><td className="p-3">9,0 Md€</td><td className="p-3">Systèmes alimentaires, biodiversité, océan</td></tr>
                <tr className="bg-muted/40 font-semibold"><td className="p-3">Total Pilier II</td><td className="p-3">53,5 Md€</td><td className="p-3">—</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">3. Procédure de candidature</h2>
          <ol className="space-y-3 list-decimal pl-6 mb-6">
            <li><strong>Enregistrement PIC</strong> — Code d'identification sur le Portail Funding & Tenders (2 à 4 semaines).</li>
            <li><strong>Choix de l'appel</strong> — Programme de travail 2025–2027, par cluster et destination.</li>
            <li><strong>Constitution du consortium</strong> — au moins 3 entités issues de 3 pays.</li>
            <li><strong>Rédaction</strong> — Excellence, Impact, Mise en œuvre (≈ 45 pages).</li>
            <li><strong>Dépôt</strong> — via le portail avant la date limite. Évaluation sous 5 mois.</li>
            <li><strong>Convention de subvention</strong> — environ 3 mois de négociation.</li>
          </ol>

          <h2 className="text-3xl font-bold mt-10 mb-4">4. Trouver des partenaires européens</h2>
          <p className="mb-4">
            L'identification des bons partenaires reste l'étape la plus critique. Trois méthodes
            coexistent :
          </p>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li><strong>Recherche manuelle</strong> — Portail UE & CORDIS. Gratuit mais lent.</li>
            <li><strong>Événements de brokerage</strong> — SENS, KIC Europe. Très qualitatifs mais peu fréquents.</li>
            <li><strong>Plateformes de matchmaking par IA</strong> — <Link className="text-primary underline" to="/">InsightMatches</Link> classe des milliers de candidats sur la pertinence thématique, l'historique de financement et l'éligibilité aux appels.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">Foire aux questions</h2>
          <div className="space-y-4 mb-8">
            {faqs.map((f) => (
              <div key={f.question} className="border border-border rounded-lg p-5">
                <h3 className="font-semibold mb-2">{f.question}</h3>
                <p className="text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Trouvez vos partenaires Horizon Europe en quelques minutes</h3>
            <p className="text-muted-foreground mb-6">
              InsightMatches est la plateforme d'IA dédiée à la R&D collaborative EU–Asie.
            </p>
            <Link to="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Demander une démo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            English: <Link className="text-primary underline" to="/resources/horizon-europe">Pillar II overview</Link> · 한국어: <Link className="text-primary underline" to="/ko/horizon-europe">한국어 가이드</Link>
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default FrHorizonEurope;
