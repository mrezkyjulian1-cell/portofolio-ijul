import { motion } from "framer-motion";

/**
 * Reusable Reveal on Scroll component.
 * Causes elements to smoothly float up and fade in as user scrolls down the page.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 40,
  duration = 0.7,
  viewportMargin = "-50px",
  once = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
