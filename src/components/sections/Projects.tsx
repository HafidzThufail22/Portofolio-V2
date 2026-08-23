"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectItem {
  name: string;
  stack: string;
  year: string;
  description: string;
  highlights: string[];
  link: string;
  image?: string;
}

const projects: ProjectItem[] = [
  {
    name: "KRS JAWA III INFORMATION SYSTEM",
    stack: "REACT · VITE · TYPESCRIPT · TAILWIND · MYSQL",
    year: "2026",
    description: "A modern Single Page Application (SPA) developed by migrating a monolithic Laravel frontend to React. Designed using the Feature-Driven Development (FDD) methodology to significantly improve page loading speeds and user interaction.",
    highlights: [
      "Migrated legacy monolithic Laravel architecture to a high-performance React SPA",
      "Integrated multi-tenant Express.js backend serving multiple regional platforms dynamically",
      "Applied Feature-Driven Development (FDD) to optimize response times and UX"
    ],
    link: "https://www.krsjawa3.com/",
    image: "/images/project-img/krsjawa3.png"
  },
  {
    name: "GEMILANG RECRUITMENT MANAGEMENT SYSTEM",
    stack: "REACT · EXPRESS.JS · PRISMA · VITE · NODE.JS · TYPESCRIPT · TAILWIND · MYSQL",
    year: "2026",
    description: "A comprehensive recruitment platform equipped with automated scoring rules, secure AWS S3 document handling, and a robust admin dashboard for seamless applicant tracking.",
    highlights: [
      "Engineered automated candidate scoring algorithms for fast applicant filtering",
      "Integrated secure AWS S3 cloud storage for CVs and portfolio attachments",
      "Built interactive administrative dashboard for complete applicant pipeline management"
    ],
    link: "https://recruitment.kamuhebat.com/",
    image: "/images/project-img/gemilangRecruitment.png"
  },
  {
    name: "DRIVING SCHOOL PLATFORM",
    stack: "NEXT.JS · TYPESCRIPT · SUPABASE · TAILWIND · POSTGRESQL",
    year: "2026",
    description: "A comprehensive web solution for a driving course agency. It delivers an engaging user experience for public visitors while empowering administrators with a custom dashboard to seamlessly manage course packages, staff roles, and company details.",
    highlights: [
      "Crafted responsive public portal showcasing course tiers and interactive booking",
      "Developed secure admin management portal with role-based access control",
      "Integrated Supabase authentication and PostgreSQL relational database"
    ],
    link: "https://lpksadewa.vercel.app/",
    image: "/images/project-img/sadewaCourse.png"
  },
  {
    name: "ITSCRAFF MARKETPLACE",
    stack: "LARAVEL · PHP · TAILWIND · MYSQL · BIG CARTEL",
    year: "2026",
    description: "A specialized digital marketplace platform developed for Cipsi Studio. Designed for showcasing creative craft products with an integrated Big Cartel checkout system for seamless purchasing without needing a complex third-party payment gateway.",
    highlights: [
      "Built custom creative marketplace web platform using Laravel, PHP & MySQL",
      "Integrated Big Cartel checkout flow for seamless, simplified order processing",
      "Crafted responsive and modern product showcase interface with Tailwind CSS"
    ],
    link: "https://itscraff.infinityfreeapp.com/",
    image: "/images/project-img/itsCraff.png"
  },
  {
    name: "COFFE SHOP MOBILE APP",
    stack: "UI/UX DESIGN · FIGMA · PROTOTYPE",
    year: "2025",
    description: "A visually appealing and user-friendly UI/UX design concept for a modern coffee shop application. The project focuses on streamlining the digital ordering experience, featuring an intuitive menu navigation, seamless checkout flow, and an engaging aesthetic.",
    highlights: [
      "Designed intuitive digital ordering workflows and streamlined checkout experience",
      "Created modern dark-aesthetic visual identity highlighting product imagery",
      "Built clickable high-fidelity mobile prototype with micro-interactions in Figma"
    ],
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
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-8 xl:px-16">

        {/* ── HEADER SECTION ── */}
        <div className="flex flex-col-reverse lg:flex-row lg:items-end justify-between mb-20 gap-8">

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

        {/* ── PROJECTS LIST (ACCORDION WITH DARK CARD) ── */}
        <div className="border-t border-foreground/15">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div key={index} className="border-b border-foreground/15">
                {/* ── ROW HEADER (Gambar 1 & Gambar 2) ── */}
                <div
                  onClick={() => toggleProject(index)}
                  className="group py-7 sm:py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 cursor-pointer transition-colors duration-200"
                >
                  {/* 1. Left: Project Title (2 lines) */}
                  <div className="md:w-5/12 lg:w-5/12 md:pr-4">
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-foreground group-hover:text-foreground/80 transition-colors leading-[1.2] max-w-md">
                      {project.name}
                    </h2>
                  </div>

                  {/* 2. Middle: Tech Stack (positioned to the left of the middle area, max 2 lines) */}
                  <div className="md:w-4/12 lg:w-4/12 md:px-2">
                    <p className="text-[11px] sm:text-xs font-mono tracking-widest text-foreground/50 uppercase leading-relaxed max-w-[340px] lg:max-w-[400px]">
                      {project.stack}
                    </p>
                  </div>

                  {/* 3. Right: Year & Toggle Button */}
                  <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-8 md:gap-10 md:w-3/12 lg:w-3/12 shrink-0">
                    {/* Year */}
                    <span className="text-xs sm:text-sm md:text-base font-mono text-foreground-muted font-semibold tracking-wider">
                      {project.year}
                    </span>

                    {/* Square/Rounded Toggle Button with Hover Inversion (Gambar 1 & Gambar 2 & Gambar 3) */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 border ${isExpanded
                        ? "bg-foreground text-background border-foreground shadow-md"
                        : "bg-foreground/5 text-foreground/70 border-foreground/10 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground"
                        }`}
                    >
                      <motion.div
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex items-center justify-center"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* ── EXPANDED DARK DETAIL CARD (Gambar 3 - Black Theme) ── */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pt-2">
                        <div className="bg-[#111111] text-[#fdfbf7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10">
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                            {/* Left Side: Title, Description, Bullet Highlights, CTA Button */}
                            <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-between">
                              <div>
                                {/* Project Title */}
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase mb-4">
                                  {project.name}
                                </h3>

                                {/* Description */}
                                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                                  {project.description}
                                </p>

                                {/* Bullet Highlights */}
                                <ul className="space-y-3 mb-8">
                                  {project.highlights.map((highlight, hIdx) => (
                                    <li key={hIdx} className="flex items-start gap-3">
                                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 shrink-0" />
                                      <span className="text-white/85 text-sm sm:text-base leading-relaxed">
                                        {highlight}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Action Button: View Project */}
                              <div className="pt-2">
                                <a
                                  href={project.link}
                                  target={project.link.startsWith("http") ? "_blank" : undefined}
                                  rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                  className="inline-flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] transition-all duration-300 group/btn"
                                >
                                  <span>View Project</span>
                                  <svg
                                    className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </a>
                              </div>
                            </div>

                            {/* Right Side: 1 Single Image Preview with 16:9 Aspect Ratio */}
                            <div className="lg:col-span-6 xl:col-span-5">
                              <div className="w-full aspect-video relative rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden flex items-center justify-center group/img">
                                {project.image ? (
                                  <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                                  />
                                ) : (
                                  <div className="flex flex-col items-center gap-3 text-white/30 text-center p-6">
                                    <svg
                                      className="w-10 h-10 opacity-30"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                      />
                                    </svg>
                                    <span className="text-xs font-mono tracking-widest uppercase">
                                      Project Preview Coming Soon
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
