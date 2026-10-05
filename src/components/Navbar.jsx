import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", url: "#Home" },
  { name: "About", url: "#About" },
  { name: "Portfolio", url: "#Portofolio" },
  { name: "Contact", url: "#Contact" }
];

export default function Navbar({ defaultActive = "Home" }) {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(defaultActive);
  const isClickingScroll = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickingScroll.current) return;

      const sectionMappings = [
        { id: "Home", selector: "#Home, #home" },
        { id: "About", selector: "#About, #about" },
        { id: "Portfolio", selector: "#Portofolio, #projects, #portfolio" },
        { id: "Contact", selector: "#Contact, #contact" }
      ];

      const sections = sectionMappings
        .map((m) => {
          const el = document.querySelector(m.selector);
          return el
            ? {
                id: m.id,
                offset: el.offsetTop - 350,
                height: el.offsetHeight
              }
            : null;
        })
        .filter(Boolean);

      const scrollPos = window.scrollY;

      // Special check if near bottom of page -> activate Contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActive("Contact");
        return;
      }

      const current = sections.find(
        (s) => scrollPos >= s.offset && scrollPos < s.offset + s.height
      );
      if (current) {
        setActive(current.id);
      } else if (scrollPos < 200) {
        setActive("Home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, url, name) => {
    e.preventDefault();
    const selectors = {
      "#Home": "#Home, #home",
      "#About": "#About, #about",
      "#Portofolio": "#Portofolio, #projects, #portfolio",
      "#Contact": "#Contact, #contact"
    };

    const targetEl = document.querySelector(selectors[url] || url);
    if (targetEl) {
      isClickingScroll.current = true;
      setActive(name);
      if (window.__lenis) {
        window.__lenis.scrollTo(targetEl, { offset: -70 });
      } else {
        const topPos = targetEl.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: Math.max(0, topPos),
          behavior: "smooth"
        });
      }
      setTimeout(() => {
        isClickingScroll.current = false;
      }, 1000);
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-3 md:top-5 left-0 right-0 z-[9999] pointer-events-none">
      <div className="flex justify-center pt-6">
        <motion.div
          className="flex items-center gap-2 sm:gap-3 bg-[#1e293b]/50 border border-white/10 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg relative pointer-events-auto"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {navItems.map((item) => {
            const isActive = active === item.name;
            const isHovered = hovered === item.name;

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={(e) => handleClick(e, item.url, item.name)}
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered(null)}
                className={`relative cursor-pointer text-xs md:text-sm font-semibold px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 text-white/70 hover:text-white ${
                  isActive ? "text-white" : ""
                }`}
              >
                {/* Active Glowing Layer */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.03, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="absolute inset-0 bg-blue-500/25 rounded-full blur-md" />
                    <div className="absolute inset-[-4px] bg-blue-500/20 rounded-full blur-xl" />
                    <div className="absolute inset-[-8px] bg-blue-500/15 rounded-full blur-2xl" />
                    <div className="absolute inset-[-12px] bg-blue-500/5 rounded-full blur-3xl" />
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0"
                      style={{ animation: "shine 3s ease-in-out infinite" }}
                    />
                  </motion.div>
                )}

                {/* Tab Label */}
                <motion.span
                  className="relative z-10 select-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>

                {/* Hover Background for Inactive Tab */}
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    />
                  )}
                </AnimatePresence>

                {/* Anime Mascot Head Indicator over Active Tab */}
                {isActive && (
                  <motion.div
                    layoutId="anime-mascot"
                    className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="relative w-12 h-12">
                      {/* Mascot Head */}
                      <motion.div
                        className="absolute w-10 h-10 bg-white rounded-full left-1/2 -translate-x-1/2 shadow-md"
                        animate={
                          isHovered
                            ? {
                                scale: [1, 1.1, 1],
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.5, ease: "easeInOut" }
                              }
                            : {
                                y: [0, -3, 0],
                                transition: {
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }
                              }
                        }
                      >
                        {/* Left eye */}
                        <motion.div
                          className="absolute w-2 h-2 bg-black rounded-full"
                          animate={
                            isHovered
                              ? {
                                  scaleY: [1, 0.2, 1],
                                  transition: { duration: 0.2, times: [0, 0.5, 1] }
                                }
                              : {}
                          }
                          style={{ left: "25%", top: "40%" }}
                        />
                        {/* Right eye */}
                        <motion.div
                          className="absolute w-2 h-2 bg-black rounded-full"
                          animate={
                            isHovered
                              ? {
                                  scaleY: [1, 0.2, 1],
                                  transition: { duration: 0.2, times: [0, 0.5, 1] }
                                }
                              : {}
                          }
                          style={{ right: "25%", top: "40%" }}
                        />

                        {/* Left blush */}
                        <motion.div
                          className="absolute w-2 h-1.5 bg-pink-300 rounded-full"
                          animate={{ opacity: isHovered ? 0.8 : 0.6 }}
                          style={{ left: "15%", top: "55%" }}
                        />
                        {/* Right blush */}
                        <motion.div
                          className="absolute w-2 h-1.5 bg-pink-300 rounded-full"
                          animate={{ opacity: isHovered ? 0.8 : 0.6 }}
                          style={{ right: "15%", top: "55%" }}
                        />

                        {/* Cute smile */}
                        <motion.div
                          className="absolute w-4 h-2 border-b-2 border-black rounded-full"
                          animate={
                            isHovered
                              ? { scaleY: 1.5, y: -1 }
                              : { scaleY: 1, y: 0 }
                          }
                          style={{ left: "30%", top: "60%" }}
                        />

                        {/* Sparkles on hover */}
                        <AnimatePresence>
                          {isHovered && (
                            <>
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                className="absolute -top-1 -right-1 w-2 h-2 text-yellow-300 select-none text-[10px]"
                              >
                                ✨
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ delay: 0.1 }}
                                className="absolute -top-2 left-0 w-2 h-2 text-yellow-300 select-none text-[10px]"
                              >
                                ✨
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {/* Mascot Arrow Pointer */}
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-4 h-4 -translate-x-1/2"
                        animate={
                          isHovered
                            ? {
                                y: [0, -4, 0],
                                transition: {
                                  duration: 0.3,
                                  repeat: Infinity,
                                  repeatType: "reverse"
                                }
                              }
                            : {
                                y: [0, 2, 0],
                                transition: {
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 0.5
                                }
                              }
                        }
                      >
                        <div className="w-full h-full bg-white rotate-45 transform origin-center shadow-sm" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
