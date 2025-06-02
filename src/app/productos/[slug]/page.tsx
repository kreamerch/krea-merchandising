import { notFound } from 'next/navigation'
import Image from 'next/image'
import { fetchProductoPorSlug } from '@/sanity/getProductoBySlug'
import { AddToCartButton } from '@/components/catalog/AddToCartButton'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params

  const producto = await fetchProductoPorSlug(slug)

  if (!producto) return notFound()

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen */}
        <div className="bg-neutral-100 rounded-xl overflow-hidden">
          {producto.imagen?.[0]?.url ? (
            <Image
              src={producto.imagen[0].url}
              alt={producto.title}
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-96 text-sm text-neutral-500">
              Imagen no disponible
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{producto.title}</h1>
          <p className="text-neutral-600">S/ {producto.precio}</p>
          <p className="text-sm text-neutral-500">
            Categoría: {producto.categoria?.title || 'No definida'}
          </p>
          <p className="text-sm text-neutral-500">
            Color: {producto.color || 'No especificado'}
          </p>

          <AddToCartButton
            id={producto._id}
            nombre={producto.title}
            slug={producto.slug}
            precio={producto.precio}
          />
        </div>
      </div>
    </main>
  )
}
