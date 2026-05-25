"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const serviceCategories = [
  {
    number: "01",
    name: "Web Development",
    title: "Web Development Services",
    description: "End-to-end web solutions — from full stack development to AI-powered product photography integration.",
    services: ["Full Stack Website Development", "UI/UX Development", "Backend Development", "AI Product Photoshoot Integration"],
  },
  {
    number: "02",
    name: "E-commerce",
    title: "E-commerce Services",
    description: "Complete e-commerce account management — from listing and shipping to returns, reconciliation, and full growth scaling.",
    services: ["Account Setup on Any Platform", "Product Listing", "Shipping Management", "Order Dispatch Handling", "Return Management", "Reconciliation Management", "Full Account Growth Strategy & Scaling"],
  },
  {
    number: "03",
    name: "Ads",
    title: "Ads Services",
    description: "Multi-platform advertising across Meta, Google, Amazon, Flipkart, Myntra, and more.",
    services: ["Meta Ads", "Google Ads", "Myntra Ads", "Amazon Ads", "Flipkart Ads", "Other Platform Ads"],
  },
  {
    number: "04",
    name: "Influencer & Content",
    title: "Influencer & Content Services",
    description: "AI-powered content creation, influencer collaborations, reels, shorts, and UGC ads for brand growth.",
    services: ["Story Promotion", "Reel Making", "Collabs", "YouTube Specific Video Creation", "AI Photoshoots", "UGC Ads", "Shorts Editing as per Brand Needs", "AI Video Generation for Brand Products", "AI-based Content Creation"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 text-black md:py-28">
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
              What We Do
            </p>
            <h2
              data-cursor="text"
              className="cursor-magnetic max-w-3xl text-3xl font-semibold uppercase leading-none tracking-wide text-black sm:text-5xl md:text-6xl"
            >
              Services Built To Scale Online Business
            </h2>
          </div>
          <p
            data-cursor="text"
            className="cursor-magnetic max-w-md text-xs font-semibold uppercase leading-relaxed tracking-widest text-black md:text-right md:text-sm"
          >
            From building websites to scaling brands with ads and content — we handle every layer of your online business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href="/contact"
                data-cursor="link"
                className="group flex h-full flex-col justify-between border border-black/15 bg-white p-5 transition-colors hover:border-[#5E0ED7] sm:p-6 md:p-8"
              >
                <div>
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-black/50">
                      {category.number}
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-[#5E0ED7] opacity-0 transition-opacity group-hover:opacity-100"
                      strokeWidth={2.4}
                    />
                  </div>
                  <p
                    data-cursor="text"
                    className="cursor-magnetic mb-3 text-[10px] font-semibold uppercase tracking-widest text-[#5E0ED7] sm:text-xs"
                  >
                    {category.name}
                  </p>
                  <h3
                    data-cursor="text"
                    className="cursor-magnetic mb-4 text-2xl font-semibold uppercase leading-tight tracking-wide text-black md:text-3xl"
                  >
                    {category.title}
                  </h3>
                  <p className="mb-6 text-xs font-semibold uppercase leading-relaxed tracking-widest text-black/70 sm:text-sm">
                    {category.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.services.map((service) => (
                    <span
                      key={service}
                      className="border border-black/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-black sm:text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
