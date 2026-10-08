import Link from "next/link";

const paperSections = [
  {
    heading: "Abstract",
    paragraphs: [
      "Between 2018 and 2019, the United States imposed successive rounds of Section 301 tariffs on Chinese goods, and China retaliated with tariffs of its own. This paper reviews published evidence on three questions: who bore the higher import costs, whether firms shifted sourcing and where, and whether tariff uncertainty may have affected firm planning. Published estimates find that tariffs were passed through to U.S. import prices at the border, and that the resulting real-income losses depend heavily on the measure and model used. Evidence on sourcing shifts is limited to what the cited Federal Reserve research reports, and the paper does not itself analyze trade data. The uncertainty channel is treated as a hypothesis motivated by the literature, not as an observed finding. The paper does not estimate retail price effects, firm-level responses, or the overall effectiveness of the tariff strategy.",
    ],
  },
  {
    heading: "Introduction",
    paragraphs: [
      "On March 22, 2018, the Office of the U.S. Trade Representative (USTR) released its Report on China's Acts, Policies, and Practices Related to Technology Transfer, Intellectual Property, and Innovation under Section 301. The report stated USTR's findings; this paper reports them as the agency's determination, not as an independently established fact. Over the following eighteen months, the United States implemented several tariff lists covering hundreds of billions of dollars of Chinese goods, and China imposed retaliatory tariffs on U.S. exports. The average effective tariff rate depends on product coverage, exclusions, and calculation method, so this paper does not report a single aggregate rate (USTR, 2018a; see References).",
      "The paper asks a narrower question than \"did the trade war work.\" It asks what published research says about how the tariffs moved through the economy: who absorbed the costs, how firms adjusted sourcing, and whether policy uncertainty plausibly mattered. This is a literature-based review. It presents no original data analysis, and each section states what the cited sources do and do not establish.",
    ],
  },
  {
    heading: "Background",
    paragraphs: [
      "The legal basis was Section 301 of the Trade Act of 1974. USTR's action records and Federal Register notices document the product lists and changes: List 1 covered about $34 billion at 25 percent effective July 6, 2018; List 2 about $16 billion at 25 percent effective August 23, 2018; List 3 about $200 billion at 10 percent from September 24, 2018, with the increase to 25 percent taking effect May 10, 2019; and List 4 was divided, with List 4A effective September 1, 2019 and List 4B postponed and later suspended. Product exclusions and later modifications mean these actions should not be summarized as one uniform tariff rate (USTR, 2018b; Federal Register, 83 FR 28710, 40823, 47974; 84 FR 20459, 43304, 45821, 69447).",
      "China's State Council Tariff Commission issued its own notices for retaliatory lists, including the July 6 and August 23 rounds and the September 24 measures on roughly $60 billion of U.S. goods at rates of 5 or 10 percent. Those Chinese notices, rather than U.S. statements, are the primary record for China's schedules (State Council Tariff Commission, 2018, Announcements 5, 7, and 8). USDA's 2018 Market Facilitation Program fact sheet lists eligible commodities including soybeans and pork. The program documents assistance in response to trade disruption; it is not itself an estimate of producers' realized losses or evidence about how China selected products (USDA FSA, 2018; GAO, 2018).",
    ],
  },
  {
    heading: "Definitions and Scope",
    paragraphs: [
      "For clarity, this review uses these operational definitions: pass-through is the share of a tariff reflected in the price paid for imports, measured at the border unless stated otherwise; trade diversion is a shift in the geographic pattern of trade flows; rerouting or transshipment is the movement of Chinese-origin goods through a third country before entering the United States; and reshoring is the return of production to the United States. These terms are not interchangeable. Observing a rise in a third country's exports to the United States does not, by itself, establish Chinese origin, transshipment, or reshoring.",
    ],
  },
  {
    heading: "Cost Pass-Through and Domestic Prices",
    paragraphs: [
      "Using product-level U.S. customs data for the 2018 tariff episode, Amiti, Redding, and Weinstein (2019, pp. 187-210) report essentially complete pass-through into U.S. prices of imported goods and estimate that aggregate U.S. real income was reduced by $1.4 billion per month by the end of 2018. This is an estimated border-price and welfare result, not a claim that every retail price rose by the tariff amount. Their analysis centers on the 2018 tariff waves and does not measure the later May 2019 increase as a full-year outcome.",
      "Fajgelbaum, Goldberg, Kennedy, and Khandelwal (2020, pp. 1-55) estimate $51 billion in losses to U.S. consumers and firms buying imports (0.27 percent of GDP) before accounting for tariff revenue and gains to domestic producers, and a net aggregate real-income loss of $7.2 billion (0.04 percent of GDP). These are model-based estimates for the short-run 2018 trade-war episode, not observed cash losses or a complete assessment of later tariff changes.",
      "The figures measure different concepts, not competing estimates of one quantity: the $51 billion is the modeled gross cost to import buyers, while the $7.2 billion is the modeled net real-income loss after tariff revenue and producer gains are counted. Amiti et al.'s $1.4 billion figure is a monthly real-income estimate by the end of 2018; it should not be directly compared with Fajgelbaum et al.'s annualized estimates without aligning concepts and periods. Fajgelbaum et al.'s Census sample runs from January 2017 through April 2019; the May 2019 increase to 25 percent on List 3 falls outside that sample period. The estimates therefore do not establish the effects of the full 2019 tariff schedule (Amiti et al., 2019; Fajgelbaum et al., 2020, Online Appendix A.2).",
      "Retail-price effects would require a separate analysis of appropriately matched BLS import-price and consumer-price indexes; this review has not selected or analyzed those series. Exchange-rate changes, Section 232 steel and aluminum tariffs, product exclusions, and firms' timing of shipments are outside this paper's scope, so its literature summary does not isolate their effects.",
    ],
  },
  {
    heading: "Trade Volumes and Sourcing",
    paragraphs: [
      "In their study of the 2018 trade-war tariff episode, Fajgelbaum et al. (2019 working paper; published 2020) estimate that imports from targeted countries declined 31.5 percent within products and targeted U.S. exports fell 11.0 percent. These are within-product estimates across tariff-exposed country-product pairs using monthly trade and tariff data, not changes in all U.S.-China trade; the underlying Census sample covers January 2017-April 2019, before the May 2019 List 3 increase took effect (Fajgelbaum et al., 2020, Table I and Online Appendix A.2).",
      "Importers facing added duties had an incentive to consider suppliers outside the tariff lists, but that incentive alone does not show how much sourcing shifted or whether production returned to the United States. Haberkorn et al. (2024) use U.S. Census and UN Comtrade data to document a decline in China's direct share of U.S. goods imports alongside increased sourcing from other partners; they also find those partners imported more from China in overlapping product categories. Hoang and Lewis (2024, Figures 1-6) document greater Chinese import shares among many U.S. suppliers and conclude that rerouting of Chinese goods through third countries appeared limited through 2022. The authors note that Chinese value-added data for U.S. imports are unavailable after 2020. These aggregate patterns do not prove illegal transshipment or quantify the Chinese content of any specific shipment. Census product-level trade, firm investment, and input-output/value-added measures answer different questions and are not interchangeable.",
      "This paper is a literature review and has not conducted its own Census trade analysis. It therefore reports no original product-level estimates for China, Vietnam, Mexico, or Taiwan.",
    ],
  },
  {
    heading: "Uncertainty and Firm Planning",
    paragraphs: [
      "A changing tariff schedule can create uncertainty distinct from the tariff rate ultimately paid. Handley and Limão (2017) study the reduction in uncertainty around China's WTO accession and its effects on Chinese exports to the United States; that historical setting motivates a mechanism but does not directly establish how U.S. firms responded in 2018-2019. Caldara et al. (2020) combine firm-level, newspaper-based, and tariff-based uncertainty measures and find that increases in trade-policy uncertainty predict lower investment and economic activity. Their results support the plausibility of an uncertainty channel, not specific claims about shipment frontloading, inventory buffers, or delayed capital spending by firms in this episode. This paper has not assembled direct firm-level or survey evidence on those behaviors (Handley & Limão, 2017; Caldara et al., 2020).",
      "The uncertainty channel is therefore a hypothesis here. It is plausible and studied, but it is not an observed finding of this paper.",
    ],
  },
  {
    heading: "WTO and Policy Context",
    paragraphs: [
      "China requested WTO consultations over U.S. Section 301 measures in DS543 on April 4, 2018, and DS565 on August 23, 2018. The United States separately initiated DS558 on July 16, 2018, concerning Chinese additional duties that followed U.S. steel and aluminum measures under Section 232. DS558 was not a reciprocal case about Section 301. The United States and China signed the Phase One agreement on January 15, 2020; the agreement did not itself end the existing Section 301 actions. This is a legal and procedural chronology, not an analysis of the political tone of bilateral relations (WTO, DS543, DS565, DS558; USTR, 2020).",
    ],
  },
  {
    heading: "Limitations and Counterarguments",
    paragraphs: [
      "First, the welfare estimates depend on model structure and estimated elasticities. The gross and net figures differ because they measure different things, not because they are alternative estimates of the same outcome. The dollar estimates should be read as model-dependent estimates for the stated tariff episode and period, not as precise measurements that can be directly transferred to later years.",
      "Second, defenders of the tariff strategy argue that short-run costs were the price of a longer-run negotiating objective, and that Phase One and later shifts in export controls and industrial policy should be judged as a multi-year strategy. This paper does not assess that question. It looks only at the narrower channels of pass-through, sourcing, and uncertainty, and it leaves the longer-run assessment to research extending beyond 2019.",
    ],
  },
  {
    heading: "Conclusion",
    paragraphs: [
      "The 2018-2019 tariff escalation was a major policy shock but not a randomized experiment. Published studies find substantial pass-through to U.S. import prices, while retail-price and welfare effects depend on the measure and model. Federal Reserve research documents changes in sourcing geography, which alone does not show widespread reshoring or quantify Chinese value added in diverted flows. The uncertainty channel is plausible, but the firm behaviors it implies remain unverified without direct evidence. These limits mean this paper's account should not be read as a causal estimate of tariff effectiveness.",
      "References are linked in the source shelf below. Web sources accessed September 29, 2026. The studies cited here are used within the periods, measures, and limitations stated in the text.",
    ],
  },
];

