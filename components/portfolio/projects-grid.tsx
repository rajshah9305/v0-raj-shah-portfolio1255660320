"use client";

import { ProjectCard } from "@/components/portfolio/project-card";

interface Project {
  title: string;
  description: string;
  tech: readonly string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

interface ProjectsGridProps {
  projects: readonly Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-8">
      {projects.map((project, i) => {
        // Bento grid logic:
        // Pattern: Big(4) - Small(2) | Small(2) - Small(2) - Small(2) | Small(2) - Big(4)
        const isLarge = i % 4 === 0 || i % 4 === 3;
        const colSpan = isLarge ? "md:col-span-4" : "md:col-span-2";

        return (
          <ProjectCard
            key={project.title}
            {...project}
            index={i}
            className={colSpan}
          />
        );
      })}
    </div>
  );
}
