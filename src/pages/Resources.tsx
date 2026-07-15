import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { useTranslation } from '@/hooks/useTranslation';
import { Link, Navigate } from 'react-router-dom';
import { BookOpen, Newspaper, ArrowRight, Globe2, FileText, GitCompare, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { organizationSchema, websiteSchema } from '@/lib/seo-schemas';

const Resources = () => {
  const { t, currentLanguage } = useTranslation();

  useEffect(() => {
    document.title = 'Resources — Horizon Europe & EU-Korea R&D Insights | InsightMatches';
  }, []);

  if (currentLanguage === 'ko') return <Navigate to="/ko/resources" replace />;
  if (currentLanguage === 'fr') return <Navigate to="/fr/resources" replace />;


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO
        title="Resources — Horizon Europe & EU-Korea R&D Insights"
        description="Guides, comparisons and policy briefs on Horizon Europe, EU-Korea R&D collaboration, and consortium building for Korean researchers and SMEs."
        canonical="/resources"
        jsonLd={[organizationSchema, websiteSchema]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources Hub</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights, industry trends, and the latest updates from the European research funding ecosystem
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/resources/insights" className="group">
            <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-between">
                Insights & Interviews
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground">
                Deep-dive articles, expert interviews, and thought leadership on EU research funding, 
                innovation trends, and partnership strategies
              </p>
            </div>
          </Link>

          <Link to="/resources/news" className="group">
            <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Newspaper className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-between">
                News & Announcements
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground">
                Latest updates on funding calls, policy changes, success stories, and important announcements 
                from the EU research landscape
              </p>
            </div>
          </Link>

          <Link to="/resources/horizon-europe" className="group">
            <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-between">
                What is Horizon Europe?
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground">
                A clear explainer of the EU's €95.5B research and innovation programme — pillars,
                clusters, eligibility, and how funding works.
              </p>
            </div>
          </Link>

          <Link to="/resources/guide-horizon-europe-korea" className="group">
            <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-between">
                Guide: Horizon Europe for Korea
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground">
                The definitive 2024–2027 guide for Korean researchers, universities and SMEs —
                association status, budgets, eligibility and application steps.
              </p>
            </div>
          </Link>

          <Link to="/resources/ai-tools-eu-korea-consortium" className="group">
            <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GitCompare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-between">
                AI Tools vs. Manual Search
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground">
                Side-by-side comparison of AI matchmaking, brokerage events and manual portal
                search for EU-Korea consortium building.
              </p>
            </div>
          </Link>

          <Link to="/resources/eu-korea-digital-partnership" className="group">
            <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Handshake className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-between">
                EU-Korea Digital Partnership
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground">
                How the 2022 Digital Partnership reshapes deep-tech grant funding — semis, 6G,
                AI, quantum, and joint MSIT/MOTIE-EC calls.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-border">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive the latest insights and opportunities directly in your inbox
          </p>
          <Button size="lg">Subscribe to Newsletter</Button>
        </div>
      </section>
    </div>
  );
};

export default Resources;
