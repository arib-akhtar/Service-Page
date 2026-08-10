import React, { useEffect, useRef } from 'react';

const ServicesSection = () => {
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
    // Background completely transparent h taaki aapki website ke canvas ke sath merge ho jaye
    <section ref={sectionRef} id='services' className="bg-transparent text-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
          {/* Main Network Title with your Custom Shiny Gradient */}
          <h2 className="pb-5 text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine mb-4">
            8 Services. 3 Streams. One Network.
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-medium">
           
          </p>
          {/* Gradient Divider Matching Your Palette */}
          {/* <div className="h-[2px] w-20 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] mx-auto mt-6 rounded-full" /> */}
          <p className="mt-4 text-xs text-white uppercase tracking-widest font-semibold">
            Each service is a specialized unit within the <strong className="bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent">Aivon tech.</strong> Network,
            <br />
            designed to dominate its domain.
          </p>
        </div>

        {/* Streams Container */}
        <div className="space-y-16">
          
          {/* ================= STREAM A ================= */}
          {/* Structural Row Divider in Signature Gold */}
          <div className="border-t border-[#FFD700]/30 pt-10 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-150">
            <div className="flex items-center space-x-3 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-[#FFD700] animate-pulse" />
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#FFD700]/30 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine bg-[#FFD700]/5">
                Stream A: Growth & Ads
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Marketing (Clickable to Marketing Page) */}
              <a href="/marketing" className="group bg-transparent border border-slate-800 hover:border-[#FFD700]/40 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD700]/5 flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-slate-900/40 rounded-xl w-fit mb-5 group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-[#FFD700]/30">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  </div>
                  {/* Hover karne par text title par bhi dynamic custom gradient apply hoga */}
                  <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all">
                    Marketing
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">End-to-end digital marketing strategies — SEO, PPC, email funnels, and performance campaigns that drive measurable ROI.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="text-slate-600 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all text-sm font-semibold flex items-center gap-1">Explore →</span>
                </div>
              </a>

              {/* Social Media Management */}
              <a href="/smm" className="group bg-transparent border border-slate-800 hover:border-[#FFD700]/40 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD700]/5 flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-slate-900/40 rounded-xl w-fit mb-5 group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-[#FFD700]/30">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all">
                    Social Media Management
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Full-service social media management across Instagram, LinkedIn, Facebook, X, and YouTube. Content, scheduling, engagement, growth.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="text-slate-600 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all text-sm font-semibold flex items-center gap-1">Explore →</span>
                </div>
              </a>

              {/* Ad Creatives */}
              <a href="/ads" className="group bg-transparent border border-slate-800 hover:border-[#FFD700]/40 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD700]/5 flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-slate-900/40 rounded-xl w-fit mb-5 group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-[#FFD700]/30">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all">
                    Ad Creatives
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Thumb-stopping ad designs for Meta, Google, and LinkedIn campaigns. Static, carousel, and motion graphics that convert.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="text-slate-600 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all text-sm font-semibold flex items-center gap-1">Explore →</span>
                </div>
              </a>
            </div>
          </div>

          {/* ================= STREAM B ================= */}
          {/* Structural Row Divider in Signature Gold */}
          <div className="border-t border-[#FFD700]/30 pt-10 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-300">
            <div className="flex items-center space-x-3 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-[#FFD700] animate-pulse" />
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#FFD700]/30 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine bg-[#FFD700]/5">
                Stream B: Creative & Content
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Graphic Designing (Clickable to Graphic Designing Page) */}
              <a href="/graphicdesigning" className="group bg-transparent border border-slate-800 hover:border-[#FFD700]/40 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD700]/5 flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-slate-900/40 rounded-xl w-fit mb-5 group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-[#FFD700]/30">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all">
                    Graphic Designing
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Brand identity, social media graphics, presentations, packaging, and print-ready designs crafted by seasoned designers.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="text-slate-600 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all text-sm font-semibold flex items-center gap-1">Explore →</span>
                </div>
              </a>

              {/* Video Editing */}
              <a href="/video" className="group bg-transparent border border-slate-800 hover:border-[#FFD700]/40 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD700]/5 flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-slate-900/40 rounded-xl w-fit mb-5 group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-[#FFD700]/30">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all">
                    Video Editing
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Professional video editing for YouTube, Reels, Shorts, ads, and corporate videos. Color grading, motion graphics, and sound design included.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="text-slate-600 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all text-sm font-semibold flex items-center gap-1">Explore →</span>
                </div>
              </a>

              {/* Content Management */}
              <a href="/content" className="group bg-transparent border border-slate-800 hover:border-[#FFD700]/40 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD700]/5 flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-slate-900/40 rounded-xl w-fit mb-5 group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-[#FFD700]/30">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all">
                    Content Management
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">SEO-optimized blog posts, website copy, captions, scripts, and content calendars — all aligned with your brand voice and goals.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="text-slate-600 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all text-sm font-semibold flex items-center gap-1">Explore →</span>
                </div>
              </a>
            </div>
          </div>

          {/* ================= STREAM C ================= */}
          {/* Structural Row Divider in Signature Gold */}
          <div className="border-t border-[#FFD700]/30 pt-10 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-500">
            <div className="flex items-center space-x-3 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-[#FFD700] animate-pulse" />
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#FFD700]/30 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine bg-[#FFD700]/5">
                Stream C: Tech & Automation
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Web Development (Clickable to Web Development Page) */}
              <a href="/web-development" className="group bg-transparent border border-slate-800 hover:border-[#FFD700]/40 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD700]/5 flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-slate-900/40 rounded-xl w-fit mb-5 group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-[#FFD700]/30">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all">
                    Web Development
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Custom websites, landing pages, e-commerce stores, and web applications — responsive, fast, and built to convert visitors into customers.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="text-slate-600 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all text-sm font-semibold flex items-center gap-1">Explore →</span>
                </div>
              </a>

              {/* AI Tools & Automation */}
              <a href="/ai" className="group bg-transparent border border-slate-800 hover:border-[#FFD700]/40 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD700]/5 flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-slate-900/40 rounded-xl w-fit mb-5 group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-[#FFD700]/30">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z"></path></svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all">
                    AI Tools & Automation
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Custom AI chatbots, workflow automation, CRM integrations, and intelligent tools that save hours and supercharge your operations.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="text-slate-600 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all text-sm font-semibold flex items-center gap-1">Explore →</span>
                </div>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;