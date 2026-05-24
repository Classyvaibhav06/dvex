"use client";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import CTA from "@/components/CTA";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { motion } from "framer-motion";
import WorkBackground from "@/components/WorkBackground";


export default function WorkPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#F9F7F2]">
      <Navbar />

      {/* Hero Typography Section */}
      <section className="relative py-20 px-6 lg:px-12 w-full overflow-hidden border-b border-foreground/10 bg-[#F0EFEA]">
        <WorkBackground />
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="block text-[11px] font-mono tracking-[0.25em] uppercase text-[#D97757] mb-6">
              Selected Work
            </span>
            <h1 className="font-serif text-5xl md:text-8xl text-foreground font-normal leading-[1.05] tracking-tight mb-8">
              Case studies of digital craftsmanship.
            </h1>
            <p className="text-stone-500 font-sans text-lg md:text-xl leading-relaxed max-w-2xl font-light">
              An curated archive of fast, high-conversion clinical platforms, creator automation systems, and modular interactive developer workspaces built for the modern web.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <Work />

      {/* Contact & Footer */}
      <CTA />
      <MinimalFooter />
    </main>
  );
}
