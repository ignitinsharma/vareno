"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const webDevServices = [
  { title: "Full Stack Website Development", href: "/contact" },
  { title: "UI/UX Development", href: "/contact" },
  { title: "Backend Development", href: "/contact" },
  { title: "AI Product Photoshoot Integration", href: "/contact" },
];

const ecommerceServices = [
  { title: "Account Setup on Any Platform", href: "/contact" },
  { title: "Product Listing", href: "/contact" },
  { title: "Shipping Management", href: "/contact" },
  { title: "Order Dispatch Handling", href: "/contact" },
  { title: "Return Management", href: "/contact" },
  { title: "Reconciliation Management", href: "/contact" },
  { title: "Full Account Growth Strategy & Scaling", href: "/contact" },
];

const adsServices = [
  { title: "Meta Ads", href: "/contact" },
  { title: "Google Ads", href: "/contact" },
  { title: "Myntra Ads", href: "/contact" },
  { title: "Amazon Ads", href: "/contact" },
  { title: "Flipkart Ads", href: "/contact" },
  { title: "Other Platform Ads", href: "/contact" },
];

const influencerServices = [
  { title: "Story Promotion", href: "/contact" },
  { title: "Reel Making", href: "/contact" },
  { title: "Collabs", href: "/contact" },
  { title: "YouTube Specific Video Creation", href: "/contact" },
  { title: "AI Photoshoots", href: "/contact" },
  { title: "UGC Ads", href: "/contact" },
  { title: "Shorts Editing as per Brand Needs", href: "/contact" },
  { title: "AI Video Generation for Brand Products", href: "/contact" },
  { title: "AI-based Content Creation", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          background: scrolled ? "rgba(15,15,15,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-xl text-white tracking-tight">
            Vareno
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="nav-link text-[15px] text-white/90 hover:text-white">Home</Link>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link text-[15px] text-white/90 hover:text-white flex items-center gap-1.5">
                Services
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[580px] bg-[#161616] border border-white/[0.08] rounded-xl p-5 shadow-2xl"
                  >
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                      <div>
                        <p className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.2em] mb-3">Web Development</p>
                        <div className="flex flex-col gap-2">
                          {webDevServices.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="text-sm text-white/80 hover:text-white transition-colors py-0.5"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.2em] mb-3">E-commerce</p>
                        <div className="flex flex-col gap-1.5">
                          {ecommerceServices.slice(0, 4).map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="text-sm text-white/80 hover:text-white transition-colors py-0.5"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.2em] mb-3">Ads Services</p>
                        <div className="flex flex-col gap-1.5">
                          {adsServices.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="text-sm text-white/80 hover:text-white transition-colors py-0.5"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.2em] mb-3">Influencer & Content</p>
                        <div className="flex flex-col gap-1.5">
                          {influencerServices.slice(0, 4).map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="text-sm text-white/80 hover:text-white transition-colors py-0.5"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className="nav-link text-[15px] text-white/90 hover:text-white">Contact Us</Link>
          </div>

          <div className="hidden lg:block">
            <a
              href="https://wa.me/919499442106"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden inline-flex items-center justify-center bg-white text-black rounded-full px-5 py-2 text-sm font-medium hover:scale-[1.02] transition-transform duration-200 group"
            >
              <span className="relative z-10">Chat on WhatsApp</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-[#0f0f0f] pt-20 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-120px)] pb-8">
              <Link href="/" className="text-2xl text-white" onClick={() => setMobileOpen(false)}>Home</Link>
              <div className="text-2xl text-white/50">Services</div>

              <div className="pl-2 flex flex-col gap-3">
                <p className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.2em] mb-1">Web Development</p>
                {webDevServices.map((s) => (
                  <Link key={s.title} href={s.href} className="text-lg text-[#b0b0b0]" onClick={() => setMobileOpen(false)}>
                    {s.title}
                  </Link>
                ))}
              </div>

              <div className="pl-2 flex flex-col gap-3">
                <p className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.2em] mb-1">E-commerce</p>
                {ecommerceServices.map((s) => (
                  <Link key={s.title} href={s.href} className="text-lg text-[#b0b0b0]" onClick={() => setMobileOpen(false)}>
                    {s.title}
                  </Link>
                ))}
              </div>

              <div className="pl-2 flex flex-col gap-3">
                <p className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.2em] mb-1">Ads Services</p>
                {adsServices.map((s) => (
                  <Link key={s.title} href={s.href} className="text-lg text-[#b0b0b0]" onClick={() => setMobileOpen(false)}>
                    {s.title}
                  </Link>
                ))}
              </div>

              <div className="pl-2 flex flex-col gap-3">
                <p className="font-mono text-[10px] text-[#888888] uppercase tracking-[0.2em] mb-1">Influencer & Content</p>
                {influencerServices.map((s) => (
                  <Link key={s.title} href={s.href} className="text-lg text-[#b0b0b0]" onClick={() => setMobileOpen(false)}>
                    {s.title}
                  </Link>
                ))}
              </div>

              <Link href="/contact" className="text-2xl text-white" onClick={() => setMobileOpen(false)}>Contact Us</Link>
              <a
                href="https://wa.me/919499442106"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-white text-black rounded-full px-6 py-3 text-center font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}