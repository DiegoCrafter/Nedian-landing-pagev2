import { useEffect, useMemo, useState } from 'react'
import Icon from './Icon.jsx'
import { CONTACT, OBRAS } from '../data.js'
import { useReveal } from '../hooks.js'

function goContact(e) {
  if (window.location.hash.startsWith('#/')) {
    e.preventDefault()
    window.location.hash = '#/'
    setTimeout(() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }), 200)
  }
}

// Base del sitio (funciona en dev y en GitHub Pages): origen + path, sin hash
function siteBase() {
  return window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/')
}

// Página OG (obras/XX.html) con imagen + contenido para previews de redes
function ogPageUrl(tag) {
  return `${siteBase()}obras/${tag}.html`
}

// Abre el diálogo de compartir de Facebook en ventana emergente
function openFacebookShare(href) {
  const w = window.open(href, 'share-fb', 'width=626,height=436,left=120,top=120')
  if (!w) window.location.href = href
}

function lastSentence(text) {
  const parts = text.split('. ')
  if (parts.length < 2) return text
  const last = parts[parts.length - 1]
  return last.endsWith('.') ? last : `${last}.`
}

export default function ObraArticle({ tag }) {
  const obra = OBRAS.find((o) => o.tag === tag)
  const ref = useReveal()
  const [copied, setCopied] = useState(false)
  const [progress, setProgress] = useState(0)
  const [lightbox, setLightbox] = useState(null)

  const gallery = useMemo(() => (obra ? obra.gallery : []), [obra])
  const allImgs = gallery

  // OG tags dinámicos (para scrapers de redes que ejecutan JS)
  useEffect(() => {
    if (!obra) return
    const prev = {}
    const setTag = (prop) => {
      const el = document.querySelector(`meta[property="${prop}"], meta[name="${prop}"]`)
      if (el) prev[prop] = el.getAttribute('content')
    }
    ;['og:title', 'og:description', 'og:image', 'og:url', 'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'].forEach(setTag)

    const title = obra.title
    const desc = obra.body[0].split('. ')[0] + '.'
    const img = `${siteBase()}${obra.img}`
    const pageUrl2 = ogPageUrl(obra.tag)

    const set = (prop, content) => {
      let el = document.querySelector(`meta[property="${prop}"], meta[name="${prop}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(prop.startsWith('og:') ? 'property' : 'name', prop)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    set('og:title', title)
    set('og:description', desc)
    set('og:image', img)
    set('og:url', pageUrl2)
    set('twitter:title', title)
    set('twitter:description', desc)
    set('twitter:image', img)
    document.title = `${title} — Nedian S.A.C.`

    return () => {
      Object.entries(prev).forEach(([prop, content]) => {
        const el = document.querySelector(`meta[property="${prop}"], meta[name="${prop}"]`)
        if (el && content !== undefined) el.setAttribute('content', content)
        else if (el && content === undefined) el.remove()
      })
      document.title = 'Servicios Generales Nedian S.A.C. | Construcción en la Sierra de Ayacucho'
    }
  }, [tag, obra])

  // Barra de progreso de lectura
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement
        const max = doc.scrollHeight - window.innerHeight
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [tag])

  // Lightbox: bloquear scroll + teclado
  useEffect(() => {
    if (lightbox === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % allImgs.length)
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + allImgs.length) % allImgs.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox, allImgs.length])

  if (!obra) {
    return (
      <main className="article-missing">
        <div className="container">
          <p className="overline">Obra no encontrada</p>
          <h1>No encontramos esa obra</h1>
          <a className="btn btn-brand" href="#/obras">
            Ver todas las obras
          </a>
        </div>
      </main>
    )
  }

  const others = OBRAS.filter((o) => o.tag !== tag).slice(0, 3)
  const pageUrl = ogPageUrl(obra.tag)
  const pullQuote = lastSentence(obra.body[1] || obra.body[0] || '')
  const shareDesc = obra.body[0].split('. ')[0] + '.'

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: 'whatsapp',
      cls: 'wa',
      href: `https://wa.me/?text=${encodeURIComponent(`${obra.title} — ${pageUrl}`)}`,
    },
    {
      name: 'Facebook',
      icon: 'facebook',
      cls: 'fb',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${encodeURIComponent(`${obra.title} — ${shareDesc}`)}`,
      popup: openFacebookShare,
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      cls: 'in',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
    },
    {
      name: 'X',
      icon: 'x',
      cls: 'x',
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(obra.title)}`,
    },
  ]

  const copyLink = async () => {
    let done = false
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(pageUrl)
        done = true
      }
    } catch {
      /* fallback */
    }
    if (!done) {
      try {
        const ta = document.createElement('textarea')
        ta.value = pageUrl
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        done = document.execCommand('copy')
        ta.remove()
      } catch {
        done = false
      }
    }
    if (done) {
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    }
  }

  const meta = [
    { icon: 'pin', label: 'Distrito', value: obra.distrito },
    { icon: 'award', label: 'Provincia', value: obra.provincia },
    { icon: 'shield', label: 'Región', value: 'Ayacucho' },
    { icon: 'wrench', label: 'Tipo de obra', value: obra.tipo },
  ]

  return (
    <main>
      {/* Barra de progreso de lectura */}
      <div className="read-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      {/* Hero con foto de fondo — URL absoluta: las url() de variables CSS se resuelven contra el CSS, no el documento */}
      <section className="article-hero" style={{ '--hero-img': `url(${siteBase()}${obra.img})` }}>
        <div className="ah-veil" aria-hidden="true" />
        <div className="container ah-inner">
          <nav className="ah-breadcrumb" aria-label="Ruta de navegación">
            <a href="#/">Inicio</a>
            <span className="ah-sep">/</span>
            <a href="#/obras">Obras</a>
            <span className="ah-sep">/</span>
            <span className="ah-cur">Obra {obra.tag}</span>
          </nav>
          <span className="ah-badge">
            <Icon name={obra.icon} size={15} />
            Obra N° {obra.tag}
          </span>
          <h1>{obra.title}</h1>
          <div className="ah-meta">
            <span>
              <Icon name="pin" size={14} />
              {obra.distrito}, {obra.provincia}
            </span>
            <span>
              <Icon name="shield" size={14} />
              Ayacucho
            </span>
          </div>
          <div className="ah-share" aria-label="Compartir esta obra">
            <span className="ah-share-label">Compartir</span>
            {shareLinks.map((s) => (
              <a
                key={s.name}
                className={`ah-share-icon ${s.cls}`}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={`Compartir en ${s.name}`}
                onClick={
                  s.popup
                    ? (e) => {
                        e.preventDefault()
                        s.popup(s.href)
                      }
                    : undefined
                }
              >
                <Icon name={s.icon} size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="article-section" ref={ref}>
        <div className="container article-container">
          {/* Barra de datos de la obra */}
          <div className="article-meta" data-reveal>
            {meta.map((m) => (
              <div className="am-item" key={m.label}>
                <span className="am-icon">
                  <Icon name={m.icon} size={18} />
                </span>
                <div>
                  <span className="am-label">{m.label}</span>
                  <span className="am-value">{m.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Cuerpo editorial */}
          <div className="article-body" data-reveal style={{ '--d': '.08s' }}>
            <p className="article-lead">{obra.body[0]}</p>
            {obra.body.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <blockquote className="article-quote" data-reveal>
            <Icon name="quote" size={30} />
            <p>“{pullQuote}”</p>
          </blockquote>

          {/* Galería con lightbox */}
          {gallery.length > 0 && (
            <div className={`article-gallery g${gallery.length}`} data-reveal>
              {gallery.map((g, i) => (
                <figure key={g}>
                  <button
                    type="button"
                    className="ag-open"
                    onClick={() => setLightbox(i)}
                    aria-label={`Ver imagen ${i + 1} de ${gallery.length} en grande`}
                  >
                    <img src={g} alt={`${obra.title} — imagen ${i + 1}`} loading={i === 0 ? 'eager' : 'lazy'} />
                    <span className="ag-zoom">
                      <Icon name="search" size={18} />
                    </span>
                  </button>
                </figure>
              ))}
            </div>
          )}

          {/* Compartir */}
          <div className="article-share" data-reveal>
            <div className="as-head">
              <span className="as-label">¿Te gustó esta obra?</span>
              <p className="as-sub">Compártela con quien necesite construir en la sierra</p>
            </div>
            <div className="share-btns">
              {shareLinks.map((s) => (
                <a
                  key={s.name}
                  className={`share-btn ${s.cls}`}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Compartir en ${s.name}`}
                  onClick={
                    s.popup
                      ? (e) => {
                          e.preventDefault()
                          s.popup(s.href)
                        }
                      : undefined
                  }
                >
                  <Icon name={s.icon} size={17} />
                  <span>{s.name}</span>
                </a>
              ))}
              <button
                type="button"
                className={`share-btn share-copy${copied ? ' is-copied' : ''}`}
                onClick={copyLink}
                aria-label="Copiar enlace"
              >
                <Icon name={copied ? 'check' : 'file'} size={17} />
                <span>{copied ? '¡Enlace copiado!' : 'Copiar enlace'}</span>
              </button>
            </div>
          </div>

          {/* Otras obras */}
          <div className="article-more" data-reveal>
            <div className="amore-head">
              <p className="overline">Sigue explorando</p>
              <a className="amore-all" href="#/obras">
                Ver todas las obras
                <Icon name="arrow" size={14} />
              </a>
            </div>
            <div className="amore-grid">
              {others.map((o) => (
                <a className="amore-card" key={o.tag} href={`#/obras/${o.tag}`}>
                  <div className="amore-img">
                    <img src={o.img} alt={o.title} loading="lazy" />
                    <span className="amore-num">N° {o.tag}</span>
                  </div>
                  <div className="amore-body">
                    <h3>{o.title}</h3>
                    <span className="amore-go">
                      Leer artículo
                      <Icon name="chevron" size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="article-cta" data-reveal>
            <div className="ac-copy">
              <span className="ac-icon">
                <Icon name="wrench" size={22} />
              </span>
              <div>
                <p className="overline">¿Tienes un proyecto similar?</p>
                <h3>Cotiza tu obra con Nedian S.A.C.</h3>
                <p>
                  Te asesoramos sin compromiso, con la experiencia de más de 12 años construyendo en
                  la sierra de Ayacucho.
                </p>
              </div>
            </div>
            <div className="ac-actions">
              <a className="btn btn-brand" href="#contacto" onClick={goContact}>
                Solicitar cotización
                <Icon name="chevron" size={14} />
              </a>
              <a className="ac-wa" href={CONTACT.phoneHref} target="_blank" rel="noopener">
                <Icon name="whatsapp" size={16} />
                WhatsApp directo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ${lightbox + 1} de ${allImgs.length}`}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="lb-close"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            <Icon name="x" size={20} />
          </button>
          <button
            type="button"
            className="lb-nav lb-prev"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i - 1 + allImgs.length) % allImgs.length)
            }}
            aria-label="Imagen anterior"
          >
            <Icon name="chevronLeft" size={22} />
          </button>
          <figure className="lb-fig" onClick={(e) => e.stopPropagation()}>
            <img src={allImgs[lightbox]} alt={`${obra.title} — imagen ${lightbox + 1}`} />
            <figcaption>
              {obra.title} — imagen {lightbox + 1} de {allImgs.length}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lb-nav lb-next"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i + 1) % allImgs.length)
            }}
            aria-label="Imagen siguiente"
          >
            <Icon name="chevron" size={22} />
          </button>
        </div>
      )}
    </main>
  )
}
