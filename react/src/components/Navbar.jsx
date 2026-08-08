import { useState } from 'react'
import Icon from './Icon.jsx'
import { NAV_LINKS } from '../data.js'
import { useHeader } from '../hooks.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { active } = useHeader(NAV_LINKS.map((l) => l.href))

  const close = () => setOpen(false)

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
                <a href={l.href} className={active === l.href ? 'active' : ''} onClick={close}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" className="btn btn-brand nav-cta" onClick={close}>
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
