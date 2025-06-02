'use client'

import { useQuery } from '@tanstack/react-query'
import { getProductos } from '@/sanity/getProductos'

export function useProductos() {
  return useQuery({
    queryKey: ['productos'],
    queryFn: getProductos,
    staleTime: 1000 * 60 * 5, // 5 minutos
  })
}
