"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="bg-[#0f0f0f] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-[40px] md:text-[52px] leading-tight mb-4">
            <span className="text-[#666666]">Trusted by</span>{" "}
            <span className="text-white">Indian Brands</span>
          </h2>
          <p className="font-body text-lg text-[#b0b0b0] max-w-2xl">
            Real results from real brands scaling on Indian marketplaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col gap-0">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group relative py-6 px-4 cursor-pointer border-b border-white/[0.06] transition-colors duration-200 ${
                  activeIndex === index ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-[#666666] mt-1">
                    {item.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3
                        className={`font-body text-base transition-colors duration-200 ${
                          activeIndex === index ? "text-white" : "text-[#b0b0b0] group-hover:text-white"
                        }`}
                      >
                        {item.author}
                      </h3>
                      {activeIndex === index && (
                        <motion.div
                          layoutId="activeTestimonial"
                          className="w-1.5 h-1.5 rounded-full bg-white"
                        />
                      )}
                    </div>
                    <p className="font-mono text-xs text-[#666666]">{item.role}</p>
                  </div>
                </div>
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-white"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ originY: 0.5 }}
                />
              </motion.div>
            ))}
          </div>

          <div className="relative min-h-[300px] lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.number}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="h-full rounded-2xl p-8 md:p-10 flex flex-col justify-between bg-[#161616] border border-white/[0.06]"
              >
                <div>
                  <svg className="w-8 h-8 text-[#666666] mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="font-display text-xl md:text-2xl text-white leading-relaxed mb-8">
                    {activeTestimonial.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="font-display text-lg text-white">
                      {activeTestimonial.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-white font-medium">{activeTestimonial.author}</p>
                    <p className="font-mono text-xs text-[#666666]">{activeTestimonial.role}</p>
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
