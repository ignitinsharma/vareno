import { useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type Props = {
  src: string;
  alt?: string;
  /** 0-1, higher = darker overlay */
  darken?: number;
  /** parallax intensity px */
  parallax?: number;
  /** cyan tint strength 0-1 */
  tint?: number;
  position?: string;
  className?: string;
  eager?: boolean;
};

export function WolfPhotoBackdrop({
  src,
  alt = "",
  darken = 0.72,
  parallax = 80,
  tint = 0.35,
  position = "center",
  className = "",
  eager = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-parallax, parallax]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.05, 1.12]);

  return (
    <div
      ref={ref}
      aria-hidden={alt ? undefined : true}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ zIndex: 0 } as CSSProperties}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        style={{ y, scale, objectPosition: position }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Cyan tint */}
      <div
        className="absolute inset-0"
        style={{
          background: `color-mix(in oklab, var(--accent) ${tint * 100}%, transparent)`,
          mixBlendMode: "color",
          opacity: 0.6,
        }}
      />
      {/* Darken + vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, rgba(8,10,14,${darken * 0.55}) 0%, rgba(8,10,14,${Math.min(darken + 0.15, 1)}) 75%, rgba(8,10,14,1) 100%)`,
        }}
      />
      {/* Top+bottom fade so it blends with adjacent sections */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--background) 0%, transparent 12%, transparent 88%, var(--background) 100%)",
        }}
      />
    </div>
  );
}
