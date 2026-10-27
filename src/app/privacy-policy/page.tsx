import type { Metadata } from "next";
import { Privacy } from "@/views/policies";

export const metadata: Metadata = { title: "Privacy Policy", description: "Astro Always Privacy Policy." };

export default function Page() {
  return <Privacy lang="hi" />;
}
