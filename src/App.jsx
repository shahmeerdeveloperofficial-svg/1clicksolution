import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Intro from './components/Intro.jsx'
import Modules from './components/Modules.jsx'
import MobileAppsShowcase from './components/MobileAppsShowcase.jsx'
import Gallery from './components/Gallery.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import PricingSection from './components/PricingSection.jsx'
import RequestDemo from './components/RequestDemo.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName)
    // Smooth scroll to contact form if not already there
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Intro />
        <Modules />
        <MobileAppsShowcase onSelectPlan={handleSelectPlan} />
        <Gallery />
        <WhyChoose />
        <PricingSection onSelectPlan={handleSelectPlan} />
        <RequestDemo />
        <ContactForm
          selectedPlan={selectedPlan}
          onClearPlan={() => setSelectedPlan(null)}
        />
      </main>
      <Footer />
    </>
  )
}
