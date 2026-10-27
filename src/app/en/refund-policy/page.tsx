import type { Metadata } from "next";
import { Refund } from "@/views/policies";

export const metadata: Metadata = { title: "Refund Policy", description: "Astro Always Refund Policy." };

export default function Page() {
  return <Refund lang="en" />;
}
