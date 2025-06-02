'use client'

import { Button } from '@/components/ui/Button'
import { useCartStore } from '@/store/cartStore'

type Props = {
  id: string
  nombre: string
  slug: string
  precio: number
}

export function AddToCartButton({ id, nombre, slug, precio }: Props) {
  const addItem = useCartStore((state) => state.addItem)

  return (
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
  )
}
