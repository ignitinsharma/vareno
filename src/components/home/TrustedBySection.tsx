"use client";

import { motion } from "framer-motion";

const brands = [
  "Amazon",
  "Flipkart",
  "Myntra",
  "Ajio",
  "Nykaa",
  "Meesho",
  "TataCliq",
  "JioMart",
  "Shopify",
  "WooCommerce",
];

export default function TrustedBySection() {
  return (
    <section id="platforms" className="overflow-hidden bg-white py-20 text-black md:py-28">
      <div className="mx-auto mb-12 max-w-6xl px-5 text-center sm:px-8 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          data-cursor="text"
          className="cursor-magnetic mb-4 text-[10px] font-semibold uppercase tracking-widest text-[#5E0ED7] sm:text-xs"
        >
          All Services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          data-cursor="text"
          className="cursor-magnetic mx-auto max-w-4xl text-3xl font-semibold uppercase leading-none tracking-wide text-black sm:text-5xl md:text-6xl"
        >
          Every Platform That Matters In India
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div
          className="flex"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div className="flex animate-ticker hover:[animation-play-state:paused]">
            {[...brands, ...brands].map((brand, index) => (
              <div key={`${brand}-${index}`} className="flex-shrink-0 px-2">
                <span
                  data-cursor="text"
                  className="cursor-magnetic inline-flex items-center border border-black/15 bg-white px-5 py-2 text-sm font-semibold uppercase tracking-widest text-black transition-colors hover:border-[#5E0ED7] hover:text-[#5E0ED7]"
                >
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
