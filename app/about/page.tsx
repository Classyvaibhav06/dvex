"use client";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F0EFEA]">
      <Navbar />

      {/* ── HERO HEADER ── */}
      <section className="pt-36 pb-16 px-6 lg:px-12 w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span
              className="block text-[11px] font-bold uppercase tracking-[0.25em] text-[#d97757] mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              The Studio
            </span>
            <h1
              className="text-5xl md:text-7xl text-[#1d1916] font-bold leading-[1.05] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Built on craft.{" "}
              <br className="hidden md:block" />
              Driven by{" "}
              <em className="not-italic" style={{ color: "#d97757", fontStyle: "italic" }}>
                results.
              </em>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex flex-col gap-5 md:max-w-xs"
          >
            <p
              className="text-[15px] leading-relaxed text-stone-500"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              DevX Digital is a premium creative studio founded by Vaibhav Ghoshi — where brand precision meets performance architecture.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#d97757] text-white rounded-full px-6 py-3 font-semibold text-[14px] w-fit hover:bg-[#1d1916] transition-colors duration-300 shadow-[0_10px_24px_-10px_rgba(217,119,87,0.6)]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Work With Us
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-14 h-px bg-[#1d1916]/10 origin-left"
        />
      </section>

      {/* ── ABOUT STORY + PHOTOS + STATS ── */}
      <About />

      {/* ── TEAM PHILOSOPHY STRIP ── */}
      <section className="py-20 px-6 lg:px-12 bg-[#1d1916]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "We ship with intention.",
              body: "Every pixel, every word, every system we build is backed by strategic reason — not aesthetic impulse.",
            },
            {
              num: "02",
              title: "We grow with our clients.",
              body: "Our best work happens in long partnerships. We learn your market and become an extension of your team.",
            },
            {
              num: "03",
              title: "We measure what matters.",
              body: "Vanity metrics don't move revenue. We track what actually drives growth and iterate relentlessly.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-white/10 pt-8"
            >
              <span
                className="block text-[11px] font-bold tracking-[0.2em] text-[#d97757] mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {item.num}
              </span>
              <h3
                className="text-[22px] font-bold text-white mb-3 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-[14px] text-white/55 leading-relaxed"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── CTA + FOOTER ── */}
      <CTA />
      <MinimalFooter />
    </main>
  );
}
