'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import { Button } from '@/components/ui/Button'

type ProductCardProps = {
  id: string
  nombre: string
  slug: string
  precio: number
  imagen?: string
}

export default function ProductCard({
  id,
  nombre,
  slug,
  precio,
  imagen,
}: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  return (
    <div className="border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-background text-foreground">
      {/* Imagen con enlace */}
      <Link
        href={`/productos/${slug}`}
        className="block group cursor-pointer"
        aria-label={`Ver detalles de ${nombre}`}
      >
        <div className="aspect-square w-full mb-3 bg-muted rounded-lg overflow-hidden">
          {imagen ? (
            <Image
              src={imagen}
              alt={`Imagen del producto ${nombre}`}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-sm text-muted">
              Imagen no disponible
            </div>
          )}
        </div>
      </Link>

      <h3 className="font-semibold text-lg">{nombre}</h3>
      <p className="text-sm text-muted mb-2">S/ {precio.toFixed(2)}</p>

      <Button
        onClick={() => addItem({ id, nombre, slug, precio })}
        aria-label={`Agregar ${nombre} a la cotización`}
        className="btn-primary"
      >
        Agregar a cotización
      </Button>
    </div>
  )
}
