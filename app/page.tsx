"use client";

import { HeroSection } from "@/components/portfolio/hero-section";
import { StoryChapter } from "@/components/portfolio/story-chapter";
import { ProjectCard } from "@/components/portfolio/project-card";
import { SkillsTerminal } from "@/components/portfolio/skills-terminal";
import { JourneyTimeline } from "@/components/portfolio/journey-timeline";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";
import { Navigation } from "@/components/portfolio/navigation";

const projects = [
  {
    title: "RAJ AI Spark to Sentience",
    description: "An advanced AI platform exploring the journey from basic sparks of intelligence to full sentience. Built with cutting-edge neural architectures.",
    tech: ["TypeScript", "React", "AI/ML", "Next.js"],
    githubUrl: "https://github.com/rajshah9305/rajai-spark-to-sentience",
    featured: true
  },
  {
    title: "AI Agent Orchestration Platform",
    description: "Ultra-fast AI agent management platform with Cerebras integration for orchestrating multiple AI agents in complex workflows.",
    tech: ["TypeScript", "Cerebras", "CrewAI", "React"],
    githubUrl: "https://github.com/rajshah9305/AIAgentOrchestrationPlatform",
    liveUrl: "https://www.rajai.org"
  },
  {
    title: "Terminal Boot Sequence",
    description: "A mesmerizing terminal-style boot sequence application with authentic CRT effects, built with React and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    githubUrl: "https://github.com/rajshah9305/terminal-boot-sequencenn"
  },
  {
    title: "AI App Builder (Cerebras)",
    description: "No-code AI application builder powered by Cerebras and Llama 4, enabling rapid prototyping of intelligent applications.",
    tech: ["TypeScript", "Cerebras", "Llama 4", "Next.js"],
    githubUrl: "https://github.com/rajshah9305/AIAppBuilder-CerebrasAI-llama-4"
  },
  {
    title: "Crews Dashboard AI",
    description: "An intelligent dashboard for managing and monitoring AI crews and agents across multiple platforms and workflows.",
    tech: ["TypeScript", "React", "AI Agents"],
    githubUrl: "https://github.com/rajshah9305/crewsdashboardai"
  },
  {
    title: "SciViz Design System",
    description: "A cutting-edge web-based project that redefines portal navigation design with scientific visualization principles.",
    tech: ["TypeScript", "Design System", "React"],
    githubUrl: "https://github.com/rajshah9305/SciViz-Design-System"
  }
];

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-[#0d0d0d] text-[#faf6f1] overflow-x-hidden">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Chapter II - Origin Story */}
      <section id="origin">
        <StoryChapter
          chapterNumber="Chapter II"
          title="The Origin"
          subtitle="Where curiosity met code"
          content={
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl text-[#e8e4df] leading-relaxed mb-6 font-serif">
                Based in Calgary, I discovered my passion for building at the intersection 
                of <span className="text-[#e07a3c] font-medium">artificial intelligence</span> and{" "}
                <span className="text-[#e07a3c] font-medium">web development</span>. What started 
                as tinkering with code evolved into a mission.
              </p>
              <p className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed font-serif">
                Today, through <span className="text-[#4ade80] font-medium">RAJ AI</span>, I craft 
                intelligent systems that push boundaries — from multi-agent orchestration 
                platforms to no-code AI builders that democratize technology creation.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 pt-8 border-t border-[#333]">
                {[
                  { value: "30+", label: "Open Source Projects" },
                  { value: "6", label: "GitHub Followers" },
                  { value: "∞", label: "Lines of Coffee" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-4xl font-serif text-[#e07a3c]">{stat.value}</div>
                    <div className="font-mono text-[10px] md:text-xs text-[#888] mt-2 leading-tight">{stat.label}</div>
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
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#e07a3c] text-[#e07a3c] font-mono text-sm rounded-lg hover:bg-[#e07a3c] hover:text-[#0d0d0d] transition-all duration-300"
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
      <Footer />
    </main>
  );
}
