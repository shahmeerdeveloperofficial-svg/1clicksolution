import { flow } from '../data/site.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

export default function Intro() {
  return (
    <section className="section section--intro" id="about">
      <div className="container intro-grid">
        <Reveal className="intro-copy">
          <h2>One system for the work your school repeats every day</h2>
          <p>
            1 Click Solution brings admissions, student records, staff, attendance, fees, and academics into one
            platform. Administrators spend less time on repetitive manual work, and important records are easier to
            find when they are needed.
          </p>
        </Reveal>

        <Reveal className="flow" aria-label="How information moves through 1 Click Solution">
          <ol className="flow-list">
            {flow.map((step) => (
              <li key={step.label} className={`flow-step tone-${step.tone}`}>
                <span className="flow-icon">
                  <Icon name={step.icon} size={20} />
                </span>
                <span className="flow-label">{step.label}</span>
              </li>
            ))}
          </ol>
          <p className="flow-note">Information entered once is available wherever it is needed.</p>
        </Reveal>
      </div>
    </section>
  )
}
