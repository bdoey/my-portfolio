import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
}

const BackgroundGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  
  // Configuration
  const SPACING = 40;
  const RADIUS = 300; // Interaction radius
  const STIFFNESS = 0.1; // Spring stiffness (return to origin)
  const DAMPING = 0.85; // Velocity damping (friction)
  const FORCE_MULTIPLIER = 0.15; // Mouse push strength

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let points: Point[] = [];
    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Initialize grid points
    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      points = [];
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING;
          const y = j * SPACING;
          points.push({
            x, y,
            originX: x,
            originY: y,
            vx: 0, vy: 0
          });
        }
      }
    };

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const mouse = mouseRef.current;

      // Update Points Physics
      points.forEach(p => {
        // 1. Calculate distance to mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // 2. Apply Mouse Force (Repulsion)
        if (dist < RADIUS) {
          const force = (RADIUS - dist) / RADIUS;
          const angle = Math.atan2(dy, dx);
          const fx = Math.cos(angle) * force * FORCE_MULTIPLIER * 30; // Push away
          const fy = Math.sin(angle) * force * FORCE_MULTIPLIER * 30;
          
          p.vx += fx;
          p.vy += fy;
        }

        // 3. Spring Force (Return to origin)
        const ox = p.originX - p.x;
        const oy = p.originY - p.y;
        
        p.vx += ox * STIFFNESS;
        p.vy += oy * STIFFNESS;

        // 4. Apply Damping & Update Position
        p.vx *= DAMPING;
        p.vy *= DAMPING;
        p.x += p.vx;
        p.y += p.vy;
      });

      // Draw Grid Lines
      ctx.lineWidth = 1;
      
      // We draw lines by connecting neighbors. 
      // Since points is a 1D array representing a 2D grid, we need math to find neighbors.
      const cols = Math.ceil(width / SPACING) + 1;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const col = i % cols;
        const row = Math.floor(i / cols);

        // Check distance to mouse for color intensity
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const alpha = Math.max(0.03, 1 - dist / 400) * 0.3; // dynamic opacity
        
        // Determine color based on proximity (Zinc default -> Primary accent)
        const isActive = dist < 250;
        const strokeColor = isActive 
            ? `rgba(16, 185, 129, ${alpha})` // Primary-500
            : `rgba(255, 255, 255, 0.05)`;   // Zinc base

        ctx.beginPath();
        
        // Draw Right Neighbor
        if (col < cols - 1) {
            const right = points[i + 1];
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(right.x, right.y);
        }

        // Draw Bottom Neighbor
        if (i + cols < points.length) {
            const bottom = points[i + cols];
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(bottom.x, bottom.y);
        }

        ctx.strokeStyle = strokeColor;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default BackgroundGrid;
