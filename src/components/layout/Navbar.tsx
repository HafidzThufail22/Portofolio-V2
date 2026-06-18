"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
      if (window.scrollY < 100) setActiveSection("#home");
      setIsScrolled(window.scrollY > window.innerHeight * 0.35);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const linkClass = (href: string) =>
    `px-5 py-2 rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300 ${
      activeSection === href
        ? "text-foreground bg-foreground/10"
        : "text-foreground/50 hover:text-foreground hover:bg-foreground/10"
    }`;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* ── DESKTOP FLAT NAV: only shown on md+ when NOT scrolled ── */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            key="flat-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex w-full px-10 py-6 items-center justify-center gap-10"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * (i + 1) }}
              >
                <Link href={item.href} onClick={(e) => handleNavClick(e, item.href)} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── DESKTOP CAPSULE: only shown on md+ when scrolled ── */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            key="desktop-capsule"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="hidden md:block absolute top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl"
          >
            <div className="rounded-full border border-foreground/10 backdrop-blur-xl bg-background/60 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <nav className="flex items-center justify-center gap-10 h-14 px-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={(e) => handleNavClick(e, item.href)} className={linkClass(item.href)}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MOBILE CAPSULE: always visible on small screens ── */}
      <div className="md:hidden absolute top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-lg">
        <div className="rounded-full border border-foreground/10 backdrop-blur-xl bg-background/70 shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between h-14 px-5">
            {/* Logo */}
            <Link href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2">
           
              <span className="text-sm font-bold tracking-widest uppercase text-foreground">HF.</span>
            </Link>
            {/* Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-foreground/15 bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 8 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden rounded-2xl border border-border/30 backdrop-blur-xl bg-background/90 shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-3 text-xs font-medium tracking-widest uppercase transition-all duration-300 rounded-xl ${
                      activeSection === item.href
                        ? "text-foreground bg-foreground/8"
                        : "text-foreground/50 hover:text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
