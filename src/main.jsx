import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'

// "/Portfolio/" → "/Portfolio": el basename del router no lleva la barra final.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

// Links viejos del HashRouter: #/proyecto/<slug> → /home/<slug> y #/#<sección> → /home#<sección>.
const { hash } = window.location
if (hash.startsWith('#/')) {
  const route = hash.slice(2)
  const project = route.match(/^proyecto\/([^/?#]+)/)
  const section = route.match(/^#(.+)/)
  const url = project
    ? `${basename}/home/${project[1]}`
    : section
      ? `${basename}/home#${section[1]}`
      : `${basename}/home`
  window.history.replaceState(null, '', url)
}

// GitHub Pages sirve /home/index.html como /home/: quita la barra final y conserva search y hash.
const { pathname, search, hash: currentHash } = window.location
if (pathname.length > 1 && pathname.endsWith('/')) {
  window.history.replaceState(null, '', pathname.replace(/\/+$/, '') + search + currentHash)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
