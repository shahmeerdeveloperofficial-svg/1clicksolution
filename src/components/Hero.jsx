import { useEffect, useRef } from 'react'
import { heroImages } from '../data/site.js'
import { Icon } from './Icons.jsx'

export function DeviceMockup({ onOpenVideoModal }) {
  const wrap = useRef(null)

  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduce) return

    let raf = 0
    const set = (rx, ry) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
        el.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
      })
    }
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - (r.left + r.width / 2)) / window.innerWidth
      const y = (e.clientY - (r.top + r.height / 2)) / window.innerHeight
      set(-y * 8, x * 10)
    }
    const onLeave = () => set(0, 0)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={wrap}
      className="hero-devices-stage"
      role="img"
      aria-label="1 Click Solution CMS Dashboard on a 3D laptop with floating module panels and smartphone mobile app"
    >
      {/* Circular Glowing Neon Pedestal Floor Ring */}
      <div className="pedestal-floor" aria-hidden="true">
        <div className="pedestal-ring" />
        <div className="pedestal-glow" />
      </div>

      <div className="stage-3d-wrap">
        {/* Floating Modules — Left Stack */}
        <div className="floating-badge-group floating-left" aria-hidden="true">
          <div className="hero-module-pill pill-admissions">
            <span className="pill-icon-box">
              <Icon name="userPlus" size={17} />
            </span>
            <span className="pill-text">Admissions</span>
          </div>

          <div className="hero-module-pill pill-students">
            <span className="pill-icon-box">
              <Icon name="graduationCap" size={17} />
            </span>
            <span className="pill-text">Students</span>
          </div>

          <div className="hero-module-pill pill-attendance">
            <span className="pill-icon-box">
              <Icon name="calendarCheck" size={17} />
            </span>
            <span className="pill-text">Attendance</span>
          </div>

          <div className="hero-module-pill pill-fees">
            <span className="pill-icon-box">
              <Icon name="wallet" size={17} />
            </span>
            <span className="pill-text">Fees</span>
          </div>
        </div>

        {/* Floating Modules — Right Stack */}
        <div className="floating-badge-group floating-right" aria-hidden="true">
          <div className="hero-module-pill pill-staff">
            <span className="pill-icon-box">
              <Icon name="users" size={17} />
            </span>
            <span className="pill-text">Staff Management</span>
          </div>

          <div className="hero-module-pill pill-academics">
            <span className="pill-icon-box">
              <Icon name="bookOpen" size={17} />
            </span>
            <span className="pill-text">Academics</span>
          </div>

          <div className="hero-module-pill pill-examinations">
            <span className="pill-icon-box">
              <Icon name="fileText" size={17} />
            </span>
            <span className="pill-text">Examinations</span>
          </div>

          <div className="hero-module-pill pill-reports">
            <span className="pill-icon-box">
              <Icon name="barChart" size={17} />
            </span>
            <span className="pill-text">Reports</span>
          </div>
        </div>

        {/* 3D Laptop Mockup */}
        <div className="laptop-3d">
          <div className="laptop-screen-frame">
            <div className="laptop-camera-dot" aria-hidden="true" />
            <div className="laptop-screen-inner">
              <img
                src={heroImages.laptop}
                alt="1 Click Solution Main Administrative CMS Dashboard"
                width="1500"
                height="938"
                fetchPriority="high"
                decoding="async"
              />
              <span className="laptop-screen-sheen" aria-hidden="true" />
            </div>
          </div>
          <div className="laptop-keyboard-base" aria-hidden="true">
            <span className="laptop-notch-lip" />
          </div>
        </div>

        {/* 3D Smartphone Standing in Front */}
        <div className="phone-3d" aria-hidden="true">
          <div className="phone-shell">
            <span className="phone-dynamic-island" />
            <div className="phone-display">
              {/* Native App UI Launcher Preview */}
              <div className="phone-app-screen">
                <div className="phone-topbar">
                  <span className="phone-brand-title">1 Click Solution</span>
                  <span className="phone-sync-tag">Live Sync</span>
                </div>

                <div className="phone-app-grid">
                  <div className="phone-app-item app-parent">
                    <span className="app-icon-wrap">
                      <Icon name="shield" size={18} />
                    </span>
                    <span className="app-label">Parent App</span>
                  </div>

                  <div className="phone-app-item app-student">
                    <span className="app-icon-wrap">
                      <Icon name="graduationCap" size={18} />
                    </span>
                    <span className="app-label">Student App</span>
                  </div>

                  <div className="phone-app-item app-teacher">
                    <span className="app-icon-wrap">
                      <Icon name="bookOpen" size={18} />
                    </span>
                    <span className="app-label">Teacher App</span>
                  </div>

                  <div className="phone-app-item app-chairman">
                    <span className="app-icon-wrap">
                      <Icon name="crown" size={18} />
                    </span>
                    <span className="app-label">Chairman App</span>
                  </div>
                </div>

                <div className="phone-bottom-stat">
                  <span className="stat-bullet" />
                  <span>4 Connected Mobile Apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero({ onOpenVideoModal }) {
  return (
    <section className="hero hero--3d" id="top">
      {/* Ambient Lighting & Tech Grid Glows */}
      <div className="hero-dark-bg" aria-hidden="true">
        <span className="hero-glow hero-glow--blue" />
        <span className="hero-glow hero-glow--purple" />
        <span className="hero-glow hero-glow--cyan" />
        <span className="hero-grid-pattern" />
      </div>

      <div className="container hero-container">
        <div className="hero-grid-layout">
          {/* Left Column: Heading, Subtitle, CTAs & Trust Badges */}
          <div className="hero-text-side">
            <p className="hero-pill-badge">
              <span className="pulse-cyan-dot" aria-hidden="true" />
              School Management Software
            </p>

            <h1 className="hero-title">
              Your Entire School. <br />
              <span className="hero-gradient-highlight">One Smart Platform.</span>
            </h1>

            <p className="hero-description">
              From Admissions to Reports — Manage Students, Staff, Attendance, Fees, Academics
              and complete school operations with 1 Click Solution.
            </p>

            <div className="hero-cta-buttons">
              <a href="#demo" className="btn btn--primary btn--hero-primary">
                Request a Live Demo
                <Icon name="arrowRight" size={18} />
              </a>

              <button
                type="button"
                className="btn btn--hero-video"
                onClick={onOpenVideoModal}
              >
                <span className="hero-play-circle" aria-hidden="true">
                  <Icon name="play" size={16} />
                </span>
                Watch Product Overview
              </button>
            </div>

            {/* 3 Trust Badges Strip matching Reference Image */}
            <div className="hero-trust-strip">
              <div className="trust-badge-item">
                <span className="trust-icon-box">
                  <Icon name="layout" size={20} />
                </span>
                <div className="trust-text">
                  <span className="trust-bold">All-In-One</span>
                  <span className="trust-sub">School System</span>
                </div>
              </div>

              <div className="trust-badge-item">
                <span className="trust-icon-box">
                  <Icon name="layers" size={20} />
                </span>
                <div className="trust-text">
                  <span className="trust-bold">4 Mobile Apps</span>
                  <span className="trust-sub">Fully Connected</span>
                </div>
              </div>

              <div className="trust-badge-item">
                <span className="trust-icon-box">
                  <Icon name="shield" size={20} />
                </span>
                <div className="trust-text">
                  <span className="trust-bold">Trusted by</span>
                  <span className="trust-sub">Institutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Stage Visual */}
          <div className="hero-stage-side">
            <DeviceMockup onOpenVideoModal={onOpenVideoModal} />
          </div>
        </div>
      </div>
    </section>
  )
}
