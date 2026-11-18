import { useState } from 'react'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import gDashboard from '../assets/screens/g-dashboard.webp'
import gAttendance from '../assets/screens/g-attendance.webp'
import gFees from '../assets/screens/g-fees.webp'
import gEnrollment from '../assets/screens/g-enrollment.webp'
import gStaff from '../assets/screens/g-staff.webp'
import gReports from '../assets/screens/g-reports.webp'
import gCalendar from '../assets/screens/g-calendar.webp'
import realFeeRevise from '../assets/screens/real-fee-revise.jpg'
import { translations } from '../data/translations.js'

const showcaseModules = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'layout',
    title: 'Central Institutional Dashboard',
    desc: 'Real-time overview of active students, staff attendance, fee collection trajectories, and today’s operational alerts.',
    image: gDashboard,
    badge: 'Live Operations',
    stats: [
      { label: 'Total Students', value: '1,248' },
      { label: 'Total Staff', value: '86' },
      { label: 'Today Attendance', value: '94%' },
      { label: 'Pending Fees', value: 'Rs. 245,000' },
    ],
  },
  {
    id: 'admissions',
    label: 'Admissions',
    icon: 'userPlus',
    title: 'Student Inquiry & Registration',
    desc: 'Track prospective student inquiries through Active, Won, Passive, and Lost stages with zero duplicate data entry.',
    image: gEnrollment,
    badge: 'Enrollment Hub',
    stats: [
      { label: 'New Inquiries', value: '142' },
      { label: 'Admissions Won', value: '89' },
      { label: 'Capacity Filled', value: '87%' },
      { label: 'Class Sections', value: '24 Active' },
    ],
  },
  {
    id: 'attendance',
    label: 'Attendance',
    icon: 'calendarCheck',
    title: 'Daily Student & Staff Attendance',
    desc: 'Instant one-tap attendance marking by class and section with automatic real-time SMS alerts sent to parents.',
    image: gAttendance,
    badge: 'Real-Time Sync',
    stats: [
      { label: 'Present Today', value: '1,173' },
      { label: 'Absent', value: '75' },
      { label: 'SMS Dispatched', value: '100%' },
      { label: 'Staff Present', value: '84 / 86' },
    ],
  },
  {
    id: 'fees',
    label: 'Fee Collection',
    icon: 'wallet',
    title: 'Fee Structure & Voucher Billing',
    desc: 'Live Fee Revise interface at http://127.0.0.1:8001/admin/account/studentfee. Generate tuition vouchers, manage discounts, and track pending ledgers.',
    image: realFeeRevise,
    badge: 'Finance & Accounts',
    stats: [
      { label: 'Total Billed', value: 'Rs. 1.2M' },
      { label: 'Collected', value: 'Rs. 955K' },
      { label: 'Pending Defaulters', value: '18 Students' },
      { label: 'Recovery Rate', value: '92.4%' },
    ],
  },
  {
    id: 'academics',
    label: 'Academics & Timetable',
    icon: 'bookOpen',
    title: 'Curriculum & Routine Schedules',
    desc: 'Manage class schedules, subject assignments, teacher workloads, and term academic calendars with ease.',
    image: gCalendar,
    badge: 'Academic Plan',
    stats: [
      { label: 'Subjects Taught', value: '38' },
      { label: 'Weekly Periods', value: '192' },
      { label: 'Active Teachers', value: '64' },
      { label: 'Terms Scheduled', value: '3 Terms' },
    ],
  },
  {
    id: 'staff',
    label: 'Staff Directory',
    icon: 'users',
    title: 'Faculty & Administrative Staff',
    desc: 'Maintain detailed staff profiles, designations, assigned sections, qualification records, and payroll data.',
    image: gStaff,
    badge: 'HR & Directory',
    stats: [
      { label: 'Teaching Faculty', value: '68' },
      { label: 'Admin Staff', value: '18' },
      { label: 'Verified Records', value: '100%' },
      { label: 'Document Vault', value: 'Cloud Secured' },
    ],
  },
  {
    id: 'reports',
    label: 'Reports & Audits',
    icon: 'barChart',
    title: 'Comprehensive Reporting & Analytics',
    desc: 'Generate end-of-term academic transcripts, financial balance sheets, and institutional audit reports with one click.',
    image: gReports,
    badge: 'Executive Insights',
    stats: [
      { label: 'Report Types', value: '25+ Ready' },
      { label: 'Export Formats', value: 'PDF / Excel' },
      { label: 'Automated Audit', value: 'Instant' },
      { label: 'Chairman Access', value: '24/7 Mobile' },
    ],
  },
]

