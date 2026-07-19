import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { WolfPhotoBackdrop } from "@/components/site/WolfPhotoBackdrop";
import { TiltCard } from "@/components/site/TiltCard";
import { RevealHeading } from "@/components/site/RevealHeading";
import wolfProwl from "@/assets/wolf-prowl.jpg";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-36">
      <WolfPhotoBackdrop src={wolfProwl} darken={0.82} tint={0.3} parallax={100} position="right center" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="text-label text-[color:var(--accent)]">What We Do</div>
          <RevealHeading className="heading-xl mt-4 text-4xl md:text-6xl">
            Services Built To Scale Online Business
          </RevealHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 max-w-2xl text-white/70"
          >
            From building websites to scaling brands with ads and content — we handle every layer of your online business.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="group h-full" max={7}>
                <Link
                  to="/contact"
                  data-cursor="link"
                  className="card-surface relative flex h-full flex-col gap-6 overflow-hidden p-8"
                >
                  {/* Cyan edge glow on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      boxShadow:
                        "inset 0 0 60px color-mix(in oklab, var(--accent) 15%, transparent), 0 0 40px color-mix(in oklab, var(--accent) 20%, transparent)",
                    }}
                  />
                  <div className="relative flex items-start justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-white/40">
                      {s.number}
                    </span>
                    <span className="text-label text-[color:var(--accent)]">{s.category}</span>
                  </div>

                  <div className="relative">
                    <h3 className="heading-lg text-2xl transition-transform duration-500 group-hover:-translate-y-1 md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-sm text-white/65">{s.description}</p>
                  </div>

                  <div className="relative mt-auto flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/75 transition group-hover:border-[color:var(--accent)]/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <ArrowUpRight
                    className="absolute right-6 top-6 h-5 w-5 -translate-y-2 translate-x-2 rotate-12 text-[color:var(--accent)] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100"
                    strokeWidth={2.4}
                  />
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
