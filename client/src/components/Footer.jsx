import { FiPhone } from 'react-icons/fi'
import { navItems, services, studio } from '../data/siteContent'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="logo footer-logo" href="#top">
            <span>{studio.name}</span>
            <small>{studio.label}</small>
          </a>
          <p>Premium tattoo artistry in India. Custom designs, certified hygiene, artists who care.</p>
          <a className="footer-phone" href={`tel:${studio.phoneHref}`}>
            <FiPhone aria-hidden="true" />
            {studio.phone}
          </a>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            {services.slice(0, 6).map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Studio Hours</h4>
          <div className="hours-row">
            <span>Monday - Saturday</span>
            <strong>11:00 AM - 8:00 PM</strong>
          </div>
          <div className="hours-row">
            <span>Sunday</span>
            <strong className="closed">Closed</strong>
          </div>
          <h4 className="follow-title">Follow</h4>
          <div className="socials">
            <a href="#instagram">I</a>
            <a href="#instagram">F</a>
            <a href="#instagram">Y</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Nayak Tattoo Studio. All rights reserved.</p>
        <p>Crafted with precision · Inked with passion</p>
      </div>
    </footer>
  )
}

export default Footer
