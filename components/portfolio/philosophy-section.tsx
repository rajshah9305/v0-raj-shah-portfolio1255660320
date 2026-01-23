"use client";

import { motion } from "framer-motion";
import { PHILOSOPHY } from "@/lib/data";

export function PhilosophySection() {
    return (
        <section className="py-24 md:py-32 px-4 md:px-8 border-b border-white/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                    <div className="md:col-span-1 lg:col-span-3 mb-8 md:mb-12">
                        <span className="font-mono text-primary text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block">
                            Core Values
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-tight text-foreground">
                            Engineering Philosophy
                        </h2>
                    </div>

                    {PHILOSOPHY.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group"
                        >
                            <h3 className="text-2xl md:text-3xl font-serif font-medium tracking-normal leading-tight text-foreground mb-4 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground text-base md:text-lg leading-relaxed tracking-wide">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
