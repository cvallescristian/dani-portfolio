import { useState } from 'react'
import { NavLink } from 'react-router'
import './Header.css'

const links = [
  { to: '/', label: 'Projects' },
  { to: '/about', label: 'About me' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <button
          type="button"
          className={`header__toggle ${isOpen ? 'is-open' : ''}`}
          aria-expanded={isOpen}
          aria-controls="site-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav id="site-nav" className={`header__nav ${isOpen ? 'is-open' : ''}`}>
          <ul className="header__links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    `header__link link-underline ${isActive ? 'is-active' : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
