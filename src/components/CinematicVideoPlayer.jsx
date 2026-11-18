import { useState, useEffect, useRef } from 'react'
import { Icon } from './Icons.jsx'
import realFeeRevise from '../assets/screens/real-fee-revise.jpg'
import realCmsFull from '../assets/screens/real-cms-full.jpg'
import gDashboard from '../assets/screens/g-dashboard.webp'
import gAttendance from '../assets/screens/g-attendance.webp'
import gReports from '../assets/screens/g-reports.webp'

// 7 Scenes as specified by user requirements
export const videoScenes = [
  {
    id: 1,
    start: 0,
    end: 6,
    timeLabel: '0:00 - 0:06',
    tabName: '1. Dashboard Intro',
    title: 'Your Entire School. One Smart Platform.',
    subtitle: 'Welcome to 1 Click Solution — The unified administrative school ERP.',
    image: realCmsFull,
    cameraAngle: 'perspective-intro',
    showCursor: false,
    cursorTarget: null,
    highlight: 'Real-time School KPI Dashboard',
  },
  {
    id: 2,
    start: 6,
    end: 12,
    timeLabel: '0:06 - 0:12',
    tabName: '2. Sidebar Navigation',
    title: 'Intuitive Navigation & Instant Access',
    subtitle: 'Streamlined sidebar connecting Admissions, Staff, Attendance, and Accounts.',
    image: realCmsFull,
    cameraAngle: 'zoom-sidebar',
    showCursor: true,
    cursorX: '12%',
    cursorY: '38%',
    clickAction: 'Attendance Management',
    highlight: 'One-click Department Switcher',
  },
  {
    id: 3,
    start: 12,
    end: 19,
    timeLabel: '0:12 - 0:19',
    tabName: '3. Attendance',
    title: 'Manage Attendance with Ease.',
    subtitle: 'One-tap daily student and staff attendance with automated SMS alerts to parents.',
    image: gAttendance,
    cameraAngle: 'zoom-attendance',
    showCursor: true,
    cursorX: '48%',
    cursorY: '34%',
    clickAction: 'Mark Present & Notify',
    highlight: 'Automated Absentee Parent SMS',
  },
  {
    id: 4,
    start: 19,
    end: 28,
    timeLabel: '0:19 - 0:28',
    tabName: '4. Fee Management',
    title: 'Simplify Fee Collection & Records.',
    subtitle: 'Live Fee Revise module at http://127.0.0.1:8001/admin/account/studentfee with dynamic criteria.',
    image: realFeeRevise,
    cameraAngle: 'zoom-fees',
    showCursor: true,
    cursorX: '32%',
    cursorY: '52%',
    clickAction: 'Select Main Campus & Revise',
    highlight: 'Multi-campus Vouchers & Ledgers',
  },
  {
    id: 5,
    start: 28,
    end: 35,
    timeLabel: '0:28 - 0:35',
    tabName: '5. Reports & Analytics',
    title: 'Turn School Data into Useful Insights.',
    subtitle: 'Export institutional balance sheets, student transcripts, and fee recovery audits.',
    image: gReports,
    cameraAngle: 'zoom-reports',
    showCursor: false,
    cursorTarget: null,
    highlight: 'Excel, PDF & Printable Transcripts',
  },
  {
    id: 6,
    start: 35,
    end: 41,
    timeLabel: '0:35 - 0:41',
    tabName: '6. Connected Mobile Apps',
    title: 'One Connected Platform for Your Institution.',
    subtitle: 'Central CMS seamlessly synchronized with Parent, Student, Teacher, and Chairman Apps.',
    image: gDashboard,
    cameraAngle: 'mobile-ecosystem',
    showCursor: false,
    cursorTarget: null,
    highlight: '4 Dedicated Real-time Mobile Apps',
  },
  {
    id: 7,
    start: 41,
    end: 45,
    timeLabel: '0:41 - 0:45',
    tabName: '7. Final Branding & CTA',
    title: '1 Click Solution — Complete School Management.',
    subtitle: 'Request a live demonstration tailored to your school or academy.',
    image: realCmsFull,
    cameraAngle: 'branding-outro',
    showCursor: false,
    cursorTarget: null,
    highlight: 'Empower Your School Today',
  },
]

