import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    label: "Policy trigger",
    title: "Tariffs changed expectations before they changed volumes.",
    text: "The 2018-2019 trade conflict mattered not only because duties raised costs, but because firms could no longer assume a stable pricing and sourcing environment.",
  },
  {
    label: "Business response",
    title: "Shipment front-loading remains a firm-level question.",
    text: "Tariff deadlines created an incentive to move orders earlier, but this project has not assembled shipment-level evidence to establish how widespread that response was.",
  },
  {
    label: "Economic reading",
    title: "The shock was as much about uncertainty as taxation.",
    text: "Trade did not simply stop. Instead, it became more expensive, more reactive, and less predictable across planning horizons.",
  },
];

const citations = [
  "Federal Reserve Bank of St. Louis. FRED Economic Data.",
  "U.S. Census Bureau. Trade in Goods with China.",
  "Amiti, Redding, and Weinstein. The impact of the 2018 trade war on prices and welfare.",
  "Fajgelbaum et al. The return to protectionism.",
];

export default function TradeWarShockPage() {
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
            Case file 01
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-12 pt-14">
        <p className="text-[11px] uppercase tracking-[0.42em] text-[var(--accent-soft)]">
          Trade War Shock // 2018-2019
        </p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="font-[family:var(--font-display)] text-6xl leading-[0.92] text-white sm:text-7xl">
              Tariffs introduced a policy shock that trade could not ignore.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              This chapter studies the opening rupture in the dataset: a period where
              duties, retaliation, and uncertainty started altering the behavior of
              firms before supply chains experienced the later pandemic collapse.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-[10px] uppercase tracking-[0.34em] text-white/42">
              Case focus
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <article className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/40">
                  Main force
                </p>
                <p className="mt-3 text-2xl text-white">Tariff escalation</p>
              </article>
              <article className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/40">
                  Main outcome
                </p>
                <p className="mt-3 text-2xl text-white">Higher volatility</p>
              </article>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/60">
              The evidence points toward a negative efficiency shock: trade flows
              became less smooth and more strategic even when overall dependence
              remained difficult to unwind quickly.
            </p>
            <Link
              href="/trade-war-shock/paper"
              className="mt-6 inline-flex min-h-[60px] w-full items-center justify-center rounded-[1.2rem] border border-[var(--accent)] bg-[rgba(255,184,77,0.14)] px-6 text-center text-[11px] font-extrabold uppercase tracking-[0.28em] text-white transition hover:bg-[var(--accent)] hover:text-[var(--bg)]"
            >
              Read the Full Paper
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="overflow-hidden rounded-[2.2rem] border border-white/10">
          <Image
            src="/trade-war-hero.jpg"
            alt="Trade war visual"
            width={1800}
            height={1200}
            className="h-[340px] w-full object-cover sm:h-[520px]"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-14 lg:grid-cols-3">
        {sections.map((section) => (
          <article
            key={section.label}
            className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6"
          >
            <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
              {section.label}
            </p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-4xl text-white">
              {section.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/64">{section.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
              Chart read
            </p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-5xl text-white">
              The system bends before it breaks.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The tariff period did not produce a clean separation from Chinese trade.
              Instead, it injected friction into an already integrated system. That is
              why the graph matters: it shows volatility, not simple collapse.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#f7f1e7,#e3d6c3)] p-5">
            <Image
              src="/graph1_trade_dynamics.png"
              alt="Trade dynamics graph"
              width={1600}
              height={1100}
              className="h-auto w-full rounded-[1.4rem] object-contain"
            />
          </div>
          <p className="mt-3 text-xs leading-6 text-white/55 lg:col-start-2">Project-prepared monthly goods values, Jan 2016–Jan 2026, nominal USD millions, not seasonally adjusted. Imports use customs basis; exports use F.A.S. basis. Static extract; download vintage unknown. <Link href="/data" className="text-[var(--accent-soft)] underline">See data notes</Link>.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
            Conclusion
          </p>
          <p className="mt-5 max-w-4xl text-2xl leading-10 text-white/88">
            Tariffs did not simply tax trade. They changed the strategic texture of trade
            by making cross-border planning less stable, less efficient, and more reactive.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-4">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-[10px] uppercase tracking-[0.34em] text-white/42">
              Works cited
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/58">
              {citations.map((citation) => (
                <p key={citation}>{citation}</p>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,184,77,0.12),rgba(255,255,255,0.03))] p-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
                Next chapter
              </p>
              <h2 className="mt-3 font-[family:var(--font-display)] text-4xl text-white">
                Move into the COVID supply shock.
              </h2>
            </div>
            <Link
              href="/covid-supply-chain-disruptions"
              className="rounded-full border border-[var(--line-strong)] px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-white transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)]"
            >
              Open
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
