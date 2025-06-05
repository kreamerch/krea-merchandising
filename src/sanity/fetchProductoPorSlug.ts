import { productoPorSlugQuery } from './queries'
import { sanityClient } from './client'

export async function fetchProductoPorSlug(slug: string) {
  if (!slug) return null

  try {
    const producto = await sanityClient.fetch(productoPorSlugQuery, { slug })
    return {
      ...producto,
      imagen: producto.imagen?.[0]?.url || null,
    }
  } catch (error) {
    console.error('Error al obtener producto por slug:', error)
    return null
  }
}
