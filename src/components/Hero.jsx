import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, Music2, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personal, socials } = portfolioData;

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [personal.roles.length]);

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="w-full lg:w-7/12 space-y-7 text-left"
          >
            {/* Minimalist Status & Location Index */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-wide">
              <span className="inline-flex items-center gap-2 text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/15" />
                <span>Available for projects</span>
              </span>
              <span className="h-3.5 w-px bg-white/15" aria-hidden="true" />
              <span className="text-slate-500">Cimahi, Indonesia</span>
            </div>

            {/* Editorial Display Statement */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-semibold tracking-[-0.035em] leading-[1.08] text-slate-100">
              <span className="block">
                Building fast,{" "}
                <span className="font-serif italic font-normal text-blue-200/95 tracking-normal text-[1.06em]">
                  reliable
                </span>
              </span>
              <span className="block mt-1">web applications</span>
              <span className="block mt-1 text-slate-400 font-normal">
                with clean architecture.
              </span>
            </h1>

            {/* Author Byline + Grounded Bio */}
            <div className="border-l border-white/15 pl-4 sm:pl-5 space-y-2.5 max-w-xl">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm">
                <span className="font-semibold text-slate-100 tracking-[-0.01em]">
                  {personal.name}
                </span>
                <span className="text-slate-600 select-none">/</span>
                <span className="relative inline-flex items-center h-5 overflow-hidden font-mono text-xs text-slate-400">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={personal.roles[roleIndex]}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="inline-block"
                    >
                      {personal.roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>

              <p className="text-slate-400 text-[15px] sm:text-base leading-[1.7] font-normal">
                {personal.subDescription}
              </p>
            </div>

            {/* Tactile High-Contrast CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-slate-950 bg-slate-100 hover:bg-white transition-colors duration-200"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-slate-200 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/15 hover:border-white/30 transition-colors duration-200"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Clean Hairline Social Ledger */}
            <div className="pt-5 border-t border-white/[0.08] max-w-lg flex flex-wrap items-center gap-x-6 gap-y-2">
              {socials.map((soc) => {
                const getIcon = () => {
                  if (soc.icon === "github") return <GithubIcon className="w-3.5 h-3.5" />;
                  if (soc.icon === "linkedin") return <LinkedinIcon className="w-3.5 h-3.5" />;
                  if (soc.icon === "instagram") return <InstagramIcon className="w-3.5 h-3.5" />;
                  return <Mail className="w-3.5 h-3.5" />;
                };

                return (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-slate-100 transition-colors duration-200"
                  >
                    <span className="text-slate-500 group-hover:text-slate-200 transition-colors">
                      {getIcon()}
                    </span>
                    <span>{soc.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Spotify Daily Rotation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-5/12 flex flex-col items-center lg:items-end"
          >
            {/* Spotify Daily Rotation Player (exact replica of reference) */}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
