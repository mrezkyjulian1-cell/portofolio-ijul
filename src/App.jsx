import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import SplashScreen from "./components/SplashScreen";
import BackgroundEffects from "./components/BackgroundEffects";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolioData } from "./data/portfolioData";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeProjectTab, setActiveProjectTab] = useState(0);

  useEffect(() => {
    document.title = `${portfolioData.personal.name} | Portofolio`;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Smooth scroll hash links
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        lenis.scrollTo(targetElement, { offset: -70 });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // Pause scroll during splash screen
  useEffect(() => {
    if (!window.__lenis) return;
    if (showSplash) {
      window.__lenis.stop();
    } else {
      window.__lenis.start();
    }
  }, [showSplash]);

  const handleSwitchTab = (tabIndex) => {
    setActiveProjectTab(tabIndex);
    const projSection = document.getElementById("projects");
    if (projSection) {
      if (window.__lenis) {
        window.__lenis.scrollTo(projSection, { offset: -70 });
      } else {
        projSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050510] text-slate-100 font-sans selection:bg-blue-600/40 selection:text-cyan-200 overflow-x-hidden">
      {/* Desktop Custom Trailing Magnetic Cursor */}
      <CustomCursor />

      {/* Fullscreen Splash Screen with WebGL & Particle Animation */}
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {/* Ambient Background Glows & Cyber Grid */}
      <BackgroundEffects />

      {/* Main Portfolio Application */}
      {!showSplash && (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col min-h-screen"
        >
          {/* Glassmorphic Navbar */}
          <Navbar />

          {/* Page Sections */}
          <main className="flex-1 flex flex-col">
            <Hero />
            <About onSwitchPortofolioTab={handleSwitchTab} />
            <Skills />
            <Projects
              activeTab={activeProjectTab}
              onTabChange={(tab) => setActiveProjectTab(tab)}
            />
            <Experience />
            <Education />
            <Services />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
