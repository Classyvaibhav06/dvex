"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "secologist website",
    category: "Healthcare Platform",
    desc: "A warm, high-conversion clinical platform featuring custom appointment booking, client management, and a serene modern design system.",
    href: "https://doctor321.netlify.app/",
    image: "/proj1.png",
  },
  {
    name: "Kiwigram",
    category: "Social Growth System",
    desc: "An analytics and automation dashboard built for content creators, optimizing digital reach with real-time growth indicators.",
    href: "https://kiwiconnectdigital.com/kiwigram",
    image: "/project2.png",
  },
  {
    name: "Vaibhav Ghoshi",
    category: "Creative Portfolio",
    desc: "An interactive, high-fidelity developer portfolio utilizing complex Vanta 3D canvas dynamics and a sleek modular interface.",
    href: "https://www.vaibhav-ghoshi.in/",
    image: "/project3.png",
  },
  {
    name: "GrindSync",
    category: "Productivity OS",
    desc: "A minimal, focus-driven work operating system built with React, streamlining time-tracking, task lists, and focus blocks.",
    href: "https://grindsync.vercel.app/",
    image: "/project4.png",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-28 px-6 lg:px-12 bg-[#F0EFEA] w-full transition-colors duration-500">
      <div className="max-w-6xl mx-auto w-full">
        {/* Subtle, premium, gallery-like section header */}
        <div className="mb-12 md:mb-16">
          <span className="block text-[11px] font-mono tracking-widest uppercase text-zinc-500 mb-2">
            Portfolio
          </span>
          <h2 className="font-serif text-[38px] md:text-[48px] text-[#1D1916] font-normal leading-tight tracking-tight">
            Selected Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full">
          {projects.map((proj, i) => (
            <a
              key={i}
              href={proj.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col bg-[#FFFFFF] rounded-[16px] overflow-hidden p-0 transition-all duration-500 ease-out shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Browser Mockup Area */}
              <div className="relative w-full h-[280px] sm:h-[320px] bg-zinc-50 overflow-hidden shrink-0 flex flex-col items-center justify-start border-b border-black/5">
                {/* Browser Header */}
                <div className="h-8 w-full bg-[#F4F4F4]/80 flex items-center px-4 gap-1.5 border-b border-black/5 z-10 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#E4E4E7]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#E4E4E7]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#E4E4E7]"></div>
                </div>
                {/* Image Container */}
                <div className="relative w-full h-[calc(100%-32px)]">
                  <Image
                    src={proj.image}
                    alt={`${proj.name} preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <div className="bg-white/95 text-foreground px-5 py-2.5 rounded-full text-[13px] font-medium flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-black/5">
                    View Project <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col bg-white">
                <span className="block text-[11px] font-mono tracking-wider uppercase text-[#D97757] mb-2.5">
                  {proj.category}
                </span>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[24px] font-serif font-bold text-[#1D1916] group-hover:text-[#D97757] transition-colors duration-300 leading-tight">
                    {proj.name}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-[#D97757] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <p className="text-[14px] text-zinc-500 leading-relaxed font-sans line-clamp-2">
                  {proj.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
