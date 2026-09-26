import Link from "next/link";

const paperSections = [
  {
    heading: "Abstract",
    paragraphs: [
      "Between 2020 and 2021, the U.S.-China trade relationship was disrupted less by policy than by physical breakdown in the logistics system connecting the two economies. Factory shutdowns in China, a sharp rotation of U.S. consumer demand toward durable goods, and severe congestion at ports and shipping chokepoints combined to produce container shortages, record freight rates, and delivery times that firms could no longer predict with confidence. This paper argues that the episode should be understood as a production and logistics shock, not merely a downstream effect of a public-health crisis, and that the unpredictability of delivery timing shaped firm and consumer outcomes independently of the volume of trade actually disrupted. It traces the shock through factory closures, freight markets, inventory strategy, and price pass-through, and it flags specific points where port, freight, and price data should be inserted.",
    ],
  },
  {
    heading: "Introduction",
    paragraphs: [
      "The COVID-19 pandemic disrupted U.S.-China trade through overlapping production constraints, shifts in U.S. demand, and logistics bottlenecks. Federal Reserve reporting documents strong goods demand, port congestion, shipping delays, and sharply higher freight costs. The precise claim that Transpacific rates rose fivefold in a particular eighteen-month period requires a named route index and dated observations; it is not established by aggregate Federal Reserve evidence alone.",
      "This paper treats that second disruption as the central object of analysis. The question is not whether trade in goods between the U.S. and China fell during this period; in aggregate dollar terms, it did not fall for long, and by some measures it recovered and exceeded pre-pandemic levels within months. The more interesting question is how the reliability of that trade broke down, and what firms did in response. The thesis is that the supply-chain crisis functioned as a production and logistics shock distinct from the health crisis that triggered it, that the unpredictability of shipping times mattered to firms as much as the average delay, and that the response, particularly the shift from lean, just-in-time inventory management toward larger safety stocks, left a durable mark on how U.S. importers manage their relationship with Chinese suppliers even after the acute congestion eased.",
    ],
  },
  {
    heading: "Background",
    paragraphs: [
      "China's initial shutdowns began in late January 2020, centered on Hubei province, and expanded through February. Precise dates and duration varied by locality; a province-level chronology and Chinese industrial-production/export series are still needed to substantiate the detailed timing and recovery claims in this section.",
      "Federal Reserve analysis describes a pandemic-era shift in U.S. spending from services toward goods, alongside strong import demand and port-capacity constraints. The contribution of specific product groups or China-origin imports must be demonstrated with category-level Census/BEA data; aggregate evidence does not identify those products as the drivers by itself. Container repositioning is a plausible mechanism, but this draft does not yet include direct empty-container data.",
    ],
  },
  {
    heading: "From Health Shock to Production Shock",
    paragraphs: [
      "It is useful to distinguish production constraints, logistics bottlenecks, and shifts in U.S. demand; these channels overlapped and varied by industry and location. Federal Reserve analysis describes several of these pressures, but the claim that Chinese manufacturing was largely operational by a particular date, or that one channel did more economic damage than another, requires separate comparative evidence. This draft does not rank their effects.",
      "This distinction matters for how the shock should be classified. Framing 2020-2021 purely as a public-health disruption implies the trade effects should have faded once vaccination and reopening proceeded. Framing it as a production and logistics shock, with the health crisis as the trigger rather than the ongoing cause, better explains why disruption persisted well into 2021 and, in some categories such as semiconductors, into 2022, long after most direct health restrictions on manufacturing had eased. [Add semiconductor shortage timeline and automotive production-cut data, 2021-2022, here, as the clearest example of a lagged, compounding effect.]",
    ],
  },
  {
    heading: "Freight Rates, Port Congestion, and the Container Imbalance",
    paragraphs: [
      "The clearest quantitative signal of the logistics breakdown is the freight rate data. The Drewry World Container Index, a composite benchmark covering major global container routes, averaged around $1,420 per 40-foot container in 2019. By September 2021 the same composite index reached a peak of $10,377, more than seven times the pre-pandemic average, driven in large part by Transpacific routes connecting Chinese ports to the U.S. West Coast. Rates of that magnitude reflect more than higher fuel or labor costs; they reflect a market in which available capacity, meaning ships and, critically, empty containers positioned where exporters needed them, had become the binding constraint on trade rather than underlying demand.",
      "Port congestion compounded the container shortage. Vessels queued for extended periods outside the ports of Los Angeles and Long Beach, which together handle a large share of U.S. containerized imports from Asia, and dwell times for unloading and clearing cargo lengthened well beyond historical norms. [Add Marine Exchange of Southern California vessel-queue data and port dwell-time statistics, 2020-2021, here.] A separate, shorter but symbolically significant disruption occurred in March 2021, when the container ship Ever Given ran aground and blocked the Suez Canal for six days, from March 23 to March 29, halting a corridor that carries a substantial share of Asia-Europe trade and forcing some vessels to reroute around the Cape of Good Hope. The Suez blockage affected the Asia-Europe leg more directly than the Transpacific leg relevant to U.S.-China trade, but it illustrated a broader point relevant to this paper: a shipping network already operating with minimal slack had little capacity to absorb even a temporary, localized disruption without effects propagating through the wider system for weeks afterward.",
      "The container imbalance itself deserves separate mention. Because U.S. imports from China vastly exceeded U.S. exports to China in volume terms, empty containers accumulated at U.S. ports faster than they could be returned to Asia, and carriers found it more profitable to rush empty containers back for another high-priced Transpacific loop than to wait for them to be filled with U.S. export cargo. [Add data on container repositioning and empty-container return rates, if available, here.] That dynamic imposed a cost on U.S. exporters, particularly in agriculture, who reported difficulty securing containers and equipment even when buyers were willing to pay, a detail that connects the logistics shock back to the trade-balance themes running through this broader research project.",
    ],
  },
  {
    heading: "Inventory Strategy and the Shift Away from Just-in-Time",
    paragraphs: [
      "For decades, U.S. manufacturers and retailers had organized sourcing around just-in-time inventory management, minimizing warehousing costs by timing deliveries closely to need. That model assumes delivery times are predictable even if not always short. The 2020-2021 episode broke that assumption: lead times on Chinese-sourced goods that had historically taken four to six weeks stretched, in many categories, to three or four months, and the variance around that average widened as much as the average itself increased. [Add ISM Manufacturing Report on Business supplier-deliveries index, 2019-2021, here, as the standard measure of this shift; the index reached some of its highest readings on record during this period, indicating widespread and severe delivery slowdowns.]",
      "Unpredictability can affect firms differently from a longer but stable delivery time, but this draft does not establish that it drove the observed firm response. The broad claim that retailers and manufacturers shifted to larger safety stocks or moved from just-in-time to just-in-case requires sector-level inventory evidence and preferably firm-level surveys. Census inventory-to-sales measures can describe inventory levels, but alone do not identify firms' motivations or establish a durable structural change.",
    ],
  },
  {
    heading: "Price Pass-Through and the Inflation Debate",
    paragraphs: [
      "Freight costs and delivery uncertainty may affect costs and prices, but their contribution to 2021 inflation must be distinguished from demand, fiscal policy, labor-market constraints, and other shocks. A freight-index increase is not itself evidence of a proportional retail-price increase. This draft does not estimate a pass-through lag or quantify a contribution to durable-goods inflation; that requires a defined freight series, BLS price measures, and an identification strategy.",
    ],
  },
  {
    heading: "Limitations and Counterarguments",
    paragraphs: [
      "Several qualifications apply. First, aggregate U.S.-China trade-in-goods figures for this period do not show a collapse; by some measures, imports from China recovered to and exceeded pre-pandemic levels within the year, which complicates any framing of this episode as primarily a reduction in trade volume rather than a reduction in trade reliability. Readers should not confuse the two. Second, attributing 2021 inflation to supply-chain disruption specifically, as opposed to fiscal and monetary conditions, is an area of active disagreement among economists, and this paper's claims about price pass-through should be read as describing a plausible contributing channel rather than a settled, quantified share of overall inflation. Third, the freight-rate and inventory data cited here are largely descriptive; a fuller treatment would require formal econometric work isolating the supply-chain-specific contribution to durable-goods prices from concurrent demand-side stimulus effects, which is beyond the scope of this paper.",
    ],
  },
  {
    heading: "Conclusion",
    paragraphs: [
      "The 2020-2021 episode combined production constraints, a shift in demand toward goods, and logistics bottlenecks. Federal Reserve reports document severe congestion and freight pressure, but this project's trade data do not measure delivery reliability, identify the relative contribution of each shock, or establish that inventory strategies changed durably. Those remain research questions requiring dedicated logistics, inventory, and firm-level evidence.",
    ],
  },
];

