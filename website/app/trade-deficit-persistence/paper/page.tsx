import Link from "next/link";

const paperSections = [
  {
    heading: "Abstract",
    paragraphs: [
      "The U.S. goods trade deficit with China was about $418.2 billion in 2018 and $202.7 billion in 2025 in the current Census annual table. This decline coincided with tariff escalation, a pandemic-era supply-chain crisis, and subsequent sourcing changes. This paper asks why the bilateral imbalance remained economically significant as the policy narrative shifted from tariffs to logistics to recovery. It treats the bilateral deficit as distinct from the aggregate current-account balance: the national saving-investment identity applies to the current account, not mechanically to a deficit with one trading partner. Federal Reserve research documents trade diversion and indirect China exposure, but the available evidence here does not quantify how much of the bilateral decline represents rerouting rather than reduced direct imports.",
    ],
  },
  {
    heading: "Introduction",
    paragraphs: [
      "Across the period covered by this broader research project, from the opening tariff actions of 2018 through the pandemic-era logistics crisis and into the partial recovery and diversification of 2022 to 2025, the U.S. goods deficit with China remained large even as it declined. In the current Census annual table, it was $418.2 billion in 2018, $297.0 billion in 2024, and $202.7 billion in 2025. These are nominal goods-trade figures and can change with revisions. The U.S. overall goods-and-services balance is a separate aggregate measure. This paper asks why the bilateral imbalance remained economically significant as the policy narrative changed.",
      "The thesis advanced here is that the bilateral deficit is not a direct measure of aggregate U.S. saving or investment, and that a tariff aimed at one supplier may change the geography and composition of imports without mechanically eliminating an aggregate external imbalance. The national saving-investment identity is useful context for the U.S. current account, but it does not by itself explain the China-specific bilateral balance. Whether policy or supply-chain changes explain its persistence must be tested against bilateral and product-level evidence rather than inferred from the identity.",
    ],
  },
  {
    heading: "Background",
    paragraphs: [
      "The chronology of shocks covered elsewhere in this research project provides the backdrop here. Section 301 tariffs began in 2018 and were followed by Chinese retaliation; empirical research finds tariff pass-through into U.S. import prices, a narrower claim than pass-through to all consumer prices. The 2020-2021 period brought factory and logistics disruptions alongside a shift in demand toward goods. Census annual figures show the bilateral goods deficit at $382.3 billion in 2022, $279.6 billion in 2023, $297.0 billion in 2024, and $202.7 billion in 2025. These nominal figures alone do not identify the causes of year-to-year changes.",
      "The U.S. runs a goods deficit and a services surplus with China simultaneously. BEA services statistics report about $55.0 billion in U.S. services exports to China and $21.9 billion in services imports in 2024, a surplus of about $33.2 billion. These annual services data are a separate measure and should not be netted casually against the Census goods balance without matching definitions and vintages.",
    ],
  },
  {
    heading: "Aggregate Identities and the Bilateral Balance",
    paragraphs: [
      "The national income accounting identity relates the current-account balance to national saving minus domestic investment (subject to statistical discrepancies). It does not say that a bilateral goods balance equals the national saving-investment gap. The identity is an aggregate accounting relationship, not by itself a causal explanation for the size or persistence of the U.S.-China bilateral deficit. Demonstrating how the aggregate saving-investment gap evolved from 2016 to 2025 would require a separate, consistently sourced national-accounts series.",
      "The identity offers only indirect context for a bilateral balance. Tariffs can affect prices, quantities, domestic production, and potentially saving and investment decisions; an accounting identity alone does not tell us which effects dominate. Changes in the U.S.-China balance and in balances with Vietnam, Mexico, or other partners must be measured directly. The present project data describe bilateral monthly trade and do not identify the causal contribution of any one policy or macroeconomic mechanism.",
    ],
  },
  {
    heading: "The Empirical Timeline: Peak, Disruption, and Decline",
    paragraphs: [
      "The deficit was about $418.2 billion in 2018, the year the first Section 301 tariffs took effect. It was $382.3 billion in 2022, $279.6 billion in 2023, $297.0 billion in 2024, and $202.7 billion in 2025 in the current Census annual table. The 2024 increase and 2025 decline are descriptive; this comparison alone cannot attribute them to tariffs, sourcing decisions, or other causes. Census reports imports of $536.3 billion in 2022 and $308.7 billion in 2025, and exports of $154.0 billion and $106.0 billion respectively.",
      "The 2020-2021 window sits inside this longer trend. Freight costs and delivery delays affected trade reliability, while nominal bilateral trade values also reflected prices and changing demand. Monthly or quarterly trade values alone would not isolate logistics reliability from those other factors. Trade reliability and the trade balance are distinct dimensions and need separate measures.",
    ],
  },
  {
    heading: "Geographic Diversion and the Limits of the Headline Number",
    paragraphs: [
      "Federal Reserve staff analysis by Trang Hoang and Gordon Lewis (2024) finds that U.S. suppliers increased reliance on Chinese imports and that the supplier mix shifted toward countries with stronger China trade ties. Its analysis suggests Chinese value added in U.S. imports may have declined less than China's direct import share, but the authors state that available value-added data do not extend beyond 2020 and that rerouting of Chinese goods through third countries appeared limited through 2022. These are aggregate trade-flow and value-added estimates: they do not identify each product's route, establish Chinese FDI as the cause, or prove illegal transshipment. Direct import decline, sourcing diversion, Chinese inputs embodied in third-country output, Chinese investment abroad, and illegal origin evasion are separate outcomes.",
      "A New York Fed Liberty Street Economics analysis by Hunter L. Clark (February 2025) compares U.S.-reported imports from China with Chinese-reported exports to the United States and discusses a sizable statistical gap, including possible direct-to-consumer and de minimis shipments that may be recorded differently. This comparison is evidence that bilateral trade statistics may not capture every flow symmetrically; it is not a shipment-level dataset proving that the gap consists of Chinese-origin goods routed through Vietnam or Mexico. The analysis does not establish a quantified share of the U.S.-China deficit decline attributable to transshipment.",
      "The available sources support caution in interpreting direct bilateral imports as a complete measure of indirect exposure, but they do not quantify how much of the observed decline reflects rerouting, measurement differences, or genuine supplier diversification. The headline Census series therefore should not be treated either as proof of complete decoupling or as proof that dependence simply moved intact through third countries.",
    ],
  },
  {
    heading: "Political Rhetoric Versus Structural Economic Forces",
    paragraphs: [
      "A bilateral deficit is not, by itself, evidence of unfair trade practices or economic weakness. Nor does an aggregate saving-investment identity determine the bilateral composition of trade. Sector-specific employment, value-added, and adjustment costs may still matter, but this draft does not include the BEA/BLS sector evidence needed to assess those effects empirically.",
      "The political framing across this period often treated the bilateral deficit with China as a scorecard for whether trade policy was \"working.\" A more complete assessment would separately examine the aggregate current account, bilateral goods trade, sector composition, and exposure to particular suppliers. Whether those changes affected resilience or bargaining leverage requires evidence beyond the headline dollar balance.",
    ],
  },
  {
    heading: "Limitations and Counterarguments",
    paragraphs: [
      "A limitation is that this paper does not decompose the decline in direct bilateral trade into domestic production, substitution to other suppliers, third-country value added, or statistical/reporting differences. Doing so would require product-level sourcing and value-added evidence not present in the current project dataset. The aggregate saving-investment identity also does not explain why a deficit is concentrated with China rather than other partners; that question requires separate evidence on comparative advantage, supply-chain relationships, and consumption patterns.",
    ],
  },
  {
    heading: "Conclusion",
    paragraphs: [
      "The U.S.-China goods deficit declined substantially in nominal Census data from 2018 to 2025, but this descriptive trend does not isolate the effects of tariffs, logistics disruption, supplier diversification, or statistical differences. Aggregate saving and investment accounts provide context for the overall U.S. current account, not a direct explanation of a bilateral goods deficit. Evidence of third-country trade diversion warrants attention to indirect exposure, but the current sources do not establish that a quantified share of the decline was rerouted Chinese production. These distinctions are necessary before drawing conclusions about policy effectiveness or decoupling.",
    ],
  },
];

