import React, { useState, useEffect } from 'react';
import { personalDetails } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Hero() {
  useScrollReveal();

  const roles = [
    "Golang Full Stack Developer",
    "Microservice Architect",
    "gRPC & Redis GEO Specialist",
    "High-Throughput Systems Engineer"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const marqueeItems = [
    "GOLANG MICROSERVICES", "gRPC PROTOCOL", "REDIS GEO SPATIAL",
    "POSTGRESQL ACID INTEGRITY", "REACT & TYPESCRIPT", "DOCKER ORCHESTRATION",
    "AWS EC2 CLOUD", "RESTful GATEWAYS"
  ];

  return (
    <section className="hero-section">
      {/* Crisp Full-Bleed Background Image */}
      <div 
        className="hero-bg-cover-image" 
        style={{ backgroundImage: `url("${personalDetails.profileImage}")` }}
      />

      {/* Subtle Bottom Fade Mask for Soft Section Transition */}
      <div className="hero-bg-overlay-mask" />

      {/* Subtle Floating Glow */}
      <div className="hero-glow" />

      {/* Top Meta Location Header */}
      <div className="hero-meta-top font-mono reveal-on-scroll reveal-fade-up">
        BASED IN KERALA, INDIA — AVAILABLE FOR GLOBAL OPPORTUNITIES
      </div>

      {/* Bottom Meta & Callouts */}
      <div className="hero-meta-bottom">
        <div className="hero-role-block reveal-on-scroll reveal-fade-up delay-100">
          <span className="hero-role-label font-mono">ENGINEERING SPECIALTY</span>
          <div className="typewriter-box">
            <span className="typewriter-text">{displayText}</span>
            <span className="typewriter-caret" />
          </div>
        </div>

        <div className="hero-cta-buttons reveal-on-scroll reveal-fade-up delay-200">
          <a href="#projects" className="btn btn-solid">
            EXPLORE WORK ➔
          </a>
          <a href="#contact" className="btn btn-outline">
            GET IN TOUCH
          </a>
        </div>
      </div>

      {/* Vertical Socials Left Bar */}
      <aside className="hero-socials-bar font-mono">
        <a href={personalDetails.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
        <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        <a href={personalDetails.instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
        <div className="social-divider-line" />
      </aside>

      {/* Vertical Scroll Pulse Indicator Right Bar */}
      <aside className="hero-scroll-bar font-mono">
        <span className="scroll-label">SCROLL</span>
        <div className="scroll-pulse-line" />
      </aside>

      {/* Bottom Continuous Marquee Banner */}
      <div className="hero-marquee-wrapper">
        <div className="marquee-track font-mono">
          <div className="marquee-group">
            {marqueeItems.map((item, idx) => (
              <span key={idx}>
                {item} <em>✦</em>
              </span>
            ))}
          </div>
          <div className="marquee-group" aria-hidden="true">
            {marqueeItems.map((item, idx) => (
              <span key={`dup-${idx}`}>
                {item} <em>✦</em>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          height: 100vh;
          height: 100dvh;
          min-height: 550px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 clamp(1.5rem, 5vw, 4rem);
          overflow: hidden;
        }

        .hero-bg-cover-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          z-index: 0;
          filter: brightness(0.92) contrast(1.02);
          transform: none !important;
          animation: none !important;
          transition: none !important;
        }

        .hero-bg-overlay-mask {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(10, 10, 10, 0.15) 0%,
            rgba(10, 10, 10, 0.35) 60%,
            var(--bg) 100%
          );
        }

        [data-theme="light"] .hero-bg-overlay-mask {
          background: linear-gradient(
            to bottom,
            rgba(246, 243, 236, 0.25) 0%,
            rgba(246, 243, 236, 0.45) 60%,
            var(--bg) 100%
          );
        }

        .hero-glow {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 55vmax;
          height: 55vmax;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-soft), transparent 65%);
          filter: blur(80px);
          pointer-events: none;
          z-index: 2;
        }

        .hero-meta-top {
          position: absolute;
          top: 6.2rem;
          left: clamp(1.5rem, 5vw, 4rem);
          right: clamp(1.5rem, 5vw, 4rem);
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--text);
          font-size: 0.72rem;
          z-index: 10;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
        }

        .hero-meta-bottom {
          position: absolute;
          bottom: 6rem;
          left: clamp(1.5rem, 5vw, 4rem);
          right: clamp(1.5rem, 5vw, 4rem);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
          z-index: 10;
          flex-wrap: wrap;
        }

        .hero-role-block {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .hero-role-label {
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent);
          font-size: 0.72rem;
          font-weight: 700;
        }

        .typewriter-box {
          display: inline-flex;
          align-items: center;
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          color: var(--text);
          font-weight: 400;
          min-height: 1.5em;
        }

        .typewriter-caret {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: var(--accent);
          margin-left: 6px;
          animation: blink 0.9s step-end infinite;
        }

        .hero-cta-buttons {
          display: flex;
          gap: 1.1rem;
          flex-wrap: wrap;
        }

        .hero-socials-bar {
          position: absolute;
          bottom: 6.5rem;
          left: clamp(1rem, 3vw, 2.5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.4rem;
          z-index: 10;
        }

        .hero-socials-bar a {
          writing-mode: vertical-rl;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          font-size: 0.72rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .hero-socials-bar a:hover {
          color: var(--accent);
        }

        .social-divider-line {
          width: 1px;
          height: 60px;
          background: var(--border-softer);
        }

        .hero-scroll-bar {
          position: absolute;
          bottom: 6.5rem;
          right: clamp(1rem, 3vw, 2.5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          z-index: 10;
        }

        .scroll-label {
          writing-mode: vertical-rl;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--text-muted);
          font-size: 0.72rem;
        }

        .scroll-pulse-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--accent), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        .hero-marquee-wrapper {
          position: absolute;
          bottom: 1.8rem;
          left: 0;
          right: 0;
          overflow: hidden;
          z-index: 10;
          mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent);
        }

        @media (max-width: 900px) {
          .hero-socials-bar, .hero-scroll-bar {
            display: none;
          }
          .hero-meta-bottom {
            flex-direction: column;
            align-items: stretch;
            bottom: 5rem;
            left: 1.25rem;
            right: 1.25rem;
            gap: 1.2rem;
          }
          .hero-role-block {
            width: 100%;
          }
          .typewriter-box {
            font-size: 0.95rem;
          }
          .hero-cta-buttons {
            width: 100%;
            flex-direction: column;
            gap: 0.75rem;
          }
          .hero-meta-top {
            display: none;
          }
          .hero-marquee-wrapper {
            bottom: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}
