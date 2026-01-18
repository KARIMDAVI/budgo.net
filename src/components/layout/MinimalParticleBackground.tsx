'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

export function MinimalParticleBackground(): JSX.Element {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Alpha: true is often faster for compositing over DOM elements
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // PERFORMANCE: Use TypedArrays (Structure of Arrays) for cache locality
    // Cap particles to 150 for "Minimal" aesthetic and guaranteed 60fps
    const MAX_PARTICLES = 150;
    const pos = new Float32Array(MAX_PARTICLES * 2); // [x1, y1, x2, y2, ...]
    const vel = new Float32Array(MAX_PARTICLES * 2); // [vx1, vy1, vx2, vy2, ...]
    const sizes = new Float32Array(MAX_PARTICLES);   // [r1, r2, ...]
    let activeParticles = 0;

    // Config
    const CONNECTION_DIST = 140;
    const CONNECTION_DIST_SQ = CONNECTION_DIST * CONNECTION_DIST;
    
    // Theme Colors (Sky Blue)
    // Dark: Sky-400 (#38BDF8), Light: Sky-500 (#0EA5E9)
    const COLOR_DARK = '56, 189, 248';
    const COLOR_LIGHT = '14, 165, 233';

    const initParticles = () => {
      width = container.clientWidth;
      height = container.clientHeight;

      // Handle High DPI
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Calculate minimal density
      const density = Math.floor((width * height) / 18000);
      activeParticles = Math.min(density, MAX_PARTICLES);

      for (let i = 0; i < activeParticles; i++) {
        pos[i * 2] = Math.random() * width;
        pos[i * 2 + 1] = Math.random() * height;
        
        // Slow, fluid motion
        vel[i * 2] = (Math.random() - 0.5) * 0.3;
        vel[i * 2 + 1] = (Math.random() - 0.5) * 0.3;
        
        sizes[i] = Math.random() * 1.5 + 0.5;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      const isDark = theme === 'dark';
      const rgb = isDark ? COLOR_DARK : COLOR_LIGHT;
      
      // Set Base Styles (Batching)
      ctx.fillStyle = `rgb(${rgb})`;
      ctx.strokeStyle = `rgb(${rgb})`;
      ctx.lineWidth = 0.5;

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      for (let i = 0; i < activeParticles; i++) {
        const px = i * 2;
        const py = i * 2 + 1;
        
        // Update Position
        pos[px] += vel[px];
        pos[py] += vel[py];

        // Bounce
        if (pos[px] < 0 || pos[px] > width) vel[px] *= -1;
        if (pos[py] < 0 || pos[py] > height) vel[py] *= -1;

        const x = pos[px];
        const y = pos[py];

        // Draw Dot
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(x, y, sizes[i], 0, Math.PI * 2);
        ctx.fill();

        // Draw Connections
        for (let j = i + 1; j < activeParticles; j++) {
          const px2 = j * 2;
          const py2 = j * 2 + 1;
          const x2 = pos[px2];
          const y2 = pos[py2];
          
          const dx = x - x2;
          const dy = y - y2;
          const distSq = dx * dx + dy * dy;

          if (distSq < CONNECTION_DIST_SQ) {
            // Linear fade approximation
            const dist = Math.sqrt(distSq);
            ctx.globalAlpha = (1 - dist / CONNECTION_DIST) * 0.15; // Subtle lines
            
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }

        // Mouse Interaction
        if (mouseX > 0) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distSq = dx * dx + dy * dy;
          
          if (distSq < 22500) { // 150^2
             const dist = Math.sqrt(distSq);
             ctx.globalAlpha = (1 - dist / 150) * 0.3;
             ctx.beginPath();
             ctx.moveTo(x, y);
             ctx.lineTo(mouseX, mouseY);
             ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    initParticles();
    window.addEventListener('resize', initParticles);
    window.addEventListener('mousemove', handleMouseMove);
    draw();

    return () => {
      window.removeEventListener('resize', initParticles);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 bg-[#f8f9fa] dark:bg-[#0a0a0f] transition-colors duration-500">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block"
        style={{ pointerEvents: 'none' }}
      />
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20 pointer-events-none" />
    </div>
  );
}
