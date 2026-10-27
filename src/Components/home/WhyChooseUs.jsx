import React, { useEffect, useRef } from 'react';

const WhyChooseUs = () => {
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
    <section ref={sectionRef} id='whychooseus' className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Centered */}
        <div className="mb-12 sm:mb-16 text-center scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
          <h2 className="pb-2 text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine font-serif">Why Aivon Tech?</h2>
          <p className="text-sm sm:text-base md:text-xl text-[#ffff] max-w-2xl mx-auto px-2">
            Built different. Built to deliver. Here's what sets us apart from every other agency.
          </p>
        </div>

        {/* Features Grid - Responsive layout across mobile, tablet, and desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Card 1: Central Hub */}
          <div className="p-6 sm:p-8 border border-white/20 rounded-2xl hover:border-[#FFD700] transition-all duration-300 group scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-150 flex flex-col justify-between">
            <div>
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">🔗</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">Central Hub Architecture</h3>
              <p className="text-[#ffff] text-sm sm:text-base leading-relaxed">
                Every channel, every campaign, every deliverable — all roads lead to one unified WhatsApp-based command center. No scattered emails. One hub to rule them all.
              </p>
            </div>
          </div>

          {/* Card 2: MSME */}
          <div className="p-6 sm:p-8 border border-white/20 rounded-2xl hover:border-[#FFD700] transition-all duration-300 group scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-300 flex flex-col justify-between">
            <div>
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">🏛️</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">MSME Certified Business</h3>
              <p className="text-[#ffff] text-sm sm:text-base leading-relaxed mb-4">
                Registered under the Government of India's MSME initiative. We operate with full legal compliance and enterprise-grade accountability.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-[#FFD700] underline text-xs sm:text-sm font-bold pt-2">
              <a href="/udyamcertificate.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                View Certificate 🔗
              </a>
              <a href="/udyam-certificate.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                View Udyam Card 🔗
              </a>
            </div>
          </div>

          {/* Card 3: AI-Powered */}
          <div className="p-6 sm:p-8 border border-white/20 rounded-2xl hover:border-[#FFD700] transition-all duration-300 group scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-500 md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full flex flex-col justify-between">
            <div>
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">🧠</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">AI-Powered Operations</h3>
              <p className="text-[#ffff] text-sm sm:text-base leading-relaxed">
                From AI-generated ad creatives to automated content calendars and intelligent analytics — we leverage cutting-edge AI to deliver sharper results.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;