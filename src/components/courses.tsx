"use client";

import { useRef, useState } from "react";
import { coursesFor, inr, wa, type Course, type Lang } from "@/lib/site";

const T = {
  hi: {
    learn: "Kya padhenge",
    enroll: "Abhi enroll karein",
    ask: "Sawaal hai? WhatsApp par poochiye →",
    askMsg: (t: string) => `Namaste Neetu ji, mujhe "${t}" course ke baare mein jaankari chahiye.`,
    step: (n: number) => `Step ${n} / 2`,
    close: "Band karein",
    scan: (f: string) => `Kisi bhi UPI app se scan karke ${f} pay karein.`,
    demoQr: "DEMO QR — asli site par Razorpay ka QR aayega",
    paid: "Maine payment kar diya",
    welcome: "Payment mil gaya. Swagat hai!",
    group: "Batch ki saari jaankari, class ka time aur recordings official WhatsApp group mein milengi.",
    join: "WhatsApp group join karein",
    joinMsg: (t: string) => `Namaste Neetu ji, maine "${t}" ke liye payment kar diya hai. Kripya group link bhejein.`,
    demoJoin: "Demo: abhi ye Neetu ji ko WhatsApp kholta hai, asli site par seedha group link khulega",
  },
  en: {
    learn: "What you will learn",
    enroll: "Enroll now",
    ask: "Have a question? Ask on WhatsApp →",
    askMsg: (t: string) => `Hello Neetu ji, I would like to know more about the "${t}" course.`,
    step: (n: number) => `Step ${n} / 2`,
    close: "Close",
    scan: (f: string) => `Scan with any UPI app and pay ${f}.`,
    demoQr: "DEMO QR — the live site will show a Razorpay QR",
    paid: "I have paid",
    welcome: "Payment received. Welcome!",
    group: "Batch details, class timings and recordings are shared in the official WhatsApp group.",
    join: "Join the WhatsApp group",
    joinMsg: (t: string) => `Hello Neetu ji, I have paid for "${t}". Please send me the group link.`,
    demoJoin: "Demo: this opens a WhatsApp chat with Neetu ji; the live site will open the group link directly",
  },
};

export function Courses({ lang, syllabus = false }: { lang: Lang; syllabus?: boolean }) {
  const t = T[lang];
  const courses = coursesFor(lang);
  const dialog = useRef<HTMLDialogElement>(null);
  const [course, setCourse] = useState<Course>(courses[0]);
  const [paid, setPaid] = useState(false);

  const open = (c: Course) => {
    setCourse(c);
    setPaid(false);
    dialog.current?.showModal();
  };

  return (
    <>
      <div data-stagger className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
        {courses.map((c) => (
          <article
            key={c.id}
            data-tilt
            className={`group flex flex-col rounded-2xl border p-7 transition-[border-color,box-shadow] duration-500 ${
              c.featured
                ? "border-gold/60 bg-gradient-to-b from-gold/[0.14] to-panel shadow-[0_0_60px_-20px_#d6a43b88] lg:-mt-4 lg:mb-4"
                : "border-gold/15 bg-panel/70"
            }`}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">{c.level}</p>
            <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-bone">{c.title}</h3>
            <p className="mt-1 text-lg text-gold-hi/80">{c.hindi}</p>
            <p className="mt-3 font-mono text-xs text-mist">{c.weeks}</p>
            <ul className="mt-6 space-y-3 text-[15px] text-bone/85">
              {c.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
            {syllabus && (
              <div className="mt-6 border-t border-gold/15 pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">{t.learn}</p>
                <ol className="mt-3 space-y-1.5 text-sm text-bone/75">
                  {c.syllabus.map((s, i) => (
                    <li key={s}><span className="font-mono text-gold">{String(i + 1).padStart(2, "0")}</span> {s}</li>
                  ))}
                </ol>
              </div>
            )}
            <div className="mt-auto pt-7">
              <p className="flex items-baseline gap-3">
                <span className="font-display text-4xl font-bold text-bone">{inr(c.fee)}</span>
                <s className="text-mist">{inr(c.mrp)}</s>
              </p>
              <button
                onClick={() => open(c)}
                data-magnetic
                className={`mt-5 w-full rounded-full px-6 py-3.5 font-semibold ${c.featured ? "btn-gold" : "btn-line"}`}
              >
                {t.enroll}
              </button>
              <a
                href={wa(t.askMsg(c.title))}
                target="_blank"
                rel="noopener"
                className="mt-3 block text-center text-sm text-mist transition-colors hover:text-[#25d366]"
              >
                {t.ask}
              </a>
            </div>
          </article>
        ))}
      </div>

      <dialog
        ref={dialog}
        className="m-auto w-[min(92vw,440px)] rounded-2xl border border-gold/30 bg-night p-0 text-bone backdrop:bg-void/80 backdrop:backdrop-blur-sm"
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
      >
        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">{t.step(paid ? 2 : 1)}</p>
              <h3 className="mt-2 font-display text-xl font-bold">{course.title}</h3>
            </div>
            <button onClick={() => dialog.current?.close()} aria-label={t.close} className="text-2xl leading-none text-mist hover:text-bone">
              ×
            </button>
          </div>

          {!paid ? (
            <>
              <p className="mt-4 text-sm text-mist">{t.scan(inr(course.fee))}</p>
              <div className="mx-auto mt-5 w-52 rounded-xl bg-bone p-3">
                <DemoQR seed={course.id} />
              </div>
              <p className="mt-3 text-center font-mono text-[11px] text-ember">{t.demoQr}</p>
              <button onClick={() => setPaid(true)} className="btn-gold mt-6 w-full rounded-full py-3.5 font-semibold">
                {t.paid}
              </button>
            </>
          ) : (
            <>
              <p className="mt-5 text-lg text-gold-hi">{t.welcome}</p>
              <p className="mt-2 text-sm text-mist">{t.group}</p>
              <a
                href={wa(t.joinMsg(course.title))}
                target="_blank"
                rel="noopener"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] py-3.5 font-semibold text-void"
              >
                {t.join}
              </a>
              <p className="mt-3 text-center font-mono text-[11px] text-mist">{t.demoJoin}</p>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}

function DemoQR({ seed }: { seed: string }) {
  const n = 25;
  let h = [...seed].reduce((a, c) => Math.imul(a ^ c.charCodeAt(0), 16777619), 2166136261);
  const finder = (x: number, y: number) =>
    [[0, 0], [n - 7, 0], [0, n - 7]].some(([fx, fy]) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7);
  const cells: [number, number][] = [];
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) {
      h = Math.imul(h ^ (h >>> 13), 1274126177);
      if (!finder(x, y) && (h & 3) === 0) cells.push([x, y]);
    }
  return (
    <svg viewBox={`0 0 ${n} ${n}`} className="h-auto w-full" aria-label="Demo QR code" shapeRendering="crispEdges">
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#08070b" />
      ))}
      {[[0, 0], [n - 7, 0], [0, n - 7]].map(([x, y]) => (
        <g key={`${x}${y}`} fill="none" stroke="#08070b">
          <rect x={x + 0.5} y={y + 0.5} width="6" height="6" />
          <rect x={x + 2} y={y + 2} width="3" height="3" fill="#08070b" stroke="none" />
        </g>
      ))}
    </svg>
  );
}
