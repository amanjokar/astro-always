"use client";

import { usePathname } from "next/navigation";
import { langOf, wa } from "@/lib/site";
import { WaIcon } from "./footer";

export function WhatsAppFloat() {
  const lang = langOf(usePathname());
  const label = lang === "en" ? "Chat with Neetu ji" : "Neetu ji se baat karein";
  return (
    <a
      href={wa(lang)}
      target="_blank"
      rel="noopener"
      aria-label={label}
      className="group fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full bg-[#25d366] p-3.5 text-void shadow-[0_10px_40px_-8px_#25d366aa] transition-transform hover:scale-105"
    >
      <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[#25d366]/40 [animation-duration:2.4s]" />
      <WaIcon className="relative size-7" />
      <span className="relative hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-[max-width] duration-500 group-hover:max-w-40 sm:block">
        {label}
      </span>
    </a>
  );
}
