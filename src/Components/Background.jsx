import React, { useEffect, useRef } from 'react';

export default function LuxuryOrbBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let logicalWidth = window.innerWidth;
    let logicalHeight = window.innerHeight;

    const resizeCanvas = () => {
      logicalWidth = window.innerWidth;
      logicalHeight = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = logicalWidth * dpr;
      canvas.height = logicalHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const mouse = { 
      x: null, 
      y: null, 
      targetX: null, 
      targetY: null, 
      radius: 180 
    };

    const ripples = []; // Click effect waves

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.targetX = null;
      mouse.targetY = null;
    };

    const handleClick = (e) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: 200,
        alpha: 0.8
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    // 1. Luxury Orbs Class (Size reduced for compact & clean look)
    class LuxuryOrb {
      constructor() {
        this.x = Math.random() * logicalWidth;
        this.y = Math.random() * logicalHeight;
        
        this.angle = Math.random() * Math.PI * 2;
        this.frequency = Math.random() * 0.002 + 0.0008; 
        this.amplitude = Math.random() * 0.3 + 0.1;    
        this.vx = (Math.random() - 0.5) * 0.06;          
        this.vy = (Math.random() - 0.5) * 0.06;
        
        // Reduced size: Now compact (4px to 14px radius instead of 8px to 28px)
        this.radius = Math.random() * 10 + 4;
        this.baseRadius = this.radius;
        
        this.minAlpha = Math.random() * 0.1 + 0.05;
        this.maxAlpha = Math.random() * 0.3 + 0.4; 
        this.blinkSpeed = Math.random() * 0.02 + 0.008;  
        this.blinkTimer = Math.random() * Math.PI * 2;

        this.pulseSpeed = Math.random() * 0.01 + 0.004;
        this.pulseTimer = Math.random() * Math.PI;
        
        this.offsetX = 0;
        this.offsetY = 0;
      }

      update() {
        this.angle += this.frequency;
        this.x += this.vx + Math.cos(this.angle) * this.amplitude;
        this.y += this.vy + Math.sin(this.angle) * this.amplitude;

        this.blinkTimer += this.blinkSpeed;
        this.currentAlpha = this.minAlpha + (Math.sin(this.blinkTimer) + 1) / 2 * (this.maxAlpha - this.minAlpha);

        this.pulseTimer += this.pulseSpeed;
        this.radius = this.baseRadius + Math.sin(this.pulseTimer) * 1;

        if (this.x < -50) this.x = logicalWidth + 50;
        if (this.x > logicalWidth + 50) this.x = -50;
        if (this.y < -50) this.y = logicalHeight + 50;
        if (this.y > logicalHeight + 50) this.y = -50;

        // Interaction with mouse cursor
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const pushX = (dx / dist) * force * 18;
            const pushY = (dy / dist) * force * 18;
            
            this.offsetX += (-pushX - this.offsetX) * 0.08;
            this.offsetY += (-pushY - this.offsetY) * 0.08;
          } else {
            this.offsetX += (0 - this.offsetX) * 0.04;
            this.offsetY += (0 - this.offsetY) * 0.04;
          }
        } else {
          this.offsetX += (0 - this.offsetX) * 0.04;
          this.offsetY += (0 - this.offsetY) * 0.04;
        }

        // Interaction with click ripples
        ripples.forEach(ripple => {
          const dx = ripple.x - (this.x + this.offsetX);
          const dy = ripple.y - (this.y + this.offsetY);
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (Math.abs(dist - ripple.radius) < 30) {
            this.offsetX += (dx / dist) * 10;
            this.offsetY += (dy / dist) * 10;
          }
        });
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.currentAlpha; 

        const renderX = this.x + this.offsetX;
        const renderY = this.y + this.offsetY;

        const highlightX = renderX - this.radius * 0.35;
        const highlightY = renderY - this.radius * 0.35;
        
        const gradient = ctx.createRadialGradient(
          highlightX, highlightY, this.radius * 0.05,
          renderX, renderY, this.radius
        );

        gradient.addColorStop(0, 'rgba(255, 250, 205, 0.95)'); 
        gradient.addColorStop(0.4, 'rgba(255, 215, 0, 0.55)'); 
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0.02)');
        
        ctx.fillStyle = gradient;
        ctx.strokeStyle = 'rgba(255, 215, 0, 0.6)';
        ctx.lineWidth = 0.8;

        ctx.beginPath();
        ctx.arc(renderX, renderY, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(highlightX, highlightY, 0.8, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        ctx.restore();
      }
    }

    // 2. Floating Golden Dust (Stardust) Class
    class Stardust {
      constructor() {
        this.x = Math.random() * logicalWidth;
        this.y = Math.random() * logicalHeight;
        this.size = Math.random() * 1.5 + 0.3;
        this.vx = (Math.random() - 0.5) * 0.1;
        this.vy = (Math.random() - 0.5) * 0.1;
        this.alpha = Math.random() * 0.7 + 0.1;
        this.fadeSpeed = Math.random() * 0.02 + 0.005;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha += Math.sin(Date.now() * 0.002) * 0.01;

        if (this.x < 0) this.x = logicalWidth;
        if (this.x > logicalWidth) this.x = 0;
        if (this.y < 0) this.y = logicalHeight;
        if (this.y > logicalHeight) this.y = 0;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, this.alpha));
        ctx.fillStyle = '#FFFACD';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const orbs = Array.from({ length: 35 }, () => new LuxuryOrb());
    const dusts = Array.from({ length: 50 }, () => new Stardust());

    const animate = () => {
      ctx.fillStyle = '#060609';
      ctx.fillRect(0, 0, logicalWidth, logicalHeight);

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

      // Cursor Glow
      if (mouse.x !== null) {
        ctx.save();
        const cursorGlow = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mouse.radius * 1.4
        );
        cursorGlow.addColorStop(0, 'rgba(255, 215, 0, 0.2)');
        cursorGlow.addColorStop(0.7, 'rgba(255, 215, 0, 0.04)');
        cursorGlow.addColorStop(1, 'rgba(255, 215, 0, 0)');
        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Render Click Ripples
      ripples.forEach((ripple, index) => {
        ripple.radius += 3;
        ripple.alpha -= 0.02;
        if (ripple.alpha <= 0 || ripple.radius >= ripple.maxRadius) {
          ripples.splice(index, 1);
          return;
        }
        ctx.save();
        ctx.strokeStyle = `rgba(255, 215, 0, ${ripple.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      });

      // Render Stardust
      dusts.forEach(dust => {
        dust.update();
        dust.draw();
      });

      // Universal Connection Lines (350px range)
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

          if (dist < 350) {
            const alpha = (1 - dist / 350) * 0.22 * ((o1.currentAlpha + o2.currentAlpha) / 2);
            ctx.save();
            ctx.strokeStyle = `rgba(255, 215, 0, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(rx1, ry1);
            ctx.lineTo(rx2, ry2);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Render Orbs
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
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-10]"
    />
  );
}