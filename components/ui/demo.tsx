"use client";

import React from "react";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { ArrowDown } from "lucide-react";

export default function DemoOne() {
  React.useEffect(() => {
    // Configure standard native smooth scrolling for clean visual showcase
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#F9F7F2]">
      <div className="flex h-screen flex-col items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-4 text-center px-4">
          <span className="block text-[11px] font-mono tracking-widest uppercase text-accent">
            Showcase
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground font-bold leading-tight tracking-tight">
            Redesigned Footer
          </h1>
          <p className="text-zinc-500 font-sans text-base md:text-lg max-w-md leading-relaxed">
            Scroll down to explore our premium creative-studio minimal footer integrated with the brand design tokens.
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-accent font-medium mt-12 transition-all hover:scale-105 duration-300">
          <p className="text-sm font-sans tracking-wider uppercase font-semibold">Scroll down</p>
          <ArrowDown className="size-4 animate-bounce" />
        </div>
      </div>
      
      <MinimalFooter />
    </div>
  );
}
