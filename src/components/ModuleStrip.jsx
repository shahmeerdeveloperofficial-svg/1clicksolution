import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

export const moduleStripItems = [
  {
    id: 'admissions',
    title: 'Admissions',
    desc: 'Manage student registrations',
    icon: 'userPlus',
    tone: 'purple',
    badgeColor: '#8B5CF6',
  },
  {
    id: 'students',
    title: 'Students',
    desc: 'Complete student records',
    icon: 'graduationCap',
    tone: 'blue',
    badgeColor: '#0EA5E9',
  },
  {
    id: 'attendance',
    title: 'Attendance',
    desc: 'Real-time tracking',
    icon: 'calendarCheck',
    tone: 'green',
    badgeColor: '#10B981',
  },
  {
    id: 'fees',
    title: 'Fees',
    desc: 'Fee collection & management',
    icon: 'wallet',
    tone: 'amber',
    badgeColor: '#F59E0B',
  },
  {
    id: 'academics',
    title: 'Academics',
    desc: 'Classes, subjects & curricu...',
    icon: 'bookOpen',
    tone: 'indigo',
    badgeColor: '#6366F1',
  },
  {
    id: 'examinations',
    title: 'Examinations',
    desc: 'Tests, results & grading',
    icon: 'fileText',
    tone: 'pink',
    badgeColor: '#EC4899',
  },
  {
    id: 'reports',
    title: 'Reports',
    desc: 'Detailed institutional reports',
    icon: 'barChart',
    tone: 'teal',
    badgeColor: '#14B8A6',
  },
]

export default function ModuleStrip({ onSelectModule }) {
  const handleClick = (id) => {
    if (onSelectModule) {
      onSelectModule(id)
    }
    // Also scroll down to the solution showcase section
    const el = document.getElementById('solution')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-strip" aria-label="Core School Modules Quick Navigation">
      <div className="container">
        <Reveal className="module-strip-wrap">
          <div className="module-strip-grid" role="list">
            {moduleStripItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`module-strip-card tone-${item.tone}`}
                onClick={() => handleClick(item.id)}
                role="listitem"
                title={`Explore ${item.title}`}
              >
                <span className="strip-card-icon" style={{ backgroundColor: `${item.badgeColor}18`, color: item.badgeColor }}>
                  <Icon name={item.icon} size={20} />
                </span>
                <div className="strip-card-content">
                  <h4 className="strip-card-title">{item.title}</h4>
                  <p className="strip-card-desc">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
