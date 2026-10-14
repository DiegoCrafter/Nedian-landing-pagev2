import Icon from './Icon.jsx'
import { CONTACT } from '../data.js'
import { useReveal } from '../hooks.js'

export default function Cta() {
  const ref = useReveal()
  return (
    <section className="cta on-dark" ref={ref}>
      <div className="cta-bg" aria-hidden="true">
        <img src="assets/cta.webp" alt="" loading="lazy" />
        <div className="cta-veil" />
      </div>
      <div className="container cta-inner" data-reveal>
        <span className="overline center-line" data-reveal>
          Trabajemos juntos
        </span>
        <h2>¿Listo para construir tu visión en Ayacucho?</h2>
        <p>
          Recibe una consultoría gratuita y sin compromiso con nuestros especialistas: primero te
          escuchamos y luego te damos asesoría honesta.
        </p>
        <div className="cta-actions">
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener" className="btn btn-dark">
            Solicitar cotización
            <Icon name="chevron" size={16} />
          </a>
        </div>
        <p className="cta-phone">
          <Icon name="phone" size={16} />
          Prefiere conversar? Llama a nuestra oficina:
          <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
        </p>
      </div>
    </section>
  )
}
