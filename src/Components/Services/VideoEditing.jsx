import React, { useState, useEffect, useRef } from 'react';
import LuxuryOrbBackground from '../Background';

const whatsappNumber = '918789963987';
const whatsappLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const designItems = [
  ['🎨', 'Color Grading', 'We adjust tones and color tags to give your video a premium, film-like look.'],
  ['🎵', 'Sound and Music', 'We add sound effects and background tunes. We mix voices so they sound clear.'],
  ['✨', 'Motion Graphics', 'We add moving text, intros, and titles to make your video look clean and style-rich.'],
  ['📱', 'Short Videos', 'We design Reels and Shorts with strong hooks to get viewers focus in the first second.'],
  ['🏢', 'Business Videos', 'We edit clips for product launches, brand stories, and client reviews to build deep trust.'],
  ['🎥', 'Multi-Camera Sync', 'We align clips from multiple cameras for podcasts and shows. Switch views smoothly.'],
];

const designPlans = [
  {
    name: 'Shorts & Reels Pro Pack', price: '₹6,000',
    features: ['High-Retention Hook Editing', 'Dynamic Subtitles & Motion Graphics', 'Sound Design & Background Beats', 'Color Grading Included', 'Quick Turnaround'],
  },
  {
    name: 'Cinematic Brand Package', price: '₹15,000', popular: true,
    features: ['Full-Length YouTube & Brand Videos', 'Multi-Camera Podcast Synchronization', 'Custom Branded Intros & Outros', 'Dedicated Senior Video Editor', 'Unlimited Revisions', 'Priority WhatsApp Support'],
  },
];

const generateReviews = () => {
  const generated = [];
  const names = ["Manoj Gupta", "Komal Williams", "Sandeep Chopra", "Nandini Davis", "Arjun Naik", "Neha Chauhan", "Pooja Agarwal", "Shweta Lee", "Aisha Brown", "Anil Dubey", "Rahul Sen", "Amit Roy", "Priya Das", "Karan Joshi", "Sneha Kapoor"];
  const cities = ["Jaipur", "Coimbatore", "Pune", "Vadodara", "Bhopal", "Surat", "Sydney", "Ahmedabad", "Chandigarh", "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Kolkata", "Chennai"];
  const comments5 = [
    "The video editing NexaSeva delivers is on par with professional studios. Color grading alone elevates our content dramatically.",
    "NexaSeva understands that great video is 50% audio. Their sound design, music selection, and mixing are exceptional.",
    "NexaSeva's subtitle work expanded our video reach across language barriers. Professional, accurate, and beautifully timed.",
    "Product launch videos by NexaSeva build anticipation through expert editing. The dramatic reveals and music timing are perfect.",
    "100K+ views on our reels is standard since NexaSeva started editing. Their hook strategy in the first second is genius."
  ];
  const comments4 = [
    "Great work on our podcast multi-camera edits. Very clean cuts and audio sync.",
    "Solid execution on brand story videos. Standout emotional impact achieved.",
    "Clean motion graphics and animated titles. Built with great attention to detail.",
    "Very satisfied with the YouTube editing package. Highly professional quality."
  ];
  const comments3 = [
    "Good overall video editing delivered, though minor revisions took an extra day.",
    "Decent color grading and sound mix. Meets standard requirements well."
  ];

  let idCounter = 1;
  for (let i = 0; i < 185; i++) {
    const name = names[i % names.length] + (i > 15 ? ` ${Math.floor(i / 15)}` : '');
    const initials = name.split(' ').map(n => n[0]).join('');
    const city = cities[i % cities.length];
    const text = comments5[i % comments5.length];
    generated.push({ id: idCounter++, initials, name, location: `${city} · 10 Aug 2026`, rating: 5, text });
  }
  for (let i = 0; i < 90; i++) {
    const name = names[(i + 4) % names.length] + (i > 15 ? ` ${Math.floor(i / 15)}` : '');
    const initials = name.split(' ').map(n => n[0]).join('');
    const city = cities[(i + 3) % cities.length];
    const text = comments4[i % comments4.length];
    generated.push({ id: idCounter++, initials, name, location: `${city} · 6 Aug 2026`, rating: 4, text });
  }
  for (let i = 0; i < 25; i++) {
    const name = names[(i + 2) % names.length] + (i > 15 ? ` ${Math.floor(i / 15)}` : '');
    const initials = name.split(' ').map(n => n[0]).join('');
    const city = cities[(i + 6) % cities.length];
    const text = comments3[i % comments3.length];
    generated.push({ id: idCounter++, initials, name, location: `${city} · 25 Jul 2026`, rating: 3, text });
  }
  return generated;
};

