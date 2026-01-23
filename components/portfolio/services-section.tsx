"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";

export function ServicesSection() {
    return (
        <section className="py-24 md:py-32 px-4 md:px-8 border-b border-white/10 bg-background/50 backdrop-blur-sm relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24">
                    <span className="font-mono text-primary text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block">
                        System Modules
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-tight text-foreground">
                        System Capabilities
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-6 md:p-8 border border-white/5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                                </div>

                                <div className="h-full flex flex-col justify-between">
                                    <div>
                                        <span className="font-mono text-xs text-muted-foreground/50 tracking-widest mb-4 block">
                                            MOD_{String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-2xl font-serif tracking-tight text-foreground mb-4 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground/80 leading-relaxed font-serif tracking-wide text-sm md:text-base">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute bottom-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                                        <div className="w-1 h-1 bg-primary rounded-full animate-pulse delay-75" />
                                        <div className="w-1 h-1 bg-primary rounded-full animate-pulse delay-150" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
