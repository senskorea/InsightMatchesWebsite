import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, Mic2, Users, Trophy, GlassWater, ExternalLink, Rocket, Globe, Zap, FlaskConical, FileDown, Lightbulb, Mail, Award, QrCode } from 'lucide-react';
import registerQR from '@/assets/rndday-register-qr.png';

/* ─── Animated Section wrapper ─── */
const AnimatedSection = ({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};

const subtitles = [
  'Deep-Tech Innovation Summit',
  'The EU–Korea Strategic R&I Corridor',
  'A Global Fellowship for Frontier Research',
];



const agenda = [
  { time: '10:00', session: "Pitchers' Selection Round", desc: 'Welcome & kickoff, followed by quickfire 5-minute preliminary pitches from registered teams. Our expert jury evaluates the tech and research context to select afternoon finalists.' },
  { time: '13:00', session: 'Finalist Announcement', desc: 'Selected finalists are notified via email, website, and lobby posting. Successful teams get a two-hour window to expand and refine their pitch decks for the main stage.' },
  { time: '15:00', session: 'MAIN EVENT: Deep-Tech Innovation Summit', desc: 'Expert speaker series with international leaders in R&D funding, research mobility, and AI infrastructure. Top-tier finalists deliver expanded presentations to the full jury and audience.' },
  { time: '17:00', session: 'Award Ceremony', desc: 'Official announcement of winners and presentation of achievement certificates.' },
  { time: '19:00', session: 'Networking Evening at Shilla Stay', desc: 'A facilitated networking session for researchers, local business owners, and global collaborators. Pre-registered guests who checked in during the day will receive discounted drink coupons.' },
];

const speakers = [
  { name: 'Dr. Lewis Nkenyereye', role: 'WARESA', topic: 'Global R&D Funding Pathways', bio: 'Exploring how global networks empower and fund PhD researchers.' },
  { name: 'Dr. Tomasz Wierzbowski', role: 'EURAXESS', topic: 'Building Cross-Border Research Bridges', bio: 'PhD networks and mobility programs for KR-EU collaboration.' },
  { name: 'Carl Dimick', role: 'Metroo.dev', topic: 'AI-Native Dev Infrastructure', bio: 'Building compute infrastructure for high-demand AI workloads.' },
  { name: 'Andrew Millard', role: 'ECCK', topic: 'EU–Korea FDI & Strategic Alliances', bio: "Navigating Korea's regulatory landscape and Busan's free economic zone." },
  { name: 'Paul Conversy', role: 'InsightMatches', topic: 'AI-Solutions for EU Funding', bio: 'Using AI to match innovators with grants and accelerate research proposals.' },
];

const judgingCriteria = [
  { num: '01', label: 'Slide Clarity and Design', pts: 15 },
  { num: '02', label: 'Research Context and Goal', pts: 25 },
  { num: '03', label: 'Methods and Key Findings', pts: 25 },
  { num: '04', label: 'Impact and Next Steps', pts: 20 },
  { num: '05', label: 'Delivery and Timing', pts: 15 },
];

const prizes = [
  { emoji: '🥇', place: '1st Place', label: 'Winner', amount: '200,000', currency: 'Korean Won ₩' },
  { emoji: '🥈', place: '2nd Place', label: 'Runner-up', amount: '150,000', currency: 'Korean Won ₩' },
  { emoji: '🥉', place: '3rd Place', label: 'Second runner-up', amount: '100,000', currency: 'Korean Won ₩' },
];

const stickyNavItems = [
  { id: 'program', label: 'Program' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'speakers', label: 'Speakers' },
  { id: 'venue', label: 'Venue' },
];

/* ─── White theme style tokens ─── */
const S = {
  page: 'min-h-screen text-charcoal-900 font-outfit',
  nav: 'fixed top-0 w-full z-50 backdrop-blur-xl border-b border-charcoal-200/40',
  navInner: 'max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between',
  sectionLabel: 'font-spacemono text-xs uppercase tracking-[3px] text-mint-600 mb-6 flex items-center gap-3 before:content-[""] before:block before:w-10 before:h-px before:bg-mint-500',
  card: 'bg-white border border-charcoal-200/60 rounded-3xl p-8 transition-all duration-400 hover:-translate-y-1 hover:border-mint-400/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06),0_0_40px_rgba(82,171,133,0.08)]',
  cardSm: 'bg-white border border-charcoal-200/60 rounded-2xl p-6 transition-all duration-400 hover:-translate-y-1 hover:border-mint-400/50 hover:shadow-lg',
  accent: 'text-mint-600',
  muted: 'text-charcoal-400',
  btnPrimary: 'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-spacemono text-xs uppercase tracking-wider border border-mint-600 text-mint-600 hover:bg-mint-600 hover:text-white hover:shadow-[0_0_20px_rgba(82,171,133,0.3)] transition-all duration-300',
  btnSolid: 'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-spacemono text-xs uppercase tracking-wider bg-charcoal-900 text-white font-bold hover:bg-charcoal-800 hover:shadow-lg transition-all duration-300',
} as const;

/* ─── Countdown Hook ─── */
const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const interval = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

/* ─── Sticky Nav with active section tracking ─── */
const StickyNav = () => {
  const [activeSection, setActiveSection] = useState('flyers');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    stickyNavItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="sticky top-16 z-40 backdrop-blur-xl border-b border-charcoal-200/40" style={{ backgroundColor: 'rgba(250,251,252,0.85)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex gap-1 overflow-x-auto py-2.5 scrollbar-hide">
          {stickyNavItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-spacemono font-medium transition-all duration-300 ${
                activeSection === id
                  ? 'bg-mint-600 text-white shadow-sm'
                  : 'text-charcoal-400 hover:text-charcoal-700 hover:bg-charcoal-100/60'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const RnDDay = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const targetDate = new Date('2026-03-31T09:00:00+09:00');
  const countdown = useCountdown(targetDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
        setFade(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = "R&D Day 2026 — Busan's Deep-Tech Innovation Summit";
  }, []);

  return (
    <div
      className={S.page}
      style={{
        backgroundColor: '#fafbfc',
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(82,171,133,0.06) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(128,128,240,0.04) 0%, transparent 50%)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* ─── TOP BANNER ─── */}
      <a
        href="https://forms.gle/fNoLJc9wAqtYjCrJA"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-0 left-0 right-0 z-[60] bg-charcoal-900 text-white text-center py-2.5 px-4 text-sm font-medium hover:bg-charcoal-800 transition-colors cursor-pointer flex items-center justify-center gap-2"
      >
        <Rocket className="w-4 h-4 text-mint-400" />
        <span>🎟️ Registration is open — <span className="underline underline-offset-2">Secure your spot for R&D Day '26</span></span>
        <ArrowRight className="w-4 h-4 text-mint-400" />
      </a>

      {/* ─── NAV ─── */}
      <nav className={S.nav} style={{ backgroundColor: 'rgba(250,251,252,0.85)', top: '40px' }}>
        <div className={S.navInner}>
          <Link to="/" className="font-spacemono font-bold text-charcoal-900 border-l-[3px] border-mint-500 pl-3 relative">
            R&D DAY '26
          </Link>
          <a
            href="https://forms.gle/fNoLJc9wAqtYjCrJA"
            target="_blank"
            rel="noopener noreferrer"
            className={S.btnPrimary + ' !py-2 !px-5 !text-[0.7rem]'}
          >
            Register Now
          </a>
        </div>
      </nav>

      {/* ─── STICKY SECTION NAV ─── */}
      <div className="pt-[104px]">
        <div className="sticky top-[104px] z-40 backdrop-blur-xl border-b border-charcoal-200/40" style={{ backgroundColor: 'rgba(250,251,252,0.85)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex gap-1 overflow-x-auto py-2.5 scrollbar-hide">
              {stickyNavItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-spacemono font-medium transition-all duration-300 text-charcoal-400 hover:text-charcoal-700 hover:bg-charcoal-100/60`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── HERO ─── */}
      <motion.section
        className="relative pt-12 pb-10 lg:pt-24 lg:pb-16 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-mint-300 text-mint-700 bg-mint-50">
            <Calendar className="w-4 h-4" />
            March 31, 2026
          </div>

          <div className="flex justify-center mb-8">
            <h1 className="font-spacemono font-bold text-left border-l-[10px] border-mint-500 pl-8 text-charcoal-900" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 1.1 }}>
              R&D<br />DAY '26
            </h1>
          </div>

          <div className="h-8 mb-6">
            <span
              className={`font-outfit text-lg sm:text-xl font-light transition-all duration-400 inline-block text-mint-600 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            >
              {subtitles[subtitleIndex]}
            </span>
          </div>

          {/* ─── COUNTDOWN ─── */}
          <div className="flex justify-center gap-4 sm:gap-8 mt-8">
            {[
              { value: countdown.days, label: 'Days' },
              { value: countdown.hours, label: 'Hours' },
              { value: countdown.minutes, label: 'Min' },
              { value: countdown.seconds, label: 'Sec' },
            ].map((unit) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-3xl border border-charcoal-200/60 bg-white flex items-center justify-center shadow-md">
                  <span className="font-spacemono text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[0.7rem] sm:text-xs font-spacemono text-charcoal-400 mt-2.5 uppercase tracking-wider">{unit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── QR CODE REGISTRATION SECTION ─── */}
      <AnimatedSection className="pb-20 lg:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className={`${S.card} text-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-mint-50/80 via-transparent to-charcoal-50/40 pointer-events-none" />
            <div className="relative z-10">
              <p className={`text-lg sm:text-xl max-w-2xl mx-auto mb-2 leading-relaxed font-light ${S.muted}`}>
                Connecting cutting-edge researchers and early-stage founders with smart capital, industry leaders, and EU institutions.
              </p>

              <div className={`flex flex-wrap justify-center gap-6 text-sm mb-8 ${S.muted}`}>
                <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> 10:00 – Late</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4" /> BCCEI, Centum City, Busan</span>
              </div>

              <div className="flex flex-col items-center gap-6">
                <a href="https://forms.gle/fNoLJc9wAqtYjCrJA" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="bg-white p-4 rounded-2xl shadow-lg border border-charcoal-200/60 inline-block hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src={registerQR} alt="Scan to register for R&D Day 2026" className="w-48 h-48 sm:w-56 sm:h-56" />
                  </div>
                </a>
                <div className="flex items-center gap-2 text-mint-700 font-spacemono text-sm font-bold uppercase tracking-wider">
                  <QrCode className="w-5 h-5" />
                  Scan to Register
                </div>
                <p className={`text-sm ${S.muted}`}>or click the QR code to open the registration form</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a href="https://forms.gle/fNoLJc9wAqtYjCrJA" target="_blank" rel="noopener noreferrer" className={S.btnSolid}>
                  <Mic2 className="w-5 h-5" /> Apply to Pitch
                </a>
                <a href="https://forms.gle/fNoLJc9wAqtYjCrJA" target="_blank" rel="noopener noreferrer" className={S.btnPrimary}>
                  <Users className="w-5 h-5" /> RSVP to Attend
                </a>
                <a href="https://drive.google.com/drive/folders/1aoLM6XQcYOT3d6KDRF0MpqEWI1eu2Fnt?usp=sharing" target="_blank" rel="noopener noreferrer" className={S.btnPrimary}>
                  <FileDown className="w-5 h-5" /> Event Flyers
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>



      {/* ─── WARESA RESEARCH COMPETITION ─── */}
      <AnimatedSection className="py-20 lg:py-28 border-t border-charcoal-200/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-mint-300 text-mint-700 bg-mint-50">
              <Award className="w-4 h-4" /> WARESA Korea
            </div>
            <h2 className="font-spacemono text-3xl sm:text-4xl font-bold mb-4">Five-Minute Research Competition</h2>
            <p className={`text-lg ${S.muted}`}>🗓 March 31, 2026 · ⏰ 3:00 – 5:00 PM KST · 📍 BCCEI, Centum City, Busan</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Judging Criteria */}
            <div className={S.card}>
              <h3 className="font-spacemono text-lg font-bold mb-6 flex items-center gap-2">⚖️ Judging Criteria</h3>
              <div className="space-y-4">
                {judgingCriteria.map((c) => (
                  <div key={c.num} className="flex items-center gap-4 p-3 rounded-xl border border-charcoal-200/60 bg-charcoal-50/30">
                    <span className="w-8 h-8 rounded-full bg-mint-50 border border-mint-300 text-mint-700 flex items-center justify-center text-xs font-spacemono font-bold shrink-0">{c.num}</span>
                    <span className="flex-1 font-medium text-sm">{c.label}</span>
                    <span className={`text-sm font-spacemono font-bold ${S.accent}`}>{c.pts} pts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prizes */}
            <div className={S.card}>
              <h3 className="font-spacemono text-lg font-bold mb-6 flex items-center gap-2">🏆 Prizes & Incentives</h3>
              <div className="space-y-4">
                {prizes.map((p) => (
                  <div key={p.place} className="flex items-center gap-4 p-4 rounded-xl border border-charcoal-200/60 bg-charcoal-50/30">
                    <span className="text-3xl">{p.emoji}</span>
                    <div className="flex-1">
                      <p className="font-bold text-sm">{p.place}</p>
                      <p className={`text-xs ${S.muted}`}>{p.label}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-spacemono font-bold text-lg">{p.amount}</p>
                      <p className={`text-xs ${S.muted}`}>{p.currency}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-4 p-4 rounded-xl border border-charcoal-200/60 bg-charcoal-50/30">
                  <span className="text-3xl">📱</span>
                  <div className="flex-1">
                    <p className="font-bold text-sm">#RNDDAY Marketing Challenge</p>
                    <p className={`text-xs ${S.muted}`}>Use our official hashtag on social media to win Starbucks vouchers throughout the day</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-charcoal-200/60 bg-charcoal-50/30">
                  <span className="text-3xl">📜</span>
                  <div className="flex-1">
                    <p className="font-bold text-sm">Official Recognition</p>
                    <p className={`text-xs ${S.muted}`}>Winners receive signed certificates of achievement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submission Info */}
          <a href="https://forms.gle/fNoLJc9wAqtYjCrJA" target="_blank" rel="noopener noreferrer" className={`${S.card} flex flex-col sm:flex-row items-center justify-between gap-6 group cursor-pointer`} style={{ background: 'linear-gradient(135deg, rgba(82,171,133,0.04) 0%, rgba(255,255,255,1) 100%)' }}>
            <div className="flex items-center gap-4">
              <ArrowRight className={`w-6 h-6 ${S.accent} shrink-0 group-hover:translate-x-1 transition-transform`} />
              <div>
                <p className="font-semibold">Submit your abstract via the registration form</p>
                <span className={`${S.accent} font-spacemono text-sm`}>Click here to apply →</span>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className={`text-xs ${S.muted}`}>Submission deadline</p>
              <p className="font-spacemono font-bold text-lg">25 March 2026</p>
            </div>
          </a>

          <p className={`text-center text-sm mt-6 ${S.muted} italic`}>
            Participants attending in person are especially encouraged to apply. · <a href="https://www.waresa.org/korea" target="_blank" rel="noopener noreferrer" className={`${S.accent} hover:underline`}>www.waresa.org/korea</a>
          </p>
        </div>
      </AnimatedSection>

      {/* ─── AGENDA (Vertical Timeline) ─── */}
      <AnimatedSection className="py-20 lg:py-28 border-t border-charcoal-200/40" id="agenda">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-spacemono text-3xl sm:text-4xl font-bold text-center mb-16">Agenda</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[2.35rem] sm:left-[2.85rem] top-0 bottom-0 w-px bg-charcoal-200/60" />

            <div className="space-y-0">
              {agenda.map((item, i) => (
                <div key={item.time} className="relative flex gap-5 sm:gap-6 py-6 group">
                  {/* Time + dot */}
                  <div className="w-[4.5rem] sm:w-[5.5rem] shrink-0 flex flex-col items-center">
                    <span className={`font-spacemono text-sm sm:text-base font-bold ${S.accent} relative z-10 bg-[#fafbfc] px-1`}>
                      {item.time}
                    </span>
                  </div>
                  {/* Dot on the line */}
                  <div className="absolute left-[2.05rem] sm:left-[2.55rem] top-[1.85rem] w-[0.625rem] h-[0.625rem] rounded-full border-2 border-mint-500 bg-white z-10 group-hover:bg-mint-500 transition-colors duration-300" />
                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <h3 className="font-semibold text-base sm:text-lg">{item.session}</h3>
                    <p className={`text-sm mt-1 ${S.muted}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── SPEAKERS & JURY ─── */}
      <AnimatedSection className="py-20 lg:py-28 border-t border-charcoal-200/40" id="speakers">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-spacemono text-3xl sm:text-4xl font-bold text-center mb-16">Speakers & Jury</h2>
          <div className="space-y-6">
            {speakers.map((s, i) => (
              <motion.div
                key={s.name}
                className={`${S.card} flex flex-col sm:flex-row sm:items-center gap-4`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="shrink-0">
                  <h3 className="font-spacemono font-bold text-xl sm:text-2xl text-charcoal-900">{s.name}</h3>
                  <p className={`text-sm font-semibold ${S.accent}`}>{s.role}</p>
                  {(s as any).topic && <p className="text-xs font-spacemono text-charcoal-500 mt-0.5">{(s as any).topic}</p>}
                </div>
                <div className="hidden sm:block w-px h-10 bg-charcoal-200/60 mx-2" />
                <p className={`text-sm leading-relaxed ${S.muted}`}>{s.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── EVENING NETWORKING ─── */}
      <AnimatedSection className="py-20 lg:py-28 border-t border-charcoal-200/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className={`${S.card} relative overflow-hidden`} style={{ background: 'linear-gradient(135deg, rgba(82,171,133,0.04) 0%, rgba(255,255,255,1) 100%)' }}>
            <div className="relative">
              <GlassWater className={`w-10 h-10 ${S.accent} mb-6`} />
              <h2 className="font-spacemono text-3xl sm:text-4xl font-bold mb-4">Networking Evening at Shilla Stay</h2>
              <p className="text-charcoal-400 text-lg max-w-2xl mb-8 leading-relaxed font-light">
                Wrap up the day with drinks, food, and good conversation. This is an open event — members of the Network Busan community and the wider Busan business scene will also join. Meet researchers, local business owners, startups and professionals in a relaxed setting.
              </p>
              <p className="text-mint-600 text-sm font-medium mb-8">
                🎟️ Attendee Perk: Pre-registered guests who checked in during the day will receive discounted drink coupons for use during the evening.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {[
                  { label: 'Researchers', desc: 'University labs and research teams from Busan and beyond' },
                  { label: 'Local Business', desc: 'Entrepreneurs and companies based in the Busan area' },
                  { label: 'International Community', desc: 'EU partners, expats, and global collaborators' },
                ].map((p) => (
                  <div key={p.label} className="p-4 rounded-xl border border-charcoal-200/60 bg-mint-50/50">
                    <h4 className={`font-semibold mb-1 ${S.accent}`}>{p.label}</h4>
                    <p className="text-sm text-charcoal-400">{p.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-charcoal-400/60 italic mb-6 font-light">
                Can't make the daytime sessions? You're still welcome to join for the evening.
              </p>

              <a href="https://forms.gle/fNoLJc9wAqtYjCrJA" target="_blank" rel="noopener noreferrer" className={S.btnSolid}>
                RSVP for the Evening <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── LOGISTICS ─── */}
      <AnimatedSection className="py-20 lg:py-28 border-t border-charcoal-200/40" id="venue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-spacemono text-3xl sm:text-4xl font-bold text-center mb-12">Venue</h2>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className={`w-5 h-5 ${S.accent}`} />
              <h3 className="font-semibold text-lg">Busan Center for Creative Economy and Innovation (BCCEI)</h3>
            </div>
            <p className={`text-sm ${S.muted}`}>78 Centumjungang-ro, Haeundae-gu, Busan, South Korea</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-charcoal-200/40 shadow-lg" ref={(el) => {
            if (el && !el.dataset.mapLoaded) {
              el.dataset.mapLoaded = 'true';
              const container = document.createElement('div');
              container.id = 'daumRoughmapContainer1773829570746';
              container.className = 'root_daum_roughmap root_daum_roughmap_landing';
              el.appendChild(container);
              const loaderScript = document.createElement('script');
              loaderScript.src = 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js';
              loaderScript.charset = 'UTF-8';
              loaderScript.onload = () => {
                try {
                  new (window as any).daum.roughmap.Lander({
                    timestamp: '1773829570746',
                    key: 'ji2uajn23ku',
                    mapWidth: '640',
                    mapHeight: '360',
                  }).render();
                } catch (e) { console.error('KakaoMap render error', e); }
              };
              document.head.appendChild(loaderScript);
            }
          }} />
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="https://kko.to/q8vbaiBfnL"
              target="_blank"
              rel="noopener noreferrer"
              className={S.btnPrimary}
            >
              <MapPin className="w-4 h-4" /> Open in KakaoMap
            </a>
            <a
              href="https://naver.me/xwovGhZN"
              target="_blank"
              rel="noopener noreferrer"
              className={S.btnPrimary}
            >
              <MapPin className="w-4 h-4" /> Open in Naver Map
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── PARTNERS ─── */}
      <AnimatedSection className="py-20 lg:py-28 border-t border-charcoal-200/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-spacemono text-3xl sm:text-4xl font-bold mb-16">Partners</h2>
          <div className="grid sm:grid-cols-3 gap-10">
            <div>
              <h3 className={`text-sm font-spacemono uppercase tracking-widest mb-4 ${S.muted}`}>Hosts</h3>
              <p className="font-medium">BCCEI</p>
              <p className="font-medium">Busan Metropolitan City</p>
            </div>
            <div>
              <h3 className={`text-sm font-spacemono uppercase tracking-widest mb-4 ${S.muted}`}>Global Partners</h3>
              <p className="font-medium">EURAXESS</p>
              <p className="font-medium">ECCK</p>
            </div>
            <div>
              <h3 className={`text-sm font-spacemono uppercase tracking-widest mb-4 ${S.muted}`}>Infrastructure</h3>
              <p className="font-medium">InsightMatches</p>
              <p className="font-medium">WARESA</p>
              <p className="font-medium">Network Busan</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── FINAL CTA ─── */}
      <AnimatedSection className="py-20 lg:py-28 border-t border-charcoal-200/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-spacemono text-3xl sm:text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className={`text-lg mb-10 font-light ${S.muted}`}>
            Whether you're pitching deep-tech, scouting the next breakthrough, or building bridges between the EU and Korea — your seat is here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://forms.gle/fNoLJc9wAqtYjCrJA" target="_blank" rel="noopener noreferrer" className={S.btnSolid}>
              Apply to Pitch <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://forms.gle/fNoLJc9wAqtYjCrJA" target="_blank" rel="noopener noreferrer" className={S.btnPrimary}>
              RSVP to Attend
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── FOOTER ─── */}
      <footer className="py-10 border-t border-charcoal-200/40">
        <div className={`max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm ${S.muted}`}>
          <p>© 2026 R&D Day · Hosted by BCCEI & Busan Metropolitan City</p>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-charcoal-900 transition-colors">
            Powered by InsightMatches <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default RnDDay;
