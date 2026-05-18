"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    badge: "For Explorers",
    price: "$9",
    features: [
      { text: "1 AI agent with a custom trained model", bold: [0, 4, 5, 6] },
      { text: "1 AI Design Studio with custom models", bold: [0, 1, 2, 3] },
      { text: "50 AI images 4K generation", bold: [0, 1, 2] },
      { text: "15 AI prompt assists", bold: [0, 1] },
    ],
    buttonText: "Start Free Trial",
    badgeBg: "bg-zinc-100",
    btnBg: "bg-white hover:bg-zinc-50 border-black/20 text-slate-800 shadow-sm",
  },
  {
    name: "Pro",
    badge: "3 Agents + 3 Studios + DUMMY shots x studio",
    price: "$19",
    features: [
      { text: "3 AI agents with a custom trained model", bold: [0, 4, 5, 6] },
      { text: "3 AI Design Studios with custom models", bold: [0, 1, 2, 3] },
      { text: "300 AI images 4K generation", bold: [0] },
      { text: "90 AI prompt assists", bold: [0] },
    ],
    buttonText: "Learn More",
    badgeBg: "bg-[#FDE68A]", // Exact gold badge color
    btnBg: "bg-[#FCD34D] hover:bg-[#FBBF24] border-black/10 text-slate-800 shadow-[0_12px_24px_-8px_rgba(245,158,11,0.5)] hover:shadow-[0_16px_32px_-8px_rgba(245,158,11,0.6)]", // Glowing yellow shadow
  },
  {
    name: "Enterprise",
    badge: "Unlimited Agents & Scaling",
    price: "$49",
    features: [
      { text: "Unlimited AI agents with custom models", bold: [0, 4, 5] },
      { text: "Unlimited AI Design Studios access", bold: [0, 1, 2, 3] },
      { text: "Unlimited AI images 4K generation", bold: [0] },
      { text: "Unlimited AI prompt assists", bold: [0] },
    ],
    buttonText: "Contact Sales",
    badgeBg: "bg-zinc-100",
    btnBg: "bg-white hover:bg-zinc-50 border-black/20 text-slate-800 shadow-sm",
  },
];

export default function Pricing() {
  // Helper function to render text with bold segments
  const renderFeatureText = (text: string, boldIndices: number[]) => {
    const words = text.split(" ");
    return words.map((word, i) => {
      const isBold = boldIndices.includes(i);
      return (
        <span key={i} className={isBold ? "font-bold text-slate-900" : ""}>
          {word}{" "}
        </span>
      );
    });
  };

  return (
    <section id="pricing" className="py-24 px-6 lg:px-12 bg-background border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="block text-[12px] font-semibold uppercase tracking-wider text-accent mb-3">
            Simple Pricing
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-slate-900 leading-tight">
            Flexible plans built for creators
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`bg-white border-2 border-black rounded-[24px] p-8 md:p-10 flex flex-col justify-between transition-shadow duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] relative ${
                tier.name === "Pro" ? "ring-2 ring-accent ring-offset-4" : ""
              }`}
            >
              <div>
                {/* Badge */}
                <div className={`border border-black rounded-full px-4 py-1.5 text-[12px] md:text-[13px] font-semibold text-slate-800 inline-block mb-6 ${tier.badgeBg}`}>
                  {tier.badge}
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-8">
                  <span className="text-[56px] md:text-[64px] font-extrabold text-slate-900 tracking-tight leading-none">
                    {tier.price}
                  </span>
                  <span className="text-[16px] md:text-[18px] text-slate-500 font-medium">
                    / month
                  </span>
                </div>

                {/* Feature List */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-slate-700 text-[15px] leading-relaxed">
                      <span className="flex-shrink-0 w-5.5 h-5.5 rounded-full bg-slate-900 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-white stroke-[3.5]" />
                      </span>
                      <span>
                        {renderFeatureText(feature.text, feature.bold)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                className={`w-full md:w-auto border border-black/10 rounded-xl px-8 py-3.5 text-[15px] font-semibold transition-all duration-300 ${tier.btnBg}`}
              >
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
