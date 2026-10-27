import type { Metadata } from "next";
import { About } from "@/views/about";

export const metadata: Metadata = { title: "About", description: "The story of Neetu Arora and Astro Always." };

export default function Page() {
  return <About lang="en" />;
}
