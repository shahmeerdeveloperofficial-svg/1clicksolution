import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
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
  const [lang, setLang] = useState('en')
  const [selectedPlan, setSelectedPlan] = useState(null)
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
    <div className={`app-root lang-${lang}`}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar
        lang={lang}
        onLangChange={setLang}
      />
      <main id="main">
        {/* Section 1: 3D Dark Navy Hero */}
        <Hero lang={lang} />

        {/* Section 2: Module Quick Bar (Horizontal Navigation Strip) */}
        <ModuleStrip onSelectModule={handleSelectModule} />

        {/* Section 3: "Our Solution" Complete School Management in One Platform */}
        <SoftwareShowcase
          lang={lang}
          activeModuleId={activeModuleId}
          onSelectModule={handleSelectModule}
        />

        {/* Section 4: School Workflow Pipeline */}
        <WorkflowTimeline />

        {/* Section 5: Dedicated Mobile Apps Showcase */}
        <MobileAppsShowcase onSelectPlan={handleSelectPlan} />

        {/* Section 6: Detailed Core Modules Breakdown */}
        <Modules />

        {/* Section 7: Genuine Software Screenshots Gallery */}
        <Gallery />

        {/* Section 8: Why 1 Click Solution */}
        <WhyChoose />

        {/* Section 9: Pricing & Subscription Plans */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* Section 10: Request Live Demo Banner */}
        <RequestDemo />

        {/* Section 11: Contact & Inquiry Form */}
        <ContactForm
          selectedPlan={selectedPlan}
          onClearPlan={() => setSelectedPlan(null)}
        />
      </main>

      <Footer />
    </div>
  )
}
