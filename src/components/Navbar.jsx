import { useEffect, useRef, useState } from 'react'
import { nav } from '../data/site.js'
import { Icon, Logo } from './Icons.jsx'
import Translator from './Translator.jsx'
import { translations } from '../data/translations.js'

export default function Navbar({ lang = 'en', onLangChange }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const bar = useRef(null)

  const t = translations[lang]?.nav || translations.en.nav

  const navLabels = {
    '#solution': t.modules,
    '#workflow': t.howItWorks,
    '#mobile-apps': t.mobileApps,
    '#screenshots': t.screenshots,
    '#pricing': t.pricing,
    '#contact': t.contact,
  }

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        const p = max > 0 ? Math.min(1, window.scrollY / max) : 0
        if (bar.current) bar.current.style.transform = `scaleX(${p})`
        setScrolled(window.scrollY > 8)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#top" className="navbar-brand" aria-label="1 Click Solution home">
          <Logo light />
        </a>

        <nav aria-label="Primary" className={`navbar-links${open ? ' is-open' : ''}`} id="primary-nav">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {navLabels[item.href] || item.label}
            </a>
          ))}
          <a href="#demo" className="btn btn--primary btn--sm navbar-cta-mobile" onClick={() => setOpen(false)}>
            {t.requestDemo}
          </a>
        </nav>

        <div className="navbar-actions">
          {/* Multi-language Translator Switcher */}
          <Translator currentLang={lang} onLangChange={onLangChange} />

          <a href="#demo" className="btn btn--primary btn--sm navbar-cta">
            {t.requestDemo}
          </a>
        </div>

        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>
      <span className="scroll-progress" ref={bar} aria-hidden="true" />
    </header>
  )
}