const bibliographyGuidance = [
  "This paper is a literature review and does not present original data analysis. An original extension could use the U.S. Census Bureau's monthly product-level trade data, but would need to document the HTS classification, partner/product coverage, nominal or deflated measure, extraction date, and transformations.",
  "A price-incidence extension could match tariffed product categories to BLS import-price indexes and carefully selected consumer-price measures; border-price pass-through should not be treated as a retail-price estimate.",
  "An uncertainty extension could analyze firm-level or survey evidence for 2018-2019. Published studies on trade-policy uncertainty provide a mechanism and broader evidence, but do not establish the specific shipment, inventory, or capital-spending behaviors discussed here.",
  "For context only, contemporaneous reporting can help reconstruct chronology; it should not substitute for government tariff schedules, original research, or documented data in support of economic estimates.",
];

const suggestedFigures = [
  "Timeline chart of tariff list effective dates and rates (U.S. on China; China on U.S.), 2018-2019.",
  "Line chart: U.S. average effective tariff rate on Chinese imports vs. China's average effective tariff rate on U.S. exports, monthly, 2017-2020.",
  "Line chart: U.S. imports from China vs. U.S. imports from Vietnam, Mexico, and Taiwan, indexed to a 2017 base, to show sourcing substitution.",
  "Bar or line chart: BLS import price index for tariffed product categories vs. non-tariffed categories, to illustrate pass-through.",
  "Line chart: a trade policy uncertainty index overlaid with private nonresidential fixed investment, to show the timing relationship.",
  "Table: summary of key empirical estimates (Amiti-Redding-Weinstein vs. Fajgelbaum et al.), showing gross cost, net welfare loss, and import volume decline side by side.",
];

