import React, { useState, useEffect, useRef } from 'react';
import LuxuryOrbBackground from './Background';

const Hireme = () => {
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
    <div ref={pageRef} className="bg-[#040406] text-white min-h-screen flex items-center justify-center font-sans relative overflow-x-hidden pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 selection:bg-[#FFD700]/30">
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <LuxuryOrbBackground />
      </div>

      <div className="w-full max-w-2xl bg-[#0d0d11]/80 backdrop-blur-xl border border-[#FFD700]/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl relative z-10 transition-all duration-500 hover:border-[#FFD700]/30 scroll-animate opacity-0 translate-y-10 scale-95 duration-700 ease-out my-auto">
        
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent mb-2 pb-1">
            Let's Build Something Extraordinary
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-md mx-auto leading-relaxed">
            Drop your details below to connect with <span className="bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent font-semibold">Aivon Tech</span>. We typically respond swiftly to kickstart your domain domination.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative z-20">
          
          {/* Updated Web3Forms Access Key */}
          <input type="hidden" name="access_key" value="f1cab846-2bc4-4822-abea-b000005765a1" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-gray-300 mb-1.5 sm:mb-2">Full Name <span className="text-[#FFD700]">*</span></label>
              <input type="text" id="name" name="name" required placeholder="John Doe" className="w-full bg-black/50 border border-gray-800 focus:border-[#FFD700]/60 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none transition-all duration-200" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-gray-300 mb-1.5 sm:mb-2">Phone Number <span className="text-[#FFD700]">*</span></label>
              <input type="tel" id="phone" name="phone" required placeholder="+91 XXXXX XXXXX" className="w-full bg-black/50 border border-gray-800 focus:border-[#FFD700]/60 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none transition-all duration-200" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="email" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-gray-300 mb-1.5 sm:mb-2">Business Email <span className="text-[#FFD700]">*</span></label>
              <input type="email" id="email" name="email" required placeholder="john@company.com" className="w-full bg-black/50 border border-gray-800 focus:border-[#FFD700]/60 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none transition-all duration-200" />
            </div>

            <div>
              <label htmlFor="organization" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-gray-300 mb-1.5 sm:mb-2">Organization / Company</label>
              <input type="text" id="organization" name="organization" placeholder="Aivon Tech" className="w-full bg-black/50 border border-gray-800 focus:border-[#FFD700]/60 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none transition-all duration-200" />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-gray-300 mb-1.5 sm:mb-2">Required Service <span className="text-[#FFD700]">*</span></label>
            <div className="relative">
              <select id="service" name="service" required defaultValue="" className="w-full bg-black/50 border border-gray-800 focus:border-[#FFD700]/60 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-gray-300 focus:outline-none transition-all duration-200 appearance-none cursor-pointer">
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
            <label htmlFor="message" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-gray-300 mb-1.5 sm:mb-2">Project Brief / Message <span className="text-[#FFD700]">*</span></label>
            <textarea id="message" name="message" rows="4" required placeholder="Tell us about your project goals, timelines, or specific requirements..." className="w-full bg-black/50 border border-gray-800 focus:border-[#FFD700]/60 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none transition-all duration-200 resize-none"></textarea>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 rounded border-gray-800 bg-black text-[#FFD700] focus:ring-[#FFD700]/50 cursor-pointer accent-[#FFD700]" />
            </div>
            <div className="ml-3 text-xs sm:text-sm">
              <label htmlFor="terms" className="text-gray-300 leading-normal">I agree to receive communications and project updates from Aivon Tech.</label>
            </div>
          </div>

          {formResult.visible && (
            <div className={`text-center text-xs sm:text-sm font-medium ${formResult.type} p-3 rounded-xl bg-black/40 border border-gray-800`}>
              {formResult.message}
            </div>
          )}

          <div className="pt-2 sm:pt-4 flex flex-col-reverse sm:flex-row gap-4 items-center justify-between">
            <a href="/" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#FFD700] transition-colors duration-200 py-2 relative z-30">&larr; Back to Network</a>
            <button type="submit" disabled={loading} className="w-full sm:w-auto bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-bold uppercase tracking-wider text-xs px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-[#FFD700]/10 hover:shadow-[#FFD700]/20 active:scale-[0.98] transition-all duration-200 cursor-pointer relative z-30 disabled:opacity-50">
              {loading ? "Sending..." : "Submit Proposal"}
            </button>
          </div>

        </form>
      </div>

    </div>
  );
};

export default Hireme;