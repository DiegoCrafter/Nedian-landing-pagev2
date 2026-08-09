import { useState } from 'react'
import Icon from './Icon.jsx'
import { CONTACT, OFFICE_INFO, SERVICES } from '../data.js'
import { useReveal } from '../hooks.js'

const SERVICE_OPTIONS = SERVICES.map((s) => s.title)

export default function Contact() {
  const ref = useReveal()
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.target)
    const lines = [
      'Hola Nedian S.A.C., les escribo desde la web:',
      `Nombre: ${fd.get('nombre')}`,
      fd.get('telefono') && `Teléfono: ${fd.get('telefono')}`,
      fd.get('correo') && `Correo: ${fd.get('correo')}`,
      `Servicio: ${fd.get('servicio')}`,
      `Mensaje: ${fd.get('mensaje')}`,
    ]
    const msg = lines.filter(Boolean).join('\n')
    window.open(`https://wa.me/${CONTACT.phoneHref.replace('+', '')}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 7000)
  }

  return (
    <section className="section contact-section" id="contacto" ref={ref}>
      <div className="container">
        <div className="section-head center" data-reveal>
          <p className="overline">Contacto</p>
          <h2>
            Cuéntanos tu proyecto y te <em>respondemos hoy</em>
          </h2>
          <p>
            Escríbenos y un especialista te atenderá a la brevedad. También puedes llamarnos o
            escribirnos por WhatsApp directamente.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info" data-reveal>
            <div className="contact-info-list">
              {OFFICE_INFO.map((item) => (
                <div className="contact-item" key={item.title}>
                  <span className="contact-item-icon">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <div>
                    <span className="ci-label">{item.title}</span>
                    {item.lines.map((line) => (
                      <span className="ci-value" key={line}>
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a
              className="btn btn-brand contact-wa"
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener"
            >
              <Icon name="whatsapp" size={18} />
              Escríbenos por WhatsApp
            </a>
            <p className="contact-note">
              Horario de atención: {CONTACT.hours}. También al{' '}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-reveal style={{ '--d': '.1s' }}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="c-nombre">Nombre completo *</label>
                <input id="c-nombre" name="nombre" type="text" autoComplete="name" required placeholder="Ej. Juan Quispe" />
              </div>
              <div className="field">
                <label htmlFor="c-telefono">Teléfono</label>
                <input id="c-telefono" name="telefono" type="tel" autoComplete="tel" placeholder="+51 9XX XXX XXX" />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="c-correo">Correo</label>
                <input id="c-correo" name="correo" type="email" autoComplete="email" placeholder="tucorreo@ejemplo.com" />
              </div>
              <div className="field">
                <label htmlFor="c-servicio">Servicio de interés</label>
                <select id="c-servicio" name="servicio" defaultValue={SERVICE_OPTIONS[0]}>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                  <option>Otro / Consulta general</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="c-mensaje">Cuéntanos tu proyecto *</label>
              <textarea
                id="c-mensaje"
                name="mensaje"
                rows="5"
                required
                placeholder="Describe tu obra, ubicación y lo que necesitas cotizar..."
              />
            </div>

            <button type="submit" className="btn btn-brand contact-submit">
              {sent ? '¡Mensaje listo!' : 'Enviar mensaje'}
              <Icon name="whatsapp" size={18} />
            </button>
            <p className="contact-form-note">
              {sent
                ? 'Se abrió WhatsApp con tu mensaje. Solo presiona enviar para contactarnos.'
                : 'Al enviar se abrirá WhatsApp con tu mensaje listo para confirmar.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
