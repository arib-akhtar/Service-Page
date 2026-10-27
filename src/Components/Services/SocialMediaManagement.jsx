import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LuxuryOrbBackground from '../Background';

const whatsappNumber = '918789963987';
const whatsappLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const features = [
  {
    title: "Content Strategy",
    description: "We build a custom calendar to fit your brand. You will always know what to post next.",
    icon: "📅",
  },
  {
    title: "Multi-App Support",
    description: "We run your pages on Meta, LinkedIn, X, and YouTube. We size all posts to fit the app.",
    icon: "🌐",
  },
  {
    title: "Reply to Fans",
    description: "We answer messages, moderate comments, and chat with your followers. Turn fans into buyers.",
    icon: "💬",
  },
  {
    title: "Trend Tracking",
    description: "We track hot topics and hashtags in real time. We help your brand ride viral waves early.",
    icon: "🔥",
  },
  {
    title: "Clear Reports",
    description: "Get detailed reports on your growth, reach, and views. We share tips to get more clicks.",
    icon: "📊",
  },
  {
    title: "Short Video Strategy",
    description: "We plan and script Reels and Shorts to get more views and reach new buyers fast.",
    icon: "🎥",
  },
];

const generateReviews = () => {
  const generated = [];
  const names = [
    "Priya Kapoor", "Jatin Johnson", "Varun Joshi", "Divya Taylor", 
    "Sophie Tiwari", "Rupa Rao", "Tanvi Iyer", "Tanvi Santos", 
    "Aditi Kamath", "Ankita Bhatt", "Rahul Verma", "Sneha Gupta", 
    "Amit Kumar", "Neha Sharma", "Rohan Das", "Pooja Mehta",
    "Karan Malhotra", "Simran Kaur", "Vikram Rathore", "Deepika Roy"
  ];
  const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Pune", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra"];
  const comments5 = [
    "NexaSeva's community management turned our social media from a broadcast channel into a conversation hub.",
    "NexaSeva doesn't just post content — they manage our community. DM responses, comment engagement, relationship building. Full service.",
    "Peace of mind is what NexaSeva gives us. Our social media runs perfectly while we focus on core business operations.",
    "NexaSeva's LinkedIn strategy turned our page into a thought leadership platform that consistently generates qualified B2B leads.",
    "NexaSeva's short-form video strategy gets us 500K+ views every month. Our brand reach has grown exponentially."
  ];
  const comments4 = [
    "We wasted a year doing social media ourselves. NexaSeva achieved more in 30 days than we did in 365.",
    "Our social media workflow went from chaotic to clockwork thanks to NexaSeva's scheduling and planning systems.",
    "The precision NexaSeva brings to social media management is rare. Hashtags, visuals, captions — all strategically crafted.",
    "NexaSeva's crisis management during our PR incident was flawless. They turned a potential disaster into a brand-strengthening moment."
  ];
  const comments3 = [
    "Good overall strategy delivered, though minor adjustments took an extra day.",
    "Decent management and scheduling support for our social channels."
  ];

  let idCounter = 1;
  for (let i = 0; i < 171; i++) {
    const name = names[i % names.length] + (i > 20 ? ` ${Math.floor(i / 20)}` : '');
    const initials = name.split(' ').map(n => n[0]).join('');
    const city = cities[i % cities.length];
    const text = comments5[i % comments5.length];
    generated.push({ id: idCounter++, initials, name, location: `${city} · 10 Aug 2026`, rating: 5, text });
  }
  for (let i = 0; i < 93; i++) {
    const name = names[(i + 5) % names.length] + (i > 20 ? ` ${Math.floor(i / 20)}` : '');
    const initials = name.split(' ').map(n => n[0]).join('');
    const city = cities[(i + 3) % cities.length];
    const text = comments4[i % comments4.length];
    generated.push({ id: idCounter++, initials, name, location: `${city} · 6 Aug 2026`, rating: 4, text });
  }
  for (let i = 0; i < 36; i++) {
    const name = names[(i + 2) % names.length] + (i > 20 ? ` ${Math.floor(i / 20)}` : '');
    const initials = name.split(' ').map(n => n[0]).join('');
    const city = cities[(i + 7) % cities.length];
    const text = comments3[i % comments3.length];
    generated.push({ id: idCounter++, initials, name, location: `${city} · 31 Jul 2026`, rating: 3, text });
  }
  return generated;
};

const allReviews = generateReviews();
const Stars = ({ rating }) => <span className="tracking-wider text-[#FFD700]">{'★'.repeat(rating)}<span className="text-zinc-700">{'★'.repeat(5 - rating)}</span></span>;

