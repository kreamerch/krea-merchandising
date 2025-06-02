import { defineField, defineType } from 'sanity'

export const producto = defineType({
  name: 'producto',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nombre del producto', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'precio', title: 'Precio (S/)', type: 'number' }),
    defineField({ name: 'color', title: 'Color', type: 'string' }),
    defineField({
      name: 'imagen',
      title: 'Imágenes del producto',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'categoria' }],
    }),
  ],
})
