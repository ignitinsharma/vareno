import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Split-word reveal — fires on mount using Motion so no IO reliance.
 */
export function RevealHeading({
  children,
  className = "",
  as: As = "h2",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
}) {
  const text = String(children);
  const words = text.split(" ");
  return (
    <As className={className} data-cursor="text">
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pr-[0.28em] align-bottom"
          style={{ paddingBottom: "0.14em" }}
        >
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </As>
  );
}
