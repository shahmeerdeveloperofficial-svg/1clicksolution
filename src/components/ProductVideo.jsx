import { useState, useEffect, useRef } from 'react'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import CinematicVideoPlayer, { videoScenes } from './CinematicVideoPlayer.jsx'
import { translations } from '../data/translations.js'

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

  // Auto-progress timer through the 7 scenes (total 45 seconds)
  useEffect(() => {
    if (!isOpen || !isPlaying) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false)
          return 100
        }
        const next = prev + 0.4
        const currentIdx = Math.min(videoScenes.length - 1, Math.floor(next / (100 / videoScenes.length)))
        setActiveScene(currentIdx)
        return next
      })
    }, 180)

    return () => clearInterval(interval)
  }, [isOpen, isPlaying])

  const jumpToScene = (idx) => {
    setActiveScene(idx)
    setProgress(idx * (100 / videoScenes.length))
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

  const current = videoScenes[activeScene]

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
            <span className="video-modal-pill">Cinematic 3D Product Presentation</span>
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
              <div className="video-stage-badge">
                Scene {current.id} of 7 • {current.highlight}
              </div>
              <h4>{current.title}</h4>
              <p>{current.subtitle}</p>
            </div>
          </div>

          {/* Interactive Scene Side Panel */}
          <div className="video-modal-details">
            <div className="video-scene-indicator">
              <span className="scene-time">{current.timeLabel}</span>
              <span className="scene-progress-text">
                {Math.round(progress)}% of Product Walkthrough
              </span>
            </div>

            <div className="video-scene-points">
              <h5>Verified CMS Feature:</h5>
              <ul>
                <li>
                  <Icon name="checkCircle" size={18} className="text-blue" />
                  <span>Real software interface from 1 Click Solution</span>
                </li>
                <li>
                  <Icon name="checkCircle" size={18} className="text-blue" />
                  <span>{current.highlight}</span>
                </li>
                <li>
                  <Icon name="checkCircle" size={18} className="text-blue" />
                  <span>Instant data sync with 4 connected mobile apps</span>
                </li>
                <li>
                  <Icon name="checkCircle" size={18} className="text-blue" />
                  <span>Zero redundant paperwork across school departments</span>
                </li>
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
            const idx = Math.min(videoScenes.length - 1, Math.floor(clickPos * videoScenes.length))
            setActiveScene(idx)
          }}>
            <div className="video-timeline-fill" style={{ width: `${progress}%` }} />
            {videoScenes.map((s, idx) => (
              <span
                key={s.id}
                className={`video-timeline-pip${activeScene === idx ? ' is-active' : ''}`}
                style={{ left: `${(idx / videoScenes.length) * 100}%` }}
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
              {videoScenes.map((sc, i) => (
                <button
                  key={sc.id}
                  type="button"
                  className={`scene-pill-btn${activeScene === i ? ' is-active' : ''}`}
                  onClick={() => jumpToScene(i)}
                >
                  {sc.tabName}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default function ProductVideo({ lang = 'en', onOpenModal, onSelectDemo }) {
  const t = translations[lang]?.video || translations.en.video

  return (
    <section className="section section--video" id="overview">
      <div className="container">
        <div className="video-showcase-grid">
          {/* Left Column: Playable 3D Cinematic Video Player Card */}
          <Reveal className="video-player-wrap">
            <CinematicVideoPlayer
              onExpandModal={onOpenModal}
              onSelectDemo={onSelectDemo}
            />
          </Reveal>

          {/* Right Column: Heading & 4 Key Verified Points */}
          <Reveal className="video-content-side">
            <span className="section-kicker">{t.kicker}</span>
            <h2>{t.title}</h2>
            <p className="video-lead">{t.desc}</p>

            <ul className="video-value-list">
              <li className="video-value-item">
                <span className="value-check-icon" aria-hidden="true">
                  <Icon name="check" size={16} />
                </span>
                <div className="value-text">
                  <strong>{t.val1Title}</strong>
                  <p>{t.val1Desc}</p>
                </div>
              </li>

              <li className="video-value-item">
                <span className="value-check-icon" aria-hidden="true">
                  <Icon name="check" size={16} />
                </span>
                <div className="value-text">
                  <strong>{t.val2Title}</strong>
                  <p>{t.val2Desc}</p>
                </div>
              </li>

              <li className="video-value-item">
                <span className="value-check-icon" aria-hidden="true">
                  <Icon name="check" size={16} />
                </span>
                <div className="value-text">
                  <strong>{t.val3Title}</strong>
                  <p>{t.val3Desc}</p>
                </div>
              </li>

              <li className="video-value-item">
                <span className="value-check-icon" aria-hidden="true">
                  <Icon name="check" size={16} />
                </span>
                <div className="value-text">
                  <strong>{t.val4Title}</strong>
                  <p>{t.val4Desc}</p>
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
                {t.btnWatch}
              </button>
              <a href="#demo" className="btn btn--secondary">
                {t.btnDemo}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
