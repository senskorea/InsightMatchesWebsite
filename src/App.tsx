import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import DemoBanner from "./components/DemoBanner";

import Platform from "./pages/Platform";
import PaulCard from "./pages/PaulCard";
import LifeSciences from "./pages/LifeSciences";
import Referral from "./pages/Referral";
import Dissemination from "./pages/Dissemination";
import Resources from "./pages/Resources";
import ResourcesInsights from "./pages/ResourcesInsights";
import ResourcesNews from "./pages/ResourcesNews";
import About from "./pages/About";
import GenderEqualityPlan from "./pages/GenderEqualityPlan";
import NetworkBusan from "./pages/NetworkBusan";
import Education from "./pages/Education";
import KBA from "./pages/KBA";
import NotFound from "./pages/NotFound";
import EUPIC from "./pages/EUPIC";
import RnDDay from "./pages/RnDDay";
import HorizonEurope from "./pages/HorizonEurope";
import GuideHorizonEuropeKorea from "./pages/GuideHorizonEuropeKorea";
import AIToolsEUKoreaConsortium from "./pages/AIToolsEUKoreaConsortium";
import EUKoreaDigitalPartnership from "./pages/EUKoreaDigitalPartnership";
import NextRise from "./pages/NextRise";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import KoIndex from "./pages/ko/KoIndex";
import KoHorizonEurope from "./pages/ko/KoHorizonEurope";
import KoGuideHorizonEurope from "./pages/ko/KoGuideHorizonEurope";
import KoAiToolsConsortium from "./pages/ko/KoAiToolsConsortium";
import KoDigitalPartnership from "./pages/ko/KoDigitalPartnership";
import KoAbout from "./pages/ko/KoAbout";
import KoPlatform from "./pages/ko/KoPlatform";
import FrIndex from "./pages/fr/FrIndex";
import FrHorizonEurope from "./pages/fr/FrHorizonEurope";
import FrGuideHorizonEurope from "./pages/fr/FrGuideHorizonEurope";
import FrAiToolsConsortium from "./pages/fr/FrAiToolsConsortium";
import FrDigitalPartnership from "./pages/fr/FrDigitalPartnership";
import FrAbout from "./pages/fr/FrAbout";
import FrPlatform from "./pages/fr/FrPlatform";
import FrDissemination from "./pages/fr/FrDissemination";
import FrResources from "./pages/fr/FrResources";
import FrResourcesInsights from "./pages/fr/FrResourcesInsights";
import FrResourcesNews from "./pages/fr/FrResourcesNews";
import FrGenderEqualityPlan from "./pages/fr/FrGenderEqualityPlan";
import KoDissemination from "./pages/ko/KoDissemination";
import KoResources from "./pages/ko/KoResources";
import KoResourcesInsights from "./pages/ko/KoResourcesInsights";
import KoResourcesNews from "./pages/ko/KoResourcesNews";
import KoGenderEqualityPlan from "./pages/ko/KoGenderEqualityPlan";

const AppRedirect = () => {
  useEffect(() => {
    window.location.replace("https://insight-matches2026.vercel.app/");
  }, []);
  return null;
};

const SensRedirect = () => {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.replace("https://sensai-dh2z.vercel.app/");
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="max-w-xl text-center space-y-3">
        <h1 className="text-2xl font-semibold">Redirecting to SENS…</h1>
        <p className="text-muted-foreground">
          If you are not redirected automatically, open:
        </p>
        <a
          href="https://sensai-dh2z.vercel.app/"
          className="underline underline-offset-4"
          rel="noopener noreferrer"
        >
          https://sensai-dh2z.vercel.app/
        </a>
      </section>
    </main>
  );
};

