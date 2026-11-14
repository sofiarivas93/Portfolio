import { Link } from 'react-router-dom'
import { projectsSection } from '../data/content.js'
import { projects } from '../data/projects.js'
import { cardClass } from '../lib.js'
import Photo from './Photo.jsx'

export default function Projects() {
  return (
    <section id="proyectos">
      <div className="wrap">
        <h2>{projectsSection.title}</h2>
        <p className="lead">{projectsSection.lead}</p>
        <div className="grid">
          {projects.map((p) => (
            <Link key={p.slug} className={`card ${cardClass[p.color]} tape`} to={`/proyecto/${p.slug}`}>
              <Photo src={p.image} alt={p.imageAlt} />
              <small>{p.meta}</small>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <em>{projectsSection.open}</em>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
