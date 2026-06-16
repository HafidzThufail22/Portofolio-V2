"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "February 2026 — PRESENT",
    location: "INDONESIA",
    type: "FREELANCE",
    role: "FULL-STACK DEVELOPER",
    company: "Kasiroke",
    description: "Owning broad engineering responsibilities across data ingestion pipelines, infrastructure operations, and full-stack product delivery.",
    bullets: [
      "Contributing to core products and internal tooling in a fast-moving engineering team.",
      "Improving customer-facing analytics workflows with attention to performance, reliability, and maintainability."
    ]
  },
  {
    period: "February 2026 — June 2026",
    location: "YOGYAKARTA",
    type: "INTERNSHIP",
    role: "FRONT-END DEVELOPER",
    company: "Balai P3KP Jawa III",
    description: "Helping teams build and ship end-to-end systems, from API and data layers to production web apps, including architecture and stack choices where needed.",
    bullets: [
      "Delivered full-stack web products with pragmatic performance, maintainability, and clear developer experience.",
      "Worked asynchronously with founders and distributed teams with clear documentation and communication."
    ]
  },
  {
    period: "September 2025 — January 2026",
    location: "YOGYAKARTA",
    type: "ACADEMIC",
    role: "ASSISTANT LECTURER OF DATA STUCTURE",
    company: "Digital Technology University of Indonesia",
    description: "Assisted professors in guiding students through Data Structure laboratory sessions, ensuring a comprehensive understanding of core programming concepts and algorithms.",
    bullets: [
      "Mentored and evaluated students on complex data structure implementations, troubleshooting logic and syntax errors.",
      "Facilitated hands-on coding sessions, creating an engaging and supportive learning environment for the class."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-background border-t border-border/20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* ── LEFT: Sticky Title ── */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <div className="leading-none mb-8">
                <h1
                  className="font-bold text-foreground tracking-tighter uppercase block"
                  style={{ fontSize: "clamp(3.5rem, 6vw, 6rem)", lineHeight: 0.9 }}
                >
                  Experience
                </h1>
                <h1
                  className="font-bold tracking-tighter uppercase block"
                  style={{
                    fontSize: "clamp(3.5rem, 6vw, 6rem)",
                    lineHeight: 0.9,
                    WebkitTextStroke: "1.5px var(--foreground)",
                    color: "transparent",
                  }}
                >
                  Journey.
                </h1>
              </div>
              <p className="text-foreground-muted text-base md:text-lg max-w-md leading-relaxed">
                I build production systems across web apps, APIs, and infrastructure. Here is a summary of my recent work experience and journey in the tech industry.
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT: Timeline ── */}
          <div className="lg:col-span-7 relative">
            {/* Vertical Line for Timeline */}
            <div className="absolute left-[7px] top-2 bottom-0 w-px bg-border/60 hidden md:block" />
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative md:pl-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-foreground bg-background hidden md:block" />
                  
                  {/* Metadata: Period, Location, Type */}
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[11px] md:text-xs font-semibold tracking-widest text-foreground-muted uppercase mb-5">
                    <span>{exp.period}</span>
                    <span className="text-foreground/30">—</span>
                    <span>{exp.location}</span>
                    <span className="px-3 py-1 rounded-full border border-border/80">
                      {exp.type}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <div className="mb-5">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-tight mb-2">
                      {exp.role}
                    </h2>
                    {/* Company name in monochrome style */}
                    <p className="text-foreground-muted font-medium text-lg">
                      {exp.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-foreground-muted text-base mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullets with specific icon ↳ */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start text-foreground-subtle text-sm md:text-base">
                        <span className="mr-3 mt-0.5 opacity-60 shrink-0">↳</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
