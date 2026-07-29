import React, { useEffect, useState } from 'react';

export default function ScrollWatermark({ text, text2, positionClass = '', speed = 0.15 }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const line1 = text || "MUHAMMED SAWAD K • GOLANG DEVELOPER";
  const line2 = text2 || text || "HIGH THROUGHPUT MICROSERVICES & REACT PLATFORMS";

  return (
    <div className={`scroll-watermark-dual-wrap ${positionClass}`}>
      {/* Top Line: Glides LEFT */}
      <div 
        className="scroll-wm-line line-left"
        style={{
          transform: `translate3d(${-offset}px, 0, 0)`
        }}
      >
        {line1}
      </div>

      {/* Bottom Line: Glides RIGHT */}
      <div 
        className="scroll-wm-line line-right"
        style={{
          transform: `translate3d(${offset - 150}px, 0, 0)`
        }}
      >
        {line2}
      </div>
    </div>
  );
}
