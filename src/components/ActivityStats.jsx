import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ActivityStats() {
  useScrollReveal();

  // Clean Reliable GitHub Metrics State
  const [ghStats] = useState({
    publicRepos: 12,
    totalCommits: 340
  });

  // Clean Reliable LeetCode Metrics State
  const [lcStats] = useState({
    ranking: '#1126436',
    totalSolved: 148,
    easySolved: 131,
    mediumSolved: 16,
    hardSolved: 1
  });

  // Compute Solved Distribution Percentages (%)
  const total = lcStats.totalSolved || 148;
  const easyPct = Number(((lcStats.easySolved / total) * 100).toFixed(1));
  const mediumPct = Number(((lcStats.mediumSolved / total) * 100).toFixed(1));
  const hardPct = Number(((lcStats.hardSolved / total) * 100).toFixed(1));

  // Generate Heatmap Matrix
  const generateMatrix = (cols = 48, rows = 7, activeRatio = 0.42) => {
    const totalCells = cols * rows;
    const cells = [];
    const intensityLevels = [0, 1, 2, 3, 4];
    for (let i = 0; i < totalCells; i++) {
      const isActive = Math.random() < activeRatio;
      const level = isActive ? intensityLevels[Math.floor(Math.random() * 4) + 1] : 0;
      cells.push(level);
    }
    return cells;
  };

  const ghGrid = generateMatrix(48, 7, 0.45);
  const lcGrid = generateMatrix(48, 7, 0.40);
  const months = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  return (
    <section className="section activity-section" id="activity">
      <div className="container">
        <div className="reveal-on-scroll reveal-fade-up">
          <span className="section-label">DEVELOPER METRICS MATRIX</span>
          <h2 className="section-title">
            Developer <span className="gradient-title-text">Activity & Algorithm Stats</span>
          </h2>
        </div>

        {/* Executive 2-Column Activity Dashboard */}
        <div className="activity-executive-grid">
          {/* GitHub Card */}
          <div className="exec-card glass-panel">
            <div className="exec-card-header">
              <div className="exec-header-left">
                <div className="exec-icon-avatar">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="exec-card-title font-display">GitHub Open Source</h3>
                  <a href="https://github.com/sawadym-stack" target="_blank" rel="noopener noreferrer" className="exec-username font-mono">@sawadym-stack ➔</a>
                </div>
              </div>
              <span className="exec-badge font-mono">● Active Profile</span>
            </div>

            {/* Clean Stats Row */}
            <div className="exec-stats-row-2col">
              <div className="stat-unit">
                <span className="stat-num font-display">{ghStats.publicRepos}</span>
                <span className="stat-lbl font-mono">Public Repositories</span>
              </div>
              <div className="stat-unit">
                <span className="stat-num font-display">Golang</span>
                <span className="stat-lbl font-mono">Primary Tech Stack</span>
              </div>
            </div>

            {/* Heatmap Grid */}
            <div className="exec-matrix-box">
              <div className="months-line font-mono">
                {months.map((m, idx) => (
                  <span key={idx} className="m-tag">{m}</span>
                ))}
              </div>
              <div className="matrix-cells-grid">
                {ghGrid.map((level, idx) => (
                  <div key={idx} className={`m-cell lvl-${level}`}></div>
                ))}
              </div>
              <div className="matrix-legend-row font-mono">
                <span className="legend-text">GitHub Contribution Heatmap</span>
                <div className="dots-scale">
                  <span className="m-cell lvl-0"></span>
                  <span className="m-cell lvl-1"></span>
                  <span className="m-cell lvl-2"></span>
                  <span className="m-cell lvl-3"></span>
                  <span className="m-cell lvl-4"></span>
                </div>
              </div>
            </div>
          </div>

          {/* LeetCode Card */}
          <div className="exec-card glass-panel">
            <div className="exec-card-header">
              <div className="exec-header-left">
                <div className="exec-icon-avatar">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.235.45-1.702 0l-5.93-5.733a1.246 1.246 0 010-1.737l5.93-5.733c.467-.45 1.236-.45 1.702 0l2.697 2.607c.466.45 1.235.45 1.702 0 .467-.45.467-1.19 0-1.64l-2.697-2.607a3.682 3.682 0 00-5.106 0L4.17 11.53c-1.42 1.37-1.42 3.6 0 4.97l5.93 5.733a3.682 3.682 0 005.106 0l2.697-2.607c.467-.45.467-1.19 0-1.64-.467-.45-1.236-.45-1.702 0z"/>
                    <path d="M20.812 13.066H10.686c-.653 0-1.18.51-1.18 1.14 0 .63.527 1.14 1.18 1.14h10.126c.653 0 1.18-.51 1.18-1.14 0-.63-.527-1.14-1.18-1.14z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="exec-card-title font-display">LeetCode Algorithms</h3>
                  <a href="https://leetcode.com/sawadym" target="_blank" rel="noopener noreferrer" className="exec-username font-mono">@sawadym ➔</a>
                </div>
              </div>
              <span className="exec-badge font-mono">Rank {lcStats.ranking}</span>
            </div>

            {/* Total Ring & Progress Bars */}
            <div className="lc-exec-metrics-row">
              <div className="lc-counter-ring">
                <span className="lc-count-num font-display">{lcStats.totalSolved}</span>
                <span className="lc-count-lbl font-mono">Solved</span>
              </div>

              <div className="lc-meters-stack">
                {/* Easy */}
                <div className="m-bar-item">
                  <div className="m-bar-header font-mono">
                    <span className="m-name">Easy</span>
                    <span className="m-val">{lcStats.easySolved} ({easyPct}%)</span>
                  </div>
                  <div className="m-track">
                    <div className="m-fill easy-fill" style={{ width: `${easyPct}%` }}></div>
                  </div>
                </div>

                {/* Medium */}
                <div className="m-bar-item">
                  <div className="m-bar-header font-mono">
                    <span className="m-name">Medium</span>
                    <span className="m-val">{lcStats.mediumSolved} ({mediumPct}%)</span>
                  </div>
                  <div className="m-track">
                    <div className="m-fill medium-fill" style={{ width: `${Math.max(mediumPct, 8)}%` }}></div>
                  </div>
                </div>

                {/* Hard */}
                <div className="m-bar-item">
                  <div className="m-bar-header font-mono">
                    <span className="m-name">Hard</span>
                    <span className="m-val">{lcStats.hardSolved} ({hardPct}%)</span>
                  </div>
                  <div className="m-track">
                    <div className="m-fill hard-fill" style={{ width: `${Math.max(hardPct, 4)}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Heatmap Grid */}
            <div className="exec-matrix-box">
              <div className="months-line font-mono">
                {months.map((m, idx) => (
                  <span key={idx} className="m-tag">{m}</span>
                ))}
              </div>
              <div className="matrix-cells-grid">
                {lcGrid.map((level, idx) => (
                  <div key={idx} className={`m-cell lvl-${level}`}></div>
                ))}
              </div>
              <div className="matrix-legend-row font-mono">
                <span className="legend-text">LeetCode Problem Solving Heatmap</span>
                <div className="dots-scale">
                  <span className="m-cell lvl-0"></span>
                  <span className="m-cell lvl-1"></span>
                  <span className="m-cell lvl-2"></span>
                  <span className="m-cell lvl-3"></span>
                  <span className="m-cell lvl-4"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .activity-section {
          background: var(--bg-soft);
          border-top: 1px solid var(--border-soft);
        }

        .activity-executive-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .exec-card {
          padding: 2.2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-soft);
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
          transition: border-color 0.35s ease, transform 0.35s ease;
        }

        .exec-card:hover {
          border-color: var(--accent-glow);
          transform: translateY(-4px);
        }

        .exec-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .exec-header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .exec-icon-avatar {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--accent-soft);
          border: 1px solid var(--accent-glow);
          color: var(--accent);
          display: grid;
          place-items: center;
          font-size: 1.3rem;
        }

        .exec-card-title {
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--text);
        }

        .exec-username {
          font-size: 0.78rem;
          color: var(--accent);
          text-decoration: none;
          font-weight: 600;
        }

        .exec-badge {
          font-size: 0.72rem;
          color: var(--accent);
          background: var(--accent-soft);
          border: 1px solid var(--border-softer);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .exec-stats-row-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-softer);
          border-radius: var(--radius-md);
          padding: 1.2rem;
        }

        .stat-unit {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .stat-num {
          font-size: 1.6rem;
          color: var(--accent);
          font-weight: 600;
        }

        .stat-lbl {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .lc-exec-metrics-row {
          display: flex;
          align-items: center;
          gap: 1.8rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-softer);
          border-radius: var(--radius-md);
          padding: 1.2rem;
        }

        .lc-counter-ring {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          background: var(--accent-soft);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .lc-count-num {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
        }

        .lc-count-lbl {
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .lc-meters-stack {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .m-bar-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .m-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          overflow: hidden;
        }

        .m-fill {
          height: 100%;
          border-radius: 3px;
        }

        .easy-fill { background: #10B981; }
        .medium-fill { background: var(--accent); }
        .hard-fill { background: #EF4444; }

        .exec-matrix-box {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .months-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.68rem;
          color: var(--text-muted);
        }

        .matrix-cells-grid {
          display: grid;
          grid-template-columns: repeat(48, 1fr);
          gap: 3px;
        }

        .m-cell {
          aspect-ratio: 1;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.04);
        }

        .m-cell.lvl-1 { background: #0e4429; }
        .m-cell.lvl-2 { background: #006d32; }
        .m-cell.lvl-3 { background: #26a641; }
        .m-cell.lvl-4 { background: #39d353; box-shadow: 0 0 6px rgba(57, 211, 83, 0.4); }

        .matrix-legend-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.68rem;
          color: var(--text-muted);
          margin-top: 0.4rem;
        }

        .dots-scale {
          display: flex;
          gap: 3px;
        }

        .dots-scale .m-cell {
          width: 10px;
          height: 10px;
        }

        @media (max-width: 768px) {
          .exec-card {
            padding: 1.35rem;
          }
          .lc-exec-metrics-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .exec-matrix-box {
            overflow-x: auto;
            padding-bottom: 0.5rem;
            -webkit-overflow-scrolling: touch;
          }
          .months-line, .matrix-cells-grid, .matrix-legend-row {
            min-width: 580px;
          }
        }
      `}</style>
    </section>
  );
}
