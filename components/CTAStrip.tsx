'use client'

const team = [
  {
    name: 'Ayushkant Behera',
    email: 'ayushkantworks@gmail.com',
    initials: 'AB',
    color: '#7c5cfc',
    bg: 'rgba(124,92,252,0.12)',
  },
  {
    name: 'Hitesh Kumar Nayak',
    email: 'kumarnayakhitesh@gmail.com',
    initials: 'HN',
    color: '#c8f25e',
    bg: 'rgba(200,242,94,0.1)',
  },
]

export default function CTAStrip() {
  return (
    <>
      <style>{`
        .contact-outer {
          position: relative;
          z-index: 1;
          padding: 0 var(--px) 4rem;
          max-width: var(--max-w);
          margin: 0 auto;
        }
        .contact-box {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2.5rem 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .contact-box::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 220px; height: 220px;
          background: var(--accent2);
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.1;
          pointer-events: none;
        }
        .contact-box::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 220px; height: 220px;
          background: var(--accent1);
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.07;
          pointer-events: none;
        }
        .contact-label {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--accent4);
          margin-bottom: 0.6rem;
          position: relative; z-index: 1;
        }
        .contact-title {
          font-family: var(--font-display);
          font-size: 1.7rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 0.5rem;
          color: var(--text);
          position: relative; z-index: 1;
        }
        .contact-sub {
          color: var(--muted);
          font-size: 0.88rem;
          margin-bottom: 2rem;
          position: relative; z-index: 1;
        }
        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-width: 420px;
          margin: 0 auto;
          position: relative; z-index: 1;
        }
        .contact-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1rem 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.9rem;
          text-align: left;
          transition: border-color 0.25s, background 0.25s;
        }
        .contact-card:hover {
          border-color: rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
        }
        .avatar {
          width: 40px; height: 40px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display);
          font-size: 0.82rem;
          font-weight: 800;
          flex-shrink: 0;
        }
        .contact-name {
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.15rem;
        }
        .contact-email {
          font-size: 0.8rem;
          color: var(--muted);
          word-break: break-all;
        }
        .contact-email a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s;
        }
        .contact-email a:hover { color: var(--text); }

        @media (min-width: 640px) {
          .contact-box { padding: 3rem 2.5rem; }
          .contact-title { font-size: 2rem; }
          .contact-cards { flex-direction: row; max-width: 600px; }
          .contact-card { flex: 1; }
        }
      `}</style>

      <div className="contact-outer">
        <div className="contact-box">
          <p className="contact-label">get in touch</p>
          <h2 className="contact-title">Contact Us 👋</h2>
          <p className="contact-sub">Got questions, ideas, or just wanna say hi? We&apos;re right here.</p>

          <div className="contact-cards">
            {team.map((member) => (
              <div key={member.email} className="contact-card">
                <div
                  className="avatar"
                  style={{ background: member.bg, color: member.color }}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="contact-name">{member.name}</p>
                  <p className="contact-email">
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
