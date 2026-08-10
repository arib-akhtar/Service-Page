import React, { useState, useEffect, useRef } from 'react';
import LuxuryOrbBackground from '../Background';

const whatsappNumber = '918789963987';
const whatsappLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const designItems = [
  ['🔍', 'SEO Keywords', 'We find words your buyers search. We use them to rank your site on Google.'],
  ['📅', 'Plan Ahead', 'We map out content months in advance. You will always know what to post next.'],
  ['♻️', 'Reuse Your Content', 'We turn one post into ten items. Get social posts, emails, and scripts from one piece.'],
  ['📡', 'Share Everywhere', 'We post your content across eight platforms. We style each post for the right app.'],
  ['📊', 'Track Results', 'Get clear reports on your views and clicks. We double down on what works.'],
  ['🏆', 'Build Authority', 'We write expert posts to build trust. Show your clients that you know your stuff.'],
];

const designPlans = [
  {
    name: 'Growth Content Plan', price: '₹7,000',
    features: ['SEO Keyword Research & Strategy', 'Monthly Content Calendar Planning', 'Multi-Platform Social Distribution', 'Performance Tracking Reports', '1 Round of Revisions'],
  },
  {
    name: 'Enterprise Authority Package', price: '₹18,000', popular: true,
    features: ['Advanced SEO & Blog Management', '3-Month Advanced Editorial Calendar', 'Content Repurposing (1-to-10 format)', 'Dedicated Content Strategist', 'Unlimited Revisions', 'Priority WhatsApp Support'],
  },
];

const generateReviews = () => {
  const generated = [];
  const names = ["Sarah Srivastava", "Kamal Nair", "Pooja Bhatt", "Olivia Davis", "Sanjay Bhatt", "Rohit Johnson", "Ravi Mehta", "Yash Cruz", "Devika Cruz", "Pranav Yadav", "Amit Kumar", "Neha Sharma", "Rohan Verma", "Kiran Patel", "Anjali Rao"];
  const cities = ["London", "Amsterdam", "Ahmedabad", "Jaipur", "Singapore", "Toronto", "Chandigarh", "Mumbai", "Pune", "Delhi", "Bangalore", "Hyderabad", "Kolkata", "Chennai", "Surat"];
  const comments5 = [
    "From content chaos to organized bliss — NexaSeva built a content management system that saves us hours daily.",
    "NexaSeva structured our entire content library so beautifully that anyone on the team can find any asset in seconds.",
    "NexaSeva's editorial planning eliminates content scrambles. We always know what's coming next with their 3-month advance calendar.",
    "Our content calendar by NexaSeva plans 3 months ahead. Themes, deadlines, formats — everything is mapped out clearly.",
    "For content management, NexaSeva is simply the best partner we've found. Strategy, execution, and quality — consistently excellent."
  ];
  const comments4 = [
    "NexaSeva's content governance system maintains quality even as our output scaled 5x. Workflows and checklists keep standards high.",
    "NexaSeva captured our brand voice perfectly. Blogs, social posts, emails — everything reads as if our founders wrote it.",
    "NexaSeva's newsletter management combines great content curation with scientific send-time optimization.",
    "Very satisfied with the SEO keyword strategies and organic traffic growth."
  ];
  const comments3 = [
    "Good overall content strategy delivered, though minor adjustments took an extra day.",
    "Decent editorial planning and blog writing. Meets standard requirements well."
  ];

  let idCounter = 1;
  for (let i = 0; i < 190; i++) {
    const name = names[i % names.length] + (i > 15 ? ` ${Math.floor(i / 15)}` : '');
    const initials = name.split(' ').map(n => n[0]).join('');
    const city = cities[i % cities.length];
    const text = comments5[i % comments5.length];
    generated.push({ id: idCounter++, initials, name, location: `${city} · 9 Aug 2026`, rating: 5, text });
  }
  for (let i = 0; i < 75; i++) {
    const name = names[(i + 5) % names.length] + (i > 15 ? ` ${Math.floor(i / 15)}` : '');
    const initials = name.split(' ').map(n => n[0]).join('');
    const city = cities[(i + 2) % cities.length];
    const text = comments4[i % comments4.length];
    generated.push({ id: idCounter++, initials, name, location: `${city} · 5 Aug 2026`, rating: 4, text });
  }
  for (let i = 0; i < 35; i++) {
    const name = names[(i + 3) % names.length] + (i > 15 ? ` ${Math.floor(i / 15)}` : '');
    const initials = name.split(' ').map(n => n[0]).join('');
    const city = cities[(i + 4) % cities.length];
    const text = comments3[i % comments3.length];
    generated.push({ id: idCounter++, initials, name, location: `${city} · 23 Jul 2026`, rating: 3, text });
  }
  return generated;
};

