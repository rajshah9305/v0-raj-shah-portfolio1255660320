"use client";

import { motion } from "framer-motion";
import { Github, Globe, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 px-6 border-t border-[#333] bg-[#0a0a0a]">
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
            <h3 className="text-2xl font-serif text-[#faf6f1]">Raj Shah</h3>
            <p className="font-mono text-xs text-[#888] mt-1">
              Full-Stack Developer & AI Enthusiast
            </p>
          </motion.div>
          
          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/rajshah9305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-[#e07a3c] transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.rajai.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-[#e07a3c] transition-colors duration-300"
              aria-label="RAJ AI Website"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="font-mono text-xs text-[#888] flex items-center justify-center md:justify-end gap-1.5">
              <span>Crafted with</span>
              <Heart className="w-3 h-3 text-[#e07a3c]" />
              <span>in Calgary</span>
            </p>
            <p className="font-mono text-xs text-[#666] mt-1">
              © {currentYear} • All chapters reserved
            </p>
          </motion.div>
        </div>
        
        {/* Easter egg terminal line */}
        <div className="mt-8 pt-8 border-t border-[#222] text-center">
          <p className="font-mono text-xs text-[#555]">
            {'>'} raj --version 2.0.26 | BUILD_STATUS: ✓ SHIPPING_DREAMS
          </p>
        </div>
      </div>
    </footer>
  );
}
