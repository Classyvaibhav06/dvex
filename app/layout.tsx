import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Background from "@/components/Background";
import SmoothScroll from "@/components/SmoothScroll";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "DevX Digital | Minimal Studio",
  description: "We grow brands that mean something.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${serifFont.variable} ${sansFont.variable} font-sans`} suppressHydrationWarning>
        <SmoothScroll>
          <Background />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
