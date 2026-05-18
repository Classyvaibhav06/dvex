"use client";
import { Component as TestimonialMarquee } from "@/components/ui/marquee-card";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 lg:px-12 bg-background border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="block text-[12px] font-semibold uppercase tracking-wider text-accent mb-3">
          Client Testimonials
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight max-w-2xl mx-auto">
          What our partners say about working with us
        </h2>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <TestimonialMarquee />
      </div>
    </section>
  );
}
