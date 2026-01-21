"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Terminal, Star, Zap } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  index: number;
  stats?: {
    stars?: number;
    downloads?: string;
  };
}

export function ProjectCardEnhanced({ 
  title, 
  description, 
  tech, 
  githubUrl, 
  liveUrl,
  featured = false,
  index,
  stats
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative ${featured ? "md:col-span-2 lg:col-span-2" : ""}`}
    >
      <div className={`relative h-full bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#333] rounded-xl p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-[#e07a3c] hover:shadow-[0_0_40px_rgba(224,122,60,0.2)] ${featured ? "lg:p-10" : ""}`}>
        {/* Featured badge */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-[#e07a3c]/10 border border-[#e07a3c]/30 rounded-full"
          >
            <Star className="w-3.5 h-3.5 text-[#e07a3c] fill-[#e07a3c]" />
            <span className="font-mono text-xs text-[#e07a3c] font-semibold">Featured</span>
          </motion.div>
        )}
        
        {/* Terminal header decoration */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#e07a3c]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#2d5a3d]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#555]" />
          </div>
          <span className="font-mono text-xs text-[#888] truncate">
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
            <h3 className={`font-serif text-[#faf6f1] group-hover:text-[#e07a3c] transition-colors leading-tight ${featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
              {title}
            </h3>
          </div>
          
          <p className={`text-[#999] mb-6 leading-relaxed ${featured ? "text-base md:text-lg" : "text-sm md:text-base"}`}>
            {description}
          </p>
          
          {/* Stats for featured projects */}
          {featured && stats && (
            <div className="flex gap-6 mb-6 pb-6 border-b border-[#2a2a2a]">
              {stats.stars && (
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#e07a3c]" />
                  <span className="font-mono text-sm text-[#faf6f1]">{stats.stars}+ stars</span>
                </div>
              )}
              {stats.downloads && (
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#4ade80]" />
                  <span className="font-mono text-sm text-[#faf6f1]">{stats.downloads}</span>
                </div>
              )}
            </div>
          )}
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t) => (
              <span 
                key={t}
                className="px-3 py-1.5 bg-[#252525] text-[#aaa] text-xs font-mono rounded-lg border border-[#333] group-hover:border-[#e07a3c]/30 transition-colors"
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
              className="flex items-center gap-2 text-[#888] hover:text-[#e07a3c] transition-colors group/link pt-4"
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
                className="flex items-center gap-2 text-[#888] hover:text-[#e07a3c] transition-colors group/link pt-4"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-mono text-sm">Live</span>
                <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
              </a>
            )}
          </div>
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e07a3c] to-transparent opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none rounded-xl" />
      </div>
    </motion.article>
  );
}
