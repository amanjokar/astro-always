// Title band for inner pages: eyebrow, split-revealed title, short intro.
export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-gold/15 pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div aria-hidden className="absolute -right-40 -top-40 size-[520px] rounded-full border border-gold/15" />
      <div aria-hidden className="absolute -right-24 -top-24 size-[380px] animate-[spin_60s_linear_infinite] rounded-full border border-dashed border-gold/20" />
      <div aria-hidden className="absolute right-10 top-10 size-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
        <h1 data-split className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.05] text-bone sm:text-6xl">{title}</h1>
        {children && <div data-reveal className="mt-5 max-w-2xl text-lg leading-relaxed text-bone/75">{children}</div>}
      </div>
    </section>
  );
}
