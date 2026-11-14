// Proyectos del portfolio.
//
// - color: nota de fondo de la tarjeta (sage, lilac, peach, steel, butter). Define también su inclinación.
// - image: imagen de la tarjeta y portada del caso de estudio (dentro de public/).
// - caseStudy: contenido del caso. Cada campo de texto acepta un string o una lista de párrafos.
//   Los campos vacíos se muestran como "Contenido pendiente." No inventar métricas ni resultados:
//   completar solo con datos del CV o de los casos entregados por Sofia.

const emptyCase = (slug) => ({
  context: '',
  problem: '',
  role: '',
  process: '',
  methods: [],
  solution: '',
  results: '',
  learnings: '',
  images: [
    { src: `assets/${slug}-1.jpg`, alt: '' },
    { src: `assets/${slug}-2.jpg`, alt: '' },
  ],
})

export const projects = [
  {
    slug: 'che-roga-pora-exterior',
    title: 'Che Roga Porã',
    meta: '2025 · Web · Vivienda',
    description: 'Solicitud de crédito de vivienda desde el exterior',
    color: 'sage',
    image: 'assets/che-roga-pora.jpg',
    imageAlt: 'Flujo de solicitud de crédito desde el exterior',
    caseStudy: emptyCase('che-roga-pora-exterior'),
  },
  {
    slug: 'marketplace-che-roga-pora',
    title: 'Marketplace Che Roga Porã',
    meta: 'En curso · Web · Marketplace',
    description: 'Catálogo de viviendas y backoffice para constructoras',
    color: 'lilac',
    image: 'assets/marketplace.jpg',
    imageAlt: 'Marketplace de viviendas',
    caseStudy: emptyCase('marketplace-che-roga-pora'),
  },
  {
    slug: 'salud-ocupacional',
    title: 'Salud ocupacional',
    meta: 'Web · Recursos humanos · WhatsApp',
    description: 'Agendamiento automático de citas médicas',
    color: 'peach',
    image: 'assets/salud-ocupacional.jpg',
    imageAlt: 'Agendamiento de citas médicas',
    caseStudy: emptyCase('salud-ocupacional'),
  },
  {
    slug: 'talentview-tracker',
    title: 'TalentView Tracker',
    meta: 'Dashboard · Power BI · B2B',
    description: 'KPIs de staffing en tiempo real',
    color: 'steel',
    image: 'assets/talentview.jpg',
    imageAlt: 'Dashboard TalentView Tracker',
    caseStudy: emptyCase('talentview-tracker'),
  },
  {
    slug: 'topadengue',
    title: 'TopaDengue',
    meta: '2018–2020 · Investigación HCI · Cívica',
    description: 'Tecnología cívica para prevenir el dengue',
    color: 'butter',
    image: 'assets/topadengue.jpg',
    imageAlt: 'Plataforma DengueChat',
    caseStudy: emptyCase('topadengue'),
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
