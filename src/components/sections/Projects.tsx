"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Klinik PKP Jawa III Information System",
    stack: "REACT · VITE · TYPESCRIPT · TAILWIND · MYSQL ",
    year: "2026",
    description: "A modern Single Page Application (SPA) developed by migrating a monolithic Laravel frontend to React. Designed using the Feature-Driven Development (FDD) methodology to significantly improve page loading speeds and user interaction. The system utilizes a multi-tenant architecture, allowing a single centralized Node.js Express backend to serve multiple regional platforms (including Klinik PKP Jawa III and Grobogan) dynamically through specific environment configurations. Fully deployed and optimized for production.",
    link: "https://www.krsjawa3.com/",
    image: "/images/project-img/krsjawa3.png"
  },
  {
    name: "GEMILANG RECRUITMENT MANAGEMENT SYSTEM",
    stack: "REACT · EXPRESS.JS · PRISMA · VITE · NODE.JS · TYPESCRIPT · TAILWIND · MYSQL",
    year: "2026",
    description: "A comprehensive recruitment platform equipped with automated scoring rules, secure AWS S3 document handling, and a robust admin dashboard for seamless applicant tracking",
    link: "https://recruitment.kamuhebat.com/",
    image: "/images/project-img/gemilangRecruitment.png"
  },
  {
    name: "DRIVING SCHOOL PLATFORM",
    stack: "NEXT.JS · TYPESCRIPT · SUPABASE · TAILWIND · POSTGRESQL",
    year: "2026",
    description: "A comprehensive web solution for a driving course agency. It delivers an engaging user experience for public visitors while empowering administrators with a custom dashboard to seamlessly manage course packages, staff roles, and company details.",
    link: "#"
  },
  {
    name: "COFFE SHOP MOBILE APP",
    stack: "UI/UX DESIGN · FIGMA · PROTOTYPE",
    year: "2025",
    description: "A visually appealing and user-friendly UI/UX design concept for a modern coffee shop application. The project focuses on streamlining the digital ordering experience, featuring an intuitive menu navigation, seamless checkout flow, and an engaging aesthetic that highlights the product imagery to attract coffee enthusiasts.",
    link: "#",
    image: "/images/project-img/coffeshop-mobileApp.jpg"
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
            className="max-w-lg mb-4 lg:mb-0"
          >
            <p className="text-foreground-muted text-base md:text-lg leading-relaxed">
              A curated showcase of my work: from architecting complex full-stack systems and modernizing legacy applications to crafting intuitive UI/UX experiences. Transforming intricate business requirements into seamless digital products.
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
        <div className="border-t border-foreground/20">
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
                className="border-b border-foreground/20"
              >
                {/* Visible Row Header */}
                <div 
                  onClick={() => toggleProject(index)}
                  className="group py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:bg-foreground transition-colors duration-300 px-6 -mx-6 rounded-xl"
                >
                  {/* Left: Index & Name */}
                  <div className="flex items-center gap-8 md:gap-16 lg:gap-24 md:w-1/2">
                    <span className="text-xs md:text-sm font-mono text-foreground-muted group-hover:text-background/70 transition-colors duration-300">
                      {numberString}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground group-hover:text-background transition-colors duration-300">
                      {project.name}
                    </h2>
                  </div>

                  {/* Right: Stack, Year, Icon */}
                  <div className="flex items-center justify-between md:justify-end gap-8 md:gap-16 md:w-1/2">
                    <span className="text-[10px] md:text-xs font-mono tracking-widest text-foreground/50 group-hover:text-background/60 transition-colors duration-300 uppercase leading-relaxed max-w-[200px] md:max-w-xs">
                      {project.stack}
                    </span>
                    
                    <div className="flex items-center gap-8 md:gap-16">
                      <span className="text-sm md:text-base font-mono text-foreground-muted group-hover:text-background/70 transition-colors duration-300">
                        {project.year}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-foreground-muted group-hover:text-background/70 transition-colors duration-300"
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
                      <div className="pb-12 pt-4 px-4 -mx-4 flex flex-col md:flex-row md:items-center gap-8 lg:gap-24">
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
                        {/* Render Image or Placeholder */}
                        <div className="w-full md:w-1/2 aspect-video relative rounded-2xl bg-foreground/[0.03] border border-border/50 overflow-hidden flex items-center justify-center">
                          {project.image ? (
                            <Image 
                              src={project.image} 
                              alt={project.name} 
                              fill 
                              className="object-cover transition-transform duration-700 hover:scale-105" 
                            />
                          ) : (
                            <span className="text-foreground/30 text-sm tracking-widest uppercase">Image Coming Soon</span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

        {/* ── EXPLORE MORE ON GITHUB ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 md:mt-24 flex justify-center"
        >
          <a 
            href="https://github.com/HafidzThufail22" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4 md:gap-6 text-foreground hover:text-foreground/80 transition-colors"
          >
            <FaGithub className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-xl md:text-2xl font-bold tracking-tight uppercase">
              Explore More on GitHub
            </span>
            <svg 
              className="w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
