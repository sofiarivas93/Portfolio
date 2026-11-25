// Textos del sitio. Centralizados aquí para poder agregar la versión en inglés más adelante.

export const site = {
  name: 'Sofia Rivas',
  title: 'Sofia Rivas — Product Designer e Ingeniera de Software',
  email: 'sofiarivas1993@gmail.com',
  cv: 'assets/Sofia-Rivas-CV.pdf',
  footer: '© 2026 Sofia Rivas',
}

export const nav = {
  ariaLabel: 'Principal',
  sections: [
    { id: 'inicio', label: 'Inicio', dot: 'hola' },
    { id: 'proyectos', label: 'Proyectos', dot: 'proyectos' },
    { id: 'sobre-mi', label: 'Sobre mí', dot: 'sobre mí' },
  ],
}

export const hero = {
  hello: 'Hola, soy Sofia',
  title: 'Diseño experiencias…',
  sub: 'Donde las necesidades de las personas y los objetivos del negocio se encuentran.',
  // color: fondo de la tarjeta (rose, sage-deep, mustard; ver styles.css).
  skills: [
    { title: 'Diseño', text: 'Diseño que se puede construir.', color: 'rose' },
    { title: 'Investigación', text: 'Validación de decisiones con usuarios.', color: 'sage-deep' },
    { title: 'Accesibilidad', text: 'Accesibilidad (WCAG 2.1).', color: 'mustard' },
  ],
  photo: {
    src: 'assets/sofia-hero.jpg',
    alt: 'Sofia Rivas sonriendo, sentada en un sofá azul junto a un ventanal',
    caption: 'Figma offices, San Francisco, EE. UU.',
  },
  best: {
    title: 'Lo que mejor hago:',
    items: [
      'Flujos empresariales complejos',
      'Validación de decisiones con usuarios',
      'Diseño que se puede construir',
      'Accesibilidad (WCAG 2.1)',
    ],
  },
}

export const projectsSection = {
  title: 'Proyectos',
  lead: 'Algunos de los proyectos en los que he trabajado…',
  open: 'Ver caso de estudio →',
}

export const about = {
  title: 'Sobre mí',
  paragraphs: [
    'Tengo más de 8 años de experiencia diseñando y desarrollando productos digitales para los sectores financiero, de salud, público y educativo.',
    'Combino mis conocimientos en desarrollo, diseño de producto e investigación para crear experiencias que mejoren la vida de los usuarios.',
  ],
  cta: '¿Tienes una idea para un proyecto? ¡Trabajemos juntos!',
  email: 'Email',
  // TODO: data-todo marca los enlaces pendientes de confirmar.
  links: [
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      href: 'https://www.linkedin.com/in/sofianoeliarivas',
      todo: 'Verifica esta URL de LinkedIn',
    },
    {
      label: 'Behance',
      icon: 'behance',
      href: 'https://www.behance.net/',
      todo: 'Reemplaza con tu perfil de Behance',
    },
  ],
  cvLink: 'Descarga mi CV ↓',
  photo: {
    src: 'assets/sofia.jpg',
    alt: 'Sofia Rivas en Figma Config 2026',
    caption: 'Figma Config 2026, San Francisco',
  },
  career: {
    title: 'Trayectoria',
    items: [
      { role: 'Product Designer', place: 'ITTI SAE' },
      { role: 'UX/UI Designer', place: 'ONNIX y MentorMate LATAM' },
      { role: 'Front End Developer', place: 'MentorMate LATAM' },
      { role: 'Ing. en Informática', place: 'Universidad Nacional de Asunción' },
    ],
  },
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
    findings: 'Descubrimientos',
    decisions: 'Decisiones de diseño',
    solution: 'Solución',
    results: 'Resultados',
    learnings: 'Aprendizajes',
    publications: 'Publicaciones',
    nextSteps: 'Siguientes pasos',
    images: 'Imágenes',
  },
  summary: 'Resumen del proyecto',
  methods: 'Métodos',
  change: 'Cambios tras la prueba:',
  next: 'Siguiente proyecto',
  notFound: {
    title: 'No encontré este proyecto.',
    text: 'Puede que el enlace esté mal escrito o que el proyecto ya no exista.',
  },
}
