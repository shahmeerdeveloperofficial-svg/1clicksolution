import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Intro from './components/Intro.jsx'
import Modules from './components/Modules.jsx'
import Gallery from './components/Gallery.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import RequestDemo from './components/RequestDemo.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
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
        <Gallery />
        <WhyChoose />
        <RequestDemo />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
