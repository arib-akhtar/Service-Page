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

// Services Imports
import GraphicDesigning from './Components/Services/GraphicDesigning'
import WebDevelopment from './Components/Services/WebDevelopment'
import SocialMediaManagement from './Components/Services/SocialMediaManagement'
import AdCreatives from './Components/Services/AdCreatives'
import VideoEditing from './Components/Services/VideoEditing'
import ContentManagement from './Components/Services/ContentManagement'
import AIAutomation from './Components/Services/AIAutomation'

// ChatWidget Component
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
        <Route path="/ads" element={<AdCreatives />} />
        <Route path="/graphicdesigning" element={<GraphicDesigning />} />
        <Route path="/video" element={<VideoEditing />} />
        <Route path="/content" element={<ContentManagement />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/ai" element={<AIAutomation />} />

        {/* Extra Pages Routes */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/hireme" element={<Hireme />} />
      </Routes>
      
      <Footer />
      <ChatWidget />
    </BrowserRouter>
  )
}

export default App