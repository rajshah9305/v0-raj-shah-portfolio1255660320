"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Globe } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

const navItems = [
  { name: "Origin", href: "#origin" },
  { name: "Arsenal", href: "#arsenal" },
  { name: "Creations", href: "#creations" },
  { name: "Journey", href: "#journey" },
  { name: "Connect", href: "#connect" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#0d0d0d]/95 backdrop-blur-lg border-b border-[#333]'
          : ''
          }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-1.5">
            <span className="font-mono text-[#e07a3c] text-lg">{'{'}</span>
            <span className="font-serif text-xl text-[#faf6f1] group-hover:text-[#e07a3c] transition-colors">RS</span>
            <span className="font-mono text-[#e07a3c] text-lg">{'}'}</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-mono text-base text-[#a0a0a0] hover:text-[#e07a3c] transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#e07a3c] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>


          {/* Social links - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {SOCIAL_LINKS.filter(link => link.name !== 'Email').map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888] hover:text-[#e07a3c] transition-colors duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#faf6f1] p-2"
            type="button"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0d0d0d] md:hidden pt-20"
          >
            <nav className="flex flex-col items-center gap-8 py-12">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-serif text-3xl text-[#faf6f1] hover:text-[#e07a3c] transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}

              <div className="flex gap-6 mt-8">
                {SOCIAL_LINKS.filter(link => link.name !== 'Email').map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#888] hover:text-[#e07a3c] transition-colors duration-300"
                    aria-label={link.name}
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
