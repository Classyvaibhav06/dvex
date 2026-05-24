"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function WorkBackground({ dark = false }: { dark?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "100px" });
  
  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for natural elastic movement
  const springX = useSpring(mouseX, { damping: 45, stiffness: 120 });
  const springY = useSpring(mouseY, { damping: 45, stiffness: 120 });

  // Inverse movements for parallax contrast
  const inverseX = useTransform(springX, (val) => val * -0.7);
  const inverseY = useTransform(springY, (val) => val * -0.7);

  useEffect(() => {
    if (!isInView) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize position relative to center of screen (-0.5 to 0.5) to avoid
      // getBoundingClientRect reflow overhead (layout thrashing) on mousemove.
      const x = e.clientX / (window.innerWidth || 1) - 0.5;
      const y = e.clientY / (window.innerHeight || 1) - 0.5;
      
      // Move blobs up to 45 pixels
      mouseX.set(x * 45);
      mouseY.set(y * 45);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isInView, mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 -z-10 overflow-hidden pointer-events-none transition-colors duration-700 ${
        dark ? "bg-[#131313]" : "bg-[#F5F4EE]"
      }`}
    >
      {/* Subtle paper noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Blueprint grid (terracotta in light mode, dark accent in dark mode) */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: dark
            ? `
                linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
              `
            : `
                linear-gradient(to right, rgba(217, 119, 87, 0.07) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(217, 119, 87, 0.07) 1px, transparent 1px)
              `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Dotted subdivisions */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: dark
              ? "radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)"
              : "radial-gradient(rgba(217, 119, 87, 0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Center Drafting / Blueprint Circle Schematic */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none flex items-center justify-center transition-opacity duration-500 ${
        dark ? "opacity-[0.03]" : "opacity-[0.06]"
      }`}>
        {/* Concentric draft circles */}
        <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-[#D97757]" />
        <div className="absolute w-[450px] h-[450px] rounded-full border border-stone-400" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-[#D97757]" />
        <div className="absolute w-[150px] h-[150px] rounded-full border border-stone-400" />
        {/* Crosshair lines */}
        <div className="absolute w-[680px] h-[1px] bg-gradient-to-r from-transparent via-[#D97757] to-transparent" />
        <div className="absolute h-[680px] w-[1px] bg-gradient-to-b from-transparent via-[#D97757] to-transparent" />
        {/* Diagonal vectors */}
        <div className="absolute w-[680px] h-[1px] bg-stone-400/30 rotate-45" />
        <div className="absolute w-[680px] h-[1px] bg-stone-400/30 -rotate-45" />
      </div>

      {/* Slowly drifting background orbs */}
      {/* Orb 1: Accent Color */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ x: springX, y: springY }}
        className={`absolute top-[10%] left-[15%] w-[40vw] h-[40vw] max-w-[400px] rounded-full filter blur-[100px] transition-colors duration-500 ${
          dark ? "opacity-[0.08] bg-[#e86f51]" : "opacity-[0.1] bg-[#D97757]"
        }`}
      />

      {/* Orb 2: Secondary Slate/Theme Color */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.95, 1.03, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        style={{
          x: inverseX,
          y: inverseY,
        }}
        className={`absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] max-w-[450px] rounded-full filter blur-[110px] transition-colors duration-500 ${
          dark ? "opacity-[0.06] bg-[#57423d]" : "opacity-[0.06] bg-[#1D1916]"
        }`}
      />

      {/* Monospaced technical annotations at corners */}
      <div className={`absolute inset-0 select-none text-[8.5px] font-mono tracking-widest transition-colors duration-500 p-8 flex flex-col justify-between ${
        dark ? "text-[#e86f51]/40" : "text-[#D97757]/60"
      }`}>
        <div className="flex justify-between w-full">
          <span>[ GRID SYSTEM / 48PX ]</span>
          <span>[ VOL. 26 / PORTFOLIO ]</span>
        </div>
        <div className="flex justify-between w-full mt-auto">
          <span>[ SCALE 1:1 / REF-009 ]</span>
          <span>[ CREATIVE SYSTEMS ]</span>
        </div>
      </div>

      {/* Plus coordinates indicators */}
      <div className={`absolute inset-0 select-none opacity-20 text-[10px] font-mono transition-colors duration-500 ${
        dark ? "text-[#e86f51]/60" : "text-[#D97757]"
      }`}>
        <span className="absolute top-[18%] left-[25%]">+</span>
        <span className="absolute top-[65%] left-[80%]">+</span>
        <span className="absolute top-[80%] left-[30%]">+</span>
        <span className="absolute top-[35%] left-[70%]">+</span>
      </div>
    </div>
  );
}
