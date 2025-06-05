'use client'

import { Phone, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Topbar() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div className="bg-primary text-white text-xs sm:text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">

        {/* Teléfono y correo visibles siempre */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <a
            href="tel:+51987654321"
            className="inline-flex items-center gap-1 hover:underline"
          >
            <Phone size={14} aria-hidden="true" />
            <span className="sr-only">Teléfono:</span>
            <span>+51 987 654 321</span>
          </a>
          <a
            href="mailto:ventas@kreamerch.com"
            className="inline-flex items-center gap-1 hover:underline"
          >
            <Mail size={14} aria-hidden="true" />
            <span className="sr-only">Correo:</span>
            <span>ventas@kreamerch.com</span>
          </a>
        </div>

        {/* Info adicional solo visible en sm+ */}
        <div className="hidden sm:flex gap-3 text-white/80 text-[13px]">
          <span className="hover:underline hover:text-white transition">Envíos a todo Perú</span>
          <span className="hover:underline hover:text-white transition">Atención Lun-Sáb 9am - 6pm</span>
        </div>
      </div>
    </div>
  )
}
