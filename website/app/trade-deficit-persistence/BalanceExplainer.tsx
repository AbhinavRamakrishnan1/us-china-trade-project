"use client";

import { useState } from "react";

const views = [
  {
    label: "Bilateral goods balance",
    expression: "U.S. imports from China − U.S. exports to China",
    explanation: "A partner-specific measure of goods trade. The project calculates it from its monthly import and export series, which use different valuation bases.",
    limit: "It does not measure the U.S. current account or national saving minus investment.",
  },
  {
    label: "Aggregate current account",
    expression: "National saving − domestic investment",
    explanation: "In national accounting, the current-account balance corresponds to national saving less domestic investment, subject to statistical discrepancies and the definitions used.",
    limit: "This aggregate identity does not explain why a balance is concentrated with China rather than another trading partner.",
  },
  {
    label: "How they relate",
    expression: "Different measures. Different questions.",
    explanation: "The bilateral balance is one part of the geography of trade; the current account is an economy-wide external balance across goods, services, income, and transfers.",
    limit: "A change in one bilateral relationship does not mechanically tell us how the aggregate current account or saving-investment gap changed.",
  },
];

export default function BalanceExplainer() {
  const [active, setActive] = useState(0);
  const view = views[active];

  return (
    <section className="balanceExplainer" aria-labelledby="balance-explainer-title">
      <div className="balanceExplainerHeader">
        <p className="modelKicker">Interactive Concept / No Values Estimated</p>
        <h2 id="balance-explainer-title">A bilateral deficit is not the current account.</h2>
        <p>Choose a measure to see what it means and what it cannot establish.</p>
      </div>
      <div className="balanceExplainerTabs" role="group" aria-label="Choose a trade-balance concept">
        {views.map((item, index) => (
          <button key={item.label} type="button" aria-pressed={active === index} onClick={() => setActive(index)}>
            <span>0{index + 1}</span>{item.label}
          </button>
        ))}
      </div>
      <div className="balanceExplainerPanel" aria-live="polite">
        <p className="balanceExpression">{view.expression}</p>
        <div className="balanceExplainerColumns">
          <div><span>What this explains</span><p>{view.explanation}</p></div>
          <div><span>What this does not explain</span><p>{view.limit}</p></div>
        </div>
      </div>
    </section>
  );
}
