"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Project {
  name: string;
  category: string;
  desc: string;
  href: string;
  image: string;
  tags?: string[];
}

export default function ProjectCard({ proj, index }: { proj: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse coordinates relative to card for tilt
  const rotateX = useSpring(useMotionValue(0), { damping: 30, stiffness: 150 });
  const rotateY = useSpring(useMotionValue(0), { damping: 30, stiffness: 150 });

  // Spotlight mouse tracking relative to card container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate relative mouse coordinates (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;

    // Apply tilt values (max 8 degrees tilt)
    rotateX.set(-y * 8);
    rotateY.set(x * 8);

    // Apply spotlight coordinates relative to container
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  const formattedIndex = String(index + 1).padStart(2, "0");
  const year = index < 2 ? "2026" : "2025";

  // Spotlight background style template
  const backgroundStyle = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      rgba(217, 119, 87, 0.08),
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className="perspective-1000 group relative flex flex-col w-full bg-[#F7F1DE] border border-stone-300/60 rounded-none p-5 sm:p-6 shadow-[0_8px_30px_rgba(21,20,15,0.03)] hover:shadow-[0_24px_50px_rgba(21,20,15,0.08)] transition-all duration-500"
    >
      {/* Spotlight overlay on the visual container */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: backgroundStyle,
        }}
      />

      <a
        href={proj.href}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col h-full z-10"
      >
        {/* Image Container with 4:3 aspect ratio */}
        <div className="relative w-full aspect-[4/3] bg-[#EFE7D2] rounded-none overflow-hidden border border-stone-300/40 transition-all duration-500 shrink-0">
          
          {/* Badge at top left */}
          <div className="absolute top-3 left-3 bg-[#EFE7D2]/95 backdrop-blur-xs text-[#15140F] px-2.5 py-0.5 rounded-none font-mono text-[9px] font-bold tracking-widest uppercase z-20 border border-stone-300/30">
            {proj.category.split(" ")[0]}
          </div>

          {/* Screenshot Container with zoom-on-hover effect */}
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={proj.image}
              alt={`${proj.name} preview`}
              fill
              priority={index < 2}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            {/* Hover visual highlight */}
            <div className="absolute inset-0 bg-[#D97757]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />
          </div>
        </div>

        {/* Content Area */}
        <div className="pt-6 flex flex-col flex-grow">
          {/* Index & Year Row */}
          <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-widest text-stone-400 mb-2.5">
            <span>Nº {formattedIndex}</span>
            <span>{year}</span>
          </div>

          {/* Title */}
          <h3 className="text-[22px] font-serif font-bold text-foreground leading-tight mb-2 group-hover:text-accent transition-colors duration-300">
            {proj.name}
          </h3>

          {/* Description */}
          <p className="text-[14px] text-stone-500 leading-relaxed font-sans font-light mb-4 line-clamp-3">
            {proj.desc}
          </p>

          {/* Tech tags */}
          {proj.tags && proj.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 text-[9px] font-mono text-stone-400 uppercase tracking-wider mb-5">
              {proj.tags.map((tag, tIdx) => (
                <span key={tIdx} className="bg-stone-100/60 px-2 py-0.5 rounded-none border border-stone-300/30">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Arrow Button at bottom-left */}
          <div className="mt-auto flex pt-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-none border border-stone-200 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
