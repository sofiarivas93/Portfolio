import { about, site } from '../data/content.js'
import { asset } from '../lib.js'
import Photo from './Photo.jsx'
import arrowDown from '../assets/icons/arrow-down.svg'
import mail from '../assets/icons/mail.svg'
import linkedin from '../assets/icons/linkedin.svg'

const icons = { linkedin }

export default function About() {
  return (
    <section id="sobre-mi">
      <div className="wrap about">
        <div>
          <h2>{about.title}</h2>
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <p className="about-cta">{about.cta}</p>
          <div className="btns">
            <a className="btn" href={asset(site.cv)} download>
              {about.cvLink}
              <img src={arrowDown} alt="" />
            </a>
            <a className="btn" href={`mailto:${site.email}`}>
              {about.email}
              <img src={mail} alt="" />
            </a>
            {about.links.map((l) => (
              <a key={l.label} className="btn" href={l.href} target="_blank" rel="noreferrer" data-todo={l.todo}>
                {l.label}
                <img src={icons[l.icon]} alt="" />
              </a>
            ))}
          </div>
        </div>

        <div className="about-visual">
          <figure className="polaroid">
            <Photo src={about.photo.src} alt={about.photo.alt} />
            <figcaption>{about.photo.caption}</figcaption>
          </figure>
          <aside className="career">
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
