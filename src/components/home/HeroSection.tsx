"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const videoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

const stats = [
  { value: "50", suffix: "+", accentSuffix: true, label: "Brands\nScaled" },
  { value: "3", suffix: "x", accentSuffix: false, label: "Average Yoy\nGrowth" },
  { value: "9", suffix: "+", accentSuffix: true, label: "Marketplaces" },
];

const headingWords = ["India's #1", "Marketplace", "Agency"];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-white font-body text-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/45" />

      <div className="flex flex-1 items-center justify-end px-5 py-8 sm:px-8 md:px-12 md:py-0">
        <div className="relative z-10 flex w-full items-start justify-between gap-2 text-right sm:w-auto sm:justify-end sm:gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={index + 2}
              className="flex flex-col items-end"
            >
              <div
                data-cursor="text"
                className="cursor-magnetic flex items-start font-semibold leading-none text-black"
                style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)" }}
              >
                <span>{stat.value}</span>
                <span
                  className={`ml-0.5 text-[0.5em] leading-none ${
                    stat.accentSuffix ? "text-[#5E0ED7]" : "text-black"
                  }`}
                >
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-2 whitespace-pre-line text-[9px] font-semibold uppercase leading-tight tracking-widest text-black sm:text-xs md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-6 px-5 pb-8 sm:px-8 md:gap-12 md:px-12 md:pb-12">
        <div className="flex items-center justify-between gap-4">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            data-cursor="text"
            className="max-w-[130px] text-[10px] font-semibold uppercase leading-tight tracking-widest text-black sm:max-w-[160px] sm:text-xs md:max-w-xs md:text-sm"
          >
            E-Commerce Growth
            <br />
            For Indian
            <br />
            Marketplace Brands
          </motion.p>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            href="https://wa.me/919499442106"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            className="inline-flex items-center gap-2 whitespace-nowrap text-base font-semibold uppercase tracking-widest text-[#5E0ED7] sm:text-xl md:text-2xl"
          >
            Get A Free Quote
            <ArrowUpRight size={18} className="sm:h-[22px] sm:w-[22px]" strokeWidth={2.4} />
          </motion.a>
        </div>

        <div className="flex items-end justify-between gap-3 sm:gap-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={7}
            data-cursor="text"
            className="w-[88px] shrink-0 sm:w-[180px] md:w-[280px]"
          >
            <p className="text-left text-[8px] font-semibold uppercase leading-snug tracking-widest text-black sm:text-xs md:text-right md:text-sm">
              E-commerce growth experts for Indian marketplaces. Listing,
              operations, and ads that scale sales on Amazon, Flipkart, and beyond.
            </p>
          </motion.div>

          <h1
            data-cursor="text"
            className="cursor-magnetic max-w-[calc(100vw-8.5rem)] text-right font-semibold uppercase tracking-normal text-black sm:max-w-none"
            aria-label="India's number one marketplace agency"
          >
            {headingWords.map((word, index) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.14,
                    duration: 0.7,
                    ease: easeOut,
                  }}
                  className="block"
                  style={{
                    fontSize: "clamp(1.15rem, 5.8vw, 8rem)",
                    lineHeight: 0.88,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  );
}
