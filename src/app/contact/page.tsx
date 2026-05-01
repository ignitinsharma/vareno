"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:info@vareno.in?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0f0f0f] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-[40px] md:text-[56px] text-white mb-4">Get in Touch</h1>
          <p className="font-body text-lg text-[#b0b0b0] max-w-xl mx-auto">
            Ready to scale your brand? We&apos;re here to help you grow on Amazon, Flipkart, and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#161616] border border-white/[0.06] rounded-2xl p-8"
          >
            <h2 className="font-display text-xl text-white mb-8">Contact Information</h2>
            <div className="flex flex-col gap-6">
              <a href="mailto:info@vareno.in" className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-sm text-white font-medium mb-0.5">Email Us</p>
                  <p className="font-body text-sm text-[#b0b0b0] group-hover:text-white transition-colors">info@vareno.in</p>
                  <p className="font-mono text-[11px] text-[#666666] mt-1">We&apos;ll respond within 24 hours.</p>
                </div>
              </a>

              <a href="https://wa.me/919499442106" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-sm text-white font-medium mb-0.5">WhatsApp Support</p>
                  <p className="font-body text-sm text-[#b0b0b0] group-hover:text-white transition-colors">+91 94994 42106</p>
                  <p className="font-mono text-[11px] text-[#666666] mt-1">Available Mon-Sat, 9am - 7pm</p>
                </div>
              </a>

              <a href="tel:+917302689709" className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-sm text-white font-medium mb-0.5">Call Us</p>
                  <p className="font-body text-sm text-[#b0b0b0] group-hover:text-white transition-colors">+91 73026 89709</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#161616] border border-white/[0.06] rounded-2xl p-8 flex flex-col justify-center"
          >
            <h2 className="font-display text-xl text-white mb-2 text-center">Start Your Free Audit</h2>
            <p className="font-body text-sm text-[#b0b0b0] text-center mb-8">
              Get a comprehensive analysis of your current marketplace performance and a roadmap for growth.
            </p>

            {submitted ? (
              <div className="text-center py-8">
                <p className="font-body text-white mb-4">Opening your email client...</p>
                <a
                  href="https://wa.me/919499442106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-black rounded-full px-8 py-3 text-sm font-medium hover:scale-[1.02] transition-transform"
                >
                  Or Chat on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#666666] focus:outline-none focus:border-white/30 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#666666] focus:outline-none focus:border-white/30 transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#666666] focus:outline-none focus:border-white/30 transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your brand..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#666666] focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-black rounded-full py-3 text-sm font-medium hover:scale-[1.02] transition-transform mt-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
