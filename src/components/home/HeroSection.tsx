"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function HoverText({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f]">
      <AnimatedBackground />

      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-[11px] text-[#888888] uppercase tracking-[0.3em] mb-6"
        >
          VARENO
        </motion.p>

        <motion.div variants={itemVariants} transition={{ duration: 0.7, delay: 0.25 }}>
          <HoverText className="inline-block cursor-default">
            <h1 className="font-display text-[40px] md:text-[56px] lg:text-[72px] font-black text-white leading-[1.05] mb-6">
              India&apos;s #1 Marketplace Agency
            </h1>
          </HoverText>
        </motion.div>

        <motion.div variants={itemVariants} transition={{ duration: 0.6, delay: 0.4 }}>
          <HoverText className="inline-block cursor-default">
            <p className="font-body text-lg text-[#b0b0b0] max-w-[600px] mx-auto mb-10">
              E-commerce growth experts for Indian marketplaces. Listing, operations,
              and ads — end-to-end marketplace services that scale sales on Amazon,
              Flipkart, and beyond.
            </p>
          </HoverText>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="https://wa.me/919499442106"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center justify-center bg-white text-black rounded-full px-8 py-3.5 text-sm font-medium hover:scale-[1.03] transition-transform duration-200"
          >
            <span className="relative z-10">Get a free quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border border-white text-white rounded-full px-8 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors duration-200"
          >
            Explore services
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
