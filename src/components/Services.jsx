import Icon from './Icon.jsx'
import { SERVICES, SERVICES_PHOTOS } from '../data.js'
import { useReveal } from '../hooks.js'

// Diseño de referencia: grilla 3x3 — la columna izquierda son tarjetas
// de solo foto; las demás son tarjetas compactas (título + texto + CTA).
// Las tarjetas foto se colocan en los índices 0, 3 y 6 de la grilla.
export default function Services() {
  const ref = useReveal()
  const items = []
  for (let i = 0; i < 3; i++) {
    items.push({ type: 'photo', img: SERVICES_PHOTOS[i], photoIndex: i })
    items.push({ type: 'card', service: SERVICES[i * 2] })
    items.push({ type: 'card', service: SERVICES[i * 2 + 1] })
  }

  return (
    <section className="section section-services on-dark" id="servicios" ref={ref}>
      <div className="container">
        <div className="section-head center">
          <span className="overline center-line" data-reveal>
            Nuestros servicios
          </span>
          <h2 data-reveal style={{ '--d': '.05s' }}>
            Los servicios de construcción más confiables de la región
          </h2>
          <p data-reveal style={{ '--d': '.1s' }}>
            Una solución integral para tu proyecto: desde el expediente técnico hasta la entrega de la
            obra terminada, con precisión y experiencia local.
          </p>
        </div>
        <div className="services-grid">
          {items.map((item, i) =>
            item.type === 'photo' ? (
              <article
                className="service-card photo"
                key={`photo-${i}`}
                data-reveal
                style={{ '--d': `${(i % 3) * 0.08}s` }}
              >
                <img src={item.img} alt={`Servicio de construcción Nedian S.A.C. - Foto ${item.photoIndex + 1}`} loading="lazy" />
              </article>
            ) : (
              <article
                className="service-card"
                key={item.service.tag}
                data-reveal
                style={{ '--d': `${(i % 3) * 0.08}s` }}
              >
                <h3>{item.service.title}</h3>
                <p>{item.service.text}</p>
                <a href="#contacto" className="service-link">
                  {item.service.cta}
                  <Icon name="chevron" size={15} />
                </a>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  )
}
