"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "λ",
    skills: ["TypeScript", "JavaScript", "Python", "HTML/CSS", "SQL"]
  },
  {
    name: "Frameworks",
    icon: "⚡",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "Express"]
  },
  {
    name: "AI & ML",
    icon: "◉",
    skills: ["LangChain", "CrewAI", "OpenAI", "Groq", "Cerebras"]
  },
  {
    name: "Tools",
    icon: "⌘",
    skills: ["Git", "Docker", "AWS", "Vercel", "Supabase"]
  }
];

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
        className="bg-[#141414] border border-[#3a3a3a] rounded-lg overflow-hidden shadow-2xl"
      >
        {/* Terminal header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d0d] border-b border-[#333]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
          </div>
          <span className="font-mono text-xs text-[#888]">
            raj@skills ~ zsh
          </span>
          <div className="w-16" />
        </div>
        
        {/* Terminal content */}
        <div className="p-6 md:p-8 font-mono text-sm md:text-base">
          {/* Command line */}
          <div className="flex items-start gap-2 mb-6 flex-wrap">
            <span className="text-[#4ade80]">❯</span>
            <span className="text-[#faf6f1] break-all">{typedCommand}</span>
            <span className="cursor-blink text-[#e07a3c]">▊</span>
          </div>
          
          {/* Output */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-[#888] mb-5 text-sm">
              Fetching skills for category: <span className="text-[#e07a3c] font-medium">{skillCategories[activeCategory]?.name}</span>
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
                  <span className="text-[#4ade80]">✓</span>
                  <span className="text-[#faf6f1]">{skill}</span>
                  <span className="flex-1 border-b border-dotted border-[#333] min-w-[20px]" />
                  <span className="text-[#e07a3c] text-sm">loaded</span>
                </motion.div>
              ))}
            </div>
            
            <div className="text-[#4ade80] text-sm">
              → {skillCategories[activeCategory]?.skills.length} skills loaded successfully
            </div>
          </motion.div>
        </div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap border-t border-[#333]">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              type="button"
              className={`flex-1 min-w-[80px] px-3 md:px-4 py-3.5 font-mono text-xs transition-all duration-300 ${
                activeCategory === i 
                  ? 'bg-[#e07a3c] text-[#0d0d0d] font-medium' 
                  : 'text-[#888] hover:bg-[#222] hover:text-[#faf6f1]'
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              <span className="hidden sm:inline">{cat.name}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
