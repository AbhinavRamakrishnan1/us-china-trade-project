"use client";

import { useState } from "react";

const stages = [
  { name: "Factory", note: "Production interruptions reduce or delay the goods ready to ship.", pressure: "Output and lead times" },
  { name: "Origin port", note: "Terminal capacity, labor, and vessel schedules affect when cargo can leave.", pressure: "Queue and departure timing" },
  { name: "Ocean freight", note: "Limited vessel or container capacity can raise shipping time and cost.", pressure: "Transit time and freight cost" },
  { name: "U.S. port", note: "Arrival surges and port constraints can delay unloading and inland transfer.", pressure: "Congestion and delivery time" },
  { name: "Warehouse", note: "Uncertain replenishment complicates inventory and safety-stock decisions.", pressure: "Inventory availability" },
  { name: "Retail / production", note: "Upstream delays can reach firms and consumers as shortages or late inputs.", pressure: "Availability downstream" },
];

export default function SupplyChainModel() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <section className="supplyModel" aria-labelledby="supply-model-title">
      <div className="supplyModelIntro">
        <p className="modelKicker">Mechanism Model / Conceptual</p>
        <h2 id="supply-model-title">A delay at one node can travel downstream.</h2>
        <p>This is a schematic teaching model, not a measured route or an estimate of the size of any COVID-era disruption.</p>
      </div>
      <div className="supplyModelChain" role="group" aria-label="Select a supply-chain stage">
        {stages.map((item, index) => (
          <div className="supplyModelNodeWrap" key={item.name}>
            <button type="button" className={active === index ? "supplyModelNode isActive" : "supplyModelNode"} aria-pressed={active === index} onClick={() => setActive(index)}>
              <span>0{index + 1}</span>{item.name}
            </button>
            {index < stages.length - 1 && <span className="supplyModelArrow" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
      <div className="supplyModelDetail" aria-live="polite">
        <span>{stage.pressure}</span>
        <p>{stage.note}</p>
      </div>
      <p className="supplyModelNote">The project&apos;s bilateral trade series records values, not port queues, freight rates, or firm-level inventories. Those mechanisms require separate evidence.</p>
    </section>
  );
}
