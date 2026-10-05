import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { FileText, ArrowUpRight, Code, Award, Trophy, GraduationCap, Briefcase, MapPin, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import Reveal from "./Reveal";

// Interactive Spotlight / Flashlight Reveal Component (replica of reference)
function SpotlightProfileCard({ imageSrc }) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const maskImage = useMotionTemplate`radial-gradient(circle 140px at ${smoothX}px ${smoothY}px, black 65%, transparent 100%)`;

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(-1000);
    mouseY.set(-1000);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] aspect-[4/5] mx-auto rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent shadow-2xl group cursor-crosshair backdrop-blur-md flex items-end justify-center"
    >
      {/* Background glow behind image */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20 opacity-50" />

      {/* Base Grayscale image */}
      <img
        src={imageSrc}
        alt="Profile"
        className="absolute inset-0 w-full h-full object-contain object-bottom grayscale group-hover:grayscale-[20%] transition-all duration-700 pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
      />

      {/* Flashlight revealed colored layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        <img
          src={imageSrc}
          alt="Profile Revealed"
          className="w-full h-full object-contain object-bottom pointer-events-none drop-shadow-[0_15px_30px_rgba(37,99,235,0.3)]"
        />
      </motion.div>

      {/* Floating Spotlight Dot cursor indicator */}
      <motion.div
        className="absolute w-3 h-3 rounded-full pointer-events-none z-20 mix-blend-difference bg-white shadow-[0_0_12px_#ffffff]"
        style={{
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: "-50%",
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Subtle bottom badge indicator */}
      <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 z-20 flex items-center justify-between text-xs">
        <span className="text-slate-300 font-mono flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          Interactive Spotlight
        </span>
        <span className="text-blue-400 text-[10px] font-mono uppercase">
          Hover to illuminate
        </span>
      </div>
    </div>
  );
}

// Animated Border Beam Stat Card Component
function StatCard({ stat, onSelectCategory }) {
  const getIcon = () => {
    if (stat.category === "projects") return Code;
    if (stat.category === "certificates") return Award;
    if (stat.category === "awards") return Trophy;
    return Briefcase;
  };

  const Icon = getIcon();

  return (
    <a
      href="#projects"
      onClick={() => onSelectCategory && onSelectCategory(stat.category)}
      className="group relative block p-6 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.3)] cursor-pointer"
    >
      {/* Radial hover glow inside card */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${stat.color}22 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${stat.color}15`,
            border: `1px solid ${stat.color}35`,
          }}
        >
          <Icon className="w-6 h-6" style={{ color: stat.color }} />
        </div>
        <span className="text-4xl sm:text-5xl font-extrabold tracking-tight font-sans text-white group-hover:text-blue-300 transition-colors">
          {stat.value}
        </span>
      </div>

      <div className="relative z-10 space-y-1">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
          {stat.label}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-400 font-light">{stat.subtext}</p>
          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        {/* Animated bottom accent line */}
        <div
          className="mt-3 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${stat.color}, transparent)`,
          }}
        />
      </div>
    </a>
  );
}

export default function About({ onSwitchPortofolioTab }) {
  const { personal, stats, education, experience } = portfolioData;

  const handleTabClick = (category) => {
    let tabIndex = 0;
    if (category === "certificates") tabIndex = 1;
    if (category === "awards") tabIndex = 2;
    if (onSwitchPortofolioTab) onSwitchPortofolioTab(tabIndex);
  };

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div id="About" className="absolute top-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <Reveal y={40} delay={0.05}>
          <div className="text-center mb-16 sm:mb-20">
            <div className="section-badge mx-auto mb-3">About Me</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Know Me <span className="grad-vi">Closer</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
              Perjalanan saya dalam dunia rekayasa perangkat lunak, pendidikan teknologi, dan eksplorasi digital.
            </p>
          </div>
        </Reveal>

        {/* Desktop 3-Column Layout (Matching Reference Website) */}
        <div className="hidden lg:grid lg:grid-cols-[2.4fr_3fr_2.4fr] gap-8 items-center mb-20">
          {/* Left Column: Heading and Resume CTA */}
          <Reveal y={50} delay={0.1}>
            <div className="space-y-6 text-left">
              <div className="space-y-1">
                <span className="text-5xl xl:text-6xl font-extrabold grad-vi block">
                  Hi, I'm
                </span>
                <span className="text-5xl xl:text-6xl font-extrabold text-white block">
                  {personal.firstName}
                </span>
                <span className="text-5xl xl:text-6xl font-extrabold text-white block">
                  {personal.lastName}
                </span>
              </div>

              <p className="text-sm text-slate-400 font-mono flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                {personal.location}
              </p>

              <div className="pt-2">
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-[1.03] active:scale-95"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Middle Column: Interactive Spotlight Profile Card */}
          <Reveal y={50} delay={0.2} className="flex justify-center items-center">
            <SpotlightProfileCard imageSrc={personal.aboutImage || personal.profileImage} />
          </Reveal>

          {/* Right Column: Bio and Projects CTA */}
          <Reveal y={50} delay={0.3}>
            <div className="space-y-6 text-left">
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/[0.08] backdrop-blur-md">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  Student & Developer
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {personal.aboutBio}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-blue-300 hover:text-white bg-blue-600/10 border border-blue-500/30 hover:border-blue-400/60 hover:bg-blue-600/20 transition-all duration-300 hover:scale-[1.03] active:scale-95"
                >
                  <Code className="w-4 h-4" />
                  <span>Explore Projects</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mobile & Tablet Layout (Fallback for <1024px) */}
        <Reveal y={50} delay={0.15} className="lg:hidden">
          <div className="flex flex-col items-center gap-8 mb-16 text-center">
            <SpotlightProfileCard imageSrc={personal.aboutImage || personal.profileImage} />

            <div className="space-y-3">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                Hi, I'm <span className="grad-vi">{personal.name}</span>
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                {personal.aboutBio}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 w-full">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </a>
              <a
                href="#projects"
                className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-blue-300 bg-blue-600/10 border border-blue-500/30"
              >
                <Code className="w-4 h-4" />
                <span>View Projects</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Highlighted Stat Cards Grid (Clickable to switch Portofolio tabs) */}
        <Reveal y={40} delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                stat={stat}
                onSelectCategory={handleTabClick}
              />
            ))}
          </div>
        </Reveal>

        {/* Education & Experience Dual Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Snapshot */}
          <Reveal y={40} delay={0.15}>
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-white/[0.08] backdrop-blur-md h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  Education Background
                </h3>
                <a
                  href="#education"
                  className="text-xs text-blue-400 hover:text-blue-300 font-mono flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 transition-all flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold font-mono">
                      SMK
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        {edu.institution}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">{edu.major}</p>
                      <span className="inline-block mt-2 text-[11px] font-mono px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Experience Snapshot */}
          <Reveal y={40} delay={0.25}>
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-white/[0.08] backdrop-blur-md h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  Recent Experience
                </h3>
                <a
                  href="#experience"
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1"
                >
                  <span>Timeline</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="space-y-4">
                {experience.slice(0, 2).map((exp) => (
                  <div
                    key={exp.id}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-cyan-400 font-bold font-mono text-xs">
                      EXP
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        {exp.role}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">{exp.company}</p>
                      <span className="inline-block mt-2 text-[11px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
