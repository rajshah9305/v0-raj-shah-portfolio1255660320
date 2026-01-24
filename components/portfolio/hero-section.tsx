"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe } from "lucide-react";
import { BOOT_SEQUENCE } from "@/lib/data";
import { fadeInUp, scaleIn, defaultTransition } from "@/lib/animations";

export function HeroSection({
  onBootComplete,
  bootSequence = BOOT_SEQUENCE
}: {
  onBootComplete?: () => void;
  bootSequence?: readonly string[];
}) {
  const [showCursor, setShowCursor] = useState(true);
  const [bootComplete, setBootComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

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

    if (textRef.current) {
      textRef.current.textContent = "";
    }

    const typeInterval = setInterval(() => {
      if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex];
        if (charIndex < currentLine.length) {
          currentText += currentLine[charIndex];
          if (textRef.current) {
            textRef.current.textContent = currentText;
          }
          charIndex++;
        } else {
          currentText += "\n";
          if (textRef.current) {
            textRef.current.textContent = currentText;
          }
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
  }, [getBootSequence, onBootComplete]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, y }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Scanline effect */}
      <div className="scanline" />

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        {/* Terminal boot sequence */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: bootComplete ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className={`font-mono text-left mb-0 absolute inset-0 flex items-center justify-center z-50 ${bootComplete ? 'hidden' : 'flex'}`}
        >
          <div className="bg-black/90 backdrop-blur-md border border-border rounded-lg p-4 md:p-6 max-w-[90vw] md:max-w-2xl w-full mx-auto shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            </div>
            <pre className="text-[var(--terminal-green)] text-xs md:text-base leading-relaxed whitespace-pre-wrap min-h-[150px] md:min-h-[200px]">
              <span ref={textRef} />
              <span className={showCursor ? 'opacity-100' : 'opacity-0'}>▊</span>
            </pre>
          </div>
        </motion.div>

        {/* Main hero content */}
        <motion.div
          initial="hidden"
          animate={bootComplete ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Chapter indicator */}
          <motion.p
            className="font-mono text-primary text-xs md:text-sm tracking-[0.2em] uppercase mb-6 md:mb-8"
            variants={fadeInUp}
          >
            Chapter I — The Beginning
          </motion.p>

          {/* Name with serif typography */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-serif tracking-tighter leading-[0.8] font-normal mb-8 md:mb-12">
              <span className="block text-foreground">RAJ</span>
              <span className="block text-primary">SHAH</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-foreground font-serif italic mb-8 md:mb-10 max-w-2xl mx-auto text-pretty leading-relaxed px-4"
          >
            {"\"Transforming ideas into intelligent systems, one line of code at a time.\""}
          </motion.p>

          {/* Role badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4
                }
              }
            }}
          >
            {["Full-Stack Developer", "AI Enthusiast", "Open-Source Advocate"].map((role) => (
              <motion.span
                key={role}
                variants={scaleIn}
                whileHover={{ scale: 1.05, borderColor: "var(--primary)", color: "var(--primary)" }}
                className="px-3 md:px-4 py-2 md:py-2.5 border border-white/10 bg-black/40 backdrop-blur-md rounded-full text-xs md:text-sm font-mono text-foreground transition-colors duration-300 cursor-default"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: bootComplete ? 1 : 0,
          y: bootComplete ? [0, -10, 0] : 0
        }}
        transition={{
          opacity: { delay: 1.5, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-3 text-foreground">
          <span className="font-mono text-xs tracking-[0.2em]">SCROLL TO EXPLORE</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>

      {/* Corner decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: bootComplete ? 1 : 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="hidden md:block absolute top-8 left-8 text-foreground font-mono text-xs">
          ┌── RAJ_OS ──
        </div>
        <div className="hidden md:flex items-center gap-2 absolute top-8 right-8 text-foreground font-mono text-xs">
          <Globe className="w-4 h-4" />
          <span>v2026.01 ──┐</span>
        </div>
        <div className="hidden md:block absolute bottom-8 left-8 text-foreground font-mono text-xs">
          └── CALGARY, CA
        </div>
        <div className="hidden md:block absolute bottom-8 right-8 text-foreground font-mono text-xs">
          49.2827°N ──┘
        </div>
      </motion.div>
    </motion.section>
  );
}
