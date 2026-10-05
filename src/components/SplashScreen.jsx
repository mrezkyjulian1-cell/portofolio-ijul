import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const { personal } = portfolioData;

  const handleFinish = useCallback(() => {
    if (onComplete) onComplete();
  }, [onComplete]);

  // Clean, fast, and smooth progress count (approx 1.2s total)
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 3;
      const val = Math.min(100, current);
      setProgress(val);

      if (val >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          handleFinish();
        }, 350);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [handleFinish]);

  // Quick escape with ESC, Space, Enter, or click anywhere
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleFinish]);

  return (
    <motion.div
      key="splash-screen"
      onClick={handleFinish}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#03030a] text-white overflow-hidden select-none cursor-pointer"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -15,
        filter: "blur(8px)",
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
      }}
    >
      {/* Soft, luxurious ambient radial glow in the center */}
      <div className="absolute w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-tr from-blue-600/10 via-indigo-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Subtle fine vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,3,10,0.85)_100%)] pointer-events-none" />

      {/* Main Luxury Centerpiece */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Minimalist Monogram Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-7"
        >
          {/* Subtle outer halo */}
          <div className="absolute -inset-2 rounded-2xl bg-blue-500/10 blur-xl opacity-60 pointer-events-none" />

          {/* Frosted Glass Emblem */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Gentle metallic light sweep */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
              style={{ animation: "shine 3.5s ease-in-out infinite" }}
            />
            <span className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-slate-100">
              RJ
            </span>
          </div>
        </motion.div>

        {/* Elegant Typography */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 mb-8"
        >
          <h1 className="text-sm sm:text-base font-semibold tracking-[0.3em] uppercase text-white font-sans">
            {personal.name}
          </h1>
          <p className="text-[11px] sm:text-xs tracking-[0.25em] text-slate-400 font-mono uppercase">
            Portfolio &bull; 2026
          </p>
        </motion.div>

        {/* Hairline Minimalist Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-48 sm:w-56"
        >
          <div className="w-full h-[1.5px] bg-white/[0.08] rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-200"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mt-3 tracking-widest uppercase">
            <span>Loading</span>
            <span className="text-slate-400 font-semibold">{progress}%</span>
          </div>
        </motion.div>
      </div>

      {/* Discreet skip hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute bottom-8 text-[11px] font-mono text-slate-600 tracking-wider"
      >
        <span>Press ESC to skip</span>
      </motion.div>
    </motion.div>
  );
}
