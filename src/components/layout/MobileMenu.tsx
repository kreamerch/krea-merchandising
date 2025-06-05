'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import NavLink from './NavLink'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/productos', label: 'Catálogo' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú de navegación"
        className="p-2 rounded-md hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {open ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-background shadow-md z-40 p-4 border-t border-border"
          >
            <nav className="flex flex-col gap-3" aria-label="Menú móvil">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
