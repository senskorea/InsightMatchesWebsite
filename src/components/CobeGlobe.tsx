
import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { Search, Bell, LayoutDashboard, Folder, Activity, Settings, Users, Zap, BarChart3, Check, Clock, Calendar, Award } from 'lucide-react';

export const CobeGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // Korea
        { location: [37.5665, 126.9780], size: 0.07 },
        // European cities
        { location: [52.5200, 13.4050], size: 0.05 }, // Berlin
        { location: [48.8566, 2.3522], size: 0.05 }, // Paris
        { location: [41.9028, 12.4964], size: 0.05 }, // Rome
        { location: [55.7558, 37.6176], size: 0.05 }, // Moscow
        { location: [59.3293, 18.0686], size: 0.05 }, // Stockholm
      ],
      onRender: (state) => {
        // Auto-rotate
        phi += 0.01;
        state.phi = phi;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="relative">
      {/* Mockup Interface Frame */}
      <div className="mockup-window glassmorphic rounded-3xl shadow-2xl border border-mint-400/20 overflow-hidden hover:shadow-glow transition-all duration-500 max-w-4xl mx-auto">
        {/* Window Header */}
        <div className="mockup-titlebar flex items-center h-12 px-5 bg-gradient-to-r from-mint-500/10 to-lavender-500/10 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="mx-auto text-base font-semibold text-white/95">InsightMatches Platform</span>
          <div className="ml-auto flex items-center gap-2">
            <button className="relative w-8 h-8 rounded-lg flex items-center justify-center hover:bg-mint-500/10 transition">
              <Bell className="w-4 h-4 text-mint-200" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-lavender-400 rounded-full shadow-lg"></span>
            </button>
          </div>
        </div>

        <div className="flex min-h-[500px]">
          {/* Sidebar */}
          <aside className="w-20 bg-gradient-to-b from-charcoal-800/50 to-charcoal-900/50 border-r border-white/10 flex flex-col items-center py-4 gap-4">
            <nav className="flex flex-col gap-2 mt-4">
              <button className="sidebar-active rounded-lg flex items-center justify-center w-10 h-10 bg-gradient-to-r from-mint-500/20 to-lavender-500/20 shadow-lg">
                <LayoutDashboard className="w-5 h-5 text-mint-300" />
              </button>
              <button className="rounded-lg flex items-center justify-center w-10 h-10 hover:bg-mint-500/10 transition">
                <Search className="w-5 h-5 text-mint-200" />
              </button>
              <button className="rounded-lg flex items-center justify-center w-10 h-10 hover:bg-mint-500/10 transition">
                <Folder className="w-5 h-5 text-mint-200" />
              </button>
              <button className="rounded-lg flex items-center justify-center w-10 h-10 hover:bg-mint-500/10 transition">
                <Activity className="w-5 h-5 text-mint-200" />
              </button>
            </nav>
            <div className="flex-grow"></div>
            <button className="rounded-lg flex items-center justify-center w-10 h-10 hover:bg-mint-500/10 transition">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Profile" className="w-7 h-7 rounded-lg object-cover border-2 border-mint-400/50" />
            </button>
          </aside>

          {/* Main Content with Globe */}
          <div className="flex-1 p-6 space-y-6 relative">
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-white mb-1">Global Research Network</h2>
                <p className="text-gray-300 mb-4">Connecting Korean innovation with European opportunities.</p>
                <div className="flex items-center gap-5">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">Active Projects</span>
                    <span className="text-lg font-semibold text-mint-200">3</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">Success Rate</span>
                    <span className="text-lg font-semibold text-mint-200">85%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">Total Funding</span>
                    <span className="text-lg font-semibold text-mint-200">€2.3M</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Globe Container */}
            <div className="flex justify-center items-center relative">
              <canvas
                ref={canvasRef}
                style={{
                  width: 400,
                  height: 400,
                  maxWidth: '100%',
                  aspectRatio: 1,
                }}
                className="opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              
              {/* Floating UI Elements around Globe */}
              <div className="absolute top-4 left-4 glassmorphic rounded-xl p-3 border border-mint-400/20 animate-fade-in">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-xs text-white">Live Matching</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 glassmorphic rounded-xl p-3 border border-mint-400/20 animate-fade-in">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-mint-300" />
                  <span className="text-xs text-white">42 Partners</span>
                </div>
              </div>
            </div>

            {/* Bottom Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="glassmorphic rounded-xl p-4 hover:shadow-lg transition border border-mint-400/20">
                <div className="rounded-lg bg-mint-700/20 p-2 mb-2 w-fit">
                  <Search className="w-5 h-5 text-mint-200" />
                </div>
                <span className="text-sm font-semibold text-white mb-1 block">AI-Powered Matching</span>
                <span className="text-xs text-mint-200">Find relevant EU opportunities</span>
              </div>
              <div className="glassmorphic rounded-xl p-4 hover:shadow-lg transition border border-lavender-400/20">
                <div className="rounded-lg bg-lavender-700/20 p-2 mb-2 w-fit">
                  <Users className="w-5 h-5 text-lavender-200" />
                </div>
                <span className="text-sm font-semibold text-white mb-1 block">Partner Network</span>
                <span className="text-xs text-lavender-200">Connect with institutions</span>
              </div>
              <div className="glassmorphic rounded-xl p-4 hover:shadow-lg transition border border-mint-400/20">
                <div className="rounded-lg bg-mint-700/20 p-2 mb-2 w-fit">
                  <BarChart3 className="w-5 h-5 text-mint-200" />
                </div>
                <span className="text-sm font-semibold text-white mb-1 block">Success Analytics</span>
                <span className="text-xs text-mint-200">Track performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Moved floating elements outside the mockup interface */}
      <div className="absolute -top-8 -right-8 glassmorphic rounded-xl p-3 border border-lavender-400/20 animate-fade-in">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-yellow-300" />
          <span className="text-xs text-white">New Opportunity</span>
        </div>
      </div>

      <div className="absolute -bottom-8 -left-8 glassmorphic rounded-xl p-3 border border-lavender-400/20 animate-fade-in">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-lavender-300" />
          <span className="text-xs text-white">€95.5B Available</span>
        </div>
      </div>
    </div>
  );
};
