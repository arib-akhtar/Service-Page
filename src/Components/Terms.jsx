import React, { useState, useEffect, useRef } from 'react';
import LuxuryOrbBackground from './Background';

const Terms = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "1. Introduction",
      content: `Welcome to Aivon Tech ("Company," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of the services provided by Aivon Tech, a registered MSME entity operating under the laws of India. By engaging our services, you ("Client," "you," or "your") agree to be bound by these Terms. Aivon Tech operates as a digital marketing, web development, and AI automation agency providing 8 specialized services through a centralized WhatsApp Business communication hub.`
    },
    {
      title: "2. Service Overview",
      content: `Aivon Tech provides services organized into three operational streams:\n• Stream A (Growth & Ads): Marketing & Growth Systems, Social Media Management, Ad Creatives.\n• Stream B (Creative & Content): Graphic Designing, Video Editing, Content Management.\n• Stream C (Tech & Automation): Web Development, AI Tools & Automation.`
    },
    {
      title: "3. Communication Channels",
      content: `Primary Channel: All client communication is routed through our dedicated WhatsApp Business line. Email: Administrative and formal communications via help@aivontech.com and support@aivontech.com. Response Commitment: We aim to respond within 4 business hours during operational hours (Mon–Sat, 9:00 AM – 8:00 PM IST).`
    },
    {
      title: "4. Onboarding Process",
      content: `Step 1 — Discovery Form: Clients complete a Google Form capturing initial requirements. Step 2 — Asset Handover: Deliverable tracking via shared Google Sheet for media/credentials. Step 3 — Project Management: Ongoing communication, approvals, and tracking via WhatsApp Business.`
    },
    {
      title: "5. Payment Terms",
      content: `Marketing Plans: Fixed plans like Business Starter (₹1,500/10 days) and Business Intermediate (₹5,000/month). Payment Structure: 50% advance payment upon project confirmation, 50% upon final delivery. Late Payment: Invoices unpaid beyond 15 days may result in project suspension.`
    },
    {
      title: "6. Intellectual Property",
      content: `Client Ownership: Upon full payment, the Client owns all final deliverables (designs, code, content). Portfolio Rights: Aivon Tech retains the right to showcase completed work in our portfolio unless agreed otherwise. Source Files (PSD, AI, Figma) are provided upon request after full payment.`
    },
    {
      title: "7. Confidentiality",
      content: `All data shared via Google Forms, Sheets, WhatsApp, and email is treated as confidential business information. We do not share, sell, or distribute client data to third parties without explicit written consent.`
    },
    {
      title: "8. Service Level Agreement (SLA)",
      content: `Response Time: Initial response within 4 business hours via WhatsApp. Revision Rounds: 2 revision rounds are included per deliverable at no additional cost. Website Uptime: Target 99.9% uptime with proactive monitoring.`
    },
    {
      title: "9. Cancellation & Refunds",
      content: `Marketing Plans: Cancel anytime. Business Intermediate requires 15 days' notice (no refund for current cycle). On-Demand Projects: Post advance payment, services are non-refundable. Unstarted Work: Full refund within 7 business days if no work has initiated.`
    },
    {
      title: "10. Limitation of Liability",
      content: `Aivon Tech shall not be liable for indirect, incidental, or consequential damages, or revenue/data loss resulting from third-party platform outages (Meta, Google, WhatsApp). Our maximum aggregate liability is limited to the total fees paid by the Client.`
    },
    {
      title: "11. Governing Law & Jurisdiction",
      content: `These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from or related to these Terms shall be subject to the exclusive jurisdiction of the courts in India.`
    }
  ];

  return (
    <div ref={pageRef} className="bg-transparent text-white font-sans antialiased relative selection:bg-[#D4AF37]/30 min-h-screen overflow-hidden">
      
      <LuxuryOrbBackground />

      <section id="terms" className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-transparent min-h-screen flex items-center relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            <div className="text-center mb-8 sm:mb-12 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent mb-2 inline-block">
                    Terms and Conditions
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm mt-2">Last Updated: May 2026</p>
                <div className="w-20 sm:w-24 h-0.5 bg-[#D4AF37]/40 mx-auto mt-4"></div>
            </div>

            <div className="bg-[#111]/70 backdrop-blur-md border border-[#D4AF37]/20 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8 text-xs sm:text-sm text-gray-300 leading-relaxed scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-150">
                <span className="text-[#FFD700] font-bold">Important Notice:</span> By engaging services with 
                <strong> Aivon Tech</strong> (A registered MSME entity, Govt. of India), you agree to be bound by the terms detailed below. Please click on any section to read the full details.
            </div>

            <div className="space-y-3 sm:space-y-4 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-300">
              {sections.map((sec, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="border border-zinc-800 bg-[#0a0a0a]/80 backdrop-blur-md rounded-lg overflow-hidden">
                      <button 
                        onClick={() => toggleAccordion(idx)} 
                        className="w-full flex justify-between items-center p-3.5 sm:p-4 text-left font-medium text-gray-200 hover:text-white hover:bg-zinc-900/50 transition-colors group cursor-pointer"
                      >
                          <span className="text-sm sm:text-base md:text-lg pr-2">{sec.title}</span>
                          <svg className={`h-5 w-5 text-[#D4AF37] shrink-0 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                      </button>
                      <div 
                        ref={(el) => (contentRefs.current[idx] = el)}
                        className="accordion-content overflow-hidden transition-all duration-300 ease-in-out"
                        style={{ maxHeight: isOpen ? `${contentRefs.current[idx]?.scrollHeight || 300}px` : '0px' }}
                      >
                          <div className="p-3.5 sm:p-5 text-gray-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-900/50 whitespace-pre-line break-words">
                              {sec.content}
                          </div>
                      </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 sm:mt-12 text-center p-4 sm:p-6 border border-zinc-800 bg-zinc-950/70 backdrop-blur-md rounded-xl text-xs text-gray-500 space-y-2 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-500">
                <p>Aivon Tech — Ministry of MSME, Govt. of India (Udyam Registered)</p>
                <p>Have questions? Email us at <span className="text-[#D4AF37] break-all">support@aivontech.com</span></p>
            </div>

        </div>
      </section>
    </div>
  );
};

export default Terms;