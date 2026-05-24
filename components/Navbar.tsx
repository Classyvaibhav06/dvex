"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scrolling to dynamically adjust navbar background and padding without shifting text
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active section based on pathname, or scrollspy if on homepage
  useEffect(() => {
    if (pathname === "/work") {
      setActiveSection("work");
      return;
    }
    if (pathname === "/services") {
      setActiveSection("services");
      return;
    }
    if (pathname === "/about") {
      setActiveSection("about");
      return;
    }

    // Scroll Spy to highlight the currently visible section on home page
    const sections = ["work", "services", "about"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          threshold: 0.3,
          rootMargin: "-25% 0px -55% 0px",
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    const handleTopScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleTopScroll);

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
      window.removeEventListener("scroll", handleTopScroll);
    };
  }, [pathname]);

  const navLinks = [
    { name: "Work", href: "/work", id: "work" },
    { name: "Services", href: "/services", id: "services" },
    { name: "About", href: "/about", id: "about" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-center pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? "pt-3 px-4" : "pt-0 px-0"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center pointer-events-auto"
        >
          <div
            className={`w-full bg-background/95 backdrop-blur-xl border flex justify-center shadow-[0_18px_60px_-32px_rgba(29,25,22,0.7)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[max-width,border-radius,padding] ${
              isScrolled
                ? "max-w-7xl rounded-full py-2 border-foreground/10 px-4"
                : "max-w-full rounded-none py-4 border-b-foreground/10 border-t-transparent border-l-transparent border-r-transparent px-0"
            }`}
          >
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-10 flex items-center justify-between md:px-5">
              {/* Logo */}
              <Link
                href="/"
                className="z-50 flex items-center flex-shrink-0"
              >
                <motion.div
                  whileHover={{ scale: 1.025, rotate: -0.5 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    scale: isScrolled ? 0.82 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 26,
                  }}
                  style={{ originX: 0, originY: 0.5 }}
                  className="relative flex items-center w-[178px] h-[52px]"
                >
                  <Image
                    src="/devx_logo.png"
                    alt="DevX Digital"
                    fill
                    sizes="178px"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </Link>

              {/* Desktop Navigation Links */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.18,
                    },
                  },
                }}
                className="hidden md:flex items-center gap-1 rounded-full border border-foreground/8 bg-white/38 p-1 text-[13px] font-medium text-foreground relative shadow-inner shadow-white/50"
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.div
                      key={link.name}
                      variants={{
                        hidden: { opacity: 0, y: -10 },
                        show: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -1 }}
                    >
                      <Link
                        href={link.href}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        className="relative select-none flex flex-col items-center justify-center font-sans tracking-wide"
                      >
                        <span
                          className={`relative z-10 block transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isActive ? "text-background font-semibold" : "text-foreground/78 hover:text-foreground"
                          } ${
                            isScrolled ? "py-1.5 px-5" : "py-2.5 px-5"
                          }`}
                        >
                          {link.name}
                        </span>

                        <AnimatePresence>
                          {(hoveredIndex === idx || isActive) && (
                            <motion.span
                              layoutId={isActive ? "navActivePill" : "navHoverPill"}
                              initial={{ opacity: 0, scale: 0.92 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.92 }}
                              transition={{
                                type: "spring",
                                stiffness: 430,
                                damping: 30,
                              }}
                              className={`absolute inset-0 rounded-full z-0 ${
                                isActive
                                  ? "bg-foreground shadow-[0_8px_18px_-12px_rgba(29,25,22,0.9)]"
                                  : "bg-accent/12"
                              }`}
                            />
                          )}
                        </AnimatePresence>

                        {isActive && (
                          <motion.span
                            layoutId="activeDot"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 360,
                              damping: 20,
                            }}
                            className="absolute -bottom-1 w-1 h-1 bg-accent rounded-full"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* CTA Button */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href="#contact"
                    className={`group relative ml-1 flex items-center gap-2 rounded-full bg-accent text-[13px] font-semibold text-white shadow-[0_10px_24px_-16px_rgba(217,119,87,0.95)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-foreground hover:text-accent ${
                      isScrolled ? "py-1.5 px-5" : "py-2.5 px-5"
                    }`}
                  >
                    Contact
                    <div className="relative w-3.5 h-3.5 overflow-hidden flex items-center justify-center">
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-5 group-hover:-translate-y-5" />
                      <ArrowUpRight className="w-3.5 h-3.5 absolute transition-transform duration-300 -translate-x-5 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </div>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden z-55 flex flex-col items-center justify-center w-9 h-9 p-2 rounded-full border border-foreground/10 bg-white/45 shadow-inner shadow-white/40 hover:bg-white/70 active:scale-90 transition-all pointer-events-auto"
                aria-label="Toggle Menu"
              >
                <div className="relative w-5 h-4 flex flex-col justify-between">
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-5 h-[2px] bg-foreground rounded-full origin-center"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-[2px] bg-foreground rounded-full"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-5 h-[2px] bg-foreground rounded-full origin-center"
                  />
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Slide-down Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl md:hidden pt-28 px-8 flex flex-col justify-between pb-16 pointer-events-auto"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              className="flex flex-col gap-6 text-4xl font-serif text-foreground font-light"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 15 },
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group inline-flex items-center gap-3 transition-colors hover:text-accent"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-accent" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 15 },
                }}
                className="pt-6"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-accent text-background font-sans font-semibold text-lg hover:bg-foreground hover:text-accent transition-all duration-300 shadow-lg shadow-accent/10 active:scale-95 animate-fade-in"
                >
                  Contact Us
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="border-t border-foreground/10 pt-6 flex flex-col gap-2 font-sans text-xs tracking-wider uppercase text-zinc-500 font-medium"
            >
              <span>DevX Digital Agency</span>
              <span>We grow brands that mean something.</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
