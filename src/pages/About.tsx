import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { useTranslation } from '@/hooks/useTranslation';
import { Link, Navigate } from 'react-router-dom';
import { Target, Users, Award, ArrowRight, Handshake, Globe, Building2, CheckCircle, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { aboutPageSchema, organizationSchema } from '@/lib/seo-schemas';

interface Partner {
  name: string;
  status: 'Signed' | 'In progress';
  description: string;
}

const partners: Partner[] = [
  {
    name: "Yundera",
    status: "Signed",
    description: "Yundera is a technology service that simplifies self-hosting by acting as a layer between infrastructure providers (e.g., AWS, Scaleway) and the end-user. It offers pre-configured setups for applications like websites, file sharing, and AI, enabling users to launch these services on their own servers while emphasizing data ownership and control."
  },
  {
    name: "Aptero",
    status: "Signed", 
    description: "Aptero develops a three-dimensional interaction platform for virtual meeting spaces, events, interactive shops, and an educational ecosystem. Their platform is web-based, supports optional virtual reality headset use, and aims to help businesses host immersive experiences remotely."
  },
  {
    name: "Kcell",
    status: "Signed",
    description: "KCell Biosciences, a South Korean biotech company founded in 2021, specializes in cell culture media research, development, and production. A joint venture between WSG (Korea) and Thousand Oaks Biopharmaceuticals (US), KCell aims to be Korea's first mass producer of serum-free, chemically defined cell culture media."
  },
  {
    name: "WSG",
    status: "Signed",
    description: "WSG Group (Busan, South Korea) manufactures precision-engineered flow components for ultra-high-purity (UHP) applications. These are used in sectors like semiconductors, LCD/OLED displays, microelectronics, biotechnology, life sciences, and pharmaceuticals."
  },
  {
    name: "Haii",
    status: "Signed", 
    description: "Haii is a digital health company that develops voice-based artificial intelligence (AI) technology and digital biomarkers to aid in the diagnosis, prevention, and management of neurodegenerative diseases and mental health conditions such as dementia, depression, and anxiety disorders."
  },
  {
    name: "Joerg Wolf",
    status: "In progress",
    description: "Joerg Wolf is an experienced R&D Automotive Manager with a PhD in Robotics, currently serving as an R&D Leader at Mercedes-Benz Korea Ltd. His work involves leading a team of navigation development engineers and project management for navigation systems in Asian markets."
  },
  {
    name: "3D PLus",
    status: "Signed",
    description: "3D PLUS is an expert in 3D printing, prototyping, graphic design, they are essentially a design consultancy expert in the 4th industrial revolution. Based in Busan, South Korea."
  },
  {
    name: "Speak Duo",
    status: "In progress",
    description: "Speak Duo is an online platform designed to help users improve their English speaking confidence. It facilitates 1:1 conversations with other members at similar fluency levels. The platform provides AI-powered feedback on pronunciation, grammar, and vocabulary."
  },
  {
    name: "Sighty",
    status: "Signed",
    description: "Sighty specializes in Go-To-Market, Marketing & Sales, and HR services, with a particular focus on facilitating the migration of Korean professionals and businesses to Germany. They guide clients from strategy to execution using a customer-centric, analytics-based approach."
  }
];

const About = () => {
  const { t, currentLanguage } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    document.title = 'About Us - InsightMatches';
  }, []);

  if (currentLanguage === 'ko') return <Navigate to="/ko/about" replace />;
  if (currentLanguage === 'fr') return <Navigate to="/fr/about" replace />;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <SEO
        title="About InsightMatches — Bridging Europe and Asia R&D"
        description="Meet InsightMatches: an AI platform bridging Europe and Asia. €20M+ in EU R&I funding pipeline supported across our client base, success rate 2× the EU average, and a trusted partner network."
        canonical="/about"
        jsonLd={[aboutPageSchema, organizationSchema]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Handshake className="w-4 h-4" />
            <span className="text-sm font-medium">About Us & Our Partners</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About InsightMatches</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging Europe and Asia through AI-powered research funding solutions and strategic partnerships
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group p-8 rounded-xl bg-card border border-border text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                Democratizing access to European research funding by making the complex simple through AI and expertise
              </p>
            </div>

            <div className="group p-8 rounded-xl bg-card border border-border text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where innovative researchers can focus on science while we handle the funding complexity
              </p>
            </div>

            <div className="group p-8 rounded-xl bg-card border border-border text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Excellence, innovation, transparency, and commitment to our clients' success
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-border mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                InsightMatches was born from a simple observation: the gap between brilliant research ideas and 
                successful EU funding applications was unnecessarily wide. Across Horizon Europe, EIC, Erasmus+ 
                and Interreg, too many worthy projects were failing not due to lack of merit, but due to 
                navigational complexity.
              </p>
              <p>
                Our team combines deep European research ecosystem expertise with cutting-edge AI technology to 
                transform the funding application process. We've helped support <strong>€20M+ in funding 
                pipeline</strong> across our client base, with a success rate double the EU average. 
                (Pipeline reflects proposals we've helped shape and submit — not funds already disbursed.)
              </p>
              <p>
                Based in both Europe and Asia, we bridge continents, cultures, and capabilities to help researchers 
                and innovators achieve their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Network Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">Partnership Network</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Trusted Partners</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work with innovative companies and professionals across various industries to bring cutting-edge solutions to market
            </p>
          </div>

          {/* Partner Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">European Network</h3>
              <p className="text-sm text-muted-foreground">
                Strong partnerships with leading European research institutions and innovation hubs
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Industry Partners</h3>
              <p className="text-sm text-muted-foreground">
                Collaborations with technology companies, SMEs, and corporate innovators
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategic Alliances</h3>
              <p className="text-sm text-muted-foreground">
                90+ client pipeline with vetted partners ready for consortium building
              </p>
            </div>
          </div>

          {/* Partner Carousel */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            {/* Navigation */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-all duration-200 hover:scale-105"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>

              <div className="flex gap-2">
                {partners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-primary scale-125'
                        : 'bg-muted-foreground/30 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-all duration-200 hover:scale-105"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Partner Card */}
            <div 
              className="min-h-[200px] flex items-center justify-center"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="w-full">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold">
                        {partners[currentIndex].name}
                      </h3>
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                        partners[currentIndex].status === 'Signed'
                          ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                          : 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
                      }`}>
                        {partners[currentIndex].status === 'Signed' 
                          ? <CheckCircle className="w-4 h-4" />
                          : <Clock className="w-4 h-4" />
                        }
                        {partners[currentIndex].status}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {partners[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="w-full bg-muted rounded-full h-1">
                <div 
                  className="bg-gradient-to-r from-primary to-accent h-1 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${((currentIndex + 1) / partners.length) * 100}%`
                  }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>{currentIndex + 1} of {partners.length}</span>
                <span>{partners.filter(p => p.status === 'Signed').length} Signed Partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-border mb-12">
            <h2 className="text-3xl font-bold mb-6">Partnership Philosophy</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At InsightMatches, partnerships are at the heart of what we do. We believe that the best research 
                outcomes emerge from diverse, complementary collaborations that span borders, disciplines, and sectors.
              </p>
              <p>
                Our partner network is carefully curated to ensure quality, reliability, and alignment with European 
                research funding requirements. Whether you're looking for academic partners, industry collaborators, 
                or cross-border consortia, we connect you with the right partners for success.
              </p>
              <p className="font-medium text-foreground">
                Interested in becoming a partner? We're always looking to expand our network with innovative 
                organizations committed to advancing European research.
              </p>
            </div>
          </div>

          {/* Quick Link */}
          <div className="max-w-md mx-auto">
            <Link to="/about/gep" className="group p-6 rounded-xl bg-card border border-border hover:border-primary transition-all flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">Gender Equality Plan</h3>
                <p className="text-sm text-muted-foreground">
                  Our commitment to diversity, equity, and inclusion
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;