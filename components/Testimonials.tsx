"use client";
import { motion } from "framer-motion";

const quotes = [
  {
    text: "DevX transformed our entire digital presence. Our MRR tripled in less than six months.",
    author: "Sarah Jenkins",
    company: "Aura Skincare",
  },
  {
    text: "Minimalist approach, maximalist results. They understand modern consumer psychology better than anyone.",
    author: "James Torres",
    company: "Fintech X",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-32">
        {quotes.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="flex-1"
          >
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-8">
              "{q.text}"
            </p>
            <div>
              <p className="text-sm font-semibold text-zinc-900">{q.author}</p>
              <p className="text-sm text-zinc-500">{q.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
