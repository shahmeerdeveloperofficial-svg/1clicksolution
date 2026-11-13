import { benefits } from '../data/site.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

export default function WhyChoose() {
  return (
    <section className="section" id="why">
      <div className="container">
        <Reveal className="section-head">
          <h2>Why schools choose 1 Click Solution</h2>
          <p>Practical benefits that come from running the whole institution on one platform.</p>
        </Reveal>

        <Reveal host className="benefit-grid">
          {benefits.map((b, i) => (
            <div key={b.title} className={`benefit stg tone-${b.tone}`} style={{ '--i': i % 3 }}>
              <span className="icon-tile">
                <Icon name={b.icon} size={22} />
              </span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
