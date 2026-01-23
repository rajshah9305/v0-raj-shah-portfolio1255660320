import { Github, Globe, Mail, Linkedin, Twitter, Bot, Layers, Zap, Layout } from "lucide-react";

export const SERVICES = [
    {
        title: "AI Agent Orchestration",
        description: "Architecting complex multi-agent systems where autonomous units collaborate to solve high-order problems. From Cerebras-powered swarms to custom LLM workflows.",
        icon: Bot
    },
    {
        title: "Full-Stack Architecture",
        description: "Building resilient, scalable applications using the Next.js ecosystem. Focusing on type safety, server-side rendering, and edge computing patterns.",
        icon: Layers
    },
    {
        title: "System Optimization",
        description: "Refining code performance and application hydration. Eliminating bottlenecks to ensure instantaneous user interactions and buttery smooth 60fps animations.",
        icon: Zap
    },
    {
        title: "UX/UI Engineering",
        description: "Bridging the gap between design and code. implementing pixel-perfect interfaces with advanced motion primitives and Framer Motion interactions.",
        icon: Layout
    }
];

export const PROJECTS = [
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
    },
    {
        title: "Loom Evolution Canvas",
        description: "An interactive canvas-based evolutionary simulation exploring complex systems and emergent behavior.",
        tech: ["TypeScript", "Canvas API", "Simulation"],
        githubUrl: "https://github.com/rajshah9305/loom-evolution-canvas"
    },
    {
        title: "AI Agenter",
        description: "A comprehensive management system for AI agencies, streamlining workflow and agent coordination.",
        tech: ["JavaScript", "AI Integration", "Automation"],
        githubUrl: "https://github.com/rajshah9305/aIagenter"
    },
    {
        title: "TS Calculator",
        description: "A robust and type-safe calculator application built with modern web technologies.",
        tech: ["TypeScript", "Math Logic", "Web App"],
        githubUrl: "https://github.com/rajshah9305/Calculator"
    }
];

export const SKILL_CATEGORIES = [
    {
        name: "Languages",
        icon: "λ",
        skills: ["TypeScript", "JavaScript", "Python", "HTML/CSS", "SQL"]
    },
    {
        name: "Frameworks",
        icon: "⚡",
        skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "Express"]
    },
    {
        name: "AI & ML",
        icon: "◉",
        skills: ["LangChain", "CrewAI", "OpenAI", "Groq", "Cerebras"]
    },
    {
        name: "Tools",
        icon: "⌘",
        skills: ["Git", "Docker", "AWS", "Vercel", "Supabase"]
    }
];

export const TIMELINE_EVENTS = [
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
] as const;

export const SOCIAL_LINKS = [
    { name: "GitHub", icon: Github, url: "https://github.com/rajshah9305", handle: "@rajshah9305" },
    { name: "Website", icon: Globe, url: "https://www.rajai.org", handle: "rajai.org" },
    { name: "Email", icon: Mail, url: "mailto:contact@rajai.org", handle: "contact@rajai.org" },
];

export const PHILOSOPHY = [
    {
        title: "Systems Thinking",
        description: "Viewing software not as isolated code, but as a living ecosystem of interacting components. Every function, every service, and every pixel plays a vital role in the greater whole."
    },
    {
        title: "Refined Simplicity",
        description: "Complexity is inevitable, but confusion is optional. I strive to distill complex problems into elegant, intuitive solutions that feel effortless to the user."
    },
    {
        title: "Performance as Function",
        description: "Speed is not just a metric; it's a feature. Efficient code respects the user's time and resources, creating a seamless and immersive digital experience."
    }
];

export const BOOT_SEQUENCE = [
    "> INITIATING RAJ_OS KERNEL...",
    "> LOADING NEURAL NETWORKS...",
    "> OPTIMIZING CREATIVE ALGORITHMS...",
    "> CONNECTING TO GLOBAL KNOWLEDGE BASE...",
    "> COMPILING DREAMS INTO EXECUTABLES...",
    "> DECRYPTING THE FUTURE...",
    "> SYSTEM READY. ACCESS GRANTED.",
    "",
    "Welcome to the digital mindscape."
];
