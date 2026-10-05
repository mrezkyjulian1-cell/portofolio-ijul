import { motion } from "framer-motion";
import { Code, Palette, Server, Smartphone, Database, ArrowRight, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Services() {
  const { services } = portfolioData;

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case "code":
        return Code;
      case "palette":
        return Palette;
      case "server":
        return Server;
      case "smartphone":
        return Smartphone;
      case "database":
        return Database;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <Reveal y={40} delay={0.05}>
          <div className="text-center mb-16">
            <div className="section-badge mx-auto mb-3">Solutions & Offerings</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              What I <span className="grad-vi">Can Do For You</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
              Layanan rekayasa software dan desain antarmuka komprehensif untuk mentransformasi ide menjadi produk nyata.
            </p>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = getServiceIcon(srv.icon);
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative p-7 rounded-3xl bg-slate-900/50 border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_-10px_rgba(37,99,235,0.3)] flex flex-col justify-between text-left"
              >
                {/* Radial Glow on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${srv.accent}20 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 space-y-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
                    style={{
                      background: `${srv.accent}15`,
                      border: `1px solid ${srv.accent}35`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: srv.accent }} />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                    {srv.description}
                  </p>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {srv.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
