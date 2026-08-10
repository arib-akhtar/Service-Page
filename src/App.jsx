import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
// import ThemeToggler from './Components/Light'
import ServicesSection from './Components/Service'
import LuxuryOrbBackground from './Components/Background'
import Hero from './Components/home/Hero'
import WhyChooseUs from './Components/home/WhyChooseUs'
import About from './Components/home/About'
import HowToGetStarted from './Components/home/HowToGetStarted'
import StatsSection from './Components/home/TrustBadge'
import CTASection from './Components/home/CTASection'
import MarketingPage from './Components/MarketingPage'
import Terms from './Components/Terms'
import Privacy from './Components/Privacy'
import Hireme from './Components/Hireme'
import GraphicDesigning from './Components/Services/GraphicDesigning'
import WebDevelopment from './Components/Services/WebDevelopment'
import SocialMediaManagement from './Components/Services/SocialMediaManagement'

// 1. ChatWidget component ko import karein (path apne folder structure ke hisaab se check kar lein)
import ChatWidget from './ChatWidget' 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Main Homepage route */}
        <Route path="/" element={
          <>
            <Hero />
            <WhyChooseUs />
            <ServicesSection />
            <LuxuryOrbBackground />
            <About />
            {/* <ThemeToggler /> */}
            <HowToGetStarted />
            <StatsSection />
            <CTASection />
          </>
        } />

        {/* Service Routes */}
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/smm" element={<SocialMediaManagement />} />
        <Route path="/ads" element={<div className="pt-24 text-center text-white text-3xl">Ad Creatives Page</div>} />
        <Route path="/graphicdesigning" element={<GraphicDesigning />} />
        <Route path="/video" element={<div className="pt-24 text-center text-white text-3xl">Video Editing Page</div>} />
        <Route path="/content" element={<div className="pt-24 text-center text-white text-3xl">Content Management Page</div>} />
        <Route path="/web-development" element={<WebDevelopment/>} />
        <Route path="/ai" element={<div className="pt-24 text-center text-white text-3xl">AI Tools & Automation Page</div>} />

        {/* Extra Pages Routes */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/hireme" element={<Hireme />} />
      </Routes>
      
      <Footer />

      {/* 2. Yahan ChatWidget add kar diya hai, jisse yeh har route par dikhega */}
      <ChatWidget />
      
    </BrowserRouter>
  )
}

export default App