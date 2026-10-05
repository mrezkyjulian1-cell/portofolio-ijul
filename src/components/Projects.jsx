import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Award, 
  Trophy, 
  Boxes, 
  ExternalLink, 
  ArrowRight, 
  Maximize2, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Sparkles
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";

export default function Projects({ activeTab = 0, onTabChange }) {
  const { projects, certificates } = portfolioData;

  // Tabs: 0 = Projects, 1 = Certificates, 2 = Awards, 3 = Tech Stack
  const [tab, setTab] = useState(activeTab);
  const [projectCategory, setProjectCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [previewCertificate, setPreviewCertificate] = useState(null);

  const mainTabs = [
    { id: 0, label: "Projects", icon: Code2 },
    { id: 1, label: "Certificates", icon: Award },
    { id: 2, label: "Awards", icon: Trophy },
    { id: 3, label: "Tech Stack", icon: Boxes },
  ];

  const projectCategories = ["All", "Logistics", "AI", "Web"];

  // Filter projects by category
  const filteredProjects = projects.filter((p) => {
    if (projectCategory === "All") return true;
    return p.category.toLowerCase() === projectCategory.toLowerCase();
  });

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

  // Certificates categorized
  const certItems = certificates.filter((c) => c.category === "keahlian");
  const awardItems = certificates.filter((c) => c.category === "prestasi");

  const techStackList = [
    { name: "React.js", category: "Frontend", color: "#61DAFB" },
    { name: "Tailwind CSS", category: "Styling", color: "#38BDF8" },
    { name: "JavaScript", category: "Language", color: "#F7DF1E" },
    { name: "TypeScript", category: "Language", color: "#3178C6" },
    { name: "Next.js", category: "Framework", color: "#FFFFFF" },
    { name: "Node.js", category: "Runtime", color: "#339933" },
    { name: "PHP / Laravel", category: "Backend", color: "#FF2D20" },
    { name: "MySQL", category: "Database", color: "#4479A1" },
    { name: "Supabase", category: "BaaS", color: "#3ECF8E" },
    { name: "Figma", category: "Design", color: "#F24E1E" },
    { name: "Git & GitHub", category: "VCS", color: "#F05032" },
    { name: "Vite", category: "Build Tool", color: "#646CFF" },
  ];

  const handleTabSelect = (idx) => {
    setTab(idx);
    if (onTabChange) onTabChange(idx);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div id="Portofolio" className="absolute top-0 pointer-events-none" />
      <div id="portfolio" className="absolute top-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <Reveal y={40} delay={0.05}>
          <div className="text-center mb-12">
            <div className="section-badge mx-auto mb-3">Portfolio & Showcase</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Featured <span className="grad-vi">Works & Honors</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
              Kumpulan proyek pilihan, bukti keahlian bersertifikat, dan penghargaan kompetisi.
            </p>
          </div>
        </Reveal>

        {/* Reference Website Main Tab Navigation Bar */}
        <Reveal y={30} delay={0.12}>
          <div className="flex rounded-2xl p-1.5 mb-10 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md max-w-2xl mx-auto shadow-inner">
            {mainTabs.map((t) => {
              const Icon = t.icon;
              const isActive = tab === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleTabSelect(t.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600/30 text-white border border-blue-500/40 shadow-[0_0_20px_rgba(37,99,235,0.3)] font-bold"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-blue-300" : "text-slate-400"}`} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* TAB 0: PROJECTS */}
        {tab === 0 && (
          <div className="space-y-8">
            {/* Category Filter Pills */}
            <Reveal y={25} delay={0.15}>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {projectCategories.map((cat) => {
                  const isActive = projectCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setProjectCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                        isActive
                          ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                          : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06] hover:bg-white/[0.06]"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {displayedProjects.map((proj, idx) => (
                <motion.div
                  layout
                  key={proj.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: (idx % 2) * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="group relative rounded-2xl overflow-hidden bg-slate-900/50 border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.25)] flex flex-col justify-between"
                >
                  {/* Image Preview with Hover Zoom */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                    {/* Category Tag Badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-black/60 backdrop-blur-md text-blue-300 border border-white/10">
                      {proj.category}
                    </span>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1">
                        {proj.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed line-clamp-2">
                        {proj.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                      {proj.technologies.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-400">
                          +{proj.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons Footer */}
                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                      {proj.liveUrl ? (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-xs text-slate-500 font-mono">In Progress</span>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedProject(proj)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/[0.05] hover:bg-blue-600 text-white transition-all duration-200 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Toggle See More Button if projects count exceeds 6 */}
            {filteredProjects.length > 6 && (
              <div className="flex justify-center pt-4">
                <button
                  type="button"
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs sm:text-sm font-semibold text-slate-200 transition-all"
                >
                  <span>{showAllProjects ? "Show Less" : "Explore All Projects"}</span>
                  {showAllProjects ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 1: CERTIFICATES */}
        {tab === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certItems.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setPreviewCertificate(cert)}
                className="group relative rounded-2xl overflow-hidden bg-slate-900/50 border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                      <span>View Full Certificate</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 text-left">
                  <span className="text-[11px] font-mono text-blue-400 font-semibold uppercase">
                    {cert.issuer}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-400 mt-3 pt-3 border-t border-white/[0.06]">
                    <span>{cert.date}</span>
                    <span className="text-cyan-400 font-mono">Verified Credential</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* TAB 2: AWARDS */}
        {tab === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardItems.map((award, idx) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setPreviewCertificate(award)}
                className="group relative rounded-2xl overflow-hidden bg-slate-900/50 border border-white/[0.08] hover:border-amber-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <img
                    src={award.image}
                    alt={award.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-semibold shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                      <span>View Award</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 text-left">
                  <span className="text-[11px] font-mono text-amber-400 font-semibold uppercase flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5" />
                    {award.issuer}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                    {award.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-400 mt-3 pt-3 border-t border-white/[0.06]">
                    <span>{award.date}</span>
                    <span className="text-amber-400 font-mono">Competition Winner</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* TAB 3: TECH STACK GRID */}
        {tab === 3 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStackList.map((t) => (
              <div
                key={t.name}
                className="group p-5 rounded-2xl bg-slate-900/50 border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-md flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] text-center cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm font-mono shadow-sm group-hover:scale-110 transition-transform"
                  style={{
                    background: `${t.color}15`,
                    border: `1px solid ${t.color}40`,
                    color: t.color,
                  }}
                >
                  {t.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                    {t.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      {/* Full View Certificate Modal */}
      <AnimatePresence>
        {previewCertificate && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setPreviewCertificate(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
              aria-label="Close certificate preview"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            >
              <img
                src={previewCertificate.image}
                alt={previewCertificate.title}
                className="w-full h-full object-contain max-h-[80vh] rounded-xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
