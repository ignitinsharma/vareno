import { motion } from "motion/react";

export function SectionDivider() {
  return (
    <div className="relative mx-auto max-w-7xl px-6 md:px-10">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        className="h-px w-full"
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, color-mix(in oklab, var(--accent) 55%, transparent) 30%, color-mix(in oklab, var(--accent) 70%, transparent) 50%, color-mix(in oklab, var(--accent) 55%, transparent) 70%, transparent)",
            boxShadow: "0 0 20px color-mix(in oklab, var(--accent) 35%, transparent)",
          }}
        />
      </motion.div>
    </div>
  );
}
