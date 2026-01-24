/**
 * Shared TypeScript types and interfaces
 */

import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  skills: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "milestone" | "project" | "learning";
}

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
  handle: string;
}

export interface PhilosophyItem {
  title: string;
  description: string;
}
