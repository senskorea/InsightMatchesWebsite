import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';

const FrGenderEqualityPlan = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => { document.title = "Plan pour l'égalité de genre - InsightMatches Corp."; }, []);
  if (currentLanguage !== 'fr') return <Navigate to="/about/gep" replace />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <SEO lang="fr" title="Plan pour l'égalité de genre — InsightMatches" description="Plan officiel d'InsightMatches Corp. pour l'égalité de genre : engagements, ressources, axes d'action et suivi." canonical="/fr/about/gep" />
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm rounded-xl p-8 shadow-lg" lang="fr">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Plan pour l'égalité de genre : InsightMatches Corp.</h1>
          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Déclaration officielle de politique</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Société :</strong> InsightMatches Corp. (인사이트매치스 주식회사)</p>
                <p><strong>Date d'approbation :</strong> 1er juillet 2025</p>
                <p><strong>Approuvé par :</strong> Paul Thomas CONVERSY, Directeur représentant</p>
                <p><strong>Statut :</strong> document officiel publiquement accessible.</p>
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Notre engagement pour l'égalité</h2>
              <p className="text-muted-foreground leading-relaxed">InsightMatches Corp. repose sur les principes d'équité, de justice et d'innovation. Nous nous engageons fondamentalement à favoriser l'égalité de genre au sein de notre organisation, de nos pratiques commerciales et de nos interactions communautaires. Ce Plan pour l'égalité de genre (GEP) constitue notre cadre formel d'action, garantissant que nous bâtissons et maintenons activement un environnement de travail diversifié, inclusif et équitable à mesure que nous grandissons.</p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Ressources dédiées et responsabilité</h2>
              <p className="text-muted-foreground leading-relaxed">La mise en œuvre, le suivi et la révision continue de ce GEP relèvent directement de la responsabilité de notre Directeur représentant, Paul Thomas CONVERSY. À mesure que l'entreprise se développera, des ressources dédiées (temps et budget) seront allouées à la formation, à l'analyse de données et aux actions de sensibilisation liées à ce plan.</p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Axes thématiques d'action</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Bien qu'InsightMatches Corp. soit actuellement une micro-entreprise, nous mettons proactivement en place ce cadre pour guider notre avenir. Nous nous engageons à appliquer des politiques et bonnes pratiques dans les domaines clés suivants :</p>
              <div className="space-y-6">
                <div><h3 className="text-xl font-medium mb-2 text-foreground">Équilibre vie professionnelle / vie privée et culture organisationnelle</h3><p className="text-muted-foreground">Nous défendrons des modalités de travail flexibles et cultiverons une culture professionnelle respectueuse de l'intégration des sphères personnelle et professionnelle, quel que soit le genre.</p></div>
                <div><h3 className="text-xl font-medium mb-2 text-foreground">Équilibre de genre dans le leadership et la prise de décision</h3><p className="text-muted-foreground">À mesure que notre équipe s'agrandit, nous nous engageons à atteindre l'équilibre de genre dans tous les rôles de direction et de décision. Objectif : aucun genre ne détient plus de 60 % des postes à un niveau de management ou de conseil.</p></div>
                <div><h3 className="text-xl font-medium mb-2 text-foreground">Égalité de genre dans le recrutement et l'évolution de carrière</h3><p className="text-muted-foreground">Toutes les décisions de recrutement et de promotion reposeront exclusivement sur le mérite, les compétences et l'expérience. Nous utiliserons un langage neutre dans les fiches de poste et garantirons l'accès transparent et égal aux opportunités d'évolution.</p></div>
                <div><h3 className="text-xl font-medium mb-2 text-foreground">Intégration de la dimension de genre dans notre travail</h3><p className="text-muted-foreground">Nous intégrerons activement la dimension de genre dans la conception et la livraison de nos produits, services et activités de recherche, afin que notre travail serve équitablement toutes les composantes de la société.</p></div>
                <div><h3 className="text-xl font-medium mb-2 text-foreground">Mesures contre les violences fondées sur le genre, y compris le harcèlement sexuel</h3><p className="text-muted-foreground">InsightMatches Corp. applique une tolérance zéro vis-à-vis du harcèlement, de la discrimination et des violences fondées sur le genre. Une procédure claire, confidentielle et fiable de signalement et de traitement sera établie et communiquée à mesure que l'équipe grandit.</p></div>
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Collecte de données et suivi</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Pour garantir la responsabilité et mesurer nos progrès, nous nous engageons à :</p>
              <div className="space-y-4">
                <div><h3 className="text-xl font-medium mb-2 text-foreground">Collecte de données</h3><p className="text-muted-foreground">Réaliser une collecte annuelle de données ventilées par genre pour l'ensemble du personnel (une fois les embauches effectuées) et pour les postes de direction.</p></div>
                <div><h3 className="text-xl font-medium mb-2 text-foreground">Suivi et reporting</h3><p className="text-muted-foreground">Le Directeur représentant examinera annuellement les progrès au regard des objectifs du GEP. Une synthèse de cette revue sera publiée sur notre site pour garantir la transparence.</p></div>
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Formation et sensibilisation</h2>
              <p className="text-muted-foreground leading-relaxed">Pour ancrer une culture d'égalité, le Directeur représentant s'engage à une formation continue sur l'égalité de genre, les biais inconscients et le leadership inclusif. Cet engagement à la formation continue sera une exigence pour tous les futurs employés en position de management et de direction.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FrGenderEqualityPlan;
