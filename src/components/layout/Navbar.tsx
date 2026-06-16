"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useState, useEffect } from "react";

interface NavbarProps {
  scrollYProgress?: MotionValue<number>;
}

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Portofolio" },
  { href: "#contact", label: "Contact" },
];

export function Navbar({ scrollYProgress }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(`#${section}`);
            return;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("#home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect scroll state for flat → capsule transition
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.35;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* ─── FLAT STATE: transparan full-width ─── */}
      <motion.div
        animate={isScrolled ? { opacity: 0, pointerEvents: "none" } : { opacity: 1, pointerEvents: "auto" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full px-10 py-6"
      >
        <nav className="flex items-center justify-center gap-10">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * (index + 1) }}
            >
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-sm font-medium tracking-widest uppercase transition-all duration-300 group ${
                  activeSection === item.href
                    ? "text-foreground"
                    : "text-foreground/50 hover:text-foreground"
                }`}
              >
                {item.label}
                {/* Underline indicator for active */}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                    activeSection === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>

      {/* ─── CAPSULE STATE: floating pill saat scroll ─── */}
      <motion.div
        animate={
          isScrolled
            ? { opacity: 1, y: 0, pointerEvents: "auto" }
            : { opacity: 0, y: -20, pointerEvents: "none" }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl"
      >
        <div
          className="relative rounded-full border border-border/50 backdrop-blur-xl
          bg-gradient-to-r from-background/80 via-background-secondary/80 to-background/80
          shadow-[0_0_30px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          {/* Top highlight */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-foreground/5 to-transparent pointer-events-none" />

          <nav className="relative flex items-center justify-between h-14 px-6">
            {/* Logo */}
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center text-foreground hover:text-primary transition-colors duration-300"
            >
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0 }}
                  animate={isScrolled ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * (index + 1) }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                      activeSection === item.href
                        ? "text-primary border border-primary/60 bg-primary/5"
                        : "text-foreground-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={
            isMobileMenuOpen
              ? { height: "auto", opacity: 1, marginTop: 8 }
              : { height: 0, opacity: 0, marginTop: 0 }
          }
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden rounded-2xl border border-white/10 backdrop-blur-xl
            bg-gradient-to-b from-[#0d1117]/95 to-[#111827]/95
            shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
          style={{ marginTop: isMobileMenuOpen ? 8 : 0 }}
        >
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl ${
                  activeSection === item.href
                    ? "text-blue-400 bg-blue-500/10 border border-blue-500/30"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
