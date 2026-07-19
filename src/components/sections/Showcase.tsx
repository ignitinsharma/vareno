import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TESTIMONIALS } from "@/lib/site";
import { WolfPhotoBackdrop } from "@/components/site/WolfPhotoBackdrop";
import { RevealHeading } from "@/components/site/RevealHeading";
import wolfPack from "@/assets/wolf-pack.jpg";

export function Showcase() {
  const [active, setActive] = useState(0);
  const cur = TESTIMONIALS[active];
  return (
    <section id="results" className="relative overflow-hidden py-24 md:py-36">
      <WolfPhotoBackdrop src={wolfPack} darken={0.85} tint={0.35} parallax={80} position="center" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="text-label text-[color:var(--accent)]">Results</div>
          <RevealHeading className="heading-xl mt-4 text-4xl md:text-6xl">
            Trusted By Indian Brands
          </RevealHeading>
          <p className="mt-6 text-white/70">
            Real results from real brands scaling on Indian marketplaces.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <ul className="space-y-2">
            {TESTIMONIALS.map((t, i) => (
              <motion.li
                key={t.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  data-cursor="link"
                  className={`relative w-full rounded-lg px-5 py-4 text-left transition-all duration-300 ${
                    active === i
                      ? "bg-white/[0.06] translate-x-2"
                      : "hover:bg-white/[0.03] hover:translate-x-1"
                  }`}
                >
                  <span
                    className="absolute inset-y-3 left-0 w-[2px] origin-top bg-[color:var(--accent)] transition-transform duration-500"
                    style={{
                      transform: active === i ? "scaleY(1)" : "scaleY(0)",
                      boxShadow: active === i ? "0 0 12px var(--accent)" : "none",
                    }}
                  />
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-white/40">{t.num}</span>
                    <div>
                      <div className="text-sm font-bold uppercase tracking-[0.14em]">
                        {t.author}
                      </div>
                      <div className="text-xs text-white/50">{t.role}</div>
                    </div>
                  </div>
                </button>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-surface group relative min-h-[320px] p-8 md:p-12"
          >
            <span
              aria-hidden
              className="absolute left-6 top-2 font-serif text-[10rem] leading-none text-[color:var(--accent)]/20 transition-transform duration-500 group-hover:scale-110 group-hover:text-[color:var(--accent)]/35"
            >
              &ldquo;
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={cur.num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative flex h-full flex-col justify-between gap-8"
              >
                <p className="heading-lg text-2xl leading-tight md:text-4xl" data-cursor="text">
                  "{cur.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--accent)] text-lg font-bold text-[color:var(--primary-foreground)] shadow-[0_0_24px_color-mix(in_oklab,var(--accent)_55%,transparent)]">
                    {cur.author[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-[0.14em]">{cur.author}</div>
                    <div className="text-xs text-white/60">{cur.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
