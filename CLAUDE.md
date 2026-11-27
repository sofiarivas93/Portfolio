# Portfolio de Sofia Rivas

Portfolio web de Sofia Rivas, Product Designer e Ingeniera de Software (Paraguay). Se publica en GitHub Pages.

## Stack y comandos

- Vite + React, con `react-router-dom` usando **BrowserRouter** (`basename` = `base` de Vite sin la barra final). URLs limpias: `/Portfolio/home` y `/Portfolio/home/<slug>`; cualquier otra ruta redirige a `/home`.
- GitHub Pages no conoce las rutas de React: el plugin `spaRoutes` de `vite.config.js` copia `index.html` a `dist/home/`, `dist/home/<slug>/` y `dist/404.html` al hacer el build. Si agregas una ruta nueva, agrégala ahí.
- `src/main.jsx` convierte los links viejos del HashRouter (`#/proyecto/<slug>`, `#/#<sección>`) y quita la barra final que agrega GitHub Pages.
- CSS plano en `src/styles.css` con variables CSS. No agregar Tailwind ni librerías de UI sin preguntar.
- `npm run dev`: servidor local en http://localhost:5173
- `npm run build`: build de producción (ejecutarlo antes de dar por terminado un cambio grande).
- El despliegue es con GitHub Actions. `base` en `vite.config.js` debe coincidir con el nombre del repositorio.

## Estructura

- `referencia/index.html`: diseño original de la home. Es la referencia visual; no modificarlo.
- `src/components/`: Nav, Hero, About, Projects, Photo, Icon.
- `src/data/projects.js`: lista de proyectos (slug, título, meta, descripción, color, imagen).
- `src/pages/CaseStudy.jsx`: plantilla de caso de estudio, ruta `/home/:slug`.
- `src/pages/Home.jsx`: la home, ruta `/home`. Las secciones se enlazan como `/home#proyectos` y `/home#sobre-mi`.
- `public/assets/`: imágenes y CV. Rutas finales: `assets/sofia.jpg`, `assets/<slug>.jpg`, `assets/Sofia-Rivas-CV.pdf`. Respetar el `base` de Vite al referenciarlas.

## Idioma

- Todo el contenido visible está en **español** (primera versión). Más adelante habrá versión en inglés, así que no dejes textos sueltos dentro del JSX cuando sea fácil centralizarlos en `src/data/`.
- Conversa conmigo en español. Nombres de código y variables en inglés.

## Diseño

Estilo minimalista de "escritorio de papel": fondo beige, notas adhesivas, polaroid y tarjetas con cinta, ligeramente rotadas.

- Colores: `--bg #F3EFE9`, `--ink #26241F`, `--muted #5F5A50`, `--paper #F6F4EF`, `--line #CFC9BD`. Notas: `--lilac #E2D7E8`, `--peach #F2DEC9`, `--sage #D4E3C7`, `--steel #D6DAE1`, `--butter #EFE5BF`. Home: `--rose #D8B6AB`, `--sage-deep #A9B9A6`, `--mustard #DCC68A`, `--note #EFEBDF`.
- Tipografías: **Jost** para títulos y tarjetas, **Inter** para el texto, **Sacramento** solo para el saludo "Hola, soy Sofia".
- Menú: píldora flotante arriba a la derecha (Inicio, Proyectos, Sobre mí), más puntos de navegación a la derecha con la sección activa.
- En la home, las tarjetas de proyecto van rectas con borde y se elevan un poco al pasar el mouse. Polaroids y notas adhesivas van inclinadas. Sin otras animaciones decorativas.
- Cada imagen tiene un espacio con el texto "Agrega imagen: assets/...". Mantener ese patrón mientras falten imágenes.
- Respetar `prefers-reduced-motion`, mantener `:focus-visible` y contraste legible. Debe verse bien en móvil.

## Reglas de contenido

- No inventar métricas, resultados ni testimonios. Usar solo datos del CV y de los casos que Sofia haya entregado.
- No publicar teléfono ni dirección. El correo público es sofiarivas1993@gmail.com.
- Enlaces pendientes: Behance y LinkedIn (buscar `data-todo` o `TODO`). No inventar URLs.
- Proyectos y slugs: `che-roga-pora-exterior`, `marketplace-che-roga-pora`, `salud-ocupacional`, `staffing-cockpit`, `topadengue`. En la rama `release-1` solo se publican `staffing-cockpit` y `topadengue`; los demás llevan `hidden: true` en `projects.js` hasta que su caso esté listo.
- Estructura de cada caso de estudio: contexto, problema, mi rol, proceso (investigación y métodos), solución, resultados, aprendizajes, imágenes.

## Cómo trabajar

- Haz un cambio a la vez y explica en pocas líneas qué modificaste.
- Antes de refactors grandes o de agregar dependencias, pregúntame.
- No ejecutes `git commit` ni `git push` a menos que yo lo pida.
- Si algo en `referencia/index.html` y en el código difiere, la referencia manda, salvo que yo indique otra cosa.
