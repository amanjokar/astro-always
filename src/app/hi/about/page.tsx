import type { Metadata } from "next";
import { About } from "@/views/about";

export const metadata: Metadata = { title: "About", description: "Neetu Arora aur Astro Always ki kahani." };

export default function Page() {
  return <About lang="hi" />;
}
