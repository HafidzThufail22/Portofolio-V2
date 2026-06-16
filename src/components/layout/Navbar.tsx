"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Portofolio" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            return;
          }
        }
      }
      if (window.scrollY < 100) setActiveSection("#home");
    };

    // Scroll-to-capsule detection (same listener)
    const handleScrollAll = () => {
      handleScroll();
      setIsScrolled(window.scrollY > window.innerHeight * 0.35);
    };

    window.addEventListener("scroll", handleScrollAll);
    return () => window.removeEventListener("scroll", handleScrollAll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  // Shared nav link style — same in both flat & capsule
  const linkClass = (href: string) =>
    `relative px-5 py-2 rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300 group ${
      activeSection === href ? "text-foreground bg-foreground/10" : "text-foreground/50 hover:text-foreground hover:bg-foreground/10"
    }`;

  const navLinks = (
    <>
      {navItems.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 * (index + 1) }}
        >
          <Link
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={linkClass(item.href)}
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
    </>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* ── FLAT STATE: transparan, centered ── */}
      <motion.div
        animate={
          isScrolled
            ? { opacity: 0, pointerEvents: "none" }
            : { opacity: 1, pointerEvents: "auto" }
        }
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="w-full px-10 py-6"
      >
        <nav className="hidden md:flex items-center justify-center gap-10">
          {navLinks}
        </nav>
      </motion.div>

      {/* ── CAPSULE STATE: floating pill, same link style ── */}
      <motion.div
        animate={
          isScrolled
            ? { opacity: 1, y: 0, pointerEvents: "auto" }
            : { opacity: 0, y: -16, pointerEvents: "none" }
        }
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="absolute top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl"
      >
        {/* Capsule container — just adds the pill frame */}
        <div className="relative rounded-full border border-foreground/10 backdrop-blur-xl
          bg-background/60
          shadow-[0_4px_24px_rgba(0,0,0,0.08)]">

          <nav className="relative hidden md:flex items-center justify-center gap-10 h-14 px-8">
            {navLinks}
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
          className="md:hidden overflow-hidden rounded-2xl border border-border/30 backdrop-blur-xl
            bg-background/90 shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
          style={{ marginTop: isMobileMenuOpen ? 8 : 0 }}
        >
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-3 text-xs font-medium tracking-widest uppercase transition-all duration-300 rounded-xl ${
                  activeSection === item.href
                    ? "text-foreground bg-foreground/5"
                    : "text-foreground/50 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile toggle — always visible on mobile */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden absolute right-6 top-[1.4rem] z-[60] p-2 text-foreground hover:text-foreground/80 transition-colors bg-background/50 backdrop-blur-md rounded-full border border-foreground/10 shadow-sm"
        aria-label="Toggle menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </motion.header>
  );
}
