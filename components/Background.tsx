"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Background() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,119,87,0.09),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.45),rgba(249,247,242,0))]" />

      <motion.svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -24, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <pattern
          id="grid"
          width="88"
          height="88"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 88 0 L 0 0 0 88"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </motion.svg>

      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_42%,rgba(217,119,87,0.055)_42%,rgba(217,119,87,0.055)_43%,transparent_43%,transparent_100%)]" />
      <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgba(29,25,22,0.08)_0.7px,transparent_0.7px)] [background-size:12px_12px]" />
    </div>
  );
}
