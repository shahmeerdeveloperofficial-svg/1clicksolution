import Reveal from './Reveal.jsx'

export default function RequestDemo() {
  return (
    <section className="section section--demo" id="demo">
      <div className="container">
        <Reveal className="demo-band">
          <span className="demo-orb demo-orb--a" aria-hidden="true" />
          <span className="demo-orb demo-orb--b" aria-hidden="true" />
          <div className="demo-copy">
            <h2>See 1 Click Solution with your own school in mind</h2>
            <p>
              Ask for a demo and we will walk you through the modules that matter to your institution. Pricing is
              prepared for each school, so request a custom quote based on your campuses and needs.
            </p>
          </div>
          <div className="demo-actions">
            <a href="#contact" className="btn btn--light btn--lg">
              Request a Demo
            </a>
            <a href="#contact" className="btn btn--outline-light btn--lg">
              Request a Custom Quote
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
