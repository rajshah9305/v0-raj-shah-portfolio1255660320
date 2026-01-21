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
  index
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative ${featured ? "md:col-span-2" : ""}`}
    >
      <div className="relative h-full bg-[#181818] border border-[#333] rounded-lg p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-[#e07a3c] hover:shadow-[0_0_40px_rgba(224,122,60,0.15)]">
        {/* Terminal header decoration */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#e07a3c]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#2d5a3d]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#555]" />
          </div>
          <span className="font-mono text-xs text-[#a0a0a0] truncate">
            ~/projects/{title.toLowerCase().replace(/\s+/g, '-')}
          </span>
        </div>

        {/* Project number */}
        <div className="absolute top-6 right-6 font-mono text-5xl md:text-6xl text-[#2a2a2a] font-bold group-hover:text-[#e07a3c]/20 transition-all duration-500">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start gap-3 mb-4">
            <Terminal className="w-5 h-5 text-[#e07a3c] mt-1 flex-shrink-0" />
            <h3 className="text-xl md:text-2xl font-serif text-[#faf6f1] group-hover:text-[#e07a3c] transition-colors leading-tight">
              {title}
            </h3>
          </div>

          <p className="text-[#d4d4d4] mb-6 leading-relaxed text-base md:text-lg">
            {description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 bg-[#252525] text-[#e0e0e0] text-xs font-mono rounded border border-[#333]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-5 pt-2 border-t border-[#2a2a2a]">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#e07a3c] transition-colors group/link pt-4"
            >
              <Github className="w-4 h-4" />
              <span className="font-mono text-sm">Source</span>
              <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#e07a3c] transition-colors group/link pt-4"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-mono text-sm">Live</span>
                <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
              </a>
            )}
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e07a3c] to-transparent opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none rounded-lg" />
      </div>
    </motion.article>
  );
}
