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
        className="absolute inset-0 h-full w-full object-cover object-center lg:object-left"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/45" />

      <div className="flex flex-[0.9] items-center justify-center px-5 pb-4 pt-28 sm:px-8 lg:flex-1 lg:justify-end lg:px-12 lg:py-0">
        <div className="relative z-10 grid w-full max-w-[300px] grid-cols-3 items-start gap-2 text-center sm:max-w-[360px] sm:gap-3 lg:flex lg:w-auto lg:max-w-none lg:justify-end lg:gap-10 lg:text-right">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={index + 2}
              className="flex flex-col items-center lg:items-end"
            >
              <div
                data-cursor="text"
                className="cursor-magnetic flex items-start font-semibold leading-none text-black"
                style={{ fontSize: "clamp(1.3rem, 6.5vw, 3.5rem)" }}
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
              <p className="mt-2 whitespace-pre-line text-[7px] font-semibold uppercase leading-tight tracking-widest text-black sm:text-xs lg:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-7 px-5 pb-8 text-center sm:px-8 lg:items-stretch lg:gap-12 lg:px-12 lg:pb-12 lg:text-left">
        <div className="flex flex-col items-center justify-between gap-5 lg:flex-row lg:gap-4">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            data-cursor="text"
            className="max-w-[240px] text-[10px] font-semibold uppercase leading-tight tracking-widest text-black sm:text-xs lg:max-w-xs lg:text-sm"
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
            className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-[#5E0ED7] sm:text-xl lg:text-2xl"
          >
            Get A Free Quote
            <ArrowUpRight size={18} className="sm:h-[22px] sm:w-[22px]" strokeWidth={2.4} />
          </motion.a>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-end lg:gap-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={7}
            data-cursor="text"
            className="w-full max-w-[280px] shrink-0 lg:w-[280px]"
          >
            <p className="text-center text-[10px] font-semibold uppercase leading-snug tracking-widest text-black sm:text-xs lg:text-right lg:text-sm">
              E-commerce growth experts for Indian marketplaces. Listing,
              operations, and ads that scale sales on Amazon, Flipkart, and beyond.
            </p>
          </motion.div>

          <h1
            data-cursor="text"
            className="cursor-magnetic w-full max-w-full overflow-hidden text-center font-semibold uppercase tracking-normal text-black lg:text-right"
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
                    fontSize: "clamp(1.3rem, 7vw, 8rem)",
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
