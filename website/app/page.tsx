"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, FormEvent } from "react";
import { useEffect, useState } from "react";

const introText = "TRADE SHOCK OBSERVATORY by ABHINAV RAMAKRISHNAN";

const windows = [
  {
    id: "overview",
    label: "Window 01",
    title: "Project Introduction",
    subtext: "What the project studies, why the period matters, and how to read the research path.",
    cta: "Read the overview",
    href: "#platform-info",
  },
  {
    id: "context",
    label: "Window 02",
    title: "2016-2025 Research Projects",
    subtext: "Four focused studies covering tariffs, supply chains, deficit behavior, and recovery.",
    cta: "View the projects",
    href: "#projects",
  },
];

const leadPanels = [
  {
    heading: "Platform Purpose",
    text: "This site functions as the launch page for a four-part research project on U.S.-China trade from 2016 to 2025. It introduces the story, organizes the chapters, and gives each paper a clear place in the timeline.",
  },
  {
    heading: "Research Scope",
    text: "The analysis tracks the U.S.-China trade relationship from 2016 through 2025, focusing on imports, exports, deficit persistence, and the uneven recovery that followed the strongest disruption windows.",
  },
  {
    heading: "Analytical Frame",
    text: "The project compares a policy shock with a systems shock. Instead of asking only which one was larger, it asks how each one changed volatility, timing, pricing behavior, and long-run structural balance.",
  },
];

const researchProjects = [
  {
    title: "Tariffs and the Trade War",
    years: "2018-2019",
    description:
      "The first paper explains the beginning of the conflict: how tariff escalation changed firm expectations, import costs, business planning, and the tone of U.S.-China economic relations.",
    href: "/trade-war-shock",
    status: "Open chapter",
  },
  {
    title: "Supply Chain Collapse",
    years: "2020-2021",
    description:
      "Studies shutdowns, port congestion, freight disruption, inventory stress, and the sharpest logistics shock in the dataset.",
    href: "/covid-supply-chain-disruptions",
    status: "Open chapter",
  },
  {
    title: "Trade Deficit Persistence",
    years: "2016-2025",
    description:
      "The third paper studies why the U.S. trade deficit with China stayed important even when the story shifted from tariffs to logistics and recovery.",
    href: "/trade-deficit-persistence",
    status: "Open chapter",
  },
  {
    title: "Post-COVID Recovery Pattern",
    years: "2022-2025",
    description:
      "The fourth paper asks whether trade actually recovered after COVID or whether the relationship stayed changed by earlier shocks.",
    href: "/post-covid-recovery-pattern",
    status: "Open chapter",
  },
];

const liveFeed = [
  "Tariff escalation increased uncertainty in import pricing and sourcing decisions.",
  "Supply bottlenecks disrupted timing, inventory planning, and shipment reliability.",
  "Trade deficit persistence remained visible even as the dominant shock mechanism changed.",
  "Recovery restored part of the flow, but did not fully remove structural imbalance.",
];

const floatingStats = [
  { label: "Window", value: "2016-2025" },
  { label: "Macro analysis", value: "Trade shocks" },
  { label: "Mode", value: "Research Project" },
];

const timelineItems = [
  {
    period: "2016",
    title: "Pre-conflict trade baseline",
    description:
      "Census trade data establishes the bilateral goods relationship before Section 301 tariffs changed the policy environment.",
    category: "Trade Balance",
    categoryKey: "balance",
    caseFile: "/trade-deficit-persistence",
    source: "U.S. Census Bureau",
    sourceUrl: "https://www.census.gov/foreign-trade/balance/c5700.html",
  },
  {
    period: "2017",
    title: "Section 301 investigation opens",
    description:
      "USTR initiated an investigation into China\u2019s technology-transfer, intellectual-property, and innovation practices.",
    category: "Trade War",
    categoryKey: "war",
    caseFile: "/trade-war-shock",
    source: "USTR",
    sourceUrl:
      "https://ustr.gov/issue-areas/enforcement/section-301-investigations/section-301-china/investigation",
  },
  {
    period: "2018",
    title: "Section 301 tariffs take effect",
    description:
      "The first 25 percent duties took effect in July, and Chinese retaliation turned the investigation into a bilateral tariff conflict.",
    category: "Trade War",
    categoryKey: "war",
    caseFile: "/trade-war-shock",
    source: "USTR",
    sourceUrl:
      "https://ustr.gov/about-us/policy-offices/press-office/press-releases/2018/june/ustr-issues-tariffs-chinese-products",
  },
  {
    period: "2019",
    title: "Tariff escalation broadens",
    description:
      "The United States raised tariffs from 10 to 25 percent on approximately $200 billion of Chinese imports as negotiations stalled.",
    category: "Trade War",
    categoryKey: "war",
    caseFile: "/trade-war-shock",
    source: "USTR",
    sourceUrl:
      "https://ustr.gov/about-us/policy-offices/press-office/press-releases/2019/may/statement-us-trade-representative",
  },
  {
    period: "JAN 2020",
    title: "Phase One agreement is signed",
    description:
      "The agreement addressed selected structural issues and purchase commitments while leaving much of the tariff structure in place.",
    category: "Trade War",
    categoryKey: "war",
    caseFile: "/trade-war-shock",
    source: "USTR",
    sourceUrl: "https://ustr.gov/phase-one",
  },
  {
    period: "2020",
    title: "Factory shutdowns transmit a supply shock",
    description:
      "Early lockdowns in China interrupted production and transmitted shortages through firms dependent on Chinese intermediate inputs.",
    category: "Supply Chain",
    categoryKey: "supply",
    caseFile: "/covid-supply-chain-disruptions",
    source: "IMF",
    sourceUrl:
      "https://www.imf.org/en/Blogs/Articles/2020/05/14/tracking-trade-during-the-covid-19-pandemic",
  },
  {
    period: "2021",
    title: "Ports and freight networks bottleneck",
    description:
      "High import volumes, port congestion, container imbalances, and rising shipping costs weakened delivery reliability.",
    category: "Supply Chain",
    categoryKey: "supply",
    caseFile: "/covid-supply-chain-disruptions",
    source: "Federal Reserve",
    sourceUrl:
      "https://www.federalreserve.gov/monetarypolicy/2021-07-mpr-part1.htm",
  },
  {
    period: "2022",
    title: "Trade rebounds, but imbalance persists",
    description:
      "Census data recorded a $382.3 billion U.S. goods deficit with China, showing that restored trade volume did not remove the imbalance.",
    category: "Trade Balance",
    categoryKey: "balance",
    caseFile: "/trade-deficit-persistence",
    source: "U.S. Census Bureau",
    sourceUrl: "https://www.census.gov/foreign-trade/balance/c5700.html",
  },
  {
    period: "2023",
    title: "Trade flows visibly reallocate",
    description:
      "Federal Reserve research identified a clear shift in direct U.S.-China trade following the 2018 tariff actions, without full geopolitical fragmentation.",
    category: "Recovery",
    categoryKey: "recovery",
    caseFile: "/post-covid-recovery-pattern",
    source: "Federal Reserve",
    sourceUrl:
      "https://www.federalreserve.gov/econres/notes/feds-notes/assessing-the-extent-of-trade-fragmentation-20231103.html",
  },
  {
    period: "2024",
    title: "Tariff review shifts toward strategic sectors",
    description:
      "USTR\u2019s four-year review retained the Section 301 framework and directed higher tariffs in selected strategic industries.",
    category: "Recovery",
    categoryKey: "recovery",
    caseFile: "/post-covid-recovery-pattern",
    source: "USTR",
    sourceUrl:
      "https://ustr.gov/about-us/policy-offices/press-office/press-releases/2024/may/us-trade-representative-katherine-tai-take-further-action-china-tariffs-after-releasing-statutory",
  },
  {
    period: "2025",
    title: "Targeted tariff increases take effect",
    description:
      "New Section 301 rates on selected semiconductor, solar, and critical-material products marked continued restructuring rather than a return to the pre-2018 baseline.",
    category: "Recovery",
    categoryKey: "recovery",
    caseFile: "/post-covid-recovery-pattern",
    source: "USTR",
    sourceUrl:
      "https://ustr.gov/about-us/policy-offices/press-office/press-releases/2024/december/ustr-increases-tariffs-under-section-301-tungsten-products-wafers-and-polysilicon-concluding",
  },
];

