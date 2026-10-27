import { ContactForm } from "@/components/contact-form";
import { WaIcon } from "@/components/footer";
import { Motion } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { PHONE, wa, type Lang } from "@/lib/site";

const T = {
  hi: {
    title: ["Ek message, aur ", "baat shuru", "."],
    intro: "Course, fees ya batch ke baare mein kuch bhi poochiye. Hum aam taur par kuch ghanton mein jawab dete hain.",
    chat: "Abhi chat shuru karein →",
    hoursH: "Samay", days: "Somvar – Shanivar", hours: "Subah 10 baje se shaam 7 baje tak",
    classH: "Class", online: "100% live online", anywhere: "Bharat aur videsh, kahin se bhi judiye",
  },
  en: {
    title: ["One message, and ", "we are talking", "."],
    intro: "Ask anything about courses, fees or batches. We usually reply within a few hours.",
    chat: "Start a chat now →",
    hoursH: "Hours", days: "Monday – Saturday", hours: "10 am to 7 pm",
    classH: "Classes", online: "100% live online", anywhere: "Join from anywhere in India or abroad",
  },
};

export function Contact({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <>
      <PageHero eyebrow="Contact" title={<>{t.title[0]}<span className="gold-text">{t.title[1]}</span>{t.title[2]}</>}>
        {t.intro}
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:py-16">
        <div data-stagger className="flex flex-col gap-5">
          <a href={wa(lang)} target="_blank" rel="noopener" data-tilt className="group rounded-2xl border border-[#25d366]/40 bg-gradient-to-br from-[#25d366]/15 to-panel p-7 transition-[border-color,box-shadow] duration-500">
            <WaIcon className="size-10 text-[#25d366] transition-transform duration-500 group-hover:rotate-12" />
            <p className="mt-4 font-display text-2xl font-bold text-bone">WhatsApp</p>
            <p className="mt-1 text-lg text-bone/85">{PHONE}</p>
            <p className="mt-3 text-sm text-[#25d366]">{t.chat}</p>
          </a>
          <div data-tilt className="rounded-2xl border border-gold/15 bg-panel/60 p-7 transition-[border-color,box-shadow] duration-500">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">{t.hoursH}</p>
            <p className="mt-3 text-bone">{t.days}</p>
            <p className="text-mist">{t.hours}</p>
          </div>
          <div data-tilt className="rounded-2xl border border-gold/15 bg-panel/60 p-7 transition-[border-color,box-shadow] duration-500">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">{t.classH}</p>
            <p className="mt-3 text-bone">{t.online}</p>
            <p className="text-mist">{t.anywhere}</p>
          </div>
        </div>
        <div data-reveal>
          <ContactForm lang={lang} />
        </div>
      </section>
      <Motion />
    </>
  );
}
