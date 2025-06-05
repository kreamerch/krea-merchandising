// src/sanity/env.ts

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (!v) throw new Error(errorMessage)
  return v
}

export const projectId = assertValue(
  process.env.SANITY_PROJECT_ID,
  'Missing environment variable: SANITY_PROJECT_ID'
)

export const dataset = assertValue(
  process.env.SANITY_DATASET,
  'Missing environment variable: SANITY_DATASET'
)

export const apiVersion = assertValue(
  process.env.SANITY_API_VERSION,
  'Missing environment variable: SANITY_API_VERSION'
)
