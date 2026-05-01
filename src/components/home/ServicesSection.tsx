"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const serviceCategories = [
  {
    number: "01",
    name: "Web Development",
    title: "Web Development Services",
    description: "End-to-end web solutions — from full stack development to AI-powered product photography integration.",
    services: ["Full Stack Website Development", "UI/UX Development", "Backend Development", "AI Product Photoshoot Integration"],
    color: "from-blue-900/20 via-[#0f0f0f] to-[#0f0f0f]",
  },
  {
    number: "02",
    name: "E-commerce",
    title: "E-commerce Services",
    description: "Complete e-commerce account management — from listing and shipping to returns, reconciliation, and full growth scaling.",
    services: ["Account Setup on Any Platform", "Product Listing", "Shipping Management", "Order Dispatch Handling", "Return Management", "Reconciliation Management", "Full Account Growth Strategy & Scaling"],
    color: "from-green-900/20 via-[#0f0f0f] to-[#0f0f0f]",
  },
  {
    number: "03",
    name: "Ads",
    title: "Ads Services",
    description: "Multi-platform advertising across Meta, Google, Amazon, Flipkart, Myntra, and more.",
    services: ["Meta Ads", "Google Ads", "Myntra Ads", "Amazon Ads", "Flipkart Ads", "Other Platform Ads"],
    color: "from-orange-900/20 via-[#0f0f0f] to-[#0f0f0f]",
  },
  {
    number: "04",
    name: "Influencer & Content",
    title: "Influencer & Content Services",
    description: "AI-powered content creation, influencer collaborations, reels, shorts, and UGC ads for brand growth.",
    services: ["Story Promotion", "Reel Making", "Collabs", "YouTube Specific Video Creation", "AI Photoshoots", "UGC Ads", "Shorts Editing as per Brand Needs", "AI Video Generation for Brand Products", "AI-based Content Creation"],
    color: "from-purple-900/20 via-[#0f0f0f] to-[#0f0f0f]",
  },
];

function ServiceCard({
  category,
  index,
}: {
  category: (typeof serviceCategories)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href="/contact" className="block">
        <div className="relative group cursor-pointer bg-[#161616] border border-white/[0.06] rounded-2xl p-8 transition-all duration-300 hover:border-white/[0.15] hover:bg-[#1e1e1e] hover:-translate-y-1 h-full">
          <div className="flex justify-between items-start mb-6">
            <span className="font-mono text-xs text-[#666666]">{category.number}</span>
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
            {category.title}
          </h3>
          <p className="font-mono text-xs text-[#666666] mb-4 uppercase tracking-wide">
            {category.name}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-body text-sm text-[#b0b0b0] mb-6 leading-relaxed">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.services.map((service) => (
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
            <span className="text-[#666666]">What We</span>{" "}
            <span className="text-white">Do</span>
          </h2>
          <p className="font-body text-lg text-[#b0b0b0] max-w-2xl">
            From building websites to scaling brands with ads and content — we handle every layer of your online business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCategories.map((category, index) => (
            <ServiceCard key={category.number} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
