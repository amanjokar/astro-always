import type { Metadata } from "next";
import { Services } from "@/views/services";

export const metadata: Metadata = { title: "Courses", description: "Astro Always ke live online Jyotish courses: fees, syllabus aur enroll karne ka tareeka." };

export default function Page() {
  return <Services lang="hi" />;
}
