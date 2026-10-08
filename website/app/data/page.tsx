import Link from "next/link";
import DataExplorer from "./DataExplorer";

const sources = [
  { name: "FRED: U.S. Imports of Goods by Customs Basis from China (IMPCH)", url: "https://fred.stlouisfed.org/series/IMPCH", note: "Monthly nominal millions of dollars, not seasonally adjusted; Census/BEA source. Values are revisable." },
  { name: "FRED: U.S. Exports of Goods by F.A.S. Basis to Mainland China (EXPCH)", url: "https://fred.stlouisfed.org/series/EXPCH", note: "Monthly nominal millions of dollars, not seasonally adjusted; Census/BEA source. F.A.S. export valuation differs from the import customs basis." },
  { name: "U.S. Census Bureau: Trade in Goods with China", url: "https://www.census.gov/foreign-trade/balance/c5700.html", note: "Official bilateral goods-trade reference for comparison and verification." },
  { name: "Federal Reserve: Global trade after the 2018–19 tariff hikes", url: "https://www.federalreserve.gov/econres/notes/feds-notes/global-trade-patterns-in-the-wake-of-the-2018-2019-u-s-china-tariff-hikes-20240412.html", note: "Research on trade-pattern changes following the tariff increases." },
  { name: "Federal Reserve Board (2021), Monetary Policy Report", url: "https://www.federalreserve.gov/monetarypolicy/2021-07-mpr-part1.htm", note: "Documents strong U.S. goods demand, supply constraints, import prices, and port congestion; not China-only firm-level evidence." },
  { name: "Federal Reserve (2022), Bottlenecks, Shortages, and Soaring Prices", url: "https://www.federalreserve.gov/econres/notes/feds-notes/bottlenecks-shortages-and-soaring-prices-in-the-us-economy-20220624.html", note: "Analyzes demand reallocation, capacity constraints, port throughput, and prices as interacting causes." },
  { name: "Federal Reserve Bank of New York, Global Supply Chain Pressure Index", url: "https://www.newyorkfed.org/research/policy/gscpi", note: "Aggregate global pressure index built from transportation-cost and supply-chain indicators; not a China-specific port or delivery-time series." },
];

