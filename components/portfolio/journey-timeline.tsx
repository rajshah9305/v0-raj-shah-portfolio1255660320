"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

import { TIMELINE_EVENTS } from "@/lib/data";
import { slideInLeft, slideInRight, defaultTransition } from "@/lib/animations";

type TimelineEvent = typeof TIMELINE_EVENTS[number];

const events = TIMELINE_EVENTS;

const typeColors = {
  milestone: "var(--primary)",
  project: "var(--primary)",
  learning: "var(--primary)"
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
      <div className="absolute left-[1.35rem] md:left-1/2 top-0 bottom-0 w-px bg-border">
        <motion.div
          className="w-full bg-primary"
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
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: isLeft ? slideInLeft.hidden : slideInRight.hidden,
        visible: {
          ...(isLeft ? slideInLeft.visible : slideInRight.visible),
          transition: { ...defaultTransition, delay: 0.2 }
        }
      }}
      className={`relative flex flex-col md:flex-row items-start md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12 md:mb-0 group`}
    >
      {/* Content */}
      <div className={`ml-8 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'} w-full`}>
        {/* Year badge */}
        <span
          className="inline-block px-3 py-1.5 mb-3 font-mono text-xs md:text-sm tracking-normal rounded-md border"
          style={{
            backgroundColor: `${typeColors[event.type]}15`,
            color: typeColors[event.type],
            borderColor: `${typeColors[event.type]}40`
          }}
        >
          {event.year}
        </span>

        <h3 className="text-2xl md:text-3xl font-serif italic tracking-normal leading-tight text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {event.title}
        </h3>

        <p className="text-foreground">
          {event.description}
        </p>
      </div>

      {/* Node */}
      <div className="absolute left-0 top-0 md:left-1/2 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 mt-1.5 md:mt-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          whileHover={{ scale: 1.5, boxShadow: `0 0 20px ${typeColors[event.type]}` }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 shadow-lg bg-background z-10 relative cursor-pointer"
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
