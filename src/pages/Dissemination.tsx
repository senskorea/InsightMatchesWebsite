import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { useTranslation } from '@/hooks/useTranslation';
import { Globe, Target, Users, Megaphone } from 'lucide-react';

const Dissemination = () => {
  const { t, currentLanguage } = useTranslation();

  useEffect(() => {
    document.title = 'Dissemination - InsightMatches';
  }, []);

  if (currentLanguage === 'ko') return <Navigate to="/ko/dissemination" replace />;
  if (currentLanguage === 'fr') return <Navigate to="/fr/dissemination" replace />;


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 sm:pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Dissemination & Impact
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Amplifying research impact through strategic communication and partnerships
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">European Network</h3>
              <p className="text-muted-foreground">
                Leveraging our extensive EU network to maximize research visibility and impact across European innovation ecosystems
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Strategic Communication</h3>
              <p className="text-muted-foreground">
                Targeted dissemination strategies to reach key stakeholders, policymakers, and industry partners
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Community Engagement</h3>
              <p className="text-muted-foreground">
                Building bridges between research communities in Europe and Asia through active engagement and knowledge sharing
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Megaphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Impact Amplification</h3>
              <p className="text-muted-foreground">
                Converting research outputs into tangible societal and economic benefits through effective dissemination
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="p-8 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-border">
            <h2 className="text-3xl font-bold mb-6">Our Dissemination Approach</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As an active partner in the Horizon Europe ecosystem, we understand that successful research goes beyond project completion. 
                Our dissemination services ensure your research findings reach the right audiences and create lasting impact.
              </p>
              <p>
                We combine strategic communication, digital channels, and our extensive network to amplify your research voice 
                across Europe and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dissemination;
