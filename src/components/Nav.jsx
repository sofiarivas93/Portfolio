import { Link } from 'react-router-dom'
import { nav, site } from '../data/content.js'
import { asset } from '../lib.js'

// Píldora de navegación fija y, en la home, los puntos laterales con la sección activa.
export default function Nav({ active = null, showDots = false }) {
  const on = (id) => (active === id ? 'on' : undefined)

  return (
    <>
      <div className="top">
        <Link className="name" to="/#inicio">
          {site.name}
        </Link>
        <nav className="pill" aria-label={nav.ariaLabel}>
          {nav.sections.map((s) => (
            <Link key={s.id} className={on(s.id)} to={`/#${s.id}`}>
              {s.label}
            </Link>
          ))}
          <a href={asset(site.cv)} download>
            {nav.cv}
          </a>
        </nav>
      </div>

      {showDots && (
        <nav className="dots" aria-hidden="true">
          {nav.sections.map((s) => (
            <Link key={s.id} className={on(s.id)} to={`/#${s.id}`} tabIndex={-1}>
              <span>{s.dot}</span>
              <i></i>
            </Link>
          ))}
        </nav>
      )}
    </>
  )
}
