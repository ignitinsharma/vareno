"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = {
  services: {
    title: "Services",
    links: [
      { label: "Amazon Growth", href: "/contact" },
      { label: "Flipkart Ads", href: "/contact" },
      { label: "Account Management", href: "/contact" },
      { label: "Listing Services", href: "/contact" },
    ],
  },
  platforms: {
    title: "Platforms",
    links: [
      { label: "Amazon", href: "/contact" },
      { label: "Flipkart", href: "/contact" },
      { label: "Myntra", href: "/contact" },
      { label: "Ajio", href: "/contact" },
      { label: "Nykaa", href: "/contact" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Contact Us", href: "/contact" },
    ],
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
              Helping Indian brands scale on Amazon, Flipkart, Myntra, and beyond.
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
                WhatsApp: +91 94994 42106
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
