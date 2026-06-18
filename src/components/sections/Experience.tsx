"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "February 2026 — PRESENT",
    location: "INDONESIA",
    type: "FREELANCE",
    role: "FULL-STACK DEVELOPER",
    company: "KasirOke",
    description: "Freelance developer at KasirOke — a startup building integrated business software including POS (Point-of-Sale), HRIS, and ERP solutions for their clients. Currently spearheading the Gemilang project: a full-stack Recruitment Management System serving as one of KasirOke's client deployments.",
    bullets: [
      "Built the Gemilang Recruitment Management System end-to-end — featuring automated applicant scoring, AWS S3 document handling, and an admin dashboard for streamlined applicant tracking.",
      "Worked within KasirOke's multi-product ecosystem (POS, HRIS, ERP), adapting system architecture and UI to meet the specific operational needs of each client's business."
    ]
  },
  {
    period: "February 2026 — June 2026",
    location: "YOGYAKARTA",
    type: "INTERNSHIP",
    role: "FRONT-END DEVELOPER",
    company: "Balai P3KP Jawa III",
    description: "Spearheaded the front-end modernization of the Klinik PKP Jawa III Information System, migrating a legacy monolithic Laravel architecture to a highly responsive React Single Page Application (SPA).",
    bullets: [
      "Utilized Feature-Driven Development (FDD) methodology to build and structure the frontend, significantly improving page loading speeds and overall user interaction.",
      "Developed a scalable front-end architecture that seamlessly integrates with a multi-tenant Node.js backend, capable of serving multiple regional platforms dynamically."
    ]
  },
  {
    period: "September 2025 — January 2026",
    location: "YOGYAKARTA",
    type: "ACADEMIC",
    role: "ASSISTANT LECTURER OF DATA STRUCTURE",
    company: "Digital Technology University of Indonesia",
    description: "Assisted the main lecturer in conducting Data Structure laboratory sessions (praktikum), guiding students through hands-on programming tasks and core algorithm implementations.",
    bullets: [
      "Facilitated laboratory practice sessions, actively mentoring students in troubleshooting code and understanding complex data structure logic.",
      "Evaluated and graded student laboratory reports, ensuring accuracy in implementation and a comprehensive understanding of the learning material."
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
              <p className="text-foreground-muted text-base md:text-lg max-w-xl leading-relaxed">
                Navigating the intersection of intuitive design and robust engineering. My trajectory spans from mentoring peers in core algorithms, modernizing legacy systems into high-performance SPAs, to architecting scalable business platforms as a freelance full-stack developer. Here is a timeline of my continuous technical evolution.
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
