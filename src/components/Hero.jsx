import { hero } from '../data/content.js'
import Photo from './Photo.jsx'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="wrap">
        <div className="hero-intro">
          <p className="hello">{hero.hello}</p>
          <h1>{hero.title}</h1>
        </div>
        <div className="hero-side">
          <figure className="polaroid tape">
            <Photo src={hero.photo.src} alt={hero.photo.alt} />
            <figcaption>{hero.photo.caption}</figcaption>
          </figure>
          <aside className="note ahora">
            <h2>{hero.recent.title}</h2>
            <ul>
              {hero.recent.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <small>{hero.recent.footnote}</small>
          </aside>
        </div>
      </div>
    </section>
  )
}
