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
const URL = `${SITE}/fr/eu-korea-digital-partnership`;

const faqs = [
  {
    question: "Qu'est-ce que le partenariat numérique EU–Corée ?",
    answer:
      "Signé en novembre 2022, il s'agit d'un accord stratégique couvrant semi-conducteurs, 5G/6G, quantique, IA, cybersécurité, identité numérique et plateformes. Il a ouvert la voie à l'association de la Corée au Pilier II d'Horizon Europe en 2025.",
  },
  {
    question: "Quel impact sur les financements deep-tech ?",
    answer:
      "Il débloque des appels conjoints Horizon Europe dans le Cluster 4 (Numérique, industrie et espace), permet des appels co-financés UE–ministères coréens (MSIT, MOTIE) et priorise la participation coréenne aux consortiums semi-conducteurs et IA.",
  },
  {
    question: "Quels ministères coréens pilotent le partenariat ?",
    answer:
      "Principalement le MSIT (Science et TIC) et le MOTIE (Commerce, industrie et énergie), avec NRF et KIAT comme agences de mise en œuvre.",
  },
  {
    question: "Existe-t-il des appels Horizon Europe spécifiquement fléchés Corée ?",
    answer:
      "Oui — le Programme de travail 2025–2027 contient des sujets spécifiques du Cluster 4 (semi-conducteurs, 6G, quantique, sûreté de l'IA) qui mentionnent explicitement la coopération internationale avec la Corée.",
  },
];

const FrDigitalPartnership = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    document.title = "Partenariat numérique EU–Corée et financements deep-tech | InsightMatches";
  }, []);

  if (currentLanguage !== 'fr') {
    return <Navigate to="/resources/eu-korea-digital-partnership" replace />;
  }

  const description =
    "Comment l'accord de partenariat numérique EU–Corée de 2022 redessine le financement deep-tech sous Horizon Europe : semi-conducteurs, 6G, IA, quantique et appels conjoints MSIT/MOTIE.";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang="fr"
        title="Partenariat numérique EU–Corée : impact sur les financements deep-tech"
        description={description}
        canonical="/fr/eu-korea-digital-partnership"
        ogType="article"
        alternates={[
          { hreflang: 'en', href: `${SITE}/resources/eu-korea-digital-partnership` },
          { hreflang: 'fr', href: URL },
        ]}
        jsonLd={[
          organizationSchema,
          buildArticleSchema({
            title: "Partenariat numérique EU–Corée et financements deep-tech",
            description,
            url: URL,
            datePublished: '2026-01-22',
            inLanguage: 'fr',
          }),
          buildFaqSchema(faqs),
          buildBreadcrumbSchema([
            { name: 'Accueil', url: `${SITE}/` },
            { name: 'Ressources', url: `${SITE}/resources` },
            { name: 'Partenariat numérique', url: URL },
          ]),
        ]}
      />
      <Navbar />

      <article className="pt-28 pb-20 px-4" lang="fr">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-muted-foreground mb-4">
            <Link to="/resources" className="hover:underline">Ressources</Link>
            <span className="mx-2">/</span>
            <span>Politique</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Partenariat numérique EU–Corée : impact sur les financements deep-tech
          </h1>

          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mb-8">
            <p className="text-lg leading-relaxed">
              <strong>En bref :</strong> le partenariat numérique de 2022 a débloqué la programmation
              conjointe en <strong>semi-conducteurs, 6G, quantique, IA et cybersécurité</strong>. Il
              a directement permis l'association de la Corée au Pilier II en janvier 2025, ouvrant
              environ <strong>15,35 Md€</strong> du Cluster 4 aux partenariats et créant des appels
              co-financés MSIT/MOTIE–CE pour les start-ups deep-tech.
            </p>
          </div>

          <p className="text-muted-foreground mb-10 text-lg">
            Mis à jour en janvier 2026 · 8 min de lecture · Pour fondateurs deep-tech, TTO et
            analystes politiques.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">1. Du MoU à l'association complète</h2>
          <p className="mb-4">
            Signé à Séoul le 28 novembre 2022, ce partenariat numérique était le troisième de
            l'UE (après le Japon et Singapour). Il a établi une coordination formelle sur six
            piliers : semi-conducteurs, au-delà de la 5G/6G, technologies quantiques, calcul haute
            performance, cybersécurité et plateformes en ligne. Il a constitué la base politique de
            l'accord d'association signé en mars 2024.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">2. Instruments de financement débloqués</h2>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li><strong>Cluster 4 — Numérique, industrie & espace :</strong> 15,35 Md€. Les entités coréennes en sont bénéficiaires à part entière.</li>
            <li><strong>Chips JU :</strong> les fonderies et IP houses coréennes peuvent rejoindre les lignes pilotes et plateformes de design.</li>
            <li><strong>Appels co-financés MSIT–CE :</strong> appels conjoints annuels alignés sur la stratégie K-Digital.</li>
            <li><strong>EUREKA / Eurostars :</strong> R&D collaborative PME pour les start-ups innovantes.</li>
            <li><strong>EIC Pathfinder :</strong> participation indirecte via des partenaires européens.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">3. Priorités stratégiques 2025–2027</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3">Domaine</th>
                  <th className="text-left p-3">Budget indicatif</th>
                  <th className="text-left p-3">Angle coréen</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="p-3">Semi-conducteurs</td><td className="p-3">2,1 Md€</td><td className="p-3">Fonderies, EDA, packaging</td></tr>
                <tr className="border-b border-border"><td className="p-3">6G & au-delà 5G</td><td className="p-3">900 M€</td><td className="p-3">SK Telecom, KT, Samsung</td></tr>
                <tr className="border-b border-border"><td className="p-3">Technologies quantiques</td><td className="p-3">800 M€</td><td className="p-3">KRISS, KAIST</td></tr>
                <tr className="border-b border-border"><td className="p-3">IA de confiance</td><td className="p-3">1,5 Md€</td><td className="p-3">Sûreté et évaluation</td></tr>
                <tr className="border-b border-border"><td className="p-3">Cybersécurité</td><td className="p-3">700 M€</td><td className="p-3">Infrastructures critiques</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">4. Ce que cela signifie pour le deep-tech</h2>
          <ul className="space-y-2 list-disc pl-6 mb-6">
            <li>Flux directs de subventions : les PME coréennes reçoivent les fonds UE sans intermédiaire.</li>
            <li>Possibilité de coordonner des consortiums en semi-conducteurs, IA, 6G, quantique.</li>
            <li>Accès aux lignes pilotes, testbeds et clients de référence européens.</li>
            <li>Co-développement renforcé de PI et de normes avec les partenaires UE.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">FAQ</h2>
          <div className="space-y-4 mb-8">
            {faqs.map((f) => (
              <div key={f.question} className="border border-border rounded-lg p-5">
                <h3 className="font-semibold mb-2">{f.question}</h3>
                <p className="text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Trouvez vos partenaires Cluster 4 avec InsightMatches</h3>
            <a href="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Demander une démo <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            En lien : <Link className="text-primary underline" to="/fr/guide-horizon-europe">Guide Horizon Europe</Link> · <Link className="text-primary underline" to="/fr/ai-tools-consortium">Comparatif outils IA</Link>
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default FrDigitalPartnership;
