"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Navbar } from "@/components/layout/Navbar";

const socialLinks = [
  {
    icon: MdEmail,
    href: "mailto:hafidzthufail@email.com",
    label: "Email",
    ariaLabel: "Send Email",
  },
  {
    icon: FaGithub,
    href: "https://github.com/HafidzThufail22",
    label: "GitHub",
    ariaLabel: "Visit GitHub Profile",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/hafidzthufail",
    label: "LinkedIn",
    ariaLabel: "Visit LinkedIn Profile",
  },
];

export function Hero() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      <section id="home" className="relative h-screen bg-background overflow-hidden">

        {/* ── PORTFOLIO YEAR — upper left, beside photo ── */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={showContent ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-[28%] left-24 md:left-28 z-20"
        >
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-foreground/40 font-medium leading-relaxed">
            Portofolio
          </p>
          <p className="text-3xl md:text-4xl font-bold text-foreground/20 tracking-tight leading-none">
            2026
          </p>
        </motion.div>

        {/* Background — grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                              linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* ── PROFILE PHOTO — centered, flush to bottom ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
          style={{
            width: "clamp(260px, 36vw, 520px)",
            height: "clamp(340px, 75vh, 750px)",
            // Mask fades all edges so container box disappears
            WebkitMaskImage: `
              linear-gradient(to bottom, transparent 0%, black 6%, black 52%, transparent 100%),
              linear-gradient(to right,  transparent 0%, black 8%, black 92%, transparent 100%)
            `,
            WebkitMaskComposite: "source-in",
            maskImage: `
              linear-gradient(to bottom, transparent 0%, black 6%, black 52%, transparent 100%),
              linear-gradient(to right,  transparent 0%, black 8%, black 92%, transparent 100%)
            `,
            maskComposite: "intersect",
          }}
        >
          <Image
            src="/images/profile.png"
            alt="Hafidz Thufail — Full Stack Developer"
            fill
            className="object-cover object-top"
            style={{ objectPosition: "center top" }}
            priority
          />
        </motion.div>

        {/* ── SOCIAL ICONS — bottom left ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={showContent ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="absolute left-8 md:left-12 bottom-14 z-20 flex flex-col items-center gap-5"
        >
          {/* Vertical line above icons */}
          <div className="w-px h-12 bg-foreground/20" />

          {socialLinks.map(({ icon: Icon, href, label, ariaLabel }, index) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={ariaLabel}
              initial={{ opacity: 0, y: 10 }}
              animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center w-10 h-10 rounded-full
                border border-foreground/15 bg-background/60 backdrop-blur-sm
                text-foreground/50 hover:text-foreground hover:border-foreground/40
                transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
            >
              <Icon size={18} />
              {/* Tooltip */}
              <span
                className="absolute left-12 text-xs font-medium text-foreground/60 whitespace-nowrap
                opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0
                transition-all duration-200 pointer-events-none"
              >
                {label}
              </span>
            </motion.a>
          ))}

          {/* Vertical line below icons */}
          <div className="w-px h-12 bg-foreground/20" />
        </motion.div>

        {/* ── NAME TEXT — right side ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={showContent ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="absolute right-6 md:right-10 lg:right-14 z-20
            flex flex-col justify-center
            top-1/2 -translate-y-1/2"
        >
          {/* Name — large bold */}
          <div className="leading-none text-right">
            <h1
              className="font-bold text-foreground tracking-tighter block"
              style={{ fontSize: "clamp(3rem, 7vw, 8rem)", lineHeight: 0.9 }}
            >
              Hafidz
            </h1>
            <h1
              className="font-bold tracking-tighter block"
              style={{
                fontSize: "clamp(3rem, 7vw, 8rem)",
                lineHeight: 0.9,
                WebkitTextStroke: "1.5px var(--foreground)",
                color: "transparent",
              }}
            >
              Thufail.
            </h1>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-foreground/20 my-5" />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-foreground/50 text-right text-xs md:text-sm tracking-widest uppercase font-medium"
          >
            Full Stack Developer
            <br />
            <span className="text-foreground/30">&amp; UI/UX Designer</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 mt-8 justify-end"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex h-10 px-6 items-center justify-center rounded-full
                bg-foreground text-background text-xs font-semibold tracking-wider uppercase
                hover:bg-foreground/90 transition-all duration-300
                hover:shadow-[0_0_24px_rgba(255,255,255,0.15)]"
            >
              View Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex h-10 px-6 items-center justify-center rounded-full
                border border-foreground/25 text-foreground/60 text-xs font-semibold tracking-wider uppercase
                hover:border-foreground/50 hover:text-foreground transition-all duration-300"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

      </section>
    </>
  );
}
