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

  const handleClick = () => {
    addItem({ id, nombre, slug, precio })
  }

  return (
    <Button
      onClick={handleClick}
      aria-label={`Agregar ${nombre} a la cotización`}
      className="btn-primary"
    >
      Agregar a cotización
    </Button>
  )
}
