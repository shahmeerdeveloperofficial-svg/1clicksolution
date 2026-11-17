import { useState, useRef, useEffect } from 'react'
import { mobileApps } from '../data/site.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

/**
 * High-fidelity native mobile UI mockup screens.
 * These accurately represent each user role's workflow in 1 Click Solution
 * using verified CMS modules (attendance, fees, timetable, notices, homework).
 */
function PhoneScreenContent({ app }) {
  if (app.image) {
    return (
      <img
        src={app.image}
        alt={`${app.name} interface preview`}
        className="phone-screen-img"
        loading="lazy"
        decoding="async"
      />
    )
  }

  if (app.id === 'parent') {
    return (
      <div className="app-ui app-ui--parent">
        <div className="app-ui-header">
          <div className="app-ui-brand">
            <span className="app-ui-dot" />
            <span>1 Click Solution • Parent</span>
          </div>
          <div className="app-ui-child-pill">
            <span>Zaid Ahmed • Class 8-B</span>
            <Icon name="chevronDown" size={12} />
          </div>
        </div>

        <div className="app-ui-card app-ui-card--highlight">
          <div className="app-ui-card-row">
            <div>
              <span className="app-ui-label">Today's Attendance</span>
              <strong className="app-ui-val text-green">Present (98% Term)</strong>
            </div>
            <span className="app-ui-status-tag tag-green">On Time</span>
          </div>
        </div>

        <div className="app-ui-card">
          <div className="app-ui-card-row">
            <div>
              <span className="app-ui-label">Fee Status • Oct 2026</span>
              <strong className="app-ui-val">Voucher #4812</strong>
            </div>
            <span className="app-ui-status-tag tag-blue">Paid &amp; Cleared</span>
          </div>
        </div>

        <div className="app-ui-card app-ui-card--notice">
          <div className="app-ui-notice-head">
            <Icon name="bell" size={13} />
            <span>School Notice</span>
          </div>
          <p className="app-ui-notice-text">
            Parent-Teacher Conference scheduled for Saturday 10:00 AM in Campus Auditorium.
          </p>
        </div>

        <div className="app-ui-card">
          <div className="app-ui-section-title">Today's Homework</div>
          <div className="app-ui-task-item">
            <span className="app-ui-badge-sub">Math</span>
            <div>
              <div className="app-ui-task-title">Chapter 4: Quadratic Equations</div>
              <span className="app-ui-task-sub">Exercise 4.2 • Due Tomorrow</span>
            </div>
          </div>
        </div>

        <div className="app-ui-bottom-nav">
          <span className="app-ui-nav-item active"><Icon name="layout" size={14} /><span>Home</span></span>
          <span className="app-ui-nav-item"><Icon name="calendarCheck" size={14} /><span>Attendance</span></span>
          <span className="app-ui-nav-item"><Icon name="wallet" size={14} /><span>Fees</span></span>
          <span className="app-ui-nav-item"><Icon name="bell" size={14} /><span>Notices</span></span>
        </div>
      </div>
    )
  }

  if (app.id === 'chairman') {
    return (
      <div className="app-ui app-ui--chairman">
        <div className="app-ui-header">
          <div className="app-ui-brand">
            <span className="app-ui-dot app-ui-dot--amber" />
            <span>Executive Dashboard</span>
          </div>
          <span className="app-ui-campus-tag">3 Campuses Active</span>
        </div>

        <div className="app-ui-kpi-grid">
          <div className="app-ui-kpi-box">
            <span className="app-ui-label">Total Enrolled</span>
            <strong className="app-ui-kpi-val">2,480</strong>
            <span className="app-ui-kpi-trend text-green">↑ 12% Growth</span>
          </div>
          <div className="app-ui-kpi-box">
            <span className="app-ui-label">Fee Collection</span>
            <strong className="app-ui-kpi-val">92.4%</strong>
            <span className="app-ui-kpi-trend text-blue">Oct On-Track</span>
          </div>
        </div>

        <div className="app-ui-card">
          <div className="app-ui-section-title">Campus Overview</div>
          <div className="app-ui-branch-row">
            <span>Main Campus</span>
            <span className="app-ui-branch-stat">1,240 Students • 97% Att.</span>
          </div>
          <div className="app-ui-branch-bar"><span style={{ width: '85%' }} /></div>

          <div className="app-ui-branch-row">
            <span>North Branch</span>
            <span className="app-ui-branch-stat">820 Students • 95% Att.</span>
          </div>
          <div className="app-ui-branch-bar"><span style={{ width: '68%' }} /></div>

          <div className="app-ui-branch-row">
            <span>City Campus</span>
            <span className="app-ui-branch-stat">420 Students • 98% Att.</span>
          </div>
          <div className="app-ui-branch-bar"><span style={{ width: '50%' }} /></div>
        </div>

        <div className="app-ui-card">
          <div className="app-ui-card-row">
            <div>
              <span className="app-ui-label">Staff Headcount</span>
              <strong className="app-ui-val">142 Present Today</strong>
            </div>
            <span className="app-ui-status-tag tag-green">98.6% Faculty</span>
          </div>
        </div>

        <div className="app-ui-bottom-nav">
          <span className="app-ui-nav-item active"><Icon name="barChart" size={14} /><span>KPIs</span></span>
          <span className="app-ui-nav-item"><Icon name="building" size={14} /><span>Branches</span></span>
          <span className="app-ui-nav-item"><Icon name="wallet" size={14} /><span>Finances</span></span>
          <span className="app-ui-nav-item"><Icon name="fileText" size={14} /><span>Reports</span></span>
        </div>
      </div>
    )
  }

  if (app.id === 'student') {
    return (
      <div className="app-ui app-ui--student">
        <div className="app-ui-header">
          <div className="app-ui-brand">
            <span className="app-ui-dot app-ui-dot--blue" />
            <span>Student Portal</span>
          </div>
          <span className="app-ui-child-pill">Grade 10-A • Ayesha</span>
        </div>

        <div className="app-ui-card app-ui-card--highlight-blue">
          <span className="app-ui-label">Next Up • 10:30 AM</span>
          <div className="app-ui-task-title">Physics: Wave Motion &amp; Sound</div>
          <span className="app-ui-task-sub">Science Laboratory 2 • Prof. Tariq</span>
        </div>

        <div className="app-ui-card">
          <div className="app-ui-section-title">Today's Timetable</div>
          <div className="app-ui-time-slot">
            <span className="app-ui-time">08:30 AM</span>
            <span className="app-ui-time-sub">Mathematics (Room 12)</span>
          </div>
          <div className="app-ui-time-slot">
            <span className="app-ui-time">09:30 AM</span>
            <span className="app-ui-time-sub">English Literature (Room 8)</span>
          </div>
          <div className="app-ui-time-slot active">
            <span className="app-ui-time">10:30 AM</span>
            <span className="app-ui-time-sub">Physics Lab (Current)</span>
          </div>
        </div>

        <div className="app-ui-card">
          <div className="app-ui-section-title">Assignments Due</div>
          <div className="app-ui-task-item">
            <span className="app-ui-badge-sub tag-blue">Chem</span>
            <div>
              <div className="app-ui-task-title">Periodic Trends Chart</div>
              <span className="app-ui-task-sub">Due in 2 days</span>
            </div>
          </div>
        </div>

        <div className="app-ui-bottom-nav">
          <span className="app-ui-nav-item active"><Icon name="calendarCheck" size={14} /><span>Schedule</span></span>
          <span className="app-ui-nav-item"><Icon name="bookOpen" size={14} /><span>Tasks</span></span>
          <span className="app-ui-nav-item"><Icon name="graduationCap" size={14} /><span>Exams</span></span>
          <span className="app-ui-nav-item"><Icon name="bell" size={14} /><span>Notices</span></span>
        </div>
      </div>
    )
  }

  // Teacher App
  return (
    <div className="app-ui app-ui--teacher">
      <div className="app-ui-header">
        <div className="app-ui-brand">
          <span className="app-ui-dot app-ui-dot--green" />
          <span>Faculty Desk</span>
        </div>
        <span className="app-ui-child-pill">Prof. Tariq • Class 9-B</span>
      </div>

      <div className="app-ui-card app-ui-card--highlight-green">
        <div className="app-ui-card-row">
          <div>
            <span className="app-ui-label">Class 9-B Attendance</span>
            <strong className="app-ui-val">34 / 36 Present</strong>
          </div>
          <span className="app-ui-status-tag tag-green">2 Absent</span>
        </div>
        <div className="app-ui-action-row">
          <span className="app-ui-mini-btn">1-Tap Quick Mark</span>
        </div>
      </div>

      <div className="app-ui-card">
        <div className="app-ui-section-title">Class Schedule Today</div>
        <div className="app-ui-time-slot">
          <span className="app-ui-time">09:00 AM</span>
          <span className="app-ui-time-sub">Grade 9-B Mathematics</span>
        </div>
        <div className="app-ui-time-slot">
          <span className="app-ui-time">11:15 AM</span>
          <span className="app-ui-time-sub">Grade 10-A Calculus</span>
        </div>
      </div>

      <div className="app-ui-card">
        <div className="app-ui-section-title">Quick Actions</div>
        <div className="app-ui-quick-grid">
          <div className="app-ui-quick-pill"><Icon name="fileText" size={12} /><span>Assign HW</span></div>
          <div className="app-ui-quick-pill"><Icon name="bell" size={12} /><span>Post Notice</span></div>
          <div className="app-ui-quick-pill"><Icon name="users" size={12} /><span>Class List</span></div>
          <div className="app-ui-quick-pill"><Icon name="barChart" size={12} /><span>Grades</span></div>
        </div>
      </div>

      <div className="app-ui-bottom-nav">
        <span className="app-ui-nav-item active"><Icon name="bookOpen" size={14} /><span>Classes</span></span>
        <span className="app-ui-nav-item"><Icon name="calendarCheck" size={14} /><span>Roll Call</span></span>
        <span className="app-ui-nav-item"><Icon name="fileText" size={14} /><span>Homework</span></span>
        <span className="app-ui-nav-item"><Icon name="users" size={14} /><span>Roster</span></span>
      </div>
    </div>
  )
}

