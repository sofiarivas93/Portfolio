import { about, site } from '../data/content.js'
import { asset } from '../lib.js'
import Photo from './Photo.jsx'

export default function About() {
  return (
    <section id="sobre-mi">
      <div className="wrap about">
        <div>
          <h2>{about.title}</h2>
          <p>{about.intro}</p>
          <p>
            {about.research.before}
            <em>{about.research.journal}</em>
            {about.research.after}
          </p>
          <p>
            <a className="link" href={asset(site.cv)} download>
              {about.cvLink}
            </a>
          </p>
        </div>

        <div className="collage">
          <div className="note peach span tape">
            <p>{about.quote.text}</p>
            <small>{about.quote.footnote}</small>
          </div>

          <figure className="polaroid">
            <Photo src={about.photo.src} alt={about.photo.alt} />
            <figcaption>{about.photo.caption}</figcaption>
          </figure>

          <div className="note lilac">
            <b>{about.career.title}</b>
            {about.career.items.map((item) => (
              <p key={item.role}>
                {item.role}
                <small>{item.place}</small>
              </p>
            ))}
          </div>

          <div className="note sage span">
            <b>{about.strengths.title}</b>
            <div className="chips">
              {about.strengths.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
