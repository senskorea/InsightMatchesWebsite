const people = [
  {
    name: 'Paul Conversy', photo: 'paul',
    en: ['Founder & CEO', 'Leads international strategy and research partnerships. Previously co-founded Digijeunes and worked on European research and education projects.'],
    fr: ['Fondateur et directeur général', 'Pilote la stratégie internationale et les partenariats de recherche. Il a cofondé Digijeunes et travaillé sur des projets européens de recherche et d’éducation.'],
    ko: ['창업자 겸 CEO', '국제 전략과 연구 파트너십을 이끕니다. Digijeunes를 공동 설립하고 유럽 연구 및 교육 프로젝트에 참여했습니다.'],
  },
  {
    name: 'Serena Radano', photo: 'serena',
    en: ['Founding Grants & Product Lead', 'Brings European grant writing experience to the platform and turns funding requirements into practical proposal guidance.'],
    fr: ['Responsable fondatrice des subventions et du produit', 'Met son expérience des subventions européennes au service de la plateforme et traduit les exigences des appels en conseils pratiques.'],
    ko: ['연구비 및 제품 총괄', '유럽 연구비 제안서 작성 경험을 바탕으로 공모 요건을 실용적인 제안서 작성 지침으로 정리합니다.'],
  },
  {
    name: 'Junior Mukenze', photo: 'junior',
    en: ['Head of AI Engineering & Technical Advisor', 'Leads AI architecture, semantic search and model evaluation. Conducts doctoral research in AI at Handong Global University.'],
    fr: ['Responsable de l’ingénierie IA et conseiller technique', 'Pilote l’architecture IA, la recherche sémantique et l’évaluation des modèles. Il mène des recherches doctorales en IA à Handong Global University.'],
    ko: ['AI 엔지니어링 총괄 겸 기술 고문', 'AI 아키텍처, 의미 기반 검색 및 모델 평가를 이끕니다. 한동대학교에서 AI 박사과정 연구를 수행하고 있습니다.'],
  },
  {
    name: 'Mark Potapov', photo: 'mark',
    en: ['CTO & Lead Product Engineer', 'Leads full stack development and cloud infrastructure for funding discovery, collaboration and proposal preparation.'],
    fr: ['Directeur technique et responsable de l’ingénierie produit', 'Pilote le développement et l’infrastructure cloud des outils de recherche de financements, de collaboration et de préparation des dossiers.'],
    ko: ['CTO 겸 제품 엔지니어링 리드', '연구비 탐색, 협업 및 제안서 작성을 지원하는 플랫폼의 풀스택 개발과 클라우드 인프라를 이끕니다.'],
  },
];

const headings = {
  en: ['The InsightMatches team', 'Grant experience. AI research. Product engineering.'],
  fr: ['L’équipe InsightMatches', 'Subventions européennes, recherche en IA et ingénierie produit.'],
  ko: ['InsightMatches 팀', '연구비 지원 경험, AI 연구, 제품 엔지니어링.'],
};

export function LeadershipTeam({language = 'en'}: {language?: keyof typeof headings}) {
  const [title, subtitle] = headings[language];

  return (
    <section className="px-4 py-16" aria-labelledby="leadership-team">
      <div className="mx-auto max-w-6xl">
        <h2 id="leadership-team" className="mb-3 text-center text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mb-10 text-center text-muted-foreground">{subtitle}</p>
        <div className="grid gap-6 md:grid-cols-2">
          {people.map(person => {
            const [role, bio] = person[language];
            return (
              <article key={person.name} className="flex items-start gap-4 rounded-xl border bg-card p-5 sm:gap-6 sm:p-6">
                <img className="h-24 w-20 shrink-0 rounded-md object-cover sm:h-32 sm:w-24" src={`/deck-assets/team-${person.photo}-illustrated-v1.png`} alt="" loading="lazy" />
                <div>
                  <h3 className="text-xl font-semibold">{person.name}</h3>
                  <p className="mt-1 font-medium text-primary">{role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{bio}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
