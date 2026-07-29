import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Skills() {
  useScrollReveal();

  const skillCategories = [
    {
      id: "01",
      title: "Backend & Microservices",
      icon: "⚡",
      skills: [
        { name: "Golang", tag: "CORE" },
        { name: "Go Fiber", tag: "FRAMEWORK" },
        { name: "Gin Framework", tag: "REST" },
        { name: "gRPC & Protobuf", tag: "RPC" },
        { name: "JWT Auth & RBAC", tag: "SECURITY" },
        { name: "Microservice Gateway", tag: "ARCHITECTURE" }
      ]
    },
    {
      id: "02",
      title: "Databases & High-Speed Cache",
      icon: "🗄️",
      skills: [
        { name: "Redis GEO Spatial", tag: "< 1ms" },
        { name: "PostgreSQL", tag: "ACID" },
        { name: "Relational Indexing", tag: "PERFORMANCE" },
        { name: "GORM / SQL", tag: "ORM" }
      ]
    },
    {
      id: "03",
      title: "Frontend Engineering",
      icon: "💻",
      skills: [
        { name: "React.js", tag: "UI" },
        { name: "TypeScript", tag: "TYPE SAFE" },
        { name: "JavaScript (ES6+)", tag: "LOGIC" },
        { name: "Tailwind CSS", tag: "STYLING" },
        { name: "HTML5 / CSS3", tag: "WEB" },
        { name: "Vite & Context API", tag: "STATE" }
      ]
    },
    {
      id: "04",
      title: "DevOps & Cloud Infrastructure",
      icon: "🐳",
      skills: [
        { name: "Docker", tag: "CONTAINER" },
        { name: "Docker Compose", tag: "ORCHESTRATION" },
        { name: "AWS EC2", tag: "CLOUD" },
        { name: "Nginx", tag: "REVERSE PROXY" },
        { name: "Git / GitHub", tag: "VCS" },
        { name: "Linux Server Admin", tag: "OS" }
      ]
    }
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
  };

  return (
    <section className="section skills-section" id="skills">
      <div className="container skills-container">
        <div className="reveal-on-scroll reveal-fade-up">
          <span className="section-label">TECHNICAL COMPETENCIES</span>
          <h2 className="section-title">
            Engineered for <span className="gradient-title-text">Speed & Scalability</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => {
            const delayClass = `delay-${((idx % 4) + 1) * 100}`;
            return (
              <div 
                key={cat.id} 
                className={`skill-card reveal-on-scroll reveal-fade-up ${delayClass} animated-card`}
                onMouseMove={handleMouseMove}
              >
              {/* Radial Mouse Spotlight Layer */}
              <div className="skill-spotlight" />

              <div className="skill-head">
                <div className="skill-head-icon">{cat.icon}</div>
                <div>
                  <span className="skill-index font-display">{cat.id}</span>
                  <h3>{cat.title}</h3>
                </div>
              </div>

              <div className="skill-tags">
                {cat.skills.map((skill, idx) => (
                  <div key={idx} className="tag">
                    <span className="tag-name">{skill.name}</span>
                    <span className="tag-badge">{skill.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        </div>
      </div>

      <style>{`
        .skills-section {
          background: var(--bg-soft);
          border-top: 1px solid var(--border-soft);
        }

        .skills-container {
          max-width: 1400px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.2rem;
        }

        @media (max-width: 1200px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        .skill-card {
          --mx: 50%;
          --my: 50%;
          position: relative;
          background: linear-gradient(160deg, rgba(255, 255, 255, 0.03), transparent);
          border: 1px solid var(--border-softer);
          border-radius: var(--radius-md);
          padding: 1.8rem 1.25rem;
          overflow: hidden;
          transition: border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
        }

        .skill-card:hover {
          border-color: var(--accent-glow);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .skill-spotlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(280px circle at var(--mx) var(--my), var(--accent-soft), transparent 65%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .skill-card:hover .skill-spotlight {
          opacity: 1;
        }

        .skill-head {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          margin-bottom: 1.6rem;
        }

        .skill-head-icon {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          font-size: 1.5rem;
          background: var(--accent-soft);
          border: 1px solid var(--accent-glow);
          border-radius: var(--radius-md);
          color: var(--accent);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s ease;
        }

        .skill-card:hover .skill-head-icon {
          transform: rotate(-8deg) scale(1.1);
          box-shadow: 0 0 22px var(--accent-soft);
        }

        .skill-index {
          color: var(--accent);
          font-size: 0.82rem;
          opacity: 0.7;
        }

        .skill-head h3 {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 500;
          margin-top: 0.15rem;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .tag {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-softer);
          background: rgba(255, 255, 255, 0.02);
          font-size: 0.78rem;
          color: var(--text-muted);
          transition: all 0.3s ease;
        }

        .tag-name {
          font-weight: 500;
        }

        .tag-badge {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          color: var(--accent);
          background: var(--accent-soft);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }

        .tag:hover {
          border-color: var(--accent);
          color: var(--text);
          background: var(--accent-soft);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
