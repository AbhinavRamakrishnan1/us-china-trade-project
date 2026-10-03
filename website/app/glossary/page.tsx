import Link from "next/link";
import GlossaryBrowser from "./GlossaryBrowser";

export default function GlossaryPage() {
  return <main className="glossary-page">
    <header className="glossary-topbar"><Link href="/">Trade Shock Observatory</Link><Link href="/">Back to observatory</Link></header>
    <div className="glossary-content">
      <p className="glossary-kicker">Economics Glossary</p>
      <h1>Clear terms.<br /><span>Careful claims.</span></h1>
      <p className="glossary-intro">A working reference for the trade, policy, and supply-chain language used across this research project. Definitions are intentionally concise; terms with multiple conventions are flagged rather than treated as universal.</p>
      <GlossaryBrowser />
      <footer className="glossary-footer"><Link href="/">← Back to the observatory</Link><Link href="/data">Review data and sources →</Link></footer>
    </div>
    <style>{`
      .glossary-page{min-height:100vh;background:var(--background);color:var(--foreground)}
      .glossary-topbar{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;gap:16px;padding:16px max(24px,calc((100vw - 1120px)/2));border-bottom:1px solid var(--line);background:rgba(8,14,20,.94);font-size:.78rem;letter-spacing:.02em}
      .glossary-topbar a,.glossary-footer a{color:inherit;text-decoration:none;transition:color var(--motion-fast) var(--ease-standard)}
      .glossary-topbar a:hover,.glossary-footer a:hover{color:var(--accent)}
      .glossary-content{width:min(1120px,calc(100% - 40px));margin:0 auto;padding:72px 0 56px}
      .glossary-kicker{color:var(--accent);font-size:var(--type-meta);font-weight:700;letter-spacing:.14em}
      .glossary-content h1{font-size:clamp(3.25rem,8vw,6.5rem);font-weight:500;line-height:.94;letter-spacing:-.05em}
      .glossary-content h1 span{color:var(--accent)}
      .glossary-intro{color:var(--text-secondary);font-size:1.05rem;line-height:1.75}
      .glossary-controls{border-color:var(--line);border-radius:var(--radius-lg);background:var(--panel)}
      .glossary-search{color:var(--text-secondary);font-size:.78rem;letter-spacing:.08em}
      .glossary-search input{min-height:44px;border-color:var(--line-strong);border-radius:var(--radius-sm);background:var(--panel-raised);color:var(--foreground)}
      .glossary-categories button{border-color:var(--line-strong);border-radius:var(--radius-sm);color:var(--text-secondary);transition:color var(--motion-fast) var(--ease-standard),border-color var(--motion-fast) var(--ease-standard),background var(--motion-fast) var(--ease-standard)}
      .glossary-categories button[aria-pressed=true]{border-color:var(--accent);background:rgba(141,216,220,.1);color:var(--foreground)}
      .glossary-entry{padding:18px 20px;border-color:var(--line);border-radius:var(--radius-md);background:rgba(255,255,255,.025)}
      .glossary-entry span{color:var(--accent);font-size:var(--type-meta);letter-spacing:.1em}
      .glossary-entry h2{font-size:1rem;font-weight:600}
      .glossary-entry p{color:var(--text-secondary);font-size:.9rem;line-height:1.7}
      .glossary-entry a{color:var(--accent);font-size:.78rem}
      .glossary-empty{color:var(--text-secondary)}
      .glossary-footer{border-color:var(--line)}
      @media(max-width:720px){.glossary-content{padding-top:54px}.glossary-controls{top:58px}.glossary-entry{grid-template-columns:1fr;gap:8px}.glossary-footer{flex-direction:column}}
    `}</style>
  </main>;
}
