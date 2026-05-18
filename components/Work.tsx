"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "Doctor Mu Jade",
    category: "Healthcare Platform",
    desc: "A warm, high-conversion clinical platform featuring custom appointment booking, client management, and a serene modern design system.",
    href: "https://doctor-mu-jade.vercel.app/",
    image: "/project1.png",
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
    category: "Productivity Operating System",
    desc: "A minimal, focus-driven work operating system built with React, streamlining time-tracking, task lists, and focus blocks.",
    href: "https://grindsync.vercel.app/",
    image: "/project4.png",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="mb-4 inline-flex rounded-full border border-foreground/10 bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Portfolio
        </span>
        <h2 className="font-serif text-4xl md:text-6xl leading-tight text-foreground">
          Selected Works
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {projects.map((proj, i) => (
          <motion.a
            key={i}
            href={proj.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group relative flex flex-col justify-between p-4 bg-background border border-foreground/5 rounded-[32px] shadow-[0_10px_30px_-15px_rgba(29,25,22,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(217,119,87,0.12),0_15px_30px_-10px_rgba(29,25,22,0.05)] hover:border-accent/30 transition-all duration-500 hover:-translate-y-1.5"
          >
            <div>
              <div className="w-full aspect-[16/10] relative overflow-hidden rounded-[22px] bg-zinc-100">
                <Image
                  src={proj.image}
                  alt={`${proj.name} project preview`}
                  fill
                  sizes="(min-width: 1024px) 600px, calc(100vw - 48px)"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:rotate-[0.5deg]"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-background/90 text-foreground border border-foreground/10 shadow-lg backdrop-blur-md opacity-0 scale-90 translate-y-3 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-foreground">View Project</span>
                    <ArrowUpRight className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </div>

              <div className="mt-6 px-2">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-accent mb-2">
                  {proj.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-foreground group-hover:text-accent transition-all duration-300 flex items-center justify-between">
                  {proj.name}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-accent" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-700 transition-colors duration-300">
                  {proj.desc}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
