import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import HowWeWork from "@/components/HowWeWork";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import { MinimalFooter } from "@/components/ui/minimal-footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <HowWeWork />
      <About />
      <Testimonials />
      <Pricing />
      <CTA />
      <MinimalFooter />
    </main>
  );
}
