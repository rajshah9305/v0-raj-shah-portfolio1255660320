"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Globe, ExternalLink } from "lucide-react";

const navItems = [
  { name: "Origin", href: "#origin" },
  { name: "Arsenal", href: "#arsenal" },
  { name: "Creations", href: "#creations" },
  { name: "Journey", href: "#journey" },
  { name: "Connect", href: "#connect" },
];

export function NavigationEnhanced() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0d0d0d]/95 backdrop-blur-lg border-b border-[#333]/50 shadow-lg shadow-[#e07a3c]/5' 
            : ''
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="group flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-mono text-[#e07a3c] text-lg">{'{'}</span>
            <span className="font-serif text-xl text-[#faf6f1] group-hover:text-[#e07a3c] transition-colors">RS</span>
            <span className="font-mono text-[#e07a3c] text-lg">{'}'}</span>
          </motion.a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`font-mono text-sm transition-colors relative group ${
                  activeSection === item.href.slice(1)
                    ? 'text-[#e07a3c]'
                    : 'text-[#999] hover:text-[#e07a3c]'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-px bg-[#e07a3c]"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: activeSection === item.href.slice(1) ? '100%' : '0%'
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
          
          {/* Social links - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a 
              href="https://github.com/rajshah9305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-[#e07a3c] transition-colors duration-300"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://www.rajai.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-[#e07a3c] transition-colors duration-300"
              aria-label="RAJ AI Website"
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <Globe className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#connect"
              className="flex items-center gap-2 px-4 py-2 bg-[#e07a3c]/10 border border-[#e07a3c]/30 rounded-lg text-[#e07a3c] font-mono text-sm hover:bg-[#e07a3c]/20 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Let's Talk
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
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
            className="fixed inset-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-sm md:hidden pt-20"
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
                  className={`font-serif text-3xl transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'text-[#e07a3c]'
                      : 'text-[#faf6f1] hover:text-[#e07a3c]'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <div className="flex gap-6 mt-8">
                <motion.a 
                  href="https://github.com/rajshah9305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888] hover:text-[#e07a3c] transition-colors duration-300"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.2 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://www.rajai.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888] hover:text-[#e07a3c] transition-colors duration-300"
                  aria-label="RAJ AI Website"
                  whileHover={{ scale: 1.2 }}
                >
                  <Globe className="w-6 h-6" />
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
