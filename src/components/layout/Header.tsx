'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '@/store/cartStore'
import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import MobileMenu from './MobileMenu'
import NavLink from './NavLink'
import ProductSearch from './ProductSearch'

export default function Header() {
  const items = useCartStore((state) => state.items)
  const cartCount = items.reduce((acc, item) => acc + item.cantidad, 0)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group transition-all hover:opacity-90">
  <Image
    src="/logo-krea-merchandising.svg"
    alt="Logo"
    width={100}  
    height={100}
    className="transition-transform duration-300 group-hover:scale-105"
  />
  
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700">
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/productos">Catálogo</NavLink>
          <NavLink href="/servicios">Servicios</NavLink>
          <NavLink href="/nosotros">Nosotros</NavLink>
          <NavLink href="/contacto">Contacto</NavLink>
        </nav>

        {/* Buscador */}
        <div className="flex-1 px-4 md:px-6">
          <ProductSearch />
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-4">
          {/* Carrito */}
          <Link href="/carrito" className="relative group">
            <motion.div
              className="p-2 rounded-full hover:bg-gray-100 transition"
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="h-6 w-6 text-gray-700 group-hover:text-primary" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                  {cartCount}
                </span>
              )}
            </motion.div>
          </Link>

          {/* Menú móvil */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
