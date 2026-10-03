"use client";

import Image from "next/image";
import Link from "next/link";
import type {
  CSSProperties,
  FormEvent,
  PointerEvent as ReactPointerEvent,
  TouchEvent as ReactTouchEvent,
  WheelEvent as ReactWheelEvent,
} from "react";
import { useEffect, useRef, useState } from "react";

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

const heroMilestones = [
  { year: "2018", label: "Tariff escalation", tone: "tariff" },
  { year: "2020", label: "Supply chain shock", tone: "supply" },
  { year: "2022", label: "Post-COVID adjustment", tone: "adjustment" },
  { year: "2025", label: "Trade structure in review", tone: "review" },
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

const navLinkClassName = "navLink";

const stagePanelBaseStyle: CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 30,
  overflow: "hidden",
};

const getStoredProfile = (): VisitorProfile => {
  if (typeof window === "undefined") {
    return defaultProfile;
  }

  try {
    const saved = window.localStorage.getItem("ts-observatory-profile");
    return saved ? (JSON.parse(saved) as VisitorProfile) : defaultProfile;
  } catch {
    return defaultProfile;
  }
};

export default function Page() {
  const [stage, setStage] = useState<Stage>("intro");
  const [customizing, setCustomizing] = useState(false);
  const [sourceDrawerOpen, setSourceDrawerOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(true);
  const [assistantSection, setAssistantSection] = useState<AssistantSection>("insights");
  const [profile, setProfile] = useState<VisitorProfile>(defaultProfile);
  const [draftProfile, setDraftProfile] = useState<VisitorProfile>(defaultProfile);
  const heroPointerFrame = useRef<number | null>(null);
  const heroTouchStart = useRef<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => () => {
    if (heroPointerFrame.current !== null) {
      window.cancelAnimationFrame(heroPointerFrame.current);
    }
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
    const storedProfile = getStoredProfile();
    setProfile(storedProfile);
    setDraftProfile(storedProfile);
    setStage("customize");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHeroPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (
      event.pointerType !== "mouse" ||
      window.innerWidth < 768 ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const hero = event.currentTarget;
    const bounds = hero.getBoundingClientRect();
    const shiftX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    const shiftY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
    const pointerX = event.clientX - bounds.left;
    const pointerY = event.clientY - bounds.top;

    if (heroPointerFrame.current !== null) {
      window.cancelAnimationFrame(heroPointerFrame.current);
    }

    heroPointerFrame.current = window.requestAnimationFrame(() => {
      hero.style.setProperty("--hero-shift-x", `${shiftX}px`);
      hero.style.setProperty("--hero-shift-y", `${shiftY}px`);
      hero.style.setProperty("--hero-pointer-x", `${pointerX}px`);
      hero.style.setProperty("--hero-pointer-y", `${pointerY}px`);
    });
  };

  const resetHeroPointer = (event: ReactPointerEvent<HTMLElement>) => {
    if (heroPointerFrame.current !== null) {
      window.cancelAnimationFrame(heroPointerFrame.current);
      heroPointerFrame.current = null;
    }

    event.currentTarget.style.setProperty("--hero-shift-x", "0px");
    event.currentTarget.style.setProperty("--hero-shift-y", "0px");
    event.currentTarget.style.setProperty("--hero-pointer-x", "65%");
    event.currentTarget.style.setProperty("--hero-pointer-y", "45%");
  };

  const handleHeroWheel = (event: ReactWheelEvent<HTMLElement>) => {
    if (event.deltaY > 18) {
      enterSiteDirectly();
    }
  };

  const handleHeroTouchStart = (event: ReactTouchEvent<HTMLElement>) => {
    heroTouchStart.current = event.changedTouches[0]?.clientY ?? null;
  };

  const handleHeroTouchEnd = (event: ReactTouchEvent<HTMLElement>) => {
    const touchEnd = event.changedTouches[0]?.clientY;
    if (
      heroTouchStart.current !== null &&
      touchEnd !== undefined &&
      heroTouchStart.current - touchEnd > 56
    ) {
      enterSiteDirectly();
    }
    heroTouchStart.current = null;
  };

  const stagePanelStyle = (isVisible: boolean, background: string): CSSProperties => ({
    ...stagePanelBaseStyle,
    background,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(-14px)",
    visibility: isVisible ? "visible" : "hidden",
    pointerEvents: isVisible ? "auto" : "none",
  });

  return (
    <main className="page">

      <section
        className={`intro stagePanel ${stage !== "intro" ? "panelHidden" : ""}`}
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={resetHeroPointer}
        onWheel={handleHeroWheel}
        onTouchStart={handleHeroTouchStart}
        onTouchEnd={handleHeroTouchEnd}
        style={stagePanelStyle(
          stage === "intro",
          "radial-gradient(ellipse at 72% 42%, rgba(32, 90, 110, 0.22), transparent 38%), linear-gradient(135deg, #07111d 0%, #0a1724 54%, #09111b 100%)",
        )}
      >
        <div className="heroAtmosphere" aria-hidden="true" />
        <div className="heroGrid" aria-hidden="true" />
        <svg className="heroFlowMap" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path id="hero-flow-one" className="heroFlowLine heroFlowLineOne" d="M-80 650 C 180 540, 265 715, 480 590 S 790 420, 1000 520 S 1270 600, 1510 340" />
          <path className="heroFlowArrival" d="M-80 650 C 180 540, 265 715, 480 590 S 790 420, 1000 520 S 1270 600, 1510 340" />
          <path id="hero-flow-two" className="heroFlowLine heroFlowLineTwo" d="M-60 735 C 185 610, 300 780, 520 650 S 790 510, 1015 575 S 1270 655, 1510 435" />
          <path id="hero-flow-three" className="heroFlowLine heroFlowLineThree" d="M80 350 C 320 460, 450 300, 650 405 S 940 570, 1120 440 S 1320 300, 1510 390" />
          <circle className="heroFlowPoint heroFlowPointOne" cx="480" cy="590" r="3" />
          <circle className="heroFlowPoint heroFlowPointTwo" cx="1000" cy="520" r="3" />
          <circle className="heroFlowPoint heroFlowPointThree" cx="1120" cy="440" r="3" />
          <circle className="heroFlowSignal heroFlowSignalCyan" r="4"><animateMotion dur="13s" begin="0s" repeatCount="indefinite"><mpath href="#hero-flow-one" /></animateMotion></circle>
          <circle className="heroFlowSignal heroFlowSignalCyan heroFlowSignalSmall" r="3"><animateMotion dur="19s" begin="-7s" repeatCount="indefinite"><mpath href="#hero-flow-three" /></animateMotion></circle>
          <circle className="heroFlowSignal heroFlowSignalAmber" r="3.5"><animateMotion dur="17s" begin="-5s" repeatCount="indefinite"><mpath href="#hero-flow-two" /></animateMotion></circle>
        </svg>

        <div
          className="shell introInner"
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            width: "min(1500px, calc(100% - var(--intro-shell-gutter, 96px)))",
            minHeight: "100vh",
            margin: "0 auto",
            paddingBlock: "var(--hero-shell-padding, 28px)",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="heroTopline">
            <Link href="/" className="heroWordmark">Trade Shock Observatory</Link>
            <span>Independent economic research</span>
          </div>

          <div className="heroLayout">
            <div className="heroCopy">
              <p className="heroEyebrow"><span /> U.S. — CHINA / TRADE &amp; MACRO</p>
              <h1 className="heroTitle">
                <span className="heroTitleLine">
                  <span>THE U.S.–<span className="heroMobileBreak">CHINA</span></span>
                </span>
                <span className="heroTitleLine heroTitleLineAccent">
                  <span>TRADE<span className="heroMobileBreak">PROJECT</span></span>
                </span>
              </h1>
              <p className="heroSubtitle">Tariffs, supply chains, trade imbalances, and recovery from 2016–2025.</p>
              <p className="heroQuestion">How did these shocks reshape the economic relationship between the United States and China?</p>

              <div className="heroActions">
                <button type="button" className="enterButton" onClick={enterSiteDirectly}>
                  Explore the research <span aria-hidden="true">↗</span>
                </button>
                <Link className="heroDataLink" href="/data">View data <span aria-hidden="true">↗</span></Link>
              </div>
              <button type="button" className="heroPersonalize" onClick={enterCustomization}>
                Personalize your reading view
              </button>
            </div>

            <aside className="heroChronology" aria-label="Research timeline, 2016 to 2025">
              <div className="heroChronologyHead">
                <span>RESEARCH WINDOWS</span>
                <strong>2016 <i /> 2025</strong>
              </div>
              <div className="heroChronologyBody">
                <figure className="heroGlobe" aria-label="A rotating globe highlighting the United States and China">
                  <svg viewBox="0 0 260 260" aria-hidden="true">
                    <defs>
                      <radialGradient id="globe-ocean" cx="36%" cy="30%" r="74%">
                        <stop offset="0%" stopColor="#20424b" />
                        <stop offset="68%" stopColor="#10252f" />
                        <stop offset="100%" stopColor="#091720" />
                      </radialGradient>
                      <clipPath id="globe-clip"><circle cx="130" cy="130" r="105" /></clipPath>
                    </defs>
                    <circle className="globeOcean" cx="130" cy="130" r="105" fill="url(#globe-ocean)" />
                    <g clipPath="url(#globe-clip)">
                      <ellipse className="globeLatitude" cx="130" cy="130" rx="105" ry="36" />
                      <ellipse className="globeLatitude globeLatitudeWide" cx="130" cy="130" rx="105" ry="72" />
                      <ellipse className="globeMeridian globeMeridianOne" cx="130" cy="130" rx="38" ry="105" />
                      <ellipse className="globeMeridian globeMeridianTwo" cx="130" cy="130" rx="76" ry="105" />
                      <path className="globeLand" d="M38 82 54 68 75 72 84 82 101 85 110 98 102 109 90 110 86 122 73 127 68 145 56 140 50 124 39 116 34 99Z" />
                      <path className="globeLand" d="m146 80 16-11 22 5 10 10 20 5 12 13-8 11-19 2-8 13-18 1-8-11-18-5-8-14Z" />
                      <path className="globeLand" d="m194 119 17-7 17 9-2 13-13 8-17-5-9-9Z" />
                      <path className="globeLand" d="m90 150 15 7 7 19-7 17-10 19-9-13-2-18-8-16Z" />
                      <path className="globeUs" d="m55 91 21-8 18 5 8 11-7 10-14 2-5 11-14-4-8-11Z" />
                      <path className="globeChina" d="m174 91 16-5 16 8 8 10-8 10-15 1-8 8-13-7-7-12Z" />
                      <path className="globeTradeArc" d="M79 105 Q128 54 190 103" />
                      <circle className="globeMarker globeMarkerUs" cx="79" cy="105" r="4" />
                      <circle className="globeMarker globeMarkerChina" cx="190" cy="103" r="4" />
                    </g>
                    <circle className="globeRim" cx="130" cy="130" r="105" />
                    <ellipse className="globeOrbit" cx="130" cy="130" rx="120" ry="42" />
                    <circle className="globeOrbitPoint" r="3.5">
                      <animateMotion dur="11s" repeatCount="indefinite" path="M 10,130 A 120,42 0 1,1 250,130 A 120,42 0 1,1 10,130" />
                    </circle>
                  </svg>
                  <figcaption><span>United States</span><i aria-hidden="true" /> <span>China</span></figcaption>
                </figure>
                <div className="heroTimeline">
                  <span className="heroTimelineTrack" aria-hidden="true" />
                  <span className="heroTimelineSignal" aria-hidden="true" />
                  {heroMilestones.map((milestone, index) => (
                    <div className={`heroMilestone heroMilestone-${milestone.tone}`} key={milestone.year} style={{ "--milestone-index": index } as CSSProperties}>
                      <span className="heroMilestoneDot" aria-hidden="true" />
                      <div>
                        <strong>{milestone.year}</strong>
                        <span>{milestone.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="heroTimelineNote">Four linked studies tracing a changing trade relationship.</p>
            </aside>
          </div>

          <button
            type="button"
            className="heroScrollCue"
            onClick={enterSiteDirectly}
            aria-controls="insights"
          >
            <span aria-hidden="true" /> Scroll to enter the observatory
          </button>
        </div>
      </section>

      <section
        className={`customize stagePanel ${stage !== "customize" ? "panelHidden" : ""}`}
        style={stagePanelStyle(
          stage === "customize",
          "radial-gradient(circle at 18% 20%, rgba(102, 235, 255, 0.12), transparent 24%), radial-gradient(circle at 80% 75%, rgba(193, 255, 99, 0.08), transparent 22%), linear-gradient(180deg, #07111b 0%, #0b1627 100%)",
        )}
      >
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

      <section
        className={`site ${stage === "site" ? "siteVisible" : ""}`}
        style={{
          opacity: stage === "site" ? 1 : 0,
          transform: stage === "site" ? "translateY(0)" : "translateY(36px)",
          pointerEvents: stage === "site" ? "auto" : "none",
          visibility: stage === "site" ? "visible" : "hidden",
        }}
      >
        <header className="topbar">
          <div className="shell topbarInner">
            <Link href="/" className="brand">
              Trade Shock Observatory
            </Link>
            <nav className="nav">
              <a className={navLinkClassName} href="#insights">Insights</a>
              <a className={navLinkClassName} href="#platform-info">Platform</a>
              <a className={navLinkClassName} href="#projects">Projects</a>
              <Link className={navLinkClassName} href="/data">Data</Link>
              <Link className={navLinkClassName} href="/glossary">Glossary</Link>
              <a className={navLinkClassName} href="#methodology">Methodology</a>
              <a className={navLinkClassName} href="#researcher">Researcher</a>
              <a className={navLinkClassName} href="#contact">Contact</a>
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
            <div className="liveMessage">{liveFeed[0]}</div>
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
          <div className="sectionHead projectsIntro">
            <p className="kicker">2016-2025 Research Projects</p>
            <h2>Four connected studies. One changing trade relationship.</h2>
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
                <span className="projectNumber">0{index + 1}</span>
                <span className="projectYears">{project.years}</span>
                <div className="projectCopy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <span className="projectAction">{project.status}<i aria-hidden="true">â†—</i></span>
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
          visibility: hidden;
          pointer-events: none;
        }

        .panelHidden .heroGrid,
        .panelHidden .heroFlowLine,
        .panelHidden .heroFlowSignal,
        .panelHidden .heroFlowArrival,
        .panelHidden .heroTimelineSignal,
        .panelHidden .globeMeridian,
        .panelHidden .globeOrbit,
        .panelHidden .heroAtmosphere::before { animation-play-state: paused; }

        .panelHidden .heroFlowMap { opacity: 0.12; }
        .panelHidden .heroGlobe animateMotion { display: none; }

        .intro {
          --hero-shift-x: 0px;
          --hero-shift-y: 0px;
          --hero-pointer-x: 65%;
          --hero-pointer-y: 45%;
          isolation: isolate;
          background: #08131e;
        }

        .customizeAura {
          position: absolute;
          border-radius: 999px;
          filter: blur(100px);
          opacity: 0.3;
        }

        .heroAtmosphere {
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            radial-gradient(circle 24rem at var(--hero-pointer-x) var(--hero-pointer-y), rgba(102, 193, 201, 0.075), transparent 72%),
            radial-gradient(ellipse at 76% 38%, rgba(68, 164, 180, 0.13), transparent 36%),
            radial-gradient(ellipse at 18% 78%, rgba(255, 184, 77, 0.055), transparent 34%);
          transition: background-position 500ms ease;
          pointer-events: none;
        }

        .heroAtmosphere::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 46rem 30rem at 52% 48%, rgba(86, 163, 173, 0.16), transparent 72%);
          opacity: 0;
          animation: heroOpeningBloom 1600ms 120ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .heroGrid {
          position: absolute;
          inset: 0;
          z-index: -2;
          background-image:
            linear-gradient(rgba(201, 225, 231, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 225, 231, 0.035) 1px, transparent 1px);
          background-size: 68px 68px;
          background-position: 0 0, 0 0;
          mask-image: linear-gradient(90deg, transparent, black 45%, black 100%);
          transform: translate3d(calc(var(--hero-shift-x) * 0.3), calc(var(--hero-shift-y) * 0.3), 0);
          animation: heroGridDrift 32s linear infinite;
          transition: transform 400ms ease-out;
          pointer-events: none;
        }

        .heroFlowMap {
          position: absolute;
          inset: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
          overflow: visible;
          transform: translate3d(var(--hero-shift-x), var(--hero-shift-y), 0);
          transition: transform 480ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease;
          pointer-events: none;
          opacity: 0.84;
        }

        .heroFlowLine {
          fill: none;
          stroke: rgba(131, 202, 207, 0.31);
          stroke-width: 1.2;
          stroke-dasharray: 5 18;
          animation: flowDrift 24s linear infinite;
        }

        .heroFlowLineTwo {
          stroke: rgba(255, 196, 116, 0.19);
          stroke-dasharray: 2 17;
          animation-duration: 31s;
          animation-direction: reverse;
        }

        .heroFlowLineThree {
          stroke: rgba(167, 199, 173, 0.15);
          stroke-dasharray: 1 20;
          animation-duration: 38s;
        }

        .heroFlowArrival {
          fill: none;
          stroke: rgba(195, 239, 232, 0.74);
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-dasharray: 280 1800;
          stroke-dashoffset: 1800;
          animation: flowArrival 2200ms 140ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .heroFlowSignal {
          opacity: 0;
          animation: signalAppear 13s ease-in-out infinite;
        }

        .heroFlowSignalCyan { fill: #a5e8e5; filter: drop-shadow(0 0 5px rgba(141, 243, 255, 0.55)); }
        .heroFlowSignalAmber { fill: #f0c98f; filter: drop-shadow(0 0 5px rgba(237, 189, 121, 0.42)); animation-delay: -5s; animation-duration: 17s; }
        .heroFlowSignalSmall { animation-duration: 19s; animation-delay: -7s; }

        .heroFlowPoint {
          fill: #aee5df;
          filter: drop-shadow(0 0 8px rgba(141, 243, 255, 0.65));
          animation: pointBreathe 3.8s ease-in-out infinite alternate;
        }

        .heroFlowPointTwo { animation-delay: 1s; fill: #ffca80; }
        .heroFlowPointThree { animation-delay: 2s; }

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
          padding-block: 38px;
          justify-content: space-between;
          isolation: isolate;
        }

        .heroTopline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(231, 242, 240, 0.12);
          color: rgba(224, 237, 237, 0.54);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          animation: heroLift 600ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .heroWordmark {
          color: #e9f2f2;
          text-decoration: none;
        }

        .heroLayout {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1.1fr);
          align-items: center;
          gap: clamp(40px, 4.5vw, 84px);
          padding: clamp(28px, 5.5vh, 64px) 0 30px;
        }

        .heroCopy {
          max-width: 980px;
        }

        .heroEyebrow {
          display: flex;
          align-items: center;
          gap: 11px;
          margin: 0 0 22px;
          color: #a9d6d3;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          animation: heroLift 600ms 80ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .heroEyebrow > span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ffbf69;
          box-shadow: 0 0 14px rgba(255, 191, 105, 0.6);
        }

        .heroTitle {
          display: grid;
          margin: 0;
          color: #f0f1e9;
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(4.5rem, 9vw, 8.5rem);
          font-weight: 400;
          line-height: 0.91;
          letter-spacing: -0.075em;
          text-wrap: balance;
        }

        .heroTitleLine {
          display: block;
          overflow: hidden;
          padding: 0.04em 0 0.11em 0.025em;
        }

        .heroTitleLine > span {
          display: block;
          transform: translateY(112%);
          animation: titleUnmask 1050ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .heroTitleLine:nth-child(2) > span { animation-delay: 190ms; }

        .heroTitleLineAccent {
          color: #a7d5d0;
        }

        .heroMobileBreak::before { content: " "; }

        .heroSubtitle {
          max-width: 610px;
          margin: 22px 0 0;
          color: #e2e7e2;
          font-size: clamp(1.0625rem, 1.25vw, 1.1875rem);
          line-height: 1.65;
          animation: heroLift 700ms 340ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .heroQuestion {
          max-width: 650px;
          margin: 12px 0 0;
          color: #aebdc0;
          font-size: clamp(1rem, 1.12vw, 1.0625rem);
          line-height: 1.7;
          animation: heroLift 700ms 430ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .heroActions {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
          margin-top: 29px;
          animation: heroLift 700ms 560ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .heroPersonalize {
          display: block;
          margin: 16px 0 0;
          padding: 4px 0;
          border: 0;
          background: transparent;
          color: rgba(207, 222, 220, 0.58);
          font: inherit;
          font-size: 0.72rem;
          text-decoration: underline;
          text-decoration-color: rgba(207, 222, 220, 0.25);
          text-underline-offset: 4px;
          cursor: pointer;
          animation: heroLift 700ms 580ms both cubic-bezier(0.2, 0.75, 0.25, 1);
        }

        .heroPersonalize:hover,
        .heroPersonalize:focus-visible { color: #eef4ee; }

        .heroDataLink {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 48px;
          color: #d1e4e2;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 180ms ease, gap 180ms ease;
        }

        .heroDataLink:hover,
        .heroDataLink:focus-visible { color: #ffca80; gap: 12px; }

        .heroChronology {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          column-gap: 24px;
          width: 100%;
          max-width: 700px;
          padding: 38px 40px 30px;
          border: 1px solid rgba(208, 231, 227, 0.14);
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(229, 246, 242, 0.055), rgba(9, 23, 32, 0.18));
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.14);
          backdrop-filter: blur(8px);
          animation: heroCardArrival 950ms 720ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .heroChronologyHead,
        .heroChronologyBody,
        .heroTimelineNote { grid-column: 1 / -1; }

        .heroChronologyHead {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(231, 242, 240, 0.1);
          color: #9eb5b7;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .heroChronologyHead strong {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #e5eeea;
          font-size: 0.82rem;
          letter-spacing: 0.05em;
        }

        .heroChronologyHead i {
          display: inline-block;
          width: 44px;
          height: 1px;
          background: linear-gradient(90deg, #70bdc0, #edbd79);
          transform-origin: left;
          animation: timelineDraw 900ms 1600ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .heroTimeline {
          position: relative;
          display: grid;
          gap: 0;
          padding: 11px 0 4px;
        }

        .heroChronologyBody {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 30px;
          align-items: center;
        }

        .heroGlobe {
          width: 100%;
          max-width: 290px;
          margin: 0 auto;
          animation: heroGlobeArrival 900ms 1080ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .heroGlobe svg { display: block; width: 100%; overflow: visible; }
        .globeOcean { stroke: rgba(171, 221, 218, 0.42); stroke-width: 1; }
        .globeLatitude,
        .globeMeridian { fill: none; stroke: rgba(173, 215, 213, 0.19); stroke-width: 0.8; }
        .globeLatitudeWide { stroke-dasharray: 2 5; }
        .globeMeridian { transform-box: fill-box; transform-origin: center; }
        .globeMeridianOne { animation: globeMeridianTurn 7s ease-in-out infinite alternate; }
        .globeMeridianTwo { animation: globeMeridianTurn 9s 1s ease-in-out infinite alternate-reverse; }
        .globeLand { fill: rgba(142, 177, 168, 0.42); stroke: rgba(199, 223, 210, 0.42); stroke-width: 0.7; }
        .globeUs { fill: rgba(109, 202, 203, 0.6); stroke: #a4e3df; stroke-width: 1.2; }
        .globeChina { fill: rgba(229, 184, 113, 0.62); stroke: #f0c98f; stroke-width: 1.2; }
        .globeTradeArc { fill: none; stroke: rgba(187, 226, 218, 0.72); stroke-width: 1; stroke-dasharray: 3 4; }
        .globeMarker { fill: #d7f5ee; stroke: rgba(255, 255, 255, 0.75); stroke-width: 1; }
        .globeMarkerChina { fill: #f0c98f; }
        .globeRim { fill: none; stroke: rgba(187, 225, 221, 0.5); stroke-width: 1; }
        .globeOrbit { fill: none; stroke: rgba(141, 216, 220, 0.36); stroke-width: 0.8; stroke-dasharray: 2 6; transform-origin: center; animation: globeOrbitTurn 18s linear infinite; }
        .globeOrbitPoint { fill: #a5e8e5; filter: drop-shadow(0 0 4px rgba(141, 243, 255, 0.6)); }

        .heroGlobe figcaption {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin-top: 4px;
          color: #b5cac7;
          font-size: 0.61rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .heroGlobe figcaption i { width: 16px; border-top: 1px dashed rgba(187, 226, 218, 0.62); }

        .heroTimelineTrack {
          position: absolute;
          top: 26px;
          bottom: 24px;
          left: 5px;
          width: 1px;
          background: rgba(156, 206, 202, 0.2);
          transform: scaleY(0);
          transform-origin: top;
          animation: timelineDrawVertical 800ms 1600ms forwards cubic-bezier(0.22, 1, 0.36, 1);
        }

        .heroTimelineSignal {
          position: absolute;
          z-index: 2;
          top: 10%;
          left: 3px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #a5e8e5;
          box-shadow: 0 0 7px rgba(141, 243, 255, 0.5);
          opacity: 0;
          animation: timelineSignalVertical 8.5s 2.1s linear infinite;
        }

        .heroMilestone {
          position: relative;
          display: grid;
          grid-template-columns: 12px 1fr;
          gap: 14px;
          align-items: start;
          padding: 20px 0;
          color: #e5eeea;
          opacity: 0;
          animation: heroLift 560ms calc(1840ms + var(--milestone-index) * 130ms) forwards cubic-bezier(0.22, 1, 0.36, 1);
        }

        .heroMilestoneDot {
          position: relative;
          z-index: 1;
          width: 11px;
          height: 11px;
          margin-top: 4px;
          border: 2px solid #91c7c3;
          border-radius: 50%;
          background: #0a1721;
          box-shadow: 0 0 0 4px rgba(145, 199, 195, 0.07);
        }

        .heroMilestone-tariff .heroMilestoneDot { border-color: #edbd79; }
        .heroMilestone-supply .heroMilestoneDot { border-color: #83c8cd; }
        .heroMilestone-adjustment .heroMilestoneDot { border-color: #a5d6b3; }
        .heroMilestone-review .heroMilestoneDot { border-color: #d1d5be; }

        .heroMilestone > div {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: baseline;
        }

        .heroMilestone strong {
          color: #f0c98f;
          font-size: 0.96rem;
          letter-spacing: 0.1em;
        }

        .heroMilestone > div > span {
          color: #b8c9c8;
          font-size: 0.92rem;
          text-align: right;
        }

        .heroTimelineNote {
          margin: 10px 0 0;
          padding-top: 14px;
          border-top: 1px solid rgba(231, 242, 240, 0.1);
          color: #83999b;
          font-size: 0.8rem;
          line-height: 1.6;
        }

        .heroScrollCue {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          align-self: flex-start;
          padding: 10px 0 4px;
          border: 0;
          background: transparent;
          color: rgba(200, 219, 216, 0.55);
          font: inherit;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
        }

        .heroScrollCue > span {
          width: 20px;
          height: 1px;
          background: #edbd79;
          transform-origin: left;
          animation: scrollCueDraw 3.8s 1.4s ease-in-out infinite;
        }

        .heroScrollCue:hover,
        .heroScrollCue:focus-visible { color: #eef4ee; }

        .customizeShell {
          padding: 48px 0;
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

        .enterButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin: 0;
          width: fit-content;
          min-height: 56px;
          padding: 0 24px;
          border: 1px solid rgba(191, 222, 213, 0.35);
          background: rgba(171, 218, 205, 0.1);
          color: #eef5ee;
          font-size: 0.76rem;
          letter-spacing: 0.11em;
          cursor: pointer;
        }

        .heroActions .enterButton:hover,
        .heroActions .enterButton:focus-visible {
          transform: translateY(-2px);
          border-color: rgba(237, 189, 121, 0.65);
          background: rgba(171, 218, 205, 0.16);
        }

        .heroActions .enterButton > span {
          color: #edbd79;
          font-size: 1rem;
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
        .navLink {
          color: #ecf4ff;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .navLink {
          display: inline-flex;
          min-height: 36px;
          align-items: center;
          padding: 0 9px;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-weight: 650;
          letter-spacing: 0.045em;
          white-space: nowrap;
          transition: color var(--motion-fast) var(--ease-standard), background var(--motion-fast) var(--ease-standard);
        }

        .navLink:hover,
        .navLink:focus-visible {
          color: var(--foreground);
          background: rgba(221, 237, 239, 0.07);
        }

        .navLink:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
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
          overflow: visible;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
        }

        .siteTickerTrack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 30px;
          padding: 14px max(36px, calc((100vw - 1480px) / 2));
        }

        .siteTickerTrack span {
          display: inline-block;
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
          font-size: var(--type-section);
          font-weight: 500;
          line-height: 1.08;
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
          padding: var(--space-6); border: 1px solid var(--line); border-radius: var(--radius-lg);
          background: rgba(255,255,255,.025);
          color: inherit; text-decoration: none; transition: transform var(--motion-standard) var(--ease-standard), border-color var(--motion-standard) var(--ease-standard), background var(--motion-standard) var(--ease-standard);
        }
        .toolkitCard:hover, .toolkitCard:focus-visible { transform: translateY(-2px); border-color: var(--line-strong); background: rgba(255,255,255,.045); }
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
          border-radius: var(--radius-lg);
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.035);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.14);
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
          padding: var(--space-6);
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
          gap: clamp(24px, 3vw, 44px);
          margin-bottom: clamp(34px, 5vw, 64px);
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
          margin-top: 14px;
          padding: 14px 10px 14px 0;
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
          gap: 14px;
          padding: 17px 12px 17px 2px;
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

        .projectsSection { padding-top: clamp(88px, 10vw, 144px); }

        .projectsIntro {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
          column-gap: clamp(28px, 6vw, 88px);
          align-items: end;
          margin-bottom: clamp(42px, 5vw, 68px);
        }

        .projectsIntro .kicker { grid-column: 1 / -1; }
        .projectsIntro h2 {
          max-width: 15ch;
          margin: 10px 0 0;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 500;
          line-height: 1.02;
        }
        .projectsIntro > p:last-child {
          max-width: 58ch;
          margin: 0;
          color: #adbdc5;
          font-size: 1rem;
          line-height: 1.8;
        }

        .projectGrid {
          display: grid;
          grid-template-columns: 1fr;
          border-top: 1px solid rgba(221, 237, 239, 0.16);
        }

        .projectCard {
          display: grid;
          grid-template-columns: 72px 144px minmax(0, 1fr) 136px;
          align-items: center;
          gap: clamp(26px, 3vw, 44px);
          min-height: 176px;
          padding: 22px 18px;
          border: 0;
          border-bottom: 1px solid rgba(221, 237, 239, 0.14);
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          color: inherit;
          text-decoration: none;
          transition: background 180ms ease, padding 180ms ease;
        }

        .projectCard:hover,
        .projectCard:focus-visible {
          padding-inline: 24px 12px;
          border-color: rgba(221, 237, 239, 0.2);
          background: rgba(208, 231, 227, 0.045);
          transform: none;
        }

        .projectNumber {
          color: #a8d9d6;
          font-family: var(--font-display), Georgia, serif;
          font-size: 2.35rem;
          line-height: 1;
        }

        .projectYears {
          color: #aab8c0;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .projectCopy { min-width: 0; }
        .projectCard h3 {
          margin: 0 0 7px;
          color: #eff3ed;
          font-size: clamp(1.35rem, 2vw, 1.8rem);
          font-weight: 500;
          line-height: 1.15;
        }
        .projectCard p {
          max-width: 75ch;
          margin: 0;
          color: #adbdc5;
          font-size: 0.95rem;
          line-height: 1.75;
        }

        .projectAction {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          color: #c6dfdb;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .projectAction i {
          color: #e8bb78;
          font-size: 1rem;
          font-style: normal;
          transition: transform 180ms ease;
        }
        .projectCard:hover .projectAction i,
        .projectCard:focus-visible .projectAction i { transform: translate(2px, -2px); }

        .chartShell {
          margin-top: 18px;
        }

        @keyframes titleUnmask {
          from { opacity: 0.25; transform: translateY(112%); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroOpeningBloom {
          0% { opacity: 0; transform: scale(0.82); }
          48% { opacity: 0.9; }
          100% { opacity: 0.28; transform: scale(1.08); }
        }

        @keyframes heroCardArrival {
          from { opacity: 0; transform: translateY(22px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes heroGlobeArrival {
          from { opacity: 0; transform: translateY(12px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes globeMeridianTurn {
          from { transform: scaleX(1); }
          to { transform: scaleX(0.2); }
        }

        @keyframes globeOrbitTurn {
          to { transform: rotate(360deg); }
        }

        @keyframes heroLift {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes timelineDraw {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes timelineDrawVertical {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }

        @keyframes flowDrift {
          to { stroke-dashoffset: -160; }
        }

        @keyframes flowArrival {
          0% { opacity: 0; stroke-dashoffset: 1800; }
          14% { opacity: 0.9; }
          78% { opacity: 0.75; }
          100% { opacity: 0; stroke-dashoffset: 0; }
        }

        @keyframes heroGridDrift {
          to { background-position: 10px 8px, 10px 8px; }
        }

        @keyframes signalAppear {
          0%, 8%, 84%, 100% { opacity: 0; }
          18%, 70% { opacity: 0.9; }
        }

        @keyframes timelineSignalVertical {
          0% { top: 10%; opacity: 0; }
          8% { opacity: 0.9; }
          90% { opacity: 0.9; }
          100% { top: 90%; opacity: 0; }
        }

        @keyframes timelineSignalHorizontal {
          0% { left: 8px; opacity: 0; }
          8% { opacity: 0.9; }
          90% { opacity: 0.9; }
          100% { left: calc(100% - 8px); opacity: 0; }
        }

        @keyframes scrollCueDraw {
          0%, 100% { transform: scaleX(0.65); }
          48%, 64% { transform: scaleX(1.35); }
        }

        @keyframes pointBreathe {
          from { opacity: 0.42; transform: scale(0.82); }
          to { opacity: 0.92; transform: scale(1.18); }
        }

        @keyframes riseIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sourceCardIn {
          to {
            opacity: 1;
            transform: translateX(0);
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
          .projectsIntro,
          .toolkitGrid {
            grid-template-columns: 1fr;
          }

          .projectsIntro { row-gap: 12px; }
          .projectsIntro .kicker { grid-column: 1; }
          .projectsIntro > p:last-child { margin-top: 4px; }

          .topbarInner {
            flex-direction: column;
            align-items: flex-start;
          }

          .heroLayout {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: clamp(30px, 5vh, 52px) 0 24px;
          }

          .heroChronology {
            max-width: none;
          }

          .projectCard {
            grid-template-columns: 54px 120px minmax(0, 1fr) 112px;
            gap: 16px;
            min-height: 154px;
          }

          .heroFlowArrival { display: none; }

          .heroTimeline {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 10px;
            padding-top: 18px;
          }

          .heroTimelineTrack {
            top: 24px;
            right: 8px;
            bottom: auto;
            left: 8px;
            width: auto;
            height: 1px;
            transform: scaleX(0);
            transform-origin: left;
            animation-name: timelineDraw;
          }

          .heroMilestone {
            grid-template-columns: 12px 1fr;
            gap: 8px;
            align-items: start;
            padding: 10px 2px;
          }

          .heroMilestone > div {
            align-items: flex-start;
            flex-direction: column;
            gap: 5px;
          }

          .heroMilestone > div > span {
            min-height: 2.4em;
            text-align: left;
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

        @media (min-width: 641px) and (max-width: 980px) {
          .heroFlowSignalSmall,
          .heroFlowSignalAmber { display: none; }

          .heroTimelineSignal {
            top: 21px;
            left: 8px;
            animation-name: timelineSignalHorizontal;
          }
        }

        @media (min-width: 981px) and (max-width: 1280px) {
          .heroTitle { font-size: clamp(4rem, 8.5vw, 7rem); }
        }

        @media (min-width: 1121px) and (max-height: 940px) {
          .introInner { --hero-shell-padding: 18px; }
          .heroLayout { padding: clamp(18px, 3vh, 26px) 0 16px; }
          .heroTitle { font-size: clamp(4.25rem, 7vw, 7rem); }
          .heroTitleLine { padding-block: 0.02em 0.07em; }
          .heroChronology { padding: 24px 28px 18px; }
          .heroMilestone { padding-block: 13px; }
          .heroActions { margin-top: 22px; }
          .heroPersonalize { margin-top: 10px; }
        }

        @media (max-width: 640px) {
          .introInner {
            --intro-shell-gutter: 32px;
            --hero-shell-padding: 20px;
          }

          .heroTopline { padding-bottom: 12px; }
          .heroTopline > span { display: none; }

          .heroLayout {
            gap: 22px;
            padding: 26px 0 18px;
          }

          .heroEyebrow {
            margin-bottom: 15px;
            font-size: 0.57rem;
            letter-spacing: 0.16em;
          }

          .heroTitle {
            font-size: clamp(2.25rem, 10.6vw, 3.55rem);
            line-height: 0.96;
            letter-spacing: -0.07em;
          }

          .heroMobileBreak {
            display: block;
          }

          .heroMobileBreak::before { content: none; }

          .heroSubtitle {
            margin-top: 16px;
            font-size: 0.96rem;
          }

          .heroQuestion {
            margin-top: 9px;
            font-size: 0.84rem;
            line-height: 1.6;
          }

          .heroActions {
            gap: 18px;
            margin-top: 20px;
          }

          .heroActions .enterButton {
            min-height: 48px;
            padding: 0 17px;
            font-size: 0.63rem;
            letter-spacing: 0.1em;
          }

          .heroDataLink { font-size: 0.67rem; }
          .heroPersonalize { margin-top: 10px; font-size: 0.68rem; }

          .heroChronology {
            padding: 13px 14px 11px;
            border-radius: 14px;
          }

          .heroChronologyBody {
            grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
            gap: 12px;
          }

          .heroGlobe { max-width: 132px; }
          .heroGlobe figcaption { gap: 4px; font-size: 0.52rem; letter-spacing: 0.035em; }
          .heroGlobe figcaption i { width: 10px; }

          .heroChronologyHead {
            padding-bottom: 10px;
            font-size: 0.58rem;
          }

          .heroChronologyHead i { width: 22px; }

          .heroTimeline { grid-template-columns: 1fr; gap: 0; padding: 7px 0 0; }

          .heroTimelineTrack,
          .heroTimelineSignal { display: none; }

          .heroMilestone {
            grid-template-columns: 9px 1fr;
            gap: 7px;
            padding: 8px 0;
          }

          .heroMilestoneDot {
            width: 8px;
            height: 8px;
            margin-top: 4px;
            border-width: 1px;
          }

          .heroMilestone strong { font-size: 0.67rem; }
          .heroMilestone > div > span { min-height: 0; font-size: 0.61rem; }
          .heroMilestone > div { align-items: baseline; flex-direction: row; justify-content: space-between; }
          .heroMilestone > div > span { text-align: right; }
          .heroTimelineNote { margin-top: 6px; padding-top: 9px; font-size: 0.59rem; }
          .heroScrollCue { font-size: 0.56rem; }
          .heroFlowMap { opacity: 0.38; }
          .heroFlowSignalAmber,
          .heroFlowSignalSmall { display: none; }
          .heroFlowArrival { display: none; }

          .projectCard {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 8px 14px;
            min-height: 0;
            padding: 20px 8px;
          }
          .projectCard:hover,
          .projectCard:focus-visible { padding-inline: 12px 4px; }
          .projectNumber { grid-column: 1; grid-row: 1; font-size: 1.8rem; }
          .projectYears { grid-column: 2; grid-row: 1; }
          .projectCopy { grid-column: 1 / -1; }
          .projectAction { grid-column: 1 / -1; justify-self: start; }

          .shell {
            width: min(100% - 28px, 1580px);
          }

          .section {
            padding-top: 56px;
          }

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
          .heroTitleLine > span { opacity: 1; transform: none; animation: none; }
          .heroMilestone { opacity: 1; transform: none; animation: none; }
          .heroFlowLine, .heroFlowPoint, .heroChronologyHead i, .heroScrollCue > span { animation: none; }
          .heroFlowArrival { animation: none; opacity: 0; }
          .heroTimelineTrack { transform: none; animation: none; }
          .heroTimelineSignal, .heroFlowSignal { display: none; }
          .heroFlowMap animateMotion { display: none; }
          .heroGlobe animateMotion { display: none; }
          .heroGrid { animation: none; transform: none; }
          .heroAtmosphere::before { animation: none; opacity: 0.28; transform: none; }
          .heroFlowMap { transform: none; }
        }
      `}</style>
    </main>
  );
}
