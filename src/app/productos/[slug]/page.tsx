'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { useCartStore } from '@/store/cartStore'
import { Button } from '@/components/ui/Button'
import { fetchProductoPorSlug } from '@/sanity/fetchProductoPorSlug'


export default function ProductoPage() {
  const { slug } = useParams<{ slug: string }>()
  const { data: producto, isLoading } = useQuery({
    queryKey: ['producto', slug],
    queryFn: () => fetchProductoPorSlug(slug),
    enabled: !!slug,
  })

  const addItem = useCartStore((state) => state.addItem)

  if (isLoading) {
    return (
      <p className="text-center py-10 text-primary font-medium">
        Cargando producto...
      </p>
    )
  }

  if (!producto) {
    return notFound()
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Imagen del producto */}
        <div className="bg-muted rounded-lg overflow-hidden">
          <Image
            src={producto.imagen}
            alt={producto.title}
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Detalles */}
        <div>
          <h1 className="text-3xl font-bold mb-2 text-foreground">{producto.title}</h1>
          <p className="text-lg text-muted mb-4">S/ {producto.precio.toFixed(2)}</p>
          <Button
            onClick={() =>
              addItem({
                id: producto._id,
                nombre: producto.title,
                slug: producto.slug,
                precio: producto.precio,
              })
            }
            className="btn-primary"
          >
            Agregar a cotización
          </Button>
        </div>
      </div>
    </main>
  )
}
