"use client";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import CTA from "@/components/CTA";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#f1eee7]">
      <Navbar />

      {/* Hero Typography Section */}
      <section className="py-20 px-6 lg:px-12 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="block text-[11px] font-mono tracking-[0.25em] uppercase text-[#D97757] mb-6">
            Our Services
          </span>
          <h1 className="font-serif text-5xl md:text-8xl text-foreground font-normal leading-[1.05] tracking-tight mb-8">
            Growth systems with absolute design taste.
          </h1>
          <p className="text-stone-500 font-sans text-lg md:text-xl leading-relaxed max-w-2xl font-light">
            We blend identity strategy, publishing-led compounding search growth, organic socials, and custom technical engineering to transform how brands operate.
          </p>
        </motion.div>
      </section>

      {/* Services Grid & Interactive workflow */}
      <Services />
      <HowWeWork />

      {/* Contact & Footer */}
      <CTA />
      <MinimalFooter />
    </main>
  );
}
