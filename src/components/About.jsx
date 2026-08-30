import Icon from './Icon.jsx'
import { ABOUT_IMG, MVV, STATS, TRUST_ITEMS } from '../data.js'
import { useCountUp, useReveal } from '../hooks.js'

function Stat({ value, suffix, label }) {
  const [ref, count] = useCountUp(value, { suffix })
  return (
    <div className="about-stat" ref={ref}>
      <div className="num">
        {count}
        <small>{suffix}</small>
      </div>
      <div className="lbl">{label}</div>
    </div>
  )
}

export default function About() {
  const ref = useReveal()
  return (
    <section className="section section-about" id="nosotros" ref={ref}>
      <div className="container about-grid">
        <div className="about-copy">
          <span className="overline" data-reveal>
            Sobre nosotros
          </span>
          <h2 data-reveal style={{ '--d': '.05s' }}>
            Raíces profundas en Ayacucho: constructores que entienden tus necesidades
          </h2>
          <p className="lead" data-reveal style={{ '--d': '.1s' }}>
            Empresa de familia y crecimiento local, construimos los proyectos públicos y privados de
            la región con orgullo desde hace más de 12 años. Nuestro equipo de ingenieros colegiados y
            maestros de obra combina técnicas tradicionales con innovación moderna para resistir las
            condiciones más exigentes de la sierra.
          </p>
          <p className="lead" data-reveal style={{ '--d': '.15s' }}>
            Desde edificaciones hasta infraestructura vial e hidráulica, cada proyecto refleja nuestro
            compromiso con la calidad, la transparencia y tu total satisfacción. No solo construimos
            obras: construimos relaciones que perduran.
          </p>
          <a href="#servicios" className="text-link" data-reveal style={{ '--d': '.2s' }}>
            Conoce nuestros servicios
            <Icon name="chevron" size={16} />
          </a>
          <div className="about-stats" data-reveal style={{ '--d': '.25s' }}>
            {STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
          <ul className="trust-strip" data-reveal style={{ '--d': '.3s' }}>
            {TRUST_ITEMS.map((t) => (
              <li key={t.label} className="trust-item">
                <Icon name={t.icon} size={15} />
                {t.label}
              </li>
            ))}
          </ul>
        </div>
        <figure className="about-photo" data-reveal style={{ '--d': '.1s' }}>
          <img src={ABOUT_IMG} alt="Obra de construcción ejecutada por Nedian S.A.C." loading="lazy" />
        </figure>
      </div>

      <div className="container about-mvv">
        {MVV.map((m, i) => (
          <article className="mvv-card" key={m.title} data-reveal style={{ '--d': `${i * 0.08}s` }}>
            <span className="mvv-icon">
              <Icon name={m.icon} size={24} />
            </span>
            <h3>{m.title}</h3>
            <p>{m.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