export default function DataPage() {
  return (
    <main className="research-page">
      <header className="research-topbar"><Link href="/">Trade Shock Observatory</Link><Link href="/">Back to observatory</Link></header>
      <div className="research-content">
        <p className="research-kicker">Data &amp; Sources</p>
        <h1>Look at the series.<br /><span>Check its limits.</span></h1>
        <p className="research-intro">A transparent guide to the project’s working monthly trade file, the variables derived from it, and the authoritative sources readers can use to verify the wider context.</p>

        <DataExplorer />

        <section className="research-section" aria-labelledby="catalog-title">
          <p className="research-kicker">Dataset catalog</p><h2 id="catalog-title">What this file contains</h2>
          <div className="catalog-grid">
            <article><span>File</span><strong>clean_trade_analysis.csv</strong><p>Project-prepared monthly table, downloadable for inspection.</p></article>
            <article><span>Observed coverage</span><strong>Jan 2016 – Jan 2026</strong><p>121 rows. The file does not establish a complete 2025 calendar year.</p></article>
            <article><span>Fields</span><strong>Imports · Exports · Balance</strong><p>Also includes month-over-month percentage changes and a broad period label.</p></article>
            <article><span>Imports</span><strong>U.S. Imports of Goods by Customs Basis from China · IMPCH</strong><p>Source: U.S. Census Bureau and Bureau of Economic Analysis, distributed by the Federal Reserve Bank of St. Louis (FRED). Monthly; millions of nominal U.S. dollars; not seasonally adjusted; customs valuation. Project coverage: Jan 2016–Jan 2026.</p></article>
            <article><span>Exports</span><strong>U.S. Exports of Goods by F.A.S. Basis to Mainland China · EXPCH</strong><p>Source: U.S. Census Bureau and Bureau of Economic Analysis, distributed by FRED. Monthly; millions of nominal U.S. dollars; not seasonally adjusted; F.A.S. valuation. Project coverage: Jan 2016–Jan 2026.</p></article>
            <article><span>Frequency and units</span><strong>Monthly · nominal USD millions</strong><p>Both series are not seasonally adjusted. Because imports and exports use different valuation bases, the project balance is a descriptive difference, not a harmonized national-accounts balance.</p></article>
            <article><span>Snapshot vintage</span><strong>Not recorded</strong><p>The original download date/vintage is absent. FRED/Census observations may be revised; this local CSV is a static extract, not a live feed.</p></article>
          </div>
          <a className="download-link" href="/data/clean_trade_analysis.csv" download>Download the project CSV <span aria-hidden="true">↓</span></a>
        </section>

        <section className="research-section" aria-labelledby="method-title">
          <p className="research-kicker">Method notes</p><h2 id="method-title">How to interpret the columns</h2>
          <div className="method-notes">
            <p><strong>Trade deficit (positive convention):</strong> the project calculates <code>Imports - Exports</code>. It combines customs-basis imports and F.A.S.-basis exports and should not be presented as the official Census balance series.</p>
            <p><strong>Monthly change:</strong> <code>((current month / previous month) - 1) × 100</code>, calculated separately for imports and exports with pandas <code>pct_change() * 100</code>. The first month is blank because no prior month is included.</p>
            <p><strong>Period labels:</strong> broad project bins created in <code>main.py</code>; they are not official statistical classifications and do not isolate causal effects.</p>
            <p><strong>Coverage and revisions:</strong> this extract contains 121 monthly observations from January 2016 through January 2026; it does not represent a complete 2025 year. FRED identifies Census/BEA as the source, but the local retrieval date/vintage is unknown and historical observations may be revised.</p>
          </div>
        </section>

        <section className="research-section" aria-labelledby="reconciliation-title">
          <p className="research-kicker">Annual reconciliation</p><h2 id="reconciliation-title">Census totals and this snapshot differ</h2>
          <p>The Census annual table is the reference for the paper&apos;s annual deficit figures. The following compares it with sums of the matching calendar-year monthly rows in the local FRED-derived file (USD millions; local minus Census):</p>
          <div className="method-notes">
            <p><strong>2023:</strong> Census deficit 279,607.8; monthly snapshot 279,611.1; difference +3.3.</p>
            <p><strong>2024:</strong> Census deficit 297,047.7; monthly snapshot 295,515.2; difference −1,532.5.</p>
            <p><strong>2025:</strong> Census deficit 202,674.1; monthly snapshot 202,071.3; difference −602.8.</p>
          </div>
          <p>2016–2022 sums agree with the currently displayed Census annual table to the shown precision. The 2024–2025 differences are material. Because the local retrieval vintage was not preserved, this project cannot determine the cause; the figures are not forced to match or silently substituted. The comparison does not establish whether revisions, timing, valuation, or another extraction difference explains the gaps.</p>
        </section>

        <section className="research-section" aria-labelledby="sources-title">
          <p className="research-kicker">Verification shelf</p><h2 id="sources-title">Primary and research sources</h2>
          <div className="source-list">{sources.map((source) => <a key={source.name} href={source.url} target="_blank" rel="noreferrer"><strong>{source.name}</strong><span>{source.note}</span><small>Open source ↗</small></a>)}</div>
        </section>
        <footer className="research-footer"><Link href="/">← Back to the observatory</Link><Link href="/glossary">Open the economics glossary →</Link></footer>
      </div>
      <style>{`
        .research-page{min-height:100vh;background:radial-gradient(ellipse at 82% 0%,rgba(255,184,77,.11),transparent 34%),#070a0d;color:#f8f2e8}
        .research-topbar{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;padding:18px max(24px,calc((100vw - 1120px)/2));border-bottom:1px solid rgba(255,255,255,.1);background:rgba(7,10,13,.88);backdrop-filter:blur(14px);font-size:.75rem;letter-spacing:.08em}
        .research-topbar a,.research-footer a{color:#f8f2e8;text-decoration:none}.research-content{width:min(1120px,calc(100% - 40px));margin:0 auto;padding:84px 0 60px}
        .research-kicker,.data-kicker{margin:0;color:#ffcb7b;font-size:.68rem;font-weight:800;letter-spacing:.24em;text-transform:uppercase}.research-content h1{margin:18px 0;font-family:var(--font-display);font-size:clamp(3.5rem,9vw,7.3rem);line-height:.9;letter-spacing:-.055em}.research-content h1 span{color:#ffcb7b}.research-intro{max-width:680px;color:#c1c6ca;font-size:1.1rem;line-height:1.8}
        .data-explorer,.research-section{margin-top:64px;padding:clamp(22px,4vw,42px);border:1px solid rgba(255,255,255,.1);border-radius:28px;background:rgba(255,255,255,.035)}.data-explorer-head{display:flex;justify-content:space-between;gap:24px;align-items:end}.research-content h2{margin:12px 0;font-family:var(--font-display);font-size:clamp(2rem,4vw,3.2rem);line-height:1.04}.data-muted,.data-caveat,.research-section p{color:#b9c0c7;line-height:1.75}.measure-control{display:grid;gap:8px;min-width:235px;color:#b9c0c7;font-size:.75rem}.measure-control select{min-height:46px;padding:0 12px;border:1px solid rgba(255,255,255,.15);border-radius:12px;background:#11171c;color:#f8f2e8;font:inherit}.data-status{color:#ffcb7b;font-size:.78rem}.chart-frame{overflow:hidden;border:1px solid rgba(255,255,255,.08);border-radius:18px;background:rgba(0,0,0,.18)}.chart-frame svg{display:block;width:100%;height:auto;min-height:230px}.chart-gridline{stroke:rgba(255,255,255,.09);stroke-width:1}.chart-line{fill:none;stroke:#ffbf62;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}.chart-point{fill:#fff0d6;opacity:.7}.chart-label{fill:#9da8b1;font-size:12px}.chart-legend{display:flex;align-items:center;gap:9px;margin-top:14px;color:#d9d4cb;font-size:.82rem}.legend-mark{width:18px;height:3px;background:#ffbf62}.data-caveat{font-size:.82rem}.research-section{margin-top:30px}.catalog-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.catalog-grid article,.method-notes p,.source-list a{padding:20px;border:1px solid rgba(255,255,255,.08);border-radius:16px;background:rgba(255,255,255,.025)}.catalog-grid article span{display:block;color:#ffcb7b;font-size:.65rem;letter-spacing:.16em;text-transform:uppercase}.catalog-grid article strong{display:block;margin-top:10px}.catalog-grid article p{margin:8px 0 0;font-size:.9rem}.download-link{display:inline-flex;gap:14px;align-items:center;margin-top:18px;padding:15px 20px;border-radius:999px;background:#ffbf62;color:#17130d;font-weight:800;text-decoration:none}.method-notes{display:grid;gap:10px}.method-notes p{margin:0}.method-notes strong{color:#fff}.source-list{display:grid;gap:10px}.source-list a{display:grid;gap:7px;color:#f8f2e8;text-decoration:none}.source-list a:hover,.source-list a:focus-visible{border-color:#ffbf62}.source-list span{color:#b9c0c7}.source-list small{color:#ffcb7b}.research-footer{display:flex;justify-content:space-between;gap:18px;margin-top:34px;padding:22px 0;border-top:1px solid rgba(255,255,255,.12);font-size:.84rem}
        @media(max-width:700px){.research-content{padding-top:58px}.data-explorer-head{align-items:stretch;flex-direction:column}.measure-control{min-width:0}.catalog-grid{grid-template-columns:1fr}.research-footer{flex-direction:column}.chart-frame svg{min-height:180px}}
        .research-page{background:radial-gradient(ellipse at 86% 8%,rgba(75,159,169,.16),transparent 34%),linear-gradient(180deg,#09131d 0%,#0b1720 54%,#08121a 100%);color:var(--foreground);position:relative}
        .research-page:before{content:"";position:fixed;inset:0;pointer-events:none;background-image:linear-gradient(rgba(185,223,225,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(185,223,225,.035) 1px,transparent 1px);background-size:64px 64px;mask-image:linear-gradient(180deg,#000,transparent 90%)}
        .research-topbar{padding-block:16px;border-color:var(--line);background:rgba(8,14,20,.94);font-size:.78rem;letter-spacing:.02em}
        .research-topbar a,.research-footer a{transition:color var(--motion-fast) var(--ease-standard)}
        .research-topbar a:hover,.research-footer a:hover{color:var(--accent)}
        .research-kicker,.data-kicker{color:var(--accent-amber);font-size:var(--type-meta);font-weight:700;letter-spacing:.14em}
        .research-content h1{font-family:var(--font-display),Georgia,serif;font-size:clamp(3.25rem,8vw,6.5rem);font-weight:500;line-height:.94;letter-spacing:-.035em;text-wrap:balance}
        .research-content h1 span{color:var(--accent-amber)}
        .research-intro{font-size:1.05rem;line-height:1.75}
        .data-explorer,.research-section{margin-top:48px;padding:clamp(22px,4vw,32px);border-color:rgba(185,223,225,.14);border-radius:var(--radius-lg);background:linear-gradient(145deg,rgba(24,49,59,.66),rgba(11,25,34,.76));box-shadow:0 18px 54px rgba(0,0,0,.12)}
        .research-content h2{font-family:var(--font-display),Georgia,serif;font-size:var(--type-section);font-weight:500;line-height:1.1;letter-spacing:-.025em}
        .data-muted,.data-caveat,.research-section p,.measure-control{color:var(--text-secondary)}
        .catalog-grid article,.method-notes p,.source-list a{border-color:var(--line);border-radius:var(--radius-md);background:rgba(255,255,255,.02)}
        .catalog-grid article span,.source-list small{color:var(--accent-amber);letter-spacing:.12em}
        .download-link{min-height:44px;padding:0 18px;border-radius:var(--radius-sm);background:var(--accent-amber);transition:background var(--motion-fast) var(--ease-standard)}
        .source-list a{transition:border-color var(--motion-fast) var(--ease-standard),background var(--motion-fast) var(--ease-standard)}
        .source-list a:hover,.source-list a:focus-visible{border-color:var(--line-strong);background:rgba(255,255,255,.045)}
        .chart-frame{border-color:var(--line);border-radius:var(--radius-md);background:rgba(5,15,22,.55)}
        @media(max-width:700px){.research-page:before{background-size:44px 44px}}
      `}</style>
    </main>
  );
}
