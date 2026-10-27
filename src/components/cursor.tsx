"use client";

import { useEffect } from "react";
import gsap from "gsap";

// Sparkle burst on every click/tap, plus a ripple inside [data-magnetic] buttons. The normal cursor stays.
export function ClickBurst() {
  useEffect(() => {
    const burst = (e: PointerEvent) => {
      for (let i = 0; i < 10; i++) {
        const s = document.createElement("span");
        s.textContent = i % 3 ? "•" : "✦";
        s.className = "pointer-events-none fixed z-[90] text-gold-hi";
        s.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;font-size:${i % 3 ? 10 : 14}px;translate:-50% -50%`;
        document.body.appendChild(s);
        const a = (i / 10) * Math.PI * 2 + Math.random() * 0.5;
        const d = 30 + Math.random() * 45;
        gsap.to(s, { x: Math.cos(a) * d, y: Math.sin(a) * d, scale: 0, rotate: 180, duration: 0.7 + Math.random() * 0.3, ease: "power3.out", onComplete: () => s.remove() });
      }
      const btn = (e.target as HTMLElement).closest<HTMLElement>("[data-magnetic]");
      if (btn) {
        const r = btn.getBoundingClientRect();
        const w = document.createElement("span");
        w.className = "pointer-events-none absolute rounded-full bg-bone/50";
        w.style.cssText = `left:${e.clientX - r.left}px;top:${e.clientY - r.top}px;width:20px;height:20px;translate:-50% -50%`;
        btn.appendChild(w);
        gsap.fromTo(w, { scale: 0, opacity: 0.7 }, { scale: Math.max(r.width, r.height) / 8, opacity: 0, duration: 0.7, ease: "power2.out", onComplete: () => w.remove() });
      }
    };
    addEventListener("pointerdown", burst);
    return () => removeEventListener("pointerdown", burst);
  }, []);

  return null;
}
