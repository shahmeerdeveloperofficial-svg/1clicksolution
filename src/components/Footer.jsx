import { nav, site } from '../data/site.js'
import { Logo } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>{site.tagline}</p>
          <p className="footer-sub">School and academy management software for admissions, students, staff, attendance, fees, and academics.</p>
        </div>

        <nav aria-label="Footer" className="footer-col">
          <h4>Explore</h4>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href="#demo">Request a Demo</a>
            </li>
          </ul>
        </nav>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li>{site.contact.phone}</li>
            <li>{site.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span suppressHydrationWarning>© {new Date().getFullYear()} 1 Click Solution. All rights reserved.</span>
      </div>
    </footer>
  )
}
