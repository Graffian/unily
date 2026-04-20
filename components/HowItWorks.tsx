'use client'

const steps = [
  {
    num: '01',
    title: 'Sign up with your college email',
    desc: 'Verified students only. No bots, no randos, no sus accounts.',
  },
  {
    num: '02',
    title: 'Pick what you need today',
    desc: 'Buy, sell, get help, find a crew — your campus, your call.',
  },
  {
    num: '03',
    title: 'Chat, meet, make it happen',
    desc: 'In-app messaging, tap to connect. IRL moments start here.',
  },
]

export default function HowItWorks() {
  return (
    <>
      <style>{`
        .how-section {
          position: relative;
          z-index: 1;
          padding: 4rem var(--px);
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }
        .how-title {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 0.65rem;
          line-height: 1.1;
          color: var(--text);
        }
        .how-sub {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.65;
          margin-bottom: 2rem;
        }
        .steps {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          text-align: left;
        }
        .step {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1rem 1.1rem;
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
          transition: border-color 0.25s;
        }
        .step:hover { border-color: rgba(124,92,252,0.35); }
        .step-num {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--accent2);
          min-width: 1.8rem;
          line-height: 1;
          padding-top: 2px;
        }
        .step-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 0.15rem;
          color: var(--text);
        }
        .step-desc {
          font-size: 0.82rem;
          color: var(--muted);
          line-height: 1.5;
        }

        @media (min-width: 640px) {
          .how-title { font-size: 2.2rem; }
        }
      `}</style>

      <section className="how-section">
        <p className="sec-label" style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--accent2)', marginBottom: '0.6rem' }}>
          the vibe
        </p>
        <h2 className="how-title">Dorm to done.<br />That fast.</h2>
        <p className="how-sub">
          Built mobile-first. Unily lives in your pocket, moves with you.
        </p>

        <div className="steps">
          {steps.map((s) => (
            <div key={s.num} className="step">
              <span className="step-num">{s.num}</span>
              <div>
                <p className="step-title">{s.title}</p>
                <p className="step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