export default function SoftwareShowcase({ lang = 'en', activeModuleId, onSelectModule }) {
  const [selectedId, setSelectedId] = useState('dashboard')
  const t = translations[lang]?.solution || translations.en.solution

  // Support external control via props
  const currentId = activeModuleId || selectedId
  const activeModule = showcaseModules.find((m) => m.id === currentId) || showcaseModules[0]

  const handleTabChange = (id) => {
    setSelectedId(id)
    if (onSelectModule) {
      onSelectModule(id)
    }
  }

  return (
    <section className="section section--solution" id="solution">
      <div className="container">
        <div className="solution-grid">
          {/* Left Column: Heading & Value Points */}
          <Reveal className="solution-copy">
            <span className="section-kicker">{t.kicker}</span>
            <h2>{t.title}</h2>
            <p className="solution-lead">{t.desc}</p>

            {/* 2x2 Feature Checkmarks */}
            <div className="solution-features-grid">
              <div className="solution-feature-item">
                <span className="feature-check" aria-hidden="true">
                  <Icon name="checkCircle" size={20} />
                </span>
                <span>{t.feat1}</span>
              </div>

              <div className="solution-feature-item">
                <span className="feature-check" aria-hidden="true">
                  <Icon name="checkCircle" size={20} />
                </span>
                <span>{t.feat2}</span>
              </div>

              <div className="solution-feature-item">
                <span className="feature-check" aria-hidden="true">
                  <Icon name="checkCircle" size={20} />
                </span>
                <span>{t.feat3}</span>
              </div>

              <div className="solution-feature-item">
                <span className="feature-check" aria-hidden="true">
                  <Icon name="checkCircle" size={20} />
                </span>
                <span>{t.feat4}</span>
              </div>
            </div>

            <div className="solution-cta-row">
              <a href="#modules" className="btn btn--primary">
                {t.btnExplore}
                <Icon name="arrowRight" size={18} />
              </a>
              <a href="#demo" className="btn btn--secondary">
                {t.btnDemo}
              </a>
            </div>
          </Reveal>

          {/* Right Column: 3D Perspective Device Mockup with Tabs */}
          <Reveal className="solution-mockup-wrapper">
            {/* Category Switcher Tabs */}
            <div className="showcase-tabs" role="tablist" aria-label="CMS Module Views">
              {showcaseModules.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={currentId === item.id}
                  className={`showcase-tab-btn${currentId === item.id ? ' is-active' : ''}`}
                  onClick={() => handleTabChange(item.id)}
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* 3D Perspective Display Screen Frame */}
            <div className="showcase-perspective-frame">
              <div className="perspective-device-body">
                {/* Top browser/window bar */}
                <div className="device-window-bar">
                  <div className="window-dots">
                    <span className="win-dot red" />
                    <span className="win-dot yellow" />
                    <span className="win-dot green" />
                  </div>
                  <span className="window-title-tag">
                    1 Click Solution — {activeModule.title}
                  </span>
                  <span className="window-badge">{activeModule.badge}</span>
                </div>

                {/* Screenshot view */}
                <div className="device-screen-container">
                  <img
                    key={activeModule.id}
                    src={activeModule.image}
                    alt={`${activeModule.title} from 1 Click Solution`}
                    className="device-screen-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="screen-glass-sheen" aria-hidden="true" />
                </div>

                {/* Bottom Live Metrics Bar matching Reference Design */}
                <div className="device-metrics-bar">
                  {activeModule.stats.map((st, i) => (
                    <div key={i} className="metric-col">
                      <span className="metric-label">{st.label}</span>
                      <span className="metric-val">{st.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ambient backlight glow underneath */}
              <div className="device-perspective-glow" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
