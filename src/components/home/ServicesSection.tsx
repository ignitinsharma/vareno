"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const platforms = [
  {
    number: "01",
    name: "Amazon",
    title: "Amazon Growth",
    description:
      "End-to-end Amazon marketplace management — from professional cataloging to data-driven PPC campaigns that maximize ROI.",
    services: ["Product Listing", "Account Management", "Ads Campaign", "SEO Optimization"],
    color: "from-orange-900/20 via-[#0f0f0f] to-[#0f0f0f]",
  },
  {
    number: "02",
    name: "Flipkart",
    title: "Flipkart Ads",
    description:
      "Optimized listings and strategic PLA/PCA advertising. We handle catalog compliance, daily operations, and ad optimization.",
    services: ["Catalog Listing", "Daily Operations", "Ads Campaign", "Stock Sync"],
    color: "from-blue-900/20 via-[#0f0f0f] to-[#0f0f0f]",
  },
  {
    number: "03",
    name: "Myntra",
    title: "Myntra & Fashion",
    description:
      "Get your fashion brand live on India's biggest fashion hub. Style listings, operations, and Myntra AMS advertising.",
    services: ["Style Listing", "Operations", "Ads Campaign", "RTV Handling"],
    color: "from-pink-900/20 via-[#0f0f0f] to-[#0f0f0f]",
  },
  {
    number: "04",
    name: "Ajio",
    title: "Ajio Presence",
    description:
      "Create compliant styles for the Ajio platform. Full operations support including orders, stock updates, and claims.",
    services: ["Style Creation", "Operations", "Ads Campaign", "Size Matrix"],
    color: "from-purple-900/20 via-[#0f0f0f] to-[#0f0f0f]",
  },
  {
    number: "05",
    name: "Nykaa",
    title: "Nykaa Fashion",
    description:
      "High-quality listings for beauty and fashion brands on Nykaa. Manage orders, returns, offers, and advertising.",
    services: ["Listing", "Operations", "Ads Campaign", "Image QC"],
    color: "from-rose-900/20 via-[#0f0f0f] to-[#0f0f0f]",
  },
  {
    number: "06",
    name: "Meesho",
    title: "Meesho Scaling",
    description:
      "Simple and effective listings for Meesho. Manage processing, RTO analysis, stock, and visibility optimization.",
    services: ["Listing", "Operations", "Ads Campaign", "RTO Analysis"],
    color: "from-green-900/20 via-[#0f0f0f] to-[#0f0f0f]",
  },
  {
    number: "07",
    name: "TataCliq",
    title: "TataCliq Premium",
    description:
      "Premium cataloging and daily operations for TataCliq. Sponsored ads and detailed reporting for brand growth.",
    services: ["Catalog Upload", "Daily Operations", "Ads Campaign", "Reporting"],
    color: "from-indigo-900/20 via-[#0f0f0f] to-[#0f0f0f]",
  },
  {
    number: "08",
    name: "JioMart",
    title: "JioMart Listing",
    description:
      "Get listed on Reliance's JioMart. Title optimization, pricing, stock management, and boost ads.",
    services: ["Listing", "Operations", "Ads Campaign", "Keyword Optimization"],
    color: "from-cyan-900/20 via-[#0f0f0f] to-[#0f0f0f]",
  },
  {
    number: "09",
    name: "Shopify",
    title: "D2C with Shopify",
    description:
      "Build your own store with Shopify or WooCommerce. Product uploads, website management, Meta and Google ads.",
    services: ["Product Upload", "Website Management", "Ads Campaign", "Retargeting"],
    color: "from-emerald-900/20 via-[#0f0f0f] to-[#0f0f0f]",
  },
];

function PlatformCard({
  platform,
  index,
}: {
  platform: (typeof platforms)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href="/contact" className="block">
        <div className="relative group cursor-pointer bg-[#161616] border border-white/[0.06] rounded-2xl p-8 transition-all duration-300 hover:border-white/[0.15] hover:bg-[#1e1e1e] hover:-translate-y-1 h-full">
          <div className="flex justify-between items-start mb-6">
            <span className="font-mono text-xs text-[#666666]">{platform.number}</span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
              transition={{ duration: 0.2 }}
              className="text-white text-lg"
            >
              →
            </motion.span>
          </div>

          <h3 className="font-display text-[24px] md:text-[28px] text-white mb-2 leading-tight">
            {platform.title}
          </h3>
          <p className="font-mono text-xs text-[#666666] mb-4 uppercase tracking-wide">
            {platform.name}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-body text-sm text-[#b0b0b0] mb-6 leading-relaxed">
              {platform.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {platform.services.map((service) => (
                <span
                  key={service}
                  className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 text-xs text-[#b0b0b0] font-body"
                >
                  {service}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/[0.06]">
              <p className="font-body text-xs text-white/60 flex items-center gap-1">
                Talk to our team <span>→</span>
              </p>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0f0f0f] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-[40px] md:text-[52px] leading-tight mb-4">
            <span className="text-[#666666]">Comprehensive</span>{" "}
            <span className="text-white">Solutions</span>
          </h2>
          <p className="font-body text-lg text-[#b0b0b0] max-w-2xl">
            We manage the technical complexities so you can focus on building your
            brand across every major Indian marketplace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <PlatformCard key={platform.number} platform={platform} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