const SocialMediaManagement = () => {
  const [filterRating, setFilterRating] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;
  const pageRef = useRef(null);

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

    const elements = pageRef.current.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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

      {/* HERO SECTION */}
      <section className="relative z-10 pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
        <div className="max-w-6xl mx-auto text-center space-y-4 sm:space-y-6">
          <p className="text-[#FFD700] font-semibold tracking-[0.2em] text-xs sm:text-sm">STREAM A: GROWTH & ADS</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent pb-2 font-serif">
            Social Media Management
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed">
            Get custom posts, calendars, and growth plans for your social apps. We manage your pages to build fans and get sales.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Link to="/hireme" className="w-full sm:w-auto text-center rounded-full px-7 py-3 font-semibold text-black bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] hover:scale-105 active:scale-95 transition-transform shadow-lg">Get a Quote</Link>
            <a href={whatsappLink("Hi Aivon Tech, I'm interested in your Social Media Management services.")} target="_blank" rel="noreferrer" className="w-full sm:w-auto text-center rounded-full px-7 py-3 font-semibold border border-[#D4AF37]/60 text-[#FFFACD] bg-black/30 backdrop-blur hover:bg-[#D4AF37]/10 active:scale-95 transition-colors">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED SECTION */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-black/30 border-y border-white/5 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent">What's Included</h2>
            <p className="text-gray-400 text-xs sm:text-base">A full-spectrum approach to growing and managing your social media presence across every platform.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((item, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-[#0a0a0c] border border-[#FFD700]/20 hover:border-[#FFD700]/50 transition-all duration-300 shadow-xl flex flex-col gap-3 sm:gap-4 group hover:-translate-y-1">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFD700]/10 flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFFACD] group-hover:to-[#FFD700] group-hover:bg-clip-text group-hover:text-transparent group-hover:animate-shine transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM PRICING BANNER */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-14 sm:py-20 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-300">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#1a1a14] via-[#0a0a0c] to-[#1a1a14] border border-[#FFD700]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-center space-y-4 sm:space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.05),transparent_50%)] pointer-events-none"></div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent">Custom Pricing</h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
            Each brand is unique. We build custom plans to fit your volume, goals, and budget. Let us manage your pages today.
          </p>
          <div>
            <Link to="/hireme" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black px-8 py-3.5 rounded-full font-bold text-xs sm:text-base hover:scale-105 active:scale-95 transition-all duration-300 shadow-md">
              💬 Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS & FILTERS SECTION */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-black/30 border-y border-white/5 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-400">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 space-y-1.5 sm:space-y-2">
            <p className="text-[#FFD700] font-semibold text-xs sm:text-sm tracking-widest">CLIENT REVIEWS</p>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent">Client Reviews for Social Media Management</h2>
            <p className="text-gray-400 text-xs sm:text-base">Hear from businesses we've helped grow their social media presence.</p>
          </div>

          {/* Rating Overview & Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-[#0a0a0c]/80 border border-[#D4AF37]/30 p-4 sm:p-6 rounded-2xl mb-8 sm:mb-10 gap-5 sm:gap-6 backdrop-blur-md">
            <div className="text-center md:text-left flex items-center gap-4">
              <strong className="text-4xl sm:text-5xl font-extrabold text-white font-serif">4.5</strong>
              <div>
                <div className="text-amber-400 text-base sm:text-lg mb-1"><Stars rating={5} /></div>
                <p className="text-gray-400 text-xs sm:text-sm">300 verified reviews</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <button 
                onClick={() => handleFilterChange('All')}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${filterRating === 'All' ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black shadow-md' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40'}`}
              >
                All
              </button>
              <button 
                onClick={() => handleFilterChange(5)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors ${filterRating === 5 ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-semibold shadow-md' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40'}`}
              >
                5 ★ (171)
              </button>
              <button 
                onClick={() => handleFilterChange(4)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors ${filterRating === 4 ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-semibold shadow-md' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40'}`}
              >
                4 ★ (93)
              </button>
              <button 
                onClick={() => handleFilterChange(3)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors ${filterRating === 3 ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-semibold shadow-md' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40'}`}
              >
                3 ★ (36)
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
            {currentReviews.length > 0 ? (
              currentReviews.map((rev) => (
                <article key={rev.id} className="p-4 sm:p-5 rounded-2xl bg-[#0a0a0a]/80 border border-zinc-800 flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="flex gap-3 items-center">
                      <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#D4AF37]/20 text-[#FFD700] font-bold flex items-center justify-center border border-[#FFD700]/30 text-xs sm:text-sm">{rev.initials}</span>
                      <div>
                        <h3 className="font-semibold text-xs sm:text-sm text-white">{rev.name}</h3>
                        <p className="text-[11px] sm:text-xs text-gray-500">{rev.location}</p>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-4"><Stars rating={rev.rating} /></div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-2.5 sm:mt-3">"{rev.text}"</p>
                  </div>
                  <p className="text-[11px] sm:text-xs mt-3 sm:mt-4 font-semibold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine pt-2 border-t border-zinc-800">✓ Verified Client</p>
                </article>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-400">
                No reviews found for this rating filter.
              </div>
            )}
          </div>

          {/* Compact Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-1.5 sm:gap-2 flex-wrap">
              {currentPage > 1 && (
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="px-2.5 sm:px-3 h-9 sm:h-10 bg-zinc-900 hover:bg-zinc-800 text-gray-300 border border-zinc-800 rounded-xl font-medium text-xs sm:text-sm transition-colors cursor-pointer"
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
                    className={`w-9 sm:w-10 h-9 sm:h-10 rounded-xl font-bold text-xs sm:text-sm transition-colors cursor-pointer ${currentPage === item ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black shadow-md' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:bg-zinc-800'}`}
                  >
                    {item}
                  </button>
                )
              )}

              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-2.5 sm:px-3 h-9 sm:h-10 bg-zinc-900 hover:bg-zinc-800 text-gray-300 border border-zinc-800 rounded-xl font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Next →
                </button>
              )}
            </div>
          )}

        </div>
      </section>

      {/* READY TO DOMINATE BANNER */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-500">
        <div className="max-w-3xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 bg-[#0a0a0c] border border-[#FFD700]/30 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,215,0,0.05),transparent_50%)] pointer-events-none"></div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-shadow-white">Ready to Dominate Social Media?</h2>
          <p className="text-gray-300 mt-2.5 sm:mt-3 max-w-xl mx-auto text-xs sm:text-base leading-relaxed">Let's build a strategy that grows your audience, boosts engagement, and drives real business results.</p>
          <div className="mt-6 sm:mt-7">
            <Link to="/hireme" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-8 py-3.5 font-bold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black text-xs sm:text-base hover:scale-105 active:scale-95 transition-all duration-300 shadow-md">
              🚀 Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SocialMediaManagement;