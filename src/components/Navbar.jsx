import { useState } from 'react'
import Icon from './Icon.jsx'
import { NAV_LINKS } from '../data.js'
import { useHeader } from '../hooks.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const sectionLinks = NAV_LINKS.map((l) => l.href).filter((h) => !h.startsWith('#/'))
  const { active } = useHeader(sectionLinks)

  const close = () => setOpen(false)

  // Al navegar a una sección desde la vista Obras: volver al inicio y scrollear
  const goSection = (href) => (e) => {
    close()
    if (href.startsWith('#/')) return
    if (window.location.hash.startsWith('#/')) {
      e.preventDefault()
      window.location.hash = '#/'
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 200)
    }
  }

  return (
    <header id="header" className="header">
      <div className="container header-inner">
        <a href="#inicio" className="brand" aria-label="Servicios Generales Nedian S.A.C.">
          <img className="brand-logo" src="assets/logo.jpg" alt="Servicios Generales Nedian S.A.C." />
        </a>

        <nav className={`main-nav${open ? ' open' : ''}`} id="mainNav" aria-label="Navegación principal">
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={active === l.href ? 'active' : ''} onClick={goSection(l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" className="btn btn-brand nav-cta" onClick={goSection('#contacto')}>
                Cotizar ahora
                <Icon name="chevron" size={14} />
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="burger"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'x' : 'menu'} size={26} />
        </button>
      </div>
    </header>
  )
}
