"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-32 px-6 lg:px-12 bg-zinc-900 text-zinc-50"
    >
      <div className="max-w-4xl mx-auto text-center">
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
            className="flex-1 bg-zinc-800/50 border border-zinc-700 px-6 py-4 rounded-none focus:outline-none focus:border-accent focus:bg-zinc-800 transition-colors text-zinc-100 placeholder:text-zinc-500"
            required
          />
          <button
            type="submit"
            className="bg-accent text-white px-8 py-4 font-medium tracking-wide hover:bg-white hover:text-black transition-colors duration-300"
          >
            Start Conversation
          </button>
        </motion.form>
      </div>
    </section>
  );
}