const toolkitCards = [
  {
    eyebrow: "Reference",
    title: "Economics glossary",
    text: "Search plain-language definitions for the terms used across the case files.",
    href: "/glossary",
    action: "Browse definitions",
  },
  {
    eyebrow: "Start here",
    title: "A guided reading path",
    text: "Move from the pre-shock baseline through tariffs, supply-chain disruption, and recovery.",
    href: "#projects",
    action: "View four case files",
  },
  {
    eyebrow: "Research mode",
    title: "Read the method before the claim",
    text: "See how periods, variables, comparisons, and limits shape the project’s interpretation.",
    href: "#methodology",
    action: "Review methodology",
  },
  {
    eyebrow: "Data lab",
    title: "Explore the project dataset",
    text: "Inspect the monthly series, download the prepared CSV, and check its documentation limits.",
    href: "/data",
    action: "Open data explorer",
  },
];

const sources = [
  {
    agency: "U.S. Census Bureau",
    use: "Monthly goods trade data, import/export flows, and bilateral trade balance context.",
  },
  {
    agency: "Bureau of Economic Analysis",
    use: "Macroeconomic context for trade, production, consumption, and national-account framing.",
  },
  {
    agency: "Federal Reserve Economic Data",
    use: "Supporting indicators for inflation pressure, industrial activity, and broader economic conditions.",
  },
  {
    agency: "World Trade Organization",
    use: "International trade-policy context and comparative interpretation of tariff regimes.",
  },
  {
    agency: "U.S. Trade Representative",
    use: "Policy background on tariff actions, trade-war chronology, and government trade positions.",
  },
];

const assistantTips = {
  insights: {
    label: "Insights",
    title: "Start with the introduction.",
    tip: "This opening explains what the project is about before sending readers into the four research projects from 2016 to 2025.",
  },
  platform: {
    label: "Platform",
    title: "Use the four-project structure.",
    tip: "The clearest path is tariffs, supply-chain collapse, deficit persistence, then recovery. That order follows the timeline and the economic logic.",
  },
  paper: {
    label: "Methodology",
    title: "Understand how the research works.",
    tip: "This section explains the data, variables, comparisons, and limits behind the four papers, so the project feels more academic and defensible.",
  },
};

type AssistantSection = keyof typeof assistantTips;

const personaOptions = [
  "Student researcher",
  "Policy reader",
  "Data-focused reader",
  "General visitor",
];

const interestOptions = [
  "Tariffs & Trade War",
  "Supply Chain Collapse",
  "The Trade Deficit",
  "Post-COVID Recovery",
];

type Stage = "intro" | "customize" | "site";

type VisitorProfile = {
  name: string;
  role: string;
  interest: string;
};

const defaultProfile: VisitorProfile = {
  name: "",
  role: "General visitor",
  interest: "Tariffs & Trade War",
};

const getStoredProfile = (): VisitorProfile => {
  if (typeof window === "undefined") {
    return defaultProfile;
  }

  const saved = window.localStorage.getItem("ts-observatory-profile");
  if (!saved) {
    return defaultProfile;
  }

  try {
    return JSON.parse(saved) as VisitorProfile;
  } catch {
    return defaultProfile;
  }
};

