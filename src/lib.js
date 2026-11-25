// Ruta a un archivo de public/ respetando el `base` de Vite.
export const asset = (path) => import.meta.env.BASE_URL + path

