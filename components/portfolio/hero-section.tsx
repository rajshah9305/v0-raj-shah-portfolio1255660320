"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BOOT_SEQUENCE } from "@/lib/data";

export function HeroSection({
  onBootComplete,
  bootSequence = BOOT_SEQUENCE
}: {
  onBootComplete?: () => void;
  bootSequence?: readonly string[];
}) {
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



  const getBootSequence = useCallback(() => bootSequence, [bootSequence]);

  useEffect(() => {
    const lines = getBootSequence();
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
        setTimeout(() => {
          setBootComplete(true);
          onBootComplete?.();
        }, 500);
      }
    }, 30);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, [getBootSequence]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, y }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Scanline effect */}
      <div className="scanline" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(224,122,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(224,122,60,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--amber)] opacity-[0.03] blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Terminal boot sequence */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: bootComplete ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className={`font-mono text-left mb-0 absolute inset-0 flex items-center justify-center z-50 bg-background ${bootComplete ? 'hidden' : 'flex'}`}
        >
          <div className="bg-[#050505] border border-border rounded-lg p-4 md:p-6 max-w-[90vw] md:max-w-2xl w-full mx-auto shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            </div>
            <pre className="text-[var(--terminal-green)] text-xs md:text-base leading-relaxed whitespace-pre-wrap min-h-[150px] md:min-h-[200px]">
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
            className="font-mono text-primary text-xs md:text-sm tracking-[0.2em] uppercase mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: bootComplete ? 1 : 0 }}
            transition={{ delay: 0.4 }}
          >
            Chapter I — The Beginning
          </motion.p>

          {/* Name with serif typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-none font-normal mb-6 md:mb-8">
            <span className="block text-foreground">Raj</span>
            <span className="block text-primary">Shah</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-foreground font-serif italic mb-8 md:mb-10 max-w-2xl mx-auto text-pretty leading-relaxed px-4">
            {"\"Transforming ideas into intelligent systems, one line of code at a time.\""}
          </p>

          {/* Role badges */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {["Full-Stack Developer", "AI Enthusiast", "Open-Source Advocate"].map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: bootComplete ? 1 : 0, scale: bootComplete ? 1 : 0.8 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="px-3 md:px-4 py-2 md:py-2.5 border border-border bg-card/50 rounded-full text-xs md:text-sm font-mono text-foreground hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
              >
                {role}
              </motion.span>
            ))}
          </div>


        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: bootComplete ? 1 : 0 }}
        transition={{ delay: 0.8 }}
        className="animate-float absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-3 text-foreground">
          <span className="font-mono text-xs tracking-[0.2em]">SCROLL TO EXPLORE</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>

      {/* Corner decorations */}
      <div className="hidden md:block absolute top-8 left-8 text-foreground font-mono text-xs">
        ┌── RAJ_OS ──
      </div>
      <div className="hidden md:block absolute top-8 right-8 text-foreground font-mono text-xs">
        ── v2026.01 ──┐
      </div>
      <div className="hidden md:block absolute bottom-8 left-8 text-foreground font-mono text-xs">
        └── CALGARY, CA
      </div>
      <div className="hidden md:block absolute bottom-8 right-8 text-foreground font-mono text-xs">
        49.2827°N ──┘
      </div>
    </motion.section>
  );
}

