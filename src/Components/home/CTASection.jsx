import React, { useEffect, useRef } from 'react';

const CTASection = () => {
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
    <section ref={sectionRef} id="cta" className="bg-transparent text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Main CTA Large Card Container - Updated background to transparent */}
        <div className="relative overflow-hidden bg-transparent border border-slate-800/80 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-10 md:p-16 text-center shadow-2xl transition-all duration-300 ease-out hover:border-[#FFD700]/30 hover:shadow-[0_0_50px_rgba(255,215,0,0.05)] scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
          
          {/* Decorative subtle background gradient radial blast */}
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.02)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Heading with Signature Shiny Gold Gradient */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight bg-[length:200%_auto] bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine mb-4 sm:mb-6 leading-tight">
             <span className="text-[#ffff]">Ready to Transform Your </span> <br className="hidden sm:inline" /> Digital Presence?
            </h2>

            {/* Subtext description */}
            <p className="text-sm sm:text-base md:text-lg text-[#ffff] font-medium mb-8 sm:mb-10 max-w-2xl leading-relaxed px-2">
              Let's build something extraordinary together. Drop us a message — we reply within 15 minutes.
            </p>

            {/* Action Button updated with Aivon Tech */}
            <a
              href="https://wa.me/918789963987?text=Hi%20Aivon%20Tech,%20I%20want%20to%20transform%20my%20digital%20presence!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-bold text-black bg-[length:200%_auto] bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm md:text-base tracking-wide shadow-[0_4px_20px_rgba(255,215,0,0.15)] transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] cursor-pointer text-center"
            >
              {/* Premium Filled WhatsApp SVG Icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  fill="currentColor" 
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 -ml-2 mr-0.5 scale-x-150 scale-y-150 "
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.6-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.2 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              <span>Start a Conversation on WhatsApp</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;