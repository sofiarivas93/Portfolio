import { useEffect } from 'react'

// Distancia, en fracción de la pantalla, dentro de la cual se completa el movimiento hasta una sección.
const RANGE = 0.25

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Home: cuando el scroll se detiene cerca del inicio de una sección, termina de llevar hasta ella,
// siempre en la dirección en que se venía moviendo; nunca tira hacia atrás. Funciona con rueda,
// trackpad, flechas, Espacio y Tab porque solo mira dónde terminó el scroll.
export default function useSectionAssist() {
  useEffect(() => {
    let lastY = window.scrollY
    let dir = 0
    let timer

    const settle = () => {
      const y = window.scrollY
      const range = window.innerHeight * RANGE
      const tops = [...document.querySelectorAll('main > section')].map((s) => s.getBoundingClientRect().top + y)
      const target =
        dir > 0
          ? tops.find((t) => t - y > 1 && t - y < range)
          : dir < 0
            ? tops.findLast((t) => y - t > 1 && y - t < range)
            : undefined
      if (target !== undefined) window.scrollTo({ top: target, behavior: reducedMotion() ? 'instant' : 'smooth' })
    }

    const onScroll = () => {
      const y = window.scrollY
      if (y !== lastY) dir = Math.sign(y - lastY)
      lastY = y
      // Respaldo para navegadores sin el evento scrollend.
      if (!('onscrollend' in window)) {
        clearTimeout(timer)
        timer = setTimeout(settle, 150)
      }
    }
    const onScrollEnd = () => settle()

    window.addEventListener('scroll', onScroll, { passive: true })
    if ('onscrollend' in window) window.addEventListener('scrollend', onScrollEnd)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scrollend', onScrollEnd)
    }
  }, [])
}
