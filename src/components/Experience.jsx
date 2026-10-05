import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <Reveal y={40} delay={0.05}>
          <div className="text-center mb-16">
            <div className="section-badge mx-auto mb-3">Work & Journey</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Experience <span className="grad-vi">Timeline</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
              Perjalanan dan rekam jejak dalam rekayasa perangkat lunak, eksplorasi teknologi web modern, otomatisasi AI, dan proyek nyata.
            </p>
          </div>
        </Reveal>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-blue-500/20 space-y-10 sm:space-y-14">
          {experience.map((exp, idx) => {
            const isNow = exp.period === "NOW";
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 35, x: -10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative group text-left"
              >
                {/* Pulsing circular node on timeline */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#050510] border-2 group-hover:scale-125 transition-transform duration-300 ${
                    isNow
                      ? "border-emerald-400 shadow-[0_0_15px_#10b981]"
                      : "border-blue-500 shadow-[0_0_15px_#2c67ed]"
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full m-auto mt-[3px] animate-ping ${
                      isNow ? "bg-emerald-400" : "bg-blue-400"
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.25)]">
                  {/* Header: Role and Duration */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.company && (
                        <div className="text-sm font-semibold text-blue-400 mt-0.5 flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 text-blue-400" />
                          <span>{exp.company}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                          isNow
                            ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/35 shadow-[0_0_15px_rgba(16,185,129,0.25)] animate-pulse"
                            : "bg-blue-500/10 text-blue-300 border border-blue-500/25"
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      {exp.type && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                          {exp.type}
                        </span>
                      )}
                    </div>
                  </div>

                  {exp.location && (
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-4">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                  )}

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {exp.description}
                </p>

                {/* Tags */}
                {exp.tags && (
                  <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/[0.06]">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-blue-300 border border-white/[0.06]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
