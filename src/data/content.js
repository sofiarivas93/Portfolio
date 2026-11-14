// Textos del sitio. Centralizados aquí para poder agregar la versión en inglés más adelante.

export const site = {
  name: 'Sofia Rivas',
  title: 'Sofia Rivas — Product Designer e Ingeniera de Software',
  email: 'sofiarivas1993@gmail.com',
  cv: 'assets/Sofia-Rivas-CV.pdf',
}

export const nav = {
  ariaLabel: 'Principal',
  cv: 'CV ↓',
  sections: [
    { id: 'inicio', label: 'Inicio', dot: 'hola' },
    { id: 'proyectos', label: 'Proyectos', dot: 'proyectos' },
    { id: 'sobre-mi', label: 'Sobre mí', dot: 'sobre mí' },
  ],
}

export const hero = {
  hello: 'Hola, soy Sofia',
  title: 'Diseño experiencias donde las necesidades de las personas y los objetivos del negocio se encuentran.',
  photo: {
    src: 'assets/sofia-hero.jpg',
    alt: 'Sofia Rivas sonriendo, sentada en un sofá azul junto a un ventanal',
    caption: 'Figma offices, San Francisco, EE. UU.',
  },
  recent: {
    title: 'Lo que mejor hago:',
    items: [
      'Flujos empresariales complejos',
      'Decisiones validadas con usuarios',
      'Diseño que se puede construir',
      'Accesibilidad (WCAG 2.1)',
    ],
    footnote: 'Product Designer, Paraguay',
  },
}

export const about = {
  title: 'Sobre mí',
  // El párrafo 2 incluye el nombre de la revista en cursiva; ver About.jsx.
  intro:
    'Tengo más de 8 años de experiencia diseñando y desarrollando productos digitales para los sectores financiero, de salud, público y educativo.',
  research: {
    before:
      'Combino diseño de producto, investigación en interacción humano-computadora y desarrollo front-end. Mi investigación sobre DengueChat, una iniciativa de tecnología cívica, se publicó en ',
    journal: 'American Behavioral Scientist',
    after: '.',
  },
  cvLink: 'Descargar mi CV ↓',
  quote: {
    text: 'Diseño flujos complejos y los llevo hasta que funcionan en la práctica.',
    footnote: 'Finanzas, salud, sector público',
  },
  photo: {
    src: 'assets/sofia.jpg',
    alt: 'Retrato de Sofia Rivas',
    caption: 'Sofia Rivas, Paraguay',
  },
  career: {
    title: 'Trayectoria',
    items: [
      { role: 'Product Designer', place: 'ITTI' },
      { role: 'UX/UI Designer', place: 'ONNIX y MentorMate LATAM' },
      { role: 'Ing. en Informática', place: 'Universidad Nacional de Asunción' },
    ],
  },
  strengths: {
    title: 'Mis fortalezas',
    items: [
      'Flujos empresariales complejos',
      'Investigación UX y HCI',
      'Accesibilidad WCAG 2.1',
      'Diseño y front-end con React',
    ],
  },
}

export const projectsSection = {
  title: 'Proyectos',
  lead: 'Haz clic en un proyecto para leer el caso de estudio completo.',
  open: 'abrir ↗',
}

export const contact = {
  title: '¿Hablamos?',
  sub: 'Cuéntame en qué estás trabajando. Respondo en español e inglés.',
  cvButton: 'Descargar CV',
  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sofianoeliarivas',
      todo: 'Verifica esta URL de LinkedIn',
    },
    {
      label: 'Behance',
      href: 'https://www.behance.net/',
      todo: 'Reemplaza con tu perfil de Behance',
    },
  ],
  footer: '© 2026 Sofia Rivas',
}

export const caseStudy = {
  back: '← Volver a proyectos',
  role: 'Mi rol',
  pending: 'Contenido pendiente.',
  sections: {
    context: 'Contexto',
    problem: 'Problema',
    role: 'Mi rol',
    process: 'Proceso',
    solution: 'Solución',
    results: 'Resultados',
    learnings: 'Aprendizajes',
    images: 'Imágenes',
  },
  methods: 'Métodos',
  next: 'Siguiente proyecto',
  notFound: {
    title: 'No encontré este proyecto.',
    text: 'Puede que el enlace esté mal escrito o que el proyecto ya no exista.',
  },
}
