import Link from "next/link";

const findings = [
  {
    label: "Recovery question",
    title: "Value recovery is not necessarily volume recovery.",
    text: "This case file tests whether post-COVID normalization represents a return to earlier trade patterns, using separate measures for nominal value, volume, sourcing, and reliability where available.",
  },
  {
    label: "Adaptation",
    title: "Business adaptation needs direct evidence.",
    text: "Inventory, sourcing diversification, and risk management are candidate mechanisms; aggregate bilateral trade data alone cannot show whether firms changed strategy or why.",
  },
  {
    label: "Interpretation",
    title: "Recovery and fragmentation can happen at the same time.",
    text: "The research asks whether apparent normalization coincided with lasting structural changes. Descriptive trends alone cannot attribute those changes to tariffs, logistics disruption, or strategic policy.",
  },
];

export default function PostCovidRecoveryPatternPage() {
  return (
    <main className="min-h-screen bg-[#06080b] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(6,8,11,0.86)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.42em] text-white/55 transition hover:text-white"
          >
            Back to observatory
          </Link>
          <p className="text-[10px] uppercase tracking-[0.36em] text-[var(--accent-soft)]">
            Case file 04
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-12 pt-14">
        <p className="text-[11px] uppercase tracking-[0.42em] text-[var(--accent-soft)]">
          Post-COVID Recovery Pattern // 2022-2025
        </p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="font-[family:var(--font-display)] text-6xl leading-[0.92] text-white sm:text-7xl">
              Recovery returned some trade flow, but not necessarily the old system.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              This case file examines whether the post-2021 recovery phase restored
              the relationship in a meaningful sense or merely stabilized it under
              altered structural conditions.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-[10px] uppercase tracking-[0.34em] text-white/42">
              Case focus
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <article className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/40">
                  Time window
                </p>
                <p className="mt-3 text-2xl text-white">2022-2025</p>
              </article>
              <article className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/40">
                  Main issue
                </p>
                <p className="mt-3 text-2xl text-white">Partial recovery</p>
              </article>
            </div>
            <Link
              href="/post-covid-recovery-pattern/paper"
              className="mt-6 inline-flex min-h-[60px] w-full items-center justify-center rounded-[1.2rem] border border-[var(--accent)] bg-[rgba(255,184,77,0.14)] px-6 text-center text-[11px] font-extrabold uppercase tracking-[0.28em] text-white transition hover:bg-[var(--accent)] hover:text-[var(--bg)]"
            >
              Paper in Development
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-14 lg:grid-cols-3">
        {findings.map((finding) => (
          <article
            key={finding.label}
            className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6"
          >
            <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
              {finding.label}
            </p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-4xl text-white">
              {finding.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/64">{finding.text}</p>
          </article>
        ))}
      </section>

      <nav aria-label="Case file navigation" className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 pb-20">
        <Link href="/trade-deficit-persistence" className="rounded-full border border-white/20 px-5 py-3 text-sm text-white/75 transition hover:border-[var(--accent)] hover:text-white">← Previous: Case File 03</Link>
        <Link href="/" className="rounded-full border border-[var(--accent)] px-5 py-3 text-sm text-white transition hover:bg-[var(--accent)] hover:text-[var(--bg)]">Return to Observatory →</Link>
      </nav>
    </main>
  );
}
