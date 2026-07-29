import React from 'react';
import { experience } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Experience() {
  useScrollReveal();

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="reveal-on-scroll reveal-fade-up">
          <span className="section-label">ENGINEERING JOURNEY</span>
          <h2 className="section-title">
            Professional <span className="gradient-title-text">Experience</span>
          </h2>
        </div>

        <div className="timeline">
          {experience.map((exp, idx) => (
            <div key={idx} className="timeline-item reveal-on-scroll reveal-fade-up delay-100 animated-card">
              {/* Glowing Gold Timeline Dot */}
              <div className="timeline-dot" />

              <div className="timeline-period font-mono">{exp.duration}</div>
              <h3 className="timeline-role font-display">{exp.role}</h3>
              <div className="timeline-company">
                <strong>{exp.company}</strong> — <span>{exp.location}</span>
              </div>

              <ul className="timeline-bullets">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>

              <div className="timeline-tech">
                {exp.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          background: var(--bg-soft);
          border-top: 1px solid var(--border-soft);
        }

        .timeline {
          position: relative;
          padding-left: 2.2rem;
          max-width: 900px;
          margin-top: 2rem;
        }

        .timeline::before {
          content: "";
          position: absolute;
          top: 8px;
          bottom: 8px;
          left: 0;
          width: 1px;
          background: linear-gradient(to bottom, var(--accent), rgba(201, 162, 39, 0.15));
        }

        .timeline-item {
          position: relative;
          padding-bottom: 3.5rem;
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          top: 8px;
          left: -2.2rem;
          transform: translateX(-4px);
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 14px rgba(201, 162, 39, 0.9);
        }

        .timeline-period {
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          font-size: 0.75rem;
          margin-bottom: 0.35rem;
        }

        .timeline-role {
          font-size: 1.45rem;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 0.25rem;
        }

        .timeline-company {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 1.2rem;
        }

        .timeline-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 1.4rem;
        }

        .timeline-bullets li {
          position: relative;
          padding-left: 1.2rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.7;
        }

        .timeline-bullets li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--accent);
          opacity: 0.7;
        }

        .timeline-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-badge {
          font-size: 0.72rem;
          color: var(--accent);
          background: var(--accent-soft);
          border: 1px solid var(--border-softer);
          border-radius: var(--radius-full);
          padding: 0.25rem 0.75rem;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
