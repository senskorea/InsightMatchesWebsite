import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';
import { Briefcase, Code, Rocket, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const Jobs = () => {
  const { currentLanguage } = useTranslation();

  useEffect(() => {
    document.title = currentLanguage === 'ko' ? '채용 - InsightMatches' : currentLanguage === 'fr' ? 'Emplois - InsightMatches' : 'Jobs - InsightMatches';
  }, [currentLanguage]);

  const translations: Record<string, any> = {
    en: {
      badge: "Join the Founding Team",
      titleStart: "Build the ",
      titleHighlight: "Future",
      subtitle: "We're on a mission to transform how EU research funding is secured through agentic AI. Join us at the ground level.",
      jobs: [
        {
          id: 'cto',
          title: 'Founding CTO / Lead Engineer, AI Systems',
          department: 'Engineering',
          description: 'Take technical ownership of our AI-powered proposal platform. Lead our production launch and build next-generation agentic research tools.',
          tags: ['Early Stage', 'Equity Based']
        },
        {
          id: 'project-coordinator',
          title: 'Founding Project Coordinator, EU Grants',
          department: 'Operations',
          description: 'Act as the operational engine behind our client success. Manage complex EU funding proposals from concept to final submission.',
          tags: ['Early Stage', 'Equity Based']
        },
        {
          id: 'korea-country-manager',
          title: 'Country Manager Korea',
          department: 'Operations & Partnerships',
          description: 'Coordinate Korean operations, build stakeholder relationships, identify startup programmes and contribute to our marketing and sales strategies.',
          tags: ['Early Stage', 'Equity Based']
        }
      ]
    },
    ko: {
      badge: "창립 멤버 합류",
      titleStart: "",
      titleHighlight: "미래",
      titleEnd: "를 설계하세요",
      subtitle: "에이전틱 AI를 통해 EU 연구 자금을 확보하는 방식을 혁신하고자 합니다. 그 시작을 함께하세요.",
      jobs: [
        {
          id: 'cto',
          title: '창립 CTO / 리드 엔지니어, AI 시스템',
          department: '엔지니어링',
          description: 'AI 기반 제안서 플랫폼의 기술적 오너십을 갖습니다. 프로덕션 출시를 이끌고 차세대 에이전틱 연구 도구를 구축합니다.',
          tags: ['초기 단계', '지분 기반']
        },
        {
          id: 'project-coordinator',
          title: '창립 프로젝트 코디네이터, EU 그랜트',
          department: '운영',
          description: '고객 성공을 이끄는 핵심 역할을 담당합니다. 개념부터 최종 제출까지 복잡한 EU 자금 제안을 관리합니다.',
          tags: ['초기 단계', '지분 기반']
        },
        {
          id: 'korea-country-manager',
          title: '한국 컨트리 매니저',
          department: '운영 및 파트너십',
          description: '한국 내 회사 운영을 조율하고 주요 이해관계자와의 관계를 구축합니다. 스타트업 지원 프로그램을 발굴하고 마케팅 및 영업 전략 수립에 기여합니다.',
          tags: ['초기 단계', '지분 기반']
        }
      ]
    },
    fr: {
      badge: "Rejoignez l'équipe fondatrice",
      titleStart: "Construisez le ",
      titleHighlight: "Futur",
      subtitle: "Notre mission est de transformer la façon dont le financement de la recherche européenne est obtenu grâce à l'IA agentique. Rejoignez-nous dès le début.",
      jobs: [
        {
          id: 'cto',
          title: 'CTO Fondateur / Ingénieur Lead, Systèmes IA',
          department: 'Ingénierie',
          description: 'Prenez la responsabilité technique de notre plateforme. Dirigez notre lancement en production et construisez nos futurs outils.',
          tags: ['Phase Initiale', 'Basé sur l\'équité']
        },
        {
          id: 'project-coordinator',
          title: 'Coordinateur de Projet Fondateur, Subventions UE',
          department: 'Opérations',
          description: 'Agissez comme le moteur opérationnel de notre succès. Gérez les propositions de financement complexes de la conception à la soumission finale.',
          tags: ['Phase Initiale', 'Basé sur l\'équité']
        },
        {
          id: 'korea-country-manager',
          title: 'Country Manager Corée',
          department: 'Opérations et partenariats',
          description: 'Coordonnez les opérations en Corée, développez les relations institutionnelles, identifiez les programmes pour startups et contribuez aux stratégies marketing et commerciales.',
          tags: ['Phase Initiale', 'Basé sur l\'équité']
        }
      ]
    }
  };

  const t = translations[currentLanguage as string] || translations.en;

  const icons = {
    'cto': <Code className="w-6 h-6 text-sky-500" />,
    'project-coordinator': <Briefcase className="w-6 h-6 text-emerald-500" />,
    'korea-country-manager': <Target className="w-6 h-6 text-amber-500" />
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] relative overflow-hidden text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <SEO
        title={currentLanguage === 'ko' ? '채용 - InsightMatches' : currentLanguage === 'fr' ? 'Emplois - InsightMatches' : 'Jobs - InsightMatches'}
        description={t.subtitle}
        canonical="/jobs"
      />
      <Navbar />
      
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-sky-200/50 dark:bg-sky-900/20 blur-[120px] rounded-full transition-colors duration-300" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[60%] bg-indigo-200/50 dark:bg-indigo-900/20 blur-[120px] rounded-full transition-colors duration-300" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[40%] bg-slate-200/50 dark:bg-slate-800/30 blur-[100px] rounded-full transition-colors duration-300" />
      </div>

      <main className="pt-32 pb-24 px-6 relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sky-500 dark:text-sky-400 mb-8 animate-fade-in shadow-sm dark:shadow-none transition-colors duration-300">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide uppercase">{t.badge}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
            {t.titleStart}<span className="gradient-text">{t.titleHighlight}</span>{t.titleEnd}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light transition-colors duration-300">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-20">
          {t.jobs.map((job: any, index: number) => (
            <Link 
              key={job.id} 
              to={`/careers#${job.id}`}
              className="group block relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-slate-200/50 dark:from-white/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-white/80 dark:bg-[#131B2C]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 group-hover:border-sky-200 dark:group-hover:border-white/20 rounded-3xl p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-lg dark:group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {icons[job.id as keyof typeof icons]}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {job.department}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                  {job.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed transition-colors duration-300">
                  {job.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {job.tags.map((tag: string) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5 transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-sky-50 dark:bg-sky-500/10 text-sky-500 dark:text-sky-400 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white dark:group-hover:bg-sky-500 dark:group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Jobs;
