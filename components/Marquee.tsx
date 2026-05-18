"use client";
import { motion } from "framer-motion";

const items = [
  "Brand Strategy",
  "SEO",
  "Paid Ads",
  "Content",
  "Social Media",
  "Web Design",
];

export default function Marquee() {
  return (
    <div className="py-6 border-y border-zinc-200/50 overflow-hidden flex bg-zinc-50/50">
      <motion.div
        className="flex whitespace-nowrap gap-12 px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-12 text-sm font-medium tracking-widest uppercase text-zinc-900"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
