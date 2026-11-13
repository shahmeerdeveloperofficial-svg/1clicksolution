import { useEffect, useRef } from 'react'
import { heroImages } from '../data/site.js'
import { Icon } from './Icons.jsx'

// 3D product stage: real CMS screens on a tilted laptop, with real dashboard panels
// floating in front. The stage follows the pointer a little (desktop only) and
// everything stays still for visitors who prefer reduced motion.
export function DeviceMockup() {
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
      const x = (e.clientX - (r.left + r.width / 2)) / window.innerWidth // about -0.5..0.5
      const y = (e.clientY - (r.top + r.height / 2)) / window.innerHeight
      set(-y * 12, x * 16)
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
      className="devices"
      role="img"
      aria-label="1 Click Solution dashboard on a laptop with real CMS panels and a smartphone floating in front"
    >
      <div className="stage">
        <div className="devices-backdrop" aria-hidden="true" />
        <div className="stage-shadow" aria-hidden="true" />

        <div className="laptop">
          <div className="laptop-lid">
            <span className="laptop-camera" aria-hidden="true" />
            <div className="laptop-screen">
              <img src={heroImages.laptop} alt="" width="1500" height="938" fetchPriority="high" decoding="async" />
              <span className="laptop-sheen" aria-hidden="true" />
            </div>
          </div>
          <div className="laptop-base" aria-hidden="true">
            <span className="laptop-notch" />
          </div>
        </div>

        <div className="float float--fees" aria-hidden="true">
          <img src={heroImages.panelFees} alt="" width="900" height="174" decoding="async" />
        </div>
        <div className="float float--attendance" aria-hidden="true">
          <img src={heroImages.panelAttendance} alt="" width="990" height="400" decoding="async" />
        </div>
        <div className="float float--admissions" aria-hidden="true">
          <img src={heroImages.panelAdmissions} alt="" width="495" height="400" decoding="async" />
        </div>

        <div className="phone">
          <div className="phone-body">
            <span className="phone-island" aria-hidden="true" />
            <div className="phone-screen">
              <img src={heroImages.phone} alt="" width="590" height="1263" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-orb hero-orb--a" />
        <span className="hero-orb hero-orb--b" />
        <span className="hero-dots" />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">
            <span className="pulse-dot" aria-hidden="true" />
            School &amp; Academy Management Software
          </p>
          <h1>
            Everything Your School Needs. <span className="grad-text">One Click Away.</span>
          </h1>
          <p className="hero-lead">
            Manage admissions, students, staff, attendance, fees, and academic operations through one connected
            education management platform.
          </p>
          <div className="hero-actions">
            <a href="#demo" className="btn btn--primary btn--lg">
              Request a Demo
            </a>
            <a href="#modules" className="btn btn--secondary btn--lg">
              Explore Modules
              <Icon name="arrowRight" size={18} />
            </a>
          </div>
          <ul className="hero-points">
            <li>
              <Icon name="check" size={16} /> Connected modules
            </li>
            <li>
              <Icon name="check" size={16} /> Multi-campus ready
            </li>
            <li>
              <Icon name="check" size={16} /> Excel, CSV and PDF export
            </li>
          </ul>
        </div>

        <div className="hero-visual">
          <DeviceMockup />
        </div>
      </div>
    </section>
  )
}