export default function Page() {
  const [typedCount, setTypedCount] = useState(0);
  const [stage, setStage] = useState<Stage>("intro");
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const [feedIndex, setFeedIndex] = useState(0);
  const [customizing, setCustomizing] = useState(false);
  const [sourceDrawerOpen, setSourceDrawerOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(true);
  const [assistantSection, setAssistantSection] = useState<AssistantSection>("insights");
  const [profile, setProfile] = useState<VisitorProfile>(getStoredProfile);
  const [draftProfile, setDraftProfile] = useState<VisitorProfile>(getStoredProfile);

  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (typedCount >= introText.length) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setTypedCount((count) => count + 1);
    }, typedCount < 12 ? 60 : 28);

    return () => window.clearTimeout(timeout);
  }, [typedCount]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFeedIndex((current) => (current + 1) % liveFeed.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (stage !== "site") {
      return;
    }

    const sections = [
      { id: "insights", key: "insights" },
      { id: "platform-info", key: "platform" },
      { id: "methodology", key: "paper" },
    ] as const;

    const updateAssistantSection = () => {
      const current = sections.reduce<AssistantSection>((active, section) => {
        const element = document.getElementById(section.id);
        if (!element) {
          return active;
        }

        return element.getBoundingClientRect().top < window.innerHeight * 0.46
          ? section.key
          : active;
      }, "insights");

      setAssistantSection(current);
    };

    updateAssistantSection();
    window.addEventListener("scroll", updateAssistantSection, { passive: true });

    return () => window.removeEventListener("scroll", updateAssistantSection);
  }, [stage]);

  const profileName = profile.name.trim() || "Research visitor";
  const assistantTip = assistantTips[assistantSection];

  const personalizationLine = customizing
    ? `${profileName}, this view will tune the framing, labels, and welcome copy around your role and focus.`
    : "Choose a guided personalized mode or continue directly into the full research platform.";

  const handlePersonalize = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextProfile = {
      name: draftProfile.name.trim(),
      role: draftProfile.role,
      interest: draftProfile.interest,
    };

    setProfile(nextProfile);
    window.localStorage.setItem("ts-observatory-profile", JSON.stringify(nextProfile));
    setCustomizing(true);
    setStage("site");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const enterSiteDirectly = () => {
    setCustomizing(false);
    setStage("site");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const enterCustomization = () => {
    setStage("customize");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main
      className="page"
      style={
        {
          "--pointer-x": `${pointer.x}%`,
          "--pointer-y": `${pointer.y}%`,
        } as CSSProperties
      }
      onMouseMove={(event) => {
        setPointer({
          x: (event.clientX / window.innerWidth) * 100,
          y: (event.clientY / window.innerHeight) * 100,
        });
      }}
    >
      <div className="cursorGlow" aria-hidden="true" />

      <section className={`intro stagePanel ${stage !== "intro" ? "panelHidden" : ""}`}>
        <div className="introAura introAuraA" aria-hidden="true" />
        <div className="introAura introAuraB" aria-hidden="true" />
        <div className="introGrid" aria-hidden="true" />
        <div className={`introWipe ${stage !== "intro" ? "introWipeActive" : ""}`} aria-hidden="true" />

        <div className="shell introInner">
          <p className="kicker">Trade Shock Observatory</p>
          <p className="typing">
            {introText.slice(0, typedCount)}
            <span className="caret" aria-hidden="true" />
          </p>

          <div className="floatingStatRow">
            {floatingStats.map((stat, index) => (
              <div
                key={stat.label}
                className="floatingStat"
                style={{ "--float-delay": `${index * 180}ms` } as CSSProperties}
              >
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>

          <h1 className="heroTitle">
            ECONOMIC
            <br />
            RESEARCH
            <br />
            PLATFORM
          </h1>

          <p className="heroText">
            What happens when the two largest economies on earth stop trusting each
            other? This project tracks the answer in the data, month by month, from
            2016 to 2025.
          </p>

          <button type="button" className="enterButton" onClick={enterCustomization}>
            Enter Platform
          </button>
        </div>
      </section>

      <section className={`customize stagePanel ${stage !== "customize" ? "panelHidden" : ""}`}>
        <div className="customizeAura customizeAuraA" aria-hidden="true" />
        <div className="customizeAura customizeAuraB" aria-hidden="true" />

        <div className="shell customizeShell">
          <div className="customizeIntro">
            <p className="kicker">QUICK SETUP</p>
            <h2>Do you want to customize your research experience?</h2>
            <p>{personalizationLine}</p>
          </div>

          <div className="choiceGrid">
            <article className="choiceCard">
              <p className="kicker">Direct Access</p>
              <h3>Enter the website immediately.</h3>
              <p>
                Skip setup and move straight into the full platform with the default
                research framing, side widgets, exhibits, and chapter navigation.
              </p>
              <button type="button" className="choiceButton" onClick={enterSiteDirectly}>
                No, continue to the site
              </button>
            </article>

            <article className="choiceCard choiceCardAccent">
              <p className="kicker">Personalized Mode</p>
              <h3>Personalize it.</h3>
              <p>
                Add your name and reader profile so the platform can personalize the
                welcome language and emphasize the part of the project most relevant to
                you.
              </p>

              <form className="customForm" onSubmit={handlePersonalize}>
                <label>
                  <span>Name</span>
                  <input
                    value={draftProfile.name}
                    onChange={(event) =>
                      setDraftProfile((current) => ({ ...current, name: event.target.value }))
                    }
                    placeholder="Abhinav Ramakrishnan"
                  />
                </label>

                <label>
                  <span>Reader role</span>
                  <select
                    value={draftProfile.role}
                    onChange={(event) =>
                      setDraftProfile((current) => ({ ...current, role: event.target.value }))
                    }
                  >
                    {personaOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  <span>Primary interest</span>
                  <select
                    value={draftProfile.interest}
                    onChange={(event) =>
                      setDraftProfile((current) => ({ ...current, interest: event.target.value }))
                    }
                  >
                    {interestOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <button type="submit" className="choiceButton choiceButtonAccent">
                  Save and enter personalized mode
                </button>
              </form>
            </article>
          </div>
        </div>
      </section>

      <section className={`site ${stage === "site" ? "siteVisible" : ""}`}>
        <header className="topbar">
          <div className="shell topbarInner">
            <Link href="/" className="brand">
              Trade Shock Observatory
            </Link>
            <nav className="nav">
              <a href="#insights">Insights</a>
              <a href="#platform-info">Platform</a>
              <a href="#projects">Projects</a>
              <Link href="/data">Data</Link>
              <Link href="/glossary">Glossary</Link>
              <a href="#methodology">Methodology</a>
              <a href="#researcher">Researcher</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <button
          type="button"
          className="sourceTab"
          onClick={() => setSourceDrawerOpen((open) => !open)}
          aria-expanded={sourceDrawerOpen}
          aria-controls="source-drawer"
        >
          Sources
        </button>

        <aside
          id="source-drawer"
          className={`sourceDrawer ${sourceDrawerOpen ? "sourceDrawerOpen" : ""}`}
          aria-label="Research sources and citation notes"
        >
          <div className="sourceDrawerHeader">
            <p className="kicker">Citation Drawer</p>
            <button
              type="button"
              className="sourceClose"
              onClick={() => setSourceDrawerOpen(false)}
              aria-label="Close source drawer"
            >
              Close
            </button>
          </div>

          <h2>Sources that support the research framing.</h2>
          <p>
            Use this drawer as the citation layer for the platform. It identifies the
            institutional data sources and policy references that would support a
            formal paper on trade shocks, supply-chain disruption, and bilateral
            imbalance.
          </p>

          <div className="sourceList">
            {sources.map((source, index) => (
              <article
                key={source.agency}
                className="sourceCard"
                style={{ "--delay": `${index * 70}ms` } as CSSProperties}
              >
                <span>0{index + 1}</span>
                <div>
                  <h3>{source.agency}</h3>
                  <p>{source.use}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="sourceNote">
            <strong>Research note</strong>
            <p>
              In a final academic version, each chart and claim should include a
              specific table, series ID, access date, or policy document citation.
            </p>
          </div>
        </aside>

        <aside
          className={`researchAssistant ${assistantOpen ? "researchAssistantOpen" : "researchAssistantClosed"}`}
          aria-label="Floating research assistant"
        >
          <button
            type="button"
            className="assistantToggle"
            onClick={() => setAssistantOpen((open) => !open)}
            aria-expanded={assistantOpen}
          >
            {assistantOpen ? "Hide" : "Guide"}
          </button>

          <div className="assistantBody">
            <div className="assistantHeader">
              <span className="assistantOrb" aria-hidden="true" />
              <div>
                <p className="kicker">Research Assistant</p>
                <h2>{assistantTip.label}</h2>
              </div>
            </div>

            <h3>{assistantTip.title}</h3>
            <p>{assistantTip.tip}</p>

            <div className="assistantActions">
              <a href="#projects">Go to projects</a>
              <button type="button" onClick={() => setSourceDrawerOpen(true)}>
                Open sources
              </button>
            </div>
          </div>
        </aside>

        <div className="siteTicker">
          <div className="siteTickerTrack">
            {[
              "Tariff escalation",
              "Supply bottlenecks",
              "Trade deficit persistence",
              "Recovery asymmetry",
              "Volatility clustering",
              "Tariff escalation",
              "Supply bottlenecks",
              "Trade deficit persistence",
              "Recovery asymmetry",
              "Volatility clustering",
            ].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <section id="insights" className="shell section">
          <div className="sectionHead">
            <p className="kicker">Project Introduction</p>
            <h2>{customizing ? `${profileName}, start with the project overview.` : "A guided introduction to the 2016-2025 U.S.-China trade research project."}</h2>
            <p>
              {customizing
                ? `This version is tuned for a ${profile.role.toLowerCase()} most interested in ${profile.interest.toLowerCase()}. The opening layer introduces the project first, then leads into four focused research studies.`
                : "This website is meant to introduce the research clearly first, then organize the full project into four connected studies: tariffs, supply chains, trade deficit persistence, and post-COVID recovery."}
            </p>
          </div>

          <div className="insightLayout">
            <div className="windowColumn">
              {windows.map((window, index) => (
                <article
                  key={window.id}
                  className="windowCard revealCard"
                  style={{ "--delay": `${index * 120}ms` } as CSSProperties}
                >
                  <p className="windowMeta">{window.label}</p>
                  <h3>{window.title}</h3>
                  <p>{window.subtext}</p>
                  <a href={window.href} className="windowCta">
                    {window.cta}
                  </a>
                </article>
              ))}
            </div>

            <article
              className="featurePanel revealCard"
              style={{ "--delay": "180ms" } as CSSProperties}
            >
              <div className="featureTop">
                <p className="kicker">Macroeconomic Framing</p>
                <span className="metric">2016-2025</span>
              </div>
              <h3>
                The project studies how U.S.-China trade changed across four connected economic phases.
              </h3>
              <p>
                The central idea is simple: trade disruption did not happen all at once.
                The 2016-2025 period contains a pre-shock baseline, the tariff conflict,
                the COVID logistics collapse, and an uneven recovery period. Each phase
                affected imports, exports, pricing, shipment timing, and the trade
                deficit differently, so the project is organized into four separate but
                connected research paths.
              </p>
            </article>
          </div>

          <div className="liveStrip revealCard" style={{ "--delay": "320ms" } as CSSProperties}>
            <p className="kicker">Live Feed</p>
            <div className="liveMessage">{liveFeed[feedIndex]}</div>
          </div>
        </section>

        <section id="platform-info" className="shell section">
          <div className="sideWidgets">
            <aside className="timelineRail revealCard" style={{ "--delay": "80ms" } as CSSProperties}>
              <div className="timelineHeader">
                <div>
                  <p className="kicker">Timeline Rail</p>
                  <h3>2016-2025 research chronology</h3>
                </div>
                <span>{timelineItems.length} milestones</span>
              </div>

              <div className="timelineScroll" aria-label="U.S.-China trade research timeline">
                <div className="timelineLine" aria-hidden="true" />
                {timelineItems.map((item) => (
                  <article
                    key={`${item.period}-${item.title}`}
                    className={`timelineItem timelineItem--${item.categoryKey}`}
                  >
                    <span className="timelineDot" aria-hidden="true" />
                    <div className="timelineContent">
                      <div className="timelineMeta">
                        <strong>{item.period}</strong>
                        <span className="timelineTag">{item.category}</span>
                      </div>
                      <h4><Link href={item.caseFile}>{item.title}</Link></h4>
                      <p>{item.description}</p>
                      <a className="timelineSource" href={item.sourceUrl} target="_blank" rel="noreferrer">Source: {item.source} (opens source)</a>
                    </div>
                  </article>
                ))}
              </div>

              <p className="timelineNote">
                Open a milestone’s case file or follow its source link to verify the chronology.
              </p>
            </aside>

            <aside className="chartPreviewStack">
              <article className="miniChartCard revealCard" style={{ "--delay": "140ms" } as CSSProperties}>
                <p className="kicker">Monthly Trade Values</p>
                <Link href="/data" className="miniChartLink" aria-label="Open the data explorer for monthly trade values">
                  <Image
                    src="/graph1_trade_dynamics.png"
                    alt="Mini trade dynamics preview"
                    width={800}
                    height={600}
                    className="miniChartImage"
                  />
                </Link>
                <p className="chartSourceNote">Project-prepared imports and exports. Units and original publisher metadata are not recorded; see Data &amp; Sources.</p>
              </article>

              <article className="miniChartCard revealCard" style={{ "--delay": "220ms" } as CSSProperties}>
                <p className="kicker">Monthly Percentage Change</p>
                <Link href="/data" className="miniChartLink" aria-label="Open the data explorer and documentation">
                  <Image
                    src="/graph3_percent_change.png"
                    alt="Mini percent change preview"
                    width={800}
                    height={600}
                    className="miniChartImage"
                  />
                </Link>
                <p className="chartSourceNote">Month-over-month changes in the prepared file. Source metadata needs verification; see Data &amp; Sources.</p>
              </article>
            </aside>
          </div>

          <div className="panelGrid">
            {leadPanels.map((panel, index) => (
              <article
                key={panel.heading}
                className="infoCard revealCard"
                style={{ "--delay": `${index * 110}ms` } as CSSProperties}
              >
                <h3>{panel.heading}</h3>
                <p>{panel.text}</p>
              </article>
            ))}
          </div>

          <div className="toolkitHeading">
            <p className="kicker">Research Toolkit</p>
            <h2>Useful routes into the project.</h2>
          </div>
          <div className="toolkitGrid">
            {toolkitCards.map((card, index) => (
              <Link
                key={card.title}
                href={card.href}
                className="toolkitCard revealCard"
                style={{ "--delay": `${index * 90}ms` } as CSSProperties}
              >
                <p className="kicker">{card.eyebrow}</p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <strong>{card.action} <span aria-hidden="true">↗</span></strong>
              </Link>
            ))}
          </div>
        </section>

        <section id="projects" className="shell section projectsSection">
          <div className="sectionHead">
            <p className="kicker">2016-2025 Research Projects</p>
            <h2>Four studies that turn the timeline into a clear research structure.</h2>
            <p>
              The project is organized around four connected research questions. Each
              card represents one part of the larger argument about how U.S.-China trade
              moved from baseline conditions into tariff conflict, supply-chain failure,
              deficit persistence, and partial recovery.
            </p>
          </div>

          <div className="projectGrid">
            {researchProjects.map((project, index) => (
              <Link
                key={project.title}
                href={project.href}
                className="projectCard revealCard"
                style={{ "--delay": `${index * 120}ms` } as CSSProperties}
              >
                <div className="projectTopline">
                  <p className="kicker">{project.years}</p>
                  <span>0{index + 1}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <strong>{project.status}</strong>
              </Link>
            ))}
          </div>
        </section>

        <section id="methodology" className="shell section methodologySection">
          <div className="sectionHead">
            <p className="kicker">Methodology</p>
            <h2>How the four research papers are built.</h2>
            <p>
              This section explains how the project studies U.S.-China trade from 2016
              to 2025. It defines the data, the comparison windows, the economic
              variables, and the limits of the analysis so each paper has a consistent
              research method.
            </p>
          </div>

          <div className="methodGrid">
            <article className="methodCard revealCard" style={{ "--delay": "80ms" } as CSSProperties}>
              <p className="kicker">Data Scope</p>
              <h3>Monthly bilateral trade indicators.</h3>
              <p>
                The project uses import values, export values, and trade-balance
                patterns to compare the U.S.-China relationship across the full
                2016-2025 period.
              </p>
            </article>

            <article className="methodCard revealCard" style={{ "--delay": "160ms" } as CSSProperties}>
              <p className="kicker">Comparison Windows</p>
              <h3>Baseline, tariff shock, COVID shock, recovery.</h3>
              <p>
                Each paper focuses on a different period, but the method stays
                consistent: identify the shock, compare it to the surrounding trend,
                and explain what changed.
              </p>
            </article>

            <article className="methodCard revealCard" style={{ "--delay": "240ms" } as CSSProperties}>
              <p className="kicker">Core Variables</p>
              <h3>Trade flow, deficit size, volatility, recovery.</h3>
              <p>
                The analysis focuses on whether trade volume changed, whether the
                deficit persisted, whether volatility increased, and whether recovery
                returned the relationship to its earlier pattern.
              </p>
            </article>

            <article className="methodCard revealCard" style={{ "--delay": "320ms" } as CSSProperties}>
              <p className="kicker">Limitations</p>
              <h3>The data shows trade behavior, not every cause.</h3>
              <p>
                The project can identify timing, direction, and scale of trade changes,
                but it should avoid claiming one single cause when policy, logistics,
                demand, and global conditions overlap.
              </p>
            </article>
          </div>

          <div className="methodExhibits">
            <article className="methodCard revealCard" style={{ "--delay": "140ms" } as CSSProperties}>
              <p className="kicker">Visual Method A</p>
              <h3>Compare import and export movement.</h3>
              <p>
                This graph supports chapters that discuss trade flow changes, especially
                the tariff and supply-chain disruption periods.
              </p>
              <div className="chartShell">
                <Image
                  src="/graph1_trade_dynamics.png"
                  alt="Trade dynamics graph"
                  width={1200}
                  height={900}
                  className="chart"
                />
              </div>
              <p className="chartSourceNote">Project figure from the prepared monthly file, 2016–Jan 2026. Units and original source metadata need verification. <Link href="/data">View data notes</Link>.</p>
            </article>

            <article className="methodCard revealCard" style={{ "--delay": "220ms" } as CSSProperties}>
              <p className="kicker">Visual Method B</p>
              <h3>Track whether imbalance persists.</h3>
              <p>
                This graph supports the deficit and recovery papers by showing whether
                the trade gap narrowed, widened, or stayed structurally visible.
              </p>
              <div className="chartShell">
                <Image
                  src="/graph2_trade_deficit.png"
                  alt="Trade deficit graph"
                  width={1200}
                  height={900}
                  className="chart"
                />
              </div>
              <p className="chartSourceNote">Balance is calculated as imports minus exports in the project script. Units and original source metadata need verification. <Link href="/data">View data notes</Link>.</p>
            </article>
          </div>

          <div className="methodNote">
            <p className="kicker">How this helps the papers</p>
            <h3>Each chapter can use the same method, then answer a different question.</h3>
            <p>
              The four papers should not feel disconnected. They are separate chapters
              in one longer investigation, so the method keeps them aligned while each
              chapter focuses on its own shock period.
            </p>
            <a href="#projects">Back to research projects</a>
          </div>
        </section>

        <section id="researcher" className="shell section researcherSection">
          <div className="researcherPanel revealCard" style={{ "--delay": "80ms" } as CSSProperties}>
            <div>
              <p className="kicker">About The Researcher</p>
              <h2>Abhinav Ramakrishnan</h2>
              <p>
                I created Trade Shock Observatory because I did not want being a high school student to define how far I could take my interests. I wanted to study economics beyond the classroom, work with real data, and understand questions that did not have simple textbook answers. At the same time, I wanted to turn what I learned into something other people could explore and learn from. I have always been driven by the idea that there is more to understand and more I can improve, and this project became an outlet for that ambition. It gave me a way to combine economics, research, data analysis, and web development while building a resource around a subject I genuinely wanted to understand.
              </p>
            </div>

            <div className="researcherStats">
              <article>
                <span>Focus</span>
                <strong>International trade</strong>
              </article>
              <article>
                <span>Period</span>
                <strong>2016-2025</strong>
              </article>
              <article>
                <span>Format</span>
                <strong>Four-paper study</strong>
              </article>
            </div>
          </div>
        </section>

        <footer id="contact" className="shell contactFooter">
          <div>
            <p className="kicker">Contact Info</p>
            <h2>Questions, feedback, or research notes?</h2>
            <p>
              For questions about the research, methodology, data, or source material, feel free to reach out.
            </p>
          </div>

          <div className="contactCards">
            <a href="mailto:abhinavkrishna1008@gmail.com">
              <span>Email</span>
              <strong>abhinavkrishna1008@gmail.com</strong>
            </a>
            <button type="button" onClick={() => setSourceDrawerOpen(true)}>
              <span>Sources</span>
              <strong>Open the citation drawer on the right</strong>
            </button>
          </div>
        </footer>
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 16%, rgba(92, 246, 255, 0.14), transparent 26%),
            radial-gradient(circle at 85% 80%, rgba(193, 255, 99, 0.1), transparent 24%),
            #08111d;
          color: #ecf4ff;
        }

        .cursorGlow {
          position: fixed;
          left: calc(var(--pointer-x) - 10rem);
          top: calc(var(--pointer-y) - 10rem);
          width: 20rem;
          height: 20rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(111, 255, 233, 0.1), transparent 65%);
          filter: blur(48px);
          pointer-events: none;
          z-index: 0;
        }

        .shell {
          width: min(1580px, calc(100% - 72px));
          margin: 0 auto;
        }

        .stagePanel {
          position: fixed;
          inset: 0;
          z-index: 30;
          overflow: hidden;
          transition: opacity 520ms ease, transform 720ms ease, visibility 720ms ease;
        }

        .panelHidden {
          opacity: 0;
          transform: scale(1.02);
          visibility: hidden;
          pointer-events: none;
        }

        .intro {
          background: linear-gradient(180deg, #0d1220 0%, #0a1627 55%, #09111d 100%);
        }

        .introAura,
        .customizeAura {
          position: absolute;
          border-radius: 999px;
          filter: blur(100px);
          opacity: 0.3;
        }

        .introAuraA {
          width: 24rem;
          height: 24rem;
          top: 8%;
          left: -8rem;
          background: rgba(111, 255, 233, 0.22);
        }

        .introAuraB {
          width: 28rem;
          height: 28rem;
          right: -8rem;
          bottom: 6%;
          background: rgba(194, 255, 93, 0.16);
        }

        .introGrid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 74px 74px;
          opacity: 0.16;
          mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.72), transparent 92%);
        }

        .introWipe {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #c1ff63, #66ebff);
          transform: translateY(100%);
          transition: transform 780ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .introWipeActive {
          transform: translateY(0);
        }

        .introInner,
        .customizeShell {
          position: relative;
          z-index: 1;
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          justify-content: center;
        }

        .introInner {
          padding-block: 48px;
          align-items: flex-start;
        }

        .customize {
          background:
            radial-gradient(circle at 18% 20%, rgba(102, 235, 255, 0.12), transparent 24%),
            radial-gradient(circle at 80% 75%, rgba(193, 255, 99, 0.08), transparent 22%),
            linear-gradient(180deg, #07111b 0%, #0b1627 100%);
        }

        .customizeAuraA {
          width: 26rem;
          height: 26rem;
          top: 10%;
          left: -10rem;
          background: rgba(102, 235, 255, 0.14);
        }

        .customizeAuraB {
          width: 28rem;
          height: 28rem;
          right: -6rem;
          bottom: 0;
          background: rgba(193, 255, 99, 0.14);
        }

        .customizeIntro {
          max-width: 780px;
          margin-bottom: 30px;
        }

        .customizeIntro h2 {
          margin: 14px 0 16px;
          font-size: clamp(2.6rem, 6vw, 5.2rem);
          line-height: 0.95;
        }

        .customizeIntro p:last-child {
          margin: 0;
          color: #c9d8ea;
          line-height: 1.9;
          font-size: 1.05rem;
        }

        .choiceGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .choiceCard {
          padding: 30px;
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.045);
          box-shadow: 0 18px 34px rgba(0, 0, 0, 0.2);
        }

        .choiceCardAccent {
          background: linear-gradient(
            135deg,
            rgba(102, 235, 255, 0.1),
            rgba(255, 255, 255, 0.04),
            rgba(193, 255, 99, 0.08)
          );
        }

        .choiceCard h3 {
          margin: 14px 0;
          font-size: 2rem;
          line-height: 1.05;
        }

        .choiceCard p {
          margin: 0;
          line-height: 1.8;
          color: #d7e4f5;
        }

        .choiceButton,
        .enterButton {
          min-height: 54px;
          padding: 0 22px;
          border-radius: 999px;
          color: #f4f8ff;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 11px;
          font-weight: 800;
          transition: transform 180ms ease, background 180ms ease;
        }

        .choiceButton {
          margin-top: 24px;
          border: 1px solid rgba(102, 235, 255, 0.3);
          background: rgba(102, 235, 255, 0.08);
        }

        .choiceButtonAccent {
          width: 100%;
          background: rgba(193, 255, 99, 0.12);
          border-color: rgba(193, 255, 99, 0.34);
        }

        .customForm {
          display: grid;
          gap: 16px;
          margin-top: 24px;
        }

        .customForm label {
          display: grid;
          gap: 8px;
        }

        .customForm span {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 10px;
          font-weight: 800;
          color: #8df3ff;
        }

        .customForm input,
        .customForm select {
          width: 100%;
          min-height: 52px;
          padding: 0 16px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(9, 16, 27, 0.72);
          color: #ecf4ff;
          outline: none;
        }

        .floatingStatRow {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          margin-top: 22px;
          max-width: 1000px;
        }

        .floatingStat {
          min-width: 164px;
          padding: 15px 17px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          animation: floatCard 5.2s ease-in-out infinite;
          animation-delay: var(--float-delay);
        }

        .floatingStat span {
          display: block;
          margin-bottom: 8px;
          color: #8df3ff;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .floatingStat strong {
          font-size: 1.08rem;
          color: #f4f8ff;
        }

        .kicker {
          margin: 0;
          color: #8df3ff;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.28em;
        }

        .typing {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 42px;
          margin: 20px 0 0;
          color: #f4f8ff;
          font-size: clamp(0.98rem, 1.85vw, 1.32rem);
          font-weight: 600;
          letter-spacing: 0.03em;
        }

        .caret {
          width: 12px;
          height: 1.1em;
          background: #d4ff62;
          animation: blink 0.95s steps(1) infinite;
        }

        .heroTitle {
          margin: 24px 0 0;
          max-width: 10ch;
          font-size: clamp(4.6rem, 15.4vw, 11.6rem);
          line-height: 0.84;
          letter-spacing: -0.066em;
        }

        .heroText {
          max-width: 840px;
          margin: 24px 0 0;
          color: #c7d3e7;
          font-size: 1.05rem;
          line-height: 1.82;
        }

        .enterButton {
          margin-top: 32px;
          width: fit-content;
          border: 1px solid rgba(141, 243, 255, 0.3);
          background: rgba(141, 243, 255, 0.08);
          font-size: 12px;
          letter-spacing: 0.22em;
          min-height: 52px;
          padding: 0 22px;
        }

        .choiceButton:hover,
        .choiceButton:focus-visible,
        .enterButton:hover,
        .enterButton:focus-visible,
        .glossaryChip:hover,
        .glossaryChip:focus-visible,
        .windowCta:hover,
        .windowCta:focus-visible {
          transform: translateY(-2px);
        }

        .site {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 700ms ease 120ms, transform 700ms ease 120ms;
          pointer-events: none;
        }

        .siteVisible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 10;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(8, 17, 29, 0.82);
          backdrop-filter: blur(16px);
        }

        .topbarInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 18px 0;
        }

        .brand,
        .nav a {
          color: #ecf4ff;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .nav {
          display: flex;
          gap: 22px;
        }

        .nav a {
          display: inline-flex;
          min-height: 40px;
          align-items: center;
          white-space: nowrap;
        }

        .chartSourceNote {
          margin: 12px 0 0;
          color: #9aabba;
          font-size: 0.75rem;
          line-height: 1.6;
        }

        .chartSourceNote a { color: #8df3ff; }

        .sourceTab {
          position: fixed;
          right: 18px;
          top: 50%;
          z-index: 20;
          min-height: 48px;
          padding: 0 18px;
          border-radius: 999px;
          border: 1px solid rgba(193, 255, 99, 0.36);
          background: rgba(193, 255, 99, 0.1);
          color: #ecf4ff;
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.22);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 10px;
          font-weight: 900;
          transform: translateY(-50%) rotate(-90deg);
          transform-origin: center;
          transition: background 180ms ease, border-color 180ms ease, translate 180ms ease;
        }

        .sourceTab:hover,
        .sourceTab:focus-visible {
          background: rgba(102, 235, 255, 0.14);
          border-color: rgba(102, 235, 255, 0.42);
          translate: -4px 0;
        }

        .sourceDrawer {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 19;
          display: flex;
          width: min(460px, calc(100% - 28px));
          height: 100vh;
          flex-direction: column;
          gap: 20px;
          padding: 32px;
          border-left: 1px solid rgba(141, 243, 255, 0.16);
          background:
            radial-gradient(circle at 20% 0%, rgba(102, 235, 255, 0.12), transparent 30%),
            linear-gradient(180deg, rgba(9, 18, 31, 0.98), rgba(6, 13, 23, 0.98));
          box-shadow: -30px 0 80px rgba(0, 0, 0, 0.36);
          transform: translateX(105%);
          transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
          overflow-y: auto;
        }

        .sourceDrawerOpen {
          transform: translateX(0);
        }

        .sourceDrawerHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }

        .sourceClose {
          min-height: 38px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.04);
          color: #ecf4ff;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 10px;
          font-weight: 800;
        }

        .sourceDrawer h2 {
          margin: 0;
          font-size: clamp(2.1rem, 4vw, 3.2rem);
          line-height: 0.96;
        }

        .sourceDrawer > p {
          margin: 0;
          color: #c9d8ea;
          line-height: 1.8;
        }

        .sourceList {
          display: grid;
          gap: 12px;
        }

        .sourceCard {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 14px;
          padding: 18px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.045);
          opacity: 0;
          transform: translateX(18px);
          animation: sourceCardIn 520ms ease forwards;
          animation-delay: var(--delay);
        }

        .sourceCard span {
          color: #c1ff63;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.16em;
        }

        .sourceCard h3 {
          margin: 0 0 8px;
          font-size: 1.08rem;
        }

        .sourceCard p,
        .sourceNote p {
          margin: 0;
          color: #d7e4f5;
          line-height: 1.7;
        }

        .sourceNote {
          padding: 18px;
          border-radius: 20px;
          border: 1px solid rgba(193, 255, 99, 0.18);
          background: rgba(193, 255, 99, 0.07);
        }

        .sourceNote strong {
          display: block;
          margin-bottom: 8px;
          color: #c1ff63;
        }

        .researchAssistant {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 18;
          width: min(380px, calc(100% - 44px));
          transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .researchAssistantClosed {
          transform: translateY(calc(100% - 54px));
        }

        .assistantToggle {
          min-height: 44px;
          padding: 0 18px;
          border-radius: 999px;
          border: 1px solid rgba(193, 255, 99, 0.32);
          background: rgba(193, 255, 99, 0.12);
          color: #ecf4ff;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.22);
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 10px;
          font-weight: 900;
        }

        .assistantBody {
          margin-top: 10px;
          padding: 22px;
          border-radius: 28px;
          border: 1px solid rgba(141, 243, 255, 0.16);
          background:
            radial-gradient(circle at 16% 0%, rgba(102, 235, 255, 0.16), transparent 34%),
            linear-gradient(145deg, rgba(12, 24, 40, 0.96), rgba(7, 15, 26, 0.96));
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.34);
          backdrop-filter: blur(18px);
        }

        .assistantHeader {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }

        .assistantOrb {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: radial-gradient(circle, #c1ff63 0%, #66ebff 42%, transparent 72%);
          box-shadow: 0 0 28px rgba(102, 235, 255, 0.32);
          animation: assistantPulse 1.8s ease-in-out infinite;
        }

        .assistantHeader h2 {
          margin: 6px 0 0;
          font-size: 1.15rem;
        }

        .assistantBody h3 {
          margin: 0 0 10px;
          font-size: 1.7rem;
          line-height: 1.05;
        }

        .assistantBody p {
          margin: 0;
          color: #d7e4f5;
          line-height: 1.75;
        }

        .assistantActions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        .assistantActions a,
        .assistantActions button {
          display: inline-flex;
          align-items: center;
          min-height: 40px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: #ecf4ff;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 10px;
          font-weight: 850;
        }

        .siteTicker {
          overflow: hidden;
          white-space: nowrap;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
        }

        .siteTickerTrack {
          display: inline-block;
          min-width: 100%;
          padding: 12px 0;
          animation: tickerMove 20s linear infinite;
        }

        .siteTickerTrack span {
          display: inline-block;
          margin-right: 30px;
          color: #b7d8f1;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.24em;
        }

        .section {
          position: relative;
          padding: 72px 0 28px;
        }

        .sectionHead {
          margin-bottom: 24px;
        }

        .sectionHead h2,
        .featurePanel h3,
        .methodCard h3,
        .projectCard h3,
        .methodNote h3,
        .infoCard h3,
        .microCard h3 {
          margin: 14px 0 16px;
          line-height: 0.98;
        }

        .sectionHead h2 {
          font-size: clamp(2.5rem, 5vw, 4.3rem);
        }

        .sectionHead p:last-child,
        .windowCard p,
        .featurePanel p,
        .infoCard p,
        .methodCard p,
        .projectCard p,
        .methodNote p,
        .microCard p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.85;
        }

        .insightLayout,
        .methodExhibits {
          display: grid;
          grid-template-columns: 0.42fr 0.58fr;
          gap: 22px;
          align-items: start;
        }

        .windowColumn,
        .panelGrid,
        .methodGrid,
        .projectGrid,
        .microGrid,
        .toolkitGrid {
          display: grid;
          gap: 18px;
        }

        .toolkitHeading { margin: 36px 0 18px; }
        .toolkitHeading h2 { margin: 10px 0 0; font-size: clamp(1.8rem, 3vw, 2.8rem); }
        .toolkitGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .toolkitCard {
          display: flex; min-height: 235px; flex-direction: column; align-items: flex-start;
          padding: 26px; border: 1px solid rgba(255,255,255,.09); border-radius: 24px;
          background: linear-gradient(145deg, rgba(255,255,255,.06), rgba(255,255,255,.025));
          color: inherit; text-decoration: none; transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
        }
        .toolkitCard:hover, .toolkitCard:focus-visible { transform: translateY(-3px); border-color: rgba(141,243,255,.38); background: rgba(141,243,255,.07); }
        .toolkitCard h3 { margin: 18px 0 10px; font-size: clamp(1.4rem, 2vw, 2rem); }
        .toolkitCard > p:not(.kicker) { margin: 0; color: #b6c3d4; line-height: 1.7; }
        .toolkitCard strong { margin-top: auto; padding-top: 22px; color: #8df3ff; font-size: .78rem; letter-spacing: .1em; text-transform: uppercase; }
        .toolkitCard strong span { padding-left: 8px; }

        .windowCard,
        .featurePanel,
        .infoCard,
        .methodCard,
        .projectCard,
        .methodNote,
        .microCard,
        .liveStrip,
        .timelineRail,
        .miniChartCard {
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.045);
          box-shadow: 0 18px 34px rgba(0, 0, 0, 0.16);
        }

        .windowCard,
        .featurePanel,
        .infoCard,
        .methodCard,
        .projectCard,
        .methodNote,
        .microCard,
        .timelineRail,
        .miniChartCard {
          padding: 28px;
        }

        .revealCard {
          opacity: 0;
          transform: translateY(24px);
          animation: riseIn 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: var(--delay, 0ms);
        }

        .windowCard h3,
        .featurePanel h3,
        .projectCard h3 {
          font-size: 2.2rem;
        }

        .windowMeta {
          margin: 0;
          color: #d4ff62;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.28em;
        }

        .windowCta,
        .projectCard strong,
        .methodNote a {
          display: inline-flex;
          margin-top: 18px;
          color: #8df3ff;
          font-size: 11px;
          font-weight: 800;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          transition: transform 180ms ease, color 180ms ease;
        }

        .windowCta:hover,
        .windowCta:focus-visible {
          color: #d4ff62;
        }

        .featurePanel {
          min-height: 100%;
          background: linear-gradient(
            135deg,
            rgba(141, 243, 255, 0.12),
            rgba(129, 140, 248, 0.08),
            rgba(212, 255, 98, 0.05)
          );
        }

        .featureTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .metric {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.04);
          color: #d9e7f8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .liveStrip {
          display: grid;
          gap: 12px;
          margin-top: 18px;
          padding: 22px 24px;
        }

        .liveMessage {
          min-height: 30px;
          color: #dff7ff;
          font-size: 1.05rem;
          letter-spacing: 0.02em;
        }

        .sideWidgets {
          display: grid;
          grid-template-columns: 0.34fr 0.66fr;
          gap: 18px;
          margin-bottom: 18px;
        }

        .timelineRail {
          position: relative;
          display: flex;
          max-height: 860px;
          overflow: hidden;
          flex-direction: column;
        }

        .timelineHeader {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .timelineHeader h3 {
          margin: 10px 0 0;
          color: #eff6ff;
          font-size: 1.35rem;
          line-height: 1.15;
        }

        .timelineHeader > span {
          flex: 0 0 auto;
          padding: 8px 10px;
          border: 1px solid rgba(141, 243, 255, 0.14);
          border-radius: 999px;
          color: #9ecbdb;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .timelineScroll {
          position: relative;
          min-height: 0;
          margin-top: 8px;
          padding: 10px 8px 10px 0;
          overflow-y: auto;
          scrollbar-color: rgba(141, 243, 255, 0.3) transparent;
          scrollbar-width: thin;
        }

        .timelineScroll::-webkit-scrollbar {
          width: 6px;
        }

        .timelineScroll::-webkit-scrollbar-thumb {
          border-radius: 999px;
          background: rgba(141, 243, 255, 0.26);
        }

        .timelineLine {
          position: absolute;
          left: 8px;
          top: 24px;
          bottom: 24px;
          width: 1px;
          background: rgba(141, 243, 255, 0.18);
        }

        .timelineItem {
          position: relative;
          display: grid;
          grid-template-columns: 18px 1fr;
          gap: 12px;
          padding: 12px 10px 12px 2px;
          border-radius: 16px;
          color: inherit;
          text-decoration: none;
          transition: background 180ms ease, transform 180ms ease;
        }

        .timelineItem:hover,
        .timelineItem:focus-visible {
          background: rgba(255, 255, 255, 0.045);
          transform: translateX(3px);
          outline: none;
        }

        .timelineItem:focus-visible {
          box-shadow: inset 0 0 0 1px rgba(141, 243, 255, 0.28);
        }

        .timelineDot {
          position: relative;
          z-index: 1;
          width: 11px;
          height: 11px;
          margin-top: 5px;
          margin-left: 1px;
          border-radius: 999px;
          border: 2px solid rgba(235, 248, 255, 0.72);
          background: #c1ff63;
          box-shadow: none;
        }

        .timelineItem--war .timelineDot {
          background: #ffbd66;
        }

        .timelineItem--supply .timelineDot {
          background: #66ebff;
        }

        .timelineItem--balance .timelineDot {
          background: #c1ff63;
        }

        .timelineItem--recovery .timelineDot {
          background: #b8a7ff;
        }

        .timelineContent {
          min-width: 0;
        }

        .timelineMeta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .timelineMeta strong {
          color: #f2f7ff;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
        }

        .timelineTag {
          padding: 5px 8px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          color: #adc0d6;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .timelineItem h4 {
          margin: 7px 0 0;
          color: #e9f2ff;
          font-size: 0.98rem;
          line-height: 1.35;
        }

        .timelineItem h4 a { color: inherit; text-decoration: none; }
        .timelineItem h4 a:hover, .timelineItem h4 a:focus-visible { color: #8df3ff; text-decoration: underline; }

        .timelineItem p {
          margin: 6px 0 0;
          color: #aebfd4;
          font-size: 0.82rem;
          line-height: 1.6;
        }

        .timelineSource {
          display: inline-block;
          margin-top: 7px;
          color: rgba(141, 243, 255, 0.62);
          font-size: 8px;
          font-weight: 750;
          letter-spacing: 0.11em;
          text-transform: uppercase;
          text-decoration: none;
        }

        .timelineSource:hover, .timelineSource:focus-visible { color: #d4ff62; text-decoration: underline; }

        .timelineNote {
          margin: 12px 0 0;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #8193aa;
          font-size: 0.72rem;
          line-height: 1.55;
        }

        .chartPreviewStack {
          display: grid;
          gap: 18px;
        }

        .miniChartLink {
          display: block;
          margin-top: 14px;
        }

        .miniChartImage,
        .chart {
          width: 100%;
          height: auto;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .glossaryRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        .glossaryChip {
          min-height: 46px;
          padding: 0 16px;
          border-radius: 999px;
          border: 1px solid rgba(141, 243, 255, 0.18);
          background: rgba(141, 243, 255, 0.06);
          color: #ecf4ff;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
        }

        .glossaryChipActive {
          background: rgba(193, 255, 99, 0.14);
          border-color: rgba(193, 255, 99, 0.35);
        }

        .hoverPopup {
          margin-top: 16px;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.04);
        }

        .hoverPopupVisible {
          min-height: 140px;
          padding: 22px;
        }

        .hoverPopup h3 {
          margin: 12px 0 10px;
          font-size: 1.7rem;
        }

        .methodologySection {
          padding-bottom: 88px;
        }

        .methodGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 18px;
        }

        .methodExhibits {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .methodNote {
          margin-top: 18px;
        }

        .researcherSection {
          padding-top: 92px;
        }

        .researcherPanel {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 28px;
          align-items: end;
          padding: 34px;
          border-radius: 34px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background:
            radial-gradient(circle at 85% 20%, rgba(193, 255, 99, 0.1), transparent 30%),
            rgba(255, 255, 255, 0.045);
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.2);
        }

        .researcherPanel h2,
        .contactFooter h2 {
          margin: 14px 0 18px;
          font-size: clamp(2.8rem, 6vw, 5rem);
          line-height: 0.92;
          letter-spacing: -0.05em;
        }

        .researcherPanel p,
        .contactFooter p {
          margin: 0;
          color: #d7e4f5;
          line-height: 1.9;
        }

        .researcherPanel > div:first-child > p:last-child {
          max-width: 70ch;
          margin-top: 18px;
        }

        .researcherStats {
          display: grid;
          gap: 14px;
        }

        .researcherStats article {
          padding: 18px;
          border-radius: 22px;
          border: 1px solid rgba(141, 243, 255, 0.13);
          background: rgba(8, 17, 29, 0.56);
        }

        .researcherStats span,
        .contactCards span {
          display: block;
          margin-bottom: 8px;
          color: #8df3ff;
          font-size: 10px;
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .researcherStats strong,
        .contactCards strong {
          color: #ecf4ff;
          font-size: 1.05rem;
        }

        .contactFooter {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 24px;
          align-items: end;
          padding: 86px 0 110px;
        }

        .contactCards {
          display: grid;
          gap: 14px;
        }

        .contactCards a,
        .contactCards button {
          padding: 20px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.045);
          color: inherit;
          text-align: left;
          text-decoration: none;
          transition: transform 180ms ease, border-color 180ms ease;
        }

        .contactCards a:hover,
        .contactCards a:focus-visible,
        .contactCards button:hover,
        .contactCards button:focus-visible {
          transform: translateY(-3px);
          border-color: rgba(193, 255, 99, 0.28);
        }

        .projectsSection {
          padding-top: 92px;
        }

        .projectGrid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .projectCard {
          position: relative;
          min-height: 280px;
          overflow: hidden;
          color: inherit;
          text-decoration: none;
          transition: transform 220ms ease, border-color 220ms ease, background 220ms ease;
        }

        .projectCard::before {
          content: "";
          position: absolute;
          inset: auto -20% -45% 35%;
          height: 14rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(102, 235, 255, 0.18), transparent 66%);
          opacity: 0;
          transition: opacity 220ms ease, transform 220ms ease;
        }

        .projectCard:hover,
        .projectCard:focus-visible {
          transform: translateY(-6px);
          border-color: rgba(193, 255, 99, 0.32);
          background: rgba(255, 255, 255, 0.065);
        }

        .projectCard:hover::before,
        .projectCard:focus-visible::before {
          opacity: 1;
          transform: translateY(-20px);
        }

        .projectTopline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          position: relative;
          z-index: 1;
        }

        .projectTopline span {
          color: rgba(193, 255, 99, 0.9);
          font-size: 0.9rem;
          font-weight: 900;
          letter-spacing: 0.18em;
        }

        .projectCard h3,
        .projectCard p,
        .projectCard strong {
          position: relative;
          z-index: 1;
        }

        .projectCard h3 {
          max-width: 12ch;
        }

        .projectCard strong {
          font-size: 11px;
        }

        .chartShell {
          margin-top: 18px;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        @keyframes riseIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes tickerMove {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes sourceCardIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes assistantPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @media (max-width: 980px) {
          .choiceGrid,
          .insightLayout,
          .methodGrid,
          .methodExhibits,
          .researcherPanel,
          .contactFooter,
          .sideWidgets,
          .projectGrid,
          .toolkitGrid {
            grid-template-columns: 1fr;
          }

          .topbarInner {
            flex-direction: column;
            align-items: flex-start;
          }

          .nav {
            width: 100%;
            gap: 16px;
            overflow-x: auto;
            flex-wrap: nowrap;
            padding: 2px 2px 8px;
            scrollbar-width: thin;
          }

          .sourceTab {
            top: auto;
            right: 18px;
            bottom: 92px;
            transform: none;
          }

          .timelineRail {
            max-height: none;
          }

          .timelineScroll {
            max-height: none;
            overflow: visible;
          }
        }

        @media (max-width: 640px) {
          .shell {
            width: min(100% - 28px, 1580px);
          }

          .heroTitle {
            font-size: 4rem;
            max-width: 8ch;
          }

          .heroText {
            font-size: 1rem;
          }

          .section {
            padding-top: 56px;
          }

          .floatingStatRow,
          .glossaryRow {
            flex-direction: column;
          }

          .windowCard,
          .featurePanel,
          .infoCard,
          .methodCard,
          .projectCard,
          .methodNote,
          .microCard,
          .timelineRail,
          .miniChartCard,
          .choiceCard {
            padding: 22px;
            border-radius: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { scroll-behavior: auto !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
          .revealCard { opacity: 1; transform: none; }
        }
      `}</style>
    </main>
  );
}
