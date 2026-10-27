"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

/*
 * All page motion, driven by data attributes:
 *  data-hero-split / data-hero-fade  hero reveal after the intro
 *  data-split      heading lines rise from a mask on scroll
 *  data-reveal / data-stagger        fade-up on scroll
 *  data-parallax   drifts while scrolling
 *  data-count      counts up from 0 (data-suffix appended)
 *  data-magnetic   pulled toward the cursor
 *  data-tilt       3D tilt + glare following the cursor
 */
// Render at the end of each page (not in the layout): it edits the DOM, so it must run after that page has hydrated.
export function Motion() {
  useEffect(() => {
    // Many Windows PCs report reduced motion by default; those visitors keep every effect except smooth-scroll hijacking.
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const lenis = calm ? null : new Lenis({ lerp: 0.09 });
    lenis?.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis?.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenis?.stop(); // locked until the intro curtain lifts
    const offs: (() => void)[] = [];

    const ctx = gsap.context(() => {
      // --- hero, revealed as the intro curtain lifts (the curtain hides it until then)
      const heroSplits = gsap.utils.toArray<HTMLElement>("[data-hero-split]").map((el) =>
        SplitText.create(el, { type: "lines", mask: "lines", linesClass: "pb-[0.08em]" }),
      );
      const fades = gsap.utils.toArray("[data-hero-fade]");
      const onIntro = () => {
        lenis?.start();
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        heroSplits.forEach((s) => tl.from(s.lines, { yPercent: 115, rotate: 4, duration: 1.4, stagger: 0.12 }, 0.15));
        if (fades.length) tl.from(fades, { autoAlpha: 0, y: 30, duration: 1.1, stagger: 0.1 }, 0.5);
      };
      // the intro plays once per visit; later page changes reveal straight away
      if (document.documentElement.dataset.introDone) onIntro();
      else {
        addEventListener("intro:done", onIntro, { once: true });
        offs.push(() => removeEventListener("intro:done", onIntro));
      }

      // hero text lifts away as you scroll
      if (document.querySelector("[data-hero]")) gsap.to("[data-hero-copy]", { yPercent: -25, autoAlpha: 0, ease: "none", scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom 20%", scrub: true } });

      // --- scroll progress bar
      gsap.to("[data-progress]", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });

      // --- headings
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        const s = SplitText.create(el, { type: "lines", mask: "lines", linesClass: "pb-[0.08em]" });
        gsap.from(s.lines, { yPercent: 115, rotate: 3, duration: 1.2, stagger: 0.1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 85%" } });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) =>
        gsap.from(el, { y: 60, autoAlpha: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }),
      );
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) =>
        gsap.from(el.children, { y: 70, rotateX: -20, scale: 0.95, autoAlpha: 0, transformOrigin: "50% 0%", duration: 1.1, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } }),
      );
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) =>
        gsap.fromTo(el, { yPercent: -Number(el.dataset.parallax) }, { yPercent: Number(el.dataset.parallax), ease: "none", scrollTrigger: { trigger: el, scrub: true } }),
      );
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count);
        const n = { v: 0 };
        gsap.to(n, {
          v: end, duration: 2, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => (el.textContent = Math.round(n.v).toLocaleString("en-IN") + (el.dataset.suffix ?? "")),
        });
      });

      // the clipped arch photo opens upward
      if (document.querySelector("[data-arch]")) gsap.from("[data-arch]", { clipPath: "inset(100% 0 0 0)", duration: 1.6, ease: "expo.inOut", scrollTrigger: { trigger: "[data-arch]", start: "top 80%" } });

      // marquee leans with scroll speed
      const marquee = document.querySelector("[data-marquee]");
      const skew = marquee && gsap.quickTo(marquee, "skewX", { duration: 0.4 });
      if (skew) ScrollTrigger.create({ onUpdate: (s) => skew(gsap.utils.clamp(-12, 12, s.getVelocity() / -250)) });
    });

    // --- pointer effects (mouse only)
    if (matchMedia("(pointer: fine)").matches) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const x = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
        const y = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          x((e.clientX - r.left - r.width / 2) * 0.35);
          y((e.clientY - r.top - r.height / 2) * 0.45);
        };
        const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.35)" });
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        offs.push(() => (el.removeEventListener("pointermove", move), el.removeEventListener("pointerleave", leave)));
      });
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          el.style.setProperty("--mx", `${px * 100}%`);
          el.style.setProperty("--my", `${py * 100}%`);
          gsap.to(el, { rotateY: (px - 0.5) * 12, rotateX: (0.5 - py) * 10, transformPerspective: 900, duration: 0.5, ease: "power2.out" });
        };
        const leave = () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "power3.out" });
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        offs.push(() => (el.removeEventListener("pointermove", move), el.removeEventListener("pointerleave", leave)));
      });
    }

    const onClick = (e: MouseEvent) => {
      const href = (e.target as HTMLElement).closest("a")?.getAttribute("href");
      if (!lenis || !href?.startsWith("#") || href.length < 2) return;
      e.preventDefault();
      lenis.scrollTo(href, { offset: -72, duration: 1.6 });
    };
    document.addEventListener("click", onClick);

    // keep page still behind an open dialog
    const dialogs = new MutationObserver(() => (document.querySelector("dialog[open]") ? lenis?.stop() : lenis?.start()));
    document.querySelectorAll("dialog").forEach((d) => dialogs.observe(d, { attributes: true, attributeFilter: ["open"] }));

    return () => {
      dialogs.disconnect();
      offs.forEach((f) => f());
      document.removeEventListener("click", onClick);
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis?.destroy();
    };
  }, []);

  return null;
}
