import { useEffect, useState } from 'react'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import Hero from '../components/Hero.jsx'
import Nav from '../components/Nav.jsx'
import Projects from '../components/Projects.jsx'
import { site } from '../data/content.js'

// Sección visible en el centro de la pantalla, igual que en la referencia.
function useActiveSection() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    document.querySelectorAll('section[id]').forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return active
}

export default function Home() {
  const active = useActiveSection()

  useEffect(() => {
    document.title = site.title
  }, [])

  return (
    <>
      <Nav active={active} showDots />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  )
}
