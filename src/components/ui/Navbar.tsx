"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface NavbarProps {
  isVisible: boolean;
}

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar({ isVisible }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-zinc-950/70 backdrop-blur-xl border-b border-white/5" />

      <div className="container mx-auto relative">
        <nav className="flex items-center justify-between h-16 px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-zinc-100 hover:text-white transition-colors">
            Wira<span className="text-blue-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="hidden md:block"
          >
            <Link
              href="#contact"
              className="inline-flex h-10 px-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              Hire Me
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-4 py-4 space-y-3 border-t border-white/5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-10 px-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors w-full mt-2"
            >
              Hire Me
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
