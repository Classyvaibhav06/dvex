"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-12 w-full transition-colors duration-500"
      style={{ backgroundColor: "#F0EFEA" }} // Exact matte museum greige background
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Main Grid Layout matching the reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* ── LEFT CARD: The Dream & Brand Story ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[24px] md:rounded-[32px] p-8 md:p-12 flex flex-col justify-between shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#1D1916]/5 min-h-[460px] md:min-h-full"
          >
            <div>
              {/* Category Accent Label */}
              <span 
                className="block text-[13px] font-bold uppercase tracking-wider text-[#D97757] mb-5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                How It Started
              </span>

              {/* Core Mission Heading */}
              <h2
                className="text-[34px] md:text-[44px] font-bold text-[#1D1916] leading-[1.12] tracking-tight mb-8"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Our Dream is Global Brand Excellence.
              </h2>
            </div>

            {/* Custom Narrative Copwriting Personalized for DevX Digital & Founder */}
            <p
              className="text-[14px] md:text-[14.5px] leading-relaxed text-stone-500 font-normal max-w-xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              DevX Digital was founded by Vaibhav Ghoshi, a passionate digital architect, 
              and a visionary team of designers. Our shared dream is to create a digital haven of 
              high-performance web products, sleek design languages, and high-conversion systems 
              accessible to ambitious brands. United by our belief in the transformational power of clean design, 
              we embarked on a journey to build DevX Digital. With relentless dedication, we gathered a 
              team of experts and built a premium creative studio, growing brands that mean something 
              across a global community of partners.
            </p>
          </motion.div>

          {/* ── RIGHT COLUMN: Image & Statistics Stack ── */}
          <div className="flex flex-col gap-6 lg:gap-8">
            
            {/* Top Right: Collaboration Image */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] min-h-[220px] md:min-h-[260px] border border-[#1D1916]/5 flex-1"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Creative Collaboration Team"
                className="absolute inset-0 w-full h-full object-cover object-center animate-fade-in"
              />
            </motion.div>

            {/* Bottom Right: Statistics Grid Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-[#1D1916]/5"
            >
              <div className="grid grid-cols-2 gap-4">
                
                {/* Stat 1 — Years Experience */}
                <div className="bg-[#F9F8F6] rounded-[16px] p-5 flex flex-col justify-center items-start border border-[#1D1916]/4 hover:border-[#D97757]/15 transition-all duration-300">
                  <span
                    className="text-[30px] md:text-[34px] font-bold text-[#1D1916] leading-none mb-1.5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    3.5
                  </span>
                  <span
                    className="text-[11.5px] text-stone-500 font-medium leading-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Years Experience
                  </span>
                </div>

                {/* Stat 2 — Brands Scaled */}
                <div className="bg-[#F9F8F6] rounded-[16px] p-5 flex flex-col justify-center items-start border border-[#1D1916]/4 hover:border-[#D97757]/15 transition-all duration-300">
                  <span
                    className="text-[30px] md:text-[34px] font-bold text-[#1D1916] leading-none mb-1.5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    47+
                  </span>
                  <span
                    className="text-[11.5px] text-stone-500 font-medium leading-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Brands Scaled
                  </span>
                </div>

                {/* Stat 3 — Positive Reviews */}
                <div className="bg-[#F9F8F6] rounded-[16px] p-5 flex flex-col justify-center items-start border border-[#1D1916]/4 hover:border-[#D97757]/15 transition-all duration-300">
                  <span
                    className="text-[30px] md:text-[34px] font-bold text-[#1D1916] leading-none mb-1.5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    830+
                  </span>
                  <span
                    className="text-[11.5px] text-stone-500 font-medium leading-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Positive Reviews
                  </span>
                </div>

                {/* Stat 4 — Average ROAS */}
                <div className="bg-[#F9F8F6] rounded-[16px] p-5 flex flex-col justify-center items-start border border-[#1D1916]/4 hover:border-[#D97757]/15 transition-all duration-300">
                  <span
                    className="text-[30px] md:text-[34px] font-bold text-[#1D1916] leading-none mb-1.5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    3.2x
                  </span>
                  <span
                    className="text-[11.5px] text-stone-500 font-medium leading-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Avg ROAS
                  </span>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
