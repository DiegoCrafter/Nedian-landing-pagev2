import Icon from './Icon.jsx'
import { TEAM } from '../data.js'
import { useReveal } from '../hooks.js'

export default function Team() {
  const ref = useReveal()
  return (
    <section className="section section-team" id="equipo" ref={ref}>
      <div className="container">
        <div className="section-head center">
          <span className="overline center-line" data-reveal>
            Nuestro equipo
          </span>
          <h2 data-reveal style={{ '--d': '.05s' }}>
            Los mejores profesionales de la construcción de la región
          </h2>
          <p data-reveal style={{ '--d': '.1s' }}>
            Ingenieros colegiados, personal técnico que conoce la sierra como nadie.
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map((m, i) => (
            <article className="team-card" key={m.name} data-reveal style={{ '--d': `${i * 0.08}s` }}>
              <div className="team-avatar" aria-hidden="true">
                {m.initials}
              </div>
              <h3>{m.name}</h3>
              <span className="team-role">{m.role}</span>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener"
                className="team-linkedin"
                aria-label={`LinkedIn de ${m.name}`}
              >
                <Icon name="linkedin" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
