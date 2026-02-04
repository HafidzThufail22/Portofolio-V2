import Link from "next/link";
import { navigationItems } from "./_data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Hafidz<span className="text-primary">.</span>Thufail
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link 
            href="/contact" 
            className="hidden md:inline-flex h-10 px-6 items-center justify-center rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition-colors hover-glow"
          >
            Hire Me
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-secondary border border-border mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-foreground-muted">Available for new projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="text-primary text-glow">Hafidz Thufail</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground-muted mb-6">
            Full Stack Developer
          </h2>

          <p className="text-lg md:text-xl text-foreground-subtle max-w-2xl mb-10 leading-relaxed">
            Saya adalah seorang Full Stack Developer dengan pengalaman 3+ tahun dalam 
            mengembangkan aplikasi web dan mobile. Passionate dalam menciptakan 
            solusi digital yang <span className="text-foreground">user-friendly</span> dan <span className="text-foreground">performant</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/portfolio" 
              className="inline-flex h-12 px-8 items-center justify-center rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition-all glow-primary hover:shadow-glow-md"
            >
              View My Work
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex h-12 px-8 items-center justify-center rounded-full border border-border text-foreground font-medium hover:bg-background-secondary transition-colors"
            >
              Get In Touch
            </Link>
          </div>

          {/* Tech Stack */}
          <div className="mt-16 pt-10 border-t border-border">
            <p className="text-sm text-foreground-subtle mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"].map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 rounded-full bg-background-secondary border border-border text-sm text-foreground-muted hover:border-primary hover:text-foreground transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 py-20 border-t border-border">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
          <Link href="/portfolio" className="text-primary hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="group rounded-xl border border-border bg-background-secondary p-6 hover:border-primary/50 transition-all hover-glow">
            <div className="h-48 rounded-lg bg-background-tertiary mb-4 flex items-center justify-center">
              <span className="text-foreground-subtle">Project Image</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              E-Commerce Platform
            </h3>
            <p className="text-foreground-subtle text-sm mb-4">
              Platform e-commerce modern dengan payment gateway integration.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded bg-background-tertiary text-foreground-muted">Next.js</span>
              <span className="px-2 py-1 text-xs rounded bg-background-tertiary text-foreground-muted">TypeScript</span>
              <span className="px-2 py-1 text-xs rounded bg-background-tertiary text-foreground-muted">Prisma</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group rounded-xl border border-border bg-background-secondary p-6 hover:border-primary/50 transition-all hover-glow">
            <div className="h-48 rounded-lg bg-background-tertiary mb-4 flex items-center justify-center">
              <span className="text-foreground-subtle">Project Image</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              Task Management App
            </h3>
            <p className="text-foreground-subtle text-sm mb-4">
              Aplikasi manajemen tugas dengan real-time collaboration.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded bg-background-tertiary text-foreground-muted">React</span>
              <span className="px-2 py-1 text-xs rounded bg-background-tertiary text-foreground-muted">Socket.io</span>
              <span className="px-2 py-1 text-xs rounded bg-background-tertiary text-foreground-muted">MongoDB</span>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="group rounded-xl border border-border bg-background-secondary p-6 hover:border-primary/50 transition-all hover-glow">
            <div className="h-48 rounded-lg bg-background-tertiary mb-4 flex items-center justify-center">
              <span className="text-foreground-subtle">Project Image</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              Restaurant Landing Page
            </h3>
            <p className="text-foreground-subtle text-sm mb-4">
              Desain UI/UX modern dengan animasi smooth.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded bg-background-tertiary text-foreground-muted">Figma</span>
              <span className="px-2 py-1 text-xs rounded bg-background-tertiary text-foreground-muted">Framer Motion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background-secondary">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground-subtle text-sm">
              © 2024 John Doe. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground-subtle hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground-subtle hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground-subtle hover:text-foreground transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
