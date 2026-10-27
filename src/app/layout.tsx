import type { Metadata } from "next";
import { Cinzel, Hind, IBM_Plex_Mono } from "next/font/google";
import { ClickBurst } from "@/components/cursor";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Intro } from "@/components/intro";
import { Starfield } from "@/components/starfield";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { asset } from "@/lib/site";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--nf-display",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const hind = Hind({
  variable: "--nf-sans",
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--nf-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: { default: "Astro Always — Neetu Arora | Vedic Astrology Courses", template: "%s · Astro Always" },
  description: "Live online courses in Vedic Astrology, Kundali Analysis and Numerology + Vastu with Neetu Arora.",
  icons: { icon: asset("/logo.webp") },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${hind.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Intro />
        <Starfield />
        <ClickBurst />
        <div data-progress className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-hi to-gold" />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
