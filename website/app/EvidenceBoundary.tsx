"use client";

import { useState } from "react";

const evidence = {
  show: {
    title: "The series can show",
    items: ["Monthly direct U.S.-China goods imports and exports", "Timing and scale of observed trade-flow changes", "Volatility and descriptive changes around the project's shock windows"],
  },
  notProve: {
    title: "The series cannot prove alone",
    items: ["That a policy or shock caused a change", "Firm-level sourcing decisions or supply-chain resilience", "Illegal transshipment or the full Chinese value added in third-country goods"],
  },
};

export default function EvidenceBoundary() {
  const [mode, setMode] = useState<keyof typeof evidence>("show");
  const active = evidence[mode];

  return (
    <section className="evidenceBoundary" aria-labelledby="evidence-boundary-title">
      <div className="evidenceBoundaryHeader">
        <div><p className="modelKicker">Evidence Guide</p><h3 id="evidence-boundary-title">Keep the claim inside the data.</h3></div>
        <div className="evidenceBoundaryToggle" role="group" aria-label="Choose an evidence boundary">
          <button type="button" aria-pressed={mode === "show"} onClick={() => setMode("show")}>Can show</button>
          <button type="button" aria-pressed={mode === "notProve"} onClick={() => setMode("notProve")}>Cannot prove</button>
        </div>
      </div>
      <div className="evidenceBoundaryBody" aria-live="polite">
        <strong>{active.title}</strong>
        <ul>{active.items.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <p className="evidenceBoundarySource">Project source: monthly Census/BEA goods-trade series distributed by FRED. The local CSV is a static extract with an undocumented download vintage.</p>
    </section>
  );
}
