import { useState, useEffect, useRef } from 'react'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import videoCampus from '../assets/screens/video-campus.jpg'
import gDashboard from '../assets/screens/g-dashboard.webp'
import gAttendance from '../assets/screens/g-attendance.webp'
import gFees from '../assets/screens/g-fees.webp'
import gEnrollment from '../assets/screens/g-enrollment.webp'
import gReports from '../assets/screens/g-reports.webp'

// 6 Cinematic Storyboard Scenes for the interactive software demonstration
const scenes = [
  {
    id: 1,
    time: '0:00 - 0:08',
    title: 'The School Management Challenge',
    subtitle: 'Separate systems, paperwork, and communication gaps between staff, students, and parents.',
    points: [
      'Disorganized student records across multiple spreadsheets',
      'Manual daily attendance taking up valuable teaching time',
      'Delayed fee follow-ups and manual voucher bookkeeping',
      'Parents left uninformed about daily academic progress',
    ],
    image: gEnrollment,
    accent: '#ef4444',
    badge: 'The Problem',
  },
  {
    id: 2,
    time: '0:08 - 0:16',
    title: '1 Click Solution: Connected Cloud Platform',
    subtitle: 'One central hub connecting administration, teachers, accountants, students, and parents.',
    points: [
      'Single synchronized database across your entire institution',
      'Cloud-accessible anywhere on desktop, tablet, and mobile',
      'Multi-branch and multi-campus support out of the box',
      'Zero redundant data entry between school departments',
    ],
    image: gDashboard,
    accent: '#3b82f6',
    badge: 'The Platform',
  },
  {
    id: 3,
    time: '0:16 - 0:24',
    title: 'Live Administrative CMS Dashboard',
    subtitle: 'Real-time visibility into students, daily attendance, fee collections, and institution health.',
    points: [
      '1,248 Active Students & 86 Staff members tracked in real time',
      '94% Today’s Attendance status updated with one click',
      'Rs. 245,000 Pending fee collections with visual trajectory',
      'Instant admissions overview and class capacity metrics',
    ],
    image: gDashboard,
    accent: '#8b5cf6',
    badge: 'Live Overview',
  },
  {
    id: 4,
    time: '0:24 - 0:32',
    title: 'Connected Operations in Action',
    subtitle: 'From admission inquiry to fee collection and examinations in one unified flow.',
    points: [
      'Admissions automatically create student profiles & roll numbers',
      'Daily attendance triggers instant mobile & SMS notifications',
      'Fee vouchers generated with automated partial payment ledgers',
      'Examinations compile directly into institutional report cards',
    ],
    image: gFees,
    accent: '#10b981',
    badge: 'Core Modules',
  },
  {
    id: 5,
    time: '0:32 - 0:40',
    title: '4 Dedicated Mobile Applications Suite',
    subtitle: 'Real-time mobile access for Parents, Teachers, Students, and School Leadership.',
    points: [
      'Parent App: Live homework, fee vouchers, and attendance alerts',
      'Teacher App: One-tap class attendance and assignment marks',
      'Student App: Class timetables, syllabus, and exam schedules',
      'Chairman App: High-level financial summaries & institutional KPIs',
    ],
    image: gAttendance,
    accent: '#06b6d4',
    badge: 'Mobile Ecosystem',
  },
  {
    id: 6,
    time: '0:40 - 0:45',
    title: 'Transform Your School Management Today',
    subtitle: 'Request a customized live demo or start streamlining your institution with 1 Click Solution.',
    points: [
      'Dedicated migration & onboarding support for your school records',
      'Complete staff training for teachers, accountants, and leadership',
      'Customized module setup tailored to your institution’s policies',
      'Proven and trusted by schools, colleges, and academies',
    ],
    image: gReports,
    accent: '#f59e0b',
    badge: 'Get Started',
  },
]