const bibliographyGuidance = [
  "Freight and shipping data: Drewry World Container Index; Freightos Baltic Index; Marine Exchange of Southern California vessel-queue and port-call data for Los Angeles/Long Beach.",
  "Government data: U.S. Census Bureau trade-in-goods data by category, U.S. imports from China, 2019-2022; Census Bureau manufacturing and retail inventory-to-sales ratios; BLS CPI durable-goods and core-goods components; BEA data on personal consumption expenditure shifts toward goods, 2020-2021.",
  "Industry survey data: ISM Manufacturing Report on Business, supplier deliveries and inventories indexes, 2019-2022.",
  "Sector-specific evidence: semiconductor shortage timeline and automotive production data (SIA, Federal Reserve industrial production releases, or trade press with verifiable sourcing).",
  "Event-specific sources: Suez Canal Authority and shipping-industry accounts of the March 2021 Ever Given blockage, for the chokepoint-disruption discussion.",
  "Reputable press for context and timeline verification only, not as primary evidence: Reuters, WSJ, FT, Supply Chain Dive.",
];

const suggestedFigures = [
  "Line chart: Drewry World Container Index (or Freightos Baltic Index), weekly, 2019-2022, with the 2019 average and September 2021 peak labeled.",
  "Line chart: ISM supplier-deliveries index, monthly, 2019-2022, to show the depth and duration of delivery slowdowns.",
  "Line chart: Census manufacturing and retail inventory-to-sales ratios, 2019-2022, to show the shift toward larger safety stocks.",
  "Bar or line chart: U.S. imports from China by product category (durable consumer goods vs. other), 2019-2021, to show which categories drove the demand surge.",
  "Timeline graphic: key 2020-2021 events (initial China shutdowns, U.S. demand rotation toward goods, port congestion peak, Suez blockage, semiconductor shortage escalation).",
  "Line chart: CPI durable-goods component vs. core CPI, monthly, 2019-2022, overlaid with the freight-rate index to visualize pass-through timing.",
];

