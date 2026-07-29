import React from 'react';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Left Brand & Copyright */}
        <div className="footer-left">
          <span className="footer-logo font-display">
            SAWAD<span className="text-accent">.</span>
          </span>
          <p className="footer-copy font-mono">
            © {new Date().getFullYear()} Muhammed Sawad K. All rights reserved.
          </p>
        </div>

        {/* Center Social SVG Icons */}
        <div className="footer-social-icons">
          {/* GitHub */}
          <a 
            href={personalDetails.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-icon-btn gh"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a 
            href={personalDetails.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-icon-btn li"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a 
            href={personalDetails.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-icon-btn insta"
            aria-label="Instagram Profile"
            title="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a 
            href={personalDetails.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-icon-btn wa"
            aria-label="WhatsApp Contact"
            title="WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.332 5.006l-1.416 5.17 5.294-1.388c1.463.797 3.111 1.218 4.776 1.219h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.668-1.038-5.176-2.925-7.062a9.925 9.925 0 0 0-7.064-2.947zm.003 1.677a8.28 8.28 0 0 1 5.886 2.454 8.272 8.272 0 0 1 2.44 5.886c0 4.582-3.727 8.31-8.31 8.31a8.27 8.27 0 0 1-4.225-1.155l-.303-.18-3.136.822.836-3.056-.197-.314A8.28 8.28 0 0 1 3.7 11.984c0-4.583 3.728-8.31 8.315-8.31zm4.568 11.517c-.25-.125-1.481-.73-1.71-.813-.23-.083-.396-.125-.563.125-.166.25-.646.812-.792.979-.146.166-.292.187-.542.062a6.85 6.85 0 0 1-2.015-1.243c-.888-.79-1.488-1.765-1.634-2.015-.146-.25-.015-.385.11-.51.112-.112.25-.292.375-.438.125-.146.166-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.563-1.354-.77-1.854-.203-.488-.41-.422-.563-.43l-.48-.008c-.166 0-.437.063-.667.313-.23.25-.875.854-.875 2.083s.896 2.417 1.02 2.583c.125.167 1.763 2.693 4.27 3.777.596.257 1.062.41 1.425.525.598.19 1.142.163 1.572.099.48-.071 1.481-.604 1.69-1.187.208-.583.208-1.083.146-1.187-.063-.105-.229-.167-.479-.292z"/>
            </svg>
          </a>

          {/* Direct Email */}
          <a 
            href={`mailto:${personalDetails.email}`} 
            className="footer-icon-btn mail"
            aria-label="Send Email"
            title="Email"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>

        {/* Right Back To Top */}
        <div className="footer-right">
          <button onClick={scrollToTop} className="scroll-top-btn font-mono">
            BACK TO TOP ↑
          </button>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: var(--bg);
          border-top: 1px solid var(--border-soft);
          padding: 2.2rem clamp(1.5rem, 5vw, 4rem);
        }

        .footer-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 1.8rem;
          flex-wrap: wrap;
        }

        .footer-logo {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text);
        }

        .footer-copy {
          color: var(--text-muted);
          font-size: 0.78rem;
        }

        .footer-social-icons {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .footer-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-softer);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-icon-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--accent-soft);
          transform: translateY(-3px);
          box-shadow: 0 0 16px var(--accent-soft);
        }

        .footer-icon-btn.gh:hover { border-color: #ffffff; color: #ffffff; background: rgba(255, 255, 255, 0.1); }
        .footer-icon-btn.li:hover { border-color: #0A66C2; color: #0A66C2; background: rgba(10, 102, 194, 0.12); }
        .footer-icon-btn.insta:hover { border-color: #E4405F; color: #E4405F; background: rgba(228, 64, 95, 0.12); }
        .footer-icon-btn.wa:hover { border-color: #25D366; color: #25D366; background: rgba(37, 211, 102, 0.12); }
        .footer-icon-btn.mail:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-soft); }

        .scroll-top-btn {
          background: transparent;
          border: 1px solid var(--border-softer);
          color: var(--text-muted);
          padding: 0.5rem 1.1rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .scroll-top-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
          box-shadow: 0 0 15px var(--accent-soft);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1.2rem;
          }
          .footer-left {
            flex-direction: column;
            gap: 0.4rem;
          }
        }
      `}</style>
    </footer>
  );
}
