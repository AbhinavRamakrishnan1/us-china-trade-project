import Link from "next/link";

const evidenceSections = [
  {
    title: "1. Define recovery",
    question: "Did bilateral goods trade recover in value, volume, composition, and reliability, and do those measures tell the same story?",
    evidence: "Use monthly Census bilateral goods data and distinguish nominal values from quantity/price-adjusted measures. State a baseline (for example, 2017-2019) and avoid treating a return in nominal dollars as proof of structural restoration.",
  },
  {
    title: "2. Persistent policy conditions",
    question: "Which Section 301 tariffs and exclusions remained in effect after 2022, and what changed?",
    evidence: "Build a dated USTR/Federal Register action timeline. Keep tariff policy chronology separate from observed trade outcomes; the time series alone cannot identify tariff causality.",
  },
  {
    title: "3. Sourcing geography and indirect exposure",
    question: "Did direct sourcing shift toward other partners, and what can available data say about Chinese value added?",
    evidence: "Compare Census partner and product-level flows; measure direct imports, partner-level imports from China, Chinese value added, Chinese FDI, and illegal origin evasion as distinct outcomes. The Federal Reserve's value-added estimates end in 2020 and its rerouting analysis runs through 2022; do not extrapolate either result to 2025.",
  },
  {
    title: "4. Inventory and logistics normalization",
    question: "Did inventories and delivery constraints normalize after the acute 2020-2021 disruption?",
    evidence: "Use Census Manufacturing and Trade Inventories and Sales data by sector. The New York Fed GSCPI and Federal Reserve port indicators can contextualize global pressure, but neither is a China-specific firm delivery-time measure. Separate inventory levels from reported firm strategy and supply reliability.",
  },
  {
    title: "5. 2024-2025 endpoint and limits",
    question: "What had changed by 2025, and what remains unknown?",
    evidence: "Freeze a dated data vintage, account for revisions, and compare nominal trade values with real/quantity measures where available. Avoid causal claims without a defensible comparison design.",
  },
];

const sourceLinks = [
  { label: "U.S. Census Bureau, Trade in Goods with China", href: "https://www.census.gov/foreign-trade/balance/c5700.html", type: "PRIMARY DATA" },
  { label: "U.S. Census Bureau, Country and Product Trade Data", href: "https://www.census.gov/foreign-trade/statistics/country/index.html", type: "PRIMARY DATA / PARTNER FLOWS" },
  { label: "U.S. Census Bureau, monthly international trade time-series data", href: "https://www.census.gov/data/developers/data-sets/international-trade.html", type: "PRIMARY DATA / PRODUCT SERIES" },
  { label: "FRED IMPCH, China goods imports on customs basis", href: "https://fred.stlouisfed.org/series/IMPCH", type: "PRIMARY DATA / SERIES" },
  { label: "FRED EXPCH, China goods exports on F.A.S. basis", href: "https://fred.stlouisfed.org/series/EXPCH", type: "PRIMARY DATA / SERIES" },
  { label: "USTR, Section 301 China investigation and actions", href: "https://ustr.gov/issue-areas/enforcement/section-301-investigations/section-301-china", type: "POLICY RECORD" },
  { label: "USTR, final 2024 Section 301 tariff modifications", href: "https://ustr.gov/about-us/policy-offices/press-office/press-releases/2024/september/ustr-finalizes-action-china-tariffs-following-statutory-four-year-review", type: "POLICY RECORD" },
  { label: "Haberkorn et al. (2024), Federal Reserve FEDS Notes, Global Trade Patterns after Tariff Hikes", href: "https://www.federalreserve.gov/econres/notes/feds-notes/global-trade-patterns-in-the-wake-of-the-2018-2019-u-s-china-tariff-hikes-20240412.html", type: "FEDERAL RESERVE RESEARCH" },
  { label: "Federal Reserve, July 2021 Monetary Policy Report", href: "https://www.federalreserve.gov/monetarypolicy/2021-07-mpr-part1.htm", type: "GOVERNMENT CONTEXT" },
  { label: "Federal Reserve, Bottlenecks, Shortages, and Soaring Prices (2022)", href: "https://www.federalreserve.gov/econres/notes/feds-notes/bottlenecks-shortages-and-soaring-prices-in-the-us-economy-20220624.html", type: "GOVERNMENT CONTEXT" },
  { label: "BEA, International Services Expanded", href: "https://www.bea.gov/data/intl-trade-investment/international-services-expanded", type: "PRIMARY DATA" },
  { label: "Census Bureau, Manufacturing and Trade Inventories and Sales", href: "https://www.census.gov/mtis/index.html", type: "PRIMARY DATA / INVENTORY" },
  { label: "New York Fed, Global Supply Chain Pressure Index", href: "https://www.newyorkfed.org/research/policy/gscpi", type: "AGGREGATE LOGISTICS INDICATOR" },
  { label: "BLS, Import/Export Price Indexes: data and series identifiers", href: "https://www.bls.gov/mxp/data/", type: "PRICE DEFLATOR CANDIDATE" },
  { label: "Hoang and Lewis (2024), As the U.S. Is Derisking from China, Other Foreign U.S. Suppliers Are Relying More on Chinese Imports, FEDS Notes", href: "https://www.federalreserve.gov/econres/notes/feds-notes/as-the-u-s-is-derisking-from-china-Other-foreign-u-s-suppliers-are-relying-more-on-chinese-imports-20240802.html", type: "FEDERAL RESERVE RESEARCH" },
  { label: "Fajgelbaum et al. (2024), The U.S.-China Trade War and Global Reallocations, AER: Insights 6(2), 295-312", href: "https://www.aeaweb.org/articles?id=10.1257/aeri.20230094", type: "PEER-REVIEWED RESEARCH" },
  { label: "Alfaro and Chor (2023), Global Supply Chains: The Looming Great Reallocation, NBER Working Paper 31661", href: "https://www.nber.org/papers/w31661", type: "ACADEMIC WORKING PAPER" },
];

