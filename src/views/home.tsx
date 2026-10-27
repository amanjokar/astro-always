import Image from "next/image";
import Link from "next/link";
import { Courses } from "@/components/courses";
import { WaIcon } from "@/components/footer";
import { HeroCanvas } from "@/components/hero-canvas";
import { Motion } from "@/components/motion";
import { Testimonials } from "@/components/testimonials";
import { asset, href, RASHI, wa, type Lang } from "@/lib/site";

const eyebrow = "font-mono text-[11px] uppercase tracking-[0.25em] text-gold";
const h2 = "font-display text-4xl font-bold leading-[1.05] text-bone sm:text-5xl";
const watermark = "pointer-events-none absolute select-none font-sans font-semibold leading-none text-gold/[0.04]";

const T = {
  hi: {
    eyebrow: "Neetu Arora · Vedic Jyotish Academy",
    h1: ["Janam ke pal mein ", "likhi hai", " aapki kahani."],
    sub: "Neetu Arora ke saath us kahani ko padhna seekhiye. Saral Hindi mein live online courses: Vedic Jyotish, Kundali Vishleshan aur Ank Jyotish + Vastu.",
    seeCourses: "Courses dekhiye",
    waShort: "WhatsApp karein",
    stats: ["Anubhav", "saal", "Vidyarthi", "Rating"],
    scroll: "Neeche scroll karein",
    guide: "Aapki margdarshak",
    aboutH: ["Jyotish darr ke liye nahi, ", "samajh", " ke liye hai."],
    aboutP: "Neetu Arora pichhle 15 saal se Vedic Jyotish padha rahi hain. Unka tareeka seedha hai: pehle grah ko samjho, phir upay karo. Koi darr, koi mehenge totke nahi.",
    features: [
      ["Saral bhasha", "Hindi aur Hinglish mein, bina kathin shabdon ke"],
      ["Asli kundaliyan", "Har concept asli case study se"],
      ["Live class", "Sawaal wahi poochiye, jawab wahi paaiye"],
      ["Saath hamesha", "Course ke baad bhi WhatsApp group"],
    ],
    story: "Neetu ji ki poori kahani →",
    coursesH: "Seekhiye, us guru se jo khud roz kundali padhti hain.",
    syllabus: "Poora syllabus dekhiye →",
    howEyebrow: "Enroll kaise karein",
    howH: "Chaar kadam, aur aap class mein.",
    steps: [
      ["Course chuniye", "Apne level ke hisaab se course chuniye. Confuse hain to WhatsApp par poochiye."],
      ["UPI se payment", "Kisi bhi UPI app se surakshit payment. Turant confirmation."],
      ["WhatsApp group", "Payment ke baad official group ka link. Batch ki saari jaankari wahin."],
      ["Live class shuru", "Neetu ji ke saath live class, recording aur doubt session."],
    ],
    revEyebrow: "Vidyarthiyon ki baat",
    revH: "Jinhone seekha, unki zubaani.",
    faqH: "Aapke sawaal",
    faq: [
      ["Kya mujhe pehle se jyotish aana chahiye?", "Nahi. Jyotish Praveshika bilkul shuruaat se hai. Bas seekhne ki ichha chahiye."],
      ["Class kaise hoti hai?", "Saari class live online hoti hai. Har class ki recording WhatsApp group mein milti hai, to koi class chhoote to baad mein dekh sakte hain."],
      ["Payment ke baad kya hota hai?", "Payment hote hi aapko official WhatsApp group ka link mil jaata hai. Batch, time aur study material wahin aata hai."],
      ["Kya certificate milta hai?", "Haan. Course poora karne par Astro Always ka certificate milta hai."],
    ],
    ctaH: ["Sitare roz badalte hain. ", "Aapki samajh", " bhi badhni chahiye."],
    choose: "Course chuniye",
    talk: "Neetu ji se baat karein",
  },
  en: {
    eyebrow: "Neetu Arora · Vedic Astrology Academy",
    h1: ["Your story is ", "written", " in the stars."],
    sub: "Learn to read it with Neetu Arora. Live online courses in simple language: Vedic Astrology, Kundali Analysis and Numerology + Vastu.",
    seeCourses: "View courses",
    waShort: "WhatsApp us",
    stats: ["Experience", "years", "Students", "Rating"],
    scroll: "Scroll down",
    guide: "Your guide",
    aboutH: ["Astrology is not about fear. It is about ", "understanding", "."],
    aboutP: "Neetu Arora has been teaching Vedic Astrology for 15 years. Her approach is simple: first understand the planet, then apply the remedy. No fear, no expensive rituals.",
    features: [
      ["Simple language", "Hindi and English, without heavy jargon"],
      ["Real charts", "Every concept taught through a real case study"],
      ["Live classes", "Ask your question and get the answer right there"],
      ["Always with you", "A WhatsApp group even after the course ends"],
    ],
    story: "Read Neetu ji's full story →",
    coursesH: "Learn from a teacher who reads charts every single day.",
    syllabus: "See the full syllabus →",
    howEyebrow: "How to enroll",
    howH: "Four steps, and you are in class.",
    steps: [
      ["Pick a course", "Choose the course that suits your level. Unsure? Ask us on WhatsApp."],
      ["Pay with UPI", "Secure payment with any UPI app. Instant confirmation."],
      ["WhatsApp group", "Get the official group link after payment. All batch details are shared there."],
      ["Classes begin", "Live classes with Neetu ji, recordings and doubt sessions."],
    ],
    revEyebrow: "What students say",
    revH: "In the words of those who learned.",
    faqH: "Your questions",
    faq: [
      ["Do I need to know astrology already?", "No. Jyotish Praveshika starts from the very beginning. All you need is the wish to learn."],
      ["How are classes held?", "All classes are live and online. Every recording is shared in the WhatsApp group, so you can catch up on any class you miss."],
      ["What happens after payment?", "You get the official WhatsApp group link right away. Batch details, timings and study material are shared there."],
      ["Do I get a certificate?", "Yes. You receive an Astro Always certificate when you complete the course."],
    ],
    ctaH: ["The stars change every day. ", "Your understanding", " should grow too."],
    choose: "Choose a course",
    talk: "Talk to Neetu ji",
  },
};

