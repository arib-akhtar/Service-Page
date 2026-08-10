import React, { useEffect, useRef } from 'react';

const TrustBadge = () => {
  const sectionRef = useRef(null);

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

    const elements = sectionRef.current.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="stats" className="bg-transparent text-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title Header */}
        <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-[length:200%_auto] bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine mb-1 pb-2">
            Trusted by 300+ Businesses
          </h2>
          <p className="text-base sm:text-lg text-[#ffff] max-w-2xl mx-auto font-medium">
            Numbers don't lie. Here's the impact we've delivered across India and beyond.
          </p>
        </div>

        {/* 4-Column Balanced Grid Layout with Hover Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
          
          {/* Card 1: Clients Served - Background set to transparent */}
          <div className="bg-transparent border border-slate-800/80 p-8 rounded-2xl flex flex-col items-center text-center shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#FFD700]/40 hover:shadow-[0_0_30px_rgba(255,215,0,0.08)] cursor-pointer scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-100">
            <div className="text-[#a855f7] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold bg-[length:200%_auto] bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine mb-2">
              300+
            </h3>
            <p className="text-xs sm:text-sm uppercase tracking-wider text-[#ffff] font-medium">
              Clients Served
            </p>
          </div>

          {/* Card 2: 5-Star Reviews - Background set to transparent */}
          <div className="bg-transparent border border-slate-800/80 p-8 rounded-2xl flex flex-col items-center text-center shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#FFD700]/40 hover:shadow-[0_0_30px_rgba(255,215,0,0.08)] cursor-pointer scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-200">
            <div className="text-[#eab308] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold bg-[length:200%_auto] bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine mb-2">
              2400+
            </h3>
            <p className="text-xs sm:text-sm uppercase tracking-wider text-[#ffff] font-medium">
              5-Star Reviews
            </p>
          </div>

          {/* Card 3: Uptime Guarantee - Background set to transparent */}
          <div className="bg-transparent border border-slate-800/80 p-8 rounded-2xl flex flex-col items-center text-center shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#FFD700]/40 hover:shadow-[0_0_30px_rgba(255,215,0,0.08)] cursor-pointer scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-300">
            <div className="text-[#f97316] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold bg-[length:200%_auto] bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine mb-2">
              99.9%
            </h3>
            <p className="text-xs sm:text-sm uppercase tracking-wider text-[#ffff] font-medium">
              Uptime Guarantee
            </p>
          </div>

          {/* Card 4: Support Available - Background set to transparent */}
          <div className="bg-transparent border border-slate-800/80 p-8 rounded-2xl flex flex-col items-center text-center shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#FFD700]/40 hover:shadow-[0_0_30px_rgba(255,215,0,0.08)] cursor-pointer scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-400">
            <div className="text-[#3b82f6] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold bg-[length:200%_auto] bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine mb-2">
              24/7
            </h3>
            <p className="text-xs sm:text-sm uppercase tracking-wider text-[#ffff] font-medium">
              Support Available
            </p>
          </div>

        </div>

        {/* Lower Centered Full-Width MSME Badge Container - Background set to transparent */}
        <div className="bg-transparent border border-slate-800/80 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#FFD700]/40 hover:shadow-[0_0_35px_rgba(255,215,0,0.06)] cursor-pointer scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-500">
          
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#FFD700] flex-shrink-0 transition-transform duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="4" y="10" width="16" height="11" rx="1" />
                <line x1="12" y1="10" x2="12" y2="21" />
                <line x1="8" y1="10" x2="8" y2="21" />
                <line x1="16" y1="10" x2="16" y2="21" />
                <path d="M2 10l10-5 10 5" />
              </svg>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold bg-[length:200%_auto] text-shadow-white mb-0.5">
                MSME Registered Enterprise
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 font-medium bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">
                Government of India — Ministry of Micro, Small & Medium Enterprises
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center text-xs sm:text-sm font-semibold">
            <a 
              href="/udyamcertificate.pdf" 
              className="text-[#FFD700] hover:text-[#FFFACD] hover:underline flex items-center gap-1 transition-all duration-200 hover:translate-x-0.5"
            >
              <span>Verify Registration</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            
            <span className="text-slate-700 hidden sm:inline">|</span>
            
            <a 
              href="/udyam-certificate.pdf" 
              className="text-[#FFD700] hover:text-[#FFFACD] hover:underline flex items-center gap-1 transition-all duration-200 hover:translate-x-0.5"
            >
              <span>Verify Udyam Card</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustBadge;