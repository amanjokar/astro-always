import { Courses } from "@/components/courses";
import { WaIcon } from "@/components/footer";
import { Motion } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { wa, type Lang } from "@/lib/site";

const T = {
  hi: {
    eyebrow: "Courses · Fees · Syllabus",
    title: ["Aapke level ka ", "sahi course", "."],
    intro: "Teeno course live online hain, saral Hindi mein. Fees ek baar, aur group ka saath hamesha.",
    incEyebrow: "Har course ke saath",
    incH: "Fees mein sab shaamil hai.",
    inc: [
      ["Live online class", "Ghar baithe Zoom par, Neetu ji ke saath seedhe."],
      ["Har class ki recording", "Class chhooti to baad mein dekhiye, jitni baar chahe."],
      ["Study notes (PDF)", "Har topic ke saral Hindi notes."],
      ["WhatsApp doubt group", "Sawaal poochiye, Neetu ji aur team jawab dengi."],
      ["Asli kundali practice", "Har hafte asli kundaliyon par abhyaas."],
      ["Certificate", "Course poora karne par Astro Always certificate."],
    ],
    helpH: "Kaunsa course chunein, samajh nahi aa raha?",
    helpP: "WhatsApp par apna sawaal bhejiye. Neetu ji ki team aapko sahi course batayegi.",
    helpMsg: "Namaste Neetu ji, mujhe sahi course chunne mein madad chahiye.",
    helpBtn: "WhatsApp par poochiye",
  },
  en: {
    eyebrow: "Courses · Fees · Syllabus",
    title: ["The ", "right course", " for your level."],
    intro: "All three courses are live and online, in simple language. Pay once, and the group stays with you.",
    incEyebrow: "With every course",
    incH: "Everything is included in the fee.",
    inc: [
      ["Live online classes", "Join from home on Zoom, directly with Neetu ji."],
      ["Recording of every class", "Missed a class? Watch it later, as often as you like."],
      ["Study notes (PDF)", "Simple notes for every topic."],
      ["WhatsApp doubt group", "Ask anything; Neetu ji and the team will answer."],
      ["Real chart practice", "Weekly practice on real birth charts."],
      ["Certificate", "An Astro Always certificate when you complete the course."],
    ],
    helpH: "Not sure which course to choose?",
    helpP: "Send us your question on WhatsApp. Neetu ji's team will suggest the right course.",
    helpMsg: "Hello Neetu ji, I need help choosing the right course.",
    helpBtn: "Ask on WhatsApp",
  },
};

export function Services({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={<>{t.title[0]}<span className="gold-text">{t.title[1]}</span>{t.title[2]}</>}>
        {t.intro}
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
        <Courses lang={lang} syllabus />
      </section>

      <section className="border-y border-gold/10 bg-night/40 py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold">{t.incEyebrow}</p>
          <h2 data-split className="mt-4 font-display text-4xl font-bold text-bone sm:text-5xl">{t.incH}</h2>
          <ul data-stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.inc.map(([it, d]) => (
              <li key={it} data-tilt className="flex gap-4 rounded-2xl border border-gold/15 bg-panel/60 p-6 transition-[border-color,box-shadow] duration-500">
                <span aria-hidden className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-gold/40 text-gold-hi">✦</span>
                <span>
                  <span className="block font-display text-lg font-bold text-bone">{it}</span>
                  <span className="mt-1 block text-sm text-mist">{d}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
        <div data-reveal className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/[0.12] to-panel p-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-bold text-bone sm:text-3xl">{t.helpH}</p>
            <p className="mt-2 text-mist">{t.helpP}</p>
          </div>
          <a href={wa(t.helpMsg)} target="_blank" rel="noopener" data-magnetic className="flex shrink-0 items-center gap-2 rounded-full bg-[#25d366] px-7 py-4 font-semibold text-void">
            <WaIcon className="size-5" /> {t.helpBtn}
          </a>
        </div>
      </section>
      <Motion />
    </>
  );
}
