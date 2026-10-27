import type { Metadata } from "next";
import { Services } from "@/views/services";

export const metadata: Metadata = { title: "Courses", description: "Astro Always live online astrology courses: fees, syllabus and how to enroll." };

export default function Page() {
  return <Services lang="en" />;
}
