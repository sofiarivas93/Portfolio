import { contact, site } from '../data/content.js'
import { asset } from '../lib.js'

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="wrap">
        <h2>{contact.title}</h2>
        <p className="sub">{contact.sub}</p>
        <a className="mail" href={`mailto:${site.email}`}>
          {site.email} ↗
        </a>
        <div className="btns">
          <a className="btn fill" href={asset(site.cv)} download>
            {contact.cvButton}
          </a>
          {contact.links.map((l) => (
            // TODO: data-todo marca los enlaces pendientes de confirmar.
            <a key={l.label} className="btn" href={l.href} data-todo={l.todo}>
              {l.label}
            </a>
          ))}
        </div>
        <footer>{contact.footer}</footer>
      </div>
    </section>
  )
}
