import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

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

    const elements = heroRef.current.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={heroRef}>
      <section id='home' className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center text-white overflow-hidden pt-16 pb-12 sm:pt-28 sm:pb-16 md:pt-36">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "" }}
        >
          <div className="absolute inset-0 bg-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col justify-between h-full">
          <div>
            {/* Top MSME Badge styled compact like first image */}
            <div className="mb-4 sm:mb-6 flex justify-center scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
              <a 
                href="/udyamcertificate.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[10px] sm:text-xs font-medium text-[#FFD700] tracking-wider uppercase shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:bg-[#D4AF37]/20 transition-all hover:scale-105"
              >
                <span>🚀</span>
                <span>INDIA'S MSME-CERTIFIED DIGITAL PARTNER</span>
                <span>🔗</span>
              </a>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
              Welcome to the <br className="hidden sm:inline" />
              <span className="text-blue-500 block sm:inline text-4xl sm:text-6xl md:text-8xl font-bold bg-[length:200%_auto] bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine font-serif">
                Aivon Tech
              </span>
            </h1>
            <p className="text-xs sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-150">
              Crafting High-Performance Websites & Intelligent AI Solutions Under One Unified Vision, Built to Scale Your Operations, Enhance User Experience, and Drive Unmatched Digital Growth.
            </p>
            
            {/* Action buttons styled with fixed fitting width bounds to look clean and compact */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-xs sm:max-w-none mx-auto mb-8 sm:mb-12 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-300">
              
              <a 
                href="#services" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-black font-bold bg-[length:200%_auto] bg-gradient-to-r from-[#FFD700] via-[#d1cb92] to-[#FFD700] bg-clip-transparent animate-shine hover:bg-[#D4AF37]/30 hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all hover:scale-105"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span>Explore Services</span>
              </a>
              
              <a 
                href="https://wa.me/918789963987?text=Hi%20Aivon%20Tech,%20I%20want%20to%20transform%20my%20digital%20presence!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-black font-bold bg-[length:200%_auto] bg-gradient-to-r from-[#FFD700] via-[#d1cb92] to-[#FFD700] bg-clip-transparent animate-shine hover:bg-[#D4AF37]/30 hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all hover:scale-105"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  fill="currentColor" 
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.6-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.2 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                <span>Chat with AIVON TECH</span>
              </a>

            </div>
          </div>
          
          {/* Stats Bar */}
          <section className="pt-4 pb-2 bg-transparent text-white w-full scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-500 overflow-x-auto sm:overflow-visible no-scrollbar">
            <div className="max-w-6xl mx-auto grid grid-cols-4 gap-4 sm:gap-8 text-center min-w-[300px]">
              <div className="hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg sm:text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFFACD] bg-clip-text text-transparent">300+</h3>
                <p className="text-[9px] sm:text-sm mt-1 sm:mt-2 uppercase tracking-wide text-gray-400">Clients Served</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg sm:text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFFACD] bg-clip-text text-transparent">8</h3>
                <p className="text-[9px] sm:text-sm mt-1 sm:mt-2 uppercase tracking-wide text-gray-400">Specialized Services</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg sm:text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFFACD] bg-clip-text text-transparent">2400+</h3>
                <p className="text-[9px] sm:text-sm mt-1 sm:mt-2 uppercase tracking-wide text-gray-400">5-Star Reviews</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg sm:text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFFACD] bg-clip-text text-transparent">MSME</h3>
                <p className="text-[9px] sm:text-sm mt-1 sm:mt-2 uppercase tracking-wide text-gray-400">Certified Business</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Hero;