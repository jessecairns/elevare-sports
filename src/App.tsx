/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Telescope,
  Rocket,
  FileText, 
  TrendingUp, 
  Maximize, 
  Gavel, 
  Globe, 
  Hash, 
  Link as LinkIcon, 
  Share2,
  Instagram,
  Linkedin,
  Menu,
  X,
  Languages,
  ChevronDown
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { translations, Language } from "./translations";

const SERVICES = [
  {
    icon: <FileText className="w-12 h-12 text-accent" />,
    title: "Representation",
    description: "We offer tailored guidance and governance on your career. Always reliable, notably inspiring."
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-accent" />,
    title: "Career Strategy",
    description: "We advise and handle contract negotiations and career transitions with precision."
  },
  {
    icon: <Maximize className="w-12 h-12 text-accent" />,
    title: "Performance & Wellbeing",
    description: "Together with you, we identify your peak performance zones and ensure long-term wellbeing."
  },
  {
    icon: <Gavel className="w-12 h-12 text-accent" />,
    title: "Financial & Legal Advisory",
    description: "We provide strategic guidance on investments and stand by you in all legal actions, ensuring your commercial interests and future are fully protected."
  },
  {
    icon: <Sparkles className="w-12 h-12 text-accent" />,
    title: "Brand & Image",
    description: "We build and manage your personal brand across social media and beyond, ensuring your identity reflects your performance and long-term vision."
  }
];

const LOCATIONS = [
  {
    city: "Istanbul",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=2000"
  },
  {
    city: "Paris",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8fXBqB6U1n93lHX1kD1c47EqO_wEENhUuRvuDaBnc0q62-u9BSEo-Pm2RzjYEpzYjig7y94Gt14Wsc_gBst0LF3QRbzLnTIEy62R-w0VXtsHzTB0LQ67Xt3BY3UVoc-u2_x2XAhtLMmNsqfWvIWxTeJlVIvJdXWEy20N_aFuFyhxPBK10_zMQErZ5bwoxB_OR_WHfpl3Q81iQ0VWHhbqrYb0r00J6iDMQNzIgg6t0VbeSiV9s7j2bSF9ZyEerfEqMFsns0jpnQD67"
  },
  {
    city: "Amsterdam",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAj5QGQoJvLtSlaj7LrydSdh22S1uIs-UWKtGahdV-Drc5sYQTZQU2K-oQ2nWB9udHOXgeGZ7_manKX12N1W4talB4TPMCgcJ8Z4ecM2cOm2OOvkv1fmo_2xbNdz3SemZXuRPz_ydMj_GipBPUla0yL13gwUj5RrwE2bjt_WwEAP2ASfwH-H-6nimdqi2Ei6nDaD4twnPn_jEYMjMGsMcwZ9QvlqFQU8HRZAQ9atVSx-Kiht7E_EhikU9SJZ7r1CD7i2FjdMt16gh81"
  }
];

