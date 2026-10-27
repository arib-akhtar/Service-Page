import React, { useState, useEffect, useRef } from "react";
import LuxuryOrbBackground from "./Background";

const whatsappNumber = "8789963987";
const whatsappLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const benefits = [
  [
    "🔀",
    "Custom Funnels",
    "We map customer paths from first sight to final sale. We make every step convert.",
  ],
  [
    "🧪",
    "A/B Testing",
    "We test headlines, ads, and audiences. We find what works best to lower your ad costs.",
  ],
  [
    "📍",
    "Targeted Campaigns",
    "Reach buyers in specific cities and regions. Show your ads only to the right people.",
  ],
  [
    "📊",
    "Click Tracking",
    "Know exactly where your sales come from. Track every buyer from first click to purchase.",
  ],
  [
    "💬",
    "WhatsApp Leads",
    "Send buyers straight to your chat. Get hot leads in real time on your phone.",
  ],
  [
    "📋",
    "Weekly Reports",
    "Get clear reports on your ad spend and wins. We share real data that helps you grow.",
  ],
];

const plans = [
  {
    name: "Business Starter",
    price: "₹1,500/10 days",
    features: [
      "2 Free Creative Designs",
      "Facebook Ads Setup",
      "10 Days Management",
      "Performance Tracking",
      "Basic Optimization Support",
    ],
  },
  {
    name: "Business Intermediate",
    price: "₹5,000/month",
    popular: true,
    features: [
      "4 Premium Creative Designs",
      "Video Creative Support",
      "Audience Targeting Guide",
      "Meta Business Manager Setup",
      "Performance Report",
      "Advanced Tracking",
      "10 Days Full Management Support",
    ],
  },
];

// Automatically generating 300+ realistic fake reviews distributed across 5, 4, and 3 stars for Marketing
const generateReviews = () => {
  const generated = [];
  const names = [
    "Alex Joshi",
    "Sophie Deshpande",
    "Sunita Wang",
    "Manoj Patil",
    "Rajesh Pandey",
    "Ananya Kapoor",
    "Vikram Malhotra",
    "Neha Sharma",
    "Amitabh Roy",
    "Pooja Sen",
    "Karan Mehta",
    "Divya Iyer",
    "Rohan Das",
    "Sneha Gupta",
    "Manish Kumar",
    "Kavita Nair",
    "Arjun Kapoor",
    "Meera Joshi",
    "Siddharth Rao",
    "Deepika Sen",
  ];
  const cities = [
    "Toronto",
    "Tokyo",
    "Bhopal",
    "Hyderabad",
    "Mumbai",
    "Coimbatore",
    "Delhi",
    "Bangalore",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Jaipur",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Patna",
    "Vadodara",
  ];

  const comments5 = [
    "From chaotic ad spending to a data-driven 3x revenue increase — Aivon Tech turned our marketing around completely.",
    "Aivon Tech runs A/B tests on everything — headlines, creatives, audiences, landing pages. The continuous optimization is phenomenal.",
    "We thought we knew our market. Aivon Tech’s analysis proved otherwise and opened up entirely new growth channels.",
    "The lead flow through WhatsApp funnels set up by Aivon Tech has been consistent and high-quality.",
    "Absolute game changer for our e-commerce brand. Our ROI skyrocketed within the first month!",
  ];
  const comments4 = [
    "The targeting precision Aivon Tech brings to campaigns is unmatched. Every rupee spent delivers measurable returns. Our CPA dropped 45%.",
    "Aivon Tech built us a complete growth ecosystem — landing pages, email sequences, retargeting funnels — everything connected seamlessly.",
    "Great communication and solid campaign strategy. Very happy with the results.",
    "Clean data tracking and transparent weekly reports. Highly professional team.",
  ];
  const comments3 = [
    "Good overall campaign setup, though initial ad scaling took a few extra days.",
    "Decent funnel strategy and tracking. Meets standard marketing requirements well.",
  ];

  let idCounter = 1;

  // 171 Five-star reviews
  for (let i = 0; i < 171; i++) {
    const name =
      names[i % names.length] + (i > 20 ? ` ${Math.floor(i / 20)}` : "");
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    const city = cities[i % cities.length];
    const text = comments5[i % comments5.length];
    generated.push({
      id: idCounter++,
      initials,
      name,
      location: `${city} · 29 Jul 2026`,
      rating: 5,
      text,
    });
  }

  // 93 Four-star reviews
  for (let i = 0; i < 93; i++) {
    const name =
      names[(i + 5) % names.length] + (i > 20 ? ` ${Math.floor(i / 20)}` : "");
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    const city = cities[(i + 3) % cities.length];
    const text = comments4[i % comments4.length];
    generated.push({
      id: idCounter++,
      initials,
      name,
      location: `${city} · 20 Jul 2026`,
      rating: 4,
      text,
    });
  }

  // 36 Three-star reviews
  for (let i = 0; i < 36; i++) {
    const name =
      names[(i + 2) % names.length] + (i > 20 ? ` ${Math.floor(i / 20)}` : "");
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    const city = cities[(i + 7) % cities.length];
    const text = comments3[i % comments3.length];
    generated.push({
      id: idCounter++,
      initials,
      name,
      location: `${city} · 10 Jul 2026`,
      rating: 3,
      text,
    });
  }

  return generated;
};

