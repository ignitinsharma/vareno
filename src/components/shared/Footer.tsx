"use client";

import { useEffect, useState } from "react";
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

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61584142181677",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vareno.in",
  },
];

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook") {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current text-[15px] font-semibold leading-none">
        f
      </span>
    );
  }

  return (
    <span className="relative flex h-5 w-5 items-center justify-center rounded-[6px] border border-current">
      <span className="h-2 w-2 rounded-full border border-current" />
      <span className="absolute right-[4px] top-[4px] h-1 w-1 rounded-full bg-current" />
    </span>
  );
}

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
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-black/50">
        India Time (IST)
      </p>
      <p className="text-xs font-semibold uppercase tracking-widest text-black/65">
        {time}
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-black/15 bg-white text-black">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:px-12 md:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-4 lg:col-span-1"
          >
            <Link
              href="/"
              data-cursor="text"
              className="cursor-magnetic text-xl font-semibold uppercase tracking-widest text-black"
            >
              Vareno
            </Link>
            <p
              data-cursor="text"
              className="cursor-magnetic mt-3 text-xs font-semibold uppercase leading-relaxed tracking-widest text-black/70"
            >
              Helping Indian brands grow online with web development, e-commerce, ads & content services.
            </p>
            <LiveClock />
            <div className="mt-5 flex flex-col gap-2">
              <a
                href="mailto:info@vareno.in"
                data-cursor="link"
                className="text-xs font-semibold uppercase tracking-widest text-black/65 transition-colors hover:text-[#5E0ED7]"
              >
                info@vareno.in
              </a>
              <a
                href="https://wa.me/919499442106"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="text-xs font-semibold uppercase tracking-widest text-black/65 transition-colors hover:text-[#5E0ED7]"
              >
                WhatsApp: +91 9499442106
              </a>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-black/50">
                India · Serving Brands Nationwide
              </p>
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.08 }}
            >
              <h4
                data-cursor="text"
                className="cursor-magnetic mb-4 text-sm font-semibold uppercase tracking-widest text-black"
              >
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      data-cursor="link"
                      className="text-xs font-semibold uppercase leading-relaxed tracking-widest text-black/60 transition-colors hover:text-[#5E0ED7]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-black/10 pt-8 sm:flex-row">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/55">
            © 2026 Vareno Solutions. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                data-cursor="link"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-black/60 transition-colors hover:text-[#5E0ED7]"
              >
                <SocialIcon label={link.label} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              data-cursor="link"
              className="text-xs font-semibold uppercase tracking-widest text-black/55 transition-colors hover:text-[#5E0ED7]"
            >
              Privacy Policy
            </Link>
            <span className="text-black/35">·</span>
            <Link
              href="/terms"
              data-cursor="link"
              className="text-xs font-semibold uppercase tracking-widest text-black/55 transition-colors hover:text-[#5E0ED7]"
            >
              Terms Of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
