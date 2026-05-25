"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-[#f7f5fb] py-20 text-black md:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          data-cursor="text"
          className="cursor-magnetic mb-5 text-[10px] font-semibold uppercase tracking-widest text-[#5E0ED7] sm:text-xs"
        >
          Work With Us
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          data-cursor="text"
          className="cursor-magnetic text-3xl font-semibold uppercase leading-none tracking-wide text-black sm:text-5xl md:text-7xl"
        >
          Ready To Scale Your E-Commerce Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          data-cursor="text"
          className="cursor-magnetic mx-auto mt-6 max-w-xl text-xs font-semibold uppercase leading-relaxed tracking-widest text-black sm:text-sm"
        >
          Join 50+ brands growing 3x YoY on Amazon and Flipkart with our strategies.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          href="https://wa.me/919499442106"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="link"
          className="mt-10 inline-flex items-center gap-2 text-base font-semibold uppercase tracking-widest text-[#5E0ED7] sm:text-xl"
        >
          Book A Free Audit On WhatsApp
          <ArrowUpRight size={22} strokeWidth={2.4} />
        </motion.a>
      </div>
    </section>
  );
}