const evidenceNeeds = [
  "To independently test sourcing changes: Census imports by HS code for China, Vietnam, Mexico, and Taiwan, with product concordances and a documented retrieval vintage.",
  "To estimate domestic price effects: BLS import-price and matched consumer-price series by appropriately defined tariff exposure; specify units, coverage, and identification strategy.",
  "To quantify agricultural program support: USDA Market Facilitation Program payment totals and an explicit comparison with the measure of trade damage being evaluated.",
  "To test firm-planning responses: regional Federal Reserve surveys or firm-level records with specific sourcing and capital-expenditure questions for 2018-2019.",
  "To build an independent uncertainty exhibit: a documented trade-policy uncertainty series and a design that separates tariff news from realized tariff changes and other macroeconomic shocks.",
];

const verifiedReferences = [
  { label: "USTR (2018a), Report on China's Acts, Policies, and Practices Related to Technology Transfer, Intellectual Property, and Innovation (March 22)", note: "Primary record of the investigation and USTR's stated findings; its findings are attributed to USTR in this paper.", href: "https://ustr.gov/issue-areas/enforcement/section-301-investigations/section-301-china/investigation" },
  { label: "USTR (2018b), China Section 301 tariff actions and exclusion process; Federal Register notices for Lists 1-4", note: "Primary chronology and product schedules: 83 FR 28710, 40823, 47974; 84 FR 20459, 43304, 45821, 69447. Lists and rates changed through later modifications and exclusions.", href: "https://ustr.gov/issue-areas/enforcement/section-301-investigations/tariff-actions" },
  { label: "State Council Tariff Commission (2018), Announcements 5, 7, and 8", note: "Chinese government notices for the initial retaliatory lists and the September 2018 measures on approximately $60 billion of U.S. goods; the September list used 5% and 10% rates.", href: "https://m.mof.gov.cn/czxw/201806/t20180616_2930325.htm" },
  { label: "State Council Tariff Commission (2018), Announcement 7 on approximately $16 billion of U.S. goods", note: "Official notice specifying the August 23, 2018 effective date and 25% additional tariff for the adjusted list.", href: "https://gss.mof.gov.cn/gzdt/zhengcefabu/201808/t20180808_2983769.htm" },
  { label: "State Council Tariff Commission (2018), Announcement 8 on approximately $60 billion of U.S. goods", note: "Official implementation notice: effective September 24, 2018, with listed goods assigned additional rates of 5% or 10%.", href: "https://jx.mof.gov.cn/xxgk/zhengcefagui/201810/t20181019_3050518.htm" },
  { label: "Amiti, Redding & Weinstein (2019), The Impact of the 2018 Tariffs on Prices and Welfare, Journal of Economic Perspectives 33(4), 187-210", note: "Reports near-complete pass-through to import prices and estimates a $1.4 billion monthly aggregate real-income reduction by the end of 2018; this is not a retail-price estimate.", href: "https://doi.org/10.1257/jep.33.4.187" },
  { label: "Fajgelbaum, Goldberg, Kennedy & Khandelwal (2020), The Return to Protectionism, Quarterly Journal of Economics 135(1), 1-55", note: "Published study with model-based gross and net welfare estimates; its Census trade sample covers January 2017-April 2019. The May 2019 List 3 rate increase is outside that sample.", href: "https://doi.org/10.1093/qje/qjz036" },
  { label: "Fajgelbaum et al. (2019), The Return to Protectionism, NBER Working Paper 25638", note: "Working-paper version reports 31.5% within-product import declines from targeted countries and 11.0% declines in targeted U.S. exports; these are not China-only aggregate trade changes.", href: "https://www.nber.org/papers/w25638" },
  { label: "Haberkorn, Hoang, Lewis, Mix & Moore (2024), Global Trade Patterns in the Wake of the 2018-2019 U.S.-China Tariff Hikes, Federal Reserve FEDS Notes", note: "Uses Census and UN Comtrade to analyze changes in direct U.S. sourcing and supplier countries' China trade; evidence is aggregate trade patterns, not shipment-level tracing.", href: "https://www.federalreserve.gov/econres/notes/feds-notes/global-trade-patterns-in-the-wake-of-the-2018-2019-u-s-china-tariff-hikes-20240412.html" },
  { label: "Hoang & Lewis (2024), As the U.S. Is Derisking from China, Other Foreign U.S. Suppliers Are Relying More on Chinese Imports, Federal Reserve FEDS Notes", note: "Figures 1-6 document changing suppliers' import shares and assess rerouting; Chinese value-added data are unavailable after 2020, and the authors find rerouting appeared limited through 2022.", href: "https://www.federalreserve.gov/econres/notes/feds-notes/as-the-u-s-is-derisking-from-china-Other-foreign-u-s-suppliers-are-relying-more-on-chinese-imports-20240802.html" },
  { label: "Caldara, Iacoviello, Molligo, Prestipino & Raffo (2020), The Economic Effects of Trade Policy Uncertainty, Journal of Monetary Economics 109, 38-59", note: "Published study combining firm-level and aggregate measures; results support an uncertainty-investment channel but do not establish specific firm actions in this project.", href: "https://doi.org/10.1016/j.jmoneco.2019.11.002" },
  { label: "Handley & Limao (2017), Policy Uncertainty, Trade, and Welfare: Theory and Evidence for China and the United States, American Economic Review 107(9), 2731-2783", note: "Studies uncertainty around China's 2001 WTO accession; relevant theoretical and historical context, not direct evidence of U.S. firm responses in 2018-2019.", href: "https://doi.org/10.1257/aer.20141419" },
  { label: "U.S. Government Accountability Office (2018), Market Facilitation Program, B-330348", note: "Describes program purpose and payment design, including the intended offset for some adverse effects of lost market demand; not an estimate of realized producer losses.", href: "https://www.gao.gov/products/b-330348" },
  { label: "USDA Farm Service Agency (2018), Market Facilitation Program fact sheet", note: "Lists program eligibility and assistance categories in response to foreign retaliatory tariffs; it is not a causal estimate of producer losses.", href: "https://www.fsa.usda.gov/sites/default/files/documents/Market_Facilitation_Program_Fact_Sheet_September_2018B.pdf" },
  { label: "World Trade Organization, DS543: United States - Tariff Measures on Certain Goods from China", note: "China's April 4, 2018 request for consultations concerning U.S. Section 301 measures.", href: "https://www.wto.org/english/tratop_e/dispu_e/cases_e/ds543_e.htm" },
  { label: "World Trade Organization, DS565: United States - Tariff Measures on Certain Goods from China II", note: "China's August 23, 2018 request for consultations concerning additional U.S. tariff measures.", href: "https://www.wto.org/english/tratop_e/dispu_e/cases_e/ds565_e.htm" },
  { label: "World Trade Organization, DS558: China - Additional Duties on Certain Products from the United States", note: "The U.S. complaint concerned separate Chinese additional duties following U.S. Section 232 steel and aluminum measures; it was not a reciprocal Section 301 case.", href: "https://www.wto.org/english/tratop_e/dispu_e/cases_e/ds558_e.htm" },
  { label: "USTR (2020), U.S.-China Economic and Trade Agreement (Phase One)", note: "Official agreement page records signature on January 15, 2020; the Phase One agreement did not itself terminate the Section 301 tariff actions.", href: "https://ustr.gov/phase-one" },
];

