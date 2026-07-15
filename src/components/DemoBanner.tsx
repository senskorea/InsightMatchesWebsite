import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlayCircle, X } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import VideoModal from "./VideoModal";

const STORAGE_KEY = "demo-banner-dismissed-v1";
const BANNER_HEIGHT = 44; // px

const strings = {
  en: {
    copy: "See InsightMatches in action — 10-min platform walkthrough",
    watch: "Watch demo",
    request: "Request demo",
    dismiss: "Dismiss",
  },
  ko: {
    copy: "InsightMatches를 직접 확인하세요 — 10분 플랫폼 워크스루",
    watch: "데모 보기",
    request: "데모 요청",
    dismiss: "닫기",
  },
  fr: {
    copy: "Découvrez InsightMatches en action — visite guidée de 10 min",
    watch: "Voir la démo",
    request: "Demander une démo",
    dismiss: "Fermer",
  },
} as const;

const DemoBanner = () => {
  const { currentLanguage } = useTranslation();
  const t = strings[currentLanguage as keyof typeof strings] ?? strings.en;

  const [visible, setVisible] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY) === "1";
    setVisible(!dismissed);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (visible) {
      root.style.setProperty("--demo-banner-h", `${BANNER_HEIGHT}px`);
    } else {
      root.style.setProperty("--demo-banner-h", "0px");
    }
    return () => {
      root.style.setProperty("--demo-banner-h", "0px");
    };
  }, [visible]);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div
          role="region"
          aria-label="Platform demo"
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-mint-600 to-emerald-600 text-white shadow-sm"
          style={{ height: BANNER_HEIGHT }}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 h-full flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <PlayCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-medium truncate">{t.copy}</p>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={() => setVideoOpen(true)}
                className="text-xs sm:text-sm font-semibold underline underline-offset-2 hover:no-underline whitespace-nowrap"
              >
                {t.watch}
              </button>
              <Link
                to="/request-demo"
                className="hidden sm:inline-block text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-white text-emerald-700 hover:bg-emerald-50 transition-colors whitespace-nowrap"
              >
                {t.request}
              </Link>
              <button
                onClick={dismiss}
                aria-label={t.dismiss}
                className="ml-1 p-1 rounded hover:bg-white/15 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <VideoModal open={videoOpen} onOpenChange={setVideoOpen} />
    </>
  );
};

export default DemoBanner;
