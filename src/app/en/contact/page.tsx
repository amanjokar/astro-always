import type { Metadata } from "next";
import { Contact } from "@/views/contact";

export const metadata: Metadata = { title: "Contact", description: "Talk to Astro Always on WhatsApp." };

export default function Page() {
  return <Contact lang="en" />;
}
