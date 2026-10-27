import type { Metadata } from "next";
import { Contact } from "@/views/contact";

export const metadata: Metadata = { title: "Contact", description: "Astro Always se WhatsApp par baat karein." };

export default function Page() {
  return <Contact lang="hi" />;
}
