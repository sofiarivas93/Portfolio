// Proyectos del portfolio.
//
// - color: nota de fondo de la tarjeta (sage, lilac, peach, steel, butter). Define también su inclinación.
// - featured: posición en la home (1, 2, …). discipline, headline, summary y coverColor son los textos y el color de esa tarjeta.
// - image: imagen de la tarjeta y portada del caso de estudio (dentro de public/).
// - caseStudy: contenido del caso. Cada sección acepta:
//     - un string o una lista de párrafos, o
//     - un objeto { intro, items, questions, note }. intro: párrafo(s). items: lista de strings o de
//       { title, text, tag }. questions: preguntas "¿Cómo podríamos…?". note: aclaración al final.
//   summary (opcional): { intro, facts: [{ label, value }], highlights: [{ value, label }] }.
//   findings, decisions, publications y nextSteps son secciones opcionales: solo se muestran si existen.
//   flow: { title, steps } muestra estados en línea con flechas (por ejemplo, un ciclo de vida).
//   steps: lista numerada (por ejemplo, los pasos de un flujo). Un item { title, text } acepta points,
//   una lista de viñetas debajo del texto.
//   El objeto de una sección también acepta cards ([{ title, text }]), chart ({ title, goal, goalLabel,
//   items: [{ label, value }] }), table ({ caption, columns, rows }), quotes ([{ text, author }]) e
//   images ([{ src, alt, caption }]). Un item con tag acepta además question, change e images.
//   Figuras con marco de color (sin inclinar): figures ([{ src, alt, bg, fit, ratio, imgStyle }]) va dentro
//   del texto; wideFigure ocupa el ancho completo de la sección; un item con tag acepta figure, que va a
//   su derecha. bg: variable de color (mocha, mustard…; por defecto paper). fit: 'cover' (por defecto) o
//   'contain'. ratio: proporción de la imagen (si falta, alto fijo de 225px). imgStyle: recorte manual.
//   numbered: true numera los items en círculos. comparison: { value, text, items: [{ label, value }] }
//   compara porcentajes con barras. note también acepta { label, text } para mostrarla en un recuadro.
//   summary.collage ({ caption, images: [{ src, alt, ratio, style }] }) reemplaza la portada por un collage
//   de mockups bajo los datos del resumen. shift ({ before: { label, items }, arrow, after: { label, lines,
//   text } }) muestra el antes y el después. cycle ({ steps, label, title, text }) dibuja un ciclo de 4 pasos.
//   Un item con tag acepta mockup ({ src, alt, ratio, zoom: { caption, ratio, imgStyle, focus, focusStyle } }):
//   el mockup completo y un recorte ampliado con el área de atención. Una card acepta color (fondo plano).
//   Un item { text, href } sin title muestra el texto seguido del enlace (por ejemplo, publicaciones).
//   titles (opcional) reemplaza el título de una sección, por ejemplo { solution: 'Tres intervenciones' }.
//   cta (opcional): { text, link } al final del caso; el enlace abre el correo.
//   images: galería final. Si está vacía, no se muestra la sección Imágenes.
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
    title: 'Che Róga Porã',
    meta: '2025 — 2026 · Web · B2G',
    description: 'Crédito de vivienda para paraguayos en el exterior.',
    featured: 2,
    discipline: 'Product design',
    headline: 'Crédito de vivienda para paraguayos en el exterior',
    summary: 'Un rediseño pensado para hacer un proceso complejo algo sencillo.',
    color: 'sage',
    coverColor: 'rose',
    image: 'assets/che-roga-pora.jpg',
    imageAlt: 'Hero de la landing: "Tu casa propia, estés donde estés"',
    caseStudy: {
      summary: {
        intro:
          'Rediseñé la solicitud de crédito de un programa de vivienda del Gobierno para que una persona en Estados Unidos o España pueda completarla desde donde vive.',
        facts: [
          { label: 'Rol', value: 'Única diseñadora de producto' },
          { label: 'Equipo', value: 'ITTI, con Project Manager, Tech Lead y analistas' },
          {
            label: 'Clientes',
            value: 'Agencia Financiera de Desarrollo (AFD) y entidades financieras del programa',
          },
          { label: 'Período', value: '2025–2026' },
        ],
        highlights: [
          { value: '2', label: 'países de lanzamiento' },
          { value: '880', label: 'postulaciones iniciadas (marzo de 2026)' },
          { value: '31', label: 'créditos preaprobados (marzo de 2026)' },
        ],
      },
      titles: { results: 'Qué aprendí probando' },
      context:
        'Che Róga Porã es un programa del Gobierno del Paraguay, a cargo del Ministerio de Urbanismo, Vivienda y Hábitat, que busca enfrentar el déficit habitacional y permitir que familias sin acceso a préstamos en el sistema financiero tengan su casa propia. Con su extensión al exterior, el Estado presentó por primera vez una propuesta concreta para los compatriotas que viven fuera.',
      problem: {
        intro:
          'Para ellos, la solicitud suma requisitos. Deben tener ingresos formales en su país de residencia, con documentos apostillados o legalizados por el consulado. Necesitan un codeudor residente en Paraguay y una forma de firmar, en persona o por un apoderado con carta poder. Además, sus teléfonos tienen prefijos de otro país y su cédula puede estar vencida después de años afuera.',
        questions: ['¿Cómo podemos pedir más requisitos a quien está lejos, sin que abandone la solicitud?'],
        images: [
          { src: 'assets/che-roga-pora-exterior-requisitos.jpg', alt: 'Sección de la landing: Requisitos Clave del Solicitante (Compatriota en el Extranjero)', caption: 'Requisitos clave del solicitante en la landing' },
        ],
      },
      role: 'Soy la única diseñadora del proyecto. Trabajo de cerca con el Project Manager, el Tech Lead y los analistas, y tengo reuniones periódicas con las entidades de la AFD y con representantes de las entidades financieras del programa.',
      process: {
        items: [
          'Mapeé el recorrido del usuario paraguayo con un customer journey, como base para ver dónde cambia el flujo de quien vive afuera.',
          'Me reuní con gerentes de préstamos para saber qué documentos exigirían sí o sí.',
          'Diseñé varias versiones del flujo, con los documentos pedidos en distinto orden.',
          'Hice demos de avance con los clientes y ajusté el mensaje y el flujo en cada reunión.',
          'Probé ambos flujos, el tradicional y el del exterior, de manera informal con compañeros de la oficina ajenos al proyecto. Cada persona recorrió uno de los dos.',
        ],
        images: [
          { src: 'assets/che-roga-pora-exterior-customer-journey.jpg', alt: 'Customer journey del usuario paraguayo', caption: 'Customer journey' },
          { src: 'assets/che-roga-pora-exterior-variantes.jpg', alt: 'Esquema de las variantes del flujo', caption: 'Variantes del flujo' },
        ],
      },
      methods: [],
      decisions: {
        items: [
          {
            title: 'Explicar antes de pedir.',
            text: 'Al principio nadie sabía con certeza qué documentación sería obligatoria. Cuando las entidades financieras acordaron la lista final, escribí la landing con los requisitos y la revisé varias veces con el cliente hasta que fuera clara, simple y completa.',
          },
          {
            title: 'Adaptar el flujo a quien vive afuera.',
            text: '',
            points: [
              'Se pregunta el país de residencia primero, y según eso el código de verificación va a un número +1 o +34.',
              'La selfie se compara con la primera hoja del pasaporte en lugar de la cédula, porque la cédula puede no estar actualizada y el pasaporte sí.',
              'Los datos personales se completan a mano, ya que no hay foto de cédula de la que extraerlos.',
            ],
          },
          {
            title: 'Un orden intuitivo.',
            text: 'Entre las variantes que comparé, elegí pedir primero todo lo que corresponde al solicitante (sus datos y documentos), luego sus ingresos, que también son parte de sus datos, y al final el representante legal y el codeudor.',
          },
          {
            title: 'Reducir el abandono.',
            text: 'Subí a 10 minutos el tiempo antes de cerrar la sesión, porque encontrar y subir un documento puede llevar varios minutos.',
          },
          {
            title: 'Pedir lo mínimo a terceros.',
            text: 'Con los clientes decidimos pedir un solo codeudor y acordamos qué datos solicitar del codeudor y del representante legal.',
          },
        ],
        images: [
          { src: 'assets/che-roga-pora-exterior-paso-tradicional.jpg', alt: 'Un mismo paso en la versión tradicional', caption: 'Versión tradicional' },
          { src: 'assets/che-roga-pora-exterior-paso-exterior.jpg', alt: 'El mismo paso en la versión para quien vive en el exterior', caption: 'Versión para el exterior' },
        ],
      },
      solution: {
        intro: 'Flujo para el solicitante:',
        steps: [
          'País de residencia y verificación del celular con prefijo internacional',
          'Selfie y foto de la primera hoja del pasaporte',
          'Datos de identidad',
          'Fotos de la cédula y, opcional, del documento de residencia legal',
          'Comprobantes de ingresos',
          'Firma personal o representante legal',
          'Datos del representante y carta poder, si corresponde',
          'Datos del codeudor',
          'Desde aquí se suma al flujo común: ubicación de la vivienda, constructora y entidad financiera',
        ],
        items: [
          {
            title: 'Backoffice.',
            text: 'Las solicitudes del exterior llegan a un menú independiente, porque tienen un tratamiento particular. Cuando se aprueban pasan a la bandeja general, donde un identificador de país junto al número de documento indica de dónde viene cada una.',
          },
        ],
        images: [
          { src: 'assets/che-roga-pora-exterior-paso-1.jpg', alt: 'Paso 1: país de residencia y verificación del celular', caption: '1. País de residencia y verificación' },
          { src: 'assets/che-roga-pora-exterior-paso-2.jpg', alt: 'Paso 2: selfie y foto de la primera hoja del pasaporte', caption: '2. Selfie y pasaporte' },
          { src: 'assets/che-roga-pora-exterior-paso-3.jpg', alt: 'Paso 3: datos de identidad', caption: '3. Datos de identidad' },
          { src: 'assets/che-roga-pora-exterior-paso-4.jpg', alt: 'Paso 4: fotos de la cédula y del documento de residencia legal', caption: '4. Cédula y residencia legal' },
          { src: 'assets/che-roga-pora-exterior-paso-5.jpg', alt: 'Paso 5: comprobantes de ingresos', caption: '5. Comprobantes de ingresos' },
          { src: 'assets/che-roga-pora-exterior-paso-6.jpg', alt: 'Paso 6: firma personal o representante legal', caption: '6. Firma o representante legal' },
          { src: 'assets/che-roga-pora-exterior-paso-7.jpg', alt: 'Paso 7: datos del representante y carta poder', caption: '7. Representante y carta poder' },
          { src: 'assets/che-roga-pora-exterior-paso-8.jpg', alt: 'Paso 8: datos del codeudor', caption: '8. Codeudor' },
          { src: 'assets/che-roga-pora-exterior-backoffice.jpg', alt: 'Bandeja de solicitudes aprobadas con banderas y filtro de país', caption: 'Backoffice: solicitudes aprobadas' },
        ],
      },
      results: {
        intro: 'Las pruebas con compañeros mostraron dos fricciones que cambiaron el diseño.',
        items: [
          {
            title: 'Comprobante de ingresos: nadie sabía qué subir.',
            text: 'Muchas personas se detenían en esa pantalla porque no sabían qué documento era válido, y no recordaban el texto de la landing. Primero agregué un tooltip de ayuda, pero no resolvió el problema: la gente seguía bloqueada y lo ignoraba. Entonces puse en la pantalla un texto visible con los documentos aceptados, y en las pruebas siguientes las personas pudieron completar el paso.',
          },
          {
            title: 'Correo del codeudor y del representante: un campo que bloqueaba.',
            text: 'Varios usuarios no podían completarlo. Lo validé con las entidades financieras, que confirmaron que no era imprescindible porque el celular alcanzaba. Dejó de ser obligatorio.',
          },
          {
            title: 'Resultado del programa:',
            text: 'se informaron 880 postulaciones iniciadas y 31 créditos preaprobados, 26 de ellos en España. La plataforma que diseñé es parte de ese resultado, junto con el trabajo del Ministerio y las giras informativas.',
          },
        ],
        images: [
          { src: 'assets/che-roga-pora-exterior-ingresos-tooltip.jpg', alt: 'Pantalla de comprobantes de ingresos con tooltip de ayuda', caption: 'Antes: ayuda en un tooltip' },
          { src: 'assets/che-roga-pora-exterior-ingresos-texto.jpg', alt: 'Pantalla de comprobantes de ingresos con el texto visible de documentos aceptados', caption: 'Después: documentos aceptados a la vista' },
          { src: 'assets/che-roga-pora-exterior-representante.jpg', alt: 'Pantalla del representante legal con el correo opcional', caption: 'Representante: correo opcional' },
          { src: 'assets/che-roga-pora-exterior-codeudor.jpg', alt: 'Pantalla del codeudor con el correo opcional', caption: 'Codeudor: correo opcional' },
        ],
      },
      learnings: {
        items: [
          {
            title: 'Un tooltip no reemplaza al texto visible.',
            text: 'Si la información es necesaria para avanzar, tiene que estar a la vista.',
          },
          'Pedir más a quien está lejos exige explicar primero qué se pide y por qué.',
          'Validar con el negocio qué es imprescindible permite quitar campos que solo generan fricción.',
          'El contexto de cada persona cambia el diseño, como el prefijo del teléfono o el pasaporte en lugar de la cédula.',
          'Un cambio para usuarios también lo es para quienes operan el backoffice.',
        ],
      },
      nextSteps:
        'Extender la oportunidad a más países, algo que la propia landing anuncia, y probar el flujo con paraguayos que vivan afuera.',
      images: [],
    },
  },
  {
    slug: 'marketplace-che-roga-pora',
    title: 'Marketplace Che Róga Porã',
    meta: '2026 — En curso · Web · B2G',
    description: 'Un solo lugar para encontrar una vivienda o una constructora y pedir el crédito.',
    featured: 1,
    discipline: 'Product design',
    headline: 'Una experiencia completa para encontrar tu nuevo hogar y completar la solicitud de crédito',
    summary: 'Dos sistemas separados que se fusionan para crear una única experiencia de adquisición.',
    color: 'lilac',
    coverColor: 'line',
    image: 'assets/marketplace.jpg',
    imageAlt: 'Home del Marketplace, con el buscador sobre el hero y las propiedades nuevas',
    caseStudy: {
      summary: {
        intro:
          'Integré la búsqueda de vivienda con la solicitud de crédito del programa. Quien encuentra una casa que le gusta inicia su solicitud desde ahí, sin volver a cargar datos de la vivienda ni de la constructora.',
        // TODO: agregar el período cuando Sofia lo confirme.
        facts: [
          { label: 'Rol', value: 'Única diseñadora' },
          { label: 'Equipo', value: 'ITTI, con Project Manager, Tech Lead y analistas' },
          { label: 'Usuarios', value: 'Ciudadanos, constructoras, MUVH, AFD y entidades financieras' },
          { label: 'Estado', value: 'Diseño aprobado, en desarrollo' },
        ],
        highlights: [
          { value: '5', label: 'tipos de usuario' },
          { value: '1', label: 'recorrido continuo, de la búsqueda al crédito' },
        ],
      },
      titles: {
        findings: 'Lo que aprendí de las reuniones',
        solution: 'Decisiones de diseño y solución',
        results: 'Estado',
      },
      context:
        'La solicitud de crédito de Che Róga Porã se hace en una landing, en pocos pasos: elegir el destino del crédito (vivienda terminada, terreno y construcción, construcción en terreno propio o reforma), cargar datos básicos con verificación por celular, validar la identidad con una selfie y fotos de la cédula, elegir la ubicación, indicar la constructora, adjuntar la documentación según el destino y elegir la entidad financiera. Detrás hay cinco backoffices: MUVH, constructoras, AFD, entidades financieras y uno general.',
      problem: {
        intro:
          'El Ministerio ya tenía un sitio con las constructoras aprobadas en el programa, es decir, que pasaron por un catastro que verifica que son empresas de construcción reales. Allí cargaban sus proyectos por destino. Pero ese sitio era independiente del de solicitudes. Quien encontraba una vivienda tenía que empezar de cero en otro lugar y volver a indicar la constructora y los datos de la casa.',
        questions: [
          '¿Cómo conectamos la búsqueda de una vivienda con la solicitud del crédito, para que nadie tenga que cargar dos veces lo que ya sabemos?',
        ],
        images: [
          { src: 'assets/marketplace-che-roga-pora-antes-despues.jpg', alt: 'Diagrama del antes, con dos sitios separados, y del después, con un solo recorrido', caption: 'Antes: dos sitios. Después: un recorrido' },
          { src: 'assets/marketplace-che-roga-pora-flujo.jpg', alt: 'Flujo de solicitud de 8 pasos, con los pasos que ahora se completan solos', caption: 'Los pasos que ahora se completan solos' },
        ],
      },
      role: 'Soy la única diseñadora del proyecto. Trabajo de cerca con el Project Manager, el Tech Lead y los analistas, y con los clientes: usuarios de la AFD, del MUVH y de las entidades financieras.',
      process: {
        items: [
          {
            title: 'Entender el catastro.',
            text: 'Hablé con usuarios de la AFD, que me explicaron cómo se aprueban las constructoras.',
          },
          {
            title: 'Presentar la idea.',
            text: 'Me reuní con representantes de las entidades financieras para explicarles el concepto.',
          },
          {
            title: 'Mostrar prototipos.',
            text: 'Les presenté en Figma la landing y los flujos de solicitud, y ajusté el diseño con lo que surgió en cada reunión.',
          },
        ],
        images: [
          { src: 'assets/marketplace-che-roga-pora-actores.jpg', alt: 'Mapa de actores y backoffices', caption: 'Actores y backoffices' },
          { src: 'assets/marketplace-che-roga-pora-prototipo.jpg', alt: 'Prototipo en Figma presentado a los clientes', caption: 'Prototipo en Figma' },
        ],
      },
      methods: [],
      findings: {
        intro: 'Tres hallazgos cambiaron el diseño:',
        items: [
          { title: 'Una constructora no es un solo contacto.', text: 'Puede tener varios comerciales asignados.' },
          {
            title: 'No todos quieren un proyecto del catálogo.',
            text: 'Quien ya tiene su propio plano puede querer trabajar con una constructora y pedir el crédito. Había que dejar contactarla directamente.',
          },
          {
            title: 'La cobertura geográfica importa.',
            text: 'Cada constructora define dónde puede construir. Eso permitió un buscador por departamento y ciudad, que lleva a la persona a viviendas o constructoras que sirven para el lugar donde quiere vivir.',
          },
        ],
        images: [
          { src: 'assets/marketplace-che-roga-pora-perfil-comerciales.jpg', alt: 'Perfil de la constructora con tres comerciales y su cobertura geográfica', caption: 'Varios comerciales y cobertura geográfica' },
        ],
      },
      solution: {
        items: [
          {
            title: 'Encontrar y solicitar en el mismo lugar.',
            text: 'Cada ficha tiene un botón "Solicitar crédito". Como el sistema ya conoce la vivienda y la constructora, el flujo de solicitud deja de pedir esos datos.',
          },
          {
            title: 'Búsqueda por ubicación y destino.',
            text: 'Desde la home, por destino de compra, tipo de vivienda y ubicación. En el catálogo, con filtros por tipo de propiedad, habitaciones, destino y rango de precio.',
          },
          // TODO: Sofia marcó este punto como "[confirmar]".
          {
            title: 'Una ficha que se adapta al destino.',
            text: 'Las viviendas terminadas muestran su ubicación en el mapa. Las de construcción en terreno propio muestran la cobertura geográfica, porque se construyen donde la persona tiene su terreno.',
          },
          {
            title: 'Datos de contacto claros.',
            text: 'La constructora muestra RUC, teléfono y correo, y puede tener varios comerciales como contacto para consultas o visitas.',
          },
          {
            title: 'Perfil de la constructora.',
            text: 'Reúne comerciales, cobertura y proyectos. Permite contactarla por WhatsApp aunque la persona no haya elegido un proyecto.',
          },
          {
            title: 'Evitar que una misma vivienda se venda dos veces.',
            text: 'Para vivienda terminada y terreno más construcción, cuando una solicitud llega al estado "vendido", el proyecto se despublica del Marketplace.',
          },
          'Del lado de la constructora, un backoffice para cargar proyectos, guardar borradores, publicar y seguir su estado: activo, vendido, borrador, inactivo o cancelado por el MUVH.',
        ],
        flow: { title: 'Ciclo de vida de un proyecto', steps: ['Borrador', 'Activo', 'Vendido', 'Despublicado'] },
        images: [
          { src: 'assets/marketplace-che-roga-pora-catalogo.jpg', alt: 'Catálogo de viviendas con filtros', caption: 'Catálogo con filtros' },
          { src: 'assets/marketplace-che-roga-pora-ficha-terminada.jpg', alt: 'Ficha de vivienda terminada con ubicación en el mapa', caption: 'Ficha: vivienda terminada' },
          { src: 'assets/marketplace-che-roga-pora-ficha-terreno-construccion.jpg', alt: 'Ficha de terreno y construcción', caption: 'Ficha: terreno y construcción' },
          { src: 'assets/marketplace-che-roga-pora-ficha-terreno-propio.jpg', alt: 'Ficha de construcción en terreno propio con cobertura geográfica', caption: 'Ficha: construir en tu terreno' },
          { src: 'assets/marketplace-che-roga-pora-constructoras.jpg', alt: 'Listado de constructoras', caption: 'Listado de constructoras' },
          { src: 'assets/marketplace-che-roga-pora-perfil-constructora.jpg', alt: 'Perfil de una constructora', caption: 'Perfil de constructora' },
          { src: 'assets/marketplace-che-roga-pora-agregar-proyecto.jpg', alt: 'Formulario Agregar proyecto del backoffice de constructoras', caption: 'Backoffice: agregar proyecto' },
          { src: 'assets/marketplace-che-roga-pora-estados.jpg', alt: 'Listado de proyectos con sus estados en el backoffice', caption: 'Backoffice: estados de los proyectos' },
        ],
      },
      results:
        'El diseño está aprobado por los clientes y en desarrollo, por lo que todavía no hay métricas de uso. Su evidencia, por ahora, es el proceso: se construyó con las personas que lo usarán.',
      learnings: {
        items: [
          { title: 'Integrar es quitar pasos.', text: 'Lo que el sistema ya sabe no se vuelve a pedir.' },
          {
            title: 'La realidad del negocio cambia el modelo, no solo la pantalla.',
            text: 'Varios comerciales por constructora y la cobertura geográfica salieron de las reuniones.',
          },
          {
            title: 'Hay que diseñar el ciclo de vida del contenido.',
            text: 'Publicar, vender y despublicar evita un error que la persona sufriría después.',
          },
          {
            title: 'Un marketplace tiene dos lados.',
            text: 'La experiencia de quien busca depende de la de quien publica.',
          },
        ],
      },
      // TODO: el texto original marca este paso como "(propuesta mía)"; confirmar con Sofia.
      nextSteps:
        'Probar el recorrido completo con ciudadanos antes del lanzamiento y medir cuántos llegan de la búsqueda a la solicitud.',
      images: [],
    },
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
    slug: 'staffing-cockpit',
    title: 'Staffing Cockpit',
    meta: '2023 — 2024 · Dashboard · Power BI · B2B',
    description: 'Decisiones de staffing con datos claros, en un solo tablero.',
    featured: 3,
    discipline: 'Product design',
    headline: 'Decisiones de staffing con datos claros, en un solo dashboard',
    summary: 'Una experiencia que conecta personas y tecnología.',
    color: 'steel',
    coverColor: 'sage-deep',
    image: 'assets/staffing-cockpit.jpg',
    imageAlt: 'Collage de las cuatro vistas del tablero en Power BI, con la vista de costos y posiciones al frente',
    caseStudy: {
      summary: {
        intro:
          'Staffing y operaciones medían sus indicadores después de los hechos y con información dispersa. Diseñé un tablero en Power BI que reúne disponibilidad, banca, KPIs de colocación y demanda, y lo validé con usuarios antes de construir cada vista.',
        facts: [
          { label: 'Rol', value: 'UX/UI Designer' },
          { label: 'Período', value: '2023–2024' },
          { label: 'Herramientas', value: 'Figma, Power BI, Jira, Google Forms' },
        ],
        highlights: [
          { value: '4', label: 'Dashboards' },
          { value: '4', label: 'Rondas de pruebas de usabilidad' },
          { value: '28', label: 'Participantes' },
        ],
        // Posiciones del diseño en Figma, en % de un lienzo de 1120 × 653.
        collage: {
          images: [
            {
              src: 'assets/staffing-cockpit-collage-1.png',
              alt: 'Mockup de la vista de disponibilidad en FTE, con filtros a la izquierda y tablas de resumen y detalle',
              ratio: '1600 / 1124',
              style: { left: '2.5%', top: '5.67%', width: '44.29%' },
            },
            {
              src: 'assets/staffing-cockpit-collage-2.png',
              alt: 'Mockup del mapa de calor de banca por región y nivel, semana a semana',
              ratio: '1600 / 1259',
              style: { left: '53.04%', top: '5.67%', width: '44.38%' },
            },
            {
              src: 'assets/staffing-cockpit-collage-3.png',
              alt: 'Mockup de la vista de posiciones con cuatro gráficos mensuales y la meta del 80% marcada',
              ratio: '1600 / 1429',
              style: { left: '51.52%', top: '37.21%', width: '44.2%' },
            },
            {
              src: 'assets/staffing-cockpit-collage-4.png',
              alt: 'Mockup de la vista de costo y ingreso de oportunidad, con dos tarjetas de KPI',
              ratio: '1600 / 1083',
              style: { left: '11.96%', top: '29.86%', width: '64.82%' },
            },
          ],
        },
      },
      titles: { solution: 'Las cuatro vistas', results: 'Validación' },
      context: {
        intro:
          'Para decidir, el equipo de staffing y la dirección dependían de planillas de Excel, sistemas con información de las personas y organigramas.',
        shift: {
          before: { label: 'Antes · información dispersa', items: ['Planillas de Excel', 'Conocimiento de Managers', 'Organigramas'] },
          arrow: 'Solución',
          after: {
            label: 'Después · Staffing Cockpit',
            lines: ['Disponibilidad · Banca', 'Costos y posiciones · Demanda'],
            text: 'La información que cada rol necesita para decidir a tiempo.',
          },
        },
      },
      problem: {
        intro:
          'Los KPIs se medían tarde, los datos llegaban incompletos o desactualizados, y cada vez que el directorio pedía información había que armarla de nuevo.',
        questions: ['¿Cómo podríamos convertir datos dispersos en información clara y actual para decidir a tiempo?'],
      },
      role: 'Fui la diseñadora UX/UI. Me encargué de la investigación con stakeholders, del sistema visual, de los prototipos y de las pruebas de usabilidad.',
      process: {
        items: [
          {
            title: 'Entender el negocio.',
            text: 'Reuniones con cada stakeholder sobre su día a día, las herramientas que usaban, qué información les pide el directorio y con qué frecuencia necesitan actualizarla.',
          },
          {
            title: 'Entender los datos.',
            text: 'Trabajé en conjunto con el equipo de Data Science para saber qué datos existían, qué valor de negocio daban y cómo representarlos.',
          },
          {
            title: 'Definir el sistema visual.',
            text: 'Paleta, tipografía y el tipo de gráfico adecuado para cada dato. Por ejemplo, tarjetas para un KPI de un vistazo, barras para comparar meses, líneas para tendencias y mapa de calor para picos de disponibilidad.',
          },
          {
            title: 'Validar en ciclos.',
            text: 'Para cada vista: user testing del prototipo en Figma, priorización con el equipo de producto por impacto y esfuerzo, tickets en Jira, construcción en Power BI y una demo con datos reales.',
          },
        ],
        // Pasos en el orden del ciclo, empezando arriba y en el sentido de las agujas del reloj.
        cycle: {
          steps: ['Prototipo Figma', 'Prueba con usuarios', 'Priorizar + Jira', 'Power BI + demo'],
          label: 'Validar antes de construir',
          title: 'Cada ronda alimentó la siguiente decisión.',
          text: [
            'Frecuencia, impacto y persistencia para comprender el problema.',
            'Impacto y esfuerzo para acordar qué aporta más valor al producto.',
          ],
        },
      },
      methods: [],
      findings: {
        intro: 'Dos arquetipos basados en stakeholders reales, cuyos nombres se mantienen en reserva:',
        cards: [
          { title: 'COO', text: 'Necesita resúmenes para decidir rápido.', color: 'rose' },
          { title: 'Líder de staffing', text: 'Necesita detalle por persona y posición.', color: 'mustard' },
        ],
        items: [
          'Cada rol necesita un nivel distinto de detalle.',
          'Un número sin definición genera dudas. FTE contra headcount, las regiones y la meta del 80% fueron los ejemplos más claros.',
          { title: 'Mirar el pasado no alcanza.', text: 'Para planificar capacidad pedían proyección a futuro.' },
          'Los filtros pueden ser el principal obstáculo. En la primera ronda, el selector de grupos de negocio recibió la máxima severidad.',
        ],
      },
      solution: {
        items: [
          {
            tag: '1',
            title: 'Disponibilidad',
            question: '¿Quién está libre y cuándo?',
            text: 'Probada con 16 personas. La tasa de completitud fue de 87,5% en la primera tarea y bajó hasta 50% en la que combinaba competencia y ubicación.',
            change:
              'Selector de grupos de negocio con selección múltiple y "Seleccionar todo", más un botón para limpiar filtros.',
            // Recortes del diseño en Figma, en % del marco del detalle.
            mockup: {
              src: 'assets/staffing-cockpit-disponibilidad.png',
              alt: 'Mockup de la vista de disponibilidad en FTE',
              ratio: '1800 / 1264',
              zoom: {
                caption: 'Filtros · el principal punto de fricción',
                ratio: '349 / 251',
                imgStyle: { width: '448.71%', left: '-24.07%', top: '-46.43%' },
                focus: 'assets/staffing-cockpit-foco-1.svg',
                focusStyle: { width: '57.02%', height: '39.04%', left: '0%', top: '5.37%' },
              },
            },
          },
          {
            tag: '2',
            title: 'Banca',
            question: '¿Cuánta capacidad tenemos y cuándo?',
            text: 'Tabla, gráfico y mapa de calor. Probada con 5 personas, que quisieron saber qué era FTE y qué era headcount.',
            change: 'Texto explicativo, leyendas de regiones, totales en porcentaje y meses de 3 letras en las fechas.',
            mockup: {
              src: 'assets/staffing-cockpit-banca.png',
              alt: 'Mockup de la vista de banca con el mapa de calor por región y nivel',
              ratio: '1800 / 1416',
              zoom: {
                caption: 'Mapa de calor · lectura por región y nivel',
                ratio: '349 / 244',
                imgStyle: { width: '300.86%', left: '-48.42%', top: '-74.81%' },
                focus: 'assets/staffing-cockpit-foco-2.svg',
                focusStyle: { width: '77.94%', height: '48.36%', left: '2.87%', top: '7.57%' },
              },
            },
          },
          {
            tag: '3',
            title: 'Costos, ingresos y posiciones',
            question: '¿Estamos cumpliendo la meta?',
            text: 'Tarjetas para el estado actual y gráficos por mes. Probada con 3 personas.',
            change:
              'Flechas frente al período anterior, etiqueta "Goal" en la línea del 80% y un título más claro para el gráfico de posiciones.',
            mockup: {
              src: 'assets/staffing-cockpit-costos.png',
              alt: 'Mockup de la vista de posiciones con cuatro gráficos mensuales',
              ratio: '1800 / 1608',
              zoom: {
                caption: 'Posiciones · la meta del 80% necesitaba una etiqueta',
                ratio: '349 / 251',
                imgStyle: { width: '315.19%', left: '-161.03%', top: '-82.68%' },
                focus: 'assets/staffing-cockpit-foco-3.svg',
                focusStyle: { width: '110.03%', height: '43.82%', left: '2.87%', top: '28.08%' },
              },
            },
          },
          {
            tag: '4',
            title: 'Planificador de demanda',
            question: '¿Qué demanda viene?',
            text: 'Probada con 4 personas.',
            change:
              'Nombre descriptivo para la tabla inferior, ícono de ayuda en el filtro de período y filtros por cliente y por dueño del deal.',
          },
        ],
      },
      results: {
        intro: [
          'No medí adopción posterior al lanzamiento, así que mi evidencia es el rigor con el que se construyó cada vista.',
          'En la primera ronda, 16 personas completaron 5 tareas de forma remota con un prototipo clicable, y se evaluó con tasas de completitud y una escala de actitud de 5 puntos. Esa ronda fijó la línea base para las demás. En las otras tres rondas, entrevistas de 30 minutos con mockups en Figma, con pensamiento en voz alta y preguntas durante la tarea.',
          'Los problemas se priorizaron por frecuencia, impacto y persistencia, y se pasaron a tickets en Jira.',
        ],
        chart: {
          title: 'Tasa de completitud por tarea en la primera ronda (16 participantes)',
          goal: 100,
          goalLabel: 'Meta 100%',
          items: [
            { label: 'Tarea 1', value: 87.5 },
            { label: 'Tarea 2', value: 68.8 },
            { label: 'Tarea 3', value: 56.3 },
            { label: 'Tarea 4', value: 50 },
            { label: 'Tarea 5', value: 62.5 },
          ],
        },
        // TODO: completar con las filas de la tabla de decisiones de Sofia: [hallazgo, cambio, 'Sí'].
        table: { caption: 'Hallazgo → cambio', columns: ['Hallazgo', 'Cambio', 'Implementado'], rows: [] },
        quotes: [
          { text: '"Si el reporte me dijera que el 25% de la banca es L3 y L4, ya tendría mi respuesta."', author: 'COO' },
          { text: '"Es mucho más fácil de usar que las herramientas que tenemos hoy."', author: 'Participante' },
        ],
      },
      learnings: {
        items: [
          'Cada número necesita su definición. Etiquetas, leyendas y metas pesan tanto como el gráfico.',
          'Un mismo dato se ve distinto según el rol. Resumen para dirección, detalle para staffing.',
          'Probar antes de construir cuestiona lo que parecía obvio. Por ejemplo, si "Needs more info" merecía ser un KPI.',
          'Diseñar dentro de la herramienta. Power BI impone límites, como las celdas de tamaño fijo, y se diseña con ellos.',
        ],
      },
      nextSteps:
        'Una vista con proyección a futuro para planificar capacidad, y distinguir posiciones cubiertas de abiertas, que quedó fuera del MVP.',
      images: [],
    },
  },
  {
    slug: 'topadengue',
    title: 'TopaDengue',
    meta: '2018 — 2020 · Investigación HCI',
    description: 'Tecnología cívica para que una comunidad prevenga el dengue.',
    featured: 4,
    discipline: 'UX Researcher & Full stack developer',
    headline: 'Tecnología cívica para que una comunidad prevenga el dengue.',
    summary: 'Prevenir era un trabajo comunitario. Organizarse, una barrera.',
    color: 'butter',
    coverColor: 'mustard',
    image: 'assets/topadengue.jpg',
    imageAlt: 'Voluntarios de TopaDengue con remeras verdes registran una visita en un celular y en un formulario en papel',
    caseStudy: {
      summary: {
        intro:
          'Voluntarios de Bañado Sur, en Asunción, visitaban casas cada semana para encontrar criaderos del mosquito Aedes aegypti. Investigamos y rediseñamos sus herramientas para optimizar su día a día con el objetivo de dedicar más tiempo a prevenir y menos a organizarse.',
        facts: [
          { label: 'Rol', value: 'UX Researcher y Full Stack Developer' },
          { label: 'Período', value: '2018–2020' },
          {
            label: 'Equipo',
            value: 'Investigadores de la Universidad Nacional de Asunción y la Universidad Católica',
          },
          { label: 'Herramientas', value: 'DengueChat, ODK, WhatsApp Business' },
        ],
        highlights: [
          { value: '1/3', label: 'Hasta un tercio de cada jornada se iba en decidir qué manzanas visitar.' },
          { value: '71%', label: 'De los voluntarios encontró útiles los mensajes semanales.' },
          { value: '3', label: 'Publicaciones científicas.' },
        ],
      },
      titles: { solution: 'Intervenciones', learnings: 'Lo que aprendí' },
      context: {
        intro:
          'TopaDengue evaluó un programa de movilización comunitaria contra el dengue en un barrio inundable de Asunción. Voluntarios del propio barrio, capacitados para esto, visitaban casa por casa una vez por semana. Registraban criaderos con tablets y formularios en papel, y subían los datos a DengueChat.',
        wideFigure: {
          src: 'assets/topadengue-contexto.png',
          alt: 'Tres fotos del trabajo de campo: un registro en tablet sobre un formulario en papel, voluntarios revisando un celular y una planilla, y un grupo recorriendo una calle del barrio',
          bg: 'mocha',
          fit: 'contain',
          ratio: '1070.67 / 303.17',
        },
      },
      problem: {
        intro: 'Encontramos tres problemas:',
        numbered: true,
        items: [
          {
            title: 'La app móvil no funcionaba para ellos.',
            text: 'No se instalaba en muchos teléfonos de gama baja, ocupaba demasiado espacio (algunos la desinstalaban para guardar fotos) y fallaba en todos los principios de usabilidad de Nielsen.',
          },
          {
            title: 'No veían el impacto de su trabajo.',
            text: 'Sin saber cuántas "casas verdes" lograban, perdían motivación.',
          },
          {
            title: 'Organizar la jornada era manual.',
            text: 'Con carpetas, formularios y mapas impresos, se iba hasta un tercio del día.',
          },
        ],
        questions: [
          '¿Cómo podríamos aumentar las casas verdes mediante la socialización del riesgo?',
          '¿Cómo podríamos reducir el tiempo que se dedica a la logística del trabajo de campo?',
        ],
      },
      role: {
        intro:
          'Fui UX researcher y desarrolladora full stack. Participé en el trabajo de campo, evalué la usabilidad de DengueChat, diseñé prototipos, implementé mejoras en la plataforma y las validé con usuarios reales.',
        figures: [
          {
            src: 'assets/topadengue-rol-1.png',
            alt: 'Notas adhesivas sobre una mesa agrupadas en lugares, navegación, formulario de inspección e ideas',
          },
          {
            src: 'assets/topadengue-rol-2.png',
            alt: 'Facilitadoras completando formularios en papel y en laptops durante una sesión de trabajo',
          },
        ],
      },
      process: {
        items: [
          { title: 'Observación participante:', text: 'acompañé a voluntarios y facilitadores en sus visitas.' },
          { title: 'Evaluación heurística:', text: 'revisé la app móvil y la web con los 10 principios de Nielsen.' },
          {
            title: 'Pruebas de herramientas:',
            text: 'cuatro capacitaciones, una jornada de campo y entrevistas semiestructuradas.',
          },
          { title: 'Diseño participativo:', text: 'prototipos iterados con facilitadores.' },
          { title: 'Wizard of Oz:', text: 'simulamos mensajes automáticos enviándolos a mano.' },
          { title: 'Think aloud:', text: '12 sesiones para evaluar las mejoras.' },
        ],
      },
      methods: [],
      findings: {
        items: [
          { title: 'La app no llegaba a sus teléfonos.', text: 'Problemas de compatibilidad y almacenamiento.' },
          {
            title: 'Nadie entendía las "casas verdes".',
            text: 'Todos captaron parte del concepto, pero ninguno el aspecto temporal.',
          },
          {
            title: 'Usaban WhatsApp, no la web.',
            text: 'Nadie entraba a DengueChat en su tiempo libre; la barrera era el acceso a dispositivos y datos.',
          },
          { title: 'La logística consumía la jornada.', text: 'Hasta un tercio del día, decidiendo a dónde ir.' },
        ],
      },
      solution: {
        items: [
          {
            tag: 'A',
            title: 'Recolección de datos: ODK',
            text: 'Comparamos la app original, ODK Collect, NASA GLOBE Observer y Google Sheets. ODK fue la mejor opción para el contexto: funciona sin conexión, ocupa poco y se configura sin programar. Un mismo flujo sirve para el terreno y para digitalizar formularios en papel, con sincronización automática a DengueChat. Así concentramos el desarrollo en un solo módulo de sincronización.',
            figure: {
              src: 'assets/topadengue-odk.jpg',
              alt: 'Tres pantallas de ODK Collect: el menú principal, un selector de fecha y preguntas del formulario de criaderos',
              bg: 'mustard',
              // Recorte del diseño en Figma.
              imgStyle: { width: '110.51%', height: '95.33%', left: '-5.05%', top: '2.13%' },
            },
          },
          {
            tag: 'B',
            title: 'Mensajes por WhatsApp',
            text: 'Diseñamos tres tipos de mensaje semanal: informativos, educativos y de motivación. Elegimos WhatsApp Business frente a Twilio por ser gratuito y transparente para el usuario. Probamos con Wizard of Oz: 48 mensajes a 32 voluntarios entre marzo y agosto de 2019. El 71% los encontró útiles. Los informativos y educativos fueron los más valorados; los de motivación casi no aparecieron en las respuestas abiertas.',
            figure: {
              src: 'assets/topadengue-whatsapp.jpg',
              alt: 'Ejemplos de mensajes de WhatsApp de TopaDengue de tipo educativo, activo e informativo',
              bg: 'mocha',
              fit: 'contain',
            },
          },
          {
            tag: 'C',
            title: 'Plataforma y logística',
            text: 'Diseñé un mapa para programar jornadas. Cada manzana muestra cantidad de casas, nivel de infestación, casas verdes, fecha de la última visita y número de visitas, y permite asignar voluntarios. Además, los puntos ahora premian a todo el grupo asignado a una manzana cuando aparecen casas verdes, no solo a quien subía los datos. Se sumaron una landing con fotos y videos, contenido compartible en redes y un ranking de puntos.',
            figure: {
              src: 'assets/topadengue-plataforma.jpg',
              alt: 'Mapa de DengueChat para programar recorridos: las manzanas se colorean y una ventana muestra casas, criaderos, visitas y la opción de asignar voluntarios',
              bg: 'sage-deep',
            },
          },
        ],
      },
      results: {
        intro:
          'En 12 sesiones de think aloud (4 facilitadores y 8 voluntarios) comparamos la versión original con la nueva:',
        items: [
          'Facilitadores y voluntarios valoraron el módulo como una buena forma de organizar el trabajo.',
          'Pasaron de recorrer las manzanas en orden a decidir según cuántas veces se visitó cada una.',
          'Voluntarios sin experiencia lograron organizar una jornada sin depender del conocimiento del territorio.',
        ],
        comparison: {
          value: '45,2% → 54,8%',
          text: 'La proporción de visitas subió entre abril y julio de 2018 y 2019, con menos voluntarios.',
          items: [
            { label: '2018', value: 45.2 },
            { label: '2019', value: 54.8 },
          ],
        },
        figures: [
          {
            src: 'assets/topadengue-resultados.png',
            alt: 'Sesiones de prueba: el grupo A usa la versión en papel y el grupo B la nueva versión de DengueChat',
            bg: 'mustard',
            fit: 'contain',
            ratio: '808 / 272',
          },
        ],
      },
      learnings: {
        items: [
          'El cuello de botella no era la app, era la logística.',
          'Una herramienta existente puede ser mejor opción en lugar de invertir tiempo y recursos en desarrollar una propia.',
          {
            title: 'En comunidad, el canal importa:',
            text: 'WhatsApp y las reuniones presenciales funcionaron mejor para organizar los voluntarios que publicando en la web las notificaciones.',
          },
          {
            title: 'Diseñar para el dispositivo que ya usan:',
            text: 'las tablets funcionaron mejor que las laptops por la familiaridad de las pantallas táctiles.',
          },
        ],
        note: {
          label: 'Una limitación importante',
          text: 'Los nuevos diseños se introdujeron al final del programa. Falta replicar estos resultados en campo.',
        },
      },
      publications: {
        items: [
          {
            text: 'Rivas Amarilla, S. N., et al. (2020). ICTs for Community Development: Bridging conceptual, theoretical and methodological boundaries. Journal of the American Behavioral Scientist.',
            href: 'https://doi.org/10.1177/0002764220952113',
          },
          {
            text: 'Rivas Amarilla, S. N., et al. (2020). Evidence Socialization in a Community-based Dengue Prevention Initiative. CSCW Civic Technologies Workshop.',
            href: 'https://cscwcivictechnologies.wordpress.com/papers/',
          },
          {
            text: 'Rivas Amarilla, S. N., et al. (2020). Improving logistic ICTs for Community-based Dengue Prevention. CSCW Civic Technologies Workshop.',
            href: 'https://cscwcivictechnologies.wordpress.com/papers/',
          },
          {
            text: 'Rivas Amarilla, S. N., et al. (2019). Design and evaluation of data socialization technologies to reduce Aedes aegypti infestation in a community. IV Meeting of Researchers of Paraguay.',
          },
        ],
      },
      nextSteps: {
        items: [
          'Un experimento controlado para medir el rol de las notificaciones.',
          'Explorar cómo apoyar con tecnología las reuniones presenciales de inicio y cierre de jornada.',
        ],
      },
      images: [],
    },
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