const evidenceNeeds = [
  "Specific dates and duration of China's provincial factory shutdowns in early 2020, and China's industrial production/export recovery data through 2020.",
  "Census/BEA trade-in-goods data broken out by product category to substantiate which categories drove the U.S. demand surge toward durable goods.",
  "Marine Exchange of Southern California (or equivalent) data on vessel queue length and port dwell times at Los Angeles/Long Beach, 2020-2021.",
  "ISM Manufacturing Report on Business supplier-deliveries and inventories index values, monthly, to support the just-in-time-to-just-in-case argument.",
  "Census inventory-to-sales ratio data by sector, to quantify the magnitude and persistence of the inventory buildup.",
  "BLS CPI durable-goods and core-goods component data, monthly, to test the price pass-through timing against the freight-rate data.",
  "Semiconductor shortage and automotive production-cut data, 2021-2022, as the clearest example of a lagged, compounding supply-chain effect.",
  "Any available data on container repositioning or empty-container return rates, to support the claim about U.S. exporters facing equipment shortages.",
];

export default function CovidSupplyChainPaperPage() {
  return (
    <main className="min-h-screen bg-[#070a0d] text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-[11px] uppercase tracking-[0.38em] text-[var(--accent-soft)]">
          Full Paper // Case File 02
        </p>
        <h1 className="mt-6 font-[family:var(--font-display)] text-4xl leading-tight text-white sm:text-6xl">
          Uncertainty Compounded: Logistics Breakdown and the Reshaping of U.S.-China
          Trade, 2020-2021
        </h1>

        <aside className="mt-6 rounded-xl border border-amber-200/20 bg-amber-100/[0.04] px-5 py-4 text-sm leading-6 text-white/70" role="note">
          Working research draft. Bracketed notes mark evidence or citations still to be added; statements attached to those notes should not be treated as fully verified. Federal Reserve context: <a className="underline" href="https://www.federalreserve.gov/monetarypolicy/2021-07-mpr-part1.htm" target="_blank" rel="noreferrer">July 2021 Monetary Policy Report</a> and <a className="underline" href="https://www.federalreserve.gov/econres/notes/feds-notes/bottlenecks-shortages-and-soaring-prices-in-the-us-economy-20220624.html" target="_blank" rel="noreferrer">2022 bottlenecks analysis</a>. These support aggregate demand/logistics context, not all China-specific claims below.
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
              Bibliography Guidance
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
            href="/covid-supply-chain-disruptions"
            className="inline-flex min-h-[56px] items-center justify-center rounded-[999px] border border-[var(--line-strong)] px-6 text-[11px] font-extrabold uppercase tracking-[0.26em] text-white transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)]"
          >
            Back to Case File
          </Link>
        </div>
      </section>
    </main>
  );
}