export default function CinematicVideoPlayer({ onExpandModal, onSelectDemo }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0) // 0 to 45
  const [isMuted, setIsMuted] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const playerRef = useRef(null)

  const TOTAL_DURATION = 45 // 45 seconds

  // Active scene based on currentTime
  const currentSceneIdx = videoScenes.findIndex(
    (s) => currentTime >= s.start && currentTime < s.end
  )
  const activeScene = currentSceneIdx !== -1 ? videoScenes[currentSceneIdx] : videoScenes[videoScenes.length - 1]

  // Playback timer
  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= TOTAL_DURATION) {
          setIsPlaying(false)
          return TOTAL_DURATION
        }
        return Math.min(TOTAL_DURATION, prev + 0.1)
      })
    }, 100)

    return () => clearInterval(timer)
  }, [isPlaying])

  const togglePlay = (e) => {
    if (e) e.stopPropagation()
    if (!hasStarted) setHasStarted(true)
    if (currentTime >= TOTAL_DURATION) {
      setCurrentTime(0)
      setIsPlaying(true)
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  const handleSeek = (e) => {
    e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    setCurrentTime(clickX * TOTAL_DURATION)
    if (!hasStarted) setHasStarted(true)
    setIsPlaying(true)
  }

  const jumpToScene = (scene, e) => {
    if (e) e.stopPropagation()
    setCurrentTime(scene.start)
    if (!hasStarted) setHasStarted(true)
    setIsPlaying(true)
  }

  const progressPercent = (currentTime / TOTAL_DURATION) * 100

  return (
    <div
      ref={playerRef}
      className={`cinematic-player-container${isPlaying ? ' is-playing' : ''}${hasStarted ? ' has-started' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 16:9 Screen Display */}
      <div
        className="cinematic-screen-stage"
        onClick={togglePlay}
        role="region"
        aria-label="3D Cinematic Product Video Player"
      >
        {/* Initial Video Poster when not started */}
        {!hasStarted && (
          <div className="player-poster-view">
            <img
              src={realCmsFull}
              alt="1 Click Solution 3D Software Dashboard Preview"
              className="poster-bg-img"
            />
            <div className="poster-overlay-scrim" />

            <div className="poster-center-play">
              <span className="poster-pulsing-wave" aria-hidden="true" />
              <button
                type="button"
                className="poster-play-btn"
                onClick={togglePlay}
                aria-label="Start 3D Cinematic Product Walkthrough"
              >
                <Icon name="play" size={28} />
              </button>
            </div>

            <div className="poster-top-pill">
              <span className="poster-rec-dot" />
              <span>3D Product Walkthrough • 45s</span>
            </div>

            <div className="poster-bottom-caption">
              <span className="poster-tag">Real CMS Workflow</span>
              <h3>See 1 Click Solution in Action (45s Video)</h3>
              <p>Watch Attendance marking, Fee Revise, and Mobile App synchronization.</p>
            </div>

            <span className="poster-duration-pill">0:45</span>
          </div>
        )}

        {/* Live 3D Cinematic Scene Animation Stage */}
        {hasStarted && (
          <div className={`scene-viewport camera-${activeScene.cameraAngle}`}>
            {/* Background ambient lighting */}
            <div className="scene-ambient-lighting" aria-hidden="true">
              <span className="scene-light-beam light-cyan" />
              <span className="scene-light-beam light-purple" />
            </div>

            {/* 3D Device & Screen Presentation */}
            <div className="scene-3d-stage">
              {/* Laptop frame */}
              <div className="cinematic-laptop-chassis">
                <div className="cinematic-laptop-lid">
                  <div className="cinematic-screen-bezel">
                    {/* Live Screen Image based on active scene */}
                    <img
                      key={activeScene.id}
                      src={activeScene.image}
                      alt={activeScene.title}
                      className="cinematic-active-screen"
                    />

                    {/* Animated Mouse Cursor navigating real CMS */}
                    {activeScene.showCursor && (
                      <div
                        className="animated-screen-cursor"
                        style={{
                          left: activeScene.cursorX,
                          top: activeScene.cursorY,
                        }}
                      >
                        <div className="cursor-pointer-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#38bdf8" stroke="#000" strokeWidth="1.5">
                            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                          </svg>
                        </div>
                        <div className="cursor-click-ripple" />
                        <span className="cursor-action-bubble">{activeScene.clickAction}</span>
                      </div>
                    )}

                    {/* Dynamic Text Overlay in Scene */}
                    <div className="scene-text-overlay">
                      <div className="scene-badge-pill">
                        Scene {activeScene.id} of 7 • {activeScene.highlight}
                      </div>
                      <h4 className="scene-main-heading">{activeScene.title}</h4>
                      <p className="scene-sub-heading">{activeScene.subtitle}</p>
                    </div>

                    {/* Final Scene 7 CTA Button */}
                    {activeScene.id === 7 && (
                      <div className="scene-final-cta-wrap">
                        <a
                          href="#demo"
                          className="btn btn--primary btn--lg"
                          onClick={(e) => {
                            e.stopPropagation()
                            if (onSelectDemo) onSelectDemo()
                          }}
                        >
                          Request a Live Demo
                          <Icon name="arrowRight" size={18} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="cinematic-laptop-base" />
              </div>

              {/* Side Floating Mobile Preview in Scene 6 */}
              {activeScene.id === 6 && (
                <div className="scene-floating-phone">
                  <div className="mini-phone-body">
                    <span className="mini-phone-notch" />
                    <div className="mini-phone-screen">
                      <span className="mini-sync-pulse" />
                      <div className="mini-app-name">Parent &amp; Teacher Apps</div>
                      <div className="mini-app-stat">Attendance Synced • 100%</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Video Player Floating Header */}
        {hasStarted && (
          <div className="player-top-bar" onClick={(e) => e.stopPropagation()}>
            <div className="player-info-tag">
              <span className="rec-live-dot" />
              <strong>1 Click Solution</strong>
              <span className="player-scene-tag">{activeScene.tabName}</span>
            </div>
            <div className="player-badges">
              <span className="badge-quality">1080p Full HD</span>
              <button
                type="button"
                className="btn-expand-theater"
                onClick={(e) => {
                  e.stopPropagation()
                  if (onExpandModal) onExpandModal()
                }}
                title="Expand to Fullscreen Presentation"
              >
                <Icon name="maximize" size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Play/Pause Click Overlay Indicator */}
        {hasStarted && !isPlaying && (
          <div className="player-paused-scrim">
            <button
              type="button"
              className="paused-play-icon"
              onClick={togglePlay}
              aria-label="Resume Video Walkthrough"
            >
              <Icon name="play" size={32} />
            </button>
          </div>
        )}

        {/* Bottom Control Bar */}
        {hasStarted && (
          <div className="player-controls-bottom" onClick={(e) => e.stopPropagation()}>
            {/* Timeline Scrubber */}
            <div className="scrubber-track" onClick={handleSeek}>
              <div className="scrubber-fill" style={{ width: `${progressPercent}%` }} />
              {videoScenes.map((s) => (
                <span
                  key={s.id}
                  className={`scrubber-pip${activeScene.id === s.id ? ' is-active' : ''}`}
                  style={{ left: `${(s.start / TOTAL_DURATION) * 100}%` }}
                  title={`${s.tabName} (${s.timeLabel})`}
                />
              ))}
            </div>

            {/* Controls Row */}
            <div className="controls-button-row">
              <div className="controls-left">
                <button
                  type="button"
                  className="ctrl-action-btn"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  <Icon name={isPlaying ? 'pause' : 'play'} size={18} />
                </button>

                <button
                  type="button"
                  className="ctrl-action-btn"
                  onClick={() => setIsMuted(!isMuted)}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  <Icon name={isMuted ? 'volumeX' : 'volume2'} size={18} />
                </button>

                {/* Animated Equalizer Wave */}
                {!isMuted && isPlaying && (
                  <span className="audio-equalizer" aria-hidden="true">
                    <span className="eq-bar bar-1" />
                    <span className="eq-bar bar-2" />
                    <span className="eq-bar bar-3" />
                  </span>
                )}

                <span className="timestamp-counter">
                  0:{String(Math.floor(currentTime)).padStart(2, '0')} / 0:45
                </span>
              </div>

              {/* Right side controls */}
              <div className="controls-right">
                <button
                  type="button"
                  className="ctrl-replay-btn"
                  onClick={() => {
                    setCurrentTime(0)
                    setIsPlaying(true)
                  }}
                  title="Replay from start"
                >
                  Restart
                </button>

                <button
                  type="button"
                  className="ctrl-theater-btn"
                  onClick={() => {
                    if (onExpandModal) onExpandModal()
                  }}
                  title="Full Presentation Modal"
                >
                  <Icon name="maximize" size={16} />
                  <span>Theater</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 7 Scene Navigation Pills underneath Player */}
      <div className="video-scenes-nav" role="tablist" aria-label="Walkthrough Scene Navigation">
        {videoScenes.map((scene) => (
          <button
            key={scene.id}
            type="button"
            role="tab"
            aria-selected={activeScene.id === scene.id}
            className={`scene-nav-chip${activeScene.id === scene.id ? ' is-active' : ''}`}
            onClick={(e) => jumpToScene(scene, e)}
          >
            <span className="chip-num">{scene.id}</span>
            <span className="chip-label">{scene.tabName.split('. ')[1]}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
