import { useState } from 'react'
import { asset } from '../lib.js'

// Espacio de imagen con el texto "Agrega imagen: <ruta>" mientras la imagen no exista.
export default function Photo({ src, alt, imgStyle }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="ph" data-slot={src}>
      {!failed && <img src={asset(src)} alt={alt} style={imgStyle} onError={() => setFailed(true)} />}
    </div>
  )
}