export function Home({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <>
      {/* HERO: 3D armillary sphere behind the copy */}
      <section data-hero className="relative isolate min-h-svh overflow-hidden">
        <HeroCanvas />
        <div aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-r from-void via-void/70 to-transparent lg:via-void/40" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-[5] h-40 bg-gradient-to-t from-void to-transparent" />

        <div data-hero-copy className="mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-4 pb-36 pt-24 sm:px-6 lg:pb-12">
          <p data-hero-fade className={eyebrow}>{t.eyebrow}</p>
          <h1 data-hero-split className="mt-5 max-w-4xl font-display text-[2.7rem] font-bold leading-[1.02] text-bone sm:text-6xl lg:text-[5.5rem]">
            {t.h1[0]}<span className="gold-text">{t.h1[1]}</span>{t.h1[2]}
          </h1>
          <p data-hero-fade className="mt-6 max-w-xl text-lg leading-relaxed text-bone/80">{t.sub}</p>
          <div data-hero-fade className="mt-8 flex flex-wrap gap-4">
            <Link href={href(lang, "/services")} data-magnetic className="btn-gold rounded-full px-8 py-4 font-semibold">{t.seeCourses}</Link>
            <a href={wa(lang)} target="_blank" rel="noopener" data-magnetic className="btn-line flex items-center gap-2 rounded-full px-8 py-4 font-semibold">
              <WaIcon className="size-5" /> {t.waShort}
            </a>
          </div>
          <dl data-hero-fade className="mt-10 flex max-w-xl flex-wrap gap-x-10 gap-y-4 border-t border-gold/15 pt-6 font-mono text-xs text-mist">
            <div><dt>{t.stats[0]}</dt><dd className="mt-1 font-display text-3xl text-bone"><span data-count="15" data-suffix="+">15+</span> {t.stats[1]}</dd></div>
            <div><dt>{t.stats[2]}</dt><dd data-count="10000" data-suffix="+" className="mt-1 font-display text-3xl text-bone">10,000+</dd></div>
            <div><dt>{t.stats[3]}</dt><dd className="mt-1 font-display text-3xl text-bone">4.9 <span className="text-gold-hi">★</span></dd></div>
          </dl>
        </div>

        <a href="#neetu" data-hero-fade aria-label={t.scroll} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-mist lg:flex">
          SCROLL
          <span className="relative h-12 w-px overflow-hidden bg-gold/20">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-[drip_1.8s_ease-in-out_infinite] bg-gold-hi" />
          </span>
        </a>
      </section>

      {/* RASHI MARQUEE */}
      <div aria-hidden className="overflow-hidden border-y border-gold/15 bg-night/60 py-5">
        <div data-marquee>
          <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl text-gold/80">
            {[...RASHI, ...RASHI].map(([en, hi], i) => (
              <span key={i} className="flex items-center gap-10">
                {en} <span className="font-sans text-xl text-mist">{hi}</span> <span className="text-gold-hi">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* NEETU */}
      <section id="neetu" className="relative mx-auto grid max-w-7xl scroll-mt-16 items-center gap-12 overflow-x-clip px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <p aria-hidden data-parallax="30" className={`${watermark} -left-10 top-6 text-[14rem]`}>ज्योतिष</p>
        <div className="relative mx-auto w-full max-w-sm">
          <div data-arch className="relative aspect-[4/5] overflow-hidden rounded-t-full border border-gold/40 bg-gradient-to-b from-panel to-void p-3">
            <div className="relative h-full overflow-hidden rounded-t-full border border-gold/20">
              <div data-parallax="6" className="absolute inset-x-0 -inset-y-[8%]">
                <Image src={asset("/neetu-arora.jpg")} alt="Neetu Arora, founder of Astro Always" fill sizes="384px" className="object-cover object-[50%_30%]" />
              </div>
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
            </div>
          </div>
          <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold/40 bg-void px-5 py-2 font-display text-sm text-gold-hi">
            Neetu Arora · Founder
          </p>
        </div>
        <div className="relative">
          <p data-reveal className={eyebrow}>{t.guide}</p>
          <h2 data-split className={`${h2} mt-4`}>
            {t.aboutH[0]}<span className="gold-text">{t.aboutH[1]}</span>{t.aboutH[2]}
          </h2>
          <p data-reveal className="mt-5 text-lg leading-relaxed text-bone/75">{t.aboutP}</p>
          <ul data-stagger className="mt-7 grid gap-4 sm:grid-cols-2">
            {t.features.map(([ft, d]) => (
              <li key={ft} data-tilt className="rounded-xl border border-gold/15 bg-panel/60 p-5 transition-[border-color,box-shadow] duration-500">
                <p className="font-display text-base font-bold text-gold-hi">{ft}</p>
                <p className="mt-1 text-sm text-mist">{d}</p>
              </li>
            ))}
          </ul>
          <Link data-reveal href={href(lang, "/about")} className="nav-link mt-7 inline-block font-semibold text-gold-hi">{t.story}</Link>
        </div>
      </section>

      {/* COURSES */}
      <section className="relative border-t border-gold/10 bg-night/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p data-reveal className={eyebrow}>Courses</p>
              <h2 data-split className={`${h2} mt-4 max-w-2xl`}>{t.coursesH}</h2>
            </div>
            <Link data-reveal href={href(lang, "/services")} className="nav-link shrink-0 font-semibold text-gold-hi">{t.syllabus}</Link>
          </div>
          <div className="mt-12">
            <Courses lang={lang} />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <p data-reveal className={eyebrow}>{t.howEyebrow}</p>
        <h2 data-split className={`${h2} mt-4`}>{t.howH}</h2>
        <ol data-stagger className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map(([st, d], i) => (
            <li key={st} data-tilt className="relative rounded-2xl border border-gold/15 bg-panel/60 p-6 transition-[border-color,box-shadow] duration-500">
              <span className="font-display text-5xl font-bold text-gold/25">{i + 1}</span>
              <p className="mt-3 font-display text-lg font-bold text-bone">{st}</p>
              <p className="mt-2 text-sm leading-relaxed text-mist">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-gold/10 bg-night/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p data-reveal className={eyebrow}>{t.revEyebrow}</p>
          <h2 data-split className={`${h2} mt-4 max-w-3xl`}>{t.revH}</h2>
          <div data-reveal className="mt-8">
            <Testimonials lang={lang} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 data-split className={`${h2} text-center`}>{t.faqH}</h2>
        <div data-stagger className="mt-10 divide-y divide-gold/15 border-y border-gold/15">
          {t.faq.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex items-center justify-between gap-6 font-display text-lg text-bone transition-colors group-hover:text-gold-hi">
                {q}
                <span aria-hidden className="faq-plus grid size-9 shrink-0 place-items-center rounded-full border border-gold/30 text-xl text-gold transition-transform duration-300">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-mist">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-gold/15 px-4 py-16 text-center sm:px-6 lg:py-20">
        <div aria-hidden className="absolute left-1/2 top-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 animate-[pulse-glow_5s_ease-in-out_infinite] rounded-full bg-gold/10 blur-3xl" />
        <div className="relative">
          <Image data-reveal src={asset("/logo.webp")} alt="" width={96} height={96} className="mx-auto animate-[float_6s_ease-in-out_infinite] rounded-full" />
          <h2 data-split className={`${h2} mx-auto mt-6 max-w-3xl`}>
            {t.ctaH[0]}<span className="gold-text">{t.ctaH[1]}</span>{t.ctaH[2]}
          </h2>
          <div data-reveal className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={href(lang, "/services")} data-magnetic className="btn-gold rounded-full px-8 py-4 font-semibold">{t.choose}</Link>
            <a href={wa(lang)} target="_blank" rel="noopener" data-magnetic className="btn-line flex items-center gap-2 rounded-full px-8 py-4 font-semibold">
              <WaIcon className="size-5" /> {t.talk}
            </a>
          </div>
        </div>
      </section>
      <Motion />
    </>
  );
}
