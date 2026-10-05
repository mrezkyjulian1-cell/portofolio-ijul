import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, Sparkles, Music2, UserCheck, Flame, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personal, socials } = portfolioData;

  // Typewriter state
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Widget switch (Avatar vs Spotify Daily Rotation as in reference)
  const [activeWidget, setActiveWidget] = useState("profile"); // 'profile' | 'spotify'

  const typingSpeed = 100;
  const deletingSpeed = 45;
  const pauseTime = 2000;

  const handleTyping = useCallback(() => {
    const fullRole = personal.roles[roleIndex];

    if (!isDeleting) {
      if (charIndex < fullRole.length) {
        setCurrentText((prev) => prev + fullRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      if (charIndex > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personal.roles.length);
      }
    }
  }, [charIndex, isDeleting, roleIndex, personal.roles]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden"
    >
      <div id="Home" className="absolute top-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full lg:w-7/12 space-y-6 text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-medium tracking-wide shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.status}</span>
            </div>

            {/* Giant Gradient Title matching reference */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] font-sans">
                <span className="grad-vi block">{personal.heroHeadingPrefix}</span>
                <span className="text-white block mt-1">{personal.heroHeadingSuffix}</span>
              </h1>
            </div>

            {/* Typewriter role */}
            <div className="h-9 flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold text-slate-100">
                {personal.name}
              </span>
              <span className="text-slate-500 text-xl font-light">|</span>
              <span className="text-lg sm:text-xl font-medium text-cyan-400">
                {currentText}
              </span>
              <span className="w-[2px] h-6 bg-blue-500 rounded-full animate-pulse" />
            </div>

            {/* Sub-description */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl font-light">
              {personal.subDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] transition-all duration-300 hover:scale-[1.03] active:scale-95"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-white/[0.04] border border-white/[0.1] hover:border-blue-400/40 hover:bg-blue-600/10 transition-all duration-300 hover:scale-[1.03] active:scale-95"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Social media connections */}
            <div className="flex items-center gap-3 pt-4">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-mono mr-2">
                Connect
              </span>
              {socials.map((soc) => {
                const getIcon = () => {
                  if (soc.icon === "github") return <GithubIcon className="w-4 h-4" />;
                  if (soc.icon === "linkedin") return <LinkedinIcon className="w-4 h-4" />;
                  if (soc.icon === "instagram") return <InstagramIcon className="w-4 h-4" />;
                  return <Mail className="w-4 h-4" />;
                };

                return (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 hover:shadow-[0_0_15px_rgba(37,99,235,0.25)] transition-all duration-300 hover:scale-110"
                    aria-label={soc.name}
                  >
                    {getIcon()}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Visual / Profile Container + Daily Rotation Spotify Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-5/12 flex flex-col items-center lg:items-end"
          >
            {/* Widget switcher tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/[0.08] rounded-xl mb-4 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setActiveWidget("profile")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeWidget === "profile"
                    ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Profile Visual</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveWidget("spotify")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeWidget === "spotify"
                    ? "bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Music2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Daily Rotation</span>
              </button>
            </div>

            {/* Conditional Display: Profile Visual or Spotify Playlist */}
            {activeWidget === "profile" ? (
              <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
                {/* Ambient glowing rings */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-cyan-400/15 to-purple-600/20 blur-2xl animate-pulse-subtle pointer-events-none" />

                {/* Profile card container with transparent background */}
                <div className="relative z-10 w-full h-full rounded-3xl p-3 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden group">
                  {/* Internal image */}
                  <div className="w-full h-full rounded-2xl overflow-hidden relative flex items-end justify-center">
                    <img
                      src={personal.profileImage}
                      alt={personal.name}
                      className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_15px_30px_rgba(37,99,235,0.3)]"
                    />

                    {/* Gradient bottom overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050510]/95 via-[#050510]/60 to-transparent pointer-events-none" />

                    {/* Name & role badge inside photo */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 z-10">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-bold text-sm">{personal.name}</div>
                          <div className="text-xs text-blue-400 font-mono">
                            SMK Wiraswasta Cimahi
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                          <Flame className="w-4 h-4 text-blue-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Tech Badges */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -top-2 -left-2 z-20 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-blue-500/40 text-blue-300 text-xs font-mono font-semibold shadow-[0_0_20px_rgba(37,99,235,0.4)] backdrop-blur-md flex items-center gap-1.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    React.js
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 -right-3 z-20 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-md flex items-center gap-1.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    Tailwind CSS
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-2 right-6 z-20 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-purple-500/40 text-purple-300 text-xs font-mono font-semibold shadow-[0_0_20px_rgba(139,92,246,0.4)] backdrop-blur-md flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    Node.js & Cloud
                  </motion.div>
                </div>
              </div>
            ) : (
              /* Spotify Daily Rotation Player (exact replica of reference) */
              <div className="relative w-full max-w-[440px] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-blue-500/30">
                <div className="p-5 pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                      <Music2 className="w-5 h-5 text-emerald-400" />
                      Daily Rotation
                    </h3>
                    <a
                      href={personal.spotifyPlaylistUrl || "https://open.spotify.com/playlist/4e7CA8obF944UVhwVOA884"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200 transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Spotify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-400">
                    My coding & study soundtrack playlist...
                  </p>
                </div>
                <div className="p-3 pt-0">
                  <iframe
                    title="Spotify Playlist"
                    src={personal.spotifyEmbedUrl}
                    width="100%"
                    height="352"
                    loading="lazy"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    className="rounded-xl border-0 w-full"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
