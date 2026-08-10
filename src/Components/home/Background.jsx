import React, { useEffect, useRef } from 'react';

export default function LuxuryOrbBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Track logical screen boundaries rather than physical canvas bounds to avoid DPR drifting
    let logicalWidth = window.innerWidth;
    let logicalHeight = window.innerHeight;

    const resizeCanvas = () => {
      logicalWidth = window.innerWidth;
      logicalHeight = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      
      // Scaling backing store size for high DPI crispness
      canvas.width = logicalWidth * dpr;
      canvas.height = logicalHeight * dpr;
      
      // Scaling drawing context to match logical pixels
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse coordinates in logical pixels
    const mouse = { 
      x: null, 
      y: null, 
      targetX: null, 
      targetY: null, 
      radius: 140 
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.targetX = null;
      mouse.targetY = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    class LuxuryOrb {
      constructor() {
        this.x = Math.random() * logicalWidth;
        this.y = Math.random() * logicalHeight;
        this.baseVx = (Math.random() - 0.5) * 0.18; // Super-slow elegant base velocity
        this.baseVy = (Math.random() - 0.5) * 0.18;
        this.vx = this.baseVx;
        this.vy = this.baseVy;
        this.radius = Math.random() * 20 + 8; // Varied dimensions for 3D illusion
        this.colorType = Math.random() > 0.4 ? 'gold' : 'silver';
        this.alpha = Math.random() * 0.35 + 0.15;
        this.offsetX = 0; // Displacement offsets for interactive springs
        this.offsetY = 0;
      }

      update() {
        // Natural movement updates
        this.x += this.vx;
        this.y += this.vy;

        // CRITICAL BUG FIX: Collision bounds verified against logical screen sizes instead of physical pixels
        if (this.x - this.radius < 0) {
          this.x = this.radius;
          this.vx *= -1;
        } else if (this.x + this.radius > logicalWidth) {
          this.x = logicalWidth - this.radius;
          this.vx *= -1;
        }

        if (this.y - this.radius < 0) {
          this.y = this.radius;
          this.vy *= -1;
        } else if (this.y + this.radius > logicalHeight) {
          this.y = logicalHeight - this.radius;
          this.vy *= -1;
        }

        // SPRING-ELASTIC INTERACTION: Softly pull back orbs pushed by the cursor
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouse.radius) {
            // Repulsive spring force
            const force = (mouse.radius - dist) / mouse.radius;
            const pushX = (dx / dist) * force * 15;
            const pushY = (dy / dist) * force * 15;
            
            // Smoothly interpolate towards displacement
            this.offsetX += (-pushX - this.offsetX) * 0.1;
            this.offsetY += (-pushY - this.offsetY) * 0.1;
          } else {
            // Elastic return back to baseline
            this.offsetX += (0 - this.offsetX) * 0.05;
            this.offsetY += (0 - this.offsetY) * 0.05;
          }
        } else {
          // Absolute return on hover end
          this.offsetX += (0 - this.offsetX) * 0.05;
          this.offsetY += (0 - this.offsetY) * 0.05;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;

        const renderX = this.x + this.offsetX;
        const renderY = this.y + this.offsetY;

        // Render specular shine highlights inside spheres (balls)
        const highlightX = renderX - this.radius * 0.3;
        const highlightY = renderY - this.radius * 0.3;
        
        const gradient = ctx.createRadialGradient(
          highlightX, highlightY, this.radius * 0.05,
          renderX, renderY, this.radius
        );

        if (this.colorType === 'gold') {
          gradient.addColorStop(0, 'rgba(255, 248, 220, 0.45)'); // Golden reflection glare
          gradient.addColorStop(0.35, 'rgba(212, 175, 55, 0.16)');
          gradient.addColorStop(1, 'rgba(212, 175, 55, 0.01)');
          ctx.strokeStyle = 'rgba(212, 175, 55, 0.22)';
        } else {
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.55)'); // Chrome reflection glare
          gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.1)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0.01)');
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(renderX, renderY, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // Delicate outer bounds
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Glowing core pinhole
        ctx.beginPath();
        ctx.arc(highlightX, highlightY, 0.8, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        ctx.restore();
      }
    }

    const orbs = Array.from({ length: 30 }, () => new LuxuryOrb());

    const animate = () => {
      // Clear frame with deep theme-aware dark background
      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? '#040406' : '#FAF8F5';
      ctx.fillRect(0, 0, logicalWidth, logicalHeight);

      // Smooth coordinate interpolation for lag-free cursor tracking
      if (mouse.targetX !== null) {
        if (mouse.x === null) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.08;
          mouse.y += (mouse.targetY - mouse.y) * 0.08;
        }
      } else {
        mouse.x = null;
        mouse.y = null;
      }

      // 1. Render Interactive Golden Cursor Aura Glow (Gives instant tactile feedback)
      if (mouse.x !== null) {
        ctx.save();
        const cursorGlow = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mouse.radius * 1.2
        );
        cursorGlow.addColorStop(0, isDark ? 'rgba(212, 175, 55, 0.04)' : 'rgba(212, 175, 55, 0.08)');
        cursorGlow.addColorStop(1, 'rgba(212, 175, 55, 0)');
        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 2. Draw micro-fine connection lines between closely situated orbs
      for (let i = 0; i < orbs.length; i++) {
        for (let j = i + 1; j < orbs.length; j++) {
          const o1 = orbs[i];
          const o2 = orbs[j];
          
          const rx1 = o1.x + o1.offsetX;
          const ry1 = o1.y + o1.offsetY;
          const rx2 = o2.x + o2.offsetX;
          const ry2 = o2.y + o2.offsetY;

          const dx = rx1 - rx2;
          const dy = ry1 - ry2;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.12;
            ctx.save();
            ctx.strokeStyle = isDark ? `rgba(212, 175, 55, ${alpha})` : `rgba(184, 144, 71, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(rx1, ry1);
            ctx.lineTo(rx2, ry2);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // 3. Update and draw physical orbs
      orbs.forEach(orb => {
        orb.update();
        orb.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-10]"
    />
  );
}