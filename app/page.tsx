"use client";

import { useState } from "react";

import { HeroSection } from "@/components/portfolio/hero-section";
import { StoryChapter } from "@/components/portfolio/story-chapter";
import { ProjectCard } from "@/components/portfolio/project-card";
import { SkillsTerminal } from "@/components/portfolio/skills-terminal";
import { JourneyTimeline } from "@/components/portfolio/journey-timeline";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";
import { Navigation } from "@/components/portfolio/navigation";

import { PROJECTS } from "@/lib/data";

const projects = PROJECTS;

export default function PortfolioPage() {
  const [showUI, setShowUI] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-[#faf6f1] overflow-x-hidden">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Navigation */}
      {showUI && <Navigation />}

      {/* Hero Section */}
      <HeroSection onBootComplete={() => setShowUI(true)} />

      {/* Chapter II - Origin Story */}
      <section id="origin">
        <StoryChapter
          chapterNumber="Chapter II"
          title="The Origin"
          subtitle="Where curiosity met code"
          content={
            <div className="max-w-3xl">
              <p className="text-xl md:text-2xl text-[#faf6f1] leading-relaxed mb-8 font-serif">
                Based in Calgary, I discovered my passion for building at the intersection
                of <span className="text-[#e07a3c] font-medium">artificial intelligence</span> and{" "}
                <span className="text-[#e07a3c] font-medium">web development</span>. What started
                as tinkering with code evolved into a mission.
              </p>
              <p className="text-xl md:text-2xl text-[#d4d4d4] leading-relaxed font-serif">
                Today, through <span className="text-[#4ade80] font-medium">RAJ AI</span>, I craft
                intelligent systems that push boundaries — from multi-agent orchestration
                platforms to no-code AI builders that democratize technology creation.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 md:gap-10 mt-16 pt-10 border-t border-[#333]">
                {[
                  { value: "30+", label: "Open Source Projects" },
                  { value: "6", label: "GitHub Followers" },
                  { value: "∞", label: "Lines of Coffee" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center group">
                    <div className="text-3xl md:text-5xl font-serif text-[#e07a3c] mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                    <div className="font-mono text-xs md:text-sm text-[#888] group-hover:text-[#faf6f1] transition-colors duration-300 leading-tight uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </section>

      {/* Chapter III - Skills Arsenal */}
      <section id="arsenal" className="bg-[#151515]">
        <StoryChapter
          chapterNumber="Chapter III"
          title="The Arsenal"
          subtitle="Tools of the trade"
          align="center"
          content={<SkillsTerminal />}
        />
      </section>

      {/* Chapter IV - Creations */}
      <section id="creations">
        <StoryChapter
          chapterNumber="Chapter IV"
          title="The Creations"
          subtitle="Building the future, one project at a time"
          content={
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  index={i}
                />
              ))}
            </div>
          }
        />

        {/* View All Projects Link */}
        <div className="text-center pb-16 px-6">
          <a
            href="https://github.com/rajshah9305?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#e07a3c] text-[#e07a3c] font-mono text-base rounded-lg hover:bg-[#e07a3c] hover:text-[#0d0d0d] transition-all duration-300"
          >
            View All Repositories
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Chapter V - Journey */}
      <section id="journey" className="bg-[#151515]">
        <StoryChapter
          chapterNumber="Chapter V"
          title="The Journey"
          subtitle="Milestones along the way"
          align="center"
          content={<JourneyTimeline />}
        />
      </section>

      {/* Chapter VI - Connect */}
      <section id="connect">
        <StoryChapter
          chapterNumber="Chapter VI"
          title="Let's Connect"
          subtitle="The next chapter starts with you"
          align="center"
          content={<ContactSection />}
        />
      </section>

      {/* Footer */}
      {showUI && <Footer />}
    </main>
  );
}