export default function TradeWarShockPaperPage() {
  return (
    <main className="observatory-page min-h-screen bg-[#070a0d] text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-[11px] uppercase tracking-[0.38em] text-[var(--accent-soft)]">
          Full Paper // Case File 01
        </p>
        <h1 className="mt-6 font-[family:var(--font-display)] text-4xl leading-tight text-white sm:text-6xl">
          Tariff Escalation and the Evidence on Import Costs, Sourcing, and Uncertainty, 2018-2019
        </h1>

        <aside className="mt-6 rounded-xl border border-amber-200/20 bg-amber-100/[0.04] px-5 py-4 text-sm leading-6 text-white/70" role="note">
          Working literature review; no original data analysis. Key factual and numerical claims are attributed to published studies or primary policy records, with the sources and limits documented below.
        </aside>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6" aria-labelledby="verified-sources-title">
          <h2 id="verified-sources-title" className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-soft)]">References and evidence scope</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {verifiedReferences.map((source) => (
              <article key={source.href} className="rounded-xl border border-white/10 p-4">
                <a className="text-sm font-semibold text-white underline decoration-white/30 underline-offset-4" href={source.href} target="_blank" rel="noreferrer">{source.label}</a>
                <p className="mt-2 text-sm leading-6 text-white/60">{source.note}</p>
              </article>
            ))}
          </div>
        </section>

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
              Data Sources for a Future Original Analysis
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/64">
              {bibliographyGuidance.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>

          <article className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 lg:col-span-1">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
              Possible Figures for a Future Study
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/64">
              {suggestedFigures.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>

          <article className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,184,77,0.1),rgba(255,255,255,0.03))] p-6 lg:col-span-1">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
              Evidence Needed to Extend the Review
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
            href="/trade-war-shock"
            className="inline-flex min-h-[56px] items-center justify-center rounded-[999px] border border-[var(--line-strong)] px-6 text-[11px] font-extrabold uppercase tracking-[0.26em] text-white transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)]"
          >
            Back to Case File
          </Link>
        </div>
      </section>
    </main>
  );
}
