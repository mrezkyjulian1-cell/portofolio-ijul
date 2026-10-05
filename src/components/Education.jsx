import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, BookOpen } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <Reveal y={40} delay={0.05}>
          <div className="text-center mb-16">
            <div className="section-badge mx-auto mb-3">Academic Foundation</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Formal <span className="grad-cyan">Education</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
              Pondasi akademis dan kejuruan dalam rekayasa komputer, jaringan, dan teknologi informasi.
            </p>
          </div>
        </Reveal>

        {/* Education Cards Grid */}
        <div className="max-w-3xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative p-6 sm:p-9 rounded-3xl bg-slate-900/50 border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.25)] flex flex-col justify-between text-left"
            >
              {/* Internal Accent Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 90% 10%, ${edu.accent}15 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
                    style={{
                      background: `${edu.accent}18`,
                      border: `1px solid ${edu.accent}35`,
                      color: edu.accent,
                    }}
                  >
                    <GraduationCap className="w-7 h-7" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    {edu.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-semibold text-blue-400 mt-1">
                    {edu.major}
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {edu.faculty}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{edu.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light pt-2">
                  {edu.description}
                </p>

                {/* Achievements List */}
                {edu.achievements && (
                  <div className="pt-4 border-t border-white/[0.06] space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                      Key Highlights:
                    </span>
                    {edu.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
