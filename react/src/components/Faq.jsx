import { useState } from 'react'
import { FAQS } from '../data.js'
import { useReveal } from '../hooks.js'

function FaqItem({ item, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{item.q}</span>
        <span className="faq-plus" aria-hidden="true">
          +
        </span>
      </button>
      <div className="faq-a">
        <p>{item.a}</p>
      </div>
    </div>
  )
}

export default function Faq() {
  const ref = useReveal()
  return (
    <section className="section section-faq" id="faq" ref={ref}>
      <div className="container">
        <div className="section-head center">
          <span className="overline center-line" data-reveal>
            Preguntas frecuentes
          </span>
          <h2 data-reveal style={{ '--d': '.05s' }}>
            Tus preguntas sobre construcción, respondidas
          </h2>
          <p data-reveal style={{ '--d': '.1s' }}>
            Creemos en la transparencia. Estas son las dudas más comunes antes de iniciar un proyecto.
          </p>
        </div>
        <div className="faq-list" data-reveal>
          {FAQS.map((f, i) => (
            <FaqItem key={f.q} item={f} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
