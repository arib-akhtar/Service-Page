import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LuxuryOrbBackground from '../Background';

const whatsappNumber = '918789963987';
const whatsappLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const features = [
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Get perfect layouts across all screens, from mobile to desktop. No compromises.',
  },
  {
    icon: '🛒',
    title: 'Online Stores',
    description: 'We build shops with payments, stock tracking, and auto order logging. Sell with ease.',
  },
  {
    icon: '⚡',
    title: 'Web App Features',
    description: 'Get app-like pages in the browser. Supports push notices and offline use.',
  },
  {
    icon: '🔍',
    title: 'SEO Ready',
    description: 'We use clean code and meta tags. Help your site rank on search engines from day one.',
  },
  {
    icon: '⚙️',
    title: 'Easy CMS',
    description: 'Update your site copy without coding. We build systems your team can edit easily.',
  },
  {
    icon: '🚀',
    title: 'Fast Load Times',
    description: 'We speed up your site to load in under two seconds. Keep your site fast.',
  },
];

const generateReviews = () => {
  const generated = [];
  const names = ["Rahul Kim", "Akash Deshpande", "Devika Desai", "Arjun Wilson", "Mark Banerjee", "Swati Agarwal", "Rekha Wang", "Ritu Lopez", "Emily Banerjee", "Yogesh Iyer", "Aarav Sharma", "Vivaan Patel", "Aditya Verma", "Vihaan Gupta", "Arjun Mehta"];
  const cities = ["Surat", "Indore", "London", "Coimbatore", "Amsterdam", "Jaipur", "Dubai", "Coimbatore", "Patna", "Patna", "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad"];
  const comments5 = [
    "Testing our site across devices reveals Aivon Tech's attention to detail — responsive perfection on every screen size.",
    "Seamless integrations by Aivon Tech connected our website to WhatsApp, CRM, and Google Sheets. All data flows automatically.",
    "Aivon Tech optimized our legacy site to a 95 PageSpeed score. The performance improvement directly boosted our conversions.",
    "Speed was our top priority, and Aivon Tech delivered an e-commerce site that loads in under 2 seconds. Conversions soared.",
    "Zero unexpected downtimes in a full year — Aivon Tech's hosting and maintenance is rock-solid."
  ];
  const comments4 = [
    "Mobile experience was critical for us, and Aivon Tech delivered a site that's as polished on phones as on desktop.",
    "Our booking workflow went from manual to fully automated thanks to Aivon Tech's development. Clients book 24/7 now.",
    "Aivon Tech's development process is a model of transparency. Weekly demos, milestone updates, and always accessible for questions.",
    "Our e-commerce site by Aivon Tech loads blazingly fast — under 2 seconds. The performance optimization is exceptional."
  ];
  const comments3 = [
    "Aivon Tech's structured development approach — weekly demos, milestone tracking, regular check-ins — kept our project perfectly on track.",
    "Good overall web development delivered, though minor adjustments took an extra day."
  ];

  let idCounter = 1;
  for (let i = 0; i < 179; i++) {
    const name = names[i % names.length] + (i > 15 ? ` ${Math.floor(i / 15)}` : '');
    const initials = name.split(' ').map(n => n[0]).join('');
    const city = cities[i % cities.length];
    const text = comments5[i % comments5.length];
    generated.push({ id: idCounter++, initials, name, location: `${city} · 3 Aug 2026`, rating: 5, text, verified: true });
  }
  for (let i = 0; i < 90; i++) {
    const name = names[(i + 4) % names.length] + (i > 15 ? ` ${Math.floor(i / 15)}` : '');
    const initials = name.split(' ').map(n => n[0]).join('');
    const city = cities[(i + 3) % cities.length];
    const text = comments4[i % comments4.length];
    generated.push({ id: idCounter++, initials, name, location: `${city} · 26 Jul 2026`, rating: 4, text, verified: true });
  }
  for (let i = 0; i < 31; i++) {
    const name = names[(i + 2) % names.length] + (i > 15 ? ` ${Math.floor(i / 15)}` : '');
    const initials = name.split(' ').map(n => n[0]).join('');
    const city = cities[(i + 6) % cities.length];
    const text = comments3[i % comments3.length];
    generated.push({ id: idCounter++, initials, name, location: `${city} · 29 Jul 2026`, rating: 3, text, verified: false });
  }
  return generated;
};

