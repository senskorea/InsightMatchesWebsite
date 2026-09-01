import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';
import { Award, Briefcase, CheckCircle, ChevronRight, Code, Megaphone, Rocket, Target } from 'lucide-react';

type Role = {
  id: string;
  title: string;
  department: string;
  intro: string;
  responsibilities: string[];
  requirements: string[];
  firstSixMonths: string[];
  subject: string;
  icon: 'target' | 'code' | 'briefcase' | 'megaphone';
};

const shared = {
  en: {
    badge: 'Join Our Founding Team',
    headline: 'Help Us Build the Future of Research Collaboration',
    subtitle: 'Join InsightMatches across operations, technology, EU funding and growth.',
    stage: 'Early Stage / Founding Team',
    compensationTag: 'Equity Based',
    opportunity: 'The Opportunity',
    responsibilities: 'Responsibilities',
    requirements: 'What We’re Looking For',
    firstSixMonths: 'First Six Months',
    compensation: 'Compensation and Pathway',
    compensationBody: [
      'The initial role is equity based, with no guaranteed salary at the outset. Scope, commitment, vesting and decision rights will be clearly agreed.',
      'The intended pathway is to a full time salaried role once agreed funding or revenue milestones make this sustainable.'
    ],
    apply: 'Apply Now',
    directLink: 'Direct link to this role',
    language: 'Page language'
  },
  ko: {
    badge: '창립 팀에 합류하세요',
    headline: '연구 협업의 미래를 함께 만들어 가세요',
    subtitle: '운영, 기술, EU 연구 지원 및 성장 분야에서 InsightMatches와 함께하세요.',
    stage: '초기 단계 / 창립 팀',
    compensationTag: '지분 기반 보상',
    opportunity: '포지션 소개',
    responsibilities: '주요 업무',
    requirements: '자격 요건 및 우대 사항',
    firstSixMonths: '첫 6개월',
    compensation: '보상 및 향후 계획',
    compensationBody: [
      '초기 보상은 지분 기반이며, 시작 시점에 급여는 보장되지 않습니다. 업무 범위, 참여 수준, 지분 확정 조건(베스팅) 및 의사결정 권한은 명확히 합의합니다.',
      '합의된 투자 유치 또는 매출 목표를 달성하여 지속 가능한 급여 지급이 가능해지면 급여를 받는 풀타임 역할로 전환하는 것을 목표로 합니다.'
    ],
    apply: '지원하기',
    directLink: '이 포지션 바로가기 링크',
    language: '페이지 언어'
  }
};

const roles: Record<'en' | 'ko', Role[]> = {
  en: [
    {
      id: 'korea-country-manager',
      title: 'Founding Country Manager, Korea',
      department: 'Operations, Partnerships and Growth',
      intro: 'Lead our Korean operations, strengthen relationships with key institutions and help InsightMatches grow in its home market.',
      responsibilities: [
        'Coordinate company administration, electronic tax invoices, documentation and communication with our accountants.',
        'Build relationships with government agencies, public research institutes, universities and commercial partners.',
        'Identify relevant Korean startup competitions and accelerator programmes.',
        'Coordinate programme applications, supporting documentation and communication with organisers.',
        'Support our Korean market strategy, outreach, partnerships and early commercial development.'
      ],
      requirements: [
        'Native Korean speaker with professional working proficiency in English.',
        'Background in operations, marketing, sales, international relations or a related field.',
        'Strong organisational skills and confidence communicating with institutional and commercial partners.',
        'Proactive and practical approach with honest communication and a willingness to learn.',
        'Experience studying, working or living abroad is an advantage.'
      ],
      firstSixMonths: [
        'Establish a reliable rhythm for company administration and accountant coordination.',
        'Build a prioritised map of Korean institutions, programmes and potential partners.',
        'Submit selected programme applications and support the first Korean partnership opportunities.'
      ],
      subject: 'Application: Founding Country Manager, Korea',
      icon: 'target'
    },
    {
      id: 'technology-lead',
      title: 'Founding Technology Lead, AI Systems',
      department: 'Technology and Product',
      intro: 'Take technical ownership of our existing platform, lead its production launch and build the next generation of AI assisted research tools.',
      responsibilities: [
        'Own the existing codebase, technical architecture and development roadmap.',
        'Lead production readiness, deployment, security, monitoring and reliability.',
        'Build and improve customer facing features across the proposal workflow.',
        'Strengthen AI evaluation, observability, fallback handling and cost controls.',
        'Coordinate developers and help establish the future engineering team and culture.'
      ],
      requirements: [
        'Strong experience building and operating production SaaS applications.',
        'Excellent TypeScript, React, database, API and cloud engineering skills.',
        'Practical experience integrating large language models into real products.',
        'Understanding of authentication, data isolation, security and PostgreSQL.',
        'Comfort combining hands on development with technical leadership.'
      ],
      firstSixMonths: [
        'Assess the current release candidate and lead a safe production launch.',
        'Improve platform reliability and establish measurable AI quality and cost controls.',
        'Deliver the next priority features and define a practical technical roadmap.'
      ],
      subject: 'Application: Founding Technology Lead, AI Systems',
      icon: 'code'
    },
    {
      id: 'project-coordinator',
      title: 'Founding Project Coordinator, EU Funding',
      department: 'EU Funding and Operations',
      intro: 'Guide complex EU funding projects from concept to submission while ensuring that our platform reflects the needs of researchers and clients.',
      responsibilities: [
        'Manage Horizon Europe, EIC and related proposals from concept to final submission.',
        'Coordinate international research consortia, clients and key stakeholders.',
        'Ensure deliverables meet EU compliance, quality and administrative requirements.',
        'Improve internal proposal pipelines and operational workflows.',
        'Guide the product team on client needs, funding requirements and proposal quality.'
      ],
      requirements: [
        'Strong understanding of EU funding mechanisms and proposal structures.',
        'Experience managing complex projects involving multiple international stakeholders.',
        'Excellent written and verbal communication skills in English.',
        'Strong organisational ability and attention to detail.',
        'Builder mindset suited to an early stage and rapidly changing environment.'
      ],
      firstSixMonths: [
        'Define a consistent workflow for managing client proposals and consortium activity.',
        'Support priority proposals and establish clear quality controls.',
        'Translate recurring client needs into practical product recommendations.'
      ],
      subject: 'Application: Founding Project Coordinator, EU Funding',
      icon: 'briefcase'
    },
    {
      id: 'growth-content-lead',
      title: 'Founding Growth and Content Lead',
      department: 'Marketing, Content and Sales',
      intro: 'Turn InsightMatches expertise into clear content, qualified demand and the first repeatable customer acquisition channels.',
      responsibilities: [
        'Develop and execute the company’s early marketing and content strategy.',
        'Create credible content for researchers, universities, SMEs and research organisations.',
        'Build targeted campaigns and lead generation activities across priority markets.',
        'Support outbound sales, qualification, follow up and conversion of early opportunities.',
        'Turn customer insights and performance data into stronger messaging and campaigns.'
      ],
      requirements: [
        'Experience across content, growth marketing, business development or B2B sales.',
        'Strong English writing skills and the ability to explain complex subjects clearly.',
        'Comfort creating content and directly engaging prospective customers.',
        'Analytical approach to testing channels, messaging and conversion.',
        'Interest in research, technology, startups and international collaboration.'
      ],
      firstSixMonths: [
        'Clarify our core messaging, priority audiences and content plan.',
        'Launch a consistent content and outbound campaign rhythm.',
        'Build a measurable lead pipeline and identify the strongest acquisition channels.'
      ],
      subject: 'Application: Founding Growth and Content Lead',
      icon: 'megaphone'
    }
  ],
  ko: [
    {
      id: 'korea-country-manager',
      title: '창립 한국 컨트리 매니저',
      department: '운영, 파트너십 및 성장',
      intro: '한국 내 운영을 이끌고 주요 기관과의 관계를 강화하며 InsightMatches의 국내 성장을 지원합니다.',
      responsibilities: [
        '전자세금계산서, 문서 관리 및 회계 담당자와의 소통 등 회사 행정 업무를 조율합니다.',
        '정부 기관, 공공 연구기관, 대학 및 기업 파트너와 관계를 구축합니다.',
        'InsightMatches가 참여할 수 있는 국내 스타트업 경진대회와 액셀러레이터 프로그램을 발굴합니다.',
        '프로그램 지원, 증빙 서류 준비 및 주최 기관과의 소통을 조율합니다.',
        '한국 시장 전략, 대외 활동, 파트너십 및 초기 사업 개발을 지원합니다.'
      ],
      requirements: [
        '한국어가 모국어이며 영어로 업무를 수행할 수 있는 분',
        '운영, 마케팅, 영업, 국제관계 또는 관련 분야의 배경을 갖춘 분',
        '체계적인 업무 관리 능력을 갖추고 기관 및 기업 파트너와 원활하게 소통할 수 있는 분',
        '주도적이고 실용적인 태도로 솔직하게 소통하며 배우려는 의지가 있는 분',
        '해외 유학, 근무 또는 거주 경험이 있는 분 우대'
      ],
      firstSixMonths: [
        '회사 행정과 회계 협업을 위한 안정적인 업무 체계를 구축합니다.',
        '국내 주요 기관, 지원 프로그램 및 잠재 파트너의 우선순위 지도를 만듭니다.',
        '선정된 프로그램에 지원하고 초기 한국 파트너십 기회를 추진합니다.'
      ],
      subject: '지원: 창립 한국 컨트리 매니저',
      icon: 'target'
    },
    {
      id: 'technology-lead',
      title: '창립 기술 리드, AI 시스템',
      department: '기술 및 제품',
      intro: '기존 플랫폼의 기술적 책임을 맡아 정식 출시를 이끌고 차세대 AI 기반 연구 도구를 개발합니다.',
      responsibilities: [
        '기존 코드베이스, 기술 아키텍처 및 개발 로드맵을 총괄합니다.',
        '정식 서비스 준비, 배포, 보안, 모니터링 및 안정성 확보를 이끕니다.',
        '제안서 작성 과정 전반의 사용자 기능을 개발하고 개선합니다.',
        'AI 평가, 운영 상태 파악, 오류 대체 처리 및 비용 관리를 강화합니다.',
        '개발자를 조율하고 향후 엔지니어링 팀과 개발 문화 구축을 지원합니다.'
      ],
      requirements: [
        '실제 서비스 중인 SaaS 애플리케이션을 개발하고 운영한 풍부한 경험',
        '뛰어난 TypeScript, React, 데이터베이스, API 및 클라우드 엔지니어링 역량',
        '실제 제품에 대규모 언어 모델을 통합한 실무 경험',
        '인증, 데이터 격리, 보안 및 PostgreSQL에 대한 이해',
        '직접 개발에 참여하면서 기술 리더십을 발휘할 수 있는 분'
      ],
      firstSixMonths: [
        '현재 출시 후보 버전을 평가하고 안정적인 정식 출시를 이끕니다.',
        '플랫폼 안정성을 높이고 측정 가능한 AI 품질 및 비용 관리 체계를 구축합니다.',
        '우선순위 기능을 제공하고 실행 가능한 기술 로드맵을 수립합니다.'
      ],
      subject: '지원: 창립 기술 리드, AI 시스템',
      icon: 'code'
    },
    {
      id: 'project-coordinator',
      title: '창립 프로젝트 코디네이터, EU 연구 지원',
      department: 'EU 연구 지원 및 운영',
      intro: '복잡한 EU 연구 지원 프로젝트를 기획부터 제출까지 관리하고 플랫폼이 연구자와 고객의 요구를 반영하도록 지원합니다.',
      responsibilities: [
        'Horizon Europe, EIC 및 관련 제안서를 기획부터 최종 제출까지 관리합니다.',
        '국제 연구 컨소시엄, 고객 및 주요 이해관계자 간의 협업을 조율합니다.',
        '산출물이 EU 규정, 품질 및 행정 요건을 충족하도록 관리합니다.',
        '내부 제안서 진행 체계와 운영 절차를 개선합니다.',
        '고객 요구, 지원사업 요건 및 제안서 품질에 관해 제품 팀에 방향을 제시합니다.'
      ],
      requirements: [
        'EU 연구 지원 제도와 제안서 구조에 대한 깊은 이해',
        '다수의 국제 이해관계자가 참여하는 복잡한 프로젝트의 관리 경험',
        '뛰어난 영어 문서 작성 및 구두 소통 능력',
        '강한 업무 관리 능력과 세부 사항에 대한 주의력',
        '빠르게 변화하는 초기 스타트업 환경에 적합한 실행 중심의 사고방식'
      ],
      firstSixMonths: [
        '고객 제안서와 컨소시엄 활동을 관리하는 일관된 업무 절차를 정의합니다.',
        '우선순위 제안서를 지원하고 명확한 품질 관리 체계를 구축합니다.',
        '반복되는 고객 요구를 실행 가능한 제품 개선안으로 전환합니다.'
      ],
      subject: '지원: 창립 프로젝트 코디네이터, EU 연구 지원',
      icon: 'briefcase'
    },
    {
      id: 'growth-content-lead',
      title: '창립 성장 및 콘텐츠 리드',
      department: '마케팅, 콘텐츠 및 영업',
      intro: 'InsightMatches의 전문성을 명확한 콘텐츠, 잠재 고객 수요 및 반복 가능한 고객 확보 채널로 전환합니다.',
      responsibilities: [
        '회사의 초기 마케팅 및 콘텐츠 전략을 수립하고 실행합니다.',
        '연구자, 대학, 중소기업 및 연구기관을 위한 신뢰도 높은 콘텐츠를 제작합니다.',
        '우선시장에 맞춘 캠페인과 잠재 고객 발굴 활동을 구축합니다.',
        '아웃바운드 영업, 고객 선별, 후속 연락 및 초기 계약 전환을 지원합니다.',
        '고객 의견과 성과 데이터를 더 강력한 메시지와 캠페인으로 전환합니다.'
      ],
      requirements: [
        '콘텐츠, 성장 마케팅, 사업 개발 또는 B2B 영업 경험',
        '복잡한 주제를 명확하게 설명할 수 있는 뛰어난 영어 글쓰기 능력',
        '콘텐츠를 직접 제작하고 잠재 고객과 소통할 수 있는 분',
        '채널, 메시지 및 전환을 실험하고 분석하는 접근 방식',
        '연구, 기술, 스타트업 및 국제 협업에 대한 관심'
      ],
      firstSixMonths: [
        '핵심 메시지, 우선 고객군 및 콘텐츠 계획을 명확히 합니다.',
        '일관된 콘텐츠 제작 및 아웃바운드 캠페인 운영 체계를 시작합니다.',
        '측정 가능한 잠재 고객 파이프라인을 구축하고 가장 효과적인 고객 확보 채널을 파악합니다.'
      ],
      subject: '지원: 창립 성장 및 콘텐츠 리드',
      icon: 'megaphone'
    }
  ]
};

const iconFor = (icon: Role['icon']) => {
  const className = 'w-5 h-5';
  if (icon === 'code') return <Code className={className} />;
  if (icon === 'briefcase') return <Briefcase className={className} />;
  if (icon === 'megaphone') return <Megaphone className={className} />;
  return <Target className={className} />;
};

const Careers = () => {
  const { pathname, search, hash } = useLocation();
  const isKorean = pathname.startsWith('/ko/');
  const language = isKorean ? 'ko' : 'en';
  const text = shared[language];
  const vacancies = roles[language];

  useEffect(() => {
    document.title = isKorean ? '채용 | InsightMatches' : 'Careers at InsightMatches';
  }, [isKorean]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO
        title={isKorean ? '채용 | InsightMatches' : 'Careers at InsightMatches'}
        description={isKorean ? 'InsightMatches 창립 팀의 네 가지 채용 포지션을 확인하세요.' : 'Explore four founding team opportunities at InsightMatches.'}
        canonical={isKorean ? '/ko/careers' : '/careers'}
        lang={language}
      />
      <Navbar />

      <section className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6" aria-label={text.language}>
            <Link to={`/careers${search}${hash}`} lang="en" aria-current={!isKorean ? 'page' : undefined} className="text-primary underline underline-offset-4">English</Link>
            <Link to={`/ko/careers${search}${hash}`} lang="ko" aria-current={isKorean ? 'page' : undefined} className="text-primary underline underline-offset-4">한국어</Link>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium">{text.badge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{text.headline}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{text.subtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 text-left">
            {vacancies.map(role => (
              <a key={role.id} href={`#${role.id}`} className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-md group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {iconFor(role.icon)}
                </div>
                <h3 className="font-semibold text-foreground mb-1">{role.title}</h3>
                <p className="text-sm text-muted-foreground">{role.department}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {vacancies.map(role => (
        <section key={role.id} className="py-8 px-4" style={{ scrollMarginTop: 'calc(var(--demo-banner-h, 0px) + 5rem)' }} id={role.id} lang={language}>
          {role.id === 'technology-lead' && <div id="cto" className="scroll-mt-24" aria-hidden="true" />}
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-border pb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{role.title}</h2>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">{iconFor(role.icon)} {role.department}</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted"><Rocket className="w-4 h-4" /> {text.stage}</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted"><Award className="w-4 h-4" /> {text.compensationTag}</span>
                  </div>
                </div>
                <a href={`mailto:info@insightmatches.com?subject=${encodeURIComponent(role.subject)}`} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shrink-0">
                  {text.apply} <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              <div className="mb-8">
                <a href={`${isKorean ? '/ko' : ''}/careers#${role.id}`} className="text-primary underline underline-offset-4">{text.directLink}</a>
              </div>

              <div className="space-y-10">
                <RoleSection icon={<Rocket className="w-5 h-5" />} title={text.opportunity}>
                  <p>{role.intro}</p>
                </RoleSection>
                <RoleSection icon={<Briefcase className="w-5 h-5" />} title={text.responsibilities}>
                  <BulletList items={role.responsibilities} checked />
                </RoleSection>
                <RoleSection icon={<Target className="w-5 h-5" />} title={text.requirements}>
                  <BulletList items={role.requirements} />
                </RoleSection>
                <RoleSection icon={<Rocket className="w-5 h-5" />} title={text.firstSixMonths}>
                  <BulletList items={role.firstSixMonths} checked />
                </RoleSection>
                <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 p-6 md:p-8 rounded-xl border border-border">
                  <RoleSection icon={<Award className="w-5 h-5" />} title={text.compensation}>
                    {text.compensationBody.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                  </RoleSection>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

const RoleSection = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
      <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">{icon}</span>
      {title}
    </h3>
    <div className="pl-0 sm:pl-10 space-y-3 text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

const BulletList = ({ items, checked = false }: { items: string[]; checked?: boolean }) => (
  <ul className="space-y-3">
    {items.map(item => (
      <li key={item} className="flex items-start gap-3">
        {checked ? <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /> : <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />}
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default Careers;
