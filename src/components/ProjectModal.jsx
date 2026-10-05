import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Layers } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl my-8 bg-[#0a0d1d] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Header / Image Preview */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-slate-950 flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1d] via-[#0a0d1d]/40 to-transparent" />

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/10 transition-all duration-200 hover:scale-110"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category Badge */}
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-600/80 text-white border border-blue-400/30 backdrop-blur-md">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1 text-left">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                  {project.overview || project.description}
                </p>
              </div>

              {/* Problem & Solution Cards */}
              {(project.problem || project.solution) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.problem && (
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <div className="flex items-center gap-2 text-amber-400 text-sm font-bold mb-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                        <span>The Challenge</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  )}

                  {project.solution && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold mb-2">
                        <Lightbulb className="w-4 h-4 flex-shrink-0" />
                        <span>The Solution</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Technologies Badges */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.04] text-blue-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-3">
                    Key Features & Functionality
                  </h4>
                  <ul className="space-y-2.5">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.02]"
                  >
                    <span>Visit Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 hover:text-white bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-all hover:scale-[1.02]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Source Code</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="ml-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
