"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorMode = "default" | "text" | "link" | "hidden";

const MAX_TILT = 6;
const MAX_SHIFT = 6;

function resetMagneticTarget(target: HTMLElement | null) {
  if (!target) return;
  target.style.setProperty("--cursor-rotate-x", "0deg");
  target.style.setProperty("--cursor-rotate-y", "0deg");
  target.style.setProperty("--cursor-shift-x", "0px");
  target.style.setProperty("--cursor-shift-y", "0px");
  target.style.setProperty("--cursor-lift", "0px");
  target.style.setProperty("--cursor-glow-x", "50%");
  target.style.setProperty("--cursor-glow-y", "50%");
}

function updateMagneticTarget(target: HTMLElement, event: PointerEvent) {
  const rect = target.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  const localX = event.clientX - rect.left;
  const localY = event.clientY - rect.top;
  const xRatio = localX / rect.width - 0.5;
  const yRatio = localY / rect.height - 0.5;

  target.style.setProperty("--cursor-rotate-x", `${(-yRatio * MAX_TILT).toFixed(2)}deg`);
  target.style.setProperty("--cursor-rotate-y", `${(xRatio * MAX_TILT).toFixed(2)}deg`);
  target.style.setProperty("--cursor-shift-x", `${(xRatio * MAX_SHIFT).toFixed(2)}px`);
  target.style.setProperty("--cursor-shift-y", `${(yRatio * MAX_SHIFT).toFixed(2)}px`);
  target.style.setProperty("--cursor-lift", "4px");
  target.style.setProperty("--cursor-glow-x", `${Math.round((localX / rect.width) * 100)}%`);
  target.style.setProperty("--cursor-glow-y", `${Math.round((localY / rect.height) * 100)}%`);
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const magneticTargetRef = useRef<HTMLElement | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const orbX = useSpring(cursorX, { stiffness: 420, damping: 32, mass: 0.7 });
  const orbY = useSpring(cursorY, { stiffness: 420, damping: 32, mass: 0.7 });
  const ringX = useSpring(cursorX, { stiffness: 150, damping: 22, mass: 0.9 });
  const ringY = useSpring(cursorY, { stiffness: 150, damping: 22, mass: 0.9 });

  useEffect(() => {
    const canUseCursor =
      window.matchMedia("(pointer: fine)").matches &&
      window.matchMedia("(hover: hover)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setEnabled(canUseCursor);
    document.documentElement.classList.toggle("has-custom-cursor", canUseCursor);

    if (!canUseCursor) {
      return () => {
        document.documentElement.classList.remove("has-custom-cursor");
      };
    }

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setVisible(true);

      if (
        target?.closest(
          "input, textarea, select, option, [contenteditable='true'], [data-cursor='native']"
        )
      ) {
        setMode("hidden");
        resetMagneticTarget(magneticTargetRef.current);
        magneticTargetRef.current = null;
        return;
      }

      const cursorTarget = target?.closest<HTMLElement>("[data-cursor]");
      const nextMode = (cursorTarget?.dataset.cursor as CursorMode | undefined) ?? "default";
      setMode(nextMode === "hidden" ? "hidden" : nextMode);

      const nextMagneticTarget =
        nextMode === "text" ? cursorTarget?.closest<HTMLElement>("[data-cursor='text']") ?? null : null;

      if (magneticTargetRef.current !== nextMagneticTarget) {
        resetMagneticTarget(magneticTargetRef.current);
        magneticTargetRef.current = nextMagneticTarget;
      }

      if (nextMagneticTarget) {
        updateMagneticTarget(nextMagneticTarget, event);
      }
    };

    const handlePointerLeave = () => {
      setVisible(false);
      setMode("default");
      resetMagneticTarget(magneticTargetRef.current);
      magneticTargetRef.current = null;
    };

    const handlePointerDown = () => setPressed(true);
    const handlePointerUp = () => setPressed(false);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      resetMagneticTarget(magneticTargetRef.current);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  const modeScale = mode === "text" ? 1.65 : mode === "link" ? 1.35 : 1;
  const orbScale = pressed ? modeScale * 0.82 : modeScale;
  const ringScale = pressed ? modeScale * 0.95 : mode === "text" ? 2.15 : mode === "link" ? 1.75 : 1;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-12 w-12 rounded-full border border-[#5E0ED7]/45"
        animate={{
          opacity: visible && mode !== "hidden" ? 1 : 0,
          scale: ringScale,
        }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 30px rgba(94, 14, 215, 0.18)",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-5 w-5 rounded-full"
        animate={{
          opacity: visible && mode !== "hidden" ? 1 : 0,
          scale: orbScale,
        }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        style={{
          x: orbX,
          y: orbY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.95), rgba(178,136,255,0.72) 36%, rgba(94,14,215,0.82) 72%)",
          boxShadow:
            "inset -5px -6px 12px rgba(42, 0, 102, 0.35), inset 4px 4px 10px rgba(255,255,255,0.72), 0 10px 32px rgba(94,14,215,0.32)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span className="absolute left-1.5 top-1 h-1.5 w-1.5 rounded-full bg-white/95" />
      </motion.div>
    </>
  );
}
