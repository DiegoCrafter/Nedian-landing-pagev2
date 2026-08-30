import Icon from './Icon.jsx'
import { OBRAS } from '../data.js'
import { useReveal } from '../hooks.js'

export default function Obras() {
  const ref = useReveal()

  return (
    <main>
      <section className="obras-hero">
        <div className="container">
          <a href="#inicio" className="obras-back">
            <Icon name="chevronLeft" size={14} />
            Volver al inicio
          </a>
          <p className="overline">Portafolio de obras</p>
          <h1>
            Obras que construyen <em>comunidades</em>
          </h1>
          <p>
            Proyectos ejecutados en Ayacucho: infraestructura educativa, espacios
            públicos, losas deportivas y recreación para las familias de la región. Haz clic en una
            obra para leer su artículo completo.
          </p>
        </div>
      </section>

      <section className="section obras-section" ref={ref}>
        <div className="container">
          <div className="obras-grid">
            {OBRAS.map((o, i) => (
              <article className="obra-card" key={o.tag} data-reveal style={{ '--d': `${i * 0.08}s` }}>
                <a className="obra-cover" href={`#/obras/${o.tag}`} aria-label={`Leer artículo de la obra ${o.tag}`}>
                  <img src={o.img} alt={o.title} loading="lazy" />
                  <div className="oc-veil" />
                  <div className="oc-meta">
                    <span className="oc-label">Obra N°</span>
                    <span className="oc-tag">{o.tag}</span>
                  </div>
                  <span className="oc-icon">
                    <Icon name={o.icon} size={24} />
                  </span>
                </a>
                <div className="obra-body">
                  <h3>
                    <a href={`#/obras/${o.tag}`}>{o.title}</a>
                  </h3>
                  <div className="obra-chips">
                    {o.distrito && <span>Distrito: {o.distrito}</span>}
                    {o.provincia && <span>Provincia: {o.provincia}</span>}
                    <span>Ayacucho</span>
                  </div>
                  <a className="obra-link" href={`#/obras/${o.tag}`}>
                    Leer artículo
                    <Icon name="arrow" size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
