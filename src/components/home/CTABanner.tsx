"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  const headline = "Ready to scale your e-commerce business?";
  const words = headline.split(" ");

  return (
    <section className="bg-[#0f0f0f] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="font-display text-[32px] md:text-[48px] lg:text-[56px] text-white leading-[1.1] mb-6"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-lg text-[#b0b0b0] mb-10 max-w-xl mx-auto"
        >
          Join 50+ brands growing 3x YoY on Amazon and Flipkart with our strategies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/919499442106"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center justify-center bg-white text-black rounded-full px-8 py-3.5 text-sm font-medium hover:scale-[1.03] transition-transform duration-200"
          >
            <span className="relative z-10">Book a Free Audit on WhatsApp</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
