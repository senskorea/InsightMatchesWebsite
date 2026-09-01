import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';
import { Briefcase, Code, Rocket, Target, ArrowRight, Megaphone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const Jobs = () => {
  const { pathname } = useLocation();
  const { currentLanguage, changeLanguage } = useTranslation();

  useEffect(() => {
    if (pathname.startsWith('/ko/') && currentLanguage !== 'ko') changeLanguage('ko');
  }, [pathname, currentLanguage, changeLanguage]);

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
          id: 'technology-lead',
          title: 'Founding Technology Lead, AI Systems',
          department: 'Technology and Product',
          description: 'Own our AI assisted proposal platform, lead its production launch and build the next generation of research tools.',
          tags: ['Early Stage', 'Equity Based']
        },
        {
          id: 'project-coordinator',
          title: 'Founding EU Funding Delivery Lead',
          department: 'EU Funding Delivery',
          description: 'Deliver successful EU funding projects by aligning clients, consortia, quality and deadlines.',
          tags: ['Early Stage', 'Equity Based']
        },
        {
          id: 'korea-country-manager',
          title: 'Founding Country Manager, Korea',
          department: 'Korea Strategy, Operations and Partnerships',
          description: 'Bring our global strategy to life in Korea while running local administration and institutional relationships.',
          tags: ['Early Stage', 'Equity Based']
        },
        {
          id: 'growth-content-lead',
          title: 'Founding Growth and Content Lead',
          department: 'Global Marketing, Content and Sales',
          description: 'Turn expertise into customers through global positioning, content, campaigns and sales.',
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
          id: 'technology-lead',
          title: '창립 기술 리드, AI 시스템',
          department: '기술 및 제품',
          description: 'AI 기반 제안서 플랫폼을 총괄하고 정식 출시와 차세대 연구 도구 개발을 이끕니다.',
          tags: ['초기 단계', '지분 기반']
        },
        {
          id: 'project-coordinator',
          title: '창립 EU 연구 지원 프로젝트 실행 리드',
          department: 'EU 연구 지원 프로젝트 실행',
          description: '고객, 컨소시엄, 품질 및 일정을 조율하여 EU 연구 지원 프로젝트의 성공을 이끕니다.',
          tags: ['초기 단계', '지분 기반']
        },
        {
          id: 'korea-country-manager',
          title: '창립 한국 컨트리 매니저',
          department: '한국 전략, 운영 및 파트너십',
          description: '글로벌 전략을 한국에서 실현하며 국내 행정 운영과 기관 관계를 담당합니다.',
          tags: ['초기 단계', '지분 기반']
        },
        {
          id: 'growth-content-lead',
          title: '창립 성장 및 콘텐츠 리드',
          department: '글로벌 마케팅, 콘텐츠 및 영업',
          description: '글로벌 포지셔닝, 콘텐츠, 캠페인 및 영업을 통해 전문성을 고객으로 전환합니다.',
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
          id: 'technology-lead',
          title: 'Responsable Technologie Fondateur, Systèmes IA',
          department: 'Technologie et produit',
          description: 'Prenez en charge notre plateforme, dirigez son lancement et développez la prochaine génération d’outils de recherche.',
          tags: ['Phase Initiale', 'Basé sur l\'équité']
        },
        {
          id: 'project-coordinator',
          title: 'Responsable Fondateur de la Réalisation des Projets UE',
          department: 'Réalisation des projets européens',
          description: 'Livrez des projets de financement européens réussis en alignant clients, consortiums, qualité et délais.',
          tags: ['Phase Initiale', 'Basé sur l\'équité']
        },
        {
          id: 'korea-country-manager',
          title: 'Country Manager Fondateur, Corée',
          department: 'Stratégie Corée, opérations et partenariats',
          description: 'Adaptez notre stratégie mondiale à la Corée tout en gérant l’administration locale et les relations institutionnelles.',
          tags: ['Phase Initiale', 'Basé sur l\'équité']
        },
        {
          id: 'growth-content-lead',
          title: 'Responsable Croissance et Contenu Fondateur',
          department: 'Marketing mondial, contenu et ventes',
          description: 'Transformez notre expertise en clients grâce au positionnement, au contenu, aux campagnes et aux ventes.',
          tags: ['Phase Initiale', 'Basé sur l\'équité']
        }
      ]
    }
  };

  const t = translations[currentLanguage as string] || translations.en;

  const icons = {
    'technology-lead': <Code className="w-6 h-6 text-sky-500" />,
    'project-coordinator': <Briefcase className="w-6 h-6 text-emerald-500" />,
    'korea-country-manager': <Target className="w-6 h-6 text-amber-500" />,
    'growth-content-lead': <Megaphone className="w-6 h-6 text-violet-500" />
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

        <div className="grid md:grid-cols-2 gap-8 relative z-20">
          {[...t.jobs].sort((a, b) => Number(b.id === 'korea-country-manager') - Number(a.id === 'korea-country-manager')).map((job: any, index: number) => (
            <Link 
              key={job.id} 
              to={`${currentLanguage === 'ko' ? '/ko' : ''}/careers#${job.id}`}
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