/**
 * Realistic Smartphone Mockup Component
 */
function PhoneMockup({ app, isActive, onSelect }) {
  return (
    <div
      className={`phone-showcase-item${isActive ? ' is-active' : ''}`}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect()
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View ${app.name} preview`}
      aria-pressed={isActive}
    >
      <div className="phone-device-wrap">
        <div className="phone-chassis">
          {/* Side hardware buttons */}
          <span className="phone-btn phone-btn--vol-up" aria-hidden="true" />
          <span className="phone-btn phone-btn--vol-down" aria-hidden="true" />
          <span className="phone-btn phone-btn--power" aria-hidden="true" />

          {/* Screen bezel & inner display */}
          <div className="phone-bezel">
            {/* Status Bar */}
            <div className="phone-status-bar" aria-hidden="true">
              <span className="phone-status-time">9:41</span>
              <div className="phone-dynamic-island">
                <span className="phone-camera-dot" />
              </div>
              <div className="phone-status-icons">
                <svg width="14" height="10" viewBox="0 0 16 12" fill="currentColor">
                  <path d="M1 9.5h2.5v2H1zm4-3H7.5v5H5zm4-3h2.5v8H9zm4-3h2.5v11H13z" />
                </svg>
                <span className="phone-wifi-icon" />
                <span className="phone-battery-icon"><i /></span>
              </div>
            </div>

            {/* Screen Glass Sheen */}
            <div className="phone-glass-sheen" aria-hidden="true" />

            {/* Role-Specific Screen Content */}
            <div className="phone-screen-viewport">
              <PhoneScreenContent app={app} />
            </div>

            {/* Bottom Home Indicator */}
            <div className="phone-home-indicator" aria-hidden="true">
              <span className="phone-home-bar" />
            </div>
          </div>
        </div>

        {/* Realistic drop shadow */}
        <div className="phone-device-shadow" aria-hidden="true" />
      </div>

      <div className="phone-caption">
        <span className={`phone-role-badge tone-${app.tone}`}>{app.target}</span>
        <h3 className="phone-caption-title">{app.name}</h3>
        <span className="phone-caption-hint">{isActive ? 'Currently Active' : 'Click to Focus'}</span>
      </div>
    </div>
  )
}

/**
 * Mobile App Details Dialog / Modal
 */
function AppDetailDialog({ app, onClose, onSelectPlan }) {
  const ref = useRef(null)

  useEffect(() => {
    const dlg = ref.current
    if (!dlg) return
    if (app && !dlg.open) dlg.showModal()
    if (!app && dlg.open) dlg.close()
  }, [app])

  const onBackdrop = (e) => {
    if (e.target === ref.current) onClose()
  }

  const handleDemoRequest = () => {
    onClose()
    if (onSelectPlan) {
      onSelectPlan(app.name)
    }
  }

  return (
    <dialog ref={ref} className="dialog dialog--app" onClose={onClose} onClick={onBackdrop} aria-labelledby="app-dialog-title">
      {app && (
        <div className="dialog-body">
          <button type="button" className="dialog-close" onClick={onClose} aria-label="Close details">
            <Icon name="close" size={20} />
          </button>

          <div className="dialog-head">
            <span className={`icon-tile tone-${app.tone}`}>
              <Icon name={app.icon} size={24} />
            </span>
            <div>
              <span className="badge badge--pill">{app.target}</span>
              <h3 id="app-dialog-title" style={{ marginTop: '6px' }}>{app.name}</h3>
            </div>
          </div>

          <p className="dialog-text">{app.description}</p>

          <div className="app-dialog-block">
            <h4>Verified Key Functionality</h4>
            <ul className="check-list">
              {app.verifiedCapabilities.map((item) => (
                <li key={item}>
                  <Icon name="check" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="app-dialog-availability">
            <div className="app-avail-head">
              <Icon name="smartphone" size={18} />
              <strong>Platform Availability</strong>
            </div>
            <p>{app.availability}</p>
            <p className="app-avail-note">
              <em>Note: Native mobile applications are provisioned directly to registered schools upon deployment. Contact our team to schedule a live mobile walkthrough.</em>
            </p>
          </div>

          <div className="dialog-actions">
            <a href="#contact" className="btn btn--primary" onClick={handleDemoRequest}>
              Request Demo for {app.shortName} App
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

export default function MobileAppsShowcase({ onSelectPlan }) {
  const [activeId, setActiveId] = useState(mobileApps[0].id)
  const [detailApp, setDetailApp] = useState(null)

  const activeApp = mobileApps.find((a) => a.id === activeId) || mobileApps[0]

  return (
    <section className="section section--apps" id="mobile-apps">
      {/* Background ambient radial lighting */}
      <div className="apps-bg" aria-hidden="true">
        <span className="apps-glow apps-glow--a" />
        <span className="apps-glow apps-glow--b" />
        <span className="apps-grid-pattern" />
      </div>

      <div className="container apps-inner">
        {/* Section Heading */}
        <Reveal className="section-head section-head--light">
          <span className="hero-kicker kicker-apps">
            <Icon name="smartphone" size={14} />
            Mobile Ecosystem
          </span>
          <h2>Four Powerful Apps. One Connected School.</h2>
          <p>
            1 Click Solution connects school management, teachers, students, and parents through four dedicated
            mobile applications designed for their everyday needs.
          </p>
        </Reveal>

        {/* Mobile Tab Selector (Visible on smaller screens) */}
        <div className="apps-mobile-nav" role="tablist" aria-label="Select mobile application">
          {mobileApps.map((app) => (
            <button
              key={app.id}
              type="button"
              role="tab"
              aria-selected={activeId === app.id}
              className={`apps-nav-pill${activeId === app.id ? ' is-active' : ''}`}
              onClick={() => setActiveId(app.id)}
            >
              <Icon name={app.icon} size={15} />
              <span>{app.shortName} App</span>
            </button>
          ))}
        </div>

        {/* Desktop & Tablet 4-Smartphone Mockup Showcase */}
        <Reveal className="apps-stage-wrap">
          <div className="apps-phone-row">
            {mobileApps.map((app) => (
              <PhoneMockup
                key={app.id}
                app={app}
                isActive={activeId === app.id}
                onSelect={() => setActiveId(app.id)}
              />
            ))}
          </div>
        </Reveal>

        {/* Supporting Application Cards Grid */}
        <Reveal host className="apps-cards-grid">
          {mobileApps.map((app, i) => (
            <article
              key={app.id}
              className={`app-info-card stg tone-${app.tone}${activeId === app.id ? ' is-focused' : ''}`}
              style={{ '--i': i }}
              onClick={() => setActiveId(app.id)}
            >
              <div className="app-card-top">
                <span className="icon-tile">
                  <Icon name={app.icon} size={22} />
                </span>
                <span className="app-card-badge">{app.badge}</span>
              </div>

              <div className="app-card-meta">
                <h3 className="app-card-title">{app.name}</h3>
                <span className="app-card-role">{app.target}</span>
              </div>

              <p className="app-card-desc">{app.description}</p>

              <ul className="app-card-benefits">
                {app.benefits.map((b) => (
                  <li key={b}>
                    <Icon name="check" size={15} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="app-card-action">
                <button
                  type="button"
                  className="btn btn--outline-light btn--sm app-explore-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    setDetailApp(app)
                  }}
                  aria-haspopup="dialog"
                >
                  <span>Explore {app.shortName} App</span>
                  <Icon name="arrowRight" size={14} />
                </button>
              </div>
            </article>
          ))}
        </Reveal>

        {/* Assurance Banner / Note */}
        <div className="apps-footer-note">
          <Icon name="shield" size={18} />
          <span>
            All four mobile applications operate synchronously with your 1 Click Solution central database.
            No manual re-entry or separate data synchronisation required.
          </span>
        </div>
      </div>

      {/* Accessible Detail Dialog */}
      <AppDetailDialog
        app={detailApp}
        onClose={() => setDetailApp(null)}
        onSelectPlan={onSelectPlan}
      />
    </section>
  )
}