const allReviews = generateReviews();
const Stars = ({ rating }) => <span className="tracking-wider text-[#FFD700]">{'★'.repeat(rating)}<span className="text-zinc-700">{'★'.repeat(5 - rating)}</span></span>;

export default function VideoEditing() {
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
            Video Editing
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-gray-300 text-lg leading-relaxed">
            Get custom edits for Reels, Shorts, and YouTube videos. We handle sounds, color tuning, and animations to keep your viewers hooked.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">
            <a href="#pricing" className="rounded-full px-7 py-3 font-semibold text-black bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] hover:scale-105 transition-transform">Get a Quote</a>
            <a href={whatsappLink("Hi Aivon Tech, I'm interested in your Video Editing services.")} target="_blank" rel="noreferrer" className="rounded-full px-7 py-3 font-semibold border border-[#D4AF37]/60 text-[#FFFACD] bg-black/30 backdrop-blur hover:bg-[#D4AF37]/10 transition-colors">💬 Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* PREVIEW / SHOWCASE SECTION */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-150">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-black/60 backdrop-blur-md shadow-2xl relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/10 via-transparent to-[#FFD700]/5 pointer-events-none"></div>
          <div className="aspect-video flex flex-col items-center justify-center text-center p-6 relative z-10">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] flex items-center justify-center shadow-lg shadow-[#FFD700]/30 mb-6 text-black text-3xl font-bold">
              🎬
            </div>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent">
              Cinematic Edits That Hook Viewers
            </h2>
            <p className="text-gray-300 mt-3 max-w-xl text-base leading-relaxed">
              Transform your raw footage into professional, high-retention videos with elite color grading and sound design.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER SECTION */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 bg-black/30 border-y border-white/5 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">What Video Editing We Deliver</h2>
            <p className="text-gray-400 mt-2">End-to-end video production and post-production services.</p>
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
            <p className="text-gray-400 mt-2">Tailored to Your Vision — each project is unique with custom plans to fit your length and goals.</p>
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
                <a href={whatsappLink(`Hi Aivon Tech, I want to discuss my video project for the ${plan.name} plan.`)} target="_blank" rel="noreferrer" className="block text-center rounded-full py-3 font-semibold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black">💬 Discuss Your Project</a>
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
            <h2 className="text-3xl font-bold mt-2">Client Reviews for Video Editing</h2>
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
              <button onClick={() => handleFilterChange(5)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterRating === 5 ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-semibold' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40'}`}>5 ★ (185)</button>
              <button onClick={() => handleFilterChange(4)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterRating === 4 ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-semibold' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40'}`}>4 ★ (90)</button>
              <button onClick={() => handleFilterChange(3)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterRating === 3 ? 'bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black font-semibold' : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#D4AF37]/40'}`}>3 ★ (25)</button>
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
          <h2 className="text-3xl font-bold">Ready to Create Cinematic Content?</h2>
          <p className="text-gray-400 mt-3">Transform your raw footage into professional, engaging videos that captivate your audience.</p>
          <a href={whatsappLink("Hi Aivon Tech, I'm ready to start my video editing project. Let's talk!")} target="_blank" rel="noreferrer" className="inline-block mt-7 rounded-full px-7 py-3 font-semibold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] text-black">Start Your Project →</a>
        </div>
      </section>
    </main>
  );
}