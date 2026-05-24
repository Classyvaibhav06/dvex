"use client";
import { motion } from "framer-motion";
import WorkBackground from "./WorkBackground";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 px-6 lg:px-12 bg-[#131313] text-zinc-50"
    >
      <WorkBackground dark />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-7xl mb-12 text-zinc-100"
        >
          Ready to grow?
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="hello@yourcompany.com"
            className="flex-1 bg-zinc-900/40 border border-zinc-800 px-6 py-4 rounded-full focus:outline-none focus:border-[#D97757] focus:bg-[#131313] transition-all text-zinc-100 placeholder:text-zinc-500 font-sans"
            required
          />
          <button
            type="submit"
            className="bg-[#D97757] text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
          >
            Start Conversation <span className="text-lg">→</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
