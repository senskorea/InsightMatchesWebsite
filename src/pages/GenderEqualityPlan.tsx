import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/Navbar';

const GenderEqualityPlan = () => {
  const { t, currentLanguage } = useTranslation();

  useEffect(() => {
    document.title = 'Gender Equality Plan - InsightMatches Corp.';
  }, []);

  if (currentLanguage === 'ko') return <Navigate to="/ko/about/gep" replace />;
  if (currentLanguage === 'fr') return <Navigate to="/fr/about/gep" replace />;


  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            Gender Equality Plan: InsightMatches Corp.
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Official Policy Statement</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Company:</strong> InsightMatches Corp. (인사이트매치스 주식회사)</p>
                <p><strong>Approval Date:</strong> July 1, 2025</p>
                <p><strong>Approved by:</strong> Paul Thomas CONVERSY, Representative Director</p>
                <p><strong>Status:</strong> This is an official, publicly available document.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Our Commitment to Equality</h2>
              <p className="text-muted-foreground leading-relaxed">
                InsightMatches Corp. is founded on the core principles of fairness, equity, and innovation. We are fundamentally committed to fostering an environment of gender equality within our organization, our business practices, and our community interactions. This Gender Equality Plan (GEP) serves as our formal framework for action, ensuring that we actively build and maintain a diverse, inclusive, and equitable workplace as we grow.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Dedicated Resources & Responsibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                The implementation, monitoring, and ongoing review of this Gender Equality Plan are under the direct responsibility of our Representative Director, Paul Thomas CONVERSY. As our company expands, dedicated resources, including time and budget, will be allocated to support training, data analysis, and awareness-raising initiatives related to this plan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Thematic Areas for Action</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While InsightMatches Corp. is currently a micro-enterprise, we are proactively establishing this framework to guide our future. We commit to implementing policies and best practices in the following key areas:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">Work-Life Balance and Organizational Culture</h3>
                  <p className="text-muted-foreground">
                    We will champion flexible working arrangements and cultivate a professional culture that respects the integration of personal and professional lives for all team members, regardless of gender.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">Gender Balance in Leadership and Decision-Making</h3>
                  <p className="text-muted-foreground">
                    As our team grows, we are committed to achieving gender balance in all leadership and decision-making roles. Our goal is to ensure that no single gender holds more than 60% of positions at any management or board level.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">Gender Equality in Recruitment and Career Progression</h3>
                  <p className="text-muted-foreground">
                    All hiring and promotion decisions will be based exclusively on merit, skills, and experience. We will use gender-neutral language in all job descriptions and ensure that opportunities for career advancement are transparent and equally accessible to all employees.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">Integration of the Gender Dimension into Our Work</h3>
                  <p className="text-muted-foreground">
                    We will actively consider and integrate the gender dimension into the design and delivery of our products, services, and research activities. This ensures our work is free from bias and serves all segments of society effectively.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">Measures Against Gender-Based Violence, Including Sexual Harassment</h3>
                  <p className="text-muted-foreground">
                    InsightMatches Corp. maintains a strict zero-tolerance policy against harassment, discrimination, and gender-based violence. A clear, confidential, and reliable procedure for reporting and addressing any such incidents will be established and communicated as our team expands.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Data Collection and Monitoring</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To ensure accountability and measure our progress, we commit to the following actions:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">Data Collection</h3>
                  <p className="text-muted-foreground">
                    We will conduct an annual collection of gender-disaggregated data for all personnel (once employees are hired) and leadership roles.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">Monitoring and Reporting</h3>
                  <p className="text-muted-foreground">
                    The Representative Director will review progress against the objectives of this GEP annually. A summary of this review and our key findings will be made public on our company website to ensure transparency.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Training and Awareness-Raising</h2>
              <p className="text-muted-foreground leading-relaxed">
                To embed a culture of equality, the Representative Director commits to continuous professional development on topics including gender equality, unconscious bias, and inclusive leadership. This commitment to ongoing education will be a requirement for all future employees in management and leadership positions.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderEqualityPlan;