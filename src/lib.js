// Ruta a un archivo de public/ respetando el `base` de Vite.
export const asset = (path) => import.meta.env.BASE_URL + path

// Clase de tarjeta del diseño original (color de fondo + inclinación) según el color del proyecto.
export const cardClass = {
  sage: 'c1',
  lilac: 'c2',
  peach: 'c3',
  steel: 'c4',
  butter: 'c5',
}
