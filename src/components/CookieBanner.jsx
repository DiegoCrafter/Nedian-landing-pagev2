import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'

const STORAGE_KEY = 'nedian-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    // Solo mostrar si el usuario aún no ha decidido
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) {
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const decide = (value) => {
    localStorage.setItem(STORAGE_KEY, value)
    setLeaving(true)
    setTimeout(() => setVisible(false), 350)
  }

  if (!visible) return null

  return (
    <div className={`cookie-banner${leaving ? ' leaving' : ''}`} role="dialog" aria-label="Aviso de cookies">
      <div className="cookie-banner-inner">
        <span className="cookie-icon" aria-hidden="true">
          <Icon name="shield" size={22} />
        </span>
        <div className="cookie-copy">
          <strong>Usamos cookies</strong>
          <p>
            Utilizamos cookies propias para mejorar tu experiencia de navegación y analizar el uso
            del sitio. Al continuar, aceptas nuestra política de cookies.
          </p>
        </div>
        <div className="cookie-actions">
          <button type="button" className="btn btn-brand cookie-accept" onClick={() => decide('accepted')}>
            Aceptar todas
          </button>
          <button type="button" className="cookie-reject" onClick={() => decide('rejected')}>
            Solo necesarias
          </button>
        </div>
      </div>
    </div>
  )
}