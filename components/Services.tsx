"use client";
import { motion } from "framer-motion";
import { BarChart3, Brush, Megaphone, Search, Share2 } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Brand Strategy",
    desc: "Positioning, messaging, and identity systems that make the brand easier to remember and easier to choose.",
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJyYW5kJTIwU3RyYXRlZ3l8ZW58MHx8MHx8fDA%3D",
    icon: Brush,
  },
  {
    id: "02",
    title: "SEO & Content",
    desc: "Search-led content plans, technical cleanup, and publishing rhythms built for compounding organic growth.",
    image: "https://plus.unsplash.com/premium_photo-1685208166965-d04149118ca5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Search,
  },
  {
    id: "03",
    title: "App Development",
    desc: "Performance apps across search and social with sharp creative testing, tracking, and conversion loops.",
    image: "https://images.unsplash.com/photo-1611174895360-53948c735c3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcCUyMGRldmV8ZW58MHx8MHx8fDA%3D",
    icon: BarChart3,
  },
  {
    id: "04",
    title: "Web Design",
    desc: "Fast, polished websites that turn first impressions into trust, inquiries, and measurable action.",
    image: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnQlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
    icon: Megaphone,
  },
  {
    id: "05",
    title: "Growth Marketing",
    desc: "Content systems for launches, daily visibility, community building, and platform-native growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
    icon: Share2,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-28 px-6 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-[#f1eee7]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-foreground/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-foreground/10" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(29,25,22,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(29,25,22,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-foreground/10 bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Services
            </span>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-foreground">
              Growth systems with design taste.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-zinc-600 md:justify-self-end">
            We combine strategy, content, websites, and acquisition into one clear operating system for brands that need momentum without messy execution.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group relative min-h-[380px] overflow-hidden border border-foreground/10 hover:border-accent/40 bg-background shadow-[0_15px_40px_-20px_rgba(29,25,22,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(217,119,87,0.15),0_15px_30px_-10px_rgba(29,25,22,0.08)] hover:-translate-y-1.5 transition-all duration-500 ease-out ${
                i < 2 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:rotate-1"
                  style={{ backgroundImage: `url(${svc.image})` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/15 to-background" />
              </div>

              <div className="relative z-10 flex min-h-[380px] flex-col justify-end p-6 md:p-7">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-widest text-accent uppercase">{svc.id}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-background/80 text-foreground shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                    <svc.icon className="h-5 w-5" />
                  </span>
                </div>

                <h3 className="mb-3 font-serif text-2xl md:text-3xl leading-tight text-foreground transition-all duration-300 group-hover:text-accent group-hover:translate-x-1">
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 md:text-[15px] transition-all duration-300 group-hover:text-zinc-800">
                  {svc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
