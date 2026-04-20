'use client'

export default function Hero() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }

        .hero {
          position: relative;
          z-index: 1;
          padding: 5rem var(--px) 4rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(200, 242, 94, 0.1);
          border: 1px solid rgba(200, 242, 94, 0.25);
          padding: 0.35rem 1rem;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--accent1);
          margin-bottom: 1.75rem;
          letter-spacing: 0.04em;
          animation: fadeUp 0.6s ease both;
        }
        .hero-badge::before {
          content: '';
          width: 6px; height: 6px;
          background: var(--accent1);
          border-radius: 50%;
          display: inline-block;
          animation: pulse 1.5s ease-in-out infinite;
        }

        .hero-h1 {
          font-family: var(--font-display);
          font-size: 2.4rem;
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -1px;
          margin-bottom: 1.25rem;
          animation: fadeUp 0.7s 0.1s ease both;
          max-width: 520px;
        }
        .hero-h1 .grad {
          display: block;
          background: linear-gradient(90deg, var(--accent2), var(--accent3), var(--accent1));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-sub {
          font-size: 0.98rem;
          color: var(--muted);
          max-width: 380px;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          font-weight: 400;
          animation: fadeUp 0.7s 0.2s ease both;
        }

        .cta-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
          animation: fadeUp 0.7s 0.35s ease both;
        }

        .btn-waitlist {
          background: var(--accent1);
          color: #0a0a0f;
          border: none;
          font-family: var(--font-display);
          font-size: 0.92rem;
          font-weight: 700;
          padding: 0.75rem 1.75rem;
          border-radius: 100px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .btn-waitlist:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 30px rgba(200,242,94,0.25);
        }
        .btn-waitlist:active { transform: scale(0.97); }

        .btn-learn {
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
          font-family: var(--font-body);
          font-size: 0.88rem;
          padding: 0.75rem 1.5rem;
          border-radius: 100px;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .btn-learn:hover {
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.04);
        }

        .hero-stats {
          margin-top: 3.5rem;
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
          animation: fadeUp 0.7s 0.5s ease both;
          border-top: 1px solid var(--border);
          padding-top: 2rem;
          width: 100%;
          max-width: 420px;
        }
        .stat { text-align: center; }
        .stat strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text);
          line-height: 1;
          margin-bottom: 0.2rem;
        }
        .stat span {
          font-size: 0.7rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        @media (min-width: 768px) {
          .hero-h1 { font-size: 3.2rem; letter-spacing: -1.5px; max-width: 560px; }
          .hero-sub { font-size: 1.05rem; max-width: 420px; }
          .hero-stats { max-width: 500px; gap: 3rem; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-badge">made for students, by students</div>

        <h1 className="hero-h1">
          Your whole college
          <span className="grad">in one place.</span>
        </h1>

        <p className="hero-sub">
          The super-app your campus never had. Sell stuff, get assignments done, find your squad — all in one tap.
        </p>

        <div className="cta-wrap">
          <button className="btn-waitlist">🔥 Join the Waitlist</button>
          <button className="btn-learn" onClick={scrollToFeatures}>See what&apos;s inside ↓</button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <strong>3</strong>
            <span>features</span>
          </div>
          <div className="stat">
            <strong>∞</strong>
            <span>connections</span>
          </div>
          <div className="stat">
            <strong>1</strong>
            <span>app</span>
          </div>
        </div>
      </section>
    </>
  )
}
