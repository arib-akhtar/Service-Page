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
    <section ref={sectionRef} id="cta" className="bg-transparent text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Main CTA Large Card Container - Updated background to transparent */}
        <div className="relative overflow-hidden bg-transparent border border-slate-800/80 rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl transition-all duration-300 ease-out hover:border-[#FFD700]/30 hover:shadow-[0_0_50px_rgba(255,215,0,0.05)] scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
          
          {/* Decorative subtle background gradient radial blast */}
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.02)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Heading with Signature Shiny Gold Gradient */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight bg-[length:200%_auto] bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine mb-6 leading-tight">
             <imp className="text-[#ffff]">Ready to Transform Your </imp> <br /> Digital Presence?
            </h2>

            {/* Subtext description */}
            <p className="text-base sm:text-lg text-[#ffff] font-medium mb-10 max-w-2xl leading-relaxed">
              Let's build something extraordinary together. Drop us a message — we reply within 15 minutes.
            </p>

            {/* Action Button updated with Aivon Tech */}
            <a
              href="https://wa.me/918789963987?text=Hi%20Aivon%20Tech,%20I%20want%20to%20transform%20my%20digital%20presence!" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 font-bold text-black bg-[length:200%_auto] bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] px-8 py-4 rounded-full text-sm sm:text-base tracking-wide shadow-[0_4px_20px_rgba(255,215,0,0.15)] transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] cursor-pointer"
            >
              {/* Premium Filled WhatsApp SVG Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5 flex-shrink-0"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.001-2.633-1.019-5.101-2.874-6.958C16.547 1.94 14.076.92 11.45.919c-5.44 0-9.866 4.414-9.869 9.848-.002 1.698.447 3.354 1.301 4.822l-1.015 3.703 3.781-.992zM17.56 14.28c-.324-.162-1.92-.949-2.219-1.058-.297-.108-.514-.162-.73.162-.217.324-.838 1.058-1.027 1.274-.19.216-.379.243-.703.081-.324-.162-1.368-.505-2.607-1.612-.963-.859-1.613-1.921-1.802-2.246-.19-.324-.02-.5-.181-.661-.146-.146-.324-.379-.486-.568-.162-.189-.216-.324-.324-.54-.108-.217-.054-.405-.027-.568.027-.162.217-.514.324-.676.108-.162.145-.27.217-.405.072-.135.036-.27-.013-.405-.05-.135-.515-1.243-.704-1.702-.186-.447-.375-.387-.514-.394-.132-.006-.284-.007-.436-.007-.152 0-.401.057-.61.284-.21.227-.8.781-.8 1.903s.814 2.207.929 2.361c.114.155 1.603 2.448 3.885 3.43.542.233.965.372 1.296.477.545.173 1.041.149 1.433.09.439-.065 1.92-.786 2.191-1.505.27-.72.27-1.334.189-1.463-.081-.13-.297-.208-.621-.37z" />
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