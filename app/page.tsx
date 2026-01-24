"use client";

import { useState } from "react";

import { HeroSection } from "@/components/portfolio/hero-section";
import { StoryChapter } from "@/components/portfolio/story-chapter";
import { ProjectsGrid } from "@/components/portfolio/projects-grid";
import { SkillsTerminal } from "@/components/portfolio/skills-terminal";
import { JourneyTimeline } from "@/components/portfolio/journey-timeline";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";
import { Navigation } from "@/components/portfolio/navigation";
import { PhilosophySection } from "@/components/portfolio/philosophy-section";
import { ServicesSection } from "@/components/portfolio/services-section";

import { PROJECTS, BOOT_SEQUENCE } from "@/lib/data";

const projects = PROJECTS;

export default function PortfolioPage() {
  const [showUI, setShowUI] = useState(false);

  return (
    <main className="relative min-h-screen bg-transparent text-foreground overflow-x-hidden">
      {/* Navigation */}
      {showUI && <Navigation />}

      {/* Hero Section */}
      <HeroSection onBootComplete={() => setShowUI(true)} bootSequence={BOOT_SEQUENCE} />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Services/Capabilities Section */}
      <ServicesSection />

      {/* Chapter II - Origin Story */}
      <section id="origin">
        <StoryChapter
          chapterNumber="Chapter II"
          title="The Origin"
          subtitle="Where curiosity met code"
          content={
            <div className="max-w-3xl">
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-8 tracking-wide">
                Based in Calgary, I discovered my passion for building at the intersection
                of <span className="text-foreground font-medium">artificial intelligence</span> and{" "}
                <span className="text-foreground font-medium">web development</span>. What started
                as tinkering with code evolved into a mission.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed tracking-wide">
                Today, through <span className="text-foreground font-medium">RAJ AI</span>, I craft
                intelligent systems that push boundaries — from multi-agent orchestration
                platforms to no-code AI builders that democratize technology creation.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 md:gap-10 mt-16 pt-10 border-t border-border">
                {[
                  { value: "30+", label: "Open Source Projects" },
                  { value: "6", label: "GitHub Followers" },
                  { value: "∞", label: "Lines of Coffee" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center group">
                    <div className="text-3xl md:text-5xl font-serif text-foreground mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                    <div className="font-mono text-xs md:text-sm text-foreground group-hover:text-foreground transition-colors duration-300 leading-tight uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </section>

      {/* Chapter III - Skills Arsenal */}
      <section id="arsenal" className="bg-card">
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
          content={<ProjectsGrid projects={projects} />}
        />

        {/* View All Projects Link */}
        <div className="text-center pb-16 px-6">
          <a
            href="https://github.com/rajshah9305?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-foreground text-foreground font-mono text-base rounded-lg hover:bg-foreground hover:text-background transition-all duration-300"
          >
            View All Repositories
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Chapter V - Journey */}
      <section id="journey" className="bg-card">
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

