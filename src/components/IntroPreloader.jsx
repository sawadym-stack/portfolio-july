import React, { useState, useEffect } from 'react';
import { personalDetails } from '../data/portfolioData';

export default function IntroPreloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress counter increment timed for exactly 3.5 seconds total
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFading(true), 250);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 650);
          return 100;
        }
        const increment = Math.random() < 0.25 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div className={`preloader-overlay ${isFading ? 'preloader-fade-out' : ''}`}>
      {/* Background Radial Glow */}
      <div className="preloader-glow" />

      {/* Main Content Container */}
      <div className="preloader-content">
        <div className="preloader-label font-mono">
          SYSTEM INITIALIZING — {personalDetails.location || "KERALA, INDIA"}
        </div>

        <h1 className="preloader-name font-display">
          Muhammed <span className="gold-text">Sawad K</span>
        </h1>

        <p className="preloader-sub font-mono">
          GOLANG FULL STACK DEVELOPER & MICROSERVICE ARCHITECT
        </p>

        <div className="preloader-message">
          Architecting High-Throughput & Sub-Millisecond Scalable Systems
        </div>

        {/* Progress Counter & Bar */}
        <div className="preloader-bar-wrap">
          <div className="preloader-bar-info font-mono">
            <span>READYING PORTFOLIO EXPERIENCE</span>
            <span className="gold-text">{progress}%</span>
          </div>
          <div className="preloader-bar-track">
            <div 
              className="preloader-bar-fill" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>
      </div>

      <style>{`
        .preloader-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          overflow: hidden;
          transition: opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1),
                      transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
          will-change: opacity, transform;
        }

        .preloader-overlay.preloader-fade-out {
          opacity: 0;
          transform: scale(1.04) translateY(-20px);
          pointer-events: none;
        }

        .preloader-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201, 162, 39, 0.15), transparent 70%);
          filter: blur(60px);
          pointer-events: none;
          animation: pulseGlow 3s ease-in-out infinite alternate;
        }

        .preloader-content {
          position: relative;
          z-index: 2;
          max-width: 650px;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .preloader-label {
          font-size: 0.72rem;
          letter-spacing: 0.3em;
          color: rgba(245, 242, 235, 0.5);
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }

        .preloader-name {
          font-size: clamp(2.4rem, 6vw, 4rem);
          font-weight: 500;
          color: #f5f2eb;
          line-height: 1.1;
          margin-bottom: 0.6rem;
          letter-spacing: -0.02em;
        }

        .gold-text {
          color: #c9a227;
        }

        .preloader-sub {
          font-size: clamp(0.75rem, 2vw, 0.85rem);
          letter-spacing: 0.22em;
          color: rgba(201, 162, 39, 0.9);
          margin-bottom: 1.8rem;
          text-transform: uppercase;
        }

        .preloader-message {
          font-size: 1rem;
          font-weight: 300;
          color: rgba(245, 242, 235, 0.7);
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .preloader-bar-wrap {
          width: 100%;
          max-width: 440px;
        }

        .preloader-bar-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          color: rgba(245, 242, 235, 0.6);
          margin-bottom: 0.6rem;
        }

        .preloader-bar-track {
          width: 100%;
          height: 3px;
          background: rgba(245, 242, 235, 0.08);
          border-radius: 999px;
          overflow: hidden;
          position: relative;
        }

        .preloader-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #c9a227, #f0d068);
          border-radius: 999px;
          transition: width 0.1s linear;
          box-shadow: 0 0 12px rgba(201, 162, 39, 0.6);
        }

        @keyframes pulseGlow {
          0% { transform: scale(0.9); opacity: 0.4; }
          100% { transform: scale(1.1); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
