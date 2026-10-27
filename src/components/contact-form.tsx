"use client";

import { coursesFor, wa, type Lang } from "@/lib/site";

const field =
  "mt-2 w-full rounded-xl border border-gold/20 bg-void/60 px-4 py-3 text-bone placeholder:text-mist/60 outline-none transition-colors focus:border-gold";

const T = {
  hi: {
    name: "Aapka naam", namePh: "Jaise: Priya Sharma", city: "Shehar", cityPh: "Jaise: Jaipur",
    course: "Kis course ke baare mein?", undecided: "Abhi tay nahi kiya", msg: "Aapka sawaal", msgPh: "Apna sawaal likhiye…",
    send: "WhatsApp par bhejein", hint: "Button dabate hi WhatsApp khulega, aapka message pehle se likha hoga.",
    text: (n: string, c: string, co: string, m: string) => `Namaste Neetu ji, main ${n} (${c}) hoon.\nCourse: ${co}\n${m}`,
  },
  en: {
    name: "Your name", namePh: "e.g. Priya Sharma", city: "City", cityPh: "e.g. Jaipur",
    course: "Which course?", undecided: "Not decided yet", msg: "Your question", msgPh: "Write your question…",
    send: "Send on WhatsApp", hint: "WhatsApp opens with your message already written.",
    text: (n: string, c: string, co: string, m: string) => `Hello Neetu ji, I am ${n} from ${c}.\nCourse: ${co}\n${m}`,
  },
};

// No backend: the form turns into a pre-filled WhatsApp message to Neetu ji.
export function ContactForm({ lang }: { lang: Lang }) {
  const t = T[lang];
  const courses = coursesFor(lang);
  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    window.open(wa(t.text(f.name.trim(), f.city.trim(), f.course, f.message.trim())), "_blank", "noopener");
  };

  return (
    <form onSubmit={send} className="rounded-2xl border border-gold/20 bg-panel/80 p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-mist">
          {t.name}
          <input name="name" required autoComplete="name" placeholder={t.namePh} className={field} />
        </label>
        <label className="block text-sm text-mist">
          {t.city}
          <input name="city" required autoComplete="address-level2" placeholder={t.cityPh} className={field} />
        </label>
      </div>
      <label className="mt-5 block text-sm text-mist">
        {t.course}
        <select name="course" className={field} defaultValue={courses[0].title}>
          {courses.map((c) => (
            <option key={c.id}>{c.title}</option>
          ))}
          <option>{t.undecided}</option>
        </select>
      </label>
      <label className="mt-5 block text-sm text-mist">
        {t.msg}
        <textarea name="message" required rows={4} placeholder={t.msgPh} className={field} />
      </label>
      <button data-magnetic className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] py-4 font-semibold text-void">
        {t.send}
      </button>
      <p className="mt-3 text-center text-xs text-mist">{t.hint}</p>
    </form>
  );
}
