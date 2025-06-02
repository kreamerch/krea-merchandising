// lib/sanity/fetchProductos.ts

if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
}

import { createClient } from '@sanity/client'
import { allProductosQuery } from './queries'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: '2025-05-28',
  useCdn: true, // ✅ mantener activado para rendimiento
})

export async function fetchProductos() {
  try {
    return await client.fetch(allProductosQuery)
  } catch (error) {
    console.error('Error al cargar productos desde Sanity:', error)
    throw error
  }
}
