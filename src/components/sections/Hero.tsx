import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import wolfHero from "@/assets/wolf-hero.jpg";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden">
      {/* Wolf backdrop */}
      <div className="absolute inset-0 -z-10">
        <motion.img
          src={wolfHero}
          alt="Vareno wolf"
          width={1920}
          height={1200}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover object-center"
        />
        {/* Vignette + fade to bg */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, transparent 0%, rgba(8,9,12,0.35) 55%, rgba(8,9,12,0.85) 85%, var(--background) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,9,12,0.55) 0%, rgba(8,9,12,0) 30%, rgba(8,9,12,0) 55%, rgba(8,9,12,0.7) 85%, var(--background) 100%)",
          }}
        />
        {/* Left-side dark fade so text reads */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-full md:w-2/3"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,9,12,0.85) 0%, rgba(8,9,12,0.55) 35%, rgba(8,9,12,0) 75%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-6 pb-24 pt-36 md:px-10 md:pt-40">
        {/* Tagline pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
          data-cursor="text"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] shadow-[0_0_10px_var(--accent)]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
            Grow. Scale. Dominate.
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          className="mt-8 font-black uppercase leading-[0.92] tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 11vw, 10rem)" }}
          data-cursor="text"
        >
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
            >
              Grow
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-[color:var(--accent)]"
              style={{
                textShadow:
                  "0 0 40px color-mix(in oklab, var(--accent) 55%, transparent)",
              }}
            >
              Beyond Limits.
            </motion.span>
          </span>
        </h1>

        {/* Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-10 max-w-xl text-base text-white/70 md:text-lg"
        >
          We help brands dominate Amazon, Flipkart, Myntra, Shopify and D2C through
          strategy, creativity, performance marketing and marketplace excellence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor="link"
            className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-7 py-4 text-sm font-bold text-black shadow-[0_0_40px_color-mix(in_oklab,var(--accent)_45%,transparent)] transition hover:shadow-[0_0_60px_color-mix(in_oklab,var(--accent)_75%,transparent)] hover:-translate-y-0.5"
          >
            Start Scaling
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.6} />
          </a>
          <Link
            to="/contact"
            data-cursor="link"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:border-white/40 hover:bg-white/[0.08]"
          >
            Book Free Consultation
          </Link>
        </motion.div>

        {/* Stats row bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-8 md:mt-20"
        >
          {[
            { v: "50+", l: "Brands Scaled" },
            { v: "3x", l: "Avg. YoY Growth" },
            { v: "9+", l: "Marketplaces" },
          ].map((s) => (
            <div key={s.l} data-cursor="text">
              <div className="text-3xl font-bold text-white md:text-4xl">
                {s.v}
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
