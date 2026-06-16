import { Hero, TechMarquee, About, Experience, Projects } from "@/components/sections";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Intro Animation */}
      <Hero />

      {/* Looping Tech Marquee */}
      <TechMarquee />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
