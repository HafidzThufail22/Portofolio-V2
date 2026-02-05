"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showText, setShowText] = useState(false);

  // Show text after 1.5 seconds delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll progress within the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Image gets smaller when scrolling (only the image, not text)
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  // Navbar visibility (appears after 40% scroll)
  const navbarOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

  // Scroll indicator fades out
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <>
      <motion.div style={{ opacity: navbarOpacity }}>
        <Navbar isVisible={true} />
      </motion.div>

      <section
        ref={sectionRef}
        id="home"
        className="relative h-[200vh] bg-zinc-950"
      >
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-zinc-950" />

          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Profile Image - Separate layer, scales on scroll */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ scale: imageScale, y: imageY }}
            className="absolute z-10"
          >
            {/* Glow Effect Behind Image */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl scale-125" />

            {/* Profile Image Container - Large */}
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] rounded-full overflow-hidden border-4 border-zinc-800/50 shadow-2xl">
              <Image
                src="/images/profile.png"
                alt="Profile"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Dark Overlay at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Text Content - Fixed position, appears after delay, does NOT scale */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute z-20 bottom-[20%] md:bottom-[18%] lg:bottom-[15%] text-center px-4"
          >
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-3 md:mb-4 tracking-tight drop-shadow-2xl">
              Building Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Value.
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base md:text-lg lg:text-xl text-zinc-300 mb-6 md:mb-8 max-w-xl mx-auto drop-shadow-lg"
            >
              Full Stack Developer & UI/UX Designer crafting exceptional digital experiences
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
            >
              <Link
                href="#projects"
                className="inline-flex h-11 md:h-12 px-6 md:px-8 items-center justify-center rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] text-sm md:text-base"
              >
                View Projects
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-11 md:h-12 px-6 md:px-8 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 font-medium hover:bg-zinc-800/50 hover:border-zinc-600 transition-all text-sm md:text-base"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={showText ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ opacity: scrollIndicatorOpacity }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border-2 border-zinc-700 flex items-start justify-center p-1.5"
            >
              <motion.div className="w-1 h-1 rounded-full bg-zinc-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
