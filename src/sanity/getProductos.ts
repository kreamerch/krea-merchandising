
export async function getProductos() {
  const res = await fetch('/api/productos')
  if (!res.ok) throw new Error('Error al cargar productos desde la API')
  return res.json()
}
