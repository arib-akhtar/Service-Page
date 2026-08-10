import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#040406] text-slate-300 border-t border-[#D4AF37]/20 pt-16 pb-8 px-6 lg:px-8 overflow-hidden z-10">
      {/* Subtle ambient lighting flares behind the footer columns */}
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-[#D4AF37]/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 -right-20 w-[250px] h-[250px] bg-amber-500/2 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-900">
          {/* COLUMN 1: BRAND LOGO, DESCRIPTION & MSME CERTIFICATE */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {/* Interlocking Monogram custom golden icon */}
              <div className="relative border border-[#D4AF37]/35 w-10 h-10 rounded-full flex items-center justify-center bg-[#07070a] shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <svg
                  className="w-5 h-5 text-[#D4AF37]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-sm font-black tracking-[0.25em] text-white uppercase">
                  Aivon<span className="bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine font-serif"> Tech</span>
                </h2>
                <p className="text-[7.5px] tracking-[0.3em] text-[#D4AF37]/70 uppercase font-bold">
                  High-End Web Architecture
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your central hub for elite web development, aesthetic UI/UX
              artistry, and automated systems. Delivering measurable class and
              scalable code for forward-thinking brands across India.
            </p>

            {/* MSME-Certified Badge Row with custom gold seal icon */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-[9.5px] font-bold text-[#FFD700] tracking-widest uppercase shadow-[0_0_10px_rgba(212,175,55,0.05)]">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              MSME Certified • Govt. Registered
            </div>
          </div>

          {}
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold tracking-[0.25em] bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine font-serif uppercase border-l border-[#D4AF37] pl-3">
              Services
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>
                <a
                  href="/marketing"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-[#D4AF37]/50 rounded-full group-hover:w-2 transition-all" />
                  Marketing
                </a>
              </li>
              <li>
                <a
                  href="/smm"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-[#D4AF37]/50 rounded-full group-hover:w-2 transition-all" />
                  Social Media Management
                </a>
              </li>
              <li>
                <a
                  href="/ads"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-[#D4AF37]/50 rounded-full group-hover:w-2 transition-all" />
                  Ad Creatives
                </a>
              </li>
              <li>
                <a
                  href="/graphicdesigning"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-[#D4AF37]/50 rounded-full group-hover:w-2 transition-all" />
                  Graphic Designing
                </a>
              </li>
              <li>
                <a
                  href="/video"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-[#D4AF37]/50 rounded-full group-hover:w-2 transition-all" />
                  Video Editing
                </a>
              </li>
              <li>
                <a
                  href="/content"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-[#D4AF37]/50 rounded-full group-hover:w-2 transition-all" />
                  Content Management
                </a>
              </li>
              <li>
                <a
                  href="/web-development"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-[#D4AF37]/50 rounded-full group-hover:w-2 transition-all" />
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/ai"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-[#D4AF37]/50 rounded-full group-hover:w-2 transition-all" />
                  AI Tools &amp; Automation
                </a>
              </li>
            </ul>
          </div>

          {}
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold tracking-[0.25em] bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine font-serif uppercase border-l border-[#D4AF37] pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-[#D4AF37] transition-all" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-[#D4AF37] transition-all" />
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-[#D4AF37] transition-all" />
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-[#D4AF37] transition-all" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-[#D4AF37] transition-all" />
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {}
          <div className="space-y-5">
            <h3 className="text-[10px] font-bold tracking-[0.25em] bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine font-serif uppercase border-l border-[#D4AF37] pl-3 ">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-center gap-2.5 hover:text-white transition-colors group">
                <svg
                  className="w-4 h-4 text-[#FFD700]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=theaivontech001@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  theaivontech001@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 hover:text-white transition-colors group">
                <svg
                  className="w-4 h-4 text-[#FFD700]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636l3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=theaivontech001@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  theaivontech001@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 hover:text-white transition-colors group">
                {/* Custom SVG WhatsApp style icon */}
                <svg
                  className="w-4 h-4 text-[#FFD700]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.115-2.887-6.98C16.45 1.897 13.97 1.87 11.35 1.87c-5.441 0-9.865 4.422-9.869 9.865-.001 1.77.476 3.493 1.38 5.019l-.99 3.615 3.71-.973zm11.365-5.12c-.29-.145-1.716-.847-1.982-.944-.265-.097-.459-.145-.653.145-.194.291-.749.944-.92 1.138-.169.193-.34.217-.63.072-.29-.145-1.223-.45-2.33-1.439-.86-.767-1.441-1.714-1.61-2.004-.169-.29-.018-.447.127-.59.13-.13.29-.338.435-.507.145-.169.193-.29.29-.483.097-.193.048-.361-.024-.507-.072-.145-.653-1.573-.895-2.152-.236-.569-.475-.492-.653-.501-.17-.008-.364-.01-.559-.01-.194 0-.51.072-.776.361-.265.29-1.014.99-1.014 2.415 0 1.425 1.038 2.801 1.182 2.995.145.194 2.043 3.12 4.949 4.373.692.298 1.232.476 1.654.61.696.22 1.33.19 1.83.115.557-.082 1.716-.7 1.959-1.376.243-.676.243-1.255.169-1.376-.073-.12-.265-.194-.556-.339z" />
                </svg>
                <a
                  href="https://wa.me/8789963987?text=Hi%20Aivon%20Tech,%20I%20want%20to%20transform%20my%20digital%20presence!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          {/* Copyright section */}
          <div className="text-[10px] tracking-widest text-slate-500 uppercase">
            © {currentYear}{" "}
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine font-serif">AIVON TECH</span> Network.
            All rights reserved.
          </div>

          {/* Creators / Dedication Credit */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-950/40 border border-slate-900 px-4 py-2 rounded-full">
            <svg
              className="w-3.5 h-3.5 text-[#FFD700] fill-[#D4AF37]/10 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-[10.5px] tracking-wider">
              Made with devotion by{" "}
              <strong className="text-white">ARIB AKHTAR</strong>
            </span>
          </div>

          {/* Bottom Policy Tags */}
          <div className="flex gap-4 text-[10px] tracking-wider text-slate-500 uppercase">
            <a
              href="/terms"
              className="hover:text-[#FFD700] transition-all"
            >
              Terms
            </a>
            <span>•</span>
            <a
              href="/privacy"
              className="hover:text-[#FFD700] transition-all"
            >
              Privacy
            </a>
            <span>•</span>
            <a href="/contact" className="hover:text-[#FFD700] transition-all">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}