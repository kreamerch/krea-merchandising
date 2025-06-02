// src/store/cartStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ProductoCarrito = {
  id: string
  nombre: string
  slug: string
  cantidad: number
  precio: number
}

type CartState = {
  items: ProductoCarrito[]
  addItem: (item: Omit<ProductoCarrito, 'cantidad'>) => void
  removeItem: (id: string) => void
  clearCart: () => void
  getTotal: () => number
  getWhatsAppMessage: () => string
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const items = get().items
        const exists = items.find((i) => i.id === item.id)
        if (exists) {
          set({
            items: items.map((i) =>
              i.id === item.id ? { ...i, cantidad: i.cantidad + 1 } : i
            ),
          })
        } else {
          set({
            items: [...items, { ...item, cantidad: 1 }],
          })
        }
      },
      removeItem: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
      clearCart: () => set({ items: [] }),
      getTotal: () => get().items.reduce((acc, i) => acc + i.precio * i.cantidad, 0),
      getWhatsAppMessage: () =>
        get().items
          .map((item) => `• ${item.nombre} x${item.cantidad}`)
          .join('\n'),
    }),
    {
      name: 'krea-cart-storage',
    }
  )
)
