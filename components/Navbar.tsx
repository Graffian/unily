'use client'

export default function Navbar() {
  return (
    <>
      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 10;
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(12px);
          background: rgba(10,10,15,0.7);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem var(--px);
          max-width: var(--max-w);
          margin: 0 auto;
        }
        .nav-logo {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--text);
        }
        .nav-logo span { color: var(--accent1); }
        .nav-tag {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          border: 1px solid var(--border);
          padding: 0.35rem 0.9rem;
          border-radius: 100px;
        }
      `}</style>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo">uni<span>ly</span></div>
          <div className="nav-tag">Beta soon</div>
        </div>
      </nav>
    </>
  )
}
