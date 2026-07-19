import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Facebook, Instagram } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";

function useIstClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => {
      const fmt = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setT(fmt.format(new Date()));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function Footer() {
  const clock = useIstClock();
  return (
    <footer className="relative border-t border-white/[0.06] bg-[color:var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              to="/"
              className="text-xl font-bold uppercase tracking-[0.22em] text-[color:var(--accent)]"
              data-cursor="link"
            >
              Vareno
            </Link>
            <p className="mt-4 text-sm text-white/60">
              Helping Indian brands grow online with web development, e-commerce, ads & content services.
            </p>
            <div className="mt-6 rounded-lg border border-white/[0.06] p-4">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                India Time (IST)
              </div>
              <div className="mt-1 font-mono text-2xl tabular-nums text-[color:var(--accent)]">
                {clock || "--:--:--"}
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>
                <a href={`mailto:${SITE.email}`} data-cursor="link" className="hover:text-[color:var(--accent)]">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" data-cursor="link" className="hover:text-[color:var(--accent)]">
                  WhatsApp: {SITE.whatsapp}
                </a>
              </li>
              <li className="text-white/50">{SITE.location}</li>
            </ul>
          </div>

          {SERVICES.map((s) => (
            <div key={s.number}>
              <div className="text-label text-white/40">{s.category}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {s.tags.map((t) => (
                  <li key={t}>
                    <Link
                      to="/contact"
                      className="text-white/70 hover:text-[color:var(--accent)]"
                      data-cursor="link"
                    >
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40">
            © 2026 Vareno Solutions. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" data-cursor="link" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" data-cursor="link" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.18em] text-white/50">
            <Link to="/privacy" data-cursor="link" className="hover:text-[color:var(--accent)]">Privacy Policy</Link>
            <Link to="/terms" data-cursor="link" className="hover:text-[color:var(--accent)]">Terms Of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
