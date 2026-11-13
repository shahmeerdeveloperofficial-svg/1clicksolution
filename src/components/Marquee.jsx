import { modules } from '../data/site.js'
import { Icon } from './Icons.jsx'

// Slow ticker of the modules that are available today.
export default function Marquee() {
  const items = modules.filter((m) => m.status === 'available')
  const row = (hidden) => (
    <ul className="marquee-track" aria-hidden={hidden || undefined}>
      {items.map((m) => (
        <li key={m.id} className={`marquee-item tone-${m.tone}`}>
          <span className="marquee-icon">
            <Icon name={m.icon} size={16} />
          </span>
          {m.title}
        </li>
      ))}
    </ul>
  )
  return (
    <div className="marquee" aria-label="Available modules">
      <div className="marquee-inner">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
