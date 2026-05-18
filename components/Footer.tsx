import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 px-6 lg:px-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-0 mb-16">
        <div>
          <Link
            href="/"
            className="transition-opacity hover:opacity-80 block mb-6"
          >
            <Image
              src="/devx_digital_logo.svg"
              alt="DevX Digital"
              width={240}
              height={60}
              className="h-14 w-auto"
            />
          </Link>
          <p className="text-zinc-500 max-w-xs text-sm">
            A boutique digital marketing partner helping ambitious brands scale
            efficiently.
          </p>
        </div>

        <div className="flex gap-12 sm:gap-24">
          <div className="flex flex-col gap-4 text-sm font-medium text-zinc-600">
            <Link href="#work" className="hover:text-foreground">
              Work
            </Link>
            <Link href="#services" className="hover:text-foreground">
              Services
            </Link>
            <Link href="#about" className="hover:text-foreground">
              About
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-sm font-medium text-zinc-600">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200/60 text-xs text-zinc-400 gap-4">
        <p>
          &copy; {new Date().getFullYear()} DevX Digital. All rights reserved.
        </p>
        <p>Crafted with intent.</p>
      </div>
    </footer>
  );
}