const SensPitchRedirect = () => {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.replace("https://www.figma.com/deck/lqf9zW2m2jhytD6L8nqw9Q/SENS-Pitch-Deck?node-id=4324-8&t=EOJAymLssZt6jCEU-1");
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="max-w-xl text-center space-y-3">
        <h1 className="text-2xl font-semibold">Redirecting to SENS Pitch Deck…</h1>
        <p className="text-muted-foreground">
          If you are not redirected automatically, open:
        </p>
        <a
          href="https://www.figma.com/deck/lqf9zW2m2jhytD6L8nqw9Q/SENS-Pitch-Deck?node-id=4324-8&t=EOJAymLssZt6jCEU-1"
          className="underline underline-offset-4"
          rel="noopener noreferrer"
        >
          SENS Pitch Deck on Figma
        </a>
      </section>
    </main>
  );
};

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  return (
    <>
      <div>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/paul" element={<PaulCard />} />
            <Route path="/card" element={<PaulCard />} />
            <Route path="/lifesciences" element={<LifeSciences />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/dissemination" element={<Dissemination />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/insights" element={<ResourcesInsights />} />
            <Route path="/resources/news" element={<ResourcesNews />} />
            <Route path="/resources/horizon-europe" element={<HorizonEurope />} />
            <Route path="/resources/guide-horizon-europe-korea" element={<GuideHorizonEuropeKorea />} />
            <Route path="/resources/ai-tools-eu-korea-consortium" element={<AIToolsEUKoreaConsortium />} />
            <Route path="/resources/eu-korea-digital-partnership" element={<EUKoreaDigitalPartnership />} />
            <Route path="/ko" element={<Navigate to="/ko/" replace />} />
            <Route path="/ko/" element={<KoIndex />} />
            <Route path="/ko/horizon-europe" element={<KoHorizonEurope />} />
            <Route path="/ko/guide-horizon-europe" element={<KoGuideHorizonEurope />} />
            <Route path="/ko/ai-tools-consortium" element={<KoAiToolsConsortium />} />
            <Route path="/ko/eu-korea-digital-partnership" element={<KoDigitalPartnership />} />
            <Route path="/ko/about" element={<KoAbout />} />
            <Route path="/ko/platform" element={<KoPlatform />} />
            <Route path="/ko/dissemination" element={<KoDissemination />} />
            <Route path="/ko/resources" element={<KoResources />} />
            <Route path="/ko/resources/insights" element={<KoResourcesInsights />} />
            <Route path="/ko/resources/news" element={<KoResourcesNews />} />
            <Route path="/ko/about/gep" element={<KoGenderEqualityPlan />} />
            <Route path="/fr" element={<Navigate to="/fr/" replace />} />
            <Route path="/fr/" element={<FrIndex />} />
            <Route path="/fr/horizon-europe" element={<FrHorizonEurope />} />
            <Route path="/fr/guide-horizon-europe" element={<FrGuideHorizonEurope />} />
            <Route path="/fr/ai-tools-consortium" element={<FrAiToolsConsortium />} />
            <Route path="/fr/eu-korea-digital-partnership" element={<FrDigitalPartnership />} />
            <Route path="/fr/about" element={<FrAbout />} />
            <Route path="/fr/platform" element={<FrPlatform />} />
            <Route path="/fr/dissemination" element={<FrDissemination />} />
            <Route path="/fr/resources" element={<FrResources />} />
            <Route path="/fr/resources/insights" element={<FrResourcesInsights />} />
            <Route path="/fr/resources/news" element={<FrResourcesNews />} />
            <Route path="/fr/about/gep" element={<FrGenderEqualityPlan />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Navigate to="/about" replace />} />
            <Route path="/about/gep" element={<GenderEqualityPlan />} />
            <Route path="/network-busan" element={<NetworkBusan />} />
            <Route path="/cafelaunchpad" element={<Navigate to="/network-busan" replace />} />
            <Route path="/education" element={<Education />} />
            <Route path="/kba" element={<KBA />} />
            <Route path="/eu-pic" element={<EUPIC />} />
            <Route path="/rndday" element={<RnDDay />} />
            <Route path="/request-demo" element={<NextRise />} />
            <Route path="/nextrise" element={<NextRise />} />
            <Route path="/NEXTRISE" element={<Navigate to="/nextrise" replace />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/rnday" element={<Navigate to="/rndday" replace />} />
            <Route path="/app" element={<AppRedirect />} />
            <Route path="/ko/app" element={<AppRedirect />} />
            <Route path="/fr/app" element={<AppRedirect />} />
            <Route path="/launch" element={<AppRedirect />} />
            <Route path="/ko/launch" element={<AppRedirect />} />
            <Route path="/fr/launch" element={<AppRedirect />} />
            <Route path="/sens/*" element={<SensRedirect />} />
            <Route path="/senspitch" element={<SensPitchRedirect />} />

            {/* 301 Redirects for old URLs */}
            <Route path="/horizon-europe-partner" element={<Navigate to="/dissemination" replace />} />
            <Route path="/horizon-europe" element={<Navigate to="/resources/horizon-europe" replace />} />
            <Route path="/gender-equality-plan" element={<Navigate to="/about/gep" replace />} />
            {/* Removed routes (Supabase-backed): /notice-board, /auth, /html-renderer, /shared/:filename */}

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DemoBanner />
        <AppContent />
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
