"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
          detail?: string;
        } | null;
        throw new Error(data?.detail ?? data?.error ?? "Unable to send your message right now.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (sendError) {
      setError(
        sendError instanceof Error
          ? sendError.message
          : "Unable to send your message right now.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-white px-5 pb-20 pt-32 text-black sm:px-8 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 border-t border-black/15 pt-8 text-center md:mb-16"
        >
          <p
            data-cursor="text"
            className="cursor-magnetic mb-4 text-[10px] font-semibold uppercase tracking-widest text-[#5E0ED7] sm:text-xs"
          >
            Contact
          </p>
          <h1
            data-cursor="text"
            className="cursor-magnetic mx-auto max-w-4xl text-4xl font-semibold uppercase leading-none tracking-wide text-black sm:text-6xl md:text-7xl"
          >
            Get In Touch
          </h1>
          <p
            data-cursor="text"
            className="cursor-magnetic mx-auto mt-6 max-w-xl text-xs font-semibold uppercase leading-relaxed tracking-widest text-black sm:text-sm"
          >
            Ready to scale your brand? We&apos;re here to help you grow on Amazon, Flipkart, and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="border border-black/15 bg-[#f7f5fb] p-6 sm:p-8"
          >
            <h2
              data-cursor="text"
              className="cursor-magnetic mb-8 text-xl font-semibold uppercase tracking-widest text-black"
            >
              Contact Information
            </h2>
            <div className="flex flex-col gap-6">
              <a href="mailto:info@vareno.in" data-cursor="link" className="group flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#5E0ED7]">
                  <Mail size={19} strokeWidth={2.4} />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-black">
                    Email Us
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-black/70 transition-colors group-hover:text-[#5E0ED7]">
                    info@vareno.in
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-black/50">
                    We&apos;ll respond within 24 hours.
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/919499442106"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="group flex items-start gap-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#5E0ED7]">
                  <MessageCircle size={19} strokeWidth={2.4} />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-black">
                    WhatsApp Support
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-black/70 transition-colors group-hover:text-[#5E0ED7]">
                    +91 94994 42106
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-black/50">
                    Available Mon-Sat, 9am - 7pm
                  </p>
                </div>
              </a>

              <a href="tel:+917302689709" data-cursor="link" className="group flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#5E0ED7]">
                  <Phone size={19} strokeWidth={2.4} />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-black">
                    Call Us
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-black/70 transition-colors group-hover:text-[#5E0ED7]">
                    +91 73026 89709
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="border border-black/15 bg-white p-6 sm:p-8"
          >
            <h2
              data-cursor="text"
              className="cursor-magnetic mb-3 text-center text-xl font-semibold uppercase tracking-widest text-black"
            >
              Start Your Free Audit
            </h2>
            <p className="mx-auto mb-8 max-w-md text-center text-xs font-semibold uppercase leading-relaxed tracking-widest text-black/70">
              Get a comprehensive analysis of your current marketplace performance and a roadmap for growth.
            </p>

            {submitted ? (
              <div className="py-8 text-center">
                <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-black">
                  Message Sent Successfully.
                </p>
                <a
                  href="https://wa.me/919499442106"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#5E0ED7]"
                >
                  Or Chat On WhatsApp
                  <ArrowUpRight size={18} strokeWidth={2.4} />
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {error ? (
                  <p className="border border-red-200 bg-red-50 px-4 py-3 text-xs font-semibold uppercase leading-relaxed tracking-widest text-red-700">
                    {error}
                  </p>
                ) : null}
                <input
                  type="text"
                  name="name"
                  data-cursor="native"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-black/15 bg-[#f7f5fb] px-4 py-3 text-sm font-medium tracking-normal text-black placeholder:text-black/40 focus:border-[#5E0ED7] focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  data-cursor="native"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-black/15 bg-[#f7f5fb] px-4 py-3 text-sm font-medium tracking-normal text-black placeholder:text-black/40 focus:border-[#5E0ED7] focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  data-cursor="native"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-black/15 bg-[#f7f5fb] px-4 py-3 text-sm font-medium tracking-normal text-black placeholder:text-black/40 focus:border-[#5E0ED7] focus:outline-none"
                />
                <textarea
                  name="message"
                  data-cursor="native"
                  placeholder="Tell Us About Your Brand..."
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none border border-black/15 bg-[#f7f5fb] px-4 py-3 text-sm font-medium tracking-normal text-black placeholder:text-black/40 focus:border-[#5E0ED7] focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isSending}
                  data-cursor="link"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 bg-black py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#5E0ED7]"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <ArrowUpRight size={18} strokeWidth={2.4} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
