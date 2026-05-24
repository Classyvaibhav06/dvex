"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import WorkBackground from "./WorkBackground";
import Image from "next/image";


const values = [
  {
    title: "Founder-First Mindset",
    desc: "Fast, flexible, and built for growth from day one.",
  },
  {
    title: "Execution First",
    desc: "Ideas are nothing without relentless, precise action.",
  },
  {
    title: "Performance Focus",
    desc: "Every action tied to measurable, compounding results.",
  },
];

const stats = [
  { value: 3.5, suffix: "", decimals: 1, label: "Years Experience" },
  { value: 47, suffix: "+", decimals: 0, label: "Brands Scaled" },
  { value: 830, suffix: "+", decimals: 0, label: "Positive Reviews" },
  { value: 3.2, suffix: "x", decimals: 1, label: "Avg ROAS" },
];

function CountUp({
  value,
  suffix,
  decimals,
}: {
  value: number;
  suffix: string;
  decimals: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(value * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full px-6 py-24 lg:px-12 overflow-hidden"
      style={{ backgroundColor: "#F0EFEA" }}
    >
      <WorkBackground />
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-24 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[480px] select-none md:h-[560px]"
          >
            <div
              className="absolute left-0 top-0 h-[82%] w-[88%] overflow-hidden rounded-[20px] shadow-[0_4px_32px_rgba(29,25,22,0.12)]"
              style={{ zIndex: 1 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="DevX Digital creative team in a modern studio"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1d1916]/10 to-transparent" />
            </div>

            <div
              className="absolute bottom-0 right-0 h-[52%] w-[60%] overflow-hidden rounded-[16px] border-[3px] border-[#f9f7f2] shadow-[0_8px_40px_rgba(29,25,22,0.18)]"
              style={{ zIndex: 2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration and partnership"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute left-4 top-4 rounded-xl bg-[#d97757] px-4 py-2.5 shadow-md">
                <p className="font-sans text-[15px] font-bold leading-none text-white">
                  Growth
                </p>
                <p className="mt-1 font-sans text-[11px] font-medium leading-none text-white/85">
                  Focused Agency
                </p>
              </div>
            </div>

            <div
              className="absolute bottom-6 left-6 h-12 w-12 rounded-full border border-[#d97757]/30 bg-[#d97757]/15"
              style={{ zIndex: 0 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col"
          >
            <span
              className="mb-5 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#d97757]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              About DevX Digital
            </span>

            <h2
              className="mb-7 text-[36px] font-bold leading-[1.1] tracking-tight text-[#1d1916] md:text-[46px]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We&apos;re not just an agency.{" "}
              <br className="hidden sm:block" />
              We&apos;re your{" "}
              <em
                className="not-italic"
                style={{ color: "#d97757", fontStyle: "italic" }}
              >
                growth partners.
              </em>
            </h2>

            <p
              className="mb-4 text-[15px] leading-relaxed text-stone-500"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              DevX Digital is a young and fast-growing creative studio built for
              founders and ambitious brands. We focus on what actually matters:
              building high-performance products, sleek brands, and
              high-conversion digital systems.
            </p>
            <p
              className="mb-9 text-[15px] leading-relaxed text-stone-500"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              We may be new, but we move fast, think smart, and execute with
              precision. Our approach is simple: no fluff, no guesswork, just
              strategies that work.
            </p>

            <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#d97757]"
                    aria-hidden
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d97757]" />
                  </span>
                  <div>
                    <p
                      className="mb-0.5 text-[14px] font-bold leading-snug text-[#1d1916]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {v.title}
                    </p>
                    <p
                      className="text-[13px] leading-relaxed text-stone-500"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[28px] border border-[#1d1916]/10 bg-[#fbfaf6] shadow-[0_22px_70px_rgba(29,25,22,0.08)]"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d97757] via-[#1d1916] to-[#d97757]" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="grid grid-cols-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="group relative min-h-[160px] border-b border-r border-[#1d1916]/10 p-5 even:border-r-0 sm:p-7 md:p-8 lg:[&:nth-child(n+3)]:border-b-0"
                >
                  <div className="absolute left-5 top-5 h-2 w-2 rounded-full bg-[#d97757] opacity-50 transition-all duration-300 group-hover:scale-[1.8] group-hover:opacity-100 sm:left-7 md:left-8" />
                  <span
                    className="mt-8 block text-[40px] font-serif font-bold leading-none text-[#1d1916] transition-colors duration-300 group-hover:text-[#d97757] sm:text-[48px] md:text-[58px]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </span>
                  <span
                    className="mt-3 block text-[12px] font-semibold uppercase tracking-[0.16em] text-stone-500"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.blockquote
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="flex min-h-[320px] flex-col justify-between bg-[#1d1916] p-8 text-[#f9f7f2] sm:p-10 lg:p-12"
            >
              <span
                className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#d97757]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Founder Note
              </span>

              <p
                className="my-10 text-[28px] font-normal italic leading-[1.28] text-[#f9f7f2] sm:text-[34px] lg:text-[38px]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                &quot;Precision in execution is the only true differentiator in
                a digital world of noise.&quot;
              </p>

              <footer
                className="border-l-2 border-[#d97757] pl-5 text-[12px] font-bold uppercase tracking-[0.18em] text-[#d97757]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Vaibhav Ghoshi, Founder
              </footer>
            </motion.blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
