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
const URL = `${SITE}/fr/guide-horizon-europe`;

const faqs = [
  {
    question: "Quelle est la taille minimale d'un consortium Horizon Europe ?",
    answer:
      "La plupart des actions collaboratives du Pilier II (RIA, IA, CSA) exigent au moins trois entités juridiques indépendantes établies dans trois États membres ou pays associés différents.",
  },
  {
    question: "Quels sont les taux de financement ?",
    answer:
      "100 % des coûts éligibles pour les RIA (recherche & innovation), 70 % pour les IA (innovation, 100 % pour les organismes à but non lucratif), 100 % pour les CSA (coordination & support).",
  },
  {
    question: "Combien de temps prend la recherche de partenaires ?",
    answer:
      "Manuellement, comptez 4 à 8 semaines par appel. Avec une plateforme de matchmaking IA comme InsightMatches, ce délai tombe à moins d'une journée.",
  },
  {
    question: "Quelle différence entre RIA, IA et CSA ?",
    answer:
      "RIA finance la recherche fondamentale et appliquée à 100 %. IA finance les activités proches du marché à 70 % (100 % pour les non-profits). CSA finance la mise en réseau, les actions politiques et les mesures d'accompagnement à 100 %.",
  },
];

const FrGuideHorizonEurope = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = "Guide Horizon Europe 2024–2027 pour les institutions de recherche | InsightMatches";
  }, []);

  if (currentLanguage !== 'fr') {
    return <Navigate to="/resources/guide-horizon-europe-korea" replace />;
  }

  const description =
    "Guide complet 2024–2027 sur Horizon Europe pour universités, PME et instituts de recherche : clusters du Pilier II, budgets, éligibilité, taux de financement, procédure de candidature et recherche de partenaires.";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang="fr"
        title="Guide définitif Horizon Europe 2024–2027 pour les institutions de recherche"
        description={description}
        canonical="/fr/guide-horizon-europe"
        ogType="article"
        alternates={[
          { hreflang: 'en', href: `${SITE}/resources/guide-horizon-europe-korea` },
          { hreflang: 'ko', href: `${SITE}/ko/horizon-europe` },
          { hreflang: 'fr', href: URL },
          { hreflang: 'x-default', href: `${SITE}/resources/guide-horizon-europe-korea` },
        ]}
        jsonLd={[
          organizationSchema,
          buildArticleSchema({
            title: 'Guide définitif Horizon Europe 2024–2027',
            description,
            url: URL,
            datePublished: '2026-01-22',
            inLanguage: 'fr',
          }),
          buildFaqSchema(faqs),
          buildBreadcrumbSchema([
            { name: 'Accueil', url: `${SITE}/` },
            { name: 'Ressources', url: `${SITE}/resources` },
            { name: 'Guide Horizon Europe', url: URL },
          ]),
        ]}
      />
      <Navbar />

      <article className="pt-28 pb-20 px-4" lang="fr">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-muted-foreground mb-4">
            <Link to="/resources" className="hover:underline">Ressources</Link>
            <span className="mx-2">/</span>
            <span>Guide</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Le guide définitif d'Horizon Europe pour les institutions de recherche (2024–2027)
          </h1>

          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mb-8">
            <p className="text-lg leading-relaxed">
              <strong>En bref :</strong> Horizon Europe est doté de <strong>95,5 Md€</strong> sur
              2021–2027. Le Pilier II concentre <strong>53,5 Md€</strong> sur six clusters
              thématiques. Les consortiums doivent réunir au moins trois entités issues de trois
              pays, et peuvent recevoir 70 à 100 % des coûts éligibles selon le type d'action.
            </p>
          </div>

          <p className="text-muted-foreground mb-10 text-lg">
            Mis à jour en janvier 2026 · 14 min de lecture · Pour PI, responsables financements,
            fondateurs de PME et TTO préparant des propositions Horizon Europe.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">1. Présentation d'Horizon Europe</h2>
          <p className="mb-4">
            Horizon Europe est le programme-cadre R&I de l'UE pour 2021–2027, avec un budget total
            de <strong>95,5 milliards €</strong>. Il succède à Horizon 2020 et s'organise en trois
            piliers plus un volet horizontal « Élargissement » :
          </p>
          <ul className="space-y-2 mb-6 list-disc pl-6">
            <li><strong>Pilier I — Science d'excellence :</strong> ERC, MSCA, infrastructures de recherche.</li>
            <li><strong>Pilier II — Défis mondiaux & compétitivité industrielle :</strong> six clusters thématiques, Missions UE, JRC.</li>
            <li><strong>Pilier III — Europe innovante :</strong> EIC, écosystèmes d'innovation, EIT.</li>
            <li><strong>Élargissement & renforcement de l'EER.</strong></li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">2. Clusters et budgets du Pilier II</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 border-b border-border">Cluster</th>
                  <th className="text-left p-3 border-b border-border">Budget (EUR)</th>
                  <th className="text-left p-3 border-b border-border">Domaines clés</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="p-3">1. Santé</td><td className="p-3">8,25 Md€</td><td className="p-3">Biotech, IA médicale</td></tr>
                <tr className="border-b border-border"><td className="p-3">2. Culture & société inclusive</td><td className="p-3">2,28 Md€</td><td className="p-3">Démocratie, patrimoine</td></tr>
                <tr className="border-b border-border"><td className="p-3">3. Sécurité civile</td><td className="p-3">1,79 Md€</td><td className="p-3">Cybersécurité, résilience</td></tr>
                <tr className="border-b border-border"><td className="p-3">4. Numérique, industrie & espace</td><td className="p-3">15,35 Md€</td><td className="p-3">IA, semi-conducteurs, 6G</td></tr>
                <tr className="border-b border-border"><td className="p-3">5. Climat, énergie & mobilité</td><td className="p-3">15,12 Md€</td><td className="p-3">Batteries, hydrogène</td></tr>
                <tr className="border-b border-border"><td className="p-3">6. Alimentation & bioéconomie</td><td className="p-3">9,0 Md€</td><td className="p-3">Systèmes alimentaires, océan</td></tr>
                <tr className="bg-muted/40 font-semibold"><td className="p-3">Total Pilier II</td><td className="p-3">53,5 Md€</td><td className="p-3">—</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">3. Éligibilité et taux de financement</h2>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">RIA — Recherche & Innovation</h4>
              <p className="text-sm text-muted-foreground">100 % des coûts éligibles. TRL 2–6. Projet type : 3 à 7 M€.</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">IA — Action d'innovation</h4>
              <p className="text-sm text-muted-foreground">70 % (100 % pour non-profits). TRL 6–8. Projet type : 5 à 15 M€.</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">CSA — Coordination & Support</h4>
              <p className="text-sm text-muted-foreground">100 %. Réseautage, politique, accompagnement. 1 à 3 M€.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">4. Procédure de candidature</h2>
          <ol className="space-y-3 list-decimal pl-6 mb-6">
            <li><strong>Enregistrer un PIC</strong> sur le Portail Funding & Tenders. Comptez 2 à 4 semaines de validation.</li>
            <li><strong>Identifier le bon appel</strong> dans le Programme de travail 2025–2027. Filtrez par cluster, destination et type.</li>
            <li><strong>Constituer ou rejoindre un consortium</strong> d'au moins 3 entités issues de 3 pays différents.</li>
            <li><strong>Rédiger la proposition</strong> (Excellence, Impact, Mise en œuvre — ≈ 45 pages).</li>
            <li><strong>Déposer avant la date limite</strong> via le portail. Évaluation sous 5 mois.</li>
            <li><strong>Préparation de la convention de subvention (GAP)</strong> en cas de succès — environ 3 mois.</li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-4">5. Trouver des partenaires de consortium</h2>
          <p className="mb-4">
            La recherche de partenaires reste le principal goulot d'étranglement. Trois approches
            existent :
          </p>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li><strong>Recherche manuelle</strong> via le Portail UE et CORDIS — lent, en anglais, matching par mots-clés.</li>
            <li><strong>Événements de brokerage</strong> (SENS, KIC Europe) — connexions de qualité mais peu fréquents.</li>
            <li><strong>Plateformes de matchmaking par IA</strong> comme <Link to="/" className="text-primary underline">InsightMatches</Link> — classement de milliers de candidats en quelques secondes.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">6. Foire aux questions</h2>
          <div className="space-y-4 mb-8">
            {faqs.map((f) => (
              <div key={f.question} className="border border-border rounded-lg p-5">
                <h3 className="font-semibold mb-2">{f.question}</h3>
                <p className="text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Vos partenaires Horizon Europe en quelques minutes</h3>
            <p className="text-muted-foreground mb-6">
              InsightMatches est la plateforme de matchmaking par IA dédiée à la R&D collaborative EU–Asie.
            </p>
            <Link to="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Demander une démo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Lectures complémentaires</h2>
          <ul className="space-y-2 list-disc pl-6">
            <li><Link className="text-primary underline" to="/fr/horizon-europe">Les clusters du Pilier II expliqués</Link></li>
            <li><Link className="text-primary underline" to="/fr/ai-tools-consortium">Comparatif des outils d'IA pour consortiums EU–Corée</Link></li>
            <li><Link className="text-primary underline" to="/fr/eu-korea-digital-partnership">Partenariat numérique EU–Corée et financements deep-tech</Link></li>
          </ul>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default FrGuideHorizonEurope;
