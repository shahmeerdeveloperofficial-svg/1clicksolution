import { useState } from 'react'
import { gallery } from '../data/site.js'
import Reveal from './Reveal.jsx'

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const current = gallery[index]

  return (
    <section className="section section--dark" id="screenshots">
      <div className="container">
        <Reveal className="section-head">
          <h2>See the software your team will use</h2>
          <p>Real screens from the 1 Click Solution CMS. Select a screen to preview it.</p>
        </Reveal>

        <Reveal className="gallery">
          <div className="gallery-glow" aria-hidden="true" />
          <div className="browser">
            <div className="browser-bar" aria-hidden="true">
              <span /><span /><span />
            </div>
            <div className="browser-screen">
              <img key={current.id} src={current.src} alt={`${current.title} in the 1 Click Solution CMS`} width="1500" height="938" decoding="async" />
            </div>
          </div>

          <div className="gallery-caption" aria-live="polite">
            <h3>{current.title}</h3>
            <p>{current.text}</p>
          </div>

          <div className="thumbs" role="group" aria-label="Choose a screenshot">
            {gallery.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className={`thumb${i === index ? ' is-active' : ''}`}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
              >
                <img src={item.src} alt="" width="300" height="188" loading="lazy" decoding="async" />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
