import { useState } from 'react'
import Icon from './Icon.jsx'
import { CERTS, CONTACT, HERO_AVATARS, REVIEWS } from '../data.js'

export default function Hero() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.target)
    const msg = `Hola Nedian S.A.C., quiero solicitar una consultoría de construcción.%0A%0A
      Mi correo es: ${fd.get('email') || 'no indicado'}`.replace(/\s*\n\s*/g, '%0A')
    window.open(`https://wa.me/${CONTACT.phoneHref.replace('+', '')}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img src="assets/hero.webp" alt="" fetchPriority="high" />
        <div className="hero-veil" />
      </div>
      <div className="container hero-inner">
        <a href="#contacto" className="hero-chip">
          <span className="hero-chip-dot">✓</span>
          ¡Estamos contratando! Únete a nuestro equipo en obra
          <Icon name="chevron" size={14} />
        </a>

        <h1>
          Construcción y obras civiles en Ayacucho con experiencia local <em>más fuerte e inteligente</em>
        </h1>
        <p className="hero-sub">
          Desde Huanca Sancos, somos los constructores de confianza de la región desde hace más de 12
          años: proyectos puntuales, a buen precio y con la fiabilidad de la piedra de los Andes.
        </p>

        <form className="hero-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Ingresa tu correo electrónico..."
            aria-label="Correo electrónico"
            required
          />
          <button type="submit" className="btn btn-primary">
            {sent ? '¡Recibido!' : 'Solicitar consultoría'}
            <Icon name="chevron" size={15} />
          </button>
        </form>

        <div className="hero-trust">
          <div className="hero-avatars" aria-hidden="true">
            {HERO_AVATARS.map((a) => (
              <span key={a.initials}>{a.initials}</span>
            ))}
          </div>
          <div className="hero-trust-text">
            <strong>12+ Especialistas en construcción</strong>
            <span>Dedicados al éxito de tu proyecto</span>
          </div>
        </div>

        <div className="hero-certs" aria-label="Certificaciones ISO">
          {CERTS.map((c) => (
            <div className="cert-badge" key={c.iso}>
              <Icon name="shield" size={15} />
              <span className="cert-iso">{c.iso}</span>
              <span className="cert-label">{c.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-reviews">
          {REVIEWS.map((r) => (
            <div className="review-badge" key={r.platform}>
              <span className="review-score">
                <strong>{r.score}</strong>
                <span>{r.count}</span>
              </span>
              <span className="review-stars">
                {[...Array(r.stars)].map((_, i) => (
                  <Icon key={i} name="star" size={13} fill />
                ))}
              </span>
              <span className="rb-name">{r.platform}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
