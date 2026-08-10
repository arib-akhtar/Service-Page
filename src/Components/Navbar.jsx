import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const serviceItems = [
    { name: "Marketing", href: "/marketing", icon: "📈" },
    { name: "Social Media Management", href: "/smm", icon: "📱" },
    { name: "Ad Creatives", href: "/ads", icon: "🎯" },
    { name: "Graphic Designing", href: "/graphicdesigning", icon: "🎨" },
    { name: "Video Editing", href: "/video", icon: "🎬" },
    { name: "Content Management", href: "/content", icon: "✍️" },
    { name: "Web Development", href: "/web-development", icon: "💻" },
    { name: "AI Tools & Automation", href: "/ai", icon: "🤖" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-md border-b border-[#FFD700]/30 shadow-sm z-50 transition-all duration-300 pb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl sm:text-2xl font-bold flex items-center">
              <img src="/aivontech.png" alt="My Image" className="h-12 sm:h-14 lg:h-22 w-auto object-contain mt-1" /> 
              <span className="bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine font-serif mt-1 sm:mt-2 lg:mt-3 text-xl sm:text-xl lg:text-[28px] font-bold">
                Aivon Tech
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-4 lg:space-x-8 items-center mt-2">
            {/* UPDATED: Home link */}
            <Link to="/#hero" className="text-gray-400 hover:text-white text-sm lg:text-base font-medium transition-colors duration-200 relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <div className="relative group py-2">
              <button className="text-gray-400 group-hover:text-[#FFD700] text-sm lg:text-base font-medium transition-colors duration-200 flex items-center gap-1 cursor-default focus:outline-none">
                Services
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 text-gray-400 group-hover:text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#0a0a0c] border border-[#FFD700]/20 rounded-xl shadow-2xl p-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                <div className="flex flex-col gap-1">
                  {serviceItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:text-[#FFD700] hover:bg-[#FFD700]/10 transition-all duration-200"
                    >
                      <span className="text-base">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/#whychooseus" className="text-gray-400 hover:text-white text-sm lg:text-base font-medium transition-colors duration-200 relative group py-2">
              Why Choose Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link to="/#about" className="text-gray-400 hover:text-white text-sm lg:text-base font-medium transition-colors duration-200 relative group py-2">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link to="/terms" className="text-gray-400 hover:text-white text-sm lg:text-base font-medium transition-colors duration-200 relative group py-2">
              Terms
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm lg:text-base font-medium transition-colors duration-200 relative group py-2">
              Privacy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black px-4 lg:px-5 py-2 rounded-full text-sm lg:text-base font-medium hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md active:scale-95 text-center inline-block whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-[#FFD700] focus:outline-none p-2 rounded-md"
            >
              {isOpen ? (
                <svg className="h-6 w-6 transition-transform duration-300 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-black border-b border-[#FFD700]/30 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 pointer-events-none invisible"
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-2 bg-black max-h-[80vh] overflow-y-auto">
          {/* UPDATED: Mobile Home link */}
          <Link to="/#hero" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-300 hover:text-[#FFD700] hover:bg-[#FFD700]/10">
            Home
          </Link>

          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium text-gray-300 hover:text-[#FFD700] hover:bg-[#FFD700]/10"
            >
              <span>Services</span>
              <svg className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180 text-[#FFD700]" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`pl-4 pt-1 space-y-1 transition-all duration-200 ${isMobileServicesOpen ? "block" : "hidden"}`}>
              {serviceItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  onClick={() => { setIsOpen(false); setIsMobileServicesOpen(false); }}
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-400 hover:text-[#FFD700] hover:bg-[#FFD700]/10"
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/#whychooseus" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-300 hover:text-[#FFD700] hover:bg-[#FFD700]/10">
            Why Choose Us
          </Link>
          <Link to="/#about" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-300 hover:text-[#FFD700] hover:bg-[#FFD700]/10">
            About
          </Link>
          <Link to="/terms" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-300 hover:text-[#FFD700] hover:bg-[#FFD700]/10">
            Terms
          </Link>
          <Link to="/privacy" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-300 hover:text-[#FFD700] hover:bg-[#FFD700]/10">
            Privacy
          </Link>

          <div className="pt-3 px-3">
             <Link 
               to="/contact" 
               onClick={() => setIsOpen(false)} 
               className="w-full text-center block bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black px-4 py-3 rounded-xl font-bold uppercase tracking-wider text-xs shadow-md"
             >
               Contact Us
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;