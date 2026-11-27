import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Las anclas de sección van después de la ruta: /home#proyectos.
// Al navegar se desplaza a la sección indicada o, si no hay ninguna, al inicio de la página.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const prevPath = useRef(null)

  useEffect(() => {
    const samePage = prevPath.current === pathname
    prevPath.current = pathname
    // Dentro de la misma página usa el scroll suave del CSS (que respeta prefers-reduced-motion);
    // al cambiar de página salta directo.
    const behavior = samePage ? 'auto' : 'instant'

    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
    if (target) target.scrollIntoView({ behavior })
    else window.scrollTo({ top: 0, behavior })
  }, [pathname, hash, key])

  return null
}
