"use client";

import { motion } from "framer-motion";
import { Github, Globe, Heart } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-border bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(224,122,60,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(224,122,60,0.015)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-serif text-foreground">Raj Shah</h3>
            <p className="font-mono text-sm text-muted-foreground mt-1">
              Full-Stack Developer & AI Enthusiast
            </p>
          </motion.div>


          {/* Links */}
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.filter(link => link.name !== 'Email').map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="font-mono text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1.5">
              <span>Crafted with</span>
              <Heart className="w-3 h-3 text-primary" />
              <span>in Calgary</span>
            </p>
            <p className="font-mono text-sm text-muted-foreground mt-1">
              © {currentYear} • All chapters reserved
            </p>
          </motion.div>
        </div>

        {/* Easter egg terminal line */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="font-mono text-sm text-muted-foreground">
            {'>'} raj --version 2.0.26 | BUILD_STATUS: ✓ SHIPPING_DREAMS
          </p>
        </div>
      </div>
    </footer>
  );
}
