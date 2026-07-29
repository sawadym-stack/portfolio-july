import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  useScrollReveal([filter]);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
  };

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="reveal-on-scroll reveal-fade-up">
          <span className="section-label">SELECTED ENGINEERING WORKS</span>
          <h2 className="section-title">
            Microservices & <span className="gradient-title-text">Full Stack Systems</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="project-filters reveal-on-scroll reveal-fade-up delay-100">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            ALL WORKS
          </button>
          <button 
            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            BACKEND & MICROSERVICES
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            FULL STACK
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            FRONTEND
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj, idx) => {
            const ghostNum = (idx + 1).toString().padStart(2, '0');
            const delayClass = `delay-${((idx % 3) + 1) * 100}`;
            return (
              <div 
                key={proj.id}
                className={`project-card glass-panel reveal-on-scroll reveal-scale ${delayClass} animated-card`}
                onMouseMove={handleMouseMove}
                onClick={() => setSelectedProject(proj)}
              >
                {/* Mouse Spotlight */}
                <div className="project-spotlight" />

                {/* Translucent Ghost Watermark Number */}
                <span className="project-ghost-num font-display">{ghostNum}</span>

                {/* Card Media Preview (Video for Barca Store & AutoHive, Image for SendAPro) */}
                <div className="project-card-media">
                  {proj.video ? (
                    <video 
                      src={proj.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="card-media-video"
                    />
                  ) : (
                    <img 
                      src={proj.image || proj.mediaUrl} 
                      alt={proj.title} 
                      className="card-media-image"
                    />
                  )}
                  <div className="media-overlay-badge font-mono">
                    {proj.video ? "▶ VIDEO DEMO" : "📷 PREVIEW"}
                  </div>
                </div>

                {/* Card Top Row */}
                <div className="project-top-row">
                  <span className="project-tagline">{proj.subtitle}</span>
                  <button className="project-arrow" aria-label="View Project Details">
                    ↗
                  </button>
                </div>

                {/* Title & Description */}
                <h3 className="project-title font-display">{proj.title}</h3>
                <p className="project-description">{proj.description}</p>

                {/* Tech Pills */}
                <div className="project-tech-stack">
                  {proj.tags.map((t, tIdx) => (
                    <span key={tIdx} className="font-mono">{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Modal Preview */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <style>{`
        .projects-section {
          background: var(--bg);
          border-top: 1px solid var(--border-soft);
        }

        .project-filters {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .filter-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-softer);
          color: var(--text-muted);
          padding: 0.6rem 1.4rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: var(--accent);
          color: var(--text);
        }

        .filter-btn.active {
          background: var(--accent-soft);
          border-color: var(--accent);
          color: var(--accent);
          box-shadow: 0 0 15px var(--accent-soft);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .project-card {
          --mx: 50%;
          --my: 50%;
          position: relative;
          background: linear-gradient(165deg, var(--card-tint), transparent 60%);
          border: 1px solid var(--border-soft);
          border-radius: var(--radius-md);
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .project-card:hover {
          border-color: var(--accent-glow);
          transform: translateY(-6px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        .project-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, transparent, var(--accent), transparent);
          transform: scaleX(0);
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .project-card:hover::before {
          transform: scaleX(1);
        }

        .project-spotlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(320px circle at var(--mx) var(--my), var(--accent-soft), transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .project-card:hover .project-spotlight {
          opacity: 1;
        }

        .project-card-media {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius-sm);
          overflow: hidden;
          background: #000;
          margin-bottom: 1.4rem;
          border: 1px solid var(--border-softer);
        }

        .card-media-video, .card-media-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
          transition: transform 0.5s ease;
        }

        .project-card:hover .card-media-video,
        .project-card:hover .card-media-image {
          transform: scale(1.04);
        }

        .media-overlay-badge {
          position: absolute;
          top: 0.6rem;
          right: 0.6rem;
          background: rgba(10, 10, 10, 0.75);
          backdrop-filter: blur(8px);
          color: var(--accent);
          border: 1px solid var(--border-softer);
          font-size: 0.65rem;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
        }

        .project-ghost-num {
          position: absolute;
          bottom: -1.4rem;
          right: 0.6rem;
          font-size: 7rem;
          font-weight: 700;
          line-height: 1;
          color: var(--text);
          opacity: 0.04;
          pointer-events: none;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .project-card:hover .project-ghost-num {
          opacity: 0.09;
          transform: translateY(-6px);
        }

        .project-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.8rem;
        }

        .project-tagline {
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          font-size: 0.68rem;
          font-weight: 700;
        }

        .project-arrow {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border-softer);
          background: transparent;
          color: var(--text-muted);
          display: grid;
          place-items: center;
          font-size: 1rem;
          transition: all 0.35s ease;
        }

        .project-card:hover .project-arrow {
          border-color: var(--accent);
          color: var(--accent);
          transform: rotate(45deg);
        }

        .project-title {
          font-size: 1.45rem;
          font-weight: 500;
          margin-bottom: 0.6rem;
          color: var(--text);
        }

        .project-description {
          color: var(--text-muted);
          font-size: 0.88rem;
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 1.2rem;
        }

        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: auto;
        }

        .project-tech-stack span {
          letter-spacing: 0.08em;
          background: var(--accent-soft);
          color: var(--accent);
          border-radius: var(--radius-full);
          padding: 0.3rem 0.7rem;
          font-size: 0.68rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .project-filters {
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 0.5rem;
            -webkit-overflow-scrolling: touch;
          }
          .filter-btn {
            flex-shrink: 0;
            white-space: nowrap;
          }
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .project-card {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
