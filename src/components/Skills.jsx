import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Wrench, 
  Sparkles, 
  Terminal, 
  Database, 
  Layout, 
  Layers, 
  Cpu, 
  Globe, 
  Palette, 
  FileCode, 
  Zap, 
  GitBranch, 
  Send,
  Cloud
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills", icon: Sparkles },
    { id: "frontend", label: "Frontend", icon: Layout },
    { id: "backend", label: "Backend & DB", icon: Server },
    { id: "tools", label: "Tools & DevOps", icon: Wrench },
  ];

  // Map skill icon string to Lucide icon component
  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case "atom":
      case "code":
      case "file-code":
        return Code2;
      case "palette":
      case "figma":
        return Palette;
      case "server":
      case "cpu":
        return Server;
      case "database":
        return Database;
      case "zap":
        return Zap;
      case "git-branch":
        return GitBranch;
      case "terminal":
        return Terminal;
      case "rocket":
      case "cloud":
        return Cloud;
      case "send":
        return Send;
      case "globe":
        return Globe;
      default:
        return Layers;
    }
  };

  const getFilteredSkills = () => {
    if (activeCategory === "frontend") return skills.frontend;
    if (activeCategory === "backend") return skills.backend;
    if (activeCategory === "tools") return skills.tools;
    return [...skills.frontend, ...skills.backend, ...skills.tools];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <Reveal y={40} delay={0.05}>
          <div className="text-center mb-14">
            <div className="section-badge mx-auto mb-3">Expertise & Capabilities</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              My <span className="grad-cyan">Technical Skills</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
              Perangkat lunak, bahasa pemrograman, dan ekosistem modern yang saya gunakan untuk mewujudkan produk digital.
            </p>
          </div>
        </Reveal>

        {/* Category Pill Switcher */}
        <Reveal y={30} delay={0.12}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.45)] scale-105"
                      : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-400"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filteredSkills.map((skill, idx) => {
            const IconComponent = getSkillIcon(skill.icon);
            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative p-5 rounded-2xl bg-slate-900/50 border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-10px_rgba(37,99,235,0.3)] flex flex-col justify-between"
              >
                {/* Internal hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 80% 20%, ${skill.color}15 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm"
                      style={{
                        background: `${skill.color}18`,
                        border: `1px solid ${skill.color}35`,
                      }}
                    >
                      <IconComponent
                        className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-blue-300 transition-colors">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-blue-200 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                    {skill.desc}
                  </p>
                </div>

                {/* Animated progress bar */}
                <div className="relative z-10 mt-5 pt-3 border-t border-white/[0.06]">
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                      className="h-full rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                      style={{
                        background: `linear-gradient(90deg, #2563eb, ${skill.color})`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
