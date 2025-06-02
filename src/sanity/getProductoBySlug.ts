import { createClient } from '@sanity/client'
import { productoPorSlugQuery } from './queries'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: '2025-05-28',
  useCdn: true,
})

export async function fetchProductoPorSlug(slug: string) {
  return await client.fetch(productoPorSlugQuery, { slug })
}
