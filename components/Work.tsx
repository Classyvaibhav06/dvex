"use client";
import WorkBackground from "./WorkBackground";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "secologist website",
    category: "Healthcare Platform",
    desc: "A warm, high-conversion clinical platform featuring custom appointment booking, client management, and a serene modern design system.",
    href: "https://doctor321.netlify.app/",
    image: "/proj1.png",
    tags: ["React", "Netlify", "Booking", "CRM"],
  },
  {
    name: "Kiwigram",
    category: "Social Growth System",
    desc: "An analytics and automation dashboard built for content creators, optimizing digital reach with real-time growth indicators.",
    href: "https://kiwiconnectdigital.com/kiwigram",
    image: "/project2.png",
    tags: ["Next.js", "Analytics", "Automation", "Dashboard"],
  },
  {
    name: "Vaibhav Ghoshi",
    category: "Creative Portfolio",
    desc: "An interactive, high-fidelity developer portfolio utilizing complex Vanta 3D canvas dynamics and a sleek modular interface.",
    href: "https://www.vaibhav-ghoshi.in/",
    image: "/project3.png",
    tags: ["Three.js", "Vanta 3D", "Portfolio", "Framer Motion"],
  },
  {
    name: "GrindSync",
    category: "Productivity OS",
    desc: "A minimal, focus-driven work operating system built with React, streamlining time-tracking, task lists, and focus blocks.",
    href: "https://grindsync.vercel.app/",
    image: "/project4.png",
    tags: ["React", "Productivity OS", "Time Tracking", "Vercel"],
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-28 px-6 lg:px-12 w-full transition-colors duration-500 overflow-hidden">
      <WorkBackground />
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Subtle, premium, gallery-like section header */}
        <div className="mb-12 md:mb-16">
          <span className="block text-[11px] font-mono tracking-widest uppercase text-zinc-500 mb-2">
            Portfolio
          </span>
          <h2 className="font-serif text-[38px] md:text-[48px] text-[#1D1916] font-normal leading-tight tracking-tight">
            Selected Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          {projects.map((proj, i) => (
            <ProjectCard key={i} proj={proj} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

