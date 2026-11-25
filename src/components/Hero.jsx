import { hero } from '../data/content.js'
import Photo from './Photo.jsx'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="hello">{hero.hello}</p>
          <h1>{hero.title}</h1>
          <p className="hero-sub">{hero.sub}</p>
          <ul className="skills">
            {hero.skills.map((s) => (
              <li key={s.title} className="skill" style={{ background: `var(--${s.color})` }}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="stack">
          <figure className="polaroid">
            <Photo src={hero.photo.src} alt={hero.photo.alt} />
            <figcaption>{hero.photo.caption}</figcaption>
          </figure>
          <aside className="note best">
            <h2>{hero.best.title}</h2>
            <ul>
              {hero.best.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
