import React from 'react';
import { stats } from '../data/portfolioData';

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid glass-card">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-value gradient-text">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-section {
          padding: 1.5rem 0 4rem 0;
          position: relative;
          z-index: 2;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          padding: 2rem;
          text-align: center;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
        }
        .stat-value {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 800;
        }
        .stat-label {
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
