import { useState, useEffect } from "react";
import {
  Linkedin,
  Mail,
  Globe,
  Calendar,
  Download,
  MapPin,
  ChevronDown,
  Sparkles,
  QrCode,
  X,
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

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.46-8.406" />
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

        {/* Action Buttons Section — Chunky 2-Column Kids-Phone Style */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-3.5">
          {/* Row 1: Book a Meeting & Grab a Beer */}
          <a
            href="https://calendar.app.google/ukQe5T1754RKVPedA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-4 rounded-3xl bg-gradient-to-br from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white shadow-md shadow-sky-500/20 active:scale-[0.95] transition-all min-h-[124px] border border-sky-400/30 group"
          >
            <div className="flex items-center justify-between w-full">
              <span className="w-11 h-11 rounded-2xl bg-white/20 shadow-inner flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Calendar className="w-5 h-5 text-white" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-wider text-sky-950 bg-sky-200/90 px-2 py-0.5 rounded-full shadow-sm">
                Priority
              </span>
            </div>
            <div className="mt-3 text-left">
              <span className="block font-black text-sm sm:text-base leading-tight text-white">
                Book a Meeting
              </span>
              <span className="block text-xs font-medium text-sky-100/90 mt-0.5 truncate">
                1:1 Calendar
              </span>
            </div>
          </a>

          <a
            href="https://calendar.app.google/z5N8jZUAk5e6YCM37"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col justify-between p-4 rounded-3xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-600 text-white shadow-md shadow-amber-500/25 active:scale-[0.95] transition-all min-h-[124px] overflow-hidden border border-amber-300/40 group"
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse pointer-events-none" />

            <div className="flex items-center justify-between w-full relative z-10">
              <span className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-white/25 shadow-inner">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-2xl bg-amber-300 opacity-60 pointer-events-none" />
                <span className="relative text-2xl animate-bounce select-none" style={{ animationDuration: '2s' }}>
                  🍺
                </span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-950 bg-amber-200/95 px-2 py-0.5 rounded-full shadow-sm animate-pulse">
                Friday
              </span>
            </div>

            <div className="mt-3 text-left relative z-10">
              <span className="block font-black text-sm sm:text-base leading-tight text-white drop-shadow-sm">
                Let's grab a beer
              </span>
              <span className="block text-xs font-medium text-amber-100/95 mt-0.5 truncate">
                Broughton Club
              </span>
            </div>
          </a>

          {/* Row 2: LinkedIn & WhatsApp */}
          <a
            href="https://linkedin.com/in/paulconversy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-4 rounded-3xl bg-white hover:bg-neutral-50/90 border-2 border-neutral-200/80 shadow-sm active:scale-[0.95] transition-all min-h-[124px] group"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#0A66C2]/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Linkedin className="w-5 h-5 text-[#0A66C2]" />
            </div>
            <div className="mt-3 text-left">
              <span className="block font-bold text-sm text-neutral-900 leading-tight">
                LinkedIn
              </span>
              <span className="block text-xs text-neutral-500 mt-0.5 truncate">
                Connect
              </span>
            </div>
          </a>

          <a
            href="https://wa.me/821081137787"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-4 rounded-3xl bg-white hover:bg-neutral-50/90 border-2 border-neutral-200/80 shadow-sm active:scale-[0.95] transition-all min-h-[124px] group"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
            </div>
            <div className="mt-3 text-left">
              <span className="block font-bold text-sm text-neutral-900 leading-tight">
                WhatsApp
              </span>
              <span className="block text-xs text-neutral-500 mt-0.5 truncate">
                Chat Direct
              </span>
            </div>
          </a>

          {/* Row 3: Remember & Email */}
          <a
            href="https://link.rmbr.in/3pohsay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-4 rounded-3xl bg-white hover:bg-neutral-50/90 border-2 border-neutral-200/80 shadow-sm active:scale-[0.95] transition-all min-h-[124px] group"
          >
            <div className="w-11 h-11 rounded-2xl bg-neutral-900/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <RememberIcon className="w-6 h-6 text-neutral-900" />
            </div>
            <div className="mt-3 text-left">
              <span className="block font-bold text-sm text-neutral-900 leading-tight">
                Remember
              </span>
              <span className="block text-xs text-neutral-500 mt-0.5 truncate">
                리멤버 명함
              </span>
            </div>
          </a>

          <a
            href="mailto:info@insightmatches.com"
            className="flex flex-col justify-between p-4 rounded-3xl bg-white hover:bg-neutral-50/90 border-2 border-neutral-200/80 shadow-sm active:scale-[0.95] transition-all min-h-[124px] group"
          >
            <div className="w-11 h-11 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5 text-amber-600" />
            </div>
            <div className="mt-3 text-left">
              <span className="block font-bold text-sm text-neutral-900 leading-tight">
                Email
              </span>
              <span className="block text-xs text-neutral-500 mt-0.5 truncate">
                info@insightmatches
              </span>
            </div>
          </a>

          {/* Row 4: InsightMatches & SENS AI */}
          <a
            href="https://insightmatches.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-4 rounded-3xl bg-white hover:bg-neutral-50/90 border-2 border-neutral-200/80 shadow-sm active:scale-[0.95] transition-all min-h-[124px] group"
          >
            <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Globe className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="mt-3 text-left">
              <span className="block font-bold text-sm text-neutral-900 leading-tight">
                InsightMatches
              </span>
              <span className="block text-xs text-neutral-500 mt-0.5 truncate">
                EU Grant Platform
              </span>
            </div>
          </a>

          <a
            href="https://insightmatches.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-4 rounded-3xl bg-white hover:bg-neutral-50/90 border-2 border-neutral-200/80 shadow-sm active:scale-[0.95] transition-all min-h-[124px] group"
          >
            <div className="w-11 h-11 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <div className="mt-3 text-left">
              <span className="block font-bold text-sm text-neutral-900 leading-tight">
                SENS AI
              </span>
              <span className="block text-xs text-neutral-500 mt-0.5 truncate">
                Event Engine
              </span>
            </div>
          </a>

          {/* Row 5: Save Contact & Show QR Code */}
          <button
            type="button"
            onClick={saveContact}
            className="flex flex-col justify-between p-4 rounded-3xl bg-neutral-900 hover:bg-black text-white shadow-sm active:scale-[0.95] transition-all min-h-[124px] text-left group border-2 border-neutral-900"
          >
            <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div className="mt-3 text-left">
              <span className="block font-bold text-sm text-white leading-tight">
                Save Contact
              </span>
              <span className="block text-xs text-neutral-400 mt-0.5 truncate">
                .vcf to Phone
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setShowQR(true)}
            className="flex flex-col justify-between p-4 rounded-3xl bg-white hover:bg-neutral-50/90 border-2 border-neutral-200/80 shadow-sm active:scale-[0.95] transition-all min-h-[124px] text-left group"
          >
            <div className="w-11 h-11 rounded-2xl bg-neutral-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <QrCode className="w-5 h-5 text-neutral-800 group-hover:text-black transition-colors" />
            </div>
            <div className="mt-3 text-left">
              <span className="block font-bold text-sm text-neutral-900 leading-tight">
                Show QR Code
              </span>
              <span className="block text-xs text-neutral-500 mt-0.5 truncate">
                Scan to Share
              </span>
            </div>
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
