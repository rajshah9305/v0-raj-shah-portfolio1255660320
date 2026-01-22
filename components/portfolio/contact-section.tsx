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
          <p className="text-muted-foreground text-lg md:text-xl font-serif italic leading-relaxed mb-8 tracking-wide">
            Every great story deserves a conversation. Whether you want to collaborate
            on an AI project, discuss the future of technology, or just say hello —
            I&apos;d love to hear from you.
          </p>

          {/* Location */}
          <div className="flex items-center gap-3 mb-8 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm tracking-wide">Calgary, Alberta, Canada</span>
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
                className="group flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg group-hover:bg-primary transition-colors duration-300">
                  <link.icon className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-300" />
                </div>

                <div>
                  <div className="font-mono text-xs text-muted-foreground mb-0.5 tracking-wider">{link.name}</div>
                  <div className="text-foreground text-base group-hover:text-primary transition-colors">{link.handle}</div>
                </div>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
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
              <label className="block font-mono text-xs md:text-sm text-muted-foreground mb-2.5 uppercase tracking-[0.2em]">
                Name
              </label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block font-mono text-xs md:text-sm text-muted-foreground mb-2.5 uppercase tracking-[0.2em]">
                Email
              </label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block font-mono text-xs md:text-sm text-muted-foreground mb-2.5 uppercase tracking-[0.2em]">
                Message
              </label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                rows={5}
                className="w-full px-4 py-3.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                placeholder="What's on your mind?"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary text-background font-mono font-semibold rounded-lg hover:bg-[var(--amber-light)] disabled:opacity-50 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
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

