"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { asset, href, langOf, LEGAL, NAV, PHONE, wa } from "@/lib/site";

const head = "font-mono text-[11px] uppercase tracking-[0.25em] text-gold";

const T = {
  hi: {
    about: "Neetu Arora ke saath Vedic Jyotish, Kundali aur Ank Jyotish seekhiye. Saral bhasha, live class, aur hamesha saath dene wala group.",
    talk: "Baat karein",
    hours: "Som–Shani · 10 baje se 7 baje tak",
    cta: "WhatsApp par message karein",
    rights: "© 2026 Astro Always · Neetu Arora. Sabhi adhikaar surakshit.",
    note: "Jyotish margdarshan hai, guarantee nahi.",
  },
  en: {
    about: "Learn Vedic Astrology, Kundali and Numerology with Neetu Arora. Simple language, live classes and a group that stays with you.",
    talk: "Get in touch",
    hours: "Mon–Sat · 10 am to 7 pm",
    cta: "Message us on WhatsApp",
    rights: "© 2026 Astro Always · Neetu Arora. All rights reserved.",
    note: "Astrology is guidance, not a guarantee.",
  },
};

export function Footer() {
  const lang = langOf(usePathname());
  const t = T[lang];
  return (
    <footer className="relative border-t border-gold/15 bg-night/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href={href(lang, "/")} className="flex items-center gap-3">
            <Image src={asset("/logo.webp")} alt="" width={48} height={48} className="rounded-full" />
            <span className="font-display text-xl font-bold tracking-wider text-gold-hi">ASTRO ALWAYS</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">{t.about}</p>
        </div>
        <div>
          <p className={head}>Pages</p>
          <ul className="mt-4 space-y-2.5 text-sm text-bone/80">
            {NAV.map(([p, label]) => (
              <li key={p}><Link href={href(lang, p)} className="nav-link hover:text-gold-hi">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className={head}>Policy</p>
          <ul className="mt-4 space-y-2.5 text-sm text-bone/80">
            {LEGAL.map(([p, label]) => (
              <li key={p}><Link href={href(lang, p)} className="nav-link hover:text-gold-hi">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className={head}>{t.talk}</p>
          <a href={wa(lang)} target="_blank" rel="noopener" className="mt-4 flex items-center gap-3 text-bone hover:text-gold-hi">
            <WaIcon className="size-5 text-[#25d366]" /> {PHONE}
          </a>
          <p className="mt-2 text-sm text-mist">{t.hours}</p>
          <a href={wa(lang)} target="_blank" rel="noopener" data-magnetic className="btn-gold mt-5 inline-block rounded-full px-6 py-3 text-sm font-semibold">
            {t.cta}
          </a>
        </div>
      </div>
      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-mist/70 sm:px-6 md:flex-row md:justify-between">
          <p>{t.rights}</p>
          <p>{t.note}</p>
        </div>
      </div>
    </footer>
  );
}

export function WaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7a2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
