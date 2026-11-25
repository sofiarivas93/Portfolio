import { about, site } from '../data/content.js'
import { asset } from '../lib.js'
import Icon from './Icon.jsx'
import Photo from './Photo.jsx'

export default function About() {
  return (
    <section id="sobre-mi">
      <div className="wrap about">
        <div>
          <h2>{about.title}</h2>
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <p>{about.cta}</p>
          <div className="btns">
            <a className="btn" href={`mailto:${site.email}`}>
              <Icon name="mail" />
              {about.email}
            </a>
            {about.links.map((l) => (
              <a key={l.label} className="btn" href={l.href} target="_blank" rel="noreferrer" data-todo={l.todo}>
                <Icon name={l.icon} />
                {l.label}
              </a>
            ))}
          </div>
          <a className="cv-link" href={asset(site.cv)} download>
            {about.cvLink}
          </a>
        </div>

        <div className="stack">
          <figure className="polaroid tape">
            <Photo src={about.photo.src} alt={about.photo.alt} />
            <figcaption>{about.photo.caption}</figcaption>
          </figure>
          <aside className="note career">
            <h3>{about.career.title}</h3>
            <ul>
              {about.career.items.map((item) => (
                <li key={item.role}>
                  {item.role}
                  <small>{item.place}</small>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
