"use client";

const techList = [
  "GIT",
  "TAILWIND CSS",
  "LARAVEL",
  "JAVA",
  "PHP",
  "MYSQL",
  "CSS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "NEXT.JS",
  "NODE.JS",
  "EXPRESS",
  "PRISMA",
  "SUPABASE",
  "POSTGRESQL",
  "FIGMA"
];

export function TechMarquee() {
  return (
    <section className="mt-16 md:mt-24 py-4 md:py-6 border-y border-foreground/20 overflow-hidden bg-background relative flex items-center">
      {/* Inline styles guarantee the animation works immediately without Tailwind config restarts */}
      <style>{`
        @keyframes customMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-custom-marquee {
          animation: customMarquee 25s linear infinite;
        }
        .animate-custom-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 
        The container moves from 0 to -50% of its own width. 
        Since the list is duplicated inside, -50% is exactly one full loop.
      */}
      <div className="flex w-max animate-custom-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {techList.map((tech, index) => (
              <div key={`${i}-${index}`} className="flex items-center px-4 md:px-8">
                {/* Monochrome dot */}
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-foreground mr-4 md:mr-6" />
                {/* Tech text */}
                <span className="text-foreground-muted/80 font-mono text-sm md:text-base lg:text-lg font-semibold tracking-widest uppercase whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
