import { useState, useEffect } from "react";
import { ArrowUp, Mail, Heart, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Footer() {
  const { personal, socials } = portfolioData;
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(Number(scroll));
      if (totalScroll > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative pt-16 pb-12 border-t border-white/[0.08] bg-[#050510]/80 backdrop-blur-md overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal y={30} delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <div className="w-full h-full bg-[#070916] rounded-xl flex items-center justify-center font-bold text-white text-xs font-mono">
                  RJ
                </div>
              </div>
              <span className="font-bold text-lg text-white">
                {personal.name}
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              Pelajar jurusan Rekayasa Perangkat Lunak & Full Stack Web Developer. Berfokus pada rekayasa web modern, performa tinggi, dan pengalaman digital berdampak.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Crafted with React, Tailwind CSS & Framer Motion</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-300 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">
                  Skills & Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">
                  Experience & Timeline
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-300 font-semibold">
              Social Channels
            </h4>
            <div className="flex flex-wrap gap-2.5">
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
                    className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-600/10 transition-all duration-200"
                    aria-label={soc.name}
                  >
                    {getIcon()}
                  </a>
                );
              })}
            </div>
            <p className="text-[11px] text-slate-500 font-mono mt-3">
              Open for freelance opportunities & tech mentoring.
            </p>
          </div>
        </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
            <div>
              &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <span>Designed & developed with passion</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-blue-600/90 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] border border-blue-400/40 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          {/* Circular progress outline */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
            <circle
              cx="50%"
              cy="50%"
              r="20"
              className="stroke-white/20 fill-none stroke-[2]"
            />
            <circle
              cx="50%"
              cy="50%"
              r="20"
              className="stroke-cyan-300 fill-none stroke-[2]"
              style={{
                strokeDasharray: 125,
                strokeDashoffset: 125 - 125 * scrollProgress,
                transition: "stroke-dashoffset 0.1s linear",
              }}
            />
          </svg>
        </button>
      )}
    </footer>
  );
}
