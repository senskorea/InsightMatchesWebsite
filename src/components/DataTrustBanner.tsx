import React from 'react';
import { Shield, CheckCircle2, Lock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export const DataTrustBanner = () => {
  const { t, currentLanguage } = useTranslation();

  const trustPoints = [
    {
      icon: Shield,
      title: currentLanguage === 'ko' ? 'EU 데이터 처리' : currentLanguage === 'fr' ? 'Traitement EU' : 'EU Data Processing',
      desc: currentLanguage === 'ko' ? '데이터는 Google Cloud DPA에 따라 EU 지역에서 처리됩니다' : currentLanguage === 'fr' ? 'Traité dans l\'UE selon l\'accord DPA de Google Cloud' : 'Processed in the EU under Google Cloud DPA'
    },
    {
      icon: Lock,
      title: currentLanguage === 'ko' ? 'AI 학습 제외' : currentLanguage === 'fr' ? 'Pas d\'entraînement IA' : 'No AI Training',
      desc: currentLanguage === 'ko' ? '귀하의 데이터는 AI 모델 학습에 사용되지 않습니다' : currentLanguage === 'fr' ? 'Vos données ne sont pas utilisées pour entraîner des modèles IA' : 'Your data is never used to train AI models'
    },
    {
      icon: CheckCircle2,
      title: 'GDPR Compliant',
      desc: currentLanguage === 'ko' ? 'GDPR, CCPA 및 국제 데이터 보호 규정 준수' : currentLanguage === 'fr' ? 'Conforme au RGPD, CCPA et réglementations internationales' : 'Compliant with GDPR, CCPA, and international regulations'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/20 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {currentLanguage === 'ko' ? '데이터 보안 & 개인정보 보호' : currentLanguage === 'fr' ? 'Sécurité des données & Confidentialité' : 'Data Security & Privacy'}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {currentLanguage === 'ko'
              ? 'InsightMatches는 EU 데이터 보호 규정을 엄격히 준수하며, 귀하의 제안서 초안과 파트너 데이터를 안전하게 보호합니다.'
              : currentLanguage === 'fr'
              ? 'InsightMatches respecte strictement les réglementations de protection des données de l\'UE, protégeant en toute sécurité vos brouillons de propositions et vos données partenaires.'
              : 'InsightMatches strictly adheres to EU data protection regulations, securely protecting your proposal drafts and partner data.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
                <div className="flex justify-center mb-4">
                  <Icon size={32} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{point.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DataTrustBanner;
