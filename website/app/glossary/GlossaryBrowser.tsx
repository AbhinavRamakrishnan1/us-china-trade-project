"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const entries = [
  { term: "Ad valorem tariff", category: "Policy", definition: "A tariff charged as a percentage of a good’s declared value.", related: "/trade-war-shock" },
  { term: "Balance of trade", category: "Trade measures", definition: "The value of exports minus the value of imports for a defined set of goods or services and period. Check the sign convention used in each dataset.", related: "/trade-deficit-persistence" },
  { term: "Bilateral trade balance", category: "Trade measures", definition: "The difference between one country’s exports to, and imports from, a specific trading partner under a stated measure and period.", related: "/trade-deficit-persistence" },
  { term: "Container imbalance", category: "Supply chains", definition: "A mismatch in the locations where shipping containers are available and where exporters need them, which can complicate capacity and scheduling.", related: "/covid-supply-chain-disruptions" },
  { term: "Critical goods", category: "Supply chains", definition: "Products considered especially important to economic activity, public health, or security; the precise list depends on the policy or study.", related: "/post-covid-recovery-pattern" },
  { term: "Decoupling", category: "Policy", definition: "A broad term for reducing economic integration between countries. It has no single standardized measurement and should be defined when used.", related: "/post-covid-recovery-pattern" },
  { term: "Diversification", category: "Supply chains", definition: "Spreading sourcing, production, or sales across multiple suppliers, locations, or markets rather than relying on a narrow set.", related: "/covid-supply-chain-disruptions" },
  { term: "Elasticity", category: "Trade measures", definition: "A measure of how strongly one quantity responds to a change in another, often expressed as a percentage response to a one-percent change.", related: "/trade-war-shock" },
  { term: "Freight rate", category: "Supply chains", definition: "The price charged to transport cargo. Comparisons depend on route, mode, container type, contract, and measurement period.", related: "/covid-supply-chain-disruptions" },
  { term: "Global value chain", category: "Supply chains", definition: "The cross-border sequence of activities through which inputs are designed, produced, assembled, and delivered to end users.", related: "/covid-supply-chain-disruptions" },
  { term: "Goods trade", category: "Trade measures", definition: "Cross-border trade in physical products, distinguished from services trade. Official series may differ by valuation and adjustment method.", related: "/trade-deficit-persistence" },
  { term: "Intermediate goods", category: "Supply chains", definition: "Inputs used to produce other goods or services rather than purchased primarily for final use.", related: "/covid-supply-chain-disruptions" },
  { term: "Just-in-case inventory", category: "Supply chains", definition: "A stocking approach that holds additional inventory as a buffer against possible disruption, often trading carrying costs for resilience.", related: "/covid-supply-chain-disruptions" },
  { term: "Just-in-time inventory", category: "Supply chains", definition: "A production and inventory approach that coordinates deliveries closely with expected use to limit stocks; disruptions can expose the cost of thin buffers.", related: "/covid-supply-chain-disruptions" },
  { term: "Monthly percentage change", category: "Trade measures", definition: "The change from one monthly observation to the previous one, divided by the previous observation and multiplied by 100. It can be volatile and is not year-over-year growth.", related: "/data" },
  { term: "Nearshoring", category: "Supply chains", definition: "Moving or placing production nearer to the final market, relative to the previous production location. It does not necessarily mean domestic production.", related: "/post-covid-recovery-pattern" },
  { term: "Nominal value", category: "Trade measures", definition: "A value measured in current prices, not adjusted for changes in the general price level unless stated otherwise.", related: "/data" },
  { term: "Port congestion", category: "Supply chains", definition: "A condition in which vessel, terminal, or inland capacity constraints delay the movement of cargo through a port system.", related: "/covid-supply-chain-disruptions" },
  { term: "Reshoring", category: "Supply chains", definition: "Moving production or sourcing back to the home country from an overseas location.", related: "/post-covid-recovery-pattern" },
  { term: "Resilience", category: "Supply chains", definition: "The ability of a system to withstand disruption, adapt, and continue or restore important functions. It can involve costs and trade-offs.", related: "/covid-supply-chain-disruptions" },
  { term: "Rules of origin", category: "Policy", definition: "Rules used to determine a product’s country of origin for purposes such as tariffs, trade agreements, or trade remedies.", related: "/trade-war-shock" },
  { term: "Section 301", category: "Policy", definition: "A U.S. Trade Act provision that allows the United States to investigate and respond to certain foreign acts, policies, or practices affecting U.S. commerce.", related: "/trade-war-shock" },
  { term: "Trade deficit", category: "Trade measures", definition: "A shorthand for imports exceeding exports under a specified trade measure and time period. State whether the measure covers goods, services, or both.", related: "/trade-deficit-persistence" },
  { term: "Trade diversion", category: "Policy", definition: "A shift in trade toward alternative suppliers or destinations, potentially following a policy change or other change in relative costs.", related: "/post-covid-recovery-pattern" },
  { term: "Trade policy uncertainty", category: "Policy", definition: "Uncertainty about future trade rules, tariffs, or government actions that may affect firms’ planning and investment decisions.", related: "/trade-war-shock" },
  { term: "Trade shock", category: "Trade measures", definition: "A substantial change in trade conditions or flows. The term describes an event or movement; it does not by itself identify its cause.", related: "/trade-war-shock" },
  { term: "Trade-weighted tariff", category: "Policy", definition: "An average tariff rate weighted by trade values. Results depend on the weighting method, product coverage, and whether weights reflect trade before or after the tariff change.", related: "/trade-war-shock" },
  { term: "Transshipment", category: "Supply chains", definition: "Moving goods through an intermediate location before their final destination. It is not by itself evidence that a product’s legal origin changed.", related: "/post-covid-recovery-pattern" },
  { term: "Year-over-year change", category: "Trade measures", definition: "The percentage change relative to the same period one year earlier, which helps account for recurring seasonal patterns but does not eliminate all measurement issues.", related: "/data" },
];

const categories = ["All terms", ...Array.from(new Set(entries.map((entry) => entry.category)))];

export default function GlossaryBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All terms");
  const filtered = useMemo(() => entries.filter((entry) =>
    (category === "All terms" || entry.category === category) &&
    `${entry.term} ${entry.definition}`.toLowerCase().includes(query.trim().toLowerCase())
  ), [query, category]);

  return <>
    <div className="glossary-controls">
      <label className="glossary-search"><span>Search definitions</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try ‘tariff’ or ‘inventory’" /></label>
      <div className="glossary-categories" aria-label="Filter terms by category">
        {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <p className="glossary-count" role="status">Showing {filtered.length} of {entries.length} terms</p>
    </div>
    {filtered.length ? <div className="glossary-list">{filtered.map((entry) => <article key={entry.term} className="glossary-entry"><div><span>{entry.category}</span><h2>{entry.term}</h2></div><p>{entry.definition}</p><Link href={entry.related}>Related case file ↗</Link></article>)}</div> : <p className="glossary-empty">No matching terms. Try a shorter search or choose another category.</p>}
  </>;
}
