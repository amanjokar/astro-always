"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { asset } from "@/lib/site";

// Full-screen opening: logo + counter, then the curtain lifts and fires "intro:done" for the hero reveal.
export function Intro() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const done = () => {
        document.documentElement.dataset.introDone = "1";
        dispatchEvent(new Event("intro:done"));
      };
      const count = { v: 0 };
      gsap
        .timeline()
        .from("[data-intro-logo]", { scale: 0.4, rotateY: 180, opacity: 0, duration: 1.1, ease: "expo.out" })
        .from("[data-intro-ring]", { scale: 0, opacity: 0, duration: 1.2, ease: "expo.out" }, 0.1)
        .to(count, { v: 100, duration: 1.5, ease: "power2.inOut", onUpdate: () => {
          const el = ref.current?.querySelector("[data-intro-count]");
          if (el) el.textContent = String(Math.round(count.v)).padStart(3, "0");
        } }, 0)
        .to("[data-intro-bar]", { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, 0)
        .to("[data-intro-logo]", { scale: 0.85, opacity: 0, duration: 0.5, ease: "power2.in" }, 1.6)
        .to(ref.current, { clipPath: "inset(0 0 100% 0)", duration: 1, ease: "expo.inOut", onStart: done }, 1.8)
        .set(ref.current, { display: "none" });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-void" style={{ clipPath: "inset(0 0 0% 0)" }}>
      <div className="relative" style={{ perspective: 800 }}>
        <div data-intro-ring className="absolute -inset-10 rounded-full border border-gold/30 shadow-[0_0_120px_-20px_#d6a43b]" />
        <Image data-intro-logo src={asset("/logo.webp")} alt="" width={150} height={150} priority className="relative rounded-full" />
      </div>
      <p data-intro-count className="mt-16 font-mono text-sm tracking-[0.4em] text-gold-hi">000</p>
      <div className="mt-4 h-px w-48 bg-gold/15">
        <div data-intro-bar className="h-full origin-left scale-x-0 bg-gold" />
      </div>
      <p className="mt-6 font-display text-xs tracking-[0.5em] text-mist">ASTRO ALWAYS</p>
    </div>
  );
}