const TEAM = [
  {
    name: "UMUT",
    role: "Founder",
    image: "https://lh3.googleusercontent.com/d/1c1ACfRCcisQCt0Ddy1-BOfB2yVb2DS-9",
    bio: "Umut Vurdu is the founder of Elevare and leads the organization from the Istanbul office. With a background as a former footballer, he brings deep on-field experience combined with a strong educational approach, both at academy and professional levels.\n\nAs an educator by background, he has been actively coaching and mentoring players for years, focusing on long-term athlete development and performance. Alongside his work in football, he is an experienced business owner and executive in the construction industry.\n\nHis multidisciplinary background allows him to combine sporting insight, education, and leadership in building Elevare’s player-focused ecosystem.",
    experience: ["Global Lead (Istanbul Office)", "Former Footballer & Coach", "Construction Industry Executive"]
  },
  {
    name: "Baransel",
    role: "FIFA Licensed Agent",
    image: "https://lh3.googleusercontent.com/d/1BRuCjSgaVEc_oVM1iRrw4DNlhTBvvBYx",
    bio: "Baransel Soysal is based in Paris, operating primarily across Southern Europe and North Africa. He works within a strong international network, connecting talent with the right opportunities at the right time.\n\nHis background combines business development, project financing, and entrepreneurship, mainly in the tech sector, bringing a structured and strategic perspective to player management.\n\nOutside of football, he is a competitive sailor, reflecting the same discipline and performance mindset he brings to his work with athletes. He speaks Turkish, English, French, Italian, and Spanish.",
    experience: ["Paris-based Southern Europe & North Africa Lead", "Business Development & Project Financing", "Multilingual: TR, EN, FR, IT, ES"]
  },
  {
    name: "Yigit",
    role: "FIFA Licensed Agent",
    image: "https://lh3.googleusercontent.com/d/1ezcSuCgO8CebhhZWHmiojH-EeXDLaCs2",
    bio: "Yiğit Çavuşoğlu leads Elevare’s Northern Europe operations from the Amsterdam office. He operates across a strong European network, connecting players with the right clubs and opportunities.\n\nHis background spans international business environments, particularly in tech and logistics, bringing a structured and strategic approach to player development.\n\nHe has also built Elevare’s scouting and analytics systems, strengthening the organization’s data-driven decision-making.",
    experience: ["Northern Europe Operations Lead", "Scouting & Analytics Systems Designer", "International Business Expert"]
  }
];

