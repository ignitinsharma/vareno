import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { z } from "zod";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vareno — Free Marketplace Audit" },
      { name: "description", content: "Get in touch for a free audit of your Amazon, Flipkart or Myntra account." },
      { property: "og:title", content: "Contact Vareno — Free Marketplace Audit" },
      { property: "og:description", content: "Get in touch for a free audit of your Amazon, Flipkart or Myntra account." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Please add a message").max(2000),
});

type FormState = "idle" | "submitting" | "success" | "error";

function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone") || "",
      message: fd.get("message"),
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your inputs.");
      return;
    }
    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("success");
    } catch {
      setState("error");
      setError("Unable to send your message right now. Please try WhatsApp.");
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden pb-24 pt-32 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-14 max-w-2xl">
          <div className="text-label text-[color:var(--accent)]">Contact</div>
          <h1 className="heading-xl mt-4 text-4xl md:text-6xl lg:text-7xl" data-cursor="text">
            Get In Touch
          </h1>
          <p className="mt-6 text-white/60">
            Ready to scale your brand? We're here to help you grow on Amazon, Flipkart, and beyond.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left: contact info */}
          <div className="card-surface flex flex-col gap-8 p-8 md:p-10">
            <h2 className="heading-lg text-lg text-white/80">Contact Information</h2>
            <InfoItem icon={<Mail className="h-5 w-5" />} title="Email Us" primary={SITE.email} primaryHref={`mailto:${SITE.email}`} note="We'll respond within 24 hours." />
            <InfoItem icon={<MessageCircle className="h-5 w-5" />} title="WhatsApp Support" primary={SITE.whatsapp} primaryHref={SITE.whatsappUrl} note="Available Mon–Sat, 9am – 7pm" />
            <InfoItem icon={<Phone className="h-5 w-5" />} title="Call Us" primary={SITE.phone} primaryHref={`tel:${SITE.phoneRaw}`} />
          </div>

          {/* Right: form */}
          <div className="card-surface p-8 md:p-10">
            {state === "success" ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                <div className="text-label text-[color:var(--accent)]">Sent</div>
                <h2 className="heading-lg text-2xl md:text-3xl">Message Sent Successfully.</h2>
                <p className="text-white/60">Our team will reach out within 24 hours.</p>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]"
                >
                  Or Chat On WhatsApp <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <div>
                  <h2 className="heading-lg text-2xl md:text-3xl">Start Your Free Audit</h2>
                  <p className="mt-3 text-sm text-white/60">
                    Get a comprehensive analysis of your current marketplace performance and a roadmap for growth.
                  </p>
                </div>
                {error && (
                  <div className="rounded-md border border-red-500/30 bg-red-500/[0.08] px-4 py-3 text-sm text-red-400">
                    {error}
                  </div>
                )}
                <Field name="name" placeholder="Your Name" required />
                <Field name="email" type="email" placeholder="Email Address" required />
                <Field name="phone" type="tel" placeholder="Phone Number" />
                <Field name="message" placeholder="Tell Us About Your Brand..." textarea />
                <button
                  type="submit"
                  disabled={state === "submitting"}
                  data-cursor="link"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--primary-foreground)] transition hover:brightness-110 disabled:opacity-50"
                >
                  {state === "submitting" ? "Sending..." : "Send Message"}
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, title, primary, primaryHref, note }: { icon: React.ReactNode; title: string; primary: string; primaryHref: string; note?: string }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[color:var(--accent)]/30 text-[color:var(--accent)]">
        {icon}
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">{title}</div>
        <a
          href={primaryHref}
          data-cursor="link"
          className="mt-1 block text-base font-medium text-white hover:text-[color:var(--accent)]"
        >
          {primary}
        </a>
        {note && <div className="mt-1 text-xs text-white/40">{note}</div>}
      </div>
    </div>
  );
}

function Field({ name, placeholder, type = "text", required, textarea }: { name: string; placeholder: string; type?: string; required?: boolean; textarea?: boolean }) {
  const cls =
    "w-full rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/30";
  return textarea ? (
    <textarea name={name} placeholder={placeholder} rows={4} required data-cursor="native" className={`${cls} resize-none`} />
  ) : (
    <input type={type} name={name} placeholder={placeholder} required={required} data-cursor="native" className={cls} />
  );
}
