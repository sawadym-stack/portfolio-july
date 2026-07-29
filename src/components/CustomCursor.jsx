import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'VIDEO' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.project-card') ||
        target.closest('.skill-card') ||
        target.closest('.exec-card') ||
        target.closest('.brand-badge') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive');
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Glowing Inner Dot */}
      <div 
        className="custom-cursor-dot"
        style={{
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0)`
        }}
      />

      {/* Expanding Smooth Outer Ring */}
      <div 
        className={`custom-cursor-ring ${isHovered ? 'hovered' : ''}`}
        style={{
          transform: `translate3d(${pos.x - (isHovered ? 30 : 18)}px, ${pos.y - (isHovered ? 30 : 18)}px, 0)`
        }}
      />

      <style>{`
        .custom-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
          pointer-events: none !important;
          z-index: 9999999;
          transition: transform 0.05s ease-out;
          box-shadow: 0 0 10px var(--accent);
        }

        .custom-cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 36px;
          height: 36px;
          border: 1.5px solid var(--accent-glow);
          border-radius: 50%;
          pointer-events: none !important;
          z-index: 9999998;
          transition: transform 0.15s ease-out, width 0.25s ease, height 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }

        .custom-cursor-ring.hovered {
          width: 60px;
          height: 60px;
          background: var(--accent-soft);
          border-color: var(--accent);
          box-shadow: 0 0 20px var(--accent-soft);
        }

        @media (max-width: 768px), (hover: none) {
          .custom-cursor-dot, .custom-cursor-ring {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
