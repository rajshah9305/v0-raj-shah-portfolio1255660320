"use client";

import React from "react"

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

const socialLinks = SOCIAL_LINKS;

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Left side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#d4d4d4] text-xl md:text-2xl leading-relaxed mb-8 font-serif">
            Every great story deserves a conversation. Whether you want to collaborate
            on an AI project, discuss the future of technology, or just say hello —
            I&apos;d love to hear from you.
          </p>

          {/* Location */}
          <div className="flex items-center gap-3 mb-8 text-[#999]">
            <MapPin className="w-5 h-5 text-[#e07a3c]" />
            <span className="font-mono text-sm">Calgary, Alberta, Canada</span>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="group flex items-center gap-4 p-4 bg-[#181818] border border-[#333] rounded-lg hover:border-[#e07a3c] transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#252525] rounded-lg group-hover:bg-[#e07a3c] transition-colors duration-300">
                  <link.icon className="w-5 h-5 text-[#faf6f1] group-hover:text-[#0d0d0d] transition-colors duration-300" />
                </div>

                <div>
                  <div className="font-mono text-sm text-[#a0a0a0] mb-0.5">{link.name}</div>
                  <div className="text-[#faf6f1] text-base group-hover:text-[#e07a3c] transition-colors">{link.handle}</div>
                </div>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-[#e07a3c]">→</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-mono text-sm text-[#a0a0a0] mb-2.5 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3.5 bg-[#181818] border border-[#333] rounded-lg text-[#faf6f1] placeholder:text-[#666] focus:border-[#e07a3c] focus:outline-none focus:ring-1 focus:ring-[#e07a3c]/50 transition-all"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block font-mono text-sm text-[#a0a0a0] mb-2.5 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3.5 bg-[#181818] border border-[#333] rounded-lg text-[#faf6f1] placeholder:text-[#666] focus:border-[#e07a3c] focus:outline-none focus:ring-1 focus:ring-[#e07a3c]/50 transition-all"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block font-mono text-sm text-[#a0a0a0] mb-2.5 uppercase tracking-wider">
                Message
              </label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                rows={5}
                className="w-full px-4 py-3.5 bg-[#181818] border border-[#333] rounded-lg text-[#faf6f1] placeholder:text-[#666] focus:border-[#e07a3c] focus:outline-none focus:ring-1 focus:ring-[#e07a3c]/50 transition-all resize-none"
                placeholder="What's on your mind?"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#e07a3c] text-[#0d0d0d] font-mono font-semibold rounded-lg hover:bg-[#f4a261] disabled:opacity-50 transition-all duration-300 shadow-lg shadow-[#e07a3c]/20"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#0d0d0d] border-t-transparent rounded-full animate-spin" />
                  Transmitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div >
    </div >
  );
}
