"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "SEO Audit & Strategy Blueprint",
    description: "We analyze your search landscape, research competitors, and map out a custom keywords architecture tailored to capture high-value traffic.",
  },
  {
    number: "02",
    title: "High-Performance Development",
    description: "We build ultra-fast, responsive web applications using React and Next.js, meticulously optimized with technical SEO, schemas, and clean code.",
    shifted: true,
  },
  {
    number: "03",
    title: "Continuous Ranking & Scale",
    description: "We launch, monitor crawling efficiency, and continuously optimize core web vitals and on-page authority to drive steady organic growth.",
  },
];

// Beautiful custom inline SVG replicating the exact sketch style, symbolizing code & growth
const ProcessIllustration = () => (
  <svg
    viewBox="0 0 450 350"
    fill="none"
    className="w-full max-w-sm lg:max-w-md mx-auto text-[#4C1F1F]/90 select-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Ground Lines */}
    <line x1="20" y1="310" x2="430" y2="310" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="40" y1="316" x2="410" y2="316" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

    {/* Modern Desk Plant */}
    <path d="M 50,310 L 50,290 C 50,285 55,280 60,280 C 65,280 70,285 70,290 L 70,310 Z" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="2" />
    {/* Plant leaves */}
    <path d="M 60,280 C 60,260 50,250 45,260 C 45,260 55,270 60,280 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 60,280 C 60,260 70,250 75,260 C 75,260 65,270 60,280 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 60,280 C 60,250 60,240 60,240 C 60,240 60,260 60,280 Z" stroke="currentColor" strokeWidth="1.5" />

    {/* Main Monitor */}
    {/* Base & Stand */}
    <path d="M 200,310 L 240,310 L 230,260 L 210,260 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    {/* Screen Frame */}
    <rect x="150" y="120" width="140" height="90" rx="6" fill="#f9f7f2" stroke="currentColor" strokeWidth="2.5" />
    {/* Inner screen area */}
    <rect x="156" y="126" width="128" height="70" rx="3" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth="1.5" />
    {/* Stand mount */}
    <rect x="212" y="210" width="16" height="15" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
    {/* Code lines on monitor */}
    <line x1="165" y1="138" x2="200" y2="138" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="165" y1="146" x2="245" y2="146" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="165" y1="154" x2="225" y2="154" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="175" y1="162" x2="215" y2="162" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="175" y1="170" x2="235" y2="170" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    
    {/* Laptop on the right */}
    {/* Laptop Base */}
    <path d="M 300,310 L 390,310 L 380,300 L 310,300 Z" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    {/* Laptop Screen */}
    <path d="M 315,300 L 295,230" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 295,230 C 295,225 350,225 355,228" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="355" y1="228" x2="380" y2="300" stroke="currentColor" strokeWidth="2" />
    
    {/* Rising SEO Rank / Growth Arrow emerging from Laptop */}
    <path d="M 330,285 C 340,240 375,180 415,140" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
    <path d="M 390,140 L 415,140 L 415,165" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* SEO Nodes / Search Bar or Graph elements */}
    {/* Search glass floating */}
    <circle cx="340" cy="190" r="10" fill="#f9f7f2" stroke="currentColor" strokeWidth="2" />
    <line x1="347" y1="197" x2="357" y2="207" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    
    {/* Floating Gears or Sparkles of Optimization */}
    {/* Gear 1 */}
    <circle cx="110" cy="180" r="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
    <circle cx="110" cy="180" r="3" fill="currentColor" />
    
    {/* Gear 2 */}
    <circle cx="125" cy="195" r="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
    <circle cx="125" cy="195" r="4" fill="currentColor" />
    
    {/* Bar chart details on right screen */}
    <rect x="320" y="245" width="8" height="35" rx="1.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
    <rect x="332" y="235" width="8" height="45" rx="1.5" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
    <rect x="344" y="255" width="8" height="25" rx="1.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export default function HowWeWork() {
  return (
    <section id="process" className="py-28 px-6 lg:px-12 bg-background border-t border-black/5 overflow-hidden">
      {/* Desktop Layout */}
      <div className="max-w-6xl mx-auto hidden md:grid grid-cols-12 gap-8 items-center relative min-h-[600px]">
        
        {/* Left Side: Illustration & Headline */}
        <div className="col-span-5 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-[44px] lg:text-[56px] text-[#4C1F1F] font-normal leading-[1.1] mb-8 tracking-tight"
          >
            From Code
            <br />
            To Conversion.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <ProcessIllustration />
          </motion.div>
        </div>

        {/* Center: Quadratic Bezier Curved Timeline Arch */}
        <div className="absolute inset-y-0 left-[45%] w-24 select-none pointer-events-none">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 500" fill="none" preserveAspectRatio="none">
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              d="M 10,10 Q 90,250 10,490"
              stroke="#4C1F1F"
              strokeOpacity="0.2"
              strokeWidth="1.5"
            />
          </svg>
          
          {/* Node 1 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute w-11 h-11 rounded-full border border-black/25 bg-background flex items-center justify-center font-mono text-sm text-[#4C1F1F] top-[10%] left-[10%] -translate-x-1/2"
          >
            01
          </motion.div>

          {/* Node 2 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="absolute w-11 h-11 rounded-full border border-black/25 bg-background flex items-center justify-center font-mono text-sm text-[#4C1F1F] top-[50%] left-[90%] -translate-x-1/2 -translate-y-1/2"
          >
            02
          </motion.div>

          {/* Node 3 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute w-11 h-11 rounded-full border border-black/25 bg-background flex items-center justify-center font-mono text-sm text-[#4C1F1F] top-[90%] left-[10%] -translate-x-1/2 -translate-y-full"
          >
            03
          </motion.div>
        </div>

        {/* Right Side: Step Contents Positioned in Arc Curve */}
        <div className="col-span-7 h-[520px] relative">
          
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute top-[3%] left-[18%] max-w-sm"
          >
            <h3 className="text-[22px] font-bold text-[#4C1F1F] mb-2 leading-tight">
              {steps[0].title}
            </h3>
            <p className="font-mono text-[11px] lg:text-[12px] tracking-wide text-slate-500 uppercase leading-relaxed max-w-[310px]">
              {steps[0].description}
            </p>
          </motion.div>

          {/* Step 2 (Curved outwards to match Node 02) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute top-[43%] left-[30%] max-w-sm"
          >
            <h3 className="text-[22px] font-bold text-[#4C1F1F] mb-2 leading-tight">
              {steps[1].title}
            </h3>
            <p className="font-mono text-[11px] lg:text-[12px] tracking-wide text-slate-500 uppercase leading-relaxed max-w-[310px]">
              {steps[1].description}
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute bottom-[3%] left-[18%] max-w-sm"
          >
            <h3 className="text-[22px] font-bold text-[#4C1F1F] mb-2 leading-tight">
              {steps[2].title}
            </h3>
            <p className="font-mono text-[11px] lg:text-[12px] tracking-wide text-slate-500 uppercase leading-relaxed max-w-[310px]">
              {steps[2].description}
            </p>
          </motion.div>

        </div>
      </div>

      {/* Mobile Layout (Clean Vertical Timeline) */}
      <div className="max-w-xl mx-auto md:hidden flex flex-col gap-12">
        <div className="text-center mb-4">
          <h2 className="font-serif text-[38px] text-[#4C1F1F] font-normal leading-[1.1] mb-6 tracking-tight">
            From Code To Conversion.
          </h2>
          <div className="w-full max-w-[280px] mx-auto">
            <ProcessIllustration />
          </div>
        </div>

        <div className="flex flex-col gap-8 pl-4 border-l border-[#4C1F1F]/15 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* Floating Node Badge */}
              <div className="absolute -left-[37px] top-0 w-8 h-8 rounded-full border border-black/25 bg-background flex items-center justify-center font-mono text-xs text-[#4C1F1F]">
                {step.number}
              </div>
              
              <div className="pl-4">
                <h3 className="text-[18px] font-bold text-[#4C1F1F] mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="font-mono text-[11px] tracking-wide text-slate-500 uppercase leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
