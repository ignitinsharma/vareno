"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ShowcaseSection from "@/components/home/ShowcaseSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import CTABanner from "@/components/home/CTABanner";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />
      <ServicesSection />
      <ShowcaseSection />
      <TrustedBySection />
      <CTABanner />
      <Footer />
    </motion.main>
  );
}
