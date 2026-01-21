"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === "A" || 
                           target.tagName === "BUTTON" || 
                           target.closest("a") || 
                           target.closest("button");
      setIsHovering(!!isInteractive);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("mouseenter", handleMouseEnter);
      window.addEventListener("mouseover", handleMouseOver);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("mouseenter", handleMouseEnter);
        window.removeEventListener("mouseover", handleMouseOver);
      };
    }
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        * {
          cursor: none;
        }
        a, button, [role="button"] {
          cursor: none;
        }
      `}</style>

      <motion.div
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        className="fixed w-10 h-10 border-2 border-[#e07a3c] rounded-full pointer-events-none z-[9999] mix-blend-screen"
      />

      <motion.div
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 30,
          mass: 0.2,
        }}
        className="fixed w-2 h-2 bg-[#e07a3c] rounded-full pointer-events-none z-[9999]"
      />

      {isHovering && (
        <motion.div
          animate={{
            x: mousePosition.x - 30,
            y: mousePosition.y - 30,
            opacity: isVisible ? 0.3 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="fixed w-16 h-16 bg-[#e07a3c] rounded-full pointer-events-none z-[9998] blur-xl"
        />
      )}
    </>
  );
}
