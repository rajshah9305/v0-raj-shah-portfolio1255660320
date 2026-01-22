"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

import { SKILL_CATEGORIES } from "@/lib/data";

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
      let i = 0;
      const interval = setInterval(() => {
        if (i < command.length) {
          setTypedCommand(command.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isInView, activeCategory, command]);

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto">
      {/* Terminal window */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
        transition={{ duration: 0.6 }}
        className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl"
      >
        {/* Terminal header */}
        <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 bg-background border-b border-border">
          <div className="flex gap-1.5 md:gap-2">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27ca40]" />
          </div>
          <span className="font-mono text-[10px] md:text-sm text-muted-foreground tracking-[0.2em]">
            raj@skills ~ zsh
          </span>
          <div className="w-12 md:w-16" />
        </div>

        {/* Terminal content */}
        <div className="p-4 md:p-8 font-mono text-sm md:text-base">
          {/* Command line */}
          <div className="flex items-start gap-2 mb-6 flex-wrap">
            <span className="text-[var(--terminal-green)]">❯</span>
            <span className="text-foreground break-all">{typedCommand}</span>
            <span className="cursor-blink text-primary">▊</span>
          </div>

          {/* Output */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-muted-foreground mb-5 text-sm md:text-base">
              Fetching skills for category: <span className="text-primary font-medium">{skillCategories[activeCategory]?.name}</span>
            </div>

            <div className="grid gap-3 mb-6">
              {skillCategories[activeCategory]?.skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -10 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[var(--terminal-green)]">✓</span>
                  <span className="text-foreground">{skill}</span>
                  <span className="flex-1 border-b border-dotted border-border min-w-[20px]" />
                  <span className="text-primary text-xs md:text-sm">loaded</span>
                </motion.div>
              ))}
            </div>

            <div className="text-[var(--terminal-green)] text-xs md:text-sm">
              → {skillCategories[activeCategory]?.skills.length} skills loaded successfully
            </div>
          </motion.div>
        </div>

        {/* Category tabs */}
        <div className="flex overflow-x-auto md:flex-wrap border-t border-border no-scrollbar">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              type="button"
              className={`flex-none md:flex-1 min-w-[max-content] md:min-w-[80px] px-4 md:px-4 py-3 md:py-3.5 font-mono text-xs md:text-sm transition-all duration-300 whitespace-nowrap ${activeCategory === i
                ? 'bg-primary text-background font-medium'
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              <span className="inline">{cat.name}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

