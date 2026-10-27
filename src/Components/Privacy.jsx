import React, { useState, useEffect, useRef } from 'react';
import LuxuryOrbBackground from './Background';

const Privacy = () => {
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
      content: `Aivon Tech ("Company," "we," "our," or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, store, and protect information when you use our website, services, and communication channels. Aivon Tech is a registered MSME entity under the Government of India — Ministry of MSME. We operate in compliance with applicable Indian data protection laws and regulations.`
    },
    {
      title: "2. Information We Collect",
      content: `We collect the following types of information in the course of providing our services:

2.1 Information You Provide Directly
• Discovery Form Data: Business name, contact details, website goals, target audience, service requirements, and current operational bottlenecks — collected via Google Forms.
• Asset Handover Files: Logo files, raw media, brand guidelines, credentials, and reference materials — shared via Google Sheets and secure file transfer.
• WhatsApp Messages: Text messages, media files, voice notes, and documents shared through our WhatsApp Business line.
• Email Communications: Correspondence sent to help@aivontech.com, support@aivontech.com, or other designated email addresses.
• Payment Information: Transaction details processed through standard payment methods (UPI, bank transfer). We do not store complete bank account or card details.

2.2 Information Collected Automatically
• Website Analytics: Anonymized visitor data including page views, session duration, referral sources, and device information.
• Cookies: Essential cookies for website functionality and optional analytics cookies (with your consent).`
    },
    {
      title: "3. How We Use Your Information",
      content: `We use collected information for the following purposes:
• Service Delivery: To fulfill your service requests, create deliverables, and manage project workflows.
• Communication: To respond to inquiries, provide project updates, and send important notifications via WhatsApp and email.
• Project Management: To track deliverables, manage revisions, and maintain engagement records via Google Sheets and WhatsApp.
• Service Improvement: To analyze aggregated, anonymized data for improving our service quality and processes.
• Legal Compliance: To comply with applicable laws, regulations, and legal obligations.`
    },
    {
      title: "4. Data Storage & Security",
      content: `We implement appropriate technical and organizational measures to protect your data:
• Google Workspace: Discovery forms and asset tracking sheets are hosted on Google Workspace with enterprise-grade security, encryption at rest, and access controls.
• WhatsApp Business: All WhatsApp communications are protected by end-to-end encryption provided by the WhatsApp platform.
• Web Hosting: Our website is hosted on secure servers with SSL/TLS encryption, regular security patches, and automated backups.
• Access Control: Only authorized Aivon Tech team members have access to client data, governed by internal confidentiality agreements.
• No Data Sales: We never sell, rent, or trade your personal information to third parties for marketing or any other purpose.`
    },
    {
      title: "5. WhatsApp Business Data",
      content: `As our primary communication channel, we want to be transparent about WhatsApp data handling:
• Messages are received and managed through the WhatsApp Business App installed on our dedicated professional business SIM.
• Webhook Processing: Incoming WhatsApp messages may be processed through automated webhook systems (e.g., Make.com, Zapier, or custom Node.js integrations) for lead capture, automated responses, and workflow triggers.
• Lead Logging: Contact information from WhatsApp inquiries (name, phone number, message content) may be automatically logged to our Google Sheet Lead Tracker for follow-up purposes.
• AI-Assisted Responses: We may use AI tools to draft context-aware replies to common inquiries, which are reviewed and approved before sending.
• Auto-Messages: Automated greeting and away messages are configured for off-hours inquiries.`
    },
    {
      title: "6. Cookies & Analytics",
      content: `• Essential Cookies: Required for basic website functionality (e.g., navigation, session management). These cannot be disabled.
• Analytics Cookies: Optional cookies used to understand how visitors interact with our website. Data is anonymized and aggregated.
• No Invasive Tracking: We do not use cross-site tracking, fingerprinting, or invasive surveillance technologies.
• Consent: Analytics cookies are only activated with your explicit consent.`
    },
    {
      title: "7. Third-Party Services",
      content: `We use the following third-party services in the course of our operations:
• Google Workspace: Google Forms, Google Sheets, Gmail — for data collection, project tracking, and email communication.
• WhatsApp / Meta: WhatsApp Business App and WhatsApp Cloud API for client communication and automated workflows.
• Web Hosting Provider: For hosting our website and client web projects with SSL certificates and server-level security.
• Make.com / Zapier: For workflow automation, webhook processing, and integration between services.
• Analytics: Basic website analytics for understanding traffic patterns (anonymized data only).

Each third-party service operates under its own privacy policy. We encourage you to review their policies for detailed information on their data practices.`
    },
    {
      title: "8. Data Retention",
      content: `• Active Engagements: Client data is retained throughout the duration of the service engagement.
• Post-Engagement: Data is retained for 12 months after the conclusion of the engagement for reference, warranty support, and potential re-engagement.
• Deletion: After the retention period, client data is securely deleted unless required by law to be retained longer.
• On-Request Deletion: Data deletion requests are honored within 30 business days (see Section 9).`
    },
    {
      title: "9. Your Rights",
      content: `You have the following rights regarding your personal data:
• Right to Access: Request a copy of the personal data we hold about you.
• Right to Correction: Request correction of inaccurate or incomplete personal data.
• Right to Deletion: Request deletion of your personal data, subject to legal retention requirements.
• Right to Opt-Out: Opt out of non-essential communications at any time by notifying us via WhatsApp or email.
• Right to Data Portability: Request your data in a commonly used, machine-readable format.

To exercise any of these rights, please contact us at help@aivontech.com, support@aivontech.com or via our WhatsApp Business line.`
    },
    {
      title: "10. Children's Privacy",
      content: `Aivon Tech's services are designed for businesses and individuals aged 18 and above. We do not knowingly collect personal information from children under 18. If we become aware that we have inadvertently collected data from a minor, we will take immediate steps to delete such information.`
    },
    {
      title: "11. Changes to This Policy",
      content: `Aivon Tech reserves the right to update this Privacy Policy at any time. We will notify active clients of material changes via:
• WhatsApp message to our active communication threads
• Email notification to registered email addresses
• Prominent notice on our website

Changes take effect 15 days after notification. Continued use of our services after the effective date constitutes acceptance of the updated policy.`
    },
    {
      title: "12. Contact Us",
      content: `For questions, concerns, or requests related to this Privacy Policy or your personal data, please contact us:
• Email: help@aivontech.com / support@aivontech.com
• WhatsApp: Chat with us over our official Business Line
• Registration: MSME Registered, Government of India — Ministry of MSME`
    }
  ];

  return (
    <div ref={pageRef} className="bg-transparent text-white font-sans antialiased relative selection:bg-[#D4AF37]/30 min-h-screen overflow-hidden">
      
      <LuxuryOrbBackground />

      <section id="privacy" className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-transparent min-h-screen flex items-center relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            <div className="text-center mb-8 sm:mb-12 scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent mb-2 inline-block pb-1.5">
                    Privacy Policy
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm mt-2">Last Updated: May 2026</p>
                <div className="w-20 sm:w-24 h-0.5 bg-[#D4AF37]/40 mx-auto mt-4"></div>
            </div>

            <div className="bg-[#111]/70 backdrop-blur-md border border-[#D4AF37]/20 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8 text-xs sm:text-sm text-gray-300 leading-relaxed scroll-animate opacity-0 translate-y-10 scale-95 transition-all duration-700 ease-out delay-150">
                <span className="text-[#FFD700] font-bold">Privacy Commitment:</span> At 
                <strong> Aivon Tech</strong>, we secure and value your personal data. Click on any section below to expand and read our data handling rules.
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
                <p>Security Hub: <span className="text-[#D4AF37] break-all">support@aivontech.com</span></p>
            </div>

        </div>
      </section>
    </div>
  );
};

export default Privacy;