"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Terminal } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  index: number;
}

export function ProjectCard({
  title,
  description,
  tech,
  githubUrl,
  liveUrl,
  featured = false,
  index,
  className = ""
}: ProjectCardProps & { className?: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative h-full ${className}`}
    >
      <div className="relative h-full flex flex-col bg-card border border-border rounded-lg p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_50px_rgba(224,122,60,0.1)]">
        {/* Terminal header decoration */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-primary/80 group-hover:bg-primary transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--forest)]/80 group-hover:bg-[var(--forest)] transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30 group-hover:bg-muted-foreground/50 transition-colors" />
          </div>
          <span className="font-mono text-xxs md:text-xs text-muted-foreground/70 group-hover:text-primary/70 transition-colors truncate tracking-wider">
            ~/projects/{title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
          </span>
        </div>

        {/* Project number - ENHANCED */}
        <div className="absolute top-0 right-0 p-6 font-mono text-6xl md:text-8xl text-muted/10 font-bold group-hover:text-primary/5 transition-all duration-500 select-none z-0">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Content */}
        <div className="relative z-10 flex-grow flex flex-col justify-between">
          <div>
            <div className="flex items-start gap-4 mb-5">
              <Terminal className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
              <h3 className="text-3xl md:text-4xl font-serif tracking-tight leading-none text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed text-base md:text-lg tracking-wide line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
              {description}
            </p>
          </div>

          <div>
            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-secondary/50 text-secondary-foreground/80 text-xs font-mono rounded border border-transparent group-hover:border-primary/20 transition-all"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-6 pt-6 border-t border-border/50 group-hover:border-primary/20 transition-colors">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono text-sm tracking-wide">Source</span>
              </a>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-mono text-sm tracking-wide">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Hover glow & Scanline effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none transition-opacity duration-500" />
      </div>
    </motion.article>
  );
}

