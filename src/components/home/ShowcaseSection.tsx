"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    number: "01",
    quote: "Our Amazon sales doubled within 3 months of hiring Vareno. Their ad optimization is top-notch.",
    author: "Rahul Sharma",
    role: "Founder",
  },
  {
    number: "02",
    quote: "Finally an agency that understands Flipkart's complex algorithm. Highly recommended for new brands.",
    author: "Priya Mehta",
    role: "Director",
  },
  {
    number: "03",
    quote: "Smooth onboarding on Myntra. They handled everything from cataloging to inventory sync.",
    author: "Vikram Singh",
    role: "CEO",
  },
];

export default function ShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="results" className="bg-[#f7f5fb] py-20 text-black md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col justify-between gap-6 border-t border-black/15 pt-8 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <p
              data-cursor="text"
              className="cursor-magnetic mb-4 text-[10px] font-semibold uppercase tracking-widest text-[#5E0ED7] sm:text-xs"
            >
              Results
            </p>
            <h2
              data-cursor="text"
              className="cursor-magnetic max-w-3xl text-3xl font-semibold uppercase leading-none tracking-wide text-black sm:text-5xl md:text-6xl"
            >
              Trusted By Indian Brands
            </h2>
          </div>
          <p
            data-cursor="text"
            className="cursor-magnetic max-w-md text-xs font-semibold uppercase leading-relaxed tracking-widest text-black md:text-right md:text-sm"
          >
            Real results from real brands scaling on Indian marketplaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col border-t border-black/15">
            {testimonials.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                data-cursor="link"
                className="group relative border-b border-black/15 px-1 py-6 text-left transition-colors hover:bg-white/60"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="flex items-start gap-5"
                >
                  <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-black/45">
                    {item.number}
                  </span>
                  <div>
                    <p
                      data-cursor="text"
                      className="cursor-magnetic text-lg font-semibold uppercase tracking-wide text-black"
                    >
                      {item.author}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-black/55">
                      {item.role}
                    </p>
                  </div>
                </motion.div>
                <motion.span
                  className="absolute bottom-0 left-0 top-0 w-0.5 bg-[#5E0ED7]"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>

          <div className="min-h-[300px] border border-black/15 bg-white p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.number}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full flex-col justify-between gap-10"
              >
                <p
                  data-cursor="text"
                  className="cursor-magnetic text-2xl font-semibold uppercase leading-tight tracking-wide text-black md:text-4xl"
                >
                  {activeTestimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5E0ED7] text-lg font-semibold text-white">
                    {activeTestimonial.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-black">
                      {activeTestimonial.author}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-black/55">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
