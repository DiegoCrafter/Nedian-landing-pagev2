import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import { TESTIMONIALS } from '../data.js'
import { useReveal } from '../hooks.js'

export default function Testimonials() {
  const ref = useReveal()
  const [idx, setIdx] = useState(0)
  const timer = useRef(null)
  const total = TESTIMONIALS.length

  const go = (n) => setIdx((n + total) % total)

  useEffect(() => {
    timer.current = setInterval(() => setIdx((i) => (i + 1) % total), 6500)
    const clear = () => clearInterval(timer.current)
    const el = ref.current
    el?.addEventListener('mouseenter', clear)
    el?.addEventListener('mouseleave', () => {
      clearInterval(timer.current)
      timer.current = setInterval(() => setIdx((i) => (i + 1) % total), 6500)
    })
    return () => {
      clear()
      el?.removeEventListener('mouseenter', clear)
      el?.removeEventListener('mouseleave', clear)
    }
  }, [total])

  return (
    <section className="section section-testimonials" id="testimonios" ref={ref}>
      <div className="container">
        <div className="section-head center">
          <span className="overline center-line" data-reveal>
            Testimonios
          </span>
          <h2 data-reveal style={{ '--d': '.05s' }}>
            Por qué nuestros <em>clientes nos quieren</em>
          </h2>
        </div>

        <div className="t-slider" data-reveal>
          <div className="t-viewport">
            <div className="t-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
              {TESTIMONIALS.map((t) => (
                <div className="t-slide" key={t.name}>
                  <div className="t-card">
                    <span className="t-quote">
                      <Icon name="quote" size={34} fill />
                    </span>
                    <blockquote>“{t.quote}”</blockquote>
                    <div className="t-person">
                      <span className="t-avatar">{t.initials}</span>
                      <div>
                        <strong>{t.name}</strong>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="t-controls">
            <button className="t-btn" aria-label="Testimonio anterior" onClick={() => go(idx - 1)}>
              <Icon name="chevronLeft" size={20} />
            </button>
            <div className="t-dots">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  className={`t-dot${i === idx ? ' on' : ''}`}
                  aria-label={`Testimonio ${i + 1}`}
                  onClick={() => go(i)}
                />
              ))}
            </div>
            <button className="t-btn" aria-label="Siguiente testimonio" onClick={() => go(idx + 1)}>
              <Icon name="chevron" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
