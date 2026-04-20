'use client'

const features = [
  {
    icon: '🛒',
    tagline: 'Campus Marketplace',
    heading: 'Sell it. Cop it.\nKeep the bag.',
    desc: 'Your campus flea market, but make it digital. List your old laptop, textbooks, or that hoodie you wore twice. Real students, real deals — no sketchy strangers.',
    pills: ['Instant chat', 'College verified', 'Zero commission'],
    cls: 'card-market',
  },
  {
    icon: '✍️',
    tagline: 'Assignment Help',
    heading: 'Deadline at 11:59?\nWe got you fr.',
    desc: 'Connect with students who love to write (yes, they exist). Post your assignment, find your match, get it done. Both of you win — no judgment.',
    pills: ['Browse writers', 'Secure pay', 'Fast matching'],
    cls: 'card-assign',
  },
  {
    icon: '🎉',
    tagline: 'Squad Finder',
    heading: 'Plans cancelled?\nNot anymore.',
    desc: 'Friends bailed again? Post where you wanna go, find your people across colleges, and actually go. No more FOMO, no more solo Saturdays.',
    pills: ['Tap to join', 'In-app chat', 'Any college'],
    cls: 'card-events',
  },
]

export default function Features() {
  return (
    <>
      <style>{`
        .features-section {
          position: relative;
          z-index: 1;
          padding: 4rem 0;
        }
        .features-header {
          text-align: center;
          margin-bottom: 2.5rem;
          padding: 0 var(--px);
        }
        .sec-label {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--accent2);
          margin-bottom: 0.6rem;
        }
        .sec-title {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          line-height: 1.1;
          color: var(--text);
        }

        .feature-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          padding: 0 var(--px);
          max-width: var(--max-w);
          margin: 0 auto;
        }

        .feature-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.4rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s, border-color 0.25s;
        }
        .feature-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.12);
        }
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
        }
        .card-market::before { background: linear-gradient(90deg, var(--accent1), #6ee7a0); }
        .card-assign::before { background: linear-gradient(90deg, var(--accent2), var(--accent3)); }
        .card-events::before { background: linear-gradient(90deg, var(--accent4), var(--accent2)); }

        .f-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem;
          margin-bottom: 0.85rem;
        }
        .card-market .f-icon { background: rgba(200,242,94,0.12); }
        .card-assign .f-icon { background: rgba(124,92,252,0.15); }
        .card-events .f-icon { background: rgba(52,210,200,0.12); }

        .f-tag {
          font-size: 0.68rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.35rem;
        }
        .card-market .f-tag { color: var(--accent1); }
        .card-assign .f-tag { color: var(--accent2); }
        .card-events .f-tag { color: var(--accent4); }

        .f-heading {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 800;
          margin-bottom: 0.55rem;
          line-height: 1.2;
          white-space: pre-line;
          color: var(--text);
        }
        .f-desc {
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.6;
        }
        .pill-row {
          margin-top: 1.1rem;
          display: flex; gap: 0.4rem; flex-wrap: wrap;
        }
        .pill {
          font-size: 0.67rem;
          font-weight: 500;
          padding: 0.22rem 0.65rem;
          border-radius: 100px;
          border: 1px solid var(--border);
          color: var(--muted);
        }

        @media (min-width: 640px) {
          .sec-title { font-size: 2.2rem; }
          .feature-grid { grid-template-columns: 1fr 1fr; }
          .feature-grid > :last-child {
            grid-column: 1 / -1;
            max-width: 460px;
            margin: 0 auto;
            width: 100%;
          }
        }
        @media (min-width: 900px) {
          .feature-grid { grid-template-columns: repeat(3, 1fr); }
          .feature-grid > :last-child {
            grid-column: auto;
            max-width: none;
          }
        }
      `}</style>

      <section id="features" className="features-section">
        <div className="features-header">
          <p className="sec-label">what&apos;s in the app</p>
          <h2 className="sec-title">Three features.<br />Zero boring days.</h2>
        </div>

        <div className="feature-grid">
          {features.map((f) => (
            <div key={f.cls} className={`feature-card ${f.cls}`}>
              <div className="f-icon">{f.icon}</div>
              <p className="f-tag">{f.tagline}</p>
              <h3 className="f-heading">{f.heading}</h3>
              <p className="f-desc">{f.desc}</p>
              <div className="pill-row">
                {f.pills.map((pill) => (
                  <span key={pill} className="pill">{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
