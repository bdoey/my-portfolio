
import React, { useEffect, useRef } from 'react';

const BackgroundGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (containerRef.current) {
        containerRef.current.style.setProperty('--mouse-x', `${ev.clientX}px`);
        containerRef.current.style.setProperty('--mouse-y', `${ev.clientY}px`);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      } as React.CSSProperties}
    >
      {/* 1. Static Base Grid (Faint & Professional) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      />

      {/* 2. Interactive Spotlight Grid (Reveals color on hover) */}
      <div 
        className="absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          // The mask follows the mouse coordinates set in the CSS variables
          maskImage: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), black, transparent)`,
          WebkitMaskImage: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), black, transparent)`,
        }}
      />

      {/* 3. Ambient Data Beams (Simulating system activity) */}
      {/* Horizontal Beam */}
      <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/40 to-transparent animate-[scan-horizontal_8s_ease-in-out_infinite]" />
      {/* Vertical Beam */}
      <div className="absolute top-0 left-[70%] w-[1px] h-full bg-gradient-to-b from-transparent via-accent-500/20 to-transparent animate-[scan-vertical_12s_ease-in-out_infinite]" />

      {/* 4. Deep Vignette for Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-90 z-20" />
      
      {/* CSS Keyframes for the beams (Inline for lightweight implementation) */}
      <style>{`
        @keyframes scan-horizontal {
          0% { transform: translateX(-100%) translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%) translateY(50px); opacity: 0; }
        }
        @keyframes scan-vertical {
          0% { transform: translateY(-100%) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100%) translateX(-50px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default BackgroundGrid;