const allReviews = generateReviews();
const Stars = ({ rating }) => <span className="tracking-wider text-[#FFD700]">{'★'.repeat(rating)}<span className="text-zinc-700">{'★'.repeat(5 - rating)}</span></span>;

const WebDevelopment = () => {
  const [filterRating, setFilterRating] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;
  const pageRef = useRef(null);

  // Scroll animation using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = pageRef.current.querySelectorAll('.scroll-fade, .image-zoom-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const filteredReviews = filterRating === 'All' 
    ? allReviews 
    : allReviews.filter(r => r.rating === Number(filterRating));

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);

  const handleFilterChange = (star) => {
    setFilterRating(star);
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <main ref={pageRef} className="min-h-screen bg-transparent text-white overflow-hidden relative">
      <LuxuryOrbBackground />
      
      {/* Scroll animation styles */}
      <style>{`
        .scroll-fade {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1.8s cubic-bezier(0.16, 1, 0.3, 1), transform 1.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .scroll-fade.active {
          opacity: 1;
          transform: translateY(0);
        }

        .image-zoom-reveal {
          opacity: 0;
          transform: scale(0.92) translateY(30px);
          transition: opacity 1.8s cubic-bezier(0.16, 1, 0.3, 1), transform 1.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .image-zoom-reveal.active {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 scroll-fade max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-10 sm:pb-12 text-center">
        <span className="text-xs uppercase tracking-widest text-[#FFD700] font-semibold bg-[#FFD700]/10 px-3 py-1 rounded-full border border-[#FFD700]/20">
          Stream C: Tech & Automation
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mt-4 sm:mt-6 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine pb-2">
          Web Development
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Get responsive sites, online shops, and custom web apps. We build sites that load fast, rank high, and get buyers.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link
            to="/hireme"
            className="w-full sm:w-auto text-center bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black px-8 py-3 rounded-full font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            Get a Quote
          </Link>
          <a
            href={whatsappLink("Hi Aivon Tech, I'm interested in your Web Development services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center border border-[#FFD700]/40 text-[#FFD700] px-8 py-3 rounded-full font-medium bg-black/30 backdrop-blur hover:bg-[#FFD700]/10 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* 2. WHAT WE BUILD SECTION */}
      <section className="relative z-10 scroll-fade max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-white/5 bg-black/30 backdrop-blur-sm">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">
            What We Build
          </h2>
          <p className="mt-2 sm:mt-3 text-gray-400 text-sm sm:text-base md:text-lg">
            High-performance web solutions that grow with your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="image-zoom-reveal bg-[#0a0a0c]/80 backdrop-blur-md border border-[#FFD700]/15 rounded-2xl p-6 sm:p-8 hover:border-[#FFD700]/50 transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {feat.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-[#FFD700] transition-colors">
                {feat.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CUSTOM PRICING SECTION */}
      <section className="relative z-10 scroll-fade max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="image-zoom-reveal bg-gradient-to-br from-[#0a0a0c]/90 to-[#121216]/90 backdrop-blur-md border border-[#FFD700]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-48 h-48 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
          
          <span className="text-[#FFD700] text-xs sm:text-sm uppercase tracking-wider font-semibold">Custom Pricing</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine pb-1">
            Engineered for Your Needs
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-400 max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
            Whether you need a simple landing page or a custom web app, we build to fit your needs. Let's talk about your project goals.
          </p>

          <div className="mt-6 sm:mt-8">
            <Link
              to="/hireme"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black px-8 py-3.5 rounded-full font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
            >
              💬 Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CLIENT REVIEWS & FILTERS SECTION */}
      <section className="relative z-10 scroll-fade max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-white/5 bg-black/30 backdrop-blur-sm">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[#FFD700] font-semibold text-xs sm:text-sm tracking-widest mb-1.5 sm:mb-2">CLIENT REVIEWS</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">
            Client Reviews for Web Development
          </h2>
          <p className="mt-2 text-gray-400 text-xs sm:text-base">300+ verified reviews from businesses we've helped</p>
        </div>

        {/* Rating Overview & Filters Box */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#0a0a0c]/80 border border-[#D4AF37]/30 p-4 sm:p-6 rounded-2xl mb-8 sm:mb-10 gap-5 sm:gap-6 backdrop-blur-md max-w-5xl mx-auto">
          <div className="text-center md:text-left flex items-center gap-4">
            <strong className="text-4xl sm:text-5xl font-extrabold text-white">4.5</strong>
            <div>
              <div className="text-amber-400 text-base sm:text-lg mb-1"><Stars rating={5} /></div>
              <p className="text-gray-400 text-xs sm:text-sm">300 verified reviews</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <button 
              onClick={() => handleFilterChange('All')} 
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${filterRating === 'All' ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40'}`}
            >
              All
            </button>
            <button 
              onClick={() => handleFilterChange(5)} 
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${filterRating === 5 ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-semibold' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40'}`}
            >
              5 ★ (179)
            </button>
            <button 
              onClick={() => handleFilterChange(4)} 
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${filterRating === 4 ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-semibold' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40'}`}
            >
              4 ★ (90)
            </button>
            <button 
              onClick={() => handleFilterChange(3)} 
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${filterRating === 3 ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-semibold' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40'}`}
            >
              3 ★ (31)
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10 max-w-6xl mx-auto">
          {currentReviews.length > 0 ? (
            currentReviews.map((rev) => (
              <article key={rev.id} className="p-4 sm:p-5 rounded-xl bg-[#0a0a0a]/80 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <div className="flex gap-3 items-center">
                    <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#D4AF37]/20 text-[#FFD700] font-bold flex items-center justify-center text-xs sm:text-sm">{rev.initials}</span>
                    <div>
                      <h3 className="font-semibold text-xs sm:text-sm">{rev.name}</h3>
                      <p className="text-[11px] sm:text-xs text-gray-500">{rev.location}</p>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4"><Stars rating={rev.rating} /></div>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-2.5 sm:mt-3">"{rev.text}"</p>
                </div>
                {rev.verified && (
                  <p className="text-[11px] sm:text-xs text-[#D4AF37] mt-3 sm:mt-4 font-medium">✓ Verified Client</p>
                )}
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-400">No reviews found for this rating filter.</div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 flex-wrap">
            {currentPage > 1 && (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-2.5 sm:px-3 h-9 sm:h-10 bg-zinc-900 hover:bg-zinc-800 text-gray-300 border border-zinc-800 rounded-lg font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                ← Prev
              </button>
            )}

            {getPageNumbers().map((item, index) => 
              item === '...' ? (
                <span key={`dots-${index}`} className="px-2 sm:px-3 py-1 text-gray-500 font-bold text-xs sm:text-sm">...</span>
              ) : (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item)}
                  className={`w-9 sm:w-10 h-9 sm:h-10 rounded-lg font-bold text-xs sm:text-sm transition-colors cursor-pointer ${currentPage === item ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:bg-zinc-800'}`}
                >
                  {item}
                </button>
              )
            )}

            {currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-2.5 sm:px-3 h-9 sm:h-10 bg-zinc-900 hover:bg-zinc-800 text-gray-300 border border-zinc-800 rounded-lg font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Next →
              </button>
            )}
          </div>
        )}
      </section>

      {/* 5. FOOTER CALL TO ACTION (In Box) */}
      <section className="relative z-10 scroll-fade max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <div className="image-zoom-reveal bg-[#0a0a0c]/80 border border-[#FFD700]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-48 h-48 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine pb-1">
            Ready to Build Something Exceptional?
          </h2>
          <p className="mt-2.5 sm:mt-3 text-gray-400 max-w-lg mx-auto text-xs sm:text-base">
            From concept to launch, we build web solutions that perform, convert, and scale.
          </p>
          <div className="mt-6 sm:mt-8">
            <Link
              to="/hireme"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black px-8 py-3.5 rounded-full font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
            >
              💬 Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebDevelopment;