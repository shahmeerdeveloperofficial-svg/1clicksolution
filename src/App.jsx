import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProductVideo, { ProductVideoModal } from './components/ProductVideo.jsx'
import ModuleStrip from './components/ModuleStrip.jsx'
import SoftwareShowcase from './components/SoftwareShowcase.jsx'
import WorkflowTimeline from './components/WorkflowTimeline.jsx'
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
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [activeModuleId, setActiveModuleId] = useState('dashboard')

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName)
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSelectModule = (id) => {
    setActiveModuleId(id)
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar onOpenVideoModal={() => setVideoModalOpen(true)} />
      <main id="main">
        {/* Section 1: 3D Dark Navy Hero */}
        <Hero onOpenVideoModal={() => setVideoModalOpen(true)} />

        {/* Section 2: Product Overview & Cinematic Video Card */}
        <ProductVideo onOpenModal={() => setVideoModalOpen(true)} />

        {/* Section 3: Module Quick Bar */}
        <ModuleStrip onSelectModule={handleSelectModule} />

        {/* Section 4: "Our Solution" Complete School Management in One Platform */}
        <SoftwareShowcase
          activeModuleId={activeModuleId}
          onSelectModule={handleSelectModule}
        />

        {/* Section 5: School Workflow Pipeline */}
        <WorkflowTimeline />

        {/* Section 6: Dedicated Mobile Apps Showcase */}
        <MobileAppsShowcase onSelectPlan={handleSelectPlan} />

        {/* Section 7: Detailed Core Modules Breakdown */}
        <Modules />

        {/* Section 8: Genuine Software Screenshots Gallery */}
        <Gallery />

        {/* Section 9: Why 1 Click Solution */}
        <WhyChoose />

        {/* Section 10: Pricing & Subscription Plans */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* Section 11: Request Live Demo Banner */}
        <RequestDemo />

        {/* Section 12: Contact & Inquiry Form */}
        <ContactForm
          selectedPlan={selectedPlan}
          onClearPlan={() => setSelectedPlan(null)}
        />
      </main>

      <Footer />

      {/* Global Interactive Video Presentation Modal */}
      <ProductVideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onSelectDemo={() => handleSelectPlan('Live Demo Request')}
      />
    </>
  )
}
