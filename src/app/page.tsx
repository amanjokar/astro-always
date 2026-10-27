import type { Metadata } from "next";
import { Home } from "@/views/home";

export const metadata: Metadata = { title: { absolute: "Astro Always â€” Neetu Arora | Vedic Astrology Courses" }, description: "Live online courses in Vedic Astrology, Kundali Analysis and Numerology + Vastu with Neetu Arora." };

export default function Page() {
  return <Home lang="en" />;
}
