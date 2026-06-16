"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "E-Commerce Platform",
    stack: "NEXT.JS · TYPESCRIPT · PRISMA · TAILWIND",
    year: "2026",
    description: "Modern e-commerce platform with full payment gateway integration, seamless cart management, and a robust admin dashboard for inventory tracking.",
    link: "#"
  },
  {
    name: "Task Management App",
    stack: "REACT · SOCKET.IO · MONGODB · EXPRESS",
    year: "2025",
    description: "Real-time task management application enabling team collaboration, live updates, drag-and-drop boards, and detailed productivity analytics.",
    link: "#"
  },
  {
    name: "Restaurant Landing Page",
    stack: "FIGMA · FRAMER MOTION · NEXT.JS",
    year: "2024",
    description: "High-performance marketing landing page with smooth scroll animations, interactive menus, and reservation system integrations.",
    link: "#"
  },
  {
    name: "AI Chatbot Assistant",
    stack: "PYTHON · QDRANT · OPENAI · REACT",
    year: "2023",
    description: "Intelligent customer service chatbot built with RAG architecture, capable of answering context-specific queries based on company documentation.",
    link: "#"
  }
];

export function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="projects" className="py-32 relative bg-background border-t border-border/20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* ── HEADER SECTION ── */}
        <div className="flex flex-col-reverse lg:flex-row lg:items-end justify-between mb-24 gap-8">
          
          {/* Left: Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-sm mb-4 lg:mb-0"
          >
            <p className="text-foreground-muted text-base md:text-lg leading-relaxed">
              Recent projects spanning full-stack development, interactive web, and product design — from concept to ship.
            </p>
          </motion.div>

          {/* Right: Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="leading-none text-left lg:text-right"
          >
            <h1
              className="font-bold text-foreground tracking-tighter uppercase block"
              style={{ fontSize: "clamp(3.5rem, 6vw, 6rem)", lineHeight: 0.9 }}
            >
              Project
            </h1>
            <h1
              className="font-bold tracking-tighter uppercase block flex items-center lg:justify-end"
              style={{ 
                fontSize: "clamp(3.5rem, 6vw, 6rem)", 
                lineHeight: 0.9,
                WebkitTextStroke: "1.5px var(--foreground)",
                color: "transparent",
              }}
            >
              .Completed
            </h1>
          </motion.div>
          
        </div>

        {/* ── PROJECTS LIST (ACCORDION) ── */}
        <div className="border-t border-border/40">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            const numberString = (index + 1).toString().padStart(2, "0");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-border/40 group"
              >
                {/* Visible Row Header */}
                <div 
                  onClick={() => toggleProject(index)}
                  className="py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:bg-foreground/[0.02] transition-colors px-4 -mx-4 rounded-xl"
                >
                  {/* Left: Index & Name */}
                  <div className="flex items-center gap-8 md:gap-16 lg:gap-24 md:w-1/2">
                    <span className="text-xs md:text-sm font-mono text-foreground-muted">
                      {numberString}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </h2>
                  </div>

                  {/* Right: Stack, Year, Icon */}
                  <div className="flex items-center justify-between md:justify-end gap-8 md:gap-16 md:w-1/2">
                    <span className="text-[10px] md:text-xs font-mono tracking-widest text-foreground/50 uppercase leading-relaxed max-w-[200px] md:max-w-xs">
                      {project.stack}
                    </span>
                    
                    <div className="flex items-center gap-8 md:gap-16">
                      <span className="text-sm md:text-base font-mono text-foreground-muted">
                        {project.year}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-foreground-muted"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 pt-4 px-4 -mx-4 flex flex-col md:flex-row gap-8 lg:gap-24">
                        <div className="md:w-1/2 pl-0 md:pl-[6.5rem] lg:pl-[8.5rem]">
                          <p className="text-foreground-muted text-lg md:text-xl leading-relaxed mb-8">
                            {project.description}
                          </p>
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
                          >
                            View Project
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </a>
                        </div>
                        {/* Optional Placeholder for Image/Video later */}
                        <div className="md:w-1/2 h-48 md:h-auto rounded-2xl bg-foreground/[0.03] border border-border/50 flex items-center justify-center">
                          <span className="text-foreground/30 text-sm tracking-widest uppercase">Project Preview</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
