'use client'

export default function DownloadPage() {
  return (
    <>
      <style>{`
        .dl-container {
          min-height: 100vh;
          background-color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'Exo 2', 'Rajdhani', sans-serif;
        }
        .dl-grid {
          display: flex;
          gap: 32px;
          max-width: 800px;
          width: 100%;
        }
        .dl-card {
          flex: 1;
          border: 1px solid rgba(74, 222, 128, 0.3);
          border-radius: 16px;
          padding: 40px 32px;
          background-color: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }
        .dl-title {
          color: #4ade80;
          font-size: 16px;
          font-weight: 700;
          text-align: center;
          letter-spacing: 0.05em;
          margin: 0;
        }
        .dl-capsule {
          width: 80px;
          height: auto;
          margin: 8px 0 16px 0;
          object-fit: contain;
        }
        .dl-btn {
          display: block;
          width: 100%;
          background-color: #000;
          border: 1px solid rgba(74, 222, 128, 0.25);
          border-radius: 10px;
          padding: 20px 16px;
          text-align: center;
          color: #4ade80;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .dl-btn-active:hover {
          border-color: #4ade80;
          box-shadow: 0 0 20px rgba(74, 222, 128, 0.15);
        }
        .dl-btn-disabled {
          opacity: 0.4;
          cursor: default;
        }
        @media (max-width: 640px) {
          .dl-grid {
            flex-direction: column;
          }
        }
      `}</style>
      <div className="dl-container">
        <div className="dl-grid">
          {/* Achieve Card */}
          <div className="dl-card">
            <h2 className="dl-title">Mother Vegetable Achieve</h2>
            <img
              src="/achieve-capsule.png"
              alt="Achieve Capsule"
              className="dl-capsule"
            />
            <a href="#" className="dl-btn dl-btn-disabled" onClick={(e) => e.preventDefault()}>
              English
            </a>
            <a
              href="/achieve-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="dl-btn dl-btn-active"
            >
              日本語
            </a>
          </div>

          {/* Confidence Card */}
          <div className="dl-card">
            <h2 className="dl-title">Mother Vegetable Confidence</h2>
            <img
              src="/confidence-capsule.png"
              alt="Confidence Capsule"
              className="dl-capsule"
            />
            <a href="#" className="dl-btn dl-btn-disabled" onClick={(e) => e.preventDefault()}>
              English
            </a>
            <a
              href="/confidence-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="dl-btn dl-btn-active"
            >
              日本語
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
