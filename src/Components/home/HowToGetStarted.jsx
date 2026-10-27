import React, { useEffect, useRef } from 'react';

const HowToGetStarted = () => {
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
    // Transparent background taaki aapke background canvas ke sath merge ho sake
    <section ref={sectionRef} className="bg-transparent text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine mb-3 sm:mb-4">
            How to Get Started
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-[#ffff] max-w-2xl mx-auto font-medium px-2">
            Three simple steps. No friction. From zero to launch in record time.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="flex flex-col">
          
          {/* Step 1 */}
          <div className="flex items-start group scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-150">
            {/* Left Timeline Indicator Column */}
            <div className="flex flex-col items-center flex-shrink-0 mr-4 sm:mr-6 md:mr-8">
              {/* Timeline Number Circle */}
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#FFD700]/60 bg-slate-950 font-black text-lg sm:text-xl bg-gradient-to-r from-[#ffff] via-[#ffff] to-[#ffff] bg-clip-text text-transparent animate-shine shadow-lg">
                1
              </div>
              {/* Vertical Connector Line - Top to Next Step */}
              <div className="w-[2px] h-24 sm:h-28 md:h-32 bg-gradient-to-b from-[#FFD700] via-[#FFFACD] to-[#FFD700] opacity-30" />
            </div>
            
            {/* Content Column */}
            <div className="pt-1.5 sm:pt-2 pb-8 sm:pb-10">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine mb-2 sm:mb-3 inline-block">
                Discovery Call
              </h3>
              <p className="text-[#ffff] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                Fill out our quick Google Form with your business details, goals, and requirements. We analyze your needs and craft a tailored strategy — no generic templates, only custom solutions built for you.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start group scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-300">
            {/* Left Timeline Indicator Column */}
            <div className="flex flex-col items-center flex-shrink-0 mr-4 sm:mr-6 md:mr-8">
              {/* Timeline Number Circle */}
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#FFD700]/60 bg-slate-950 font-black text-lg sm:text-xl bg-gradient-to-r from-[#ffff] via-[#ffff] to-[#ffff] bg-clip-text text-transparent animate-shine shadow-lg">
                2
              </div>
              {/* Vertical Connector Line */}
              <div className="w-[2px] h-24 sm:h-28 md:h-32 bg-gradient-to-b from-[#FFD700] via-[#FFFACD] to-[#FFD700] opacity-30" />
            </div>
            
            {/* Content Column */}
            <div className="pt-1.5 sm:pt-2 pb-8 sm:pb-10">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine mb-2 sm:mb-3 inline-block">
                Asset Handover
              </h3>
              <p className="text-[#ffff] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                Share your brand assets, logos, fonts, and content via our organized Google Sheet tracker. Everything stays structured, version-controlled, and accessible to both teams at all times.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start group scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-500">
            {/* Left Timeline Indicator Column */}
            <div className="flex flex-col items-center flex-shrink-0 mr-4 sm:mr-6 md:mr-8">
              {/* Timeline Number Circle */}
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#FFD700]/60 bg-slate-950 font-black text-lg sm:text-xl bg-gradient-to-r from-[#ffff] via-[#ffff] to-[#ffff] bg-clip-text text-transparent animate-shine shadow-lg">
                3
              </div>
              {/* No line after the last item */}
            </div>
            
            {/* Content Column */}
            <div className="pt-1.5 sm:pt-2">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine mb-2 sm:mb-3 inline-block">
                Launch & Grow
              </h3>
              <p className="text-[#ffff] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                We go live. All project updates, revisions, and deliverables flow through your dedicated WhatsApp channel. Real-time communication. Transparent progress. Measurable results from day one.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowToGetStarted;