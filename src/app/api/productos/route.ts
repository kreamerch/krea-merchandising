import { NextResponse } from 'next/server'
import { fetchProductos } from '@/sanity/fetchProductos'

export async function GET() {
  try {
    const productos = await fetchProductos()
    return NextResponse.json(productos)
  } catch (error) {
    console.error('Error al cargar productos desde Sanity:', error)
    return NextResponse.json({ error: 'Error al obtener productos' }, { status: 500 })
  }
}
