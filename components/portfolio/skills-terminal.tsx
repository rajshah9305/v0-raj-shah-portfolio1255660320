"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

import { SKILL_CATEGORIES } from "@/lib/data";
import { fadeInUp, slideInLeft, staggerContainer, defaultTransition } from "@/lib/animations";
import { cn } from "@/lib/utils";

const skillCategories = SKILL_CATEGORIES;

export function SkillsTerminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");

  const command = `raj --list-skills --category="${skillCategories[activeCategory]?.name.toLowerCase()}"`;

  useEffect(() => {
    if (isInView) {
      setTypedCommand("");
      let startTime: number | null = null;
      let animationFrameId: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        // 30ms per character for typing effect
        const charIndex = Math.floor(elapsed / 30);

        if (charIndex < command.length) {
          setTypedCommand(command.slice(0, charIndex + 1));
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setTypedCommand(command);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [isInView, activeCategory, command]);

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto">
      {/* Terminal window */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl"
      >
        {/* Terminal header */}
        <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 bg-background border-b border-border">
          <div className="flex gap-1.5 md:gap-2">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27ca40]" />
          </div>
          <span className="font-mono text-[10px] md:text-sm text-foreground tracking-normal">
            raj@skills ~ zsh
          </span>
          <div className="w-12 md:w-16" />
        </div>

        {/* Terminal content */}
        <div className="p-4 md:p-8 font-mono text-sm md:text-base min-h-[400px]">
          {/* Command line */}
          <div className="flex items-start gap-2 mb-6 flex-wrap">
            <span className="text-[var(--terminal-green)]">❯</span>
            <span className="text-foreground break-all">{typedCommand}</span>
            <span className="text-primary">▊</span>
          </div>

          {/* Output */}
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 0.8, when: "beforeChildren" }
              }
            }}
          >
            <div className="text-foreground mb-5 text-sm md:text-base">
              Fetching skills for category: <span className="text-primary font-medium">{skillCategories[activeCategory]?.name}</span>
            </div>

            <motion.div
              className="grid gap-3 mb-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {skillCategories[activeCategory]?.skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={slideInLeft}
                  className="flex items-center gap-3"
                >
                  <span className="text-[var(--terminal-green)]">✓</span>
                  <span className="text-foreground">{skill}</span>
                  <span className="flex-1 border-b border-dotted border-border min-w-[20px]" />
                  <span className="text-primary text-xs md:text-sm">loaded</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-[var(--terminal-green)] text-xs md:text-sm"
            >
              → {skillCategories[activeCategory]?.skills.length} skills loaded successfully
            </motion.div>
          </motion.div>
        </div>

        {/* Category tabs */}
        <div className="flex overflow-x-auto md:flex-wrap border-t border-border no-scrollbar" role="tablist">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              type="button"
              role="tab"
              aria-selected={activeCategory === i}
              aria-label={`Skills for ${cat.name} category`}
              className={cn(
                "flex-none md:flex-1 min-w-[max-content] md:min-w-[80px] px-4 md:px-4 py-3 md:py-3.5 font-mono text-xs md:text-sm transition-all duration-300 whitespace-nowrap relative overflow-hidden group",
                activeCategory === i
                  ? "bg-primary text-background font-medium"
                  : "text-foreground hover:text-primary"
              )}
            >
              <div className={cn(
                "absolute inset-0 bg-secondary/50 transform origin-left transition-transform duration-300",
                activeCategory === i ? "scale-x-100 opacity-0" : "scale-x-0 group-hover:scale-x-100"
              )} />
              <span className="relative z-10 mr-1.5">{cat.icon}</span>
              <span className="relative z-10 inline">{cat.name}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
