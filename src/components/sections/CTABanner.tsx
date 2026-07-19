import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { WolfPhotoBackdrop } from "@/components/site/WolfPhotoBackdrop";
import { RevealHeading } from "@/components/site/RevealHeading";
import wolfHowl from "@/assets/wolf-howl.jpg";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <WolfPhotoBackdrop src={wolfHowl} darken={0.62} tint={0.3} parallax={140} position="center 35%" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-label text-[color:var(--accent)]"
        >
          Work With Us
        </motion.div>
        <RevealHeading className="heading-xl mx-auto mt-6 max-w-3xl text-4xl drop-shadow-[0_4px_40px_rgba(0,229,255,0.25)] md:text-6xl lg:text-7xl">
          Ready To Scale Your E-Commerce Business?
        </RevealHeading>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-8 max-w-xl text-white/70"
        >
          Join 50+ brands growing 3x YoY on Amazon and Flipkart with our strategies.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          data-cursor="link"
          className="btn-cyan group mt-12 text-base md:text-lg"
          style={{ padding: "1.1rem 2.2rem" }}
        >
          <span className="animate-cta-glow">Book A Free Audit On WhatsApp</span>
          <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.4} />
        </motion.a>
      </div>
    </section>
  );
}
