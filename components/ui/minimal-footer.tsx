"use client";

import Link from "next/link";
import React from "react";

// Premium, highly optimized custom SVG components matching the 6 iconic buttons from the reference image
const ShareIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
);

const ChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="6 3 20 12 6 21 6 3" />
  </svg>
);

const socialLinks = [
  { icon: ShareIcon, href: "#share", label: "Share" },
  { icon: CodeIcon, href: "#code", label: "Source" },
  { icon: InstagramIcon, href: "https://www.instagram.com/devx_digital/", label: "Instagram" },
  { icon: BriefcaseIcon, href: "#work", label: "Studies" },
  { icon: ChatIcon, href: "#cta", label: "Contact" },
  { icon: PlayIcon, href: "#hero", label: "Showreel" },
];

const workLinks = [
  { label: "sexologist", href: "https://doctor321.netlify.app/", isExternal: true },
  { label: "Kiwigram", href: "https://kiwiconnectdigital.com/kiwigram", isExternal: true },
  { label: "Portfolio", href: "https://www.vaibhav-ghoshi.in/", isExternal: true },
  { label: "GrindSync", href: "https://grindsync.vercel.app/", isExternal: true },
];

const servicesLinks = [
  { label: "Brand Strategy", href: "#services" },
  { label: "SEO & Content Strategy", href: "#services" },
  { label: "App Development", href: "#services" },
  { label: "Web Design", href: "#services" },
  { label: "Growth Marketing", href: "#services" },
];

const blogLinks = [
  { label: "Editorial Design in Web", href: "#" },
  { label: "Interactive 3D & Canvas", href: "#" },
  { label: "Compounding SEO Rhythms", href: "#" },
  { label: "Minimal Luxury Aesthetics", href: "#" },
];

export function MinimalFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t border-[#1D1916]/10 select-none"
      style={{ backgroundColor: "#F0EFEA" }} // Updated to the exact soft warm neutral greige (#F0EFEA)
    >
      {/* ── Main Multi-Column Section ── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-16 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 md:gap-10">
          
          {/* Column 1 (Spans 2 columns on desktop) — Branding, Statement & Socials */}
          <div className="flex flex-col items-start gap-6 lg:col-span-2 pr-0 lg:pr-10">
            <div className="flex flex-col gap-3">
              <Link href="/" className="group inline-block">
                <span
                  className="text-[32px] font-medium tracking-tight text-[#1D1916] leading-none group-hover:text-[#D97757] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  DevX Digital
                </span>
              </Link>
              <p
                className="text-[11px] tracking-[0.24em] uppercase text-stone-500 font-semibold leading-none"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                We grow brands that mean something.
              </p>
            </div>
            
            <p 
              className="text-[14.5px] leading-relaxed text-stone-500 max-w-sm"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              A digital studio crafting intent-driven products, high-end brands, and modular experiences for companies who value momentum without friction.
            </p>

            {/* Social Icons row (slightly resized for visual balance) */}
            <div className="flex items-center gap-2.5 mt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="group flex items-center justify-center w-[34px] h-[34px] rounded-full border border-[#1D1916]/12 bg-transparent text-[#1D1916]/60 hover:bg-[#1D1916] hover:text-[#F0EFEA] hover:border-[#1D1916] transition-all duration-300"
                >
                  <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-105" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Selected Work */}
          <div className="flex flex-col items-start gap-5">
            <span
              className="text-[11.5px] tracking-[0.26em] uppercase text-stone-400 font-bold"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Selected Work
            </span>
            <ul className="flex flex-col gap-3">
              {workLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noreferrer" : undefined}
                    className="inline-block text-[14.5px] text-stone-500 hover:text-[#1D1916] hover:translate-x-0.5 transition-all duration-200"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div className="flex flex-col items-start gap-5">
            <span
              className="text-[11.5px] tracking-[0.26em] uppercase text-stone-400 font-bold"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Services
            </span>
            <ul className="flex flex-col gap-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-[14.5px] text-stone-500 hover:text-[#1D1916] hover:translate-x-0.5 transition-all duration-200"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Blogs & Insights */}
          <div className="flex flex-col items-start gap-5">
            <span
              className="text-[11.5px] tracking-[0.26em] uppercase text-stone-400 font-bold"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Blogs & Insights
            </span>
            <ul className="flex flex-col gap-3">
              {blogLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-[14.5px] text-stone-500 hover:text-[#1D1916] hover:translate-x-0.5 transition-all duration-200"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Ultra-fine Internal Divider Line ── */}
      <div className="mx-6 lg:mx-16 border-t border-[#1D1916]/8" />

      {/* ── Bottom Copyright & Designer Attributions Row ── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        
        {/* Left Copyright info */}
        <p
          className="text-[10px] tracking-[0.22em] uppercase text-stone-400 font-medium"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          © {year} DEVX DIGITAL. ALL RIGHTS RESERVED.
        </p>

        {/* Right Designer Credit */}
        <p
          className="text-[10px] tracking-[0.22em] uppercase text-stone-400 font-medium flex items-center gap-2.5"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span>CRAFTED WITH INTENT</span>
          <span className="text-stone-300 text-[6px]">●</span>
          <span>DESIGN BY SSHAHAIEDR</span>
        </p>

      </div>
    </footer>
  );
}
