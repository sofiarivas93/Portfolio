import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Photo from '../components/Photo.jsx'
import { caseStudy as t, site } from '../data/content.js'
import { getProject, projects } from '../data/projects.js'

// Muestra un texto (string o lista de párrafos) o el aviso de contenido pendiente.
function Text({ value }) {
  const paragraphs = (Array.isArray(value) ? value : [value]).filter(Boolean)
  if (paragraphs.length === 0) return <p className="pending">{t.pending}</p>
  return paragraphs.map((p, i) => <p key={i}>{p}</p>)
}

function Block({ title, children }) {
  return (
    <div className="case-block">
      <h2>{title}</h2>
      <div className="case-text">{children}</div>
    </div>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)

  useEffect(() => {
    document.title = project ? `${project.title} — ${site.name}` : site.title
  }, [project])

  if (!project) {
    return (
      <>
        <Nav />
        <main className="case">
          <div className="wrap">
            <Link className="back" to="/#proyectos">
              {t.back}
            </Link>
            <h1>{t.notFound.title}</h1>
            <p className="sub">{t.notFound.text}</p>
          </div>
        </main>
      </>
    )
  }

  const c = project.caseStudy
  const s = t.sections
  const index = projects.indexOf(project)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <Nav />
      <main className="case">
        <div className="wrap">
          <Link className="back" to="/#proyectos">
            {t.back}
          </Link>

          <header className="case-head">
            <div>
              <p className="case-meta">{project.meta}</p>
              <h1>{project.title}</h1>
              <p className="sub">{project.description}</p>
            </div>
            <figure className="note case-cover tape" style={{ background: `var(--${project.color})` }}>
              <Photo key={project.image} src={project.image} alt={project.imageAlt} />
            </figure>
          </header>

          <Block title={s.context}>
            <Text value={c.context} />
          </Block>
          <Block title={s.problem}>
            <Text value={c.problem} />
          </Block>
          <Block title={s.role}>
            <Text value={c.role} />
          </Block>
          <Block title={s.process}>
            <Text value={c.process} />
            {c.methods.length > 0 && (
              <>
                <b className="case-label">{t.methods}</b>
                <div className="chips">
                  {c.methods.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </>
            )}
          </Block>
          <Block title={s.solution}>
            <Text value={c.solution} />
          </Block>
          <Block title={s.results}>
            <Text value={c.results} />
          </Block>
          <Block title={s.learnings}>
            <Text value={c.learnings} />
          </Block>
          <Block title={s.images}>
            <div className="case-gallery">
              {c.images.map((img, i) => (
                <figure key={img.src} className="polaroid">
                  <Photo key={img.src} src={img.src} alt={img.alt || `${project.title}, imagen ${i + 1}`} />
                  {img.caption && <figcaption>{img.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </Block>

          <Link className={`card case-next tape`} to={`/proyecto/${next.slug}`} style={{ background: `var(--${next.color})` }}>
            <small>{t.next}</small>
            <h3>{next.title}</h3>
            <p>{next.description}</p>
          </Link>
        </div>
      </main>
    </>
  )
}
