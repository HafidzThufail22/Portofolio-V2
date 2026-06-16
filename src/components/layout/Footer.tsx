import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-background pt-24 pb-8 overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-24">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight max-w-sm leading-snug">
              Ready to bring your ideas to life?
            </h2>
          </div>

          {/* Right Columns */}
          <div className="md:w-1/2 flex flex-col sm:flex-row gap-16 sm:gap-32 md:justify-end">
            
            {/* Nav Menu */}
            <div className="flex flex-col space-y-6">
              <h4 className="text-foreground/50 text-sm tracking-widest uppercase font-mono">Navigation</h4>
              <nav className="flex flex-col space-y-4 font-medium">
                <Link href="#home" className="text-foreground hover:text-foreground/60 transition-colors">Home</Link>
                <Link href="#about" className="text-foreground hover:text-foreground/60 transition-colors">About</Link>
                <Link href="#experience" className="text-foreground hover:text-foreground/60 transition-colors">Experience</Link>
                <Link href="#projects" className="text-foreground hover:text-foreground/60 transition-colors">Projects</Link>
              </nav>
            </div>

            {/* Connect */}
            <div className="flex flex-col space-y-6">
              <h4 className="text-foreground/50 text-sm tracking-widest uppercase font-mono">Connect</h4>
              <nav className="flex flex-col space-y-4">
                <a href="mailto:hafidzthufail22@email.com" className="group flex items-center gap-3 text-foreground hover:text-foreground/60 transition-colors font-medium">
                  <MdEmail className="w-5 h-5 text-foreground/50 group-hover:text-foreground transition-colors" />
                  <span>hafidzthufail22@email.com</span>
                </a>
                <a href="https://github.com/HafidzThufail22" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-foreground hover:text-foreground/60 transition-colors font-medium">
                  <FaGithub className="w-5 h-5 text-foreground/50 group-hover:text-foreground transition-colors" />
                  <span>HafidzThufail22</span>
                </a>
                <a href="https://linkedin.com/in/hafidzthufail" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-foreground hover:text-foreground/60 transition-colors font-medium">
                  <FaLinkedin className="w-5 h-5 text-foreground/50 group-hover:text-foreground transition-colors" />
                  <span>hafidzthufail</span>
                </a>
                <a href="https://instagram.com/hafidzthufail_" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-foreground hover:text-foreground/60 transition-colors font-medium">
                  <FaInstagram className="w-5 h-5 text-foreground/50 group-hover:text-foreground transition-colors" />
                  <span>hafidzthufail_</span>
                </a>
              </nav>
            </div>

          </div>
        </div>

        {/* Giant Text */}
        <div className="w-full flex justify-center mb-12 flex-col lg:flex-row items-center gap-2 lg:gap-8 leading-none">
          <h1 
            className="font-bold text-foreground tracking-tighter uppercase whitespace-nowrap"
            style={{ fontSize: "clamp(3rem, 10vw, 10rem)", lineHeight: 0.9 }}
          >
            LET'S
          </h1>
          <h1 
            className="font-bold tracking-tighter uppercase whitespace-nowrap"
            style={{ 
              fontSize: "clamp(3rem, 10vw, 10rem)", 
              lineHeight: 0.9,
              WebkitTextStroke: "2px var(--foreground)",
              color: "transparent"
            }}
          >
            COLLABORATE
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-foreground/20 text-foreground-muted text-xs md:text-sm font-mono uppercase tracking-widest">
          <span>Hafidz Thufail</span>
          
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <SiNextdotjs className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
            <span className="text-foreground">Next.js</span>
          </div>

          <span>© {currentYear}. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
