'use client'

import { useSearchStore } from '@/store/searchStore'
import { Search } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ProductSearch() {
  const [input, setInput] = useState('')
  const setQuery = useSearchStore((state) => state.setQuery)

  useEffect(() => {
    const delay = setTimeout(() => {
      setQuery(input.trim())
    }, 400)

    return () => clearTimeout(delay)
  }, [input, setQuery])

  return (
    <div className="relative w-full max-w-md">
      <label htmlFor="product-search" className="sr-only">
        Buscar productos
      </label>
      <input
        id="product-search"
        type="text"
        placeholder="Buscar productos..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border border-border rounded-md px-4 py-2 pr-10 text-sm shadow-sm text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <Search
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted w-4 h-4 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  )
}
