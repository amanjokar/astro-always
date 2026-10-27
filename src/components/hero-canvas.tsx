"use client";

import dynamic from "next/dynamic";

// WebGL only exists in the browser; load the 3D scene after the page shows.
const HeroScene = dynamic(() => import("./hero-scene"), { ssr: false });

export function HeroCanvas() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <HeroScene />
    </div>
  );
}
