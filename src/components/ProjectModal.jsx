import React, { useState, useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  const [activeMediaTab, setActiveMediaTab] = useState('details');

  useEffect(() => {
    if (project && project.video) {
      setActiveMediaTab('video');
    } else {
      setActiveMediaTab('details');
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-header">
          <div className="category-badge font-mono">{project.category.toUpperCase()} SYSTEM</div>
          <h2 className="modal-title font-display">{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>
        </div>

        {/* Media / Details Tab Selector */}
        <div className="modal-tabs">
          {project.video && (
            <button 
              className={`modal-tab-btn ${activeMediaTab === 'video' ? 'active' : ''}`}
              onClick={() => setActiveMediaTab('video')}
            >
              Project Video Demo
            </button>
          )}

          <button 
            className={`modal-tab-btn ${activeMediaTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveMediaTab('details')}
          >
            Technical Architecture & Specs
          </button>
        </div>

        <div className="modal-body">
          {activeMediaTab === 'video' && project.video ? (
            <div className="media-container video-container">
              {project.video.endsWith('.mp4') || project.video.endsWith('.webm') ? (
                <video controls autoPlay loop className="project-video-player" src={project.video}>
                  Your browser does not support HTML5 video.
                </video>
              ) : (
                <iframe 
                  className="project-video-iframe"
                  src={project.video} 
                  title={`${project.title} Demo Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              )}
            </div>
          ) : (
            <>
              <div className="modal-description">
                <h4 className="font-display">System Overview</h4>
                <p>{project.description}</p>
              </div>

              <div className="modal-highlights">
                <h4 className="font-display">Key Technical Highlights</h4>
                <ul>
                  {(project.highlights || project.features || project.bullets || []).map((item, idx) => (
                    <li key={idx}>
                      <span className="bullet-dot"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-tags">
                <h4 className="font-display">Technology Stack</h4>
                <div className="tags-flex">
                  {(project.tags || project.tech || []).map((tag, i) => (
                    <span key={i} className="modal-tag font-mono">{tag}</span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="modal-footer">
          {(project.githubUrl || project.github) && (
            <a href={project.githubUrl || project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GITHUB REPOSITORY
            </a>
          )}
          {(project.liveUrl || project.live) && (project.liveUrl !== '#' && project.live !== '#') && (
            <a href={project.liveUrl || project.live} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
              LIVE DEMO ➔
            </a>
          )}
        </div>

        <style>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(10, 10, 10, 0.88);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999999;
            padding: 1.5rem;
          }

          .modal-card {
            background: var(--bg-soft);
            border: 1px solid var(--border-softer);
            border-radius: var(--radius-lg);
            width: 100%;
            max-width: 820px;
            max-height: 90vh;
            overflow-y: auto;
            padding: 2.25rem;
            position: relative;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.9), 0 0 30px var(--accent-soft);
          }

          .modal-close-btn {
            position: absolute;
            top: 1.25rem;
            right: 1.25rem;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--border-softer);
            color: var(--text);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .modal-close-btn:hover {
            border-color: var(--accent);
            color: var(--accent);
          }

          .modal-header {
            margin-bottom: 1.25rem;
          }

          .category-badge {
            display: inline-block;
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--accent);
            margin-bottom: 0.5rem;
            letter-spacing: 0.1em;
          }

          .modal-title {
            font-size: 2rem;
            font-weight: 600;
            color: var(--text);
          }

          .modal-subtitle {
            color: var(--accent);
            font-size: 1.05rem;
            font-weight: 500;
          }

          .modal-tabs {
            display: flex;
            gap: 0.75rem;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid var(--border-softer);
            padding-bottom: 0.85rem;
          }

          .modal-tab-btn {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--border-softer);
            color: var(--text-muted);
            padding: 0.5rem 1.1rem;
            border-radius: var(--radius-full);
            font-size: 0.82rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .modal-tab-btn.active, .modal-tab-btn:hover {
            background: var(--accent-soft);
            color: var(--accent);
            border-color: var(--accent);
          }

          .modal-body {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
          }

          .media-container {
            width: 100%;
            background: #000;
            border-radius: var(--radius-md);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .project-video-player {
            width: 100%;
            max-height: 440px;
            object-fit: contain;
            background: #000;
            border-radius: var(--radius-md);
            border: 1px solid var(--border-softer);
          }

          .project-video-iframe {
            width: 100%;
            height: 380px;
            border: none;
            border-radius: var(--radius-md);
          }

          .modal-body h4 {
            font-size: 1.15rem;
            margin-bottom: 0.5rem;
            color: var(--text);
          }

          .modal-description p {
            color: var(--text-muted);
            line-height: 1.7;
            font-size: 0.95rem;
          }

          .modal-highlights ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
          }

          .modal-highlights li {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            color: var(--text-muted);
            line-height: 1.6;
            font-size: 0.9rem;
          }

          .bullet-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--accent);
            margin-top: 0.6rem;
            flex-shrink: 0;
          }

          .tags-flex {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .modal-tag {
            background: var(--accent-soft);
            color: var(--accent);
            border: 1px solid var(--border-softer);
            padding: 0.35rem 0.75rem;
            border-radius: var(--radius-full);
            font-size: 0.78rem;
            font-weight: 500;
          }

          .modal-footer {
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
            padding-top: 1.25rem;
            border-top: 1px solid var(--border-softer);
          }
        `}</style>
      </div>
    </div>
  );
}
