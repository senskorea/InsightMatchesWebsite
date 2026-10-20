import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { useTranslation } from '@/hooks/useTranslation';
import { 
  Calendar, 
  MapPin, 
  ArrowLeft, 
  ExternalLink, 
  FileText,
  Quote,
  Share2,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

type Lang = 'en' | 'ko' | 'fr';

const SITE = 'https://www.insightmatches.com';
const CANONICAL = '/resources/press/leadership-team';

export const LeadershipTeamPressRelease = () => {
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
    en: 'InsightMatches Expands Leadership Team to Scale AI R&D Funding Copilot',
    ko: '인사이트매치스, 글로벌 AI R&D 펀딩 코파일럿 확장을 위해 리더십 팀 강화',
    fr: 'InsightMatches renforce son équipe de direction pour accélérer son copilote de financement R&D',
  };

  const subtitles: Record<Lang, string> = {
    en: 'New appointments strengthen AI engineering, European funding expertise and cross border product delivery.',
    ko: 'AI 엔지니어링 역량, 유럽 연구 펀딩 전문성 및 글로벌 제품 실행력 강화.',
    fr: "De nouvelles nominations renforcent l'ingénierie IA, l'expertise des financements européens et le déploiement international.",
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title={`${titles[selectedLang]} | InsightMatches PR`}
        description={subtitles[selectedLang]}
        canonical={CANONICAL}
        ogImage={`${SITE}/news/leadership-team-2026.png`}
        ogType="article"
        lang={selectedLang}
      />
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb & Language Switcher */}
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
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
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
                October 11, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                Seoul · Busan · Austria
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {titles[selectedLang]}
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-normal">
              {subtitles[selectedLang]}
            </p>
          </header>

          {/* Hero Press Image with Caption */}
          <div className="mb-12 overflow-hidden rounded-2xl border border-border shadow-lg bg-card">
            <img
              src="/news/leadership-team-2026.png"
              alt="InsightMatches Leadership Team 2026"
              className="w-full h-auto object-cover aspect-[1733/907]"
            />
            <div className="p-4 bg-muted/40 text-xs sm:text-sm text-muted-foreground border-t border-border">
              {selectedLang === 'ko' ? (
                <span>
                  <strong>사진 왼쪽부터:</strong> 주니어 무켄제(Junior Mukenze) AI 엔지니어링 리드 겸 기술 고문, 폴 컨버시(Paul Conversy) 공동 창업자 겸 CEO, 세레나 라다노(Serena Radano) 파운딩 그랜트 및 프로덕트 리드, 마크 포타포프(Mark Potapov) 최고기술책임자(CTO) 겸 리드 프로덕트 엔지니어.
                </span>
              ) : selectedLang === 'fr' ? (
                <span>
                  <strong>De gauche à droite :</strong> Junior Mukenze, responsable ingénierie IA et conseiller technique ; Paul Conversy, cofondateur et CEO ; Serena Radano, responsable subventions et produit ; et Mark Potapov, directeur technique et ingénieur produit en chef.
                </span>
              ) : (
                <span>
                  <strong>From left:</strong> Junior Mukenze, Head of AI Engineering and Technical Advisor; Paul Conversy, Co Founder and CEO; Serena Radano, Founding Grants and Product Lead; and Mark Potapov, Chief Technology Officer and Lead Product Engineer.
                </span>
              )}
            </div>
          </div>

          {/* Clean Editorial Body Content */}
          {selectedLang === 'ko' ? (
            <article className="space-y-6 text-foreground text-lg sm:text-xl leading-relaxed">
              <p className="font-semibold text-xl sm:text-2xl text-primary leading-snug">
                AI 엔지니어링 역량, 유럽 연구 펀딩 전문성 및 유럽 현지 운영 기반을 결합하여 글로벌 R&D 컨소시엄 빌딩을 가속화한다.
              </p>

              <p>
                <strong>대한민국 서울, 2026년 10월 11일</strong> — 글로벌 연구 협력과 유럽 펀딩 제안서 작성을 지원하는 AI 기반 B2B SaaS 기업 인사이트매치스 주식회사(InsightMatches Corp.)가 2명의 전략적 리더십 인사를 공식 발표했다. 이번 확장은 회사의 인공지능 엔지니어링 역량과 유럽 연합(EU) 펀딩 전문성, 그리고 유럽 현지 운영 기반을 한층 더 강화한다.
              </p>

              <p>
                주니어 무켄제(Junior Mukenze)가 AI 엔지니어링 리드 겸 기술 고문으로, 세레나 라다노(Serena Radano)가 파운딩 그랜트 및 프로덕트 리드로 새롭게 합류했다. 두 리더는 공동 창업자 겸 대표이사인 폴 컨버시(Paul Conversy), 최고기술책임자(CTO) 겸 리드 프로덕트 엔지니어인 마크 포타포프(Mark Potapov)와 함께 인사이트매치스의 성장을 이끌어갈 예정이다.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold pt-8 pb-2 text-foreground border-b border-border/60">
                AI 및 유럽 펀딩 전문성 강화
              </h2>

              <h3 className="text-xl sm:text-2xl font-bold text-primary pt-4">
                주니어 무켄제 (Junior Mukenze) — AI 엔지니어링 리드 겸 기술 고문
              </h3>
              <p>
                한동대학교 AI 공학 박사 연구원인 무켄제는 인사이트매치스의 AI 아키텍처 개발과 평가를 총괄한다.
              </p>
              <p>
                플랫폼의 자금 기회 탐색, 컨소시엄 매칭, 제안서 지원 워크플로우 전반에 걸쳐 모델 품질, 기술적 신뢰성 및 책임 있는 AI 적용을 담당한다.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-primary pt-4">
                세레나 라다노 (Serena Radano) — 파운딩 그랜트 및 프로덕트 리드
              </h3>
              <p>
                오스트리아에 기반을 둔 라다노는 호라이즌 유럽을 비롯한 국제 연구 펀딩 프로그램 전반에서 풍부한 실무 경험을 보유하고 있다.
              </p>
              <p>
                유럽 위원회의 요구 사항, 평가 기준, 컨소시엄 규칙을 직관적인 제품 기능으로 전환하고, 제품 로드맵 수립 및 규정 변화를 모니터링한다. 또한 오스트리아를 거점으로 중부 유럽 전역의 대학, 연구기관, 혁신 기업들과의 유럽 파트너십과 고객 협력을 전담 지원한다.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-primary pt-4">
                마크 포타포프 (Mark Potapov) — CTO 겸 리드 프로덕트 엔지니어
              </h3>
              <p>
                포타포프는 인사이트매치스의 플랫폼 아키텍처, 제품 엔지니어링, 클라우드 인프라 및 기술 제공을 총괄한다.
              </p>
              <p>
                연결형 자금 탐색, 컨소시엄 구성 및 AI 보조 제안서 워크플로우를 뒷받침하는 안전하고 확장 가능한 기술 기반을 구축하는 데 집중하고 있다.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold pt-8 pb-2 text-foreground border-b border-border/60">
                한국과 유럽을 잇는 R&D 파이프라인 확장
              </h2>

              <p>
                이번 인사는 인사이트매치스가 2025 K 스타트업 그랜드 챌린지 톱 20 팀으로 선정된 이후 국제 연구 및 혁신 네트워크를 지속적으로 확장하는 과정에서 이루어졌다.
              </p>

              <p>
                인사이트매치스의 모델은 독자적인 기술과 연구자, 대학, 혁신 기업 및 펀딩 전문가 네트워크를 결합하여 복잡한 국제 공동 연구 프로그램에 필요한 파트너십 구축과 기회 탐색을 간소화한다.
              </p>

              {/* Styled Quotes */}
              <div className="my-10 space-y-6">
                <div className="p-8 rounded-2xl bg-card border-l-4 border-primary shadow-sm space-y-4">
                  <Quote className="w-10 h-10 text-primary opacity-60" />
                  <p className="italic text-lg sm:text-xl leading-relaxed">
                    “국제 연구 펀딩은 규정 전문성, 강력한 네트워크 파트너십, 그리고 신뢰할 수 있는 기술이 유기적으로 맞물려야 합니다. 주니어는 우리의 AI 연구와 품질 역량을 강화하고, 세레나는 유럽 펀딩 전문성을 제품 개발에 직접 주입하며, 마크는 이 모든 역량을 결합하는 엔지니어링 기반을 탄탄히 다지고 있습니다.”
                  </p>
                  <p className="italic text-lg sm:text-xl leading-relaxed">
                    “확장된 팀을 통해 한국과 유럽의 혁신가들이 적합한 펀딩 기회를 발굴하고 신뢰할 수 있는 컨소시엄을 구성하여 더욱 경쟁력 있는 제안서를 완성할 수 있도록 돕겠습니다.”
                  </p>
                  <div className="pt-2 font-semibold text-base">
                    폴 컨버시 (Paul Conversy)
                    <div className="text-sm text-muted-foreground font-normal">인사이트매치스 공동 창업자 겸 CEO</div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-card border-l-4 border-sky-500 shadow-sm space-y-4">
                  <Quote className="w-10 h-10 text-sky-500 opacity-60" />
                  <p className="italic text-lg sm:text-xl leading-relaxed">
                    “그랜트 관리 및 유럽 펀딩 분야에서 쌓아온 국제적 경험을 바탕으로 파운딩 그랜트 및 프로덕트 리드로 합류하게 되어 매우 기쁩니다. 한국의 연구자와 혁신가들을 유럽의 대규모 펀딩 기회와 연결하는 AI 플랫폼을 함께 고도화해 나갈 여정이 무척 기대됩니다.”
                  </p>
                  <div className="pt-2 font-semibold text-base">
                    세레나 라다노 (Serena Radano)
                    <div className="text-sm text-muted-foreground font-normal">인사이트매치스 파운딩 그랜트 및 프로덕트 리드</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold pt-8 pb-2 text-foreground border-b border-border/60">
                인사이트매치스 주식회사 소개
              </h2>

              <p>
                인사이트매치스는 국제 연구 및 혁신 펀딩을 지원하는 AI 기반 B2B SaaS 플랫폼입니다.
              </p>
              <p>
                기관 역량 프로파일링, 자금 지원 기회 탐색, 컨소시엄 구성 및 제안서 작성을 단일 워크플로우로 통합하며, AI 코파일럿을 통해 각 단계별 최적화를 돕고 중요한 검토 지점에서 사람의 전문적 검증을 유지합니다.
              </p>
              <p>
                호라이즌 유럽(Horizon Europe), 에라스무스 플러스(Erasmus+) 등 복잡한 프로그램의 행정적 부담을 경감하고 대한민국 서울과 부산, 오스트리아 현지 거점을 중심으로 글로벌 협력을 지원합니다.
              </p>

              {/* Media Contact Box */}
              <div className="mt-12 p-8 rounded-2xl bg-muted/40 border border-border space-y-3">
                <h3 className="text-xl font-bold">Media Contact</h3>
                <div className="space-y-1 text-base text-muted-foreground">
                  <p className="font-semibold text-foreground">Paul Conversy · Co Founder and CEO</p>
                  <p>InsightMatches Corp.</p>
                  <p>Email: <a href="mailto:info@insightmatches.com" className="text-primary underline">info@insightmatches.com</a></p>
                  <p>South Korean Operations: Busan and Seoul</p>
                  <p>European Operations: Austria</p>
                  <p>Website: <a href="https://www.insightmatches.com" className="text-primary underline">insightmatches.com</a></p>
                </div>
              </div>
            </article>
          ) : selectedLang === 'fr' ? (
            <article className="space-y-6 text-foreground text-lg sm:text-xl leading-relaxed">
              <p className="font-semibold text-xl sm:text-2xl text-primary leading-snug">
                De nouvelles nominations stratégiques renforcent l'ingénierie IA, l'expertise des financements européens et l'ancrage opérationnel en Europe.
              </p>

              <p>
                <strong>SÉOUL, Corée du Sud, 11 octobre 2026</strong> — InsightMatches Corp., plateforme SaaS B2B propulsée par l'IA facilitant la collaboration scientifique internationale et les candidatures aux financements européens, annonce aujourd'hui deux nominations majeures au sein de son équipe dirigeante. Cette expansion renforce l'ingénierie IA, l'expertise des programmes européens et la présence opérationnelle en Europe.
              </p>

              <p>
                Junior Mukenze rejoint l'entreprise en tant que responsable de l'ingénierie IA et conseiller technique, tandis que Serena Radano prend la direction du pôle subventions et produit. Ils rejoignent le cofondateur et CEO Paul Conversy ainsi que le directeur technique et ingénieur produit en chef Mark Potapov.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold pt-8 pb-2 text-foreground border-b border-border/60">
                Renforcement de l'IA et de l'expertise des subventions européennes
              </h2>

              <h3 className="text-xl sm:text-2xl font-bold text-primary pt-4">
                Junior Mukenze — Responsable ingénierie IA et conseiller technique
              </h3>
              <p>
                Chercheur doctoral en ingénierie IA à la Handong Global University, Junior Mukenze guide le développement et l'évaluation de l'architecture IA d'InsightMatches.
              </p>
              <p>
                Ses responsabilités couvrent la qualité des modèles, la robustesse technique et l'application responsable de l'IA à travers la détection d'opportunités, le montage de consortiums et la rédaction assistée de propositions.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-primary pt-4">
                Serena Radano — Responsable subventions et produit
              </h3>
              <p>
                Basée en Autriche, Serena Radano apporte une riche expérience des programmes européens de recherche, notamment Horizon Europe et d'autres financements internationaux.
              </p>
              <p>
                Elle supervise la veille stratégique sur les subventions et traduit les exigences de la Commission européenne, les critères d'évaluation et les règles de consortium en fonctionnalités logicielles concrètes. Elle pilote également les partenariats européens et l'accompagnement des universités, centres de recherche et entreprises innovantes en Europe centrale.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-primary pt-4">
                Mark Potapov — Directeur technique et ingénieur produit en chef
              </h3>
              <p>
                Mark Potapov continue de diriger l'architecture logicielle, l'ingénierie produit, l'infrastructure cloud et le déploiement technique d'InsightMatches.
              </p>
              <p>
                Ses travaux garantissent un socle technique sécurisé, fluide et évolutif pour l'ensemble des flux de travail de la plateforme.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold pt-8 pb-2 text-foreground border-b border-border/60">
                Accélération de la passerelle R&D Corée Europe
              </h2>

              <p>
                Ces nominations font suite à la sélection d'InsightMatches parmi les 20 meilleures équipes du K Startup Grand Challenge 2025 et à l'expansion continue de son réseau international de recherche et d'innovation.
              </p>

              <p>
                Le modèle d'InsightMatches allie technologie propriétaire et réseau qualifié d'universités, entreprises innovantes et spécialistes du financement pour bâtir les partenariats transfrontaliers indispensables aux grands programmes collaboratifs.
              </p>

              {/* Styled Quotes */}
              <div className="my-10 space-y-6">
                <div className="p-8 rounded-2xl bg-card border-l-4 border-primary shadow-sm space-y-4">
                  <Quote className="w-10 h-10 text-primary opacity-60" />
                  <p className="italic text-lg sm:text-xl leading-relaxed">
                    « Le succès des financements de recherche internationaux repose sur la convergence entre rigueur réglementaire, partenariats solides et technologie fiable. Junior apporte l'excellence en recherche IA, Serena intègre directement l'intelligence des programmes européens au cœur de notre produit, et Mark assure la solidité de notre socle technique. »
                  </p>
                  <p className="italic text-lg sm:text-xl leading-relaxed">
                    « Avec cette équipe renforcée, nous sommes idéalement positionnés pour aider les innovateurs coréens et européens à cibler les meilleurs financements, bâtir des consortiums crédibles et déposer des dossiers à fort impact. »
                  </p>
                  <div className="pt-2 font-semibold text-base">
                    Paul Conversy
                    <div className="text-sm text-muted-foreground font-normal">Cofondateur et CEO d'InsightMatches</div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-card border-l-4 border-sky-500 shadow-sm space-y-4">
                  <Quote className="w-10 h-10 text-sky-500 opacity-60" />
                  <p className="italic text-lg sm:text-xl leading-relaxed">
                    « Je suis ravie de rejoindre InsightMatches en tant que responsable subventions et produit, et d'apporter mon expérience internationale dans la gestion des financements européens. Je suis profondément motivée à perfectionner une solution d'IA qui connecte concrètement les chercheurs coréens et européens aux opportunités de financement international. »
                  </p>
                  <div className="pt-2 font-semibold text-base">
                    Serena Radano
                    <div className="text-sm text-muted-foreground font-normal">Responsable subventions et produit</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold pt-8 pb-2 text-foreground border-b border-border/60">
                À propos d'InsightMatches Corp.
              </h2>

              <p>
                InsightMatches est une plateforme SaaS B2B propulsée par l'IA dédiée au financement de la recherche et de l'innovation internationale.
              </p>
              <p>
                Elle connecte le profilage des compétences, la détection des opportunités, la constitution de consortiums et la rédaction de propositions au sein d'un flux de travail unifié.
              </p>
              <p>
                L'entreprise est basée en Corée du Sud, avec des opérations à Busan et Séoul, ainsi qu'une présence européenne en Autriche.
              </p>

              {/* Media Contact Box */}
              <div className="mt-12 p-8 rounded-2xl bg-muted/40 border border-border space-y-3">
                <h3 className="text-xl font-bold">Media Contact</h3>
                <div className="space-y-1 text-base text-muted-foreground">
                  <p className="font-semibold text-foreground">Paul Conversy · Cofondateur et CEO</p>
                  <p>InsightMatches Corp.</p>
                  <p>Email: <a href="mailto:info@insightmatches.com" className="text-primary underline">info@insightmatches.com</a></p>
                  <p>Opérations en Corée du Sud : Busan et Séoul</p>
                  <p>Opérations européennes : Autriche</p>
                  <p>Site web : <a href="https://www.insightmatches.com" className="text-primary underline">insightmatches.com</a></p>
                </div>
              </div>
            </article>
          ) : (
            <article className="space-y-6 text-foreground text-lg sm:text-xl leading-relaxed">
              <p className="font-semibold text-xl sm:text-2xl text-primary leading-snug">
                New appointments strengthen AI engineering, European funding expertise and cross border product delivery.
              </p>

              <p>
                <strong>SEOUL, South Korea, October 11, 2026</strong> — InsightMatches Corp. (인사이트매치스 주식회사), an AI powered B2B SaaS platform supporting international research collaboration and European funding proposals, today announced two strategic leadership appointments. The expansion strengthens the company's AI engineering capabilities, European funding expertise and operational presence in Europe.
              </p>

              <p>
                Junior Mukenze joins as Head of AI Engineering and Technical Advisor, while Serena Radano joins as Founding Grants and Product Lead. They join Co Founder and CEO Paul Conversy and Chief Technology Officer and Lead Product Engineer Mark Potapov.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold pt-8 pb-2 text-foreground border-b border-border/60">
                Strengthening AI and European Funding Expertise
              </h2>

              <h3 className="text-xl sm:text-2xl font-bold text-primary pt-4">
                Junior Mukenze — Head of AI Engineering and Technical Advisor
              </h3>
              <p>
                A doctoral researcher in AI Engineering at Handong Global University, Mukenze will guide the development and evaluation of InsightMatches' AI architecture.
              </p>
              <p>
                His responsibilities include model quality, technical reliability and the responsible application of AI across the platform's funding discovery, consortium matching and proposal support workflows.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-primary pt-4">
                Serena Radano — Founding Grants and Product Lead
              </h3>
              <p>
                Based in Austria, Radano brings experience spanning European funding programs, in particular Horizon Europe, and other international research funding.
              </p>
              <p>
                She will lead grant opportunity intelligence and help translate European Commission requirements, evaluation criteria and consortium rules into practical product capabilities. She will also help shape the product roadmap, monitor regulatory and programme changes, and guide InsightMatches' expansion into additional funding programmes and grant ecosystems.
              </p>
              <p>
                Radano will support European partnerships and client relationships, giving InsightMatches closer access to universities, research organisations, innovative companies and international consortia across Central Europe.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-primary pt-4">
                Mark Potapov — Chief Technology Officer and Lead Product Engineer
              </h3>
              <p>
                Potapov continues to lead InsightMatches' platform architecture, product engineering, cloud infrastructure and technical delivery.
              </p>
              <p>
                His work focuses on building the secure and scalable foundation behind the company's connected funding discovery, consortium building and AI assisted proposal workflows.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold pt-8 pb-2 text-foreground border-b border-border/60">
                Expanding the Korea EU R&D Pipeline
              </h2>

              <p>
                The appointments follow InsightMatches' selection as a Top 20 team in the 2025 K Startup Grand Challenge and the continued expansion of its international research and innovation network.
              </p>

              <p>
                InsightMatches' model combines technology with a growing network of researchers, universities, innovative companies and funding specialists. This combination helps organisations identify relevant opportunities and assemble the international partnerships required for complex collaborative research programmes.
              </p>

              {/* Styled Quotes */}
              <div className="my-10 space-y-6">
                <div className="p-8 rounded-2xl bg-card border-l-4 border-primary shadow-sm space-y-4">
                  <Quote className="w-10 h-10 text-primary opacity-60" />
                  <p className="italic text-lg sm:text-xl leading-relaxed">
                    “International research funding requires regulatory expertise, strong partnerships and reliable technology working together,” said Paul Conversy, Co Founder and CEO of InsightMatches. “Junior strengthens our AI research and quality capabilities, Serena brings European funding expertise directly into our product development, and Mark continues to lead the engineering foundation that brings these capabilities together.”
                  </p>
                  <p className="italic text-lg sm:text-xl leading-relaxed">
                    “With this expanded team, we are better positioned to help Korean and European innovators identify suitable funding opportunities, assemble credible consortia and develop stronger proposals.”
                  </p>
                  <div className="pt-2 font-semibold text-base">
                    Paul Conversy
                    <div className="text-sm text-muted-foreground font-normal">Co Founder and CEO of InsightMatches</div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-card border-l-4 border-sky-500 shadow-sm space-y-4">
                  <Quote className="w-10 h-10 text-sky-500 opacity-60" />
                  <p className="italic text-lg sm:text-xl leading-relaxed">
                    “I am delighted to join InsightMatches as Founding Grants and Product Lead, bringing my international experience in grants management and European funding,” said Serena Radano. “I am deeply motivated to help further enhance an AI driven platform that connects Korean researchers and innovators with European funding opportunities. I look forward to the exciting opportunities and challenges ahead!”
                  </p>
                  <div className="pt-2 font-semibold text-base">
                    Serena Radano
                    <div className="text-sm text-muted-foreground font-normal">Founding Grants and Product Lead</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold pt-8 pb-2 text-foreground border-b border-border/60">
                About InsightMatches Corp.
              </h2>

              <p>
                InsightMatches is an AI powered B2B SaaS platform supporting international research and innovation funding.
              </p>

              <p>
                The platform connects organisational capability profiling, funding opportunity discovery, consortium building and proposal development in one structured workflow. Its AI assisted copilot guides users through each stage, helping them align their proposals with programme requirements while retaining human review at consequential points.
              </p>

              <p>
                InsightMatches also connects users with potential research and industry partners, combining software supported matching with a growing international network.
              </p>

              <p>
                The platform helps startups, universities and research organisations reduce the administrative and coordination burden associated with programmes such as Horizon Europe and Erasmus+. Users can develop proposals with AI assistance or engage expert support during later stage proposal development.
              </p>

              <p>
                InsightMatches is headquartered in South Korea, with operations in Busan and Seoul and a growing European presence in Austria.
              </p>

              {/* Media Contact Box */}
              <div className="mt-12 p-8 rounded-2xl bg-muted/40 border border-border space-y-3">
                <h3 className="text-xl font-bold">Media Contact</h3>
                <div className="space-y-1 text-base text-muted-foreground">
                  <p className="font-semibold text-foreground">Paul Conversy · Co Founder and CEO</p>
                  <p>InsightMatches Corp.</p>
                  <p>Email: <a href="mailto:info@insightmatches.com" className="text-primary underline">info@insightmatches.com</a></p>
                  <p>South Korean Operations: Busan and Seoul</p>
                  <p>European Operations: Austria</p>
                  <p>Website: <a href="https://www.insightmatches.com" className="text-primary underline">insightmatches.com</a></p>
                  <p>LinkedIn: <a href="https://www.linkedin.com/company/insightmatches" target="_blank" rel="noopener noreferrer" className="text-primary underline">InsightMatches</a></p>
                </div>
              </div>
            </article>
          )}

          {/* Bottom Action Card */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 text-center space-y-4">
            <h3 className="text-2xl font-bold">Collaborate with InsightMatches</h3>
            <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
              Are you a research institution, university, deep tech startup or accelerator looking to participate in Horizon Europe and international collaborative funding?
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link to="/request-trial">
                <Button size="lg" className="font-semibold shadow-md">
                  Request a Platform Consultation
                </Button>
              </Link>
              <a
                href="https://www.linkedin.com/company/insightmatches"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="gap-2 font-semibold">
                  <span>Follow on LinkedIn</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LeadershipTeamPressRelease;
