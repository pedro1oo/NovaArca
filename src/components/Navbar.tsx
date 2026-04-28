import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const NAV_ITEMS = [
  { id: 'origin', label: 'A Cicatriz' },
  { id: 'structure', label: 'Domínio' },
  { id: 'duality', label: 'Dualismo' },
  { id: 'resistance', label: 'Resistência' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Navegação principal">
      <a href="#hero" className="navbar__logo">
        <span className="navbar__logo-symbol">⚔</span>
        <span className="navbar__logo-text">NOVA ARCA</span>
      </a>

      <button
        className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Abrir menu de navegação"
      >
        <span /><span /><span />
      </button>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <li key={item.id}>
            <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <Link to="/capitulos" className="navbar__cta" onClick={() => setMenuOpen(false)}>
            Ler Capítulos
          </Link>
        </li>
      </ul>
    </nav>
  )
}
