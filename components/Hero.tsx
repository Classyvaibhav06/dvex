"use client";
import { motion } from "framer-motion";
import VantaBackground from "./VantaBackground";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center px-6 pt-32 lg:px-12 lg:pt-36 overflow-hidden">
      <VantaBackground />
      <div className="max-w-7xl mx-auto w-full pt-8 pb-20 relative z-10">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-bold text-6xl md:text-8xl leading-[1.05] tracking-tight text-foreground mb-8"
          >
            We grow brands that{" "}
            <span className="text-accent italic">mean something.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-zinc-600 max-w-xl mb-12 leading-relaxed"
          >
            DevX Digital is a boutique marketing partner. We turn complexity
            into clarity through design, strategy, and performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#contact"
              className="inline-flex h-14 items-center justify-center bg-foreground text-background px-8 text-sm font-medium tracking-wide hover:bg-accent hover:text-white transition-colors duration-300"
            >
              Start a project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
