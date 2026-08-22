"use client";

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
      const scrollPosition = window.scrollY + 160;

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - navOffset);

      window.scrollTo({
        top: targetId === "home" ? 0 : offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(href);
    }

    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  const linkClass = (href: string) =>
    `px-5 py-2 rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer ${
      activeSection === href
        ? "text-foreground bg-foreground/10"
        : "text-foreground/50 hover:text-foreground hover:bg-foreground/10"
    }`;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-auto"
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
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={linkClass(item.href)}
                  >
                    {item.label}
                  </a>
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
              <div className="rounded-full border border-foreground/10 backdrop-blur-xl bg-background/70 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                <nav className="flex items-center justify-center gap-10 h-14 px-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={linkClass(item.href)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE CAPSULE: always visible on small screens ── */}
        <div className="md:hidden relative mx-auto top-4 w-[92%] max-w-lg">
          <div className="rounded-full border border-foreground/10 backdrop-blur-xl bg-background/85 shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
            <div className="flex items-center justify-between h-14 px-5">
              {/* Logo */}
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "#home")}
                className="flex items-center gap-2 cursor-pointer touch-manipulation py-2"
              >
                <span className="text-sm font-bold tracking-widest uppercase text-foreground">
                  HF.
                </span>
              </a>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsMobileMenuOpen((prev) => !prev);
                }}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground/15 bg-foreground/5 text-foreground hover:bg-foreground/10 active:scale-95 transition-all cursor-pointer touch-manipulation select-none"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="w-5 h-5"
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
            </div>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mt-2 overflow-hidden rounded-2xl border border-border/40 backdrop-blur-2xl bg-background/95 shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
              >
                <div className="p-2 space-y-1">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href;
                    return (
                      <button
                        key={item.href}
                        type="button"
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`w-full text-left px-4 py-3.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200 rounded-xl cursor-pointer touch-manipulation flex items-center justify-between ${
                          isActive
                            ? "text-foreground bg-foreground/10 font-bold"
                            : "text-foreground/60 hover:text-foreground hover:bg-foreground/5 active:bg-foreground/10"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