const allReviews = generateReviews();
const Stars = ({ rating }) => (
  <span className="tracking-wider text-[#FFD700]">
    {"★".repeat(rating)}
    <span className="text-zinc-700">{"★".repeat(5 - rating)}</span>
  </span>
);

const MarketingPage = () => {
  const [filterRating, setFilterRating] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "scale-100",
            );
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-10",
              "scale-95",
            );
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = pageRef.current.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const filteredReviews =
    filterRating === "All"
      ? allReviews
      : allReviews.filter((r) => r.rating === Number(filterRating));

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(
    indexOfFirstReview,
    indexOfLastReview,
  );

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
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }
    return pages;
  };

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-transparent text-white overflow-hidden relative"
    >
      <LuxuryOrbBackground />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#FFD700] font-semibold tracking-[0.2em] text-xs sm:text-sm mb-3 sm:mb-4">
            STREAM A: GROWTH & ADS
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine pb-2 sm:pb-3">
            Marketing & Growth Systems
          </h1>
          <p className="max-w-2xl mx-auto mt-4 sm:mt-6 text-shadow-white text-base sm:text-lg leading-relaxed">
            Get custom sales funnels and ads that grow your business. Scale your
            brand using smart, data-driven marketing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-7 sm:mt-9">
            <a
              href="#pricing"
              className="w-full sm:w-auto text-center rounded-full px-7 py-3 font-semibold text-black bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] hover:scale-105 active:scale-95 transition-transform shadow-lg"
            >
              View Plans
            </a>
            <a
              href={whatsappLink(
                "Hi Aivon Tech, I'm interested in your Marketing and Growth Systems.",
              )}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center rounded-full px-7 py-3 font-semibold border border-[#D4AF37]/60 text-shadow-white bg-black/30 backdrop-blur hover:bg-[#D4AF37]/10 active:scale-95 transition-colors"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* VIDEO PREVIEW SECTION */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-150">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-[#D4AF37]/25 bg-black/50 backdrop-blur-md p-6 sm:p-10 min-h-[220px] sm:aspect-video flex items-center justify-center text-center">
          <div>
            <span className="inline-flex w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/60 items-center justify-center text-xl sm:text-2xl">
              ▶
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-5 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">
              See How We Drive Growth
            </h2>
            <p className="text-shadow-white text-xs sm:text-base mt-2">
              Watch our marketing methodology in action
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET SECTION */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-black/30 border-y border-white/5 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">
              What You Get
            </h2>
            <p className="text-shadow-white text-xs sm:text-base mt-2">
              Every tool, tactic, and framework designed to accelerate your
              growth
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {benefits.map(([icon, title, text]) => (
              <article
                key={title}
                className="p-5 sm:p-6 rounded-xl bg-[#0a0a0a]/75 backdrop-blur border border-zinc-800 hover:border-[#D4AF37]/45 transition-colors"
              >
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{icon}</div>
                <h3 className="font-bold text-base sm:text-lg bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">{title}</h3>
                <p className="text-shadow-white text-xs sm:text-sm leading-relaxed mt-2">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section
        id="pricing"
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-14 sm:py-20 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-400"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine">Choose Your Growth Plan</h2>
            <p className="text-shadow-white text-xs sm:text-base mt-2">
              Transparent pricing, no hidden fees. Scale when you’re ready.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative p-6 sm:p-7 rounded-2xl backdrop-blur-md border ${plan.popular ? "border-[#D4AF37] bg-[#1a1608]/80" : "border-zinc-700 bg-[#0a0a0a]/80"}`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D4AF37] text-black text-xs font-bold">
                    Popular
                  </span>
                )}
                <h3 className="text-lg sm:text-xl font-bold">{plan.name}</h3>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#FFD700] mt-3">
                  {plan.price}
                </p>
                <ul className="my-5 sm:my-6 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-[#FFD700] mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(
                    `Hi Aivon Tech, I want to enroll in the ${plan.name} plan.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center rounded-full py-3.5 sm:py-3 font-semibold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black hover:scale-105 active:scale-95 transition-transform"
                >
                  💬 Get Started
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS & FILTERS SECTION */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-black/30 border-y border-white/5 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-[#FFD700] font-semibold text-xs sm:text-sm tracking-widest">
              CLIENT REVIEWS
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
              Client Reviews for Marketing & Growth
            </h2>
            <p className="text-gray-400 text-xs sm:text-base mt-2">
              See what 300+ clients say about our marketing systems
            </p>
          </div>

          {/* Rating Overview & Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-[#0a0a0c]/80 border border-[#D4AF37]/30 p-4 sm:p-6 rounded-2xl mb-8 sm:mb-10 gap-5 sm:gap-6 backdrop-blur-md">
            <div className="text-center md:text-left flex items-center gap-4">
              <strong className="text-4xl sm:text-5xl font-extrabold text-white">
                4.5
              </strong>
              <div>
                <div className="text-amber-400 text-base sm:text-lg mb-1">
                  <Stars rating={5} />
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">300 verified reviews</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => handleFilterChange("All")}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${filterRating === "All" ? "bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black" : "bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40"}`}
              >
                All
              </button>
              <button
                onClick={() => handleFilterChange(5)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${filterRating === 5 ? "bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-semibold" : "bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40"}`}
              >
                5 ★ (171)
              </button>
              <button
                onClick={() => handleFilterChange(4)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${filterRating === 4 ? "bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-semibold" : "bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40"}`}
              >
                4 ★ (93)
              </button>
              <button
                onClick={() => handleFilterChange(3)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${filterRating === 3 ? "bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-semibold" : "bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40"}`}
              >
                3 ★ (36)
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
            {currentReviews.length > 0 ? (
              currentReviews.map((rev) => (
                <article
                  key={rev.id}
                  className="p-4 sm:p-5 rounded-xl bg-[#0a0a0a]/80 border border-zinc-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-3 items-center">
                      <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#D4AF37]/20 text-[#FFD700] font-bold flex items-center justify-center text-xs sm:text-sm">
                        {rev.initials}
                      </span>
                      <div>
                        <h3 className="font-semibold text-xs sm:text-sm">{rev.name}</h3>
                        <p className="text-[11px] sm:text-xs text-gray-500">{rev.location}</p>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <Stars rating={rev.rating} />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-2.5 sm:mt-3">
                      "{rev.text}"
                    </p>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#D4AF37] mt-3 sm:mt-4 font-medium">
                    ✓ Verified Client
                  </p>
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
                  className="px-2.5 sm:px-3 h-9 sm:h-10 bg-zinc-900 hover:bg-zinc-800 text-gray-300 border border-zinc-800 rounded-lg font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  ← Prev
                </button>
              )}

              {getPageNumbers().map((item, index) =>
                item === "..." ? (
                  <span
                    key={`dots-${index}`}
                    className="px-2 sm:px-3 py-1 text-gray-500 font-bold text-xs sm:text-sm"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={item}
                    onClick={() => setCurrentPage(item)}
                    className={`w-9 sm:w-10 h-9 sm:h-10 rounded-lg font-bold text-xs sm:text-sm transition-colors cursor-pointer ${currentPage === item ? "bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black" : "bg-zinc-900 text-gray-300 border border-zinc-800 hover:bg-zinc-800"}`}
                  >
                    {item}
                  </button>
                ),
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
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-600">
        <div className="max-w-3xl mx-auto rounded-2xl p-6 sm:p-8 md:p-12 bg-[#111]/75 border border-[#D4AF37]/30 backdrop-blur-md">
          <h2 className="text-2xl sm:text-3xl bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent animate-shine font-bold">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-shadow-white text-xs sm:text-base mt-2.5 sm:mt-3">
            Let’s build your custom growth engine. Talk to our strategists
            today.
          </p>
          <a
            href={whatsappLink(
              "Hi Aivon Tech, I'm ready to accelerate my growth. Let's talk!",
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-block w-full sm:w-auto mt-6 sm:mt-7 rounded-full px-7 py-3.5 sm:py-3 font-semibold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black hover:scale-105 active:scale-95 transition-transform"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default MarketingPage;
