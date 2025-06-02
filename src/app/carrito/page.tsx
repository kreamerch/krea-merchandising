'use client'

import { useCartStore } from '@/store/cartStore'
import WhatsAppButton from '@/components/cart/WhatsAppButton'
import ClearCartButton from '@/components/cart/ClearCartButton'
import { Button } from '@/components/ui/Button'
import { AnimatePresence, motion } from 'framer-motion'

export default function CarritoPage() {
  const items = useCartStore((state) => state.items)
  const getTotal = useCartStore((state) => state.getTotal)
  const removeItem = useCartStore((state) => state.removeItem)

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Tu cotización</h1>

      {items.length === 0 ? (
        <p className="text-neutral-500">No hay productos en el carrito.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {/* Lista de productos */}
          <div className="flex flex-col gap-4 border rounded-lg p-4 bg-white shadow-sm">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{item.nombre}</p>
                    <p className="text-sm text-neutral-500">
                      x{item.cantidad} — S/ {item.precio} c/u
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Quitar
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Total */}
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>S/ {getTotal().toFixed(2)}</span>
          </div>

          {/* Acciones */}
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppButton />
            <ClearCartButton />
          </div>
        </div>
      )}
    </main>
  )
}
