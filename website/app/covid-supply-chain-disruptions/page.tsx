import Image from "next/image";
import Link from "next/link";
import SupplyChainModel from "./SupplyChainModel";

const findings = [
  {
    title: "Multiple failures landed at once.",
    text: "Production slowdowns, labor shortages, transport congestion, and inventory stress all hit the same system at the same time.",
  },
  {
    title: "Trade recovered unevenly rather than smoothly.",
    text: "The rebound was real, but it moved through bottlenecks and cost pressure instead of a clean return to pre-pandemic conditions.",
  },
  {
    title: "Resilience became a question for research.",
    text: "The disruptions created incentives to diversify and buffer supply chains, but durable firm-level changes require direct evidence beyond this project's trade series.",
  },
];

const references = [
  "Federal Reserve Bank of St. Louis. FRED Economic Data.",
  "U.S. Census Bureau. Trade in Goods with China.",
  "International Monetary Fund. World Economic Outlook supply-chain analysis.",
  "World Trade Organization. Global Value Chain Development Report.",
];

export default function CovidSupplyChainPage() {
  return (
    <main className="observatory-page min-h-screen bg-[#06080b] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(6,8,11,0.86)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.42em] text-white/55 transition hover:text-white"
          >
            Back to observatory
          </Link>
          <p className="text-[10px] uppercase tracking-[0.36em] text-[var(--accent-soft)]">
            Case file 02
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-12 pt-14">
        <p className="text-[11px] uppercase tracking-[0.42em] text-[var(--accent-soft)]">
          COVID Supply Chain Disruptions // 2020-2021
        </p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="font-[family:var(--font-display)] text-6xl leading-[0.92] text-white sm:text-7xl">
              The pandemic exposed how fragile efficient trade systems can be.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              This section tracks the second and sharper rupture in the project timeline.
              The issue was no longer just policy friction. It was the breakdown of the
              logistics network itself.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-[10px] uppercase tracking-[0.34em] text-white/42">Case focus</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <article className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/40">Time window</p>
                <p className="mt-3 text-2xl text-white">2020-2021</p>
              </article>
              <article className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/40">Primary shock</p>
                <p className="mt-3 text-2xl text-white">Logistics disruption</p>
              </article>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/60">Core question: how did simultaneous production, transport, and inventory pressures affect trade reliability?</p>
            <Link
              href="/covid-supply-chain-disruptions/paper"
              className="mt-6 inline-flex min-h-[60px] w-full items-center justify-center rounded-[1.2rem] border border-[var(--accent)] bg-[rgba(255,184,77,0.14)] px-6 text-center text-[11px] font-extrabold uppercase tracking-[0.28em] text-white transition hover:bg-[var(--accent)] hover:text-[var(--bg)]"
            >
              Read the Full Paper
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-14 lg:grid-cols-3">
        {findings.map((finding) => (
          <article key={finding.title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">Finding</p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-4xl text-white">{finding.title}</h2>
            <p className="mt-4 text-base leading-7 text-white/64">{finding.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <SupplyChainModel />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-4">
        <figure className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.025]">
          <Image
            src="/shipping-port.jpg"
            alt="Port cranes and container stacks at a shipping terminal"
            width={1800}
            height={1200}
            className="h-[340px] w-full object-cover sm:h-[520px]"
          />
          <figcaption className="px-5 py-4 text-sm leading-6 text-white/55">Illustrative image: container port infrastructure. Used as visual context for logistics capacity and movement; not presented as a measured dataset or as proof of a specific event.</figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
              Chart read
            </p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-5xl text-white">
              The rebound is visible, but so is the strain.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Percent change matters here because it shows instability directly. The
              series does not just dip and recover. It snaps, surges, and moves unevenly
              as firms adapt to severe logistics pressure.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#f7f1e7,#e3d6c3)] p-5">
            <Image
              src="/graph3_percent_change.png"
              alt="Percent change graph"
              width={1600}
              height={1100}
              className="h-auto w-full rounded-[1.4rem] object-contain"
            />
          </div>
          <p className="mt-3 text-xs leading-6 text-white/55 lg:col-start-2">Month-over-month percent changes calculated from monthly nominal goods-trade values, Jan 2016–Jan 2026; raw series are not seasonally adjusted. Project calculation, not an official published growth series. <Link href="/data" className="text-[var(--accent-soft)] underline">See data notes</Link>.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
            Conclusion
          </p>
          <p className="mt-5 max-w-4xl text-2xl leading-10 text-white/88">
            COVID did not simply interrupt trade. It redefined what counts as a robust
            trade system by revealing how dangerous over-optimization can become.
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
              {references.map((reference) => (
                <p key={reference}>{reference}</p>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,184,77,0.12),rgba(255,255,255,0.03))] p-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
                Next chapter
              </p>
              <h2 className="mt-3 font-[family:var(--font-display)] text-4xl text-white">
                Go to Section 03.
              </h2>
            </div>
            <Link
              href="/trade-deficit-persistence"
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
