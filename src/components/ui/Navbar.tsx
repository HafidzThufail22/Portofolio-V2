"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface NavbarProps {
  isVisible: boolean;
}

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Portofolio" },
  { href: "#contact", label: "Contact" },
];

export function Navbar({ isVisible }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

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

      // Default to Home if at top
      if (window.scrollY < 100) {
        setActiveSection("#home");
      }
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
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      {/* Main Navbar Container with Glassmorphism */}
      <div
        className="relative rounded-full border border-white/10 backdrop-blur-xl
        bg-gradient-to-r from-[#0d1117]/80 via-[#111827]/80 to-[#0d1117]/80
        shadow-[0_0_30px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]"
      >
        {/* Subtle top highlight */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        <nav className="relative flex items-center justify-between h-14 px-6">
          {/* Logo - Code Icon */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center text-zinc-100 hover:text-blue-400 transition-colors duration-300"
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
                }
                transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    activeSection === item.href
                      ? "text-blue-400 border border-blue-500/60 bg-blue-500/5"
                      : "text-zinc-400 hover:text-zinc-100"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
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
    </motion.header>
  );
}

