import React, { useState, useEffect } from 'react';

export default function MobileNav() {
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ['about', 'skills', 'projects', 'activity', 'contact'];
          const scrollPos = window.scrollY + 250;

          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                setActiveTab(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="mobile-bottom-bar">
      <div className="mobile-bar-container">
        {/* 1. About */}
        <a 
          href="#about" 
          className={`mobile-bar-item ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
          aria-label="About"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={activeTab === 'about' ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <span className="tab-text">About</span>
        </a>

        {/* 2. Skill */}
        <a 
          href="#skills" 
          className={`mobile-bar-item ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
          aria-label="Skill"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={activeTab === 'skills' ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
          <span className="tab-text">Skill</span>
        </a>

        {/* 3. Project */}
        <a 
          href="#projects" 
          className={`mobile-bar-item ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
          aria-label="Project"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={activeTab === 'projects' ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
          <span className="tab-text">Project</span>
        </a>

        {/* 4. Activity */}
        <a 
          href="#activity" 
          className={`mobile-bar-item ${activeTab === 'activity' ? 'active' : ''}`}
          onClick={() => setActiveTab('activity')}
          aria-label="Activity"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
          <span className="tab-text">Activity</span>
        </a>

        {/* 5. Contact */}
        <a 
          href="#contact" 
          className={`mobile-bar-item ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
          aria-label="Contact"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={activeTab === 'contact' ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          <span className="tab-text">Contact</span>
        </a>
      </div>

      <style>{`
        .mobile-bottom-bar {
          display: none;
          position: fixed;
          bottom: 0.8rem;
          bottom: env(safe-area-inset-bottom, 0.8rem);
          left: 50%;
          transform: translate3d(-50%, 0, 0);
          -webkit-transform: translate3d(-50%, 0, 0);
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          width: calc(100% - 2rem);
          max-width: 420px;
          z-index: 999999;
          pointer-events: auto;
        }

        .mobile-bar-container {
          background: rgba(12, 12, 12, 0.94);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid var(--border-softer);
          border-radius: var(--radius-full);
          padding: 0.45rem 0.65rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.85), 0 0 15px var(--accent-soft);
        }

        .mobile-bar-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.15rem;
          color: var(--text-muted);
          text-decoration: none;
          padding: 0.35rem 0.6rem;
          border-radius: var(--radius-full);
          transition: color 0.25s ease, background 0.25s ease;
        }

        .mobile-bar-item.active {
          color: var(--accent);
          background: var(--accent-soft);
        }

        .tab-text {
          font-size: 0.65rem;
          font-weight: 600;
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
        }

        @media (max-width: 860px) {
          .mobile-bottom-bar {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
