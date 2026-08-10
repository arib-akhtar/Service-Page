import React, { useEffect, useRef } from "react";

const About = () => {
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
    <section ref={sectionRef} id="about" className="relative z-10 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Text shadow add ki hai taaki animation ke upar saaf dikhe */}
        <div className="text-center mb-16 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
          <h3 className="bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine font-bold tracking-widest uppercase mb-6 text-4xl font-serif">
            About Our Legacy
          </h3>
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Excellence in Every Detail
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-150 flex flex-col items-center justify-center p-10 rounded-2xl shadow-[0_0_20px_rgba(255,215,0,0.3)] border border-white/20 bg-black/40">
            <img
              src="/aivontech.png"
              alt="Aivon Tech Logo"
              className="w-64 sm:w-72 h-auto object-contain mb-1"
            />
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine font-serif text-4xl sm:text-5xl font-bold tracking-wide">
              Aivon Tech
            </span>
          </div>

          <div className="space-y-8 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-300">
            <p className="text-lg text-gray-100 leading-relaxed font-medium">
              At <strong className="bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent">Aivon Tech</strong>, we believe that professional
              services are not just about tasks; they are about building trust
              and creating long-term value.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border-l-2 border-[#FFD700]">
                <h4 className="text-xl font-bold">Innovation</h4>
              </div>
              <div className="p-4 border-l-2 border-[#FFD700]">
                <h4 className="text-xl font-bold">Integrity</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section - Glass border effect */}
        <section className="py-20 text-white scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 font-serif bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">Our Mission</h2>
            {/* Background aur padding-blur remove kar di gayi hai */}
            <div className="p-10 border border-white/20 rounded-3xl hover:border-[#FFD700] transition-all duration-300">
              <p className="text-2xl italic text-shadow-white">
                "To be the catalyst for growth for businesses worldwide."
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;