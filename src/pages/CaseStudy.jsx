import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Photo from '../components/Photo.jsx'
import { caseStudy as t, site } from '../data/content.js'
import { getProject, projects } from '../data/projects.js'
import { asset } from '../lib.js'
import arrow from '../assets/icons/arrow.svg'

const toList = (value) => (Array.isArray(value) ? value : [value]).filter(Boolean)
const percent = new Intl.NumberFormat('es', { maximumFractionDigits: 1 })

function Paragraphs({ value, className }) {
  return toList(value).map((p, i) => (
    <p key={i} className={className}>
      {p}
    </p>
  ))
}

// Polaroids con el espacio "Agrega imagen: …" mientras falte el archivo.
function Gallery({ images, title }) {
  if (!images?.length) return null
  return (
    <div className="case-gallery">
      {images.map((img, i) => (
        <figure key={img.src} className="polaroid">
          <Photo key={img.src} src={img.src} alt={img.alt || `${title}, imagen ${i + 1}`} />
          {img.caption && <figcaption>{img.caption}</figcaption>}
        </figure>
      ))}
    </div>
  )
}

// Imagen enmarcada en un color, sin inclinar. Con ratio, ocupa todo el ancho disponible.
function Figure({ figure, wide }) {
  const className = ['case-figure', figure.fit === 'contain' && 'fit-contain', (wide || figure.ratio) && 'wide']
    .filter(Boolean)
    .join(' ')
  return (
    <figure
      className={className}
      style={{
        background: `var(--${figure.bg ?? 'paper'})`,
        '--ratio': figure.ratio,
      }}
    >
      <Photo src={figure.src} alt={figure.alt} imgStyle={figure.imgStyle} />
    </figure>
  )
}

function Figures({ figures }) {
  if (!figures?.length) return null
  return (
    <div className="case-figures">
      {figures.map((f) => (
        <Figure key={f.src} figure={f} />
      ))}
    </div>
  )
}

// Antes y después de un porcentaje, con barras sobre una escala de 0 a 100%.
function Comparison({ data }) {
  return (
    <div className="case-compare">
      <div className="compare-read">
        <p className="compare-value">{data.value}</p>
        <p>{data.text}</p>
      </div>
      <div className="compare-bars">
        {data.items.map((d) => (
          <div key={d.label}>
            <p>
              {d.label} · {percent.format(d.value)}%
            </p>
            <span className="compare-track" aria-hidden="true">
              <span className="compare-bar" style={{ width: `${d.value}%` }} />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Collage de mockups superpuestos. Cada imagen se ubica en % del lienzo.
function Collage({ collage }) {
  return (
    <figure className="case-collage">
      <div className="collage-canvas">
        {collage.images.map((img) => (
          <div key={img.src} className="collage-item" style={{ ...img.style, '--ratio': img.ratio }}>
            <Photo src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
      {collage.caption && <figcaption>{collage.caption}</figcaption>}
    </figure>
  )
}

// Del antes (fuentes dispersas) al después (un solo lugar), con una flecha al medio.
function Shift({ data }) {
  return (
    <div className="case-shift">
      <div className="shift-before">
        <p className="shift-label">{data.before.label}</p>
        <ul>
          {data.before.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="shift-arrow">
        <span aria-hidden="true">→</span>
        <p>{data.arrow}</p>
      </div>
      <div className="shift-after">
        <p className="shift-label">{data.after.label}</p>
        <div className="shift-card">
          {data.after.lines.map((line) => (
            <p key={line} className="shift-line">
              {line}
            </p>
          ))}
          <p className="shift-note">{data.after.text}</p>
        </div>
      </div>
    </div>
  )
}

// Ciclo de cuatro pasos en rombo (arriba, derecha, abajo, izquierda) con su explicación.
function Cycle({ cycle }) {
  return (
    <div className="case-cycle">
      <div className="cycle-diagram">
        <ol>
          {cycle.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        {['↗', '↘', '↙', '↖'].map((a) => (
          <span key={a} className="cycle-arrow" aria-hidden="true">
            {a}
          </span>
        ))}
      </div>
      <div className="cycle-text">
        <p className="cycle-label">{cycle.label}</p>
        <p className="cycle-title">{cycle.title}</p>
        <Paragraphs value={cycle.text} className="cycle-detail" />
      </div>
    </div>
  )
}

// Mockup completo y, al lado, un recorte ampliado con el área de atención marcada.
function Mockup({ mockup }) {
  const { zoom } = mockup
  return (
    <div className="case-mockup">
      <figure className="mockup-full" style={{ '--ratio': mockup.ratio }}>
        <figcaption className="mockup-label">{t.mockup}</figcaption>
        <Photo src={mockup.src} alt={mockup.alt} />
      </figure>
      {zoom && (
        <figure className="mockup-zoom">
          <p className="mockup-label" aria-hidden="true">
            {t.zoom}
          </p>
          <div className="zoom-frame" style={{ '--ratio': zoom.ratio }}>
            <Photo src={mockup.src} alt="" imgStyle={zoom.imgStyle} />
            {zoom.focus && <img className="zoom-focus" src={asset(zoom.focus)} alt="" style={zoom.focusStyle} />}
          </div>
          <figcaption>{zoom.caption}</figcaption>
        </figure>
      )}
    </div>
  )
}

function Note({ value }) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return (
      <div className="case-note-box">
        <p className="case-note-label">{value.label}</p>
        <p>{value.text}</p>
      </div>
    )
  }
  return <Paragraphs value={value} className="case-note" />
}

// Barras horizontales de una sola serie, con el valor escrito y la meta como línea punteada.
function Chart({ chart }) {
  const max = Math.max(chart.goal ?? 0, ...chart.items.map((d) => d.value))
  return (
    <figure className="case-chart">
      <figcaption>{chart.title}</figcaption>
      {chart.goal !== undefined && (
        <div className="chart-row chart-goal" aria-hidden="true">
          <span />
          <span style={{ width: `${(chart.goal / max) * 100}%` }}>{chart.goalLabel}</span>
        </div>
      )}
      <ul>
        {chart.items.map((d) => (
          <li key={d.label} className="chart-row">
            <span className="chart-label">{d.label}</span>
            <span className="chart-track" style={{ width: `${((chart.goal ?? max) / max) * 100}%` }}>
              <span className="chart-bar" style={{ width: `${(d.value / (chart.goal ?? max)) * 100}%` }} />
            </span>
            <span className="chart-value">{percent.format(d.value)}%</span>
          </li>
        ))}
      </ul>
    </figure>
  )
}

function Table({ table }) {
  return (
    <div className="case-table">
      <b className="case-label">{table.caption}</b>
      {table.rows.length === 0 ? (
        <p className="pending">{t.pending}</p>
      ) : (
        <table>
          <thead>
            <tr>
              {table.columns.map((col) => (
                <th key={col} scope="col">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

// Un elemento de lista: texto simple, { title, text } o, con tag, un bloque numerado
// que puede incluir la pregunta que responde, el cambio tras la prueba e imágenes.
function Item({ item, title: caseTitle }) {
  if (typeof item === 'string') return <li>{item}</li>

  if (!item.title && item.href) {
    return (
      <li>
        {item.text}{' '}
        <a className="case-link" href={item.href} target="_blank" rel="noreferrer">
          {item.href}
        </a>
      </li>
    )
  }
  if (!item.title) return <li>{item.text}</li>

  const title = item.href ? (
    <a href={item.href} target="_blank" rel="noreferrer">
      {item.title}
    </a>
  ) : (
    item.title
  )

  if (item.tag) {
    return (
      <li className={item.figure ? 'tagged has-figure' : 'tagged'}>
        <span className="case-tag" aria-hidden="true">
          {item.tag}
        </span>
        <strong>{title}</strong>
        <div className="tagged-body">
          {item.question && <p className="case-question">{item.question}</p>}
          <Paragraphs value={item.text} />
          {item.change && (
            <p>
              <b>{t.change}</b> {item.change}
            </p>
          )}
          <Gallery images={item.images} title={caseTitle} />
        </div>
        {item.mockup && <Mockup mockup={item.mockup} />}
        {item.figure && <Figure figure={item.figure} />}
      </li>
    )
  }

  return (
    <li>
      <span>
        <strong>{title}</strong> {item.text}
      </span>
      {item.points?.length > 0 && (
        <ul className="case-points">
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </li>
  )
}

// Contenido de una sección: string, lista de párrafos, lista de elementos u objeto
// { intro, steps, cards, items, questions, flow, chart, table, quotes, images, note }.
// Si no hay nada, muestra el aviso de contenido pendiente.
function Content({ value, title }) {
  const isList = Array.isArray(value) && value.some((v) => typeof v === 'object')
  const rich = isList ? { items: value } : value && typeof value === 'object' && !Array.isArray(value) ? value : null

  if (!rich) {
    if (toList(value).length === 0) return <p className="pending">{t.pending}</p>
    return <Paragraphs value={value} />
  }

  const {
    intro,
    steps = [],
    cards = [],
    items = [],
    numbered,
    questions = [],
    shift,
    cycle,
    flow,
    chart,
    comparison,
    table,
    quotes = [],
    images = [],
    figures = [],
    note,
  } = rich
  const empty =
    !intro &&
    !note &&
    !shift &&
    !cycle &&
    !flow &&
    !chart &&
    !comparison &&
    !table &&
    [steps, cards, items, questions, quotes, images, figures].every((l) => l.length === 0)
  if (empty) return <p className="pending">{t.pending}</p>

  return (
    <>
      <Paragraphs value={intro} />
      {shift && <Shift data={shift} />}
      {steps.length > 0 && (
        <ol className="case-steps">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      )}
      {cards.length > 0 && (
        <div className="case-cards">
          {cards.map((card) => (
            <div
              key={card.title}
              className={card.color ? 'note flat' : 'note'}
              style={card.color ? { background: `var(--${card.color})` } : undefined}
            >
              <b>{card.title}</b>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      )}
      {items.length > 0 && (
        <ul className={numbered ? 'case-list numbered' : 'case-list'}>
          {items.map((item, i) => (
            <Item key={i} item={item} title={title} />
          ))}
        </ul>
      )}
      {questions.length > 0 && (
        <>
          <b className="case-label case-questions-label">{t.questions}</b>
          <ul className="case-questions">
            {questions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </>
      )}
      {cycle && <Cycle cycle={cycle} />}
      {comparison && <Comparison data={comparison} />}
      <Figures figures={figures} />
      {flow && (
        <div className="case-flow">
          <b className="case-label">{flow.title}</b>
          <ol>
            {flow.steps.map((step) => (
              <li key={step}>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
      {chart && <Chart chart={chart} />}
      {table && <Table table={table} />}
      {quotes.length > 0 && (
        <div className="case-quotes">
          {quotes.map((q) => (
            <blockquote key={q.text}>
              <p>{q.text}</p>
              <footer>{q.author}</footer>
            </blockquote>
          ))}
        </div>
      )}
      <Gallery images={images} title={title} />
      <Note value={note} />
    </>
  )
}

function Block({ title, name, wideFigure, children }) {
  return (
    <div className={name ? `case-block case-${name}` : 'case-block'}>
      <h2>{title}</h2>
      <div className="case-text">{children}</div>
      {wideFigure && <Figure figure={wideFigure} wide />}
    </div>
  )
}

// Orden de las secciones. Las opcionales solo aparecen si el caso las define.
const SECTIONS = [
  { key: 'context' },
  { key: 'problem' },
  { key: 'role' },
  { key: 'process' },
  { key: 'findings', optional: true },
  { key: 'decisions', optional: true },
  { key: 'solution' },
  { key: 'results' },
  { key: 'learnings' },
  { key: 'publications', optional: true },
  { key: 'nextSteps', optional: true },
]

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
              <img src={arrow} alt="" />
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
  const summary = c.summary ?? {}
  const titleOf = (key) => c.titles?.[key] ?? t.sections[key]
  const index = projects.indexOf(project)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <Nav />
      <main className="case">
        <div className="wrap">
          <Link className="back" to="/#proyectos">
            <img src={arrow} alt="" />
            {t.back}
          </Link>

          <p className="case-meta">{project.meta}</p>
          <header className={summary.collage ? 'case-head no-cover' : 'case-head'}>
            <div>
              <h1>{project.title}</h1>
              <p className="sub">{project.description}</p>
              <Paragraphs value={summary.intro} className="case-intro" />
            </div>
            {!summary.collage && (
              <figure
                className="note case-cover"
                style={{ background: `var(--${project.coverColor ?? project.color})` }}
              >
                <Photo key={project.image} src={project.image} alt={project.imageAlt} />
              </figure>
            )}
          </header>

          {summary.facts?.length > 0 && (
            <dl className="case-facts" aria-label={t.summary}>
              {summary.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {summary.highlights?.length > 0 && (
            <ul className="case-stats">
              {summary.highlights.map((h) => (
                <li key={h.label}>
                  <strong>{h.value}</strong>
                  <span>{h.label}</span>
                </li>
              ))}
            </ul>
          )}

          {summary.collage && <Collage collage={summary.collage} />}

          {SECTIONS.filter((s) => !s.optional || c[s.key] !== undefined).map((s) => (
            <Block key={s.key} name={s.key} title={titleOf(s.key)} wideFigure={c[s.key]?.wideFigure}>
              <Content value={c[s.key]} title={project.title} />
              {s.key === 'process' && c.methods?.length > 0 && (
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
          ))}

          {c.images.length > 0 && (
            <Block title={titleOf('images')}>
              <Gallery images={c.images} title={project.title} />
            </Block>
          )}

          {c.cta && (
            <p className="case-cta">
              {c.cta.text} <a href={`mailto:${site.email}`}>{c.cta.link}</a>
            </p>
          )}

          <Link className="card case-next" to={`/proyecto/${next.slug}`} style={{ background: `var(--${next.color})` }}>
            <small>{t.next}</small>
            <h3>{next.title}</h3>
            <p>{next.description}</p>
          </Link>
        </div>
      </main>
    </>
  )
}
