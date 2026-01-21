"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function MouseFollower() {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <div className="w-full h-full rounded-full bg-[#e07a3c] opacity-50 blur-[2px]" />
            </motion.div>

            {/* Larger trailing glow */}
            <motion.div
                className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-40 mix-blend-screen"
                style={{
                    x: cursorX, // No spring for the glow to make it trail slightly differently or just stay raw
                    y: cursorY,
                    translateX: "-30%", // Adjust to center roughly since w-32 is much larger
                    translateY: "-30%"
                }}
                transition={{ duration: 0.2 }}
            >
                <div className="w-full h-full rounded-full bg-[#e07a3c] opacity-10 blur-[40px]" />
            </motion.div>
        </>
    );
}
