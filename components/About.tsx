"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-zinc-200"
    >
      <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl leading-tight text-foreground mb-8 text-balance"
          >
            We are not an agency. We are a growth partner. We build systems, not
            campaigns.
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 gap-8 md:gap-12">
          <div>
            <div className="text-4xl md:text-5xl font-serif text-accent mb-2">
              47
            </div>
            <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
              Brands Scaled
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif text-accent mb-2">
              3.2x
            </div>
            <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
              Avg ROAS
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif text-accent mb-2">
              5
            </div>
            <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
              Years Running
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
