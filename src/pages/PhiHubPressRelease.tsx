import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { useTranslation } from '@/hooks/useTranslation';
import { 
  Building2, 
  Globe2, 
  Sparkles, 
  Calendar, 
  MapPin, 
  ArrowLeft, 
  ExternalLink, 
  FileText,
  Video,
  Quote,
  Share2,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

type Lang = 'en' | 'ko' | 'fr';

const SITE = 'https://www.insightmatches.com';
const CANONICAL = '/resources/press/phihub';

export const PhiHubPressRelease = () => {
  const { currentLanguage, changeLanguage } = useTranslation();
  const [selectedLang, setSelectedLang] = useState<Lang>(
    currentLanguage === 'ko' ? 'ko' : currentLanguage === 'fr' ? 'fr' : 'en'
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (currentLanguage === 'ko' || currentLanguage === 'fr' || currentLanguage === 'en') {
      setSelectedLang(currentLanguage as Lang);
    }
  }, [currentLanguage]);

  const handleLangChange = (lang: Lang) => {
    setSelectedLang(lang);
    changeLanguage(lang);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const titles: Record<Lang, string> = {
    en: 'Phi Hub and InsightMatches Build an Africa Asia Europe HealthTech Funding Bridge',
    ko: '파이허브와 인사이트매치스, 아프리카·아시아·유럽을 잇는 헬스테크 자금 조달 가교 구축',
    fr: 'Phi Hub et InsightMatches bâtissent un pont de financement HealthTech Afrique Asie Europe',
  };

  const subtitles: Record<Lang, string> = {
    en: 'Connecting African HealthTech startups with Korean innovation networks, European research partners and international funding opportunities.',
    ko: '아프리카 헬스테크 스타트업을 한국의 혁신 네트워크, 유럽의 연구 파트너 및 국제 자금 조달 기회와 연결.',
    fr: 'Connecter les startups HealthTech africaines aux réseaux d\'innovation coréens, aux partenaires de recherche européens et aux opportunités de financement international.',
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title={`${titles[selectedLang]} | InsightMatches PR`}
        description={subtitles[selectedLang]}
        canonical={CANONICAL}
        ogImage={`${SITE}/news/phihub-pr-release.png`}
        ogType="article"
        lang={selectedLang}
      />
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between py-4 border-b border-border/60 mb-8">
            <Link
              to="/resources/news"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to News & Announcements</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground mr-1">Language:</span>
              {(['en', 'ko', 'fr'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => handleLangChange(l)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                    selectedLang === l
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-muted text-muted-foreground hover:bg-accent'
                  }`}
                >
                  {l === 'en' ? 'EN' : l === 'ko' ? '한국어' : 'FR'}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="ml-2 h-7 px-2.5 text-xs gap-1.5"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> : <Share2 className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Share'}
              </Button>
            </div>
          </div>

          {/* Press Release Meta Header */}
          <header className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <FileText className="w-3.5 h-3.5" />
                Press Release
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                22 September 2026
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                Seoul, Paris, Cotonou
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {titles[selectedLang]}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {subtitles[selectedLang]}
            </p>
          </header>

          {/* Hero Press Image with Caption */}
          <div className="mb-10 overflow-hidden rounded-2xl border border-border shadow-lg bg-card">
            <img
              src="/news/phihub-pr-release.png"
              alt="Phi Hub and InsightMatches Memorandum of Understanding"
              className="w-full h-auto object-cover aspect-video"
            />
            <div className="p-4 bg-muted/40 text-xs text-muted-foreground border-t border-border">
              {selectedLang === 'ko' ? (
                <span>
                  <strong>사진 왼쪽부터:</strong> 조셀리니 두 레고(Jocelini do Régo) 파이허브 공동창업자 겸 CEO, 마린 딜로브스키(Marin Dilovski) 파이허브 COO, 폴 컨버시(Paul Conversy) 인사이트매치스 창업자 겸 CEO.
                </span>
              ) : selectedLang === 'fr' ? (
                <span>
                  <strong>De gauche à droite :</strong> Jocelini do Régo, CEO et cofondateur de Phi Hub ; Marin Dilovski, COO de Phi Hub ; et Paul Conversy, fondateur et CEO d'InsightMatches.
                </span>
              ) : (
                <span>
                  <strong>From left:</strong> Jocelini do Régo, CEO and Cofounder of Phi Hub; Marin Dilovski, COO of Phi Hub; and Paul Conversy, Founder and CEO of InsightMatches.
                </span>
              )}
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl bg-card border border-border/80 shadow-sm mb-12">
            <div>
              <div className="text-2xl font-extrabold text-primary">27</div>
              <div className="text-xs text-muted-foreground">Startups in Network</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-primary">9</div>
              <div className="text-xs text-muted-foreground">African Countries</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-primary">3</div>
              <div className="text-xs text-muted-foreground">Continents Bridged</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-primary">Horizon EU</div>
              <div className="text-xs text-muted-foreground">Grant & Consortium Matching</div>
            </div>
          </div>

          {/* Main Press Release Body */}
          {selectedLang === 'ko' ? (
            <article className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-foreground leading-relaxed text-base sm:text-lg">
              <p className="font-semibold text-lg text-primary">
                9개국 27개 스타트업으로 구성된 파이허브의 네트워크와 한국 기반의 AI 자금 조달 기회 탐색, 파트너 매칭 및 제안서 지원 역량을 결합한다.
              </p>

              <p>
                <strong>서울·파리·코토누, 2026년 9월 22일</strong>: 아프리카와 유럽의 헬스테크 생태계를 연결하는 파이허브(Phi Hub)와 호라이즌 유럽 및 국제 연구혁신 협력을 지원하는 한국 기반 AI 플랫폼 기업 인사이트매치스(InsightMatches)가 양해각서(MOU)를 체결했다. 이번 협력은 아프리카 헬스테크 스타트업을 한국의 혁신 네트워크, 유럽의 연구 파트너 및 국제 자금 조달 기회와 연결하는 것을 목표로 한다.
              </p>

              <p>
                이번 협약에 따라 파이허브는 인사이트매치스 플랫폼을 활용해 자사 네트워크 기업에 적합한 자금 조달 기회를 검토하고 잠재적인 컨소시엄 파트너를 발굴한다. 양사는 아프리카 헬스테크 혁신 기업을 한국의 혁신 생태계와 유럽의 연구 및 자금 지원 프로그램에 연결하기 위해 공동 부트캠프, 설명회, 웨비나 및 프로젝트 개발 활동도 추진할 예정이다.
              </p>

              <h2 className="text-2xl font-bold pt-4 text-foreground">아프리카·아시아·유럽을 연결하는 헬스테크 협력 경로 구축</h2>
              <p>
                파이허브는 생태계 개발, 현장 학습 프로그램, 부트캠프, 국제화 및 시장 진출 지원을 통해 헬스테크 창업자를 지원한다.
              </p>
              <p>
                이번 협력은 파이허브 네트워크 기업들이 국제 자금 조달에 대한 일반적인 관심 단계에서 벗어나 구체적인 공모, 명확한 컨소시엄 역할, 관련 연구기관, 임상기관 및 산업 파트너와 연결될 수 있도록 체계적인 경로를 구축한다.
              </p>
              <p>
                양사는 우선 파이허브의 포트폴리오를 검토해 호라이즌 유럽 및 기타 국제 연구혁신 프로그램과의 적합성이 높은 기업을 발굴할 예정이다. 선정된 기업은 기회 분석, 파트너 발굴, 컨소시엄 구성 및 제안서 기획에 대한 지원을 받을 수 있다.
              </p>
              <p>
                이번 파트너십은 세 지역의 상호 보완적인 강점을 연결한다. 파이허브는 아프리카 헬스테크 혁신 기업, 의료 이해관계자 및 잠재적인 실증 환경에 대한 접근성을 제공한다. 인사이트매치스는 한국 기반 기술 플랫폼, 혁신 네트워크 및 국제 프로젝트 개발 역량을 제공한다. 유럽의 프로그램은 연구 파트너, 다국적 컨소시엄 및 공동 자금 조달 기회로 이어지는 경로를 제공한다.
              </p>

              <h2 className="text-2xl font-bold pt-4 text-foreground">자금 조달 기회 탐색과 생태계 실행 역량의 연결</h2>
              <p>
                인사이트매치스는 AI 기반 자금 조달 기회 탐색, 파트너 매칭, 컨소시엄 구성 및 제안서 개발을 지원한다. 인사이트매치스 플랫폼은 기관과 기업의 기술 및 역량을 국제 공모와 비교하고, 경쟁력 있는 프로젝트 구성에 필요한 파트너를 발굴하도록 돕는다.
              </p>
              <p>
                파이허브는 아프리카 헬스테크 창업자, 의료 이해관계자 및 현지 혁신 생태계에 대한 직접적인 접근성을 제공한다. 또한 참여 기업군 구성, 커뮤니티 참여, 시장 진출, 현지화 및 잠재적인 시범 운영과 실증 환경 발굴을 지원할 수 있다.
              </p>
              <p>
                양사는 자금 조달 정보와 현지 네트워크 및 실행 역량을 연결해 실질적인 국제 헬스테크 프로젝트를 구축하는 것을 목표로 한다.
              </p>

              {/* Quotes */}
              <div className="my-8 space-y-6 not-prose">
                <div className="p-6 rounded-xl bg-card border-l-4 border-primary shadow-sm space-y-3">
                  <Quote className="w-8 h-8 text-primary opacity-60" />
                  <p className="italic text-base sm:text-lg">
                    “아프리카 헬스테크 기업들은 국제 연구혁신 프로그램에서 충분히 반영되지 못하는 의료 환경을 위한 솔루션을 개발하고 있습니다. 이번 협력을 통해 우리 네트워크는 적합한 기회를 발굴하고, 필요한 파트너와 연결되며, 현지의 성과와 국제적인 성장을 함께 지원할 수 있는 프로젝트에 참여하게 될 것입니다.”
                  </p>
                  <div className="pt-2 font-semibold text-sm">
                    조셀리니 두 레고 (Jocelini do Régo)
                    <div className="text-xs text-muted-foreground font-normal">파이허브 공동창업자 겸 CEO</div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-card border-l-4 border-sky-500 shadow-sm space-y-3">
                  <Quote className="w-8 h-8 text-sky-500 opacity-60" />
                  <p className="italic text-base sm:text-lg">
                    “파이허브는 국제 자금 지원 프로젝트에 꼭 필요한 역량을 제공합니다. 바로 여러 아프리카 시장에 걸친 신뢰할 수 있는 헬스테크 생태계에 대한 접근성입니다. 인사이트매치스는 한국을 기반으로 이 생태계를 한국의 혁신 네트워크, 유럽의 연구 파트너 및 국제 자금 지원 프로그램과 연결할 수 있습니다. 우리의 에이전틱 AI 플랫폼은 기회와 파트너를 발굴합니다. 양사는 이를 실질적인 프로젝트, 더욱 강력한 연구, 글로벌 컨소시엄 및 파이허브 포트폴리오 기업의 새로운 시장 진출 경로로 발전시킬 것입니다.”
                  </p>
                  <div className="pt-2 font-semibold text-sm">
                    폴 컨버시 (Paul Conversy)
                    <div className="text-xs text-muted-foreground font-normal">인사이트매치스 창업자 겸 CEO</div>
                  </div>
                </div>
              </div>

              {/* About Sections */}
              <h2 className="text-2xl font-bold pt-4 text-foreground">기관 소개</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose mt-4">
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-bold text-lg mb-2">파이허브 (Phi Hub)</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    파이허브는 아프리카와 유럽의 헬스테크 생태계를 연결하며 9개국 27개 스타트업을 지원한다. 주요 활동으로는 헬스테크 부트캠프, 현장 학습 프로그램, 생태계 개발, 국제화 및 시장 진출 지원이 있다. 파이허브의 사명은 아프리카 헬스테크를 세계로 진출시키고, 글로벌 헬스테크 협력을 아프리카와 연결하는 것이다.
                  </p>
                  <a
                    href="https://www.phihub.studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-semibold"
                  >
                    웹사이트 방문 <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-bold text-lg mb-2">InsightMatches Co., Ltd.</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    한국에 본사를 둔 인사이트매치스는 호라이즌 유럽을 포함한 국제 연구혁신 프로그램을 대상으로 자금 조달 기회 탐색, 파트너 매칭, 컨소시엄 구성 및 제안서 개발을 지원하는 AI 플랫폼 기업이다. 2025년 K-Startup Grand Challenge에 참가했으며, AI 기반 매칭 서비스 SENS를 통해 데이터 기반 네트워킹도 제공한다.
                  </p>
                  <a
                    href="https://www.insightmatches.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-semibold"
                  >
                    웹사이트 방문 <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ) : selectedLang === 'fr' ? (
            <article className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-foreground leading-relaxed text-base sm:text-lg">
              <p className="font-semibold text-lg text-primary">
                Alliance entre le réseau de 27 startups de Phi Hub réparties dans 9 pays et la plateforme coréenne de découverte de financements, de consortiums et de montage de propositions par IA.
              </p>

              <p>
                <strong>SÉOUL, PARIS ET COTONOU, 22 septembre 2026</strong> — Phi Hub, connecteur d'écosystèmes HealthTech entre l'Afrique et l'Europe, et InsightMatches Corp, société coréenne développant une plateforme d'intelligence artificielle dédiée à Horizon Europe et à la coopération internationale de recherche et d'innovation, ont signé un protocole d'accord (MOU) visant à connecter les startups HealthTech africaines aux réseaux d'innovation coréens, aux partenaires de recherche européens et aux opportunités de financement mondiales.
              </p>

              <p>
                En vertu de cet accord, Phi Hub utilisera la plateforme InsightMatches pour filtrer les opportunités de subventions et identifier des partenaires de consortium stratégiques. Les deux structures organiseront également des bootcamps conjoints, des webinaires et des ateliers d'ingénierie de projets pour bâtir des consortiums transcontinentaux viables.
              </p>

              <h2 className="text-2xl font-bold pt-4 text-foreground">Bâtir une passerelle HealthTech Afrique Asie Europe</h2>
              <p>
                Phi Hub accompagne les fondateurs HealthTech à travers le développement d'écosystèmes, des expéditions immersives, des bootcamps et l'ouverture aux marchés internationaux.
              </p>
              <p>
                Cette collaboration crée une trajectoire structurée permettant aux entreprises du réseau de passer d'un intérêt exploratoire pour les financements internationaux à des appels d'offres précis, des rôles définis dans les consortiums et des partenaires cliniques, académiques et industriels qualifiés.
              </p>

              {/* Quotes */}
              <div className="my-8 space-y-6 not-prose">
                <div className="p-6 rounded-xl bg-card border-l-4 border-primary shadow-sm space-y-3">
                  <Quote className="w-8 h-8 text-primary opacity-60" />
                  <p className="italic text-base sm:text-lg">
                    « Les entreprises HealthTech africaines développent des solutions pour des environnements sanitaires souvent sous représentés dans les programmes mondiaux de recherche. Cette collaboration permettra à notre réseau d'identifier les opportunités adéquates, d'intégrer des consortiums d'excellence et de soutenir à la fois l'impact local et la croissance internationale. »
                  </p>
                  <div className="pt-2 font-semibold text-sm">
                    Jocelini do Régo
                    <div className="text-xs text-muted-foreground font-normal">Cofondateur & CEO, Phi Hub</div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-card border-l-4 border-sky-500 shadow-sm space-y-3">
                  <Quote className="w-8 h-8 text-sky-500 opacity-60" />
                  <p className="italic text-base sm:text-lg">
                    « Phi Hub apporte ce dont les projets de financement internationaux ont cruellement besoin : l'accès direct à un écosystème de santé crédible à travers plusieurs marchés africains. Depuis Séoul, InsightMatches connecte cet écosystème aux fleurons technologiques coréens, aux universités européennes et aux programmes de subventions non dilutives. Notre IA agentique identifie les opportunités et les partenaires ; ensemble, nous les concrétisons en projets réels. »
                  </p>
                  <div className="pt-2 font-semibold text-sm">
                    Paul Conversy
                    <div className="text-xs text-muted-foreground font-normal">Fondateur et CEO, InsightMatches</div>
                  </div>
                </div>
              </div>

              {/* About Sections */}
              <h2 className="text-2xl font-bold pt-4 text-foreground">À propos des organisations</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose mt-4">
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-bold text-lg mb-2">Phi Hub</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Phi Hub connecte les écosystèmes HealthTech africains et européens, soutenant 27 startups dans 9 pays. Sa mission est d'amener les innovations médicales africaines sur la scène mondiale et d'intégrer la collaboration scientifique internationale en Afrique.
                  </p>
                  <a
                    href="https://www.phihub.studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-semibold"
                  >
                    Visiter le site <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-bold text-lg mb-2">InsightMatches Co., Ltd.</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Basée en Corée du Sud, InsightMatches est une plateforme d'IA conçue pour l'identification d'appels à projets, le matchmaking de partenaires, la création de consortiums et le montage de dossiers Horizon Europe. Participant au K-Startup Grand Challenge 2025.
                  </p>
                  <a
                    href="https://www.insightmatches.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-semibold"
                  >
                    Visiter le site <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ) : (
            <article className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-foreground leading-relaxed text-base sm:text-lg">
              <p className="font-semibold text-lg text-primary">
                Combining Phi Hub’s network of 27 startups across nine countries with Korea-based AI-powered funding discovery, partner matching and proposal support.
              </p>

              <p>
                <strong>SEOUL, PARIS AND COTONOU, 22 September 2026</strong> — Phi Hub, an Africa Europe HealthTech ecosystem connector, and Korea-based InsightMatches Corp, an AI platform company focused on Horizon Europe and international research and innovation collaboration, have signed a memorandum of understanding (MOU) to connect African HealthTech startups with Korean innovation networks, European research partners and international funding opportunities.
              </p>

              <p>
                Under the agreement, Phi Hub will use the InsightMatches platform to screen funding opportunities and identify potential consortium partners for companies in its network. The organisations will also explore joint bootcamps, briefings, webinars and project development activities that connect African HealthTech innovators with Korea’s innovation ecosystem and European research and funding programmes.
              </p>

              <h2 className="text-2xl font-bold pt-4 text-foreground">Building an Africa Asia Europe Pathway for HealthTech</h2>
              <p>
                Phi Hub supports HealthTech founders through ecosystem development, learning expeditions, bootcamps, internationalisation and market access.
              </p>
              <p>
                The collaboration will create a structured pathway for companies in this network to move from general interest in international funding to specific calls, defined consortium roles and relevant research, clinical and industry partners.
              </p>
              <p>
                The two organisations will initially review Phi Hub’s portfolio to identify companies with a strong fit for Horizon Europe and other international research and innovation programmes. Selected companies may then receive support with opportunity assessment, partner discovery, consortium development and proposal planning.
              </p>
              <p>
                The partnership connects complementary strengths across three regions. Phi Hub brings access to African HealthTech innovators, healthcare stakeholders and potential implementation environments. InsightMatches contributes a Korea-based technology platform, innovation network and international project-development capability. European programmes provide pathways to research partners, multinational consortia and collaborative funding.
              </p>

              <h2 className="text-2xl font-bold pt-4 text-foreground">Connecting Funding Discovery with Ecosystem Execution</h2>
              <p>
                InsightMatches provides AI-powered funding opportunity discovery, partner matching, consortium building and proposal development support. Its platform helps organisations compare their technologies and capabilities with international funding calls and identify the partners required to form a credible project.
              </p>
              <p>
                Phi Hub contributes direct access to African HealthTech founders, healthcare stakeholders and local innovation ecosystems. It can support cohort formation, community engagement, market access, local adaptation and the identification of potential pilot and validation environments.
              </p>
              <p>
                Together, the organisations aim to connect funding intelligence with the local relationships and implementation capacity required to build practical international HealthTech projects.
              </p>

              {/* Quotes */}
              <div className="my-8 space-y-6 not-prose">
                <div className="p-6 rounded-xl bg-card border-l-4 border-primary shadow-sm space-y-3">
                  <Quote className="w-8 h-8 text-primary opacity-60" />
                  <p className="italic text-base sm:text-lg">
                    “African HealthTech companies are developing solutions for healthcare environments that are often underrepresented in international research and innovation programmes. This collaboration will help our network identify suitable opportunities, connect with the right partners and participate in projects that can support both local impact and international growth.”
                  </p>
                  <div className="pt-2 font-semibold text-sm">
                    Jocelini do Régo
                    <div className="text-xs text-muted-foreground font-normal">Cofounder & CEO, Phi Hub</div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-card border-l-4 border-sky-500 shadow-sm space-y-3">
                  <Quote className="w-8 h-8 text-sky-500 opacity-60" />
                  <p className="italic text-base sm:text-lg">
                    “Phi Hub provides something international funding projects need: access to a credible HealthTech ecosystem across multiple African markets. From our base in Korea, InsightMatches can connect this ecosystem with Korean innovation networks, European research partners and international funding programmes. Our agentic AI platform finds the opportunities and the partners; together we turn them into real projects, stronger research, global consortia and pathways into new markets for Phi Hub's portfolio companies.”
                  </p>
                  <div className="pt-2 font-semibold text-sm">
                    Paul Conversy
                    <div className="text-xs text-muted-foreground font-normal">Founder and CEO, InsightMatches</div>
                  </div>
                </div>
              </div>

              {/* About Sections */}
              <h2 className="text-2xl font-bold pt-4 text-foreground">About the Organisations</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose mt-4">
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-bold text-lg mb-2">Phi Hub</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Phi Hub connects African and European HealthTech ecosystems and supports 27 startups across nine countries. Its activities include HealthTech bootcamps, learning expeditions, ecosystem development, internationalisation and market access. Phi Hub’s mission is to bring African HealthTech to the world and global HealthTech collaboration to Africa.
                  </p>
                  <a
                    href="https://www.phihub.studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-semibold"
                  >
                    Visit Website <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-bold text-lg mb-2">InsightMatches Co., Ltd.</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Based in Korea, InsightMatches is an AI platform company supporting funding opportunity discovery, partner matching, consortium building and proposal development for international research and innovation programmes, including Horizon Europe. It helps connect Korean and international innovators with European research and funding opportunities. Participated in the 2025 K-Startup Grand Challenge.
                  </p>
                  <a
                    href="https://www.insightmatches.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-semibold"
                  >
                    Visit Website <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          )}

          {/* Video Showcase Section */}
          <section className="mt-16 pt-12 border-t border-border">
            <div className="flex items-center gap-3 mb-6">
              <Video className="w-6 h-6 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold">Watch the Strategic Discussion</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Explore the raw discussion between Jocelini do Régo, Marin Dilovski, and InsightMatches on African healthcare challenges, epidemiology metrics, and cross border technology replication.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-card border border-border flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary">Master Cut · 06:35</span>
                  <h3 className="font-bold text-lg mt-2 mb-1">Full Executive Interview</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete strategic dialogue addressing infrastructure bottlenecks, measurement voids, and international funding loops.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Native 1080p Cut</span>
                  <span className="font-medium text-primary">Featured on LinkedIn</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-sky-500/10 text-sky-500">Clip 01 · 01:45</span>
                  <h3 className="font-bold text-lg mt-2 mb-1">Cross Border Solution Replication</h3>
                  <p className="text-sm text-muted-foreground">
                    Why proven innovations (heat preservation, vector control) stay isolated and how to bridge Southeast Asia to Africa.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Speaker: Jocelini do Régo</span>
                  <span className="font-medium text-sky-500">Short Video</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-500">Clip 02 · 02:11</span>
                  <h3 className="font-bold text-lg mt-2 mb-1">The Missing Data Barrier in African Healthcare</h3>
                  <p className="text-sm text-muted-foreground">
                    Overcoming the lack of regional epidemiology data and navigating local regulatory authorization pathways.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Speakers: Jocelini & Marin</span>
                  <span className="font-medium text-amber-500">Short Video</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500">Clip 03 · 02:14</span>
                  <h3 className="font-bold text-lg mt-2 mb-1">The Missing Loop in HealthTech Investment</h3>
                  <p className="text-sm text-muted-foreground">
                    Why software without physical clinical infrastructure fails, and how to build a self sustaining funding flywheel.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Speakers: Jocelini & Marin</span>
                  <span className="font-medium text-emerald-500">Short Video</span>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Action Card */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 text-center space-y-4">
            <h3 className="text-2xl font-bold">Partner with InsightMatches</h3>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Are you an accelerator, research institution, or health tech enterprise seeking international consortia and Horizon Europe grant funding?
            </p>
            <div className="pt-2">
              <Link to="/request-trial">
                <Button size="lg" className="font-semibold shadow-md">
                  Request a Platform Consultation
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PhiHubPressRelease;
