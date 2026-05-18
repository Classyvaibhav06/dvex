import "./globals.css";
import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Background from "@/components/Background";
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
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
    <html lang="en">
      <body className={`${dmSerif.variable} ${dmSans.variable} font-sans`}>
        <Background />
        {children}
      </body>
    </html>
  );
}