export default function PostCovidRecoveryPatternPaperPage() {
  return (
    <main className="observatory-page min-h-screen bg-[#070a0d] text-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-[11px] uppercase tracking-[0.38em] text-[var(--accent-soft)]">
          Full Paper // Case File 04
        </p>
        <h1 className="mt-6 font-[family:var(--font-display)] text-5xl leading-tight text-white sm:text-6xl">
          Post-COVID Recovery Pattern
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/68">Research evidence plan // 2022-2025</p>

        <article className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">Research status</p>
          <h2 className="mt-4 font-[family:var(--font-display)] text-3xl text-white">Paper in Development</h2>
          <p className="mt-4 leading-8 text-white/66">
            Working hypothesis to test, not a finding: compare 2022-2025 U.S. direct goods imports from China with a fixed 2017-2019 baseline, measuring nominal value and China&apos;s share of total U.S. goods imports separately. A recovery in nominal value need not mean the pre-2018 sourcing share returned. Test the two outcomes separately; any real-volume or firm-strategy conclusion requires additional price/quantity or firm-level data.
          </p>
        </article>

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
          <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">Proposed section outline and evidence</p>
          <div className="mt-6 space-y-5">
            {evidenceSections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-white/10 bg-black/10 p-5">
                <h2 className="font-[family:var(--font-display)] text-2xl">{section.title}</h2>
                <p className="mt-3 leading-7 text-white/75"><strong>Question:</strong> {section.question}</p>
                <p className="mt-2 leading-7 text-white/60"><strong>Evidence needed:</strong> {section.evidence}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
          <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">Data and literature starting points</p>
          <p className="mt-4 leading-7 text-white/65">Required dataset metadata: source/table or series, measure, country/product scope, frequency, units, price basis, seasonal adjustment, coverage, retrieval date/vintage, transformation, and known limitations. Current project CSVs are static and have no recorded retrieval vintage. Census annual partner totals and monthly product-level data should be separately versioned; Census inventory measures describe stock levels but not firms&apos; motives for holding them. BLS locality-of-origin price indexes may support a price adjustment, but should not be presented as China-specific physical-volume measures unless their scope supports that interpretation. The New York Fed GSCPI is a global indicator, not a China-specific reliability measure.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {sourceLinks.map((source) => (
              <a key={source.label} href={source.href} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-4 text-white/80 transition hover:border-[var(--accent)]">
                <span className="block text-[9px] tracking-[0.2em] text-[var(--accent-soft)]">{source.type}</span>
                <span className="mt-2 block text-sm leading-6">{source.label}</span>
              </a>
            ))}
          </div>
          <h2 className="mt-8 font-[family:var(--font-display)] text-2xl">Claims to avoid without stronger evidence</h2>
          <ul className="mt-4 space-y-2 leading-7 text-white/65">
            <li>Do not equate growth in a third country&apos;s U.S. exports with transshipment or Chinese value added.</li>
            <li>Do not claim the pre-2020 supply chain returned, or that firms broadly adopted durable “just-in-case” strategies, without defined measures and firm-level evidence.</li>
            <li>Do not attribute the observed post-2022 trade path to tariffs or resilience programs from descriptive trends alone.</li>
            <li>Do not equate nominal trade-value recovery with real volume recovery or improved delivery reliability.</li>
            <li>Do not claim a 2025 full-year result from a dataset whose extraction vintage is unknown; verify all 12 months and document the annual aggregation.</li>
          </ul>
        </section>

        <div className="mt-12">
          <Link
            href="/post-covid-recovery-pattern"
            className="inline-flex min-h-[56px] items-center justify-center rounded-[999px] border border-[var(--line-strong)] px-6 text-[11px] font-extrabold uppercase tracking-[0.26em] text-white transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)]"
          >
            Back to Case File
          </Link>
        </div>
      </section>
    </main>
  );
}
