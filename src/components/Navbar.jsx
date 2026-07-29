import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'STATS', href: '#activity' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <a href="#" className="nav-logo font-display">
            SAWAD<span className="logo-dot">.</span>
          </a>

          {/* Desktop Links */}
          <nav className="nav-desktop">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="nav-mobile-controls">
            <button 
              className={`hamburger-btn ${mobileOpen ? 'is-active' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation"
            >
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'is-open' : ''}`}>
        <nav className="mobile-menu-content">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={() => setMobileOpen(false)}
              className="mobile-link font-display"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.15rem clamp(1.5rem, 5vw, 4rem);
          background: rgba(18, 18, 18, 0.42);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .navbar-header.is-scrolled {
          padding: 0.85rem clamp(1.5rem, 5vw, 4rem);
          background: rgba(12, 12, 12, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(201, 162, 39, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1300px;
          margin: 0 auto;
        }

        .nav-logo {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text);
          text-decoration: none;
          letter-spacing: 0.05em;
        }

        .logo-dot {
          color: var(--accent);
        }

        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-links {
          display: flex;
          gap: 2.2rem;
          list-style: none;
        }

        .nav-links a {
          color: var(--text-muted);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 0.78rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0%;
          height: 1px;
          background: var(--accent);
          transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .nav-links a:hover {
          color: var(--text);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-mobile-controls {
          display: none;
          align-items: center;
          gap: 1rem;
        }

        .hamburger-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 0.5rem;
        }

        .hamburger-btn .bar {
          width: 24px;
          height: 2px;
          background: var(--text);
          transition: all 0.3s ease;
        }

        .hamburger-btn.is-active .bar:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .hamburger-btn.is-active .bar:nth-child(2) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: var(--bg);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }

        .mobile-menu-overlay.is-open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .mobile-link {
          font-family: var(--font-display);
          font-size: 2rem;
          color: var(--text);
          text-decoration: none;
          letter-spacing: 0.1em;
          transition: color 0.3s ease;
        }

        .mobile-link:hover {
          color: var(--accent);
        }

        @media (max-width: 860px) {
          .nav-desktop {
            display: none;
          }
          .nav-mobile-controls {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
