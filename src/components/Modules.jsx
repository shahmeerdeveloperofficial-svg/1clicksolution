import { useEffect, useRef, useState } from 'react'
import { modules, modulesPreview } from '../data/site.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

function ModuleDialog({ module, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dlg = ref.current
    if (!dlg) return
    if (module && !dlg.open) dlg.showModal()
    if (!module && dlg.open) dlg.close()
  }, [module])

  const onBackdrop = (e) => {
    if (e.target === ref.current) onClose()
  }

  return (
    <dialog ref={ref} className="dialog" onClose={onClose} onClick={onBackdrop} aria-labelledby="module-dialog-title">
      {module && (
        <div className="dialog-body">
          <button type="button" className="dialog-close" onClick={onClose} aria-label="Close details">
            <Icon name="close" size={20} />
          </button>

          <div className="dialog-head">
            <span className={`icon-tile tone-${module.tone}`}>
              <Icon name={module.icon} size={22} />
            </span>
            <div>
              <h3 id="module-dialog-title">{module.title}</h3>
              {module.status === 'upcoming' && <span className="badge badge--upcoming">Upcoming</span>}
            </div>
          </div>

          <p className="dialog-text">{module.long}</p>

          {module.points.length > 0 && (
            <ul className="check-list">
              {module.points.map((p) => (
                <li key={p}>
                  <Icon name="check" size={16} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          )}

          {module.image && (
            <figure className="dialog-shot">
              <img src={module.image} alt={`${module.title} screen from 1 Click Solution`} loading="lazy" decoding="async" />
            </figure>
          )}

          <div className="dialog-actions">
            <a href="#demo" className="btn btn--primary" onClick={onClose}>
              Request a Demo
            </a>
            <button type="button" className="btn btn--ghost" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </dialog>
  )
}

export default function Modules() {
  const [showAll, setShowAll] = useState(false)
  const [active, setActive] = useState(null)
  const visible = showAll ? modules : modules.slice(0, modulesPreview)

  return (
    <section className="section section--modules" id="modules">
      <div className="container">
        <Reveal className="section-head">
          <h2>Modules for every part of school administration</h2>
          <p>Each module works on the same shared records, so your team never has to switch systems.</p>
        </Reveal>

        <Reveal host className="module-grid">
          {visible.map((m, i) => (
            <article key={m.id} className={`module-card stg tone-${m.tone}`} style={{ '--i': i % 4 }}>
              <span className="icon-tile">
                <Icon name={m.icon} size={22} />
              </span>
              <div className="module-card-title">
                <h3>{m.title}</h3>
                {m.status === 'upcoming' && <span className="badge badge--upcoming">Upcoming</span>}
              </div>
              <p>{m.short}</p>
              <button type="button" className="text-link" onClick={() => setActive(m)} aria-haspopup="dialog">
                View Details
                <Icon name="arrowRight" size={16} />
              </button>
            </article>
          ))}
        </Reveal>

        {modules.length > modulesPreview && (
          <div className="center-row">
            <button type="button" className="btn btn--secondary" onClick={() => setShowAll((v) => !v)} aria-expanded={showAll}>
              {showAll ? 'Show fewer modules' : `View all ${modules.length} modules`}
            </button>
          </div>
        )}
      </div>

      <ModuleDialog module={active} onClose={() => setActive(null)} />
    </section>
  )
}
