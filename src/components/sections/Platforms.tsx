import { motion } from "motion/react";
import { PLATFORMS } from "@/lib/site";
import { RevealHeading } from "@/components/site/RevealHeading";

export function Platforms() {
  const doubled = [...PLATFORMS, ...PLATFORMS];
  return (
    <section id="platforms" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, color-mix(in oklab, var(--accent) 8%, transparent), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 max-w-3xl">
          <div className="text-label text-[color:var(--accent)]">All Platforms</div>
          <RevealHeading className="heading-xl mt-4 text-4xl md:text-6xl">
            Every Platform That Matters In India
          </RevealHeading>
        </div>
      </div>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <ul className="animate-ticker flex w-max gap-4 hover:[animation-play-state:paused]">
          {doubled.map((p, i) => (
            <motion.li
              key={`${p}-${i}`}
              whileHover={{ y: -3 }}
              className="pill-sweep rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70 transition"
              data-cursor="link"
            >
              {p}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