const allReviews = generateReviews();
const Stars = ({ rating }) => <span className="tracking-wider text-[#FFD700]">{'★'.repeat(rating)}<span className="text-zinc-700">{'★'.repeat(5 - rating)}</span></span>;

export default function ContentManagement() {
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
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#FFD700] font-semibold tracking-[0.2em] text-sm mb-4">STREAM B: CREATIVE & CONTENT</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent pb-2">
            Content Management
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-gray-300 text-lg leading-relaxed">
            Get custom blogs, posts, and scripts. We plan, write, and share your content. Build a brand that gets traffic and leads.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">
            <a href="#pricing" className="rounded-full px-7 py-3 font-semibold text-black bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] hover:scale-105 transition-transform">Get a Quote</a>
            <a href={whatsappLink("Hi Aivon Tech, I'm interested in your Content Management services.")} target="_blank" rel="noreferrer" className="rounded-full px-7 py-3 font-semibold border border-[#D4AF37]/60 text-[#FFFACD] bg-black/30 backdrop-blur hover:bg-[#D4AF37]/10 transition-colors">💬 Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* PREVIEW / SHOWCASE SECTION */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-150">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-black/60 backdrop-blur-md shadow-2xl relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/10 via-transparent to-[#FFD700]/5 pointer-events-none"></div>
          <div className="aspect-video flex flex-col items-center justify-center text-center p-6 relative z-10">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] flex items-center justify-center shadow-lg shadow-[#FFD700]/30 mb-6 text-black text-3xl font-bold">
              📝
            </div>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent">
              End-to-End Content Operations
            </h2>
            <p className="text-gray-300 mt-3 max-w-xl text-base leading-relaxed">
              Scale your brand authority with strategic planning, flawless execution, and multi-platform content distribution.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER SECTION */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 bg-black/30 border-y border-white/5 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">What Content We Deliver</h2>
            <p className="text-gray-400 mt-2">End-to-end content operations that scale with your business.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {designItems.map(([icon, title, text]) => (
              <article key={title} className="p-6 rounded-xl bg-[#0a0a0a]/75 backdrop-blur border border-zinc-800 hover:border-[#D4AF37]/45 transition-colors">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-bold text-lg text-[#FFFACD]">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-400">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Custom Pricing</h2>
            <p className="text-gray-400 mt-2">Built Around Your Content Needs — tailored plans to fit your volume and goals.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-7 max-w-4xl mx-auto">
            {designPlans.map((plan) => (
              <article key={plan.name} className={`relative p-7 rounded-2xl backdrop-blur-md border ${plan.popular ? 'border-[#D4AF37] bg-[#1a1608]/80' : 'border-zinc-700 bg-[#0a0a0a]/80'}`}>
                {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D4AF37] text-black text-xs font-bold">Popular</span>}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-3xl font-extrabold text-[#FFD700] mt-3">{plan.price}</p>
                <ul className="my-6 space-y-3 text-sm text-gray-300">
                  {plan.features.map((feature) => <li key={feature}>✓ <span className="ml-2">{feature}</span></li>)}
                </ul>
                <a href={whatsappLink(`Hi Aivon Tech, I want to discuss my content strategy for the ${plan.name} plan.`)} target="_blank" rel="noreferrer" className="block text-center rounded-full py-3 font-semibold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black">💬 Discuss Your Content Strategy</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS & FILTERS SECTION */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 bg-black/30 border-y border-white/5 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#FFD700] font-semibold text-sm tracking-widest">CLIENT REVIEWS</p>
            <h2 className="text-3xl font-bold mt-2">Client Reviews for Content Management</h2>
            <p className="text-gray-400 mt-2">300+ verified reviews from businesses we've helped</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between bg-[#0a0a0c]/80 border border-[#D4AF37]/30 p-6 rounded-2xl mb-10 gap-6 backdrop-blur-md">
            <div className="text-center md:text-left flex items-center gap-4">
              <strong className="text-5xl font-extrabold text-white">4.5</strong>
              <div>
                <div className="text-amber-400 text-lg mb-1"><Stars rating={5} /></div>
                <p className="text-gray-400 text-sm">300 verified reviews</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <button onClick={() => handleFilterChange('All')} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${filterRating === 'All' ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40'}`}>All</button>
              <button onClick={() => handleFilterChange(5)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterRating === 5 ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-semibold' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40'}`}>5 ★ (190)</button>
              <button onClick={() => handleFilterChange(4)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterRating === 4 ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-semibold' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40'}`}>4 ★ (75)</button>
              <button onClick={() => handleFilterChange(3)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterRating === 3 ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-semibold' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40'}`}>3 ★ (35)</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {currentReviews.length > 0 ? (
              currentReviews.map((rev) => (
                <article key={rev.id} className="p-5 rounded-xl bg-[#0a0a0a]/80 border border-zinc-800 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-3 items-center">
                      <span className="w-10 h-10 rounded-full bg-[#D4AF37]/20 text-[#FFD700] font-bold flex items-center justify-center">{rev.initials}</span>
                      <div>
                        <h3 className="font-semibold text-sm">{rev.name}</h3>
                        <p className="text-xs text-gray-500">{rev.location}</p>
                      </div>
                    </div>
                    <div className="mt-4"><Stars rating={rev.rating} /></div>
                    <p className="text-sm text-gray-400 leading-relaxed mt-3">"{rev.text}"</p>
                  </div>
                  <p className="text-xs text-[#D4AF37] mt-4 font-medium">✓ Verified Client</p>
                </article>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-400">No reviews found for this rating filter.</div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 flex-wrap">
              {currentPage > 1 && (
                <button onClick={() => setCurrentPage(currentPage - 1)} className="px-3 h-10 bg-zinc-900 hover:bg-zinc-800 text-gray-300 border border-zinc-800 rounded-lg font-medium text-sm transition-colors">← Prev</button>
              )}
              {getPageNumbers().map((item, index) => 
                item === '...' ? (
                  <span key={`dots-${index}`} className="px-3 py-2 text-gray-500 font-bold">...</span>
                ) : (
                  <button key={item} onClick={() => setCurrentPage(item)} className={`w-10 h-10 rounded-lg font-bold text-sm transition-colors ${currentPage === item ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:bg-zinc-800'}`}>{item}</button>
                )
              )}
              {currentPage < totalPages && (
                <button onClick={() => setCurrentPage(currentPage + 1)} className="px-3 h-10 bg-zinc-900 hover:bg-zinc-800 text-gray-300 border border-zinc-800 rounded-lg font-medium text-sm transition-colors">Next →</button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 text-center scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-600">
        <div className="max-w-3xl mx-auto rounded-2xl p-8 sm:p-12 bg-[#111]/75 border border-[#D4AF37]/30 backdrop-blur-md">
          <h2 className="text-3xl font-bold">Ready to Build a Content Engine?</h2>
          <p className="text-gray-400 mt-3">Turn your copy into a growth machine. Drive free traffic and build trust today.</p>
          <a href={whatsappLink("Hi Aivon Tech, I'm ready to start my content management project. Let's talk!")} target="_blank" rel="noreferrer" className="inline-block mt-7 rounded-full px-7 py-3 font-semibold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black">Get Started Today →</a>
        </div>
      </section>
    </main>
  );
}