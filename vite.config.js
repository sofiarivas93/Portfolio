import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { projects } from './src/data/projects.js'

// GitHub Pages solo sirve archivos: copia index.html en cada ruta de React para que
// un link directo o una recarga devuelvan 200. 404.html cubre cualquier otra ruta.
function spaRoutes() {
  let outDir
  return {
    name: 'spa-routes',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const index = resolve(outDir, 'index.html')
      const targets = ['home/index.html', ...projects.map((p) => `home/${p.slug}/index.html`), '404.html']
      for (const target of targets) {
        const file = resolve(outDir, target)
        mkdirSync(dirname(file), { recursive: true })
        copyFileSync(index, file)
      }
    },
  }
}

// https://vite.dev/config/
// `base` debe coincidir con el nombre del repositorio en GitHub Pages.
export default defineConfig({
  plugins: [react(), spaRoutes()],
  base: '/Portfolio/',
})
