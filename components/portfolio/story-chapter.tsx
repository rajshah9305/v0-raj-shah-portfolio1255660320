"use client";

import React from "react"

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface StoryChapterProps {
  chapterNumber: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  align?: "left" | "right" | "center";
}

export function StoryChapter({ 
  chapterNumber, 
  title, 
  subtitle, 
  content,
  align = "left" 
}: StoryChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const lineWidth = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);
  
  return (
    <motion.section 
      ref={containerRef}
      className={`py-20 md:py-28 lg:py-32 px-6 ${align === "center" ? "text-center" : ""}`}
    >
      <div className={`max-w-5xl mx-auto ${align === "right" ? "text-right" : ""}`}>
        {/* Chapter number */}
        <motion.div
          initial={{ opacity: 0, x: align === "right" ? 30 : -30 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (align === "right" ? 30 : -30) }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="font-mono text-[#e07a3c] text-sm tracking-[0.3em] uppercase">
            {chapterNumber}
          </span>
        </motion.div>
        
        {/* Animated line */}
        <motion.div 
          className={`h-px bg-[#e07a3c] mb-8 max-w-md ${align === "right" ? "ml-auto" : align === "center" ? "mx-auto" : ""}`}
          style={{ width: lineWidth }}
        />
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#faf6f1] mb-5 text-balance"
        >
          {title}
        </motion.h2>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl lg:text-2xl text-[#999] font-serif italic mb-12"
        >
          {subtitle}
        </motion.p>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {content}
        </motion.div>
      </div>
    </motion.section>
  );
}
