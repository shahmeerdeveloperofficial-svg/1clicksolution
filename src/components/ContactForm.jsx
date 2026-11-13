import { useState } from 'react'
import { site } from '../data/site.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

// Real submission: POSTs JSON to VITE_FORM_ENDPOINT (see .env.example).
// Until that variable is set the form says honestly that nothing was sent.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

const empty = { name: '', institution: '', email: '', phone: '', message: '', website: '' }

export default function ContactForm() {
  const [values, setValues] = useState(empty)
  const [status, setStatus] = useState({ state: 'idle', text: '' })

  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  async function onSubmit(e) {
    e.preventDefault()
    if (values.website) return // honeypot: bots fill this hidden field

    if (!ENDPOINT) {
      setStatus({
        state: 'error',
        text: `This form is not connected to an inbox yet, so your message was not sent. Please email us at ${site.contact.email}.`,
      })
      return
    }

    setStatus({ state: 'sending', text: 'Sending your message…' })
    try {
      const { website, ...payload } = values
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      setValues(empty)
      setStatus({ state: 'success', text: 'Thank you. We have received your message and will get back to you soon.' })
    } catch {
      setStatus({
        state: 'error',
        text: `Your message could not be sent. Please try again or email us at ${site.contact.email}.`,
      })
    }
  }

  return (
    <section className="section section--tint" id="contact">
      <div className="container contact-grid">
        <Reveal className="contact-info">
          <h2>Talk to our team</h2>
          <p>Tell us about your institution and we will reply with the next steps for a demo or a custom quote.</p>
          <ul className="contact-list">
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <span>{site.contact.phone}</span>
            </li>
            <li>
              <Icon name="pin" size={18} />
              <span>{site.contact.address}</span>
            </li>
          </ul>
        </Reveal>

        <Reveal className="contact-card">
          <form onSubmit={onSubmit} noValidate={false} aria-describedby="form-status">
            <div className="field-row">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" autoComplete="name" required value={values.name} onChange={update} />
              </div>
              <div className="field">
                <label htmlFor="institution">Institution name</label>
                <input id="institution" name="institution" type="text" autoComplete="organization" required value={values.institution} onChange={update} />
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" autoComplete="email" required value={values.email} onChange={update} />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" required value={values.phone} onChange={update} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Tell us about your institution, the number of campuses and students, and what you would like to see."
                value={values.message}
                onChange={update}
              />
            </div>

            {/* Honeypot field, hidden from people */}
            <div className="hp" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} />
            </div>

            <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={status.state === 'sending'}>
              {status.state === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            <p id="form-status" className={`form-status form-status--${status.state}`} role="status" aria-live="polite">
              {status.text}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
