"use client";

import { useEffect, useState } from "react";

type Row = {
  date: string;
  imports: number;
  exports: number;
  balance: number;
};

type Measure = "imports" | "exports" | "balance";

const measureLabels: Record<Measure, string> = {
  imports: "Imports",
  exports: "Exports",
  balance: "Trade balance (imports − exports)",
};

function parseCsv(text: string): Row[] {
  const [, ...lines] = text.trim().split(/\r?\n/);
  return lines.flatMap((line) => {
    const [date, imports, exports, balance] = line.split(",");
    const row = { date, imports: Number(imports), exports: Number(exports), balance: Number(balance) };
    return date && Object.values(row).slice(1).every(Number.isFinite) ? [row] : [];
  });
}

export default function DataExplorer() {
  const [rows, setRows] = useState<Row[]>([]);
  const [measure, setMeasure] = useState<Measure>("imports");
  const [status, setStatus] = useState("Loading the project CSV…");

  useEffect(() => {
    fetch("/data/clean_trade_analysis.csv")
      .then((response) => {
        if (!response.ok) throw new Error("CSV could not be loaded");
        return response.text();
      })
      .then((text) => {
        const parsed = parseCsv(text);
        if (!parsed.length) throw new Error("CSV has no usable observations");
        setRows(parsed);
        setStatus(`${parsed.length} monthly observations loaded`);
      })
      .catch(() => setStatus("The CSV could not be loaded. Use the download link to inspect the file."));
  }, []);

  const values = rows.map((row) => row[measure]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((value, index) => {
    const x = 36 + (index / Math.max(values.length - 1, 1)) * 928;
    const y = 18 + ((max - value) / range) * 244;
    return `${x},${y}`;
  }).join(" ");
  const step = Math.max(1, Math.floor(rows.length / 12));
  const ticks = rows.filter((_, index) => index % step === 0 || index === rows.length - 1);

  return (
    <section className="data-explorer" aria-labelledby="explorer-title">
      <div className="data-explorer-head">
        <div>
          <p className="data-kicker">Interactive view</p>
          <h2 id="explorer-title">Explore one series at a time.</h2>
          <p className="data-muted">Values are nominal U.S. dollars in millions, not seasonally adjusted, from monthly Census/BEA goods-trade series served by FRED. The project file is a static extract with an undocumented download vintage.</p>
        </div>
        <label className="measure-control">
          <span>Series</span>
          <select value={measure} onChange={(event) => setMeasure(event.target.value as Measure)}>
            {Object.entries(measureLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
          </select>
        </label>
      </div>
      <p className="data-status" role="status">{status}</p>
      <div className="chart-frame">
        {rows.length > 0 ? (
          <svg viewBox="0 0 1000 310" role="img" aria-label={`${measureLabels[measure]} in nominal U.S. dollars, millions, across ${rows[0].date.slice(0, 7)} to ${rows[rows.length - 1].date.slice(0, 7)}.`}>
            {[0, 1, 2, 3].map((line) => <line key={line} x1="36" x2="964" y1={18 + line * 81} y2={18 + line * 81} className="chart-gridline" />)}
            <polyline points={points} className="chart-line" />
            {rows.map((row, index) => {
              const x = 36 + (index / Math.max(rows.length - 1, 1)) * 928;
              const y = 18 + ((max - values[index]) / range) * 244;
              return <circle key={row.date} cx={x} cy={y} r="2.3" className="chart-point"><title>{row.date.slice(0, 7)}: {values[index].toLocaleString(undefined, { maximumFractionDigits: 1 })}</title></circle>;
            })}
            {ticks.map((row) => {
              const index = rows.indexOf(row);
              const x = 36 + (index / Math.max(rows.length - 1, 1)) * 928;
              return <text key={row.date} x={x} y="298" textAnchor="middle" className="chart-label">{row.date.slice(0, 4)}</text>;
            })}
          </svg>
        ) : <div className="chart-empty" aria-hidden="true" />}
      </div>
      <div className="chart-legend"><span className="legend-mark" />{measureLabels[measure]} <span>•</span> {rows[0]?.date.slice(0, 7) ?? "—"} to {rows.at(-1)?.date.slice(0, 7) ?? "—"}</div>
      <p className="data-caveat">This is a descriptive plot of the prepared local file, not a live feed or the official Census balance series. Imports use customs valuation and exports use F.A.S. valuation; balance is imports minus exports (positive = deficit). Hover over a point to inspect its month and value in nominal USD millions.</p>
    </section>
  );
}
