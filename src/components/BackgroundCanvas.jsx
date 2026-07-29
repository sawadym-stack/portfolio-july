import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // FC Barcelona Subdued Ambient Node Colors
    const colors = [
      'rgba(0, 77, 152, ',   // FCB Blau
      'rgba(165, 0, 68, ',   // FCB Grana
      'rgba(56, 189, 248, '  // Cyan Light Accent
    ];

    // Create Floating Star Dust Nodes
    const count = Math.min(Math.floor(width / 16), 80);
    const nodes = [];

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
        alphaSpeed: (Math.random() - 0.5) * 0.01
      });
    }

    // Render Star Dust & Ambient Lighting
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move node
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around canvas edges
        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        // Twinkle alpha effect
        node.alpha += node.alphaSpeed;
        if (node.alpha < 0.1 || node.alpha > 0.6) {
          node.alphaSpeed *= -1;
        }

        // Draw glowing particle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.colorPrefix + node.alpha + ')';
        ctx.shadowBlur = 8;
        ctx.shadowColor = node.colorPrefix + '0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
