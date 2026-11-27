import { Link } from 'react-router-dom'
import { projectsSection } from '../data/content.js'
import { projects } from '../data/projects.js'

const featured = projects.filter((p) => p.featured).sort((a, b) => a.featured - b.featured)

export default function Projects() {
  return (
    <section id="proyectos">
      <div className="wrap">
        <h2>{projectsSection.title}</h2>
        <p className="lead">{projectsSection.lead}</p>
        <div className="projects">
          {featured.map((p, i) => (
            <Link key={p.slug} className="project" to={`/home/${p.slug}`}>
              <div className="project-cover" style={{ background: `var(--${p.coverColor})` }}>
                <small>
                  {String(i + 1).padStart(2, '0')} / {p.discipline}
                </small>
                <strong>{p.headline}</strong>
              </div>
              <small className="project-meta">{p.meta}</small>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <span className="project-open">{projectsSection.open}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
