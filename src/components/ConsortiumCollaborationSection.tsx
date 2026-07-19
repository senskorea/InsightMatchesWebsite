import React from 'react';
import { Users, FileUp, CheckSquare2, BarChart3 } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export const ConsortiumCollaborationSection = () => {
  const { t, currentLanguage } = useTranslation();

  const features = [
    {
      icon: Users,
      title: currentLanguage === 'ko' ? '파트너 중심 워크스페이스' : currentLanguage === 'fr' ? 'Espace de travail centré sur les partenaires' : 'Partner-Centric Workspace',
      desc: currentLanguage === 'ko'
        ? '컨소시엄의 모든 파트너를 한 곳에서 관리하고, 실시간으로 협업하세요.'
        : currentLanguage === 'fr'
        ? 'Gérez tous les partenaires de votre consortium au même endroit et collaborez en temps réel.'
        : 'Manage all consortium partners in one place and collaborate in real time.'
    },
    {
      icon: FileUp,
      title: currentLanguage === 'ko' ? '파트너별 문서 수집' : currentLanguage === 'fr' ? 'Collecte de documents par partenaire' : 'Per-Partner Document Collection',
      desc: currentLanguage === 'ko'
        ? '각 파트너가 자신의 CV, 소유권 서류, 법적 증명서를 안전하게 업로드합니다.'
        : currentLanguage === 'fr'
        ? 'Chaque partenaire télécharge son CV, ses documents de propriété et ses certificats légaux en toute sécurité.'
        : 'Each partner securely uploads their CV, ownership docs, and legal certificates.'
    },
    {
      icon: CheckSquare2,
      title: currentLanguage === 'ko' ? '제출 준비도 체크리스트' : currentLanguage === 'fr' ? 'Liste de contrôle de préparation des soumissions' : 'Submission Readiness Checklist',
      desc: currentLanguage === 'ko'
        ? '제안서 완성도를 실시간으로 추적하고, 모든 필수 요소가 충족되었는지 확인하세요.'
        : currentLanguage === 'fr'
        ? 'Suivez la complétude de votre proposition en temps réel et vérifiez que tous les éléments requis sont en place.'
        : 'Track proposal completeness in real time and ensure all required elements are met.'
    },
    {
      icon: BarChart3,
      title: currentLanguage === 'ko' ? '행정 정보 대시보드' : currentLanguage === 'fr' ? 'Tableau de bord des informations administratives' : 'Administrative Info Dashboard',
      desc: currentLanguage === 'ko'
        ? 'EU 포털 Part A 양식과 매핑되는 구조화된 행정 데이터를 한눈에 보세요.'
        : currentLanguage === 'fr'
        ? 'Consultez les données administratives structurées mappées au formulaire Part A du portail EU en un coup d\'œil.'
        : 'View structured administrative data mapped to the EU portal Part A form at a glance.'
    }
  ];

  return (
    <div className="w-full py-16 md:py-24 px-4 md:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {currentLanguage === 'ko'
              ? '컨소시엄 전체를 한곳에서 관리하세요'
              : currentLanguage === 'fr'
              ? 'Gérez votre consortium complet en un seul endroit'
              : 'Coordinate Your Entire Consortium in One Place'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {currentLanguage === 'ko'
              ? 'InsightMatches는 개별 AI 작성 도구와 달리, 파트너 문서 수집, 체크리스트, 행정 정보 관리를 통해 진정한 팀 협업을 지원합니다.'
              : currentLanguage === 'fr'
              ? 'Contrairement aux outils d\'écriture IA autonomes, InsightMatches facilite la véritable collaboration d\'équipe grâce à la collecte de documents partenaires, aux listes de contrôle et à la gestion des informations administratives.'
              : 'Unlike standalone AI writing tools, InsightMatches enables true team collaboration through partner document collection, checklists, and administrative information management.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                    <Icon size={24} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConsortiumCollaborationSection;
