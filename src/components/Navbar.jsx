import { useState, useEffect } from 'react'
import NavDropdown from './NavDropdown'
import { navLinks, profile } from '../data.jsx'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)   // mobile hamburger menu
  const [openDropdown, setOpenDropdown] = useState(null) // label of the open dropdown

  // Close dropdown on any outside click or Escape
  useEffect(() => {
    const close = () => setOpenDropdown(null)
    const onKey = (e) => e.key === 'Escape' && close()
    document.addEventListener('click', close)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', close)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const closeAll = () => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <header>
      <nav className="wrap">
        <div className="brand">
          <span className="mark">LPK</span>
          {profile.name}
          <span>{profile.surname}</span>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={(e) => {
            e.stopPropagation()
            setMenuOpen(!menuOpen)
          }}
        >
          <span></span><span></span><span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) =>
            link.children ? (
              <NavDropdown
                key={link.label}
                label={link.label}
                items={link.children}
                open={openDropdown === link.label}
                onToggle={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                onSelect={closeAll}
              />
            ) : (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={closeAll}>{link.label}</a>
              </li>
            )
          )}
        </ul>

        <a href="#contact" className="btn btn-solid contact-btn">Contact Us</a>
      </nav>
    </header>
  )
}
