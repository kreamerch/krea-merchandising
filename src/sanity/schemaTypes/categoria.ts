import { defineField, defineType } from 'sanity'

export const categoria = defineType({
  name: 'categoria',
  title: 'Categoría',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nombre de categoría', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
  ],
})
