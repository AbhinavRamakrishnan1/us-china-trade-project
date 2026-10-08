"use client";

import { useState } from "react";
import { annualTradeTotals } from "./annualTradeTotals";

type Measure = "imports" | "exports" | "balance";

const MEASURES: { key: Measure; label: string }[] = [
  { key: "imports", label: "Imports" },
  { key: "exports", label: "Exports" },
  { key: "balance", label: "Balance" },
];

function formatBillions(value: number) {
  return `$${(value / 1000).toFixed(1)}B`;
}

export default function TradeDataLens() {
  const [measure, setMeasure] = useState<Measure>("imports");
  const [year, setYear] = useState(2016);
  const annualRows = annualTradeTotals;

  const selected = annualRows.find((row) => row.year === year);
  const baseline = annualRows.find((row) => row.year === 2016);
  const maxValue = Math.max(1, ...annualRows.map((row) => row[measure]));
  const points = annualRows.map((row, index) => ({
    ...row,
    x: 45 + (index / Math.max(annualRows.length - 1, 1)) * 910,
    y: 20 + (1 - row[measure] / maxValue) * 205,
  }));
  const activePoint = points.find((point) => point.year === year);
  const changeFromBaseline = selected && baseline && baseline[measure] !== 0
    ? ((selected[measure] - baseline[measure]) / Math.abs(baseline[measure])) * 100
    : null;

  return (
    <section className="tradeLens" aria-labelledby="trade-lens-title">
      <div className="tradeLensHeader">
        <div>
          <p className="kicker">Data Lens / Annual Totals</p>
          <h3 id="trade-lens-title">Scrub through the trade series.</h3>
          <p>Choose a year and measure. The chart and readout use annual sums of the project&apos;s monthly file.</p>
        </div>
        <p className="tradeLensStatus">Bundled from the project&apos;s 2016-2025 CSV snapshot</p>
      </div>

      <div className="tradeLensControls">
        <div className="measureTabs" role="group" aria-label="Trade measure">
          {MEASURES.map((item) => (
            <button key={item.key} type="button" aria-pressed={measure === item.key} onClick={() => setMeasure(item.key)}>
              {item.label}
            </button>
          ))}
        </div>
        <label className="yearScrubber">
          <span><strong>{year}</strong><span>2016</span><span>2025</span></span>
          <input type="range" min="2016" max="2025" step="1" value={year} onChange={(event) => setYear(Number(event.target.value))} aria-label="Select year from 2016 to 2025" />
        </label>
      </div>

      {selected ? (
        <div className="tradeLensBody">
          <div className="tradeLensChart">
            <svg viewBox="0 0 1000 260" role="img" aria-label={`${MEASURES.find((item) => item.key === measure)?.label} annual totals from 2016 through 2025, in nominal millions of U.S. dollars`}>
              {[0, 1, 2, 3].map((line) => <line key={line} x1="38" x2="962" y1={25 + line * 64} y2={25 + line * 64} className="tradeLensGrid" />)}
              {activePoint && <line x1={activePoint.x} x2={activePoint.x} y1="18" y2="230" className="tradeLensMarker" />}
              <polyline points={points.map((point) => `${point.x},${point.y}`).join(" ")} className={`tradeLensLine tradeLensLine-${measure}`} />
              {points.map((point) => (
                <g key={point.year} className={point.year === year ? "tradeLensPoint isSelected" : "tradeLensPoint"}>
                  <circle cx={point.x} cy={point.y} r={point.year === year ? 7 : 4} />
                  <text x={point.x} y="250" textAnchor="middle">{point.year}</text>
                </g>
              ))}
            </svg>
          </div>
          <aside className="tradeLensReadout" aria-live="polite">
            <span className="tradeLensSelectedYear">Selected year</span>
            <strong>{formatBillions(selected[measure])}</strong>
            <span className="tradeLensMeasureLabel">{MEASURES.find((item) => item.key === measure)?.label} / nominal USD</span>
            {changeFromBaseline !== null && <p>{year === 2016 ? "Baseline year" : `${changeFromBaseline > 0 ? "+" : ""}${changeFromBaseline.toFixed(1)}% vs. 2016`}</p>}
            <small>{selected.months} monthly observations</small>
          </aside>
        </div>
      ) : (
        <p className="tradeLensEmpty">The annual series will appear when the project data loads.</p>
      )}
      <p className="tradeLensCaveat">Descriptive comparison, not a causal estimate. Imports and exports use different valuation bases; “balance” is the project&apos;s Imports − Exports calculation, not the official Census balance series. 2026 is excluded because the file contains January only.</p>
    </section>
  );
}
