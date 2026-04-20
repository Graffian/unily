export default function Blobs() {
  return (
    <>
      <style>{`
        @keyframes drift1 {
          from { transform: translate(0, 0); }
          to { transform: translate(30px, 40px); }
        }
        @keyframes drift2 {
          from { transform: translate(0, 0); }
          to { transform: translate(-40px, 25px); }
        }
        .blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.1;
          pointer-events: none;
          z-index: 0;
        }
        .blob1 {
          width: 380px; height: 380px;
          background: var(--accent2);
          top: -120px; left: -80px;
          animation: drift1 14s ease-in-out infinite alternate;
        }
        .blob2 {
          width: 300px; height: 300px;
          background: var(--accent1);
          top: 40%; right: -100px;
          animation: drift2 18s ease-in-out infinite alternate;
        }
        .blob3 {
          width: 280px; height: 280px;
          background: var(--accent3);
          bottom: 0; left: 25%;
          animation: drift1 20s ease-in-out infinite alternate;
        }
        @media (max-width: 640px) {
          .blob1 { width: 220px; height: 220px; }
          .blob2 { width: 180px; height: 180px; }
          .blob3 { width: 160px; height: 160px; }
        }
      `}</style>
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />
    </>
  )
}
