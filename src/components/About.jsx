import React, { useState } from 'react';
import { personalDetails, stats } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  const photos = [
    {
      id: 'tech-spark',
      title: 'Tech Spark',
      src: personalDetails.techSparkImage || "/assets/tech spark.jpeg"
    },
    {
      id: 'tech-spark-2',
      title: 'Tech Spark',
      src: personalDetails.techSpark2Image || "/assets/tech spark 2.jpeg"
    },
    {
      id: 'morning-ssn',
      title: 'Morning Session',
      src: personalDetails.sawadMrngSsnImage || "/assets/sawad mrng ssn1.jpg"
    },
    {
      id: 'topic-presentation',
      title: 'Topic Presentation',
      src: personalDetails.topicPresentationImage || "/assets/sawadgeon.jpeg"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handleCardClick = (e, index) => {
    e.stopPropagation();
    if (index === activeIndex) {
      handleNext();
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-inner">
          {/* Left Text & Stats */}
          <div className="about-text-col reveal-on-scroll reveal-fade-up">
            <span className="section-label">ABOUT MUHAMMED SAWAD</span>
            <h2 className="section-title">
              Architecting High-Throughput <br />
              <span className="gradient-title-text">& Scalable Backends</span>
            </h2>

            <p className="about-paragraph">
              I am a <strong>Golang Full Stack Developer</strong> with 1 year of hands-on engineering experience at 
              <span className="highlight-text"> Bridgeon Solution</span> (Calicut, Kerala). My passion lies in building 
              high-throughput microservices, sub-millisecond real-time location indexing with Redis GEO, and robust RESTful API gateways.
            </p>

            <p className="about-paragraph">
              Backed by a strong mathematical foundation from <strong>REC Chathamangalam</strong> and currently pursuing 
              my <strong>Bachelor of Computer Applications (BCA)</strong>, I combine rigorous analytical logic with modern full-stack technologies including Go Fiber, Gin, gRPC, PostgreSQL, Docker, and React.js.
            </p>

            {/* Stat Counters */}
            <div className="about-stats-grid">
              {stats.map((item, idx) => (
                <div key={idx} className={`stat-card reveal-on-scroll reveal-scale delay-${(idx + 1) * 100}`}>
                  <span className="stat-num font-display">{item.value}</span>
                  <span className="stat-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Interactive Dual-Side (Left & Right) Stack Deck */}
          <div className="about-stack-col reveal-on-scroll reveal-scale delay-100">
            <div className="stack-wrap">
              {/* Radial Ambient Glow */}
              <div className="stack-glow" />

              {/* Stacked Cards Deck */}
              <div 
                className="stacked-cards-container"
                onClick={handleNext}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleNext();
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label="Click photo stack to cycle active photo"
              >
                {photos.map((photo, i) => {
                  const diff = (i - activeIndex + photos.length) % photos.length;

                  // Map diff to positional position classes:
                  // 0 -> center (front)
                  // 1 -> right (peek 20% right)
                  // 2 -> back (peek bottom)
                  // 3 -> left (peek 20% left)
                  let posClass = 'pos-center';
                  let zIdx = 10;

                  if (diff === 0) {
                    posClass = 'pos-center';
                    zIdx = 10;
                  } else if (diff === 1) {
                    posClass = 'pos-right';
                    zIdx = 7;
                  } else if (diff === 2) {
                    posClass = 'pos-back';
                    zIdx = 4;
                  } else if (diff === 3) {
                    posClass = 'pos-left';
                    zIdx = 7;
                  }

                  return (
                    <div 
                      key={photo.id}
                      className={`stacked-card ${posClass}`}
                      onClick={(e) => handleCardClick(e, i)}
                      style={{ zIndex: zIdx }}
                    >
                      <img 
                        src={photo.src} 
                        alt={photo.title}
                      />
                      <div className="stack-card-sheen" />
                      <div className="card-badge">
                        <span>{photo.title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: var(--bg);
          border-top: 1px solid var(--border-soft);
        }

        .about-inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: clamp(3rem, 6vw, 6rem);
          align-items: center;
        }

        .about-paragraph {
          color: var(--text-muted);
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.85;
          margin-bottom: 1.4rem;
        }

        .highlight-text {
          color: var(--accent);
          font-weight: 600;
        }

        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-soft);
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .stat-num {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          color: var(--accent);
          font-weight: 600;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .stack-wrap {
          position: relative;
          aspect-ratio: 4 / 5;
          width: 72%;
          max-width: 320px;
          margin: 0 auto;
        }

        .stacked-cards-container {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: pointer;
          outline: none;
        }

        .stacked-cards-container:focus-visible .stacked-card.pos-center {
          box-shadow: 0 0 0 3px var(--accent);
        }

        .stacked-card {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-lg);
          border: 1px solid var(--accent-glow);
          background: var(--bg-soft);
          overflow: hidden;
          transition: transform 0.6s cubic-bezier(0.34, 1.25, 0.64, 1),
                      opacity 0.6s ease,
                      box-shadow 0.6s ease,
                      filter 0.6s ease,
                      border-color 0.6s ease;
          user-select: none;
        }

        /* Front Center Card (Main Tech Spark photo initially) */
        .stacked-card.pos-center {
          transform: translate(0, 0) scale(1) rotate(0deg);
          opacity: 1;
          filter: brightness(1);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.65), 0 0 25px var(--accent-soft);
          border-color: var(--accent);
        }

        /* Peeking Right Card (~20% right offset) */
        .stacked-card.pos-right {
          transform: translate(18%, 8%) scale(0.92) rotate(4.5deg);
          opacity: 0.88;
          filter: brightness(0.82);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
          border-color: rgba(255, 255, 255, 0.16);
        }

        /* Peeking Left Card (~20% left offset) */
        .stacked-card.pos-left {
          transform: translate(-18%, 8%) scale(0.92) rotate(-4.5deg);
          opacity: 0.88;
          filter: brightness(0.82);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
          border-color: rgba(255, 255, 255, 0.16);
        }

        /* Peeking Back Card (bottom offset) */
        .stacked-card.pos-back {
          transform: translate(0, 14%) scale(0.85) rotate(0deg);
          opacity: 0.75;
          filter: brightness(0.70);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.08);
        }

        /* Hover animation on stack - fanning out left and right */
        .stacked-cards-container:hover .stacked-card.pos-center {
          transform: translate(0, -3px) scale(1.02) rotate(0deg);
        }

        .stacked-cards-container:hover .stacked-card.pos-right {
          transform: translate(22%, 10%) scale(0.94) rotate(6deg);
          opacity: 0.95;
          filter: brightness(0.90);
        }

        .stacked-cards-container:hover .stacked-card.pos-left {
          transform: translate(-22%, 10%) scale(0.94) rotate(-6deg);
          opacity: 0.95;
          filter: brightness(0.90);
        }

        .stacked-cards-container:hover .stacked-card.pos-back {
          transform: translate(0, 18%) scale(0.87) rotate(0deg);
          opacity: 0.82;
          filter: brightness(0.78);
        }

        .stacked-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s ease;
        }

        .card-badge {
          position: absolute;
          bottom: 1.1rem;
          left: 1.1rem;
          display: inline-flex;
          align-items: center;
          padding: 0.55rem 1.1rem;
          background: rgba(10, 10, 15, 0.82);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 9999px;
          font-size: 0.83rem;
          font-weight: 500;
          color: #ffffff;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          z-index: 2;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .stack-card-sheen {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(115deg, transparent 35%, rgba(255, 255, 255, 0.08) 48%, transparent 62%) 0 0 / 250% 250%;
          animation: sheenMove 5.5s ease-in-out infinite;
        }

        .stack-glow {
          position: absolute;
          inset: -12%;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-soft), transparent 65%);
          filter: blur(35px);
          pointer-events: none;
          animation: glowBreathe 6s ease-in-out infinite;
          z-index: 0;
        }

        @media (max-width: 900px) {
          .about-inner {
            grid-template-columns: 1fr;
          }
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stack-wrap {
            max-width: 270px;
          }
        }
      `}</style>
    </section>
  );
}




