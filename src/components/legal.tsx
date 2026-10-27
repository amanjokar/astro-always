import { Motion } from "./motion";
import { PageHero } from "./page-hero";

// shortcut: draft policy text for the demo, have it reviewed by a lawyer before launch.
export function Legal({ title, updated, sections }: { title: string; updated: string; sections: [string, string[]][] }) {
  return (
    <>
      <PageHero eyebrow={`Policy · ${updated}`} title={title} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-14">
        {sections.map(([h, ps], i) => (
          <section key={h} data-reveal className="border-b border-gold/10 py-6 first:pt-0">
            <h2 className="font-display text-xl font-bold text-gold-hi">
              <span className="mr-3 font-mono text-sm text-gold/60">{String(i + 1).padStart(2, "0")}</span>
              {h}
            </h2>
            {ps.map((p) => (
              <p key={p} className="mt-3 leading-relaxed text-bone/80">{p}</p>
            ))}
          </section>
        ))}
      </article>
      <Motion />
    </>
  );
}
