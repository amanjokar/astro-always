import type { Metadata } from "next";
import { Home } from "@/views/home";

export const metadata: Metadata = { title: { absolute: "Astro Always â€” Neetu Arora | Vedic Jyotish Courses" }, description: "Neetu Arora ke saath Vedic Jyotish, Kundali Vishleshan aur Ank Jyotish + Vastu ke live online courses." };

export default function Page() {
  return <Home lang="hi" />;
}
