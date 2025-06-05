'use client'

import { useCartStore } from '@/store/cartStore'
import { Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ClearCartButton() {
  const clearCart = useCartStore((state) => state.clearCart)

  return (
    <motion.button
      onClick={clearCart}
      title="Vaciar carrito"
      aria-label="Vaciar carrito"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
    >
      <Trash2 size={20} aria-hidden="true" />
      Vaciar carrito
    </motion.button>
  )
}
