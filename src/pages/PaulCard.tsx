import { useState, useEffect } from "react";
import {
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Globe,
  Calendar,
  Download,
  MapPin,
  ChevronDown,
  ExternalLink,
  Sparkles,
  QrCode,
  X,
  Beer,
} from "lucide-react";
import QRCode from "qrcode";
import paulPhoto from "@/assets/paul-photo.jpg";
import SEO from "@/components/SEO";

const VCARD = `BEGIN:VCARD
VERSION:3.0
N:Conversy;Paul;;;
FN:Paul Conversy
ORG:InsightMatches
TITLE:Founder
TEL;TYPE=CELL,VOICE:+821081137787
EMAIL;TYPE=INTERNET:info@insightmatches.com
URL:https://insightmatches.com
ADR;TYPE=WORK:;;;Paris / Seoul / Busan;;;
NOTE:Founder of InsightMatches (grant funding platform) and SENS AI (AI matching during events).
END:VCARD`;

const RememberIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <rect width="24" height="24" rx="5" fill="#1C1C1E" />
    <text x="12" y="17" fontSize="15" fontWeight="bold" fontFamily="Georgia, serif" textAnchor="middle" fill="#FFFFFF">
      R
    </text>
  </svg>
);

const PaulCard = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>("");

  useEffect(() => {
    QRCode.toDataURL("https://insightmatches.com/paul", {
      width: 320,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    })
      .then(setQrDataUrl)
      .catch(console.error);
  }, []);

  const saveContact = () => {
    const blob = new Blob([VCARD], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Paul-Conversy.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-inter flex flex-col justify-between p-4 sm:p-6">
      <SEO
        title="Paul Conversy — Founder, InsightMatches & SENS AI"
        description="Founder of InsightMatches, the grant funding platform and SENS AI for AI matching during events."
      />

      <main className="w-full max-w-md mx-auto pt-4 pb-8 flex-1 flex flex-col">
        {/* Profile Header */}
        <div className="text-center">
          <div className="relative inline-block">
            <img
              src={paulPhoto}
              alt="Paul Conversy"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover object-top mx-auto shadow-sm border-2 border-white ring-1 ring-neutral-200"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mt-3.5">
            Paul Conversy
          </h1>
          <p className="mt-1.5 text-sm sm:text-base font-medium text-neutral-600 leading-snug px-2">
            Founder of InsightMatches, the grant funding platform and SENS AI for AI matching during events.
          </p>
          <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
            <MapPin className="w-3.5 h-3.5" />
            <span>Paris · Seoul · Busan</span>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="mt-6 flex flex-col gap-2.5">
          {/* Top Priority Action: Book a Meeting */}
          <a
            href="https://calendar.app.google/ukQe5T1754RKVPedA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-600 active:scale-[0.99] text-white shadow-sm transition-all group"
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-white" />
              </span>
              <span className="text-left min-w-0">
                <span className="block text-[11px] uppercase tracking-wider text-sky-100 font-bold leading-tight">
                  Priority
                </span>
                <span className="block font-bold text-sm sm:text-base leading-snug truncate">
                  Book a Meeting
                </span>
              </span>
            </span>
            <ExternalLink className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </a>

          {/* Casual Action: Let's grab a beer */}
          <a
            href="https://calendar.app.google/z5N8jZUAk5e6YCM37"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 active:scale-[0.99] text-white shadow-sm transition-all group"
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Beer className="w-5 h-5 text-white" />
              </span>
              <span className="text-left min-w-0">
                <span className="block text-[11px] uppercase tracking-wider text-amber-100 font-bold leading-tight">
                  Friday · Broughton Club
                </span>
                <span className="block font-bold text-sm sm:text-base leading-snug truncate">
                  Let's grab a beer
                </span>
              </span>
            </span>
            <ExternalLink className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </a>

          {/* 1. LinkedIn */}
          <a
            href="https://linkedin.com/in/paulconversy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white hover:bg-neutral-100/80 border border-neutral-200/90 active:scale-[0.99] shadow-sm transition-all group"
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className="w-10 h-10 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center shrink-0">
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
              </span>
              <span className="text-left min-w-0">
                <span className="block font-bold text-sm text-neutral-900 leading-snug">
                  LinkedIn
                </span>
                <span className="block text-xs text-neutral-500 truncate">
                  linkedin.com/in/paulconversy
                </span>
              </span>
            </span>
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors shrink-0" />
          </a>

          {/* 2. Instagram */}
          <a
            href="https://instagram.com/paul_converce"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white hover:bg-neutral-100/80 border border-neutral-200/90 active:scale-[0.99] shadow-sm transition-all group"
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center shrink-0">
                <Instagram className="w-5 h-5 text-pink-600" />
              </span>
              <span className="text-left min-w-0">
                <span className="block font-bold text-sm text-neutral-900 leading-snug">
                  Instagram
                </span>
                <span className="block text-xs text-neutral-500 truncate">
                  instagram.com/paul_converce
                </span>
              </span>
            </span>
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors shrink-0" />
          </a>

          {/* 3. Remember (리멤버) */}
          <a
            href="https://link.rmbr.in/3pohsay"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white hover:bg-neutral-100/80 border border-neutral-200/90 active:scale-[0.99] shadow-sm transition-all group"
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className="w-10 h-10 rounded-xl bg-neutral-900/10 flex items-center justify-center shrink-0">
                <RememberIcon className="w-6 h-6" />
              </span>
              <span className="text-left min-w-0">
                <span className="block font-bold text-sm text-neutral-900 leading-snug">
                  Remember (리멤버)
                </span>
                <span className="block text-xs text-neutral-500 truncate">
                  Digital Business Card Exchange
                </span>
              </span>
            </span>
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors shrink-0" />
          </a>

          {/* 4. Email */}
          <a
            href="mailto:info@insightmatches.com"
            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white hover:bg-neutral-100/80 border border-neutral-200/90 active:scale-[0.99] shadow-sm transition-all group"
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-amber-600" />
              </span>
              <span className="text-left min-w-0">
                <span className="block font-bold text-sm text-neutral-900 leading-snug">
                  Email
                </span>
                <span className="block text-xs text-neutral-500 truncate">
                  info@insightmatches.com
                </span>
              </span>
            </span>
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors shrink-0" />
          </a>

          {/* 5. Phone */}
          <a
            href="tel:+821081137787"
            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white hover:bg-neutral-100/80 border border-neutral-200/90 active:scale-[0.99] shadow-sm transition-all group"
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-emerald-600" />
              </span>
              <span className="text-left min-w-0">
                <span className="block font-bold text-sm text-neutral-900 leading-snug">
                  Phone
                </span>
                <span className="block text-xs text-neutral-500 truncate">
                  +82 10 8113 7787
                </span>
              </span>
            </span>
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors shrink-0" />
          </a>

          {/* 6. Websites: InsightMatches */}
          <a
            href="https://insightmatches.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white hover:bg-neutral-100/80 border border-neutral-200/90 active:scale-[0.99] shadow-sm transition-all group"
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-indigo-600" />
              </span>
              <span className="text-left min-w-0">
                <span className="block font-bold text-sm text-neutral-900 leading-snug">
                  InsightMatches
                </span>
                <span className="block text-xs text-neutral-500 truncate">
                  insightmatches.com · EU Grant Platform
                </span>
              </span>
            </span>
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors shrink-0" />
          </a>

          {/* 6b. Websites: SENS AI */}
          <a
            href="https://insightmatches.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white hover:bg-neutral-100/80 border border-neutral-200/90 active:scale-[0.99] shadow-sm transition-all group"
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </span>
              <span className="text-left min-w-0">
                <span className="block font-bold text-sm text-neutral-900 leading-snug">
                  SENS AI
                </span>
                <span className="block text-xs text-neutral-500 truncate">
                  AI Matching Engine for Events
                </span>
              </span>
            </span>
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors shrink-0" />
          </a>

          {/* 7. Save Contact to Phone */}
          <button
            type="button"
            onClick={saveContact}
            className="w-full mt-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-neutral-900 hover:bg-black active:scale-[0.99] text-white font-semibold text-sm shadow-sm transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Save Contact to Phone (.vcf)</span>
          </button>

          {/* 8. Show QR Code (Last Action Option) */}
          <button
            type="button"
            onClick={() => setShowQR(true)}
            className="w-full mt-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-white hover:bg-neutral-100/80 border border-neutral-200/90 active:scale-[0.99] text-neutral-900 font-semibold text-sm shadow-sm transition-all group"
          >
            <QrCode className="w-4 h-4 text-neutral-700 group-hover:text-black transition-colors" />
            <span>Show QR Code</span>
          </button>
        </div>

        {/* Information Last Section */}
        <div className="mt-8 pt-5 border-t border-neutral-200">
          <button
            type="button"
            onClick={() => setShowInfo((prev) => !prev)}
            className="w-full flex items-center justify-between py-2 text-xs uppercase tracking-wider font-bold text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <span>About InsightMatches & SENS</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                showInfo ? "rotate-180" : ""
              }`}
            />
          </button>

          {showInfo && (
            <div className="mt-3 text-xs leading-relaxed text-neutral-600 bg-white border border-neutral-200 p-4 rounded-2xl space-y-2.5 shadow-sm">
              <p>
                I help deep tech companies, researchers, and innovators navigate and win Horizon Europe and international funding by combining AI intelligence with expert architecture.
              </p>
              <p>
                Direct inquiry:{" "}
                <a
                  href="mailto:info@insightmatches.com"
                  className="font-semibold text-sky-600 hover:underline"
                >
                  info@insightmatches.com
                </a>
              </p>
              <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 text-neutral-400 text-[11px]">
                <MapPin className="w-3 h-3" />
                <span>InsightMatches Corp. · Paris · Seoul · Busan</span>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* QR Code Modal */}
      {showQR && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setShowQR(false)}
        >
          <div
            className="relative w-full max-w-xs sm:max-w-sm bg-white rounded-3xl p-6 text-center shadow-2xl border border-neutral-100 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Close QR Code"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={paulPhoto}
              alt="Paul Conversy"
              className="w-14 h-14 rounded-full object-cover object-top border-2 border-white shadow-sm ring-1 ring-neutral-200 mt-1"
            />
            <h3 className="text-lg font-bold text-neutral-900 mt-2">
              Paul Conversy
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              Scan to open card on insightmatches.com
            </p>

            <div className="mt-4 p-3 bg-white rounded-2xl border border-neutral-200/80 shadow-inner">
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt="QR Code for insightmatches.com/paul"
                  className="w-56 h-56 rounded-lg"
                />
              ) : (
                <div className="w-56 h-56 flex items-center justify-center text-xs text-neutral-400">
                  Generating QR Code...
                </div>
              )}
            </div>

            <p className="mt-3 text-xs font-mono text-neutral-500 font-medium">
              insightmatches.com/paul
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center py-4 text-[11px] text-neutral-400 tracking-wide">
        © {new Date().getFullYear()} Paul Conversy · InsightMatches
      </footer>
    </div>
  );
};

export default PaulCard;