const bibliographyGuidance = [
  "Government data: U.S. Census Bureau annual and monthly bilateral goods trade; BEA International Services Expanded, table 2.4; FRED national accounts for aggregate current-account context.",
  "Federal Reserve research: Hoang and Lewis (2024), As the U.S. Is Derisking from China, Other Foreign U.S. Suppliers Are Relying More on Chinese Imports; Clark (2025), U.S. Imports from China Have Fallen by Less Than U.S. Data Indicate. Clark's analysis is a statistical comparison, not shipment-level proof of transshipment.",
  "Peer-reviewed and NBER literature: Fajgelbaum, Goldberg, Kennedy & Khandelwal (2020, Quarterly Journal of Economics) and related follow-up work on tariff effects and sourcing diversion; open-economy macroeconomics texts or papers on the saving-investment-trade balance identity.",
  "Policy documents: USTR annual reports on the U.S.-China trade relationship; USTR Section 301 tariff schedules referenced in the companion paper.",
  "Sector data: BEA/BLS manufacturing employment and value-added data for tariff-affected industries, 2016-2025.",
  "Contextual press may help establish chronology, but it is not used as primary evidence for the bilateral trade, value-added, or transshipment claims in this draft.",
];

const suggestedFigures = [
  "Line chart: U.S. bilateral goods trade deficit with China, annual, 2016-2025, with the 2018 peak and 2025 figure labeled.",
  "Comparative line chart: U.S. bilateral goods deficits with China, Vietnam, and Mexico, 2016-2025. Label it as a descriptive comparison only; a shared trend does not by itself establish trade diversion or causal substitution.",
  "Line chart: U.S. gross national saving and gross domestic investment as shares of GDP, 2016-2025, to illustrate the structural saving-investment gap alongside the bilateral deficit trend.",
  "Bar chart: U.S. imports from China as a share of total U.S. imports, comparing U.S.-reported data against China-reported export data, to visualize the \"missing imports\" discrepancy.",
  "Table: side-by-side comparison of the aggregate U.S. goods and services deficit versus the bilateral China deficit, by year, to show whether aggregate and bilateral trends diverge.",
  "Stacked bar chart: composition of the U.S.-China trade balance by goods vs. services, annual, to show the services surplus offsetting part of the goods deficit.",
];

