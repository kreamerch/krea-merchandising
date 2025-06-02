'use client'

import { Mail, Phone } from 'lucide-react'

export default function Topbar() {
  return (
    <div className="bg-primary text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone size={14} className="text-white" />
            <span>+51 987 654 321</span>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            <Mail size={14} className="text-white" />
            <span>ventas@kreamerch.com</span>
          </div>
        </div>
        <div className="hidden md:flex gap-3">
          <span className="hover:underline cursor-pointer">Envíos a todo Perú</span>
          <span className="hover:underline cursor-pointer">Atención Lun-Sáb 9am - 6pm</span>
        </div>
      </div>
    </div>
  )
}
