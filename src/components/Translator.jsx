import { useState, useEffect, useRef } from 'react'
import { Icon } from './Icons.jsx'

export default function Translator({ currentLang = 'en', onLangChange }) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'en', label: 'English', native: 'English', flag: '🇬🇧' },
    { code: 'ur', label: 'Urdu', native: 'اردو', flag: '🇵🇰' },
    { code: 'ar', label: 'Arabic', native: 'العربية', flag: '🇸🇦' },
  ]

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', handleOutside)
    return () => document.removeEventListener('pointerdown', handleOutside)
  }, [])

  // Initialize Google Translate if user requests more languages
  const initGoogleTranslate = () => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,ur,ar,hi,es,fr,de,zh-CN,tr,ru,id',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        )
      }
      const script = document.createElement('script')
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.body.appendChild(script)
    }
    setOpen(false)
  }

  const active = languages.find((l) => l.code === currentLang) || languages[0]

  return (
    <div className="translator-wrapper" ref={dropdownRef}>
      <button
        type="button"
        className="translator-btn"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select website language"
        title="Change Language"
      >
        <span className="translator-icon" aria-hidden="true">
          🌐
        </span>
        <span className="translator-current-label">{active.native}</span>
        <Icon name="chevronDown" size={14} className={`translator-caret${open ? ' is-flipped' : ''}`} />
      </button>

      {open && (
        <div className="translator-dropdown" role="listbox">
          <div className="translator-dropdown-header">Select Language / زبان منتخب کریں</div>
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              role="option"
              aria-selected={currentLang === l.code}
              className={`translator-item${currentLang === l.code ? ' is-active' : ''}`}
              onClick={() => {
                if (onLangChange) onLangChange(l.code)
                setOpen(false)
              }}
            >
              <span className="lang-flag">{l.flag}</span>
              <span className="lang-native">{l.native}</span>
              <span className="lang-name">({l.label})</span>
              {currentLang === l.code && <Icon name="check" size={16} className="lang-check" />}
            </button>
          ))}

          <div className="translator-divider" />
          <button
            type="button"
            className="translator-item translator-more-btn"
            onClick={initGoogleTranslate}
          >
            <span>✨ More Languages (100+)</span>
          </button>
        </div>
      )}

      {/* Hidden container for Google Translate element */}
      <div id="google_translate_element" style={{ display: 'none' }} />
    </div>
  )
}
