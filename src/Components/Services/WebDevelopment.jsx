import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LuxuryOrbBackground from "../Background"; // <-- Path theek kar diya gaya hai

const WebDevelopment = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Scroll animation using Intersection Observer (Smooth and slow)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.scroll-fade, .image-zoom-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Get perfect layouts across all screens, from mobile to desktop. No compromises.",
    },
    {
      icon: "🛒",
      title: "Online Stores",
      description: "We build shops with payments, stock tracking, and auto order logging. Sell with ease.",
    },
    {
      icon: "⚡",
      title: "Web App Features",
      description: "Get app-like pages in the browser. Supports push notices and offline use.",
    },
    {
      icon: "🔍",
      title: "SEO Ready",
      description: "We use clean code and meta tags. Help your site rank on search engines from day one.",
    },
    {
      icon: "⚙️",
      title: "Easy CMS",
      description: "Update your site copy without coding. We build systems your team can edit easily.",
    },
    {
      icon: "🚀",
      title: "Fast Load Times",
      description: "We speed up your site to load in under two seconds. Keep your site fast.",
    },
  ];

  const reviews = [
    {
      initials: "RK",
      name: "Rahul Kim",
      location: "Surat · 3 Aug 2026",
      rating: 5,
      text: "Testing our site across devices reveals Aivon Tech's attention to detail — responsive perfection on every screen size.",
      verified: true,
      category: "5 ★",
    },
    {
      initials: "AD",
      name: "Akash Deshpande",
      location: "Indore · 30 Jul 2026",
      rating: 5,
      text: "Seamless integrations by Aivon Tech connected our website to WhatsApp, CRM, and Google Sheets. All data flows automatically.",
      verified: true,
      category: "5 ★",
    },
    {
      initials: "DD",
      name: "Devika Desai",
      location: "London · 29 Jul 2026",
      rating: 3,
      text: "Aivon Tech's structured development approach — weekly demos, milestone tracking, regular check-ins — kept our project perfectly on track.",
      verified: true,
      category: "3 ★",
    },
    {
      initials: "AW",
      name: "Arjun Wilson",
      location: "Coimbatore · 26 Jul 2026",
      rating: 4,
      text: "Mobile experience was critical for us, and Aivon Tech delivered a site that's as polished on phones as on desktop.",
      verified: false,
      category: "4 ★",
    },
    {
      initials: "MB",
      name: "Mark Banerjee",
      location: "Amsterdam · 26 Jul 2026",
      rating: 5,
      text: "Aivon Tech optimized our legacy site to a 95 PageSpeed score. The performance improvement directly boosted our conversions.",
      verified: false,
      category: "5 ★",
    },
    {
      initials: "SA",
      name: "Swati Agarwal",
      location: "Jaipur · 19 Jul 2026",
      rating: 5,
      text: "Speed was our top priority, and Aivon Tech delivered an e-commerce site that loads in under 2 seconds. Conversions soared.",
      verified: true,
      category: "5 ★",
    },
    {
      initials: "RW",
      name: "Rekha Wang",
      location: "Dubai · 14 Jul 2026",
      rating: 4,
      text: "Our booking workflow went from manual to fully automated thanks to Aivon Tech's development. Clients book 24/7 now.",
      verified: true,
      category: "4 ★",
    },
    {
      initials: "RL",
      name: "Ritu Lopez",
      location: "Coimbatore · 12 Jul 2026",
      rating: 4,
      text: "Aivon Tech's development process is a model of transparency. Weekly demos, milestone updates, and always accessible for questions.",
      verified: true,
      category: "4 ★",
    },
    {
      initials: "EB",
      name: "Emily Banerjee",
      location: "Patna · 8 Jul 2026",
      rating: 4,
      text: "Our e-commerce site by Aivon Tech loads blazingly fast — under 2 seconds. The performance optimization is exceptional.",
      verified: true,
      category: "4 ★",
    },
    {
      initials: "YI",
      name: "Yogesh Iyer",
      location: "Patna · 29 Jun 2026",
      rating: 4,
      text: "Zero unexpected downtimes in a full year — Aivon Tech's hosting and maintenance is rock-solid.",
      verified: true,
      category: "4 ★",
    },
  ];

  const filteredReviews =
    activeFilter === "All"
      ? reviews
      : reviews.filter((r) => r.category.includes(activeFilter[0]));

  return (
    <main className="min-h-screen bg-transparent text-white overflow-hidden relative">
      <LuxuryOrbBackground />
      
      {/* Scroll animation styles (Slower, smoother: 1.8s duration) */}
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
      <section className="relative z-10 scroll-fade max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 text-center">
        <span className="text-xs uppercase tracking-widest text-[#FFD700] font-semibold bg-[#FFD700]/10 px-3 py-1 rounded-full border border-[#FFD700]/20">
          Stream C: Tech & Automation
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold mt-6 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">
          Web Development
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Get responsive sites, online shops, and custom web apps. We build sites that load fast, rank high, and get buyers.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/hireme"
            className="bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get a Quote
          </Link>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#FFD700]/40 text-[#FFD700] px-8 py-3 rounded-full font-medium bg-black/30 backdrop-blur hover:bg-[#FFD700]/10 transition-all duration-300 flex items-center gap-2"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* 2. WHAT WE BUILD SECTION */}
      <section className="relative z-10 scroll-fade max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5 bg-black/30 backdrop-blur-sm">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">
            What We Build
          </h2>
          <p className="mt-3 text-gray-400 text-lg">
            High-performance web solutions that grow with your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="image-zoom-reveal bg-[#0a0a0c]/80 backdrop-blur-md border border-[#FFD700]/15 rounded-2xl p-8 hover:border-[#FFD700]/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {feat.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#FFD700] transition-colors">
                {feat.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CUSTOM PRICING SECTION */}
      <section className="relative z-10 scroll-fade max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="image-zoom-reveal bg-gradient-to-br from-[#0a0a0c]/90 to-[#121216]/90 backdrop-blur-md border border-[#FFD700]/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-48 h-48 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
          
          <span className="text-[#FFD700] text-sm uppercase tracking-wider font-semibold">Custom Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine pb-1">
            Engineered for Your Needs
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
            Whether you need a simple landing page or a custom web app, we build to fit your needs. Let's talk about your project goals.
          </p>

          <div className="mt-8">
            <Link
              to="/hireme"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black px-8 py-3.5 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-md"
            >
              💬 Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CLIENT REVIEWS SECTION */}
      <section className="relative z-10 scroll-fade max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5 bg-black/30 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">
            Client Reviews for Web Development
          </h2>
          <p className="mt-2 text-gray-400">300+ verified reviews from businesses we've helped</p>
          
          <div className="mt-6 inline-flex flex-col items-center bg-[#0a0a0c]/80 backdrop-blur-md border border-[#FFD700]/20 px-6 py-4 rounded-xl">
            <div className="text-3xl font-extrabold text-[#FFD700]">4.5</div>
            <div className="text-yellow-400 my-1">★★★★★</div>
            <div className="text-xs text-gray-400">300 verified reviews</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["All", "5 ★", "4 ★", "3 ★"].map((filter, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeFilter === filter
                  ? "bg-[#FFD700] text-black border-[#FFD700]"
                  : "bg-transparent text-gray-300 border-zinc-800 hover:border-[#FFD700]/40"
              }`}
            >
              {filter === "All" ? "All" : filter + ` (${filter === "5 ★" ? 179 : filter === "4 ★" ? 90 : 31})`}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev, index) => (
            <div
              key={index}
              className="scroll-fade bg-[#0a0a0c]/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FFD700]/30 transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] font-bold text-sm">
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{rev.name}</h4>
                    <p className="text-xs text-gray-500">{rev.location}</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-sm mb-3">
                  {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">"{rev.text}"</p>
              </div>

              {rev.verified && (
                <div className="text-xs text-[#FFD700] flex items-center gap-1 font-medium pt-3 border-t border-zinc-900">
                  ✓ Verified Client
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <button className="w-10 h-10 rounded-lg bg-[#0a0a0c]/80 backdrop-blur-md border border-zinc-800 text-gray-400 hover:text-white hover:border-[#FFD700] flex items-center justify-center transition-colors">
            1
          </button>
          <button className="w-10 h-10 rounded-lg bg-[#0a0a0c]/80 backdrop-blur-md border border-zinc-800 text-gray-400 hover:text-white hover:border-[#FFD700] flex items-center justify-center transition-colors">
            2
          </button>
          <button className="w-10 h-10 rounded-lg bg-[#0a0a0c]/80 backdrop-blur-md border border-zinc-800 text-gray-400 hover:text-white hover:border-[#FFD700] flex items-center justify-center transition-colors">
            3
          </button>
          <button className="w-10 h-10 rounded-lg bg-[#0a0a0c]/80 backdrop-blur-md border border-zinc-800 text-gray-400 hover:text-white hover:border-[#FFD700] flex items-center justify-center transition-colors">
            4
          </button>
          <button className="px-4 h-10 rounded-lg bg-[#0a0a0c]/80 backdrop-blur-md border border-zinc-800 text-gray-400 hover:text-white hover:border-[#FFD700] flex items-center justify-center transition-colors text-sm">
            Next →
          </button>
        </div>
      </section>

      {/* 5. FOOTER CALL TO ACTION */}
      <section className="relative z-10 scroll-fade max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center border-t border-white/5">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine pb-1">
          Ready to Build Something Exceptional?
        </h2>
        <p className="mt-3 text-gray-400 max-w-lg mx-auto">
          From concept to launch, we build web solutions that perform, convert, and scale.
        </p>
        <div className="mt-8">
          <Link
            to="/hireme"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black px-8 py-3.5 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            💬 Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
};

export default WebDevelopment;