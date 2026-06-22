import { useState } from 'react'
import { FiMenu, FiPhone, FiX } from 'react-icons/fi'
import { navItems, studio } from '../data/siteContent'

const Header = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="logo" href="#top" onClick={closeMenu}>
          <span>{studio.name}</span>
          <small>{studio.label}</small>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="phone-link" href={`tel:${studio.phoneHref}`}>
            <FiPhone aria-hidden="true" />
            {studio.phone}
          </a>
          <a className="gold-button small" href="#appointment">
            Book Now
          </a>
        </div>

        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)}>
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {open ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="gold-button" href="#appointment" onClick={closeMenu}>
            Book Appointment
          </a>
        </nav>
      ) : null}
    </header>
  )
}

export default Header
