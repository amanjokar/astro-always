import Image from "next/image";
import Link from "next/link";
import { Motion } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { asset, href, type Lang } from "@/lib/site";

// shortcut: demo milestones and numbers, confirm with Neetu ji before launch.
const T = {
  hi: {
    eyebrow: "About · Neetu Arora",
    title: ["Jyotish ko ", "ghar-ghar", " tak le jaana."],
    intro: "Astro Always ki shuruaat ek seedhe vichaar se hui: jyotish har kisi ko samajh aana chahiye, sirf panditon ko nahi.",
    hello: "Namaste, main Neetu Arora hoon.",
    story: [
      "Pichhle 15 saal se main Vedic Jyotish seekh rahi hoon aur sikha rahi hoon. Shuruaat mein maine dekha ki log jyotish se darte hain: dosh, graha, mehenge upay. Mujhe laga ki agar log khud samjhein, to darr apne aap chala jayega.",
      "Isi soch se Astro Always bana. Yahan hum kundali padhna sikhaate hain, saral Hindi mein, asli kundaliyon ke saath. Aaj 10,000+ vidyarthi is safar mein saath hain.",
    ],
    stats: ["saal anubhav", "vidyarthi", "live course"],
    valuesH: "Hum kis baat par tike hain",
    values: [
      ["Darr nahi, samajh", "Jyotish darane ke liye nahi hai. Hum grah ko samjhaate hain, totke nahi bechte."],
      ["Saral bhasha", "Kathin Sanskrit shabdon ko roz ki bhasha mein samjhaana."],
      ["Imaandari", "Jo jyotish bata sakta hai, wahi batana. Jhoothe vaade nahi."],
    ],
    journeyH: "Safar ab tak",
    journey: [
      ["2010", "Guru ke saath Vedic Jyotish ki shiksha shuru ki."],
      ["2014", "Pehli baar logon ki kundali padhna aur margdarshan dena shuru kiya."],
      ["2018", "Chhote batch mein jyotish padhana shuru kiya."],
      ["2021", "Astro Always ki shuruaat: live online courses poore Bharat ke liye."],
      ["2026", "10,000+ vidyarthi aur 3 course, saral Hindi mein."],
    ],
    cta: "Courses dekhiye",
  },
  en: {
    eyebrow: "About · Neetu Arora",
    title: ["Taking astrology into ", "every home", "."],
    intro: "Astro Always began with a simple idea: everyone should be able to understand astrology, not just priests.",
    hello: "Hello, I am Neetu Arora.",
    story: [
      "For 15 years I have been learning and teaching Vedic Astrology. Early on I saw that people were afraid of astrology: doshas, planets, expensive remedies. I felt that if people understood it themselves, the fear would go away on its own.",
      "That is how Astro Always was born. Here we teach chart reading in simple language, with real birth charts. Today more than 10,000 students are part of this journey.",
    ],
    stats: ["years of experience", "students", "live courses"],
    valuesH: "What we stand for",
    values: [
      ["Understanding, not fear", "Astrology is not meant to scare. We explain the planets; we do not sell rituals."],
      ["Simple language", "Turning difficult Sanskrit terms into everyday words."],
      ["Honesty", "Saying only what astrology can actually tell. No false promises."],
    ],
    journeyH: "The journey so far",
    journey: [
      ["2010", "Began studying Vedic Astrology under a guru."],
      ["2014", "Started reading charts and guiding people."],
      ["2018", "Started teaching astrology to small batches."],
      ["2021", "Launched Astro Always: live online courses for all of India."],
      ["2026", "10,000+ students and 3 courses, in simple language."],
    ],
    cta: "View courses",
  },
};

export function About({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={<>{t.title[0]}<span className="gold-text">{t.title[1]}</span>{t.title[2]}</>}>
        {t.intro}
      </PageHero>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:py-16">
        <div data-arch className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-full border border-gold/40 bg-gradient-to-b from-panel to-void p-3">
          <div className="relative h-full overflow-hidden rounded-t-full border border-gold/20">
            <Image src={asset("/neetu-arora.jpg")} alt="Neetu Arora, founder of Astro Always" fill sizes="384px" priority className="object-cover object-[50%_30%]" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
          </div>
        </div>
        <div>
          <h2 data-split className="font-display text-4xl font-bold leading-[1.05] text-bone sm:text-5xl">{t.hello}</h2>
          <div data-reveal className="mt-5 space-y-4 text-lg leading-relaxed text-bone/75">
            {t.story.map((p) => <p key={p}>{p}</p>)}
          </div>
          <dl data-stagger className="mt-8 grid grid-cols-3 gap-4 border-t border-gold/15 pt-6">
            {[["15", "+"], ["10000", "+"], ["3", ""]].map(([n, s], i) => (
              <div key={t.stats[i]}>
                <dd data-count={n} data-suffix={s} className="font-display text-3xl font-bold text-gold-hi sm:text-4xl">{Number(n).toLocaleString("en-IN")}{s}</dd>
                <dt className="mt-1 text-sm text-mist">{t.stats[i]}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-gold/10 bg-night/40 py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 data-split className="font-display text-4xl font-bold text-bone sm:text-5xl">{t.valuesH}</h2>
          <ul data-stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {t.values.map(([v, d]) => (
              <li key={v} data-tilt className="rounded-2xl border border-gold/15 bg-panel/60 p-7 transition-[border-color,box-shadow] duration-500">
                <p className="font-display text-xl font-bold text-gold-hi">{v}</p>
                <p className="mt-3 leading-relaxed text-mist">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:py-16">
        <h2 data-split className="text-center font-display text-4xl font-bold text-bone sm:text-5xl">{t.journeyH}</h2>
        <ol data-stagger className="relative mt-10 space-y-6 border-l border-gold/25 pl-8">
          {t.journey.map(([y, j]) => (
            <li key={y} className="relative">
              <span aria-hidden className="absolute -left-[41px] top-1 size-4 rotate-45 border border-gold bg-void" />
              <p className="font-mono text-sm text-gold">{y}</p>
              <p className="mt-1 text-lg text-bone/85">{j}</p>
            </li>
          ))}
        </ol>
        <div data-reveal className="mt-12 text-center">
          <Link href={href(lang, "/services")} data-magnetic className="btn-gold inline-block rounded-full px-8 py-4 font-semibold">{t.cta}</Link>
        </div>
      </section>
      <Motion />
    </>
  );
}
