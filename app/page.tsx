import { Hero } from "@/components/sections";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section with Intro Animation */}
      <Hero />

      {/* Featured Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20 border-t border-zinc-800">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-zinc-100">Featured Projects</h2>
          <Link href="/portfolio" className="text-blue-500 hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-blue-500/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
            <div className="h-48 rounded-lg bg-zinc-800 mb-4 flex items-center justify-center">
              <span className="text-zinc-500">Project Image</span>
            </div>
            <h3 className="text-xl font-semibold text-zinc-100 mb-2 group-hover:text-blue-400 transition-colors">
              E-Commerce Platform
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              Platform e-commerce modern dengan payment gateway integration.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-400">Next.js</span>
              <span className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-400">TypeScript</span>
              <span className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-400">Prisma</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-blue-500/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
            <div className="h-48 rounded-lg bg-zinc-800 mb-4 flex items-center justify-center">
              <span className="text-zinc-500">Project Image</span>
            </div>
            <h3 className="text-xl font-semibold text-zinc-100 mb-2 group-hover:text-blue-400 transition-colors">
              Task Management App
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              Aplikasi manajemen tugas dengan real-time collaboration.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-400">React</span>
              <span className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-400">Socket.io</span>
              <span className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-400">MongoDB</span>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-blue-500/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
            <div className="h-48 rounded-lg bg-zinc-800 mb-4 flex items-center justify-center">
              <span className="text-zinc-500">Project Image</span>
            </div>
            <h3 className="text-xl font-semibold text-zinc-100 mb-2 group-hover:text-blue-400 transition-colors">
              Restaurant Landing Page
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              Desain UI/UX modern dengan animasi smooth.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-400">Figma</span>
              <span className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-400">Framer Motion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm">
              © 2024 Wira. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