const PLAYERS = [
  {
    name: "Arda Güler",
    position: "Midfielder",
    club: "Real Madrid",
    image: "https://picsum.photos/seed/arda/400/600",
    stats: { goals: 6, assists: 4, apps: 12 }
  },
  {
    name: "Kenan Yıldız",
    position: "Forward",
    club: "Juventus",
    image: "https://picsum.photos/seed/kenan/400/600",
    stats: { goals: 4, assists: 2, apps: 15 }
  },
  {
    name: "Semih Kılıçsoy",
    position: "Forward",
    club: "Beşiktaş",
    image: "https://picsum.photos/seed/semih/400/600",
    stats: { goals: 11, assists: 3, apps: 23 }
  },
  {
    name: "Ferdi Kadıoğlu",
    position: "Defender",
    club: "Brighton",
    image: "https://picsum.photos/seed/ferdi/400/600",
    stats: { goals: 1, assists: 5, apps: 30 }
  }
];

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBadgeHovered, setIsBadgeHovered] = useState(false);
  const [view, setView] = useState<"home" | "portfolio" | "team">("home");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", surname: "", email: "", message: "" });
  const [pendingHomeSection, setPendingHomeSection] = useState<string | null>(null);

  const t = translations[lang];

  const displayTrack = lang === "en" ? "tracking-tighter" : "tracking-tight";
  const heroLead = lang === "en" ? "leading-[0.85]" : "leading-[0.92]";
  const displayLead = lang === "en" ? "leading-[0.85]" : "leading-[0.9]";
  const displayLeadLoose = lang === "en" ? "leading-[0.9]" : "leading-[0.96]";
  const teamHeadLead = lang === "en" ? "leading-[0.8]" : "leading-[0.88]";
  const portfolioMidLead = lang === "en" ? "leading-tight" : "leading-snug";
  const modalHeadLead = lang === "en" ? "leading-none" : "leading-[1.06]";

  /** CSS `uppercase` breaks Turkish İ/ı; skip when copy is stored as proper Turkish caps. */
  const cssUppercase = lang === "tr" ? "" : "uppercase";

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      const { scrollLeft, clientWidth } = el;
      const style = window.getComputedStyle(el);
      const gap = parseInt(style.gap) || 0;
      const scrollAmount = clientWidth + gap;
      
      const scrollTo = direction === 'left' 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
      
      el.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const getGap = () => {
      const style = window.getComputedStyle(el);
      return parseInt(style.gap) || 0;
    };

    const getSingleSetWidth = () => {
      const { scrollWidth } = el;
      const gap = getGap();
      // Total width of one set of items plus one gap
      return (scrollWidth + gap) / 3;
    };

    const initialScroll = () => {
      el.scrollLeft = getSingleSetWidth();
    };

    const timer = setTimeout(initialScroll, 500);

    const handleInfiniteScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const singleSetWidth = getSingleSetWidth();

      // Jump when we've scrolled significantly into the first or third set
      if (scrollLeft < singleSetWidth - clientWidth) {
        el.style.scrollBehavior = 'auto';
        el.scrollLeft = scrollLeft + singleSetWidth;
        el.style.scrollBehavior = 'smooth';
      } else if (scrollLeft > 2 * singleSetWidth) {
        el.style.scrollBehavior = 'auto';
        el.scrollLeft = scrollLeft - singleSetWidth;
        el.style.scrollBehavior = 'smooth';
      }
    };

    el.addEventListener('scroll', handleInfiniteScroll);
    window.addEventListener('resize', initialScroll);

    let isPaused = false;
    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    const autoScrollInterval = setInterval(() => {
      if (!isPaused) scroll('right');
    }, 5000);

    return () => {
      el.removeEventListener('scroll', handleInfiniteScroll);
      window.removeEventListener('resize', initialScroll);
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(autoScrollInterval);
      clearTimeout(timer);
    };
  }, []);

  const goToHome = () => {
    setPendingHomeSection(null);
    setView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (view !== "home" || !pendingHomeSection) return;
    const id = pendingHomeSection;
    setPendingHomeSection(null);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [view, pendingHomeSection]);

  // Clicking the hero badge navigates away while the pointer is still "over" the
  // badge; unmounting skips mouseleave, so isBadgeHovered would stay true.
  useEffect(() => {
    if (view !== "home") setIsBadgeHovered(false);
  }, [view]);

  const scrollToContact = () => {
    if (view !== "home") {
      setPendingHomeSection("contact");
      setView("home");
      return;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMainNavClick = (
    e: React.MouseEvent,
    itemId: string,
    surface: "home" | "team"
  ) => {
    if (itemId === "home") {
      e.preventDefault();
      goToHome();
      return;
    }
    if (itemId === "team") {
      e.preventDefault();
      setView("team");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (itemId === "about" || itemId === "services" || itemId === "network") {
      e.preventDefault();
      if (surface === "team") {
        setPendingHomeSection(itemId);
        setView("home");
      } else {
        document.getElementById(itemId)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const renderHomeChrome = (surface: "home" | "team") => {
    const teamSurface = surface === "team";
    const navShell =
      teamSurface || isScrolled
        ? "bg-primary/90 backdrop-blur-xl py-3 md:py-4 shadow-2xl border-b border-white/10"
        : "bg-transparent";

    return (
      <>
        <nav
          className={`fixed w-full z-50 px-6 md:px-20 py-4 md:py-6 flex justify-between items-center transition-all duration-500 ${navShell}`}
        >
          <motion.div
            className="text-2xl md:text-3xl font-black tracking-tighter cursor-pointer"
            onClick={goToHome}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {teamSurface ? (
              <>
                <span className="text-white">ELE</span>
                <span className="text-accent">V</span>
                <span className="text-white">ARE</span>
              </>
            ) : (
              <>
                ELE<span className="text-accent">V</span>ARE
              </>
            )}
          </motion.div>

          <div className="hidden md:flex items-center gap-12">
            <div className={`flex gap-12 text-[11px] font-bold ${cssUppercase} tracking-[0.3em]`}>
              {[
                { id: "home", label: t.nav.home },
                { id: "about", label: t.nav.about },
                { id: "services", label: t.nav.services },
                { id: "network", label: t.nav.network },
                { id: "team", label: t.nav.team },
              ].map((item) => (
                <a
                  key={item.id}
                  href={
                    item.id === "home"
                      ? "#"
                      : item.id === "team"
                        ? "#team"
                        : `#${item.id}`
                  }
                  onClick={(e) => handleMainNavClick(e, item.id, surface)}
                  className="text-white/70 hover:text-accent transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden md:block bg-accent text-primary px-8 py-3 rounded-full font-black text-[11px] ${cssUppercase} shadow-lg shadow-accent/20 hover:bg-white transition-all duration-300`}
            >
              {t.nav.contact}
            </motion.button>

          <div className="hidden md:relative md:block">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-all"
            >
              <span className="text-lg">{lang === 'en' ? '🇬🇧' : lang === 'tr' ? '🇹🇷' : '🇫🇷'}</span>
              <span className="text-[10px] font-black uppercase text-white/70">{lang}</span>
              <ChevronDown className={`w-3 h-3 text-white/40 transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-32 bg-primary/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                >
                  {(['en', 'tr', 'fr'] as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/5 transition-all ${
                        lang === l ? "bg-accent/10 text-accent" : "text-white/60"
                      }`}
                    >
                      <span className="text-lg">{l === 'en' ? '🇬🇧' : l === 'tr' ? '🇹🇷' : '🇫🇷'}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest">{l}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        </nav>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-primary/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6 md:hidden"
          >
            <div className="flex items-center gap-4 mb-8 bg-white/5 rounded-full p-2 border border-white/10">
              {(['en', 'tr', 'fr'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-2 rounded-full text-xs font-black transition-all flex items-center gap-2 ${
                    lang === l
                      ? "bg-accent text-primary"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  <span>{l === 'en' ? '🇬🇧' : l === 'tr' ? '🇹🇷' : '🇫🇷'}</span>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            {[
              { id: "home", label: t.nav.home },
              { id: "about", label: t.nav.about },
              { id: "services", label: t.nav.services },
              { id: "network", label: t.nav.network },
              { id: "team", label: t.nav.team },
              { id: "contact", label: t.nav.contact },
            ].map((item) => (
              <a
                key={item.id}
                href={item.id === "contact" ? "#contact" : item.id === "team" ? "#team" : `#${item.id}`}
                className={`text-4xl font-black ${cssUppercase} tracking-tighter hover:text-accent transition-colors`}
                onClick={(e) => {
                  if (item.id === "contact") {
                    e.preventDefault();
                    scrollToContact();
                  } else {
                    handleMainNavClick(e, item.id, surface);
                  }
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </>
    );
  };

  if (view === "team") {
    return (
      <div className="h-screen bg-white text-primary flex flex-col overflow-hidden selection:bg-accent selection:text-primary">
        {renderHomeChrome("team")}

        <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 min-h-0 overflow-hidden pt-24 md:pt-28">
          {/* Left Side: Editorial Header */}
          <div className="lg:col-span-3 flex flex-col justify-center px-6 md:px-10 border-r border-primary/5 bg-primary/5">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={`text-5xl md:text-7xl xl:text-8xl font-black ${cssUppercase} ${displayTrack} ${teamHeadLead} mb-8`}>
                {t.team.title}<br /><span className="text-accent italic">{t.team.subtitle}</span>
              </h1>
              <p className="text-gray-500 text-xs md:text-sm font-medium max-w-xs leading-relaxed">
                {t.team.description}
              </p>
            </motion.div>
          </div>

          {/* Right Side: Team Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 h-full overflow-hidden">
            {t.team.members.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`flex flex-col p-6 md:p-8 h-full border-r border-primary/5 last:border-r-0 ${i % 2 === 0 ? 'bg-white' : 'bg-primary/[0.02]'}`}
              >
                <div className="relative mb-8 group w-40 h-40 md:w-48 md:h-48 shrink-0 mx-auto md:mx-0">
                  <div className="absolute inset-0 bg-accent rounded-full translate-x-3 translate-y-3 -z-10 opacity-20 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform"></div>
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/5 shadow-lg">
                    <img 
                      src={TEAM[i].image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                <div className="flex-grow overflow-hidden flex flex-col">
                  <h3 className={`text-2xl md:text-3xl font-black ${cssUppercase} tracking-tighter mb-1`}>{member.name}</h3>
                  <p className={`text-accent font-black ${cssUppercase} text-[9px] tracking-[0.2em] mb-6`}>{member.role}</p>
                  
                  <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar mb-8">
                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm font-medium text-left whitespace-pre-line">
                      {member.bio}
                    </p>
                  </div>
                  
                  <div className="w-full h-px bg-primary/10 mt-auto"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (view === "portfolio") {
    return (
      <div className="h-screen bg-primary text-white p-6 md:p-12 flex flex-col selection:bg-accent selection:text-primary overflow-hidden">
        <nav className="flex justify-between items-center mb-8 md:mb-12">
          <motion.div 
            className="text-2xl md:text-3xl font-black tracking-tighter cursor-pointer" 
            onClick={goToHome}
            whileHover={{ scale: 1.05 }}
          >
            ELE<span className="text-accent">V</span>ARE
          </motion.div>
          <motion.button 
            onClick={goToHome}
            whileHover={{ x: -5 }}
            className={`flex items-center gap-3 text-accent font-black ${cssUppercase} text-[11px] tracking-[0.3em] hover:opacity-80 transition-all`}
          >
            <ArrowLeft className="w-5 h-5" /> {t.team.back}
          </motion.button>
        </nav>

        <div className="flex-1 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-12"
          >
            <h1 className={`text-5xl md:text-[8vw] font-black ${cssUppercase} ${displayTrack} ${displayLead}`}>
              {t.portfolio.title}<br /><span className="text-accent">{t.portfolio.subtitle}</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-8"
            >
              <Telescope className="w-24 h-24 md:w-32 md:h-32 text-accent opacity-20" />
            </motion.div>
            
            <h2 className={`text-3xl md:text-5xl font-black ${cssUppercase} ${displayTrack} max-w-3xl mb-6 ${portfolioMidLead}`}>
              {t.portfolio.description}
            </h2>
            
            <div className={`flex items-center gap-6 text-accent font-black ${cssUppercase} tracking-[0.4em] text-xs md:text-sm`}>
              <Rocket className="w-5 h-5 md:w-6 md:h-6 animate-bounce" />
              <span>{t.portfolio.subtext}</span>
            </div>

            <motion.div 
              className="mt-12 w-32 h-1 bg-accent/10 rounded-full overflow-hidden"
            >
              <motion.div 
                animate={{ x: [-128, 128] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-accent"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-accent selection:text-primary">
      {/* Brightness Pulse Overlay */}
      {isBadgeHovered && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="fixed inset-0 z-[60] bg-white pointer-events-none"
        />
      )}

      {renderHomeChrome("home")}

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="1990s Football Celebration" 
            className="w-full h-full object-cover retro-filter scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzkEfDgLKjOeBizZSNZB5xx0E5W6mE0qPMPKH6GIcWwAHa8sVDyFJNCQSudlKp4aymHpAPcMs0xaFQ8kUmuCYX5PJyijWkZ0UMzYvD9TudThad1M9G9N2d2tN6H5mljCLMnfFkTWK2lfqxWf9WE7iNvSyCISeaE415KYEnkghkehWbbm0b5_puyhTXoxAAorqlL_dJFTv6RdZPandLspzkabc8nySqEWREQkHZ5FJDsCT82wz_IGHMb5dYCGjFQLjsNRrVgw45Ry6F" 
            referrerPolicy="no-referrer"
          />
          <div className="hero-gradient absolute inset-0"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl pt-12 md:pt-20"
        >
          <h1 className={`text-5xl sm:text-6xl md:text-[11rem] font-black ${heroLead} ${displayTrack} ${cssUppercase}`}>
            {t.hero.title}<br />
            <span className="text-accent italic">{t.hero.subtitle}</span>
          </h1>
          <p className="text-lg md:text-2xl mt-8 md:mt-10 font-medium text-white/90 max-w-xl border-l-4 border-accent pl-8 leading-relaxed">
            {t.hero.description}
          </p>
          
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 md:gap-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const networkSection = document.getElementById("network");
                if (networkSection) networkSection.scrollIntoView({ behavior: "smooth" });
              }}
              className={`bg-accent text-primary px-12 py-5 rounded-full font-black text-xs ${cssUppercase} shadow-xl shadow-accent/20 hover:bg-white transition-all duration-300 w-full sm:w-auto`}
            >
              {t.hero.explore}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
              }}
              className={`border-2 border-white/20 hover:border-accent px-12 py-5 rounded-full font-black text-xs ${cssUppercase} backdrop-blur-sm transition-all duration-300 w-full sm:w-auto`}
            >
              {t.hero.vision}
            </motion.button>
          </div>
        </motion.div>

        {/* Spinning Badge */}
        <div className="absolute right-10 md:right-20 bottom-20 hidden lg:block">
          <motion.div 
            className="relative w-48 h-48 flex items-center justify-center cursor-pointer group"
            onMouseEnter={() => setIsBadgeHovered(true)}
            onMouseLeave={() => setIsBadgeHovered(false)}
            onClick={() => setView("portfolio")}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-accent/40 rounded-full border-dashed group-hover:border-accent transition-colors"
            ></motion.div>
            <div className="text-center flex flex-col items-center">
              <Sparkles className="w-12 h-12 text-accent mb-2 animate-pulse group-hover:scale-125 transition-transform" />
              <p className={`text-[10px] font-black ${cssUppercase} tracking-[0.2em] text-accent`}>{t.hero.badge}</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col bg-primary relative overflow-hidden scroll-mt-24">
        <div className="flex-grow flex flex-col px-6 md:px-20 pt-16 md:pt-20 pb-16 md:pb-20 min-h-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h2 className={`text-3xl md:text-6xl xl:text-7xl font-black ${cssUppercase} ${displayLeadLoose} ${displayTrack} mb-6 md:mb-10`}>
                {t.about.title}
              </h2>
              <p className="text-base md:text-xl text-white/70 max-w-xl mb-8 md:mb-12 leading-relaxed font-medium">
                {t.about.description}
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-accent text-primary px-12 md:px-16 py-4 md:py-5 rounded-full font-black text-xs md:text-sm ${cssUppercase} shadow-xl shadow-accent/20 hover:bg-white transition-all duration-300 w-full sm:w-auto`}
              >
                {t.about.readMore}
              </motion.button>
            </motion.div>

            <div className="relative h-full hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 h-full flex items-center"
              >
                <div className="absolute -inset-4 border-2 border-accent/30 transform rotate-3 -z-10"></div>
                <div className="h-[400px] xl:h-[500px] w-full overflow-hidden rounded-sm shadow-2xl relative bg-primary/20">
                  <img 
                    alt="Professional Soccer Player" 
                    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Text Ticker integrated into About */}
        <div className="py-6 md:py-8 bg-white border-y border-primary/5 overflow-hidden flex items-center">
          <div className="flex items-center whitespace-nowrap animate-infinite-scroll">
            {[...Array(10)].map((_, i) => (
              <span key={i} className={`text-primary/10 text-3xl md:text-4xl font-black ${cssUppercase} mx-12 ${displayTrack} leading-none`}>
                {t.about.ticker}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex flex-col bg-dark-blue overflow-hidden scroll-mt-24 px-6 md:px-20 pt-16 md:pt-20 pb-16 md:pb-20">
        <div className="mb-10 md:mb-12">
          <h2 className={`text-4xl md:text-7xl font-black ${cssUppercase} ${displayLead} ${displayTrack}`}>
            {t.services.title}<br /><span className="text-accent">{t.services.subtitle}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {t.services.items.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`group p-5 xl:p-7 border border-white/10 hover:border-accent/40 transition-all duration-500 bg-white/[0.03] backdrop-blur-sm rounded-[1.5rem] flex flex-col justify-between overflow-hidden relative ${
                i === 0 ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-[40px] rounded-full -mr-12 -mt-12 group-hover:bg-accent/10 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-5 xl:mb-6 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500">
                  {React.cloneElement(SERVICES[i].icon as React.ReactElement, { className: "w-10 h-10 text-accent" })}
                </div>
                <h3 className={`text-xl md:text-2xl font-black ${cssUppercase} mb-3 tracking-tight flex items-center`}>
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-md font-medium">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Network Section */}
      <section id="network" className="min-h-screen flex flex-col bg-primary overflow-hidden scroll-mt-24">
        <div className="flex-grow flex flex-col px-6 md:px-20 pt-16 md:pt-20 pb-16 md:pb-20 min-h-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10 md:mb-12">
            <div className="max-w-3xl">
              <h2 className={`text-4xl md:text-7xl font-black ${cssUppercase} ${displayLead} ${displayTrack}`}>
                {t.network.title}<br /><span className="text-accent">{t.network.subtitle}</span>
              </h2>
              <p className="text-white/70 mt-4 md:mt-6 max-w-2xl text-base md:text-xl font-medium border-l-4 border-accent pl-6 leading-relaxed">
                {t.network.description}
              </p>
            </div>
            
            <motion.button 
              onClick={() => setView("team")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-accent text-primary px-10 py-4 rounded-full font-black text-xs ${cssUppercase} shadow-2xl shadow-accent/20 hover:bg-white transition-all duration-300 flex items-center gap-3 animate-pulse-glow whitespace-nowrap`}
            >
              {t.network.meetTeam} <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {LOCATIONS.map((loc, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative group overflow-hidden h-[240px] md:h-[320px] xl:h-[400px] rounded-[2rem] shadow-2xl"
              >
                <img 
                  alt={loc.city} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  src={loc.image} 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply transition-opacity group-hover:opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-90"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end items-center p-6 md:p-8">
                  <h4 className={`text-3xl md:text-4xl font-black uppercase text-white ${displayTrack} text-center group-hover:text-accent transition-colors duration-500`}>{loc.city}</h4>
                  <div className="w-0 group-hover:w-16 h-1 bg-accent transition-all duration-500 mt-4 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="min-h-screen flex flex-col justify-center bg-white text-primary py-24 px-6 md:px-20 scroll-mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-32 mb-6 md:mb-8">
          <div className="max-w-4xl">
            <h2 className={`text-5xl md:text-[8rem] font-black ${cssUppercase} ${displayLead} ${displayTrack}`}>
              {t.contact.title}
            </h2>
            <motion.button 
              onClick={() => setIsContactModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-12 md:mt-16 bg-primary text-white px-12 md:px-16 py-5 md:py-7 rounded-full font-black text-xs md:text-sm ${cssUppercase} hover:bg-accent hover:text-primary transition-all duration-300 shadow-2xl w-full sm:w-auto`}
            >
              {t.contact.button}
            </motion.button>
          </div>
          
          <div className="flex flex-col gap-12 md:gap-16 text-left md:text-right w-full md:w-auto">
            <div className="text-sm font-bold space-y-4">
              <div className="space-y-6">
                <div className="group">
                  <span className={`opacity-40 text-[10px] ${cssUppercase} tracking-widest block mb-2`}>{t.contact.offices.istanbul}</span>
                  <p className="text-xl md:text-2xl font-black">+90 532 310 77 07</p>
                </div>
                <div className="group">
                  <span className={`opacity-40 text-[10px] ${cssUppercase} tracking-widest block mb-2`}>{t.contact.offices.paris}</span>
                  <p className="text-xl md:text-2xl font-black">+33 7 61 94 88 80</p>
                </div>
                <div className="group">
                  <span className={`opacity-40 text-[10px] ${cssUppercase} tracking-widest block mb-2`}>{t.contact.offices.amsterdam}</span>
                  <p className="text-xl md:text-2xl font-black">+31 6 29425137</p>
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-black pt-8 text-accent">contact@elevaresports.com</p>
            </div>
            
            <div className="flex gap-6 justify-start md:justify-end">
              {[Instagram, Linkedin].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 shadow-lg"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Marquee repositioned to Footer */}
        <div className="w-full h-20 md:h-24 relative overflow-hidden border-y border-primary/5 flex items-center bg-white mb-12">
          <div className="flex items-center whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className={`text-accent text-5xl md:text-7xl font-black italic uppercase opacity-20 mx-12 ${displayTrack} leading-none`}>
                ///////// ELEVARE SPORTS MANAGEMENT /////////
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-primary/10 pt-16 text-[11px] font-black uppercase tracking-[0.4em]">
          <p>ELE<span className="text-accent">V</span>ARE SPORTS MANAGEMENT © 2026</p>
          <div className="flex gap-16">
            <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">Terms & Conditions</a>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/95 backdrop-blur-2xl"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-3xl rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,242,242,0.15)] relative"
            >
              <motion.button 
                onClick={() => setIsContactModalOpen(false)}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-10 right-10 text-primary hover:text-accent transition-all duration-300 z-10"
              >
                <X className="w-10 h-10" />
              </motion.button>

              <div className="p-12 md:p-20">
                <h3 className={`text-5xl md:text-7xl font-black ${cssUppercase} ${displayTrack} text-primary mb-10 ${modalHeadLead}`}>
                  {t.contact.modalTitle} <span className="text-accent italic">{t.contact.modalSubtitle}</span>
                </h3>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const subject = `Contact Request from ${formData.name} ${formData.surname}`;
                    const body = `Name: ${formData.name} ${formData.surname}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
                    window.location.href = `mailto:contact@elevaresports.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    setIsContactModalOpen(false);
                  }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className={`text-[11px] font-black ${cssUppercase} tracking-[0.3em] opacity-40 ml-1`}>{t.contact.firstName}</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-primary/[0.03] border-b-2 border-primary/10 focus:border-accent outline-none px-6 py-4 font-bold transition-all duration-300 text-lg rounded-t-xl text-primary placeholder-primary/50"
                        placeholder={t.contact.placeholderFirstName}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className={`text-[11px] font-black ${cssUppercase} tracking-[0.3em] opacity-40 ml-1`}>{t.contact.lastName}</label>
                      <input 
                        required
                        type="text" 
                        value={formData.surname}
                        onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                        className="w-full bg-primary/[0.03] border-b-2 border-primary/10 focus:border-accent outline-none px-6 py-4 font-bold transition-all duration-300 text-lg rounded-t-xl text-primary placeholder-primary/50"
                        placeholder={t.contact.placeholderLastName}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className={`text-[11px] font-black ${cssUppercase} tracking-[0.3em] opacity-40 ml-1`}>{t.contact.email}</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-primary/[0.03] border-b-2 border-primary/10 focus:border-accent outline-none px-6 py-4 font-bold transition-all duration-300 text-lg rounded-t-xl text-primary placeholder-primary/50"
                      placeholder={t.contact.placeholderEmail}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className={`text-[11px] font-black ${cssUppercase} tracking-[0.3em] opacity-40 ml-1`}>{t.contact.message}</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-primary/[0.03] border-b-2 border-primary/10 focus:border-accent outline-none px-6 py-4 font-bold transition-all duration-300 text-lg resize-none rounded-t-xl text-primary placeholder-primary/50"
                      placeholder={t.contact.placeholderMessage}
                    />
                  </div>

                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-primary text-white py-7 rounded-full font-black ${cssUppercase} tracking-[0.3em] text-sm hover:bg-accent hover:text-primary transition-all duration-500 shadow-2xl shadow-primary/20`}
                  >
                    {t.contact.send}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
