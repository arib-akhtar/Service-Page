import React, { useState, useEffect, useRef } from 'react';

const Hireme = () => {
  const canvasRef = useRef(null);
  const pageRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formResult, setFormResult] = useState({ message: '', type: '', visible: false });

  // Scroll and Zoom Intersection Observer Effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10', 'scale-95');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = pageRef.current.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Luxury Orb Canvas Background Effect
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

    const mouse = { x: null, y: null, targetX: null, targetY: null, radius: 150 };
    const handleMouseMove = (e) => { mouse.targetX = e.clientX; mouse.targetY = e.clientY; };
    const handleMouseLeave = () => { mouse.targetX = null; mouse.targetY = null; };
    const handleTouchMove = (e) => { if (e.touches.length > 0) { mouse.targetX = e.touches[0].clientX; mouse.targetY = e.touches[0].clientY; } };
    const handleTouchEnd = () => { mouse.targetX = null; mouse.targetY = null; };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    class LuxuryOrb {
      constructor() {
        this.x = Math.random() * logicalWidth;
        this.y = Math.random() * logicalHeight;
        this.baseVx = (Math.random() - 0.5) * 0.16;
        this.baseVy = (Math.random() - 0.5) * 0.16;
        this.vx = this.baseVx;
        this.vy = this.baseVy;
        this.radius = Math.random() * 20 + 8;
        this.colorType = Math.random() > 0.4 ? 'gold' : 'silver';
        this.alpha = Math.random() * 0.35 + 0.15;
        this.offsetX = 0;
        this.offsetY = 0;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x - this.radius < 0) { this.x = this.radius; this.vx *= -1; }
        else if (this.x + this.radius > logicalWidth) { this.x = logicalWidth - this.radius; this.vx *= -1; }
        if (this.y - this.radius < 0) { this.y = this.radius; this.vy *= -1; }
        else if (this.y + this.radius > logicalHeight) { this.y = logicalHeight - this.radius; this.vy *= -1; }

        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const pushX = (dx / dist) * force * -25;
            const pushY = (dy / dist) * force * -25;
            this.offsetX += (pushX - this.offsetX) * 0.1;
            this.offsetY += (pushY - this.offsetY) * 0.1;
          } else {
            this.offsetX += (0 - this.offsetX) * 0.05;
            this.offsetY += (0 - this.offsetY) * 0.05;
          }
        } else {
          this.offsetX += (0 - this.offsetX) * 0.05;
          this.offsetY += (0 - this.offsetY) * 0.05;
        }
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        const renderX = this.x + this.offsetX;
        const renderY = this.y + this.offsetY;
        const highlightX = renderX - this.radius * 0.3;
        const highlightY = renderY - this.radius * 0.3;
        const gradient = ctx.createRadialGradient(highlightX, highlightY, this.radius * 0.05, renderX, renderY, this.radius);
        if (this.colorType === 'gold') {
          gradient.addColorStop(0, 'rgba(255, 248, 220, 0.45)');
          gradient.addColorStop(0.35, 'rgba(212, 175, 55, 0.16)');
          gradient.addColorStop(1, 'rgba(212, 175, 55, 0.01)');
          ctx.strokeStyle = 'rgba(212, 175, 55, 0.22)';
        } else {
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.55)');
          gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.1)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0.01)');
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        }
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(renderX, renderY, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(highlightX, highlightY, 0.8, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.restore();
      }
    }

    const orbs = Array.from({ length: 32 }, () => new LuxuryOrb());
    const animate = () => {
      ctx.fillStyle = '#040406';
      ctx.fillRect(0, 0, logicalWidth, logicalHeight);
      if (mouse.targetX !== null) {
        if (mouse.x === null) { mouse.x = mouse.targetX; mouse.y = mouse.targetY; }
        else { mouse.x += (mouse.targetX - mouse.x) * 0.08; mouse.y += (mouse.targetY - mouse.y) * 0.08; }
      } else { mouse.x = null; mouse.y = null; }

      if (mouse.x !== null) {
        ctx.save();
        const cursorGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius * 1.1);
        cursorGlow.addColorStop(0, 'rgba(212, 175, 55, 0.04)');
        cursorGlow.addColorStop(1, 'rgba(212, 175, 55, 0)');
        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

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
          if (dist < 155) {
            const alpha = (1 - dist / 155) * 0.12;
            ctx.save();
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(rx1, ry1);
            ctx.lineTo(rx2, ry2);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      orbs.forEach(orb => { orb.update(); orb.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Form Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormResult({ message: '', type: '', visible: false });

    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: json
      });
      const res = await response.json();

      if (response.status === 200) {
        setFormResult({ message: "Proposal sent successfully! Check your email soon.", type: "text-[#FFD700]", visible: true });
        e.target.reset();
      } else {
        setFormResult({ message: res.message || "Something went wrong.", type: "text-red-500", visible: true });
      }
    } catch (error) {
      setFormResult({ message: "Something went wrong. Please try again.", type: "text-red-500", visible: true });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setFormResult((prev) => ({ ...prev, visible: false }));
      }, 5000);
    }
  };

  return (
    <div ref={pageRef}>
      <br />
      <br />
      <div className="bg-[#040406] text-white min-h-screen flex items-center justify-center font-sans relative overflow-x-hidden py-12 px-4 selection:bg-[#FFD700]/30">
        
        <canvas ref={canvasRef} id="luxuryOrbCanvas" className="fixed top-0 left-0 w-full h-full pointer-events-auto z-0"></canvas>

        <div className="w-full max-w-2xl bg-[#0d0d11]/75 backdrop-blur-xl border border-[#FFD700]/20 rounded-3xl p-8 md:p-10 shadow-2xl relative z-10 transition-all duration-500 hover:border-[#FFD700]/30 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent mb-3">
              Let's Build Something Extraordinary
            </h1>
            <p className="text-sm md:text-base text-gray-400 max-w-md mx-auto">
              Drop your details below to connect with <span className="bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent font-semibold">Aivon Tech</span>. We typically respond swiftly to kickstart your domain domination.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-20">
            
            {/* Updated Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="f1cab846-2bc4-4822-abea-b000005765a1" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Full Name <span className="text-[#FFD700]">*</span></label>
                <input type="text" id="name" name="name" required placeholder="John Doe" className="w-full bg-black/50 border border-gray-800 focus:border-[#FFD700]/60 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none transition-all duration-200" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Phone Number <span className="text-[#FFD700]">*</span></label>
                <input type="tel" id="phone" name="phone" required placeholder="+91 XXXXX XXXXX" className="w-full bg-black/50 border border-gray-800 focus:border-[#FFD700]/60 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none transition-all duration-200" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Business Email <span className="text-[#FFD700]">*</span></label>
                <input type="email" id="email" name="email" required placeholder="john@company.com" className="w-full bg-black/50 border border-gray-800 focus:border-[#FFD700]/60 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none transition-all duration-200" />
              </div>

              <div>
                <label htmlFor="organization" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Organization / Company</label>
                <input type="text" id="organization" name="organization" placeholder="Aivon Tech" className="w-full bg-black/50 border border-gray-800 focus:border-[#FFD700]/60 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none transition-all duration-200" />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Required Service <span className="text-[#FFD700]">*</span></label>
              <div className="relative">
                <select id="service" name="service" required defaultValue="" className="w-full bg-black/50 border border-gray-800 focus:border-[#FFD700]/60 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none transition-all duration-200 appearance-none cursor-pointer">
                  <option value="" disabled className="bg-[#0d0d11] text-gray-500">Select a service category...</option>
                  <option value="marketing" className="bg-[#0a0a0c]">Marketing</option>
                  <option value="smm" className="bg-[#0a0a0c]">Social Media Management</option>
                  <option value="ads" className="bg-[#0a0a0c]">Ad Creatives</option>
                  <option value="graphics" className="bg-[#0a0a0c]">Graphic Designing</option>
                  <option value="video" className="bg-[#0a0a0c]">Video Editing</option>
                  <option value="content" className="bg-[#0a0a0c]">Content Management</option>
                  <option value="webdev" className="bg-[#0a0a0c]">Web Development</option>
                  <option value="automation" className="bg-[#0a0a0c]">AI Tools & Automation</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#FFD700]">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Project Brief / Message <span className="text-[#FFD700]">*</span></label>
              <textarea id="message" name="message" rows="4" required placeholder="Tell us about your project goals, timelines, or specific requirements..." className="w-full bg-black/50 border border-gray-800 focus:border-[#FFD700]/60 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none transition-all duration-200 resize-none"></textarea>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 rounded border-gray-800 bg-black text-[#FFD700] focus:ring-[#FFD700]/50 cursor-pointer accent-[#FFD700]" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-400">I agree to receive communications and project updates from Aivon Tech.</label>
              </div>
            </div>

            {formResult.visible && (
              <div className={`text-center text-sm font-medium ${formResult.type}`}>
                {formResult.message}
              </div>
            )}

            <div className="pt-4 flex flex-col-reverse sm:flex-row gap-4 items-center justify-between">
              <a href="/" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors duration-200 py-2 relative z-30">&larr; Back to Network</a>
              <button type="submit" disabled={loading} className="w-full sm:w-auto bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-xl shadow-lg shadow-[#FFD700]/10 hover:shadow-[#FFD700]/20 active:scale-[0.98] transition-all duration-200 cursor-pointer relative z-30 disabled:opacity-50">
                {loading ? "Sending..." : "Submit Proposal"}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Hireme;