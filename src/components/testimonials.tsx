"use client";

import { useRef } from "react";
import { testimonialsFor, type Lang } from "@/lib/site";

// Side-scrolling review rail: swipe on phones, arrows on desktop.
export function Testimonials({ lang }: { lang: Lang }) {
  const rail = useRef<HTMLDivElement>(null);
  const go = (dir: number) => rail.current?.scrollBy({ left: dir * rail.current.clientWidth * 0.8, behavior: "smooth" });
  const en = lang === "en";

  return (
    <div>
      <div className="mb-6 flex justify-end gap-3">
        {[-1, 1].map((d) => (
          <button
            key={d}
            onClick={() => go(d)}
            aria-label={d < 0 ? (en ? "Previous review" : "Pichhla review") : en ? "Next review" : "Agla review"}
            data-magnetic
            className="btn-line grid size-12 place-items-center rounded-full text-xl"
          >
            {d < 0 ? "←" : "→"}
          </button>
        ))}
      </div>
      <div
        ref={rail}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
      >
        {testimonialsFor(lang).map(({ q, n, c, course }) => (
          <figure
            key={n}
            data-tilt
            className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-gold/15 bg-panel/70 p-7 transition-[border-color,box-shadow] duration-500 sm:w-[46%] lg:w-[31.5%]"
          >
            <div className="flex items-center justify-between">
              <p aria-label="5 star" className="tracking-widest text-gold-hi">★★★★★</p>
              <p className="rounded-full border border-gold/20 px-3 py-1 font-mono text-[10px] text-mist">{course}</p>
            </div>
            <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-bone/90">“{q}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 text-sm">
              <span className="grid size-11 place-items-center rounded-full border border-gold/40 bg-gradient-to-b from-gold/20 to-void font-display text-gold-hi">{n[0]}</span>
              <span>
                <span className="block font-semibold text-bone">{n}</span>
                <span className="text-mist">{c}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-2 font-mono text-[11px] text-mist/60">
        {en ? "Demo reviews · the live site will show real student reviews" : "Demo reviews · asli site par vidyarthiyon ke asli reviews aayenge"}
      </p>
    </div>
  );
}
