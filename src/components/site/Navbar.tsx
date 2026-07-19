import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2.5" data-cursor="link" aria-label="Vareno home">
      <span className="relative grid h-8 w-8 place-items-center rounded-full border-2 border-[color:var(--accent)]">
        <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
      </span>
      <span className="text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--accent)]">
        Vareno
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-40 px-4 pt-5 md:pt-6"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/[0.08] bg-black/60 px-3 py-2 pl-5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl md:px-4 md:pl-6">
          <Brand />
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-sm font-medium text-white/75 transition hover:text-white"
                data-cursor="link"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[color:var(--accent)] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_30px_color-mix(in_oklab,var(--accent)_40%,transparent)] transition hover:shadow-[0_0_50px_color-mix(in_oklab,var(--accent)_70%,transparent)] lg:inline-flex"
            data-cursor="link"
          >
            Book Call
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 lg:hidden"
            data-cursor="link"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-[color:var(--background)] px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Brand />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10"
                data-cursor="link"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="mt-16 flex flex-col gap-6">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-4xl font-bold uppercase tracking-tight"
                  data-cursor="link"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-auto block rounded-full bg-[color:var(--accent)] py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--primary-foreground)]"
              data-cursor="link"
            >
              Get A Free Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
