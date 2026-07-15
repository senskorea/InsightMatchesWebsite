import { useState } from "react";
import { ChevronDown, Globe, Phone, Mail, Linkedin, Download, Calendar, MapPin } from "lucide-react";
import paulPhoto from "@/assets/paul-conversy-illustration.jpg";
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
NOTE:Founder at InsightMatches. AI-Powered EU Grant Proposals, Start to Submission.
END:VCARD`;

const contacts = [
  { id: "web", icon: Globe, label: "Website", value: "insightmatches.com", href: "https://insightmatches.com" },
  { id: "phone", icon: Phone, label: "Phone", value: "+82 10 8113 7787", href: "tel:+821081137787" },
  { id: "email", icon: Mail, label: "Email", value: "info@insightmatches.com", href: "mailto:info@insightmatches.com" },
  { id: "linkedin", icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/paulconversy", href: "https://linkedin.com/in/paulconversy" },
];

const PaulCard = () => {
  const [open, setOpen] = useState<string | null>(null);

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
    <div className="min-h-screen bg-white text-black font-inter">
      <SEO
        title="Paul Conversy — Founder, InsightMatches"
        description="Founder at InsightMatches. AI-Powered EU Grant Proposals, Start to Submission."
      />
      <div className="min-h-screen md:flex">
        {/* Photo */}
        <div className="relative w-full h-[55vh] md:h-screen md:w-1/2 md:sticky md:top-0 overflow-hidden">
          <img
            src={paulPhoto}
            alt="Paul Conversy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative md:w-1/2 md:min-h-screen flex items-start md:items-center">
          <div className="w-full -mt-16 md:mt-0 px-6 md:px-14 pb-16">
            <div className="bg-white md:bg-transparent md:p-0 p-8 rounded-t-3xl md:rounded-none relative">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Paul Conversy
              </h1>
              <p className="mt-4 text-base md:text-lg font-medium text-black">
                Founder at InsightMatches. AI-Powered EU Grant Proposals, Start to Submission.
              </p>
              <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed">
                I help companies navigate and win Horizon Europe funding by combining AI intelligence with expert architecture.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
                <MapPin className="w-4 h-4" />
                <span>Paris · Seoul · Busan</span>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={saveContact}
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-4 text-sm font-semibold tracking-tight hover:bg-[#0ea5e9] transition-colors duration-200 rounded-none"
                >
                  <Download className="w-4 h-4" />
                  Save Contact
                </button>
                <a
                  href="https://calendar.app.google/ukQe5T1754RKVPedA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-black text-black px-6 py-4 text-sm font-semibold tracking-tight hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition-colors duration-200"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Meeting
                </a>
              </div>

              {/* Accordion contacts */}
              <div className="mt-10 border-t border-black/10">
                {contacts.map((c) => {
                  const Icon = c.icon;
                  const isOpen = open === c.id;
                  return (
                    <div key={c.id} className="border-b border-black/10">
                      <button
                        onClick={() => setOpen(isOpen ? null : c.id)}
                        className="w-full flex items-center justify-between py-5 group"
                      >
                        <span className="flex items-center gap-4">
                          <Icon className="w-5 h-5 group-hover:text-[#0ea5e9] transition-colors" />
                          <span className="text-sm font-semibold tracking-tight uppercase">{c.label}</span>
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#0ea5e9]" : ""}`}
                        />
                      </button>
                      <div
                        className="overflow-hidden transition-all duration-300 ease-out"
                        style={{ maxHeight: isOpen ? 80 : 0 }}
                      >
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="block pb-5 pl-9 text-sm text-neutral-700 hover:text-[#0ea5e9] transition-colors break-all"
                        >
                          {c.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-10 text-xs text-neutral-400 tracking-wide">
                © {new Date().getFullYear()} Paul Conversy · InsightMatches
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaulCard;
