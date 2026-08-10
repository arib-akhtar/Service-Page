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
    <section ref={sectionRef} id='whychooseus' className="relative z-10 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header - Centered */}
        <div className="mb-16 text-center scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
          <h2 className="pb-2 text-5xl font-bold mb-4 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine font-serif">Why Aivon Tech?</h2>
          <p className="text-xl text-[#ffff] max-w-2xl mx-auto">
            Built different. Built to deliver. Here's what sets us apart from every other agency.
          </p>
        </div>

        {/* Features Grid - Background removed */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Card 1: Central Hub */}
          <div className="p-8 border border-white/20 rounded-2xl hover:border-[#FFD700] transition-all duration-300 group scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-150">
            <div className="text-4xl mb-6">🔗</div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">Central Hub Architecture</h3>
            <p className="text-[#ffff] leading-relaxed">
              Every channel, every campaign, every deliverable — all roads lead to one unified WhatsApp-based command center. No scattered emails. One hub to rule them all.
            </p>
          </div>

          {/* Card 2: MSME */}
          <div className="p-8 border border-white/20 rounded-2xl hover:border-[#FFD700] transition-all duration-300 group scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-300">
            <div className="text-4xl mb-6">🏛️</div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">MSME Certified Business</h3>
            <p className="text-[#ffff] leading-relaxed mb-4">
              Registered under the Government of India's MSME initiative. We operate with full legal compliance and enterprise-grade accountability.
            </p>
            <div className="flex gap-4 text-[#FFD700] underline text-sm font-bold">
              {/* Yahan apne certificate aur Udyam card ka path ya link daal dein */}
              <a href="/udyamcertificate.pdf" target="_blank" rel="noopener noreferrer">
                View Certificate 🔗
              </a>
              <a href="/udyam-certificate.pdf" target="_blank" rel="noopener noreferrer">
                View Udyam Card 🔗
              </a>
            </div>
          </div>

          {/* Card 3: AI-Powered */}
          <div className="p-8 border border-white/20 rounded-2xl hover:border-[#FFD700] transition-all duration-300 group scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-500">
            <div className="text-4xl mb-6">🧠</div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">AI-Powered Operations</h3>
            <p className="text-[#ffff] leading-relaxed">
              From AI-generated ad creatives to automated content calendars and intelligent analytics — we leverage cutting-edge AI to deliver sharper results.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;