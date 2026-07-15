import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';

const KoGenderEqualityPlan = () => {
  const { currentLanguage } = useTranslation();
  useEffect(() => { document.title = '성평등 계획 - InsightMatches Corp.'; }, []);
  if (currentLanguage !== 'ko') return <Navigate to="/about/gep" replace />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <SEO lang="ko" title="성평등 계획 — InsightMatches" description="InsightMatches Corp.의 공식 성평등 계획: 약속, 자원, 실행 영역, 모니터링." canonical="/ko/about/gep" />
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm rounded-xl p-8 shadow-lg" lang="ko">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">성평등 계획: InsightMatches Corp.</h1>
          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. 공식 정책 선언</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>회사:</strong> InsightMatches Corp. (인사이트매치스 주식회사)</p>
                <p><strong>승인일:</strong> 2025년 7월 1일</p>
                <p><strong>승인자:</strong> Paul Thomas CONVERSY, 대표이사</p>
                <p><strong>상태:</strong> 공식적으로 공개된 문서입니다.</p>
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. 평등에 대한 약속</h2>
              <p className="text-muted-foreground leading-relaxed">InsightMatches Corp.는 공정성, 형평성, 혁신이라는 핵심 원칙 위에 세워졌습니다. 우리는 조직, 비즈니스 관행, 커뮤니티 상호작용 전반에서 성평등 환경을 조성하기 위해 근본적으로 헌신합니다. 본 성평등 계획(GEP)은 회사가 성장함에 따라 다양성, 포용성, 형평성을 갖춘 일터를 적극적으로 구축·유지하기 위한 공식 행동 체계입니다.</p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. 전담 자원과 책임</h2>
              <p className="text-muted-foreground leading-relaxed">본 GEP의 실행, 모니터링, 지속적 검토는 대표이사 Paul Thomas CONVERSY가 직접 책임집니다. 회사가 성장함에 따라 교육, 데이터 분석, 인식 제고 활동을 위한 시간과 예산 등 전담 자원이 배정될 것입니다.</p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. 주요 실행 영역</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">InsightMatches Corp.는 현재 마이크로 기업이지만, 미래를 위한 체계를 선제적으로 마련하고 있습니다. 다음 핵심 영역에서 정책과 모범 사례를 시행할 것을 약속합니다:</p>
              <div className="space-y-6">
                <div><h3 className="text-xl font-medium mb-2 text-foreground">일과 삶의 균형 및 조직 문화</h3><p className="text-muted-foreground">유연 근무를 적극적으로 도입하고 성별과 관계없이 모든 구성원의 일과 삶의 통합을 존중하는 전문 문화를 가꿔갑니다.</p></div>
                <div><h3 className="text-xl font-medium mb-2 text-foreground">리더십과 의사결정의 성별 균형</h3><p className="text-muted-foreground">팀이 성장함에 따라 모든 리더십·의사결정 직책에서 성별 균형을 이루겠습니다. 어떤 경영진·이사회 수준에서도 단일 성별이 60%를 초과하지 않도록 합니다.</p></div>
                <div><h3 className="text-xl font-medium mb-2 text-foreground">채용과 경력 개발에서의 성평등</h3><p className="text-muted-foreground">모든 채용·승진 결정은 오직 역량, 기술, 경험에 기반합니다. 직무 기술서에 성중립적 언어를 사용하고, 경력 발전 기회가 모든 직원에게 투명하고 평등하게 열리도록 합니다.</p></div>
                <div><h3 className="text-xl font-medium mb-2 text-foreground">업무에 젠더 관점 통합</h3><p className="text-muted-foreground">제품·서비스·연구 활동의 설계와 전달에 젠더 관점을 적극적으로 통합하여 편향 없이 모든 사회 구성원을 효과적으로 섬깁니다.</p></div>
                <div><h3 className="text-xl font-medium mb-2 text-foreground">성희롱을 포함한 젠더 기반 폭력 방지</h3><p className="text-muted-foreground">InsightMatches Corp.는 괴롭힘, 차별, 젠더 기반 폭력에 대해 무관용 정책을 유지합니다. 팀이 확장됨에 따라 명확하고 비밀이 보장되며 신뢰할 수 있는 신고·처리 절차가 수립·공지될 것입니다.</p></div>
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. 데이터 수집 및 모니터링</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">책임성을 확보하고 진척도를 측정하기 위해 다음을 약속합니다:</p>
              <div className="space-y-4">
                <div><h3 className="text-xl font-medium mb-2 text-foreground">데이터 수집</h3><p className="text-muted-foreground">채용이 이루어지는 즉시 전체 인력과 리더십 직책에 대해 성별로 구분된 데이터를 연 1회 수집합니다.</p></div>
                <div><h3 className="text-xl font-medium mb-2 text-foreground">모니터링 및 보고</h3><p className="text-muted-foreground">대표이사는 매년 GEP 목표 대비 진척도를 검토하며, 검토 요약과 주요 결과는 투명성을 위해 회사 웹사이트에 공개됩니다.</p></div>
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. 교육 및 인식 제고</h2>
              <p className="text-muted-foreground leading-relaxed">평등 문화를 정착시키기 위해 대표이사는 성평등, 무의식적 편견, 포용적 리더십 등 주제에 대한 지속적 전문성 개발을 약속합니다. 이 지속 교육 약속은 향후 모든 관리·리더십 직책 직원에게 필수 요건이 될 것입니다.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KoGenderEqualityPlan;
