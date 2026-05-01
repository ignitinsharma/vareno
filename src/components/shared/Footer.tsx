"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const webDevServices = [
  { label: "Full Stack Website Development", href: "/contact" },
  { label: "UI/UX Development", href: "/contact" },
  { label: "Backend Development", href: "/contact" },
  { label: "AI Product Photoshoot Integration", href: "/contact" },
];

const ecommerceServices = [
  { label: "Account Setup on Any Platform", href: "/contact" },
  { label: "Product Listing", href: "/contact" },
  { label: "Shipping Management", href: "/contact" },
  { label: "Order Dispatch Handling", href: "/contact" },
  { label: "Return Management", href: "/contact" },
  { label: "Reconciliation Management", href: "/contact" },
  { label: "Full Account Growth Strategy & Scaling", href: "/contact" },
];

const adsServices = [
  { label: "Meta Ads", href: "/contact" },
  { label: "Google Ads", href: "/contact" },
  { label: "Myntra Ads", href: "/contact" },
  { label: "Amazon Ads", href: "/contact" },
  { label: "Flipkart Ads", href: "/contact" },
  { label: "Other Platform Ads", href: "/contact" },
];

const influencerServices = [
  { label: "Story Promotion", href: "/contact" },
  { label: "Reel Making", href: "/contact" },
  { label: "Collabs", href: "/contact" },
  { label: "YouTube Specific Video Creation", href: "/contact" },
  { label: "AI Photoshoots", href: "/contact" },
  { label: "UGC Ads", href: "/contact" },
  { label: "Shorts Editing as per Brand Needs", href: "/contact" },
  { label: "AI Video Generation for Brand Products", href: "/contact" },
  { label: "AI-based Content Creation", href: "/contact" },
];

const footerLinks = {
  webDev: {
    title: "Web Development",
    links: webDevServices,
  },
  ecommerce: {
    title: "E-commerce",
    links: ecommerceServices,
  },
  ads: {
    title: "Ads Services",
    links: adsServices,
  },
  influencer: {
    title: "Influencer & Content",
    links: influencerServices,
  },
};

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4">
      <p className="font-mono text-[11px] text-[#888888] mb-1">India Time (IST)</p>
      <p className="font-mono text-[13px] text-[#888888]">{time}</p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-4 lg:col-span-1"
          >
            <Link href="/" className="font-display text-xl text-white">
              Vareno
            </Link>
            <p className="font-body text-sm text-[#b0b0b0] mt-2">
              Helping Indian brands grow online with web development, e-commerce, ads & content services.
            </p>
            <LiveClock />
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="mailto:info@vareno.in"
                className="font-mono text-[13px] text-[#888888] hover:text-white transition-colors"
              >
                info@vareno.in
              </a>
              <a
                href="https://wa.me/919499442106"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13px] text-[#888888] hover:text-white transition-colors"
              >
                WhatsApp: +91 9499442106
              </a>
              <p className="font-mono text-[11px] text-[#888888] mt-2">
                India · Serving brands nationwide
              </p>
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            >
              <h4 className="font-body text-sm text-white font-medium mb-4">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-[#888888] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[#888888]">
            © 2026 Vareno Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="font-mono text-xs text-[#888888] hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[#888888]">·</span>
            <Link
              href="/terms"
              className="font-mono text-xs text-[#888888] hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}