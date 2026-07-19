import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type Mode = "default" | "link" | "text" | "hidden";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("default");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const orbX = useSpring(x, { stiffness: 500, damping: 34, mass: 0.6 });
  const orbY = useSpring(y, { stiffness: 500, damping: 34, mass: 0.6 });
  const ringX = useSpring(x, { stiffness: 160, damping: 22, mass: 0.9 });
  const ringY = useSpring(y, { stiffness: 160, damping: 22, mass: 0.9 });
  const raf = useRef(0);

  useEffect(() => {
    const fine =
      window.matchMedia("(pointer: fine)").matches &&
      window.matchMedia("(hover: hover)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
      });
      const t = e.target as HTMLElement | null;
      if (!t) return setMode("default");
      const el = t.closest<HTMLElement>("[data-cursor]");
      const attr = el?.dataset.cursor;
      if (attr === "native") setMode("hidden");
      else if (attr === "link") setMode("link");
      else if (attr === "text") setMode("text");
      else if (
        t.closest("a, button, [role='button'], input, textarea, select, label")
      )
        setMode("link");
      else setMode("default");
    };
    const leave = () => setMode("hidden");
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(raf.current);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  const scaleOrb =
    mode === "text" ? 1.8 : mode === "link" ? 1.4 : mode === "hidden" ? 0 : 1;
  const scaleRing =
    mode === "text" ? 2.4 : mode === "link" ? 1.9 : mode === "hidden" ? 0 : 1;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ scale: scaleRing, opacity: mode === "hidden" ? 0 : 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="h-12 w-12 rounded-full border border-[color:var(--accent)]/50"
          style={{ boxShadow: "0 0 30px color-mix(in oklab, var(--accent) 22%, transparent)" }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: orbX, y: orbY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ scale: scaleOrb, opacity: mode === "hidden" ? 0 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 26 }}
          className="h-5 w-5 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--accent) 35%, white), var(--accent) 55%, color-mix(in oklab, var(--accent) 60%, black) 100%)",
            boxShadow:
              "0 0 20px color-mix(in oklab, var(--accent) 65%, transparent), inset 0 0 6px rgba(255,255,255,0.4)",
          }}
        />
      </motion.div>
    </>
  );
}
