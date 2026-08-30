import Icon from './Icon.jsx'
import { CONTACT } from '../data.js'
import { useReveal } from '../hooks.js'

function OfficeMap() {
  return (
    <div className="office-map" data-reveal style={{ '--d': '.12s' }}>
      <svg viewBox="0 0 520 460" role="img" aria-label="Mapa de ubicación de la oficina en Ayacucho">
        <rect width="520" height="460" fill="#fcf9ef" />
        {/* Manzanas */}
        <rect x="30" y="40" width="120" height="90" rx="8" fill="#f2ede0" />
        <rect x="180" y="40" width="120" height="90" rx="8" fill="#f2ede0" />
        <rect x="330" y="40" width="150" height="90" rx="8" fill="#f2ede0" />
        <rect x="30" y="160" width="120" height="100" rx="8" fill="#f2ede0" />
        <rect x="330" y="160" width="150" height="100" rx="8" fill="#f2ede0" />
        <rect x="30" y="290" width="120" height="120" rx="8" fill="#f2ede0" />
        <rect x="180" y="290" width="120" height="120" rx="8" fill="#f2ede0" />
        <rect x="330" y="290" width="150" height="120" rx="8" fill="#f2ede0" />
        {/* Parque */}
        <rect x="180" y="160" width="120" height="100" rx="10" fill="#e8ecd8" />
        <circle cx="220" cy="205" r="16" fill="#d9e2c4" />
        <circle cx="252" cy="218" r="11" fill="#d9e2c4" />
        {/* Calles principales */}
        <rect x="158" y="0" width="14" height="460" fill="#e7e3d6" />
        <rect x="322" y="0" width="12" height="460" fill="#e7e3d6" />
        <rect x="0" y="146" width="520" height="12" fill="#e7e3d6" />
        <rect x="0" y="276" width="520" height="12" fill="#e7e3d6" />
        {/* Avenida principal */}
        <rect x="158" y="146" width="14" height="12" fill="#cfd5dd" />
        <rect x="322" y="146" width="12" height="12" fill="#cfd5dd" />
        {/* Río (Wari) */}
        <path
          d="M0 430 Q 90 400 160 424 T 340 420 T 520 410"
          stroke="#b9cbd8"
          strokeWidth="16"
          fill="none"
          strokeLinecap="round"
        />
        {/* Pin de ubicación */}
        <circle cx="260" cy="210" r="26" fill="#fff" opacity="0.9" />
        <circle cx="260" cy="210" r="18" fill="#161616" />
        <path d="M260 198 a6 6 0 1 0 0.1 0" fill="#fff" />
      </svg>
      <div className="map-card">
        <span className="mc-icon">
          <Icon name="pin" size={20} />
        </span>
        <div>
          <strong>Nedian S.A.C.</strong>
          <span>Jr. Arica SN, Huanca Sancos</span>
          <span>Jr. Huaraz, Carmen Alto, Huamanga</span>
        </div>
      </div>
    </div>
  )
}

const LIST = [
  {
    icon: 'mail',
    label: 'Para consultas detalladas o documentos',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: 'phone',
    label: 'Prefieres conversar? Llama a nuestro especialista',
    value: CONTACT.phone,
    href: `tel:${CONTACT.phoneHref}`,
  },
  {
    icon: 'clock',
    label: 'Horario de atención',
    value: 'Lun – Vier · 8:00 am – 6:00 pm',
  },
  {
    icon: 'pin',
    label: 'Oficina en Huanca Sancos',
    value: 'Jr. Arica SN, Ayacucho – Huanca Sancos, Perú',
  },
  {
    icon: 'pin',
    label: 'Oficina en Huamanga',
    value: 'Jr. Huaraz, Carmen Alto, Ayacucho – Huamanga, Perú',
  },
]

export default function Office() {
  const ref = useReveal()
  return (
    <section className="section section-office" id="oficina" ref={ref}>
      <div className="container office-grid">
        <div className="office-copy">
          <span className="overline" data-reveal>
            Visita nuestra oficina
          </span>
          <h2 data-reveal style={{ '--d': '.05s' }}>
            Estamos en Ayacucho, visitamos tu obra en toda la región
          </h2>
          <p className="lead" data-reveal style={{ '--d': '.1s' }}>
            Desde los primeros planos hasta los acabados finales, nuestros especialistas están aquí
            para ayudarte, con asesoría honesta y experiencia local.
          </p>
          <ul className="office-list">
            {LIST.map((item, i) => (
              <li className="office-item" key={item.label} data-reveal style={{ '--d': `${0.12 + i * 0.06}s` }}>
                <span className="oi-icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <div>
                  <span>{item.label}</span>
                  {item.href ? (
                    <strong>
                      <a href={item.href}>{item.value}</a>
                    </strong>
                  ) : (
                    <strong>{item.value}</strong>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <OfficeMap />
      </div>
    </section>
  )
}
