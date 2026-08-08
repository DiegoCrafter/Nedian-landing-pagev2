import { useEffect, useRef, useState } from 'react'

// Revelado al hacer scroll (IntersectionObserver)
export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    el.querySelectorAll('[data-reveal]').forEach((n) => obs.observe(n))
    return () => obs.disconnect()
  }, [])
  return ref
}

// Contador animado cuando el elemento entra en pantalla
export function useCountUp(target, { suffix = '', duration = 1600 } = {}) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (ts) => {
            const p = Math.min((ts - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(Math.round(eased * target))
            if (p < 1) requestAnimationFrame(tick)
            else setValue(target)
          }
          requestAnimationFrame(tick)
          obs.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return [ref, value, suffix]
}

// Header: fondo sólido al hacer scroll + enlaces activos (scrollspy)
export function useHeader(linkIds) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = linkIds
      .map((id) => document.querySelector(id))
      .filter(Boolean)
    if (!sections.length) return
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => spy.observe(s))
    return () => spy.disconnect()
  }, [linkIds])

  return { scrolled, active }
}
