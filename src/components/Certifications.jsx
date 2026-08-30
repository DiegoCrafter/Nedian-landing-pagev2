import { CERTS } from '../data.js'
import { useReveal } from '../hooks.js'

export default function Certifications() {
  const ref = useReveal()
  return (
    <section className="section section-certs" id="certificaciones" ref={ref}>
      <div className="container">
        <div className="section-head center">
          <span className="overline center-line" data-reveal>
            Certificaciones
          </span>
          <h2 data-reveal style={{ '--d': '.05s' }}>
            Un sistema de gestión <em>certificado</em> en cada obra
          </h2>
          <p data-reveal style={{ '--d': '.1s' }}>
            Nuestro sistema integrado de gestión está certificado bajo estándares internacionales,
            garantizando calidad, seguridad, cuidado ambiental y transparencia en cada proyecto.
          </p>
        </div>
        <div className="certs-grid">
          {CERTS.map((c, i) => (
            <article
              className="cert-card"
              key={c.iso}
              data-reveal
              style={{ '--d': `${i * 0.08}s` }}
            >
              <img
                className="cert-card-img"
                src={c.img}
                alt={`Certificación ${c.iso} - ${c.label}`}
                loading="lazy"
              />
              <h3>{c.iso}</h3>
              <span className="cert-card-label">{c.label}</span>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}