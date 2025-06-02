'use client'

import { useProductos } from '@/lib/react-query/useProductos'
import ProductCard from '@/components/catalog/ProductCard'


export default function ProductosPage() {
  const { data, isLoading, isError } = useProductos()

  if (isLoading)
    return (
      <p className="text-center py-10 text-[color:var(--color-primary)] font-medium">
        Cargando productos...
      </p>
    )

  if (isError)
    return (
      <p className="text-center py-10 text-[color:var(--color-accent)] font-semibold">
        Error al cargar productos.
      </p>
    )

  if (!data || data.length === 0)
    return (
      <p className="text-center py-10 text-[color:var(--color-secondary)] font-medium">
        No hay productos disponibles.
      </p>
    )

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-[color:var(--color-primary)]">
        Todos los productos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((producto: any) => (
          <ProductCard
            key={producto._id}
            id={producto._id}
            nombre={producto.title}
            slug={producto.slug}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </main>
  )
}
