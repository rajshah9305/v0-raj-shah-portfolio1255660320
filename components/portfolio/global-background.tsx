"use client";

import React from "react";

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none bg-background">
      {/* Global Grid Pattern (Subtle Engineering Feel) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />

      {/* Animated Gradient Blobs (Organic/Alive Feel) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[var(--amber)] opacity-[0.08] mix-blend-screen blur-[100px] animate-blob" />

      <div className="absolute top-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-[var(--forest)] opacity-[0.08] mix-blend-screen blur-[100px] animate-blob animation-delay-2000" />

      <div className="absolute bottom-[-20%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-[var(--amber)] opacity-[0.05] mix-blend-screen blur-[100px] animate-blob animation-delay-4000" />

      {/* Vignette to focus attention to center */}
      <div className="absolute inset-0 z-40 bg-[radial-gradient(transparent_0%,var(--background)_100%)]" />

      {/* Noise Texture (Global - kept high z-index via class but managed here) */}
      <div className="noise-overlay" />
    </div>
  );
}