const evidenceNeeds = [
  "Complete annual Census Bureau bilateral goods trade balance figures for China, 2016-2021, to fill the gap in the timeline between the 2018 peak and the 2022 figure already sourced.",
  "Quarterly bilateral trade data for 2020-2021 specifically, to test whether the supply-chain disruption period saw the deficit widen, narrow, or hold steady.",
  "FRED national-accounts data for aggregate current-account context; these data cannot establish a bilateral China-specific saving-investment mechanism.",
  "Comparable product-level Census data for China, Vietnam, and Mexico, plus input-output or value-added evidence, to distinguish direct trade diversion from Chinese-origin goods, intermediate inputs, and transshipment.",
  "Census bilateral trade data for Vietnam and Mexico, 2016-2025, to pair against the China data for the diversion chart.",
  "BEA services trade data with China, annual, 2016-2025, to complete the goods-versus-services balance picture.",
  "BEA/BLS sector-level manufacturing employment and value-added data for tariff-affected industries, to assess the real-economy dimension of the deficit debate beyond the headline dollar figure.",
];

export default function TradeDeficitPersistencePaperPage() {
  return (
    <main className="observatory-page min-h-screen bg-[#070a0d] text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-[11px] uppercase tracking-[0.38em] text-[var(--accent-soft)]">
          Full Paper // Case File 03
        </p>
        <h1 className="mt-6 font-[family:var(--font-display)] text-4xl leading-tight text-white sm:text-6xl">
          Persistent Deficit, Shifting Geography: Structural Drivers of the U.S.-China
          Trade Imbalance, 2016-2025
        </h1>

        <aside className="mt-6 rounded-xl border border-amber-200/20 bg-amber-100/[0.04] px-5 py-4 text-sm leading-6 text-white/70" role="note">
          Working research draft. Bracketed notes mark evidence or citations still to be added; statements attached to those notes should not be treated as fully verified. Key references: <a className="underline" href="https://www.census.gov/foreign-trade/balance/c5700.html" target="_blank" rel="noreferrer">Census China goods trade table</a>, <a className="underline" href="https://www.federalreserve.gov/econres/notes/feds-notes/as-the-u-s-is-derisking-from-china-Other-foreign-u-s-suppliers-are-relying-more-on-chinese-imports-20240802.html" target="_blank" rel="noreferrer">Hoang &amp; Lewis (2024), Federal Reserve FEDS Notes</a>, <a className="underline" href="https://libertystreeteconomics.newyorkfed.org/2025/02/u-s-imports-from-china-have-fallen-by-less-than-u-s-data-indicate/" target="_blank" rel="noreferrer">Clark (2025), New York Fed</a>, and <a className="underline" href="https://www.bea.gov/data/intl-trade-investment/international-services-expanded" target="_blank" rel="noreferrer">BEA international services data</a>.
        </aside>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
          {paperSections.map((section) => (
            <article key={section.heading} className="mb-10 last:mb-0">
              <h2 className="font-[family:var(--font-display)] text-3xl text-white sm:text-4xl">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-5 text-[1.03rem] leading-8 text-white/72">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.heading}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 lg:col-span-1">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
              Evidence Sources to Complete
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/64">
              {bibliographyGuidance.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>

          <article className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 lg:col-span-1">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
              Suggested Charts and Tables
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/64">
              {suggestedFigures.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>

          <article className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,184,77,0.1),rgba(255,255,255,0.03))] p-6 lg:col-span-1">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
              Evidence Still Needed
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/70">
              {evidenceNeeds.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>
        </section>

        <div className="mt-12">
          <Link
            href="/trade-deficit-persistence"
            className="inline-flex min-h-[56px] items-center justify-center rounded-[999px] border border-[var(--line-strong)] px-6 text-[11px] font-extrabold uppercase tracking-[0.26em] text-white transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)]"
          >
            Back to Case File
          </Link>
        </div>
      </section>
    </main>
  );
}
