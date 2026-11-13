import { useEffect, useRef } from 'react'

// Gentle one-time reveal. Content stays visible without JavaScript
// (the .js class that hides it is only added by a script in index.html).
// `host` = the wrapper itself stays still and only its `.stg` children rise in, one after another.
export default function Reveal({ as: Tag = 'div', className = '', host = false, children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`${host ? 'reveal-host' : 'reveal'} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
