/**
 * Header Component
 * 
 * Glassmorphism navigation header for the portfolio
 */

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Portofolio', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            return;
          }
        }
      }
      
      // Default to Home if at top
      if (window.scrollY < 100) {
        setActiveSection('/');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return activeSection === '/' || pathname === '/';
    }
    return activeSection === href;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl transition-all duration-300",
        isScrolled && "top-4"
      )}
    >
      <div 
        className={cn(
          "relative rounded-full border border-white/10 backdrop-blur-xl",
          "bg-gradient-to-r from-[#0d1117]/80 via-[#111827]/80 to-[#0d1117]/80",
          "shadow-[0_0_30px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]",
          "before:absolute before:inset-0 before:rounded-full",
          "before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none"
        )}
      >
        <div className="flex h-14 items-center justify-between px-6">
          {/* Logo - Code Icon */}
          <Link 
            href="/" 
            className="flex items-center text-foreground hover:text-primary transition-colors duration-300"
            onClick={(e) => handleNavClick(e, '/')}
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
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                  isActive(item.href) 
                    ? "text-primary border border-primary/60 bg-primary/5" 
                    : "text-foreground-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden mt-2 overflow-hidden transition-all duration-300 rounded-2xl",
          "border border-white/10 backdrop-blur-xl",
          "bg-gradient-to-b from-[#0d1117]/95 to-[#111827]/95",
          "shadow-[0_10px_40px_rgba(0,0,0,0.4)]",
          isMenuOpen 
            ? "max-h-64 opacity-100" 
            : "max-h-0 opacity-0 border-transparent"
        )}
      >
        <nav className="py-4 px-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl",
                isActive(item.href) 
                  ? "text-primary bg-primary/10 border border-primary/30" 
                  : "text-foreground-muted hover:text-foreground hover:bg-white/5"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
