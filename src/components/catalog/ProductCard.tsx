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
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      {/* Imagen con enlace */}
      <Link href={`/productos/${slug}`}>
        <div className="aspect-square w-full mb-3 bg-neutral-100 rounded-lg overflow-hidden">
          {imagen ? (
            <Image
              src={imagen}
              alt={nombre}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-sm text-neutral-500">
              Imagen no disponible
            </div>
          )}
        </div>
      </Link>

      <h3 className="font-semibold text-lg">{nombre}</h3>
      <p className="text-sm text-neutral-500 mb-2">S/ {precio}</p>

      <Button
        onClick={() =>
          addItem({
            id,
            nombre,
            slug,
            precio,
          })
        }
      >
        Agregar a cotización
      </Button>
    </div>
  )
}