export function ProductVideoModal({ isOpen, onClose, onSelectDemo }) {
  const [activeScene, setActiveScene] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const dialogRef = useRef(null)

  useEffect(() => {
    const dlg = dialogRef.current
    if (!dlg) return
    if (isOpen && !dlg.open) {
      dlg.showModal()
      setActiveScene(0)
      setProgress(0)
      setIsPlaying(true)
    } else if (!isOpen && dlg.open) {
      dlg.close()
    }
  }, [isOpen])

  // Auto-progress timer through the 6 scenes (total 45 seconds)
  useEffect(() => {
    if (!isOpen || !isPlaying) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false)
          return 100
        }
        const next = prev + 0.4
        // 6 scenes across 100%: ~16.6% per scene
        const currentIdx = Math.min(scenes.length - 1, Math.floor(next / (100 / scenes.length)))
        setActiveScene(currentIdx)
        return next
      })
    }, 180) // 100 / 0.4 * 180ms = 45,000ms = 45s

    return () => clearInterval(interval)
  }, [isOpen, isPlaying])

  const jumpToScene = (idx) => {
    setActiveScene(idx)
    setProgress(idx * (100 / scenes.length))
    setIsPlaying(true)
  }

  const togglePlay = () => {
    if (progress >= 100) {
      setProgress(0)
      setActiveScene(0)
      setIsPlaying(true)
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  if (!isOpen) return null

  const current = scenes[activeScene]

  return (
    <dialog
      ref={dialogRef}
      className="video-modal-dialog"
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      aria-labelledby="video-modal-title"
    >
      <div className="video-modal-content">
        {/* Header bar */}
        <div className="video-modal-header">
          <div className="video-modal-title-group">
            <span className="video-modal-pill">Cinematic Product Presentation</span>
            <h3 id="video-modal-title">See How One Click Connects Your Entire School</h3>
          </div>
          <button
            type="button"
            className="video-modal-close"
            onClick={onClose}
            aria-label="Close presentation"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        {/* Video Stage Display */}
        <div className="video-modal-stage">
          <div className="video-stage-screen">
            <img
              src={current.image}
              alt={current.title}
              className="video-stage-img"
            />
            <div className="video-stage-overlay">
              <div className="video-stage-badge" style={{ backgroundColor: current.accent }}>
                {current.badge} • Scene {current.id} of 6
              </div>
              <h4>{current.title}</h4>
              <p>{current.subtitle}</p>
            </div>
          </div>

          {/* Interactive Scene Side Panel */}
          <div className="video-modal-details">
            <div className="video-scene-indicator">
              <span className="scene-time">{current.time}</span>
              <span className="scene-progress-text">
                {Math.round(progress)}% of Product Overview
              </span>
            </div>

            <div className="video-scene-points">
              <h5>Verified Product Capabilities:</h5>
              <ul>
                {current.points.map((pt, i) => (
                  <li key={i}>
                    <Icon name="checkCircle" size={18} className="text-blue" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="video-modal-cta">
              <a
                href="#demo"
                className="btn btn--primary btn--sm"
                onClick={() => {
                  onClose()
                  if (onSelectDemo) onSelectDemo()
                }}
              >
                Request a Live Demo
                <Icon name="arrowRight" size={16} />
              </a>
              <a
                href="#mobile-apps"
                className="btn btn--secondary btn--sm"
                onClick={onClose}
              >
                Explore 4 Mobile Apps
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Controls & Timeline */}
        <div className="video-modal-controls">
          <div className="video-timeline-bar" onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const clickPos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
            setProgress(clickPos * 100)
            const idx = Math.min(scenes.length - 1, Math.floor(clickPos * scenes.length))
            setActiveScene(idx)
          }}>
            <div className="video-timeline-fill" style={{ width: `${progress}%` }} />
            {scenes.map((s, idx) => (
              <span
                key={s.id}
                className={`video-timeline-pip${activeScene === idx ? ' is-active' : ''}`}
                style={{ left: `${(idx / scenes.length) * 100}%` }}
                title={s.title}
              />
            ))}
          </div>

          <div className="video-controls-row">
            <div className="video-playback-buttons">
              <button
                type="button"
                className="ctrl-btn play-btn"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                <Icon name={isPlaying ? 'pause' : 'play'} size={18} />
              </button>

              <button
                type="button"
                className="ctrl-btn mute-btn"
                onClick={() => setIsMuted(!isMuted)}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                <Icon name={isMuted ? 'volumeX' : 'volume2'} size={18} />
              </button>

              <span className="ctrl-timestamp">
                0:{String(Math.floor((progress / 100) * 45)).padStart(2, '0')} / 0:45
              </span>
            </div>

            {/* Quick Scene Selector Tabs */}
            <div className="video-scene-pills">
              {scenes.map((sc, i) => (
                <button
                  key={sc.id}
                  type="button"
                  className={`scene-pill-btn${activeScene === i ? ' is-active' : ''}`}
                  onClick={() => jumpToScene(i)}
                >
                  {i + 1}. {sc.badge}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default function ProductVideo({ onOpenModal }) {
  return (
    <section className="section section--video" id="overview">
      <div className="container">
        <div className="video-showcase-grid">
          {/* Left Column: 16:9 Video Player Card */}
          <Reveal className="video-player-wrap">
            <div
              className="video-player-card"
              role="button"
              tabIndex={0}
              onClick={onOpenModal}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenModal()}
              aria-label="Play 1 Click Solution Product Overview Video (0:45 duration)"
            >
              <img
                src={videoCampus}
                alt="1 Click Solution School Campus Facility"
                className="video-poster-img"
                loading="lazy"
                decoding="async"
              />
              <div className="video-poster-scrim" />

              {/* Title overlay at bottom left */}
              <div className="video-card-title-overlay">
                <span className="video-brand-tag">
                  <span className="video-brand-dot" />
                  1 Click Solution
                </span>
                <h3>See How 1 Click Solution Manages Your Entire School</h3>
              </div>

              {/* Center Play Button with pulsing wave */}
              <div className="video-play-btn-halo">
                <span className="play-pulse-ring" aria-hidden="true" />
                <button
                  type="button"
                  className="video-play-btn"
                  aria-label="Play presentation video"
                >
                  <Icon name="play" size={24} />
                </button>
              </div>

              {/* Duration badge */}
              <span className="video-duration-badge" aria-label="Duration 45 seconds">
                0:45
              </span>
            </div>
          </Reveal>

          {/* Right Column: Heading & 4 Key Verified Points */}
          <Reveal className="video-content-side">
            <span className="section-kicker">Product Overview</span>
            <h2>See How One Click Connects Your Entire School</h2>
            <p className="video-lead">
              Watch a short video and discover how 1 Click Solution brings all your school operations
              together in one powerful system.
            </p>

            <ul className="video-value-list">
              <li className="video-value-item">
                <span className="value-check-icon" aria-hidden="true">
                  <Icon name="check" size={16} />
                </span>
                <div className="value-text">
                  <strong>Centralized School Management</strong>
                  <p>Unify admissions, fees, attendance, and academics into one synchronized database.</p>
                </div>
              </li>

              <li className="video-value-item">
                <span className="value-check-icon" aria-hidden="true">
                  <Icon name="check" size={16} />
                </span>
                <div className="value-text">
                  <strong>Real-time Information</strong>
                  <p>Instant daily attendance tracking, fee collection trajectory, and student status updates.</p>
                </div>
              </li>

              <li className="video-value-item">
                <span className="value-check-icon" aria-hidden="true">
                  <Icon name="check" size={16} />
                </span>
                <div className="value-text">
                  <strong>Connected Mobile Apps</strong>
                  <p>Dedicated real-time apps for Parents, Teachers, Students, and School Chairmen.</p>
                </div>
              </li>

              <li className="video-value-item">
                <span className="value-check-icon" aria-hidden="true">
                  <Icon name="check" size={16} />
                </span>
                <div className="value-text">
                  <strong>Reports &amp; Insights</strong>
                  <p>Export comprehensive student records, fee collection balances, and institutional audits.</p>
                </div>
              </li>
            </ul>

            <div className="video-actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={onOpenModal}
              >
                <Icon name="play" size={18} />
                Watch 45s Product Overview
              </button>
              <a href="#demo" className="btn btn--secondary">
                Request a Live Demo
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
