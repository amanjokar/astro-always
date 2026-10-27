"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { asset, href, langOf, NAV, swap, wa } from "@/lib/site";

export function Header() {
  const path = usePathname();
  const lang = langOf(path);
  const [open, setOpen] = useState(false);
  useEffect(() => void (document.documentElement.lang = lang), [lang]);

  const cta = lang === "en" ? "WhatsApp us" : "WhatsApp karein";
  const toggle = (
    <Link href={swap(path)} aria-label={lang === "en" ? "हिंदी में देखें" : "View in English"} className="rounded-full border border-gold/30 px-3 py-2 font-mono text-xs text-gold-hi transition-colors hover:border-gold-hi">
      {lang === "en" ? "हिं" : "EN"}
    </Link>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/10 bg-void/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href={href(lang, "/")} className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src={asset("/logo.webp")} alt="" width={40} height={40} className="rounded-full transition-transform duration-700 group-hover:rotate-[360deg]" priority />
          <span className="font-display text-lg font-bold tracking-wider text-gold-hi">ASTRO ALWAYS</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {NAV.map(([p, label]) => {
            const to = href(lang, p);
            return (
              <Link key={p} href={to} className={`nav-link ${path === to ? "text-gold-hi after:!scale-100" : "text-bone/80 hover:text-gold-hi"}`}>
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {toggle}
          <a href={wa(lang)} target="_blank" rel="noopener" data-magnetic className="btn-gold hidden rounded-full px-5 py-2.5 text-sm font-semibold sm:block">
            {cta}
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative size-10 rounded-full border border-gold/30 md:hidden"
          >
            <span className={`absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-gold-hi transition-transform ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
            <span className={`absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-gold-hi transition-transform ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
          </button>
        </div>
      </div>

      <nav hidden={!open} className="border-t border-gold/10 bg-void/95 md:hidden">
        <ul className="flex flex-col px-4 py-3">
          {NAV.map(([p, label]) => {
            const to = href(lang, p);
            return (
              <li key={p}>
                <Link href={to} onClick={() => setOpen(false)} className={`block py-3 font-display text-lg ${path === to ? "text-gold-hi" : "text-bone"}`}>
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <a href={wa(lang)} target="_blank" rel="noopener" className="btn-gold mt-2 block rounded-full py-3 text-center font-semibold">
              {cta}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
