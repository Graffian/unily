export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          position: relative;
          z-index: 1;
          border-top: 1px solid var(--border);
        }
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding: 1.5rem var(--px);
          max-width: var(--max-w);
          margin: 0 auto;
        }
        .footer-logo {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--text);
        }
        .footer-logo span { color: var(--accent1); }
        .footer-copy {
          font-size: 0.78rem;
          color: var(--muted);
        }
      `}</style>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">uni<span>ly</span></div>
          <p className="footer-copy">© 2025 Unily · Built for college life ✦</p>
        </div>
      </footer>
    </>
  )
}
