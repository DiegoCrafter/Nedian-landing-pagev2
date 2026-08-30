import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { CONTACT, NAV_LINKS, SERVICES } from '../data.js'

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer>
        <div className="container">
          <div className="foot-grid">
            <div className="foot-brand">
              <a href="#inicio" className="brand">
                <img className="brand-logo" src="assets/logo.jpg" alt="Servicios Generales Nedian S.A.C." />
              </a>
              <p>
                Construyendo en Ayacucho desde 2012. Calidad, seguridad y compromiso con
                nuestra tierra.
              </p>
            </div>

            <div>
              <h3>Enlaces</h3>
              <ul className="foot-links">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Servicios</h3>
              <ul className="foot-links">
                {SERVICES.slice(0, 5).map((s) => (
                  <li key={s.tag}>
                    <a href="#servicios">{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="foot-bottom">
            <span>
              © {year} Servicios Generales Nedian S.A.C. Todos los derechos reservados · Ayacucho –
              Perú
            </span>
            <div className="fb-social">
              <a href="#" aria-label="Facebook">
                <Icon name="facebook" size={16} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Icon name="linkedin" size={16} />
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp">
                <Icon name="whatsapp" size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <a
        className="wa-float"
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener"
        aria-label="Escríbenos por WhatsApp"
      >
        <Icon name="whatsapp" size={30} fill />
      </a>
      <button
        className={`to-top${showTop ? ' show' : ''}`}
        aria-label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="arrow" size={20} />
      </button>
    </>
  )
}
