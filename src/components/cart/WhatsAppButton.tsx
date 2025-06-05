'use client'

import { useCartStore } from '@/store/cartStore'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function WhatsAppButton() {
  const getWhatsAppMessage = useCartStore((state) => state.getWhatsAppMessage)
  const message = encodeURIComponent(getWhatsAppMessage())
  const phone = '51987654321' // Reemplaza con tu número real
  const url = `https://wa.me/${phone}?text=${message}`

  const buttonRef = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }, [])

  return (
    <motion.a
      href={url}
      ref={buttonRef}
      target="_blank"
      rel="noopener noreferrer"
      title="Enviar cotización por WhatsApp"
      aria-label="Enviar cotización por WhatsApp"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-medium shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
    >
      <MessageCircle className="w-4 h-4" aria-hidden="true" />
      Cotizar por WhatsApp
    </motion.a>
  )
}
