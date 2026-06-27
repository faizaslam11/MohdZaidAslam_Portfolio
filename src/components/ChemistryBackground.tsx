import React, { useEffect, useRef } from 'react';

interface ChemistryBackgroundProps {
  isDarkMode: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: 'atom' | 'ring';
  ringType?: 'benzene' | 'water';
  color: string;
}

export default function ChemistryBackground({ isDarkMode }: ChemistryBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = window.innerWidth < 768 ? 25 : 60;
    const connectionDistance = 120;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const getColors = () => {
      if (isDarkMode) {
        return {
          atom1: 'rgba(6, 182, 212, 0.45)', // Cyan
          atom2: 'rgba(16, 185, 129, 0.4)',  // Emerald
          line: 'rgba(6, 182, 212, 0.08)',
          text: 'rgba(255, 255, 255, 0.02)'
        };
      } else {
        return {
          atom1: 'rgba(66, 114, 151, 0.25)', // Navy
          atom2: 'rgba(6, 182, 212, 0.22)',  // Cyan
          line: 'rgba(66, 114, 151, 0.05)',
          text: 'rgba(0, 0, 0, 0.015)'
        };
      }
    };

    const initParticles = () => {
      particles = [];
      const colors = getColors();

      for (let i = 0; i < maxParticles; i++) {
        const isRing = Math.random() < 0.2; // 20% benzene rings
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: isRing ? 18 : Math.random() * 3 + 2,
          type: isRing ? 'ring' : 'atom',
          ringType: Math.random() < 0.7 ? 'benzene' : 'water',
          color: Math.random() < 0.5 ? colors.atom1 : colors.atom2,
        });
      }
    };

    const drawHexagon = (context: CanvasRenderingContext2D, x: number, y: number, r: number, color: string) => {
      context.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + r * Math.cos(angle);
        const hy = y + r * Math.sin(angle);
        if (i === 0) {
          context.moveTo(hx, hy);
        } else {
          context.lineTo(hx, hy);
        }
      }
      context.closePath();
      context.strokeStyle = color;
      context.lineWidth = 1;
      context.stroke();

      // Draw inside resonance circle for Benzene ring
      context.beginPath();
      context.arc(x, y, r * 0.6, 0, Math.PI * 2);
      context.stroke();
    };

    const drawWaterMolecule = (context: CanvasRenderingContext2D, x: number, y: number, r: number, color: string) => {
      // Oxygen atom (center)
      context.beginPath();
      context.arc(x, y, 4, 0, Math.PI * 2);
      context.fillStyle = color;
      context.fill();

      // Hydrogens connected
      const angle1 = Math.PI * 0.3;
      const angle2 = Math.PI * 0.7;
      const h1x = x + r * 0.7 * Math.cos(angle1);
      const h1y = y + r * 0.7 * Math.sin(angle1);
      const h2x = x + r * 0.7 * Math.cos(angle2);
      const h2y = y + r * 0.7 * Math.sin(angle2);

      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(h1x, h1y);
      context.moveTo(x, y);
      context.lineTo(h2x, h2y);
      context.strokeStyle = color;
      context.lineWidth = 0.8;
      context.stroke();

      context.beginPath();
      context.arc(h1x, h1y, 2.5, 0, Math.PI * 2);
      context.arc(h2x, h2y, 2.5, 0, Math.PI * 2);
      context.fillStyle = isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.15)';
      context.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = getColors();

      // 1. Move and draw particles
      particles.forEach((p) => {
        // Apply tiny mouse attraction/repulsion
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            // Repel slowly
            p.vx -= (dx / dist) * 0.005;
            p.vy -= (dy / dist) * 0.005;
          }
        }

        // Limit speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 0.8;
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle
        if (p.type === 'ring') {
          if (p.ringType === 'benzene') {
            drawHexagon(ctx, p.x, p.y, p.radius, p.color);
          } else {
            drawWaterMolecule(ctx, p.x, p.y, p.radius, p.color);
          }
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      });

      // 2. Connect particles (chemical bonding simulation)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Calculate opacity based on distance
            const alpha = (1 - dist / connectionDistance) * (isDarkMode ? 0.15 : 0.08);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDarkMode 
              ? `rgba(6, 182, 212, ${alpha})` 
              : `rgba(66, 114, 151, ${alpha})`;
            ctx.lineWidth = 0.5 + alpha * 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white dark:bg-navy-950 transition-colors duration-500">
      {/* Background Decorative Glow Spots (Frosted Glass Theme) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[100px] sm:blur-[130px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[100px] sm:blur-[130px]" />
      <div className="absolute top-[40%] right-[-5%] w-[35%] h-[35%] bg-emerald-400/5 dark:bg-emerald-400/10 rounded-full blur-[90px] sm:blur-[120px]" />
      <div className="absolute bottom-[35%] left-[-5%] w-[35%] h-[35%] bg-cyan-400/5 dark:bg-cyan-400/10 rounded-full blur-[90px] sm:blur-[120px]" />

      {/* Hexagonal Molecular Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.035]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23ffffff' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Fallback pattern for light mode if white stroke isn't visible */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23000000' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Interactive chemistry bonds canvas */}
      <canvas
        id="chemistry-particles-canvas"
        ref={canvasRef}
        className="absolute inset-0 opacity-80 transition-opacity duration-1000"
      />
    </div>
  );
}
