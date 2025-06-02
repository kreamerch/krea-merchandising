'use client'

import Link from 'next/link'

export default function NotFoundProducto() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Producto no encontrado</h2>
      <p className="text-neutral-600 mb-6">
        El producto que estás buscando no existe o ha sido eliminado.
      </p>
      <Link
        href="/productos"
        className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-neutral-800 transition"
      >
        Volver al catálogo
      </Link>
    </div>
  )
}
