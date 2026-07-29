import React from 'react';
import { education } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Education() {
  useScrollReveal();

  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="reveal-on-scroll reveal-fade-up">
          <span className="section-label">ACADEMIC BACKGROUND</span>
          <h2 className="section-title">
            Education & <span className="gradient-title-text">Foundational Logic</span>
          </h2>
        </div>

        <div className="education-grid">
          {education.map((edu, idx) => {
            const delayClass = `delay-${(idx + 1) * 100}`;
            return (
              <div key={idx} className={`education-card glass-panel reveal-on-scroll reveal-fade-up ${delayClass} animated-card`}>
                <div className="edu-period font-mono">{edu.period}</div>
                <h3 className="edu-field font-display">{edu.field}</h3>
                <h4 className="edu-institution">{edu.institution}</h4>
                <p className="edu-description">{edu.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .education-section {
          background: var(--bg);
          border-top: 1px solid var(--border-soft);
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .education-card {
          padding: 2.2rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-soft);
          transition: border-color 0.35s ease, transform 0.35s ease;
        }

        .education-card:hover {
          border-color: var(--accent-glow);
          transform: translateY(-4px);
        }

        .edu-period {
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          font-size: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .edu-field {
          font-size: 1.3rem;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 0.3rem;
        }

        .edu-institution {
          color: var(--text-muted);
          font-size: 0.88rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .edu-description {
          color: var(--text-muted);
          font-size: 0.88rem;
          font-weight: 300;
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
}
