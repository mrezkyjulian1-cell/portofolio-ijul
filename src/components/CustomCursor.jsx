import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Disable on touch devices
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
      );
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Add hover listeners to clickable elements
    const handleElementHover = () => {
      const clickables = document.querySelectorAll(
        "a, button, input, textarea, select, [role='button'], .clickable"
      );

      const addHover = () => setIsHovered(true);
      const removeHover = () => setIsHovered(false);

      clickables.forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });

      return () => {
        clickables.forEach((el) => {
          el.removeEventListener("mouseenter", addHover);
          el.removeEventListener("mouseleave", removeHover);
        });
      };
    };

    const cleanupHover = handleElementHover();
    const interval = setInterval(handleElementHover, 2000);

    return () => {
      window.removeEventListener("resize", checkTouch);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cleanupHover();
      clearInterval(interval);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Small sharp inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#38bdf8]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer trailing magnetic ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-blue-400/50 backdrop-blur-[0.5px]"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          borderColor: isHovered ? "rgba(96, 165, 250, 0.8)" : "rgba(56, 189, 248, 0.4)",
          backgroundColor: isHovered ? "rgba(44, 103, 237, 0.15)" : "rgba(44, 103, 237, 0.03)",
          boxShadow: isHovered
            ? "0 0 25px rgba(59, 130, 246, 0.45)"
            : "0 0 10px rgba(59, 130, 246, 0.15)",
        }}
        transition={{ type: "spring", damping: 22, stiffness: 220, mass: 0.2 }}
      />
    </>
  );
}
