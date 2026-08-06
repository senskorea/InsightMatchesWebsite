import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { SEO } from '@/components/SEO';
import { Briefcase, Code, Rocket, Award, ChevronRight, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Jobs = () => {
  useEffect(() => {
    document.title = 'Jobs - InsightMatches';
  }, []);

  const opportunities = [
    {
      id: 'cto',
      title: 'Founding CTO / Lead Engineer, AI Systems',
      department: 'Engineering',
      icon: <Code className="w-6 h-6 text-sky-500" />,
      description: 'Take technical ownership of our AI-powered proposal platform. Lead our production launch and build next-generation agentic research tools.',
      tags: ['Early Stage', 'Equity Based']
    },
    {
      id: 'project-coordinator',
      title: 'Founding Project Coordinator, EU Grants',
      department: 'Operations',
      icon: <Briefcase className="w-6 h-6 text-emerald-500" />,
      description: 'Act as the operational engine behind our client success. Manage complex EU funding proposals from concept to final submission.',
      tags: ['Early Stage', 'Equity Based']
    },
    {
      id: 'head-of-growth',
      title: 'Founding Head of Growth (Sales)',
      department: 'Growth',
      icon: <Target className="w-6 h-6 text-amber-500" />,
      description: 'Own our Go-To-Market strategy. Secure our first cohort of paid users and close high-ticket enterprise deals across Europe.',
      tags: ['Early Stage', 'Equity Based']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] relative overflow-hidden text-slate-200">
      <SEO
        title="Jobs at InsightMatches"
        description="Join InsightMatches. We are hiring founding team members."
        canonical="/jobs"
      />
      <Navbar />
      
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-sky-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[60%] bg-indigo-900/20 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[40%] bg-slate-800/30 blur-[100px] rounded-full" />
      </div>

      <main className="pt-32 pb-24 px-6 relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-400 mb-8 animate-fade-in">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide uppercase">Join the Founding Team</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            Build the <span className="gradient-text">Future</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            We're on a mission to transform how EU research funding is secured through agentic AI. Join us at the ground level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-20">
          {opportunities.map((job, index) => (
            <Link 
              key={job.id} 
              to={`/careers#${job.id}`}
              className="group block relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-[#131B2C]/80 backdrop-blur-xl border border-white/10 group-hover:border-white/20 rounded-3xl p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {job.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-sky-400 transition-colors">
                    {job.department}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 leading-tight group-hover:text-sky-300 transition-colors">
                  {job.title}
                </h3>
                
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                  {job.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {job.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
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
