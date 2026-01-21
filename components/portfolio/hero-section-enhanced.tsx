"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSectionEnhanced() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [bootComplete, setBootComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  
  const bootSequence = useCallback(() => [
    "> INITIATING RAJ_OS v2.0...",
    "> LOADING NEURAL NETWORKS...",
    "> COMPILING DREAMS INTO CODE...",
    "> ESTABLISHING CONNECTION TO THE FUTURE...",
    "> SYSTEM READY.",
    "",
    "Welcome to my story."
  ], []);

  useEffect(() => {
    const lines = bootSequence();
    let lineIndex = 0;
    let charIndex = 0;
    let currentText = "";
    
    const typeInterval = setInterval(() => {
      if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex];
        if (charIndex < currentLine.length) {
          currentText += currentLine[charIndex];
          setDisplayText(currentText);
          charIndex++;
        } else {
          currentText += "\n";
          setDisplayText(currentText);
          lineIndex++;
          charIndex = 0;
        }
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setBootComplete(true), 500);
      }
    }, 30);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, [bootSequence]);

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity, y }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* AI Neural Network Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/hero-bg-ai.jpg"
          alt="AI Neural Network Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/40 via-[#0d0d0d]/60 to-[#0d0d0d]/95" />
      </div>
      
      {/* Scanline effect */}
      <div className="scanline absolute inset-0 z-10" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--amber)] opacity-[0.05] blur-[120px]" />
      
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        {/* Terminal boot sequence */}
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: bootComplete ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className={`font-mono text-left mb-12 ${bootComplete ? 'hidden' : 'block'}`}
        >
          <div className="bg-[#141414]/80 backdrop-blur-sm border border-[#3a3a3a] rounded-lg p-6 max-w-2xl mx-auto shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            </div>
            <pre className="text-[#4ade80] text-sm md:text-base leading-relaxed whitespace-pre-wrap min-h-[200px]">
              {displayText}
              <span className={showCursor ? 'opacity-100' : 'opacity-0'}>▊</span>
            </pre>
          </div>
        </motion.div>
        
        {/* Main hero content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: bootComplete ? 1 : 0, y: bootComplete ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Chapter indicator */}
          <motion.p 
            className="font-mono text-[#e07a3c] text-sm tracking-[0.3em] uppercase mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: bootComplete ? 1 : 0 }}
            transition={{ delay: 0.4 }}
          >
            Chapter I — The Beginning
          </motion.p>
          
          {/* Name with serif typography */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight mb-8">
            <span className="block text-[#faf6f1]">Raj</span>
            <span className="block text-[#e07a3c]">Shah</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-[#b0b0b0] font-serif italic mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            {"\"Transforming ideas into intelligent systems, one line of code at a time.\""}
          </p>
          
          {/* Role badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {["Full-Stack Developer", "AI Enthusiast", "Open-Source Advocate"].map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: bootComplete ? 1 : 0, scale: bootComplete ? 1 : 0.8 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="px-4 py-2.5 border border-[#444] bg-[#1a1a1a]/50 backdrop-blur-sm rounded-full text-sm font-mono text-[#c0c0c0] hover:border-[#e07a3c] hover:text-[#e07a3c] transition-all duration-300 cursor-default"
              >
                {role}
              </motion.span>
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: bootComplete ? 1 : 0, y: bootComplete ? 0 : 20 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#origin"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#e07a3c] text-[#0d0d0d] font-mono font-semibold rounded-lg hover:bg-[#f4a261] transition-all duration-300 shadow-lg shadow-[#e07a3c]/30 hover:shadow-[#e07a3c]/50 group"
            >
              Explore My Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: bootComplete ? 1 : 0 }}
            transition={{ delay: 1.2 }}
            className="animate-float mt-8"
          >
            <div className="flex flex-col items-center gap-3 text-[#888]">
              <span className="font-mono text-xs tracking-[0.2em]">SCROLL TO EXPLORE</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Corner decorations */}
      <div className="hidden md:block absolute top-8 left-8 text-[#e07a3c] font-mono text-xs opacity-60 z-20">
        ┌── RAJ_OS ──
      </div>
      <div className="hidden md:block absolute top-8 right-8 text-[#e07a3c] font-mono text-xs opacity-60 z-20">
        ── v2026.01 ──┐
      </div>
      <div className="hidden md:block absolute bottom-8 left-8 text-[#e07a3c] font-mono text-xs opacity-60 z-20">
        └── CALGARY, CA
      </div>
      <div className="hidden md:block absolute bottom-8 right-8 text-[#e07a3c] font-mono text-xs opacity-60 z-20">
        49.2827°N ──┘
      </div>
    </motion.section>
  );
}
