"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "milestone" | "project" | "learning";
}

const events: TimelineEvent[] = [
  {
    year: "2024",
    title: "Founded RAJ AI",
    description: "Launched rajai.org to build innovative AI-powered applications",
    type: "milestone"
  },
  {
    year: "2024",
    title: "AI Agent Orchestration",
    description: "Built platforms for multi-agent AI systems with Cerebras integration",
    type: "project"
  },
  {
    year: "2025",
    title: "No-Code AI Builders",
    description: "Created multiple no-code AI app building platforms",
    type: "project"
  },
  {
    year: "2025",
    title: "Open Source Advocacy",
    description: "Contributing to the developer community with 30+ repositories",
    type: "learning"
  },
  {
    year: "2026",
    title: "The Story Continues",
    description: "Building the future of intelligent web applications",
    type: "milestone"
  }
];

const typeColors = {
  milestone: "#e07a3c",
  project: "#4ade80",
  learning: "#faf6f1"
};

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  return (
    <div ref={containerRef} className="relative max-w-3xl mx-auto px-4">
      {/* Central line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#333]">
        <motion.div 
          className="w-full bg-[#e07a3c]"
          style={{ height: lineHeight }}
        />
      </div>
      
      {/* Events */}
      <div className="space-y-12 md:space-y-16">
        {events.map((event, i) => (
          <TimelineItem key={i} event={event} index={i} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (isLeft ? -30 : 30) }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content */}
      <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        {/* Year badge */}
        <span 
          className="inline-block px-3 py-1.5 mb-3 font-mono text-xs rounded-md border"
          style={{ 
            backgroundColor: `${typeColors[event.type]}15`,
            color: typeColors[event.type],
            borderColor: `${typeColors[event.type]}40`
          }}
        >
          {event.year}
        </span>
        
        <h3 className="text-lg md:text-xl font-serif text-[#faf6f1] mb-2">
          {event.title}
        </h3>
        
        <p className="text-[#999] text-sm md:text-base leading-relaxed">
          {event.description}
        </p>
      </div>
      
      {/* Node */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="w-4 h-4 rounded-full border-2 shadow-lg"
          style={{ 
            borderColor: typeColors[event.type],
            backgroundColor: isInView ? typeColors[event.type] : 'transparent',
            boxShadow: isInView ? `0 0 12px ${typeColors[event.type]}50` : 'none'
          }}
        />
      </div>
    </motion.div>
  );
}
