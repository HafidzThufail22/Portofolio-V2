"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "2+",
    label: "Years of experience",
  },
  {
    value: "10+",
    label: "Projects completed",
  },
  {
    value: "95%",
    label: "Client satisfaction",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ── LEFT: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Who I'am ?
            </h1>
            
            <div className="space-y-6 text-foreground-muted text-base md:text-lg leading-relaxed">
              <p>
                I'm a Informatics Student at Digital Technology University of Indonesia, with a passion for UI/UX design and Web Development.
              </p>
              <p>
                Currently, I am focusing on honing my skills as a Full-Stack Developer with the goal of building well-rounded web applications—combining intuitive interfaces from a designer’s perspective with robust and efficient backend system architecture.
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT: Vertical Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col w-full"
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`py-8 flex flex-col space-y-2 ${
                  index !== stats.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-5xl md:text-6xl font-bold text-foreground tracking-tighter"
                >
                  {stat.value}
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-sm md:text-base text-foreground/50 tracking-widest uppercase font-medium"
                >
                  {stat.label}
                </motion.span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
