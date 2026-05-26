"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Platforms", href: "#platforms" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "/contact" },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: easeOut,
    },
  }),
};

function BrandMark() {
  return (
    <Link
      href="/"
      aria-label="Vareno home"
      data-cursor="link"
      className="inline-flex items-center gap-3"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#5E0ED7]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#5E0ED7]" />
      </span>
      <span className="text-base font-semibold uppercase tracking-widest text-[#5E0ED7]">
        Vareno
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className="fixed left-0 right-0 top-0 z-40 px-5 pt-5 sm:px-8 md:px-12 md:pt-6"
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-between">
          <motion.div variants={fadeDown} custom={0}>
            <BrandMark />
          </motion.div>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link, index) => (
              <motion.div key={link.label} variants={fadeDown} custom={index + 1}>
                <Link
                  href={link.href}
                  data-cursor="text"
                  className="cursor-magnetic text-sm font-semibold uppercase tracking-widest text-black transition-colors hover:text-[#5E0ED7]"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            variants={fadeDown}
            custom={5}
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            data-cursor="link"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black"
          >
            <span className="flex flex-col gap-1">
              <span className="h-0.5 w-4 bg-white" />
              <span className="h-0.5 w-4 bg-white" />
              <span className="h-0.5 w-4 bg-white" />
            </span>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex min-h-screen flex-col bg-white px-5 pb-8 pt-5 sm:px-8"
          >
            <div className="flex items-center justify-between">
              <BrandMark />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                data-cursor="link"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white"
              >
                <X size={18} strokeWidth={2.4} />
              </button>
            </div>

            <div className="mt-16 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  data-cursor="text"
                  className="cursor-magnetic text-3xl font-semibold uppercase tracking-widest text-black"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href="https://wa.me/919499442106"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              data-cursor="link"
              className="mt-auto inline-flex items-center gap-2 text-xl font-semibold uppercase tracking-widest text-[#5E0ED7]"
            >
              Get A Free Quote
              <ArrowUpRight size={22} strokeWidth={2.4} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
