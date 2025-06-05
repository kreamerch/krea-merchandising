export const allProductosQuery = `
  *[_type == "producto"]{
    _id,
    title,
    "slug": slug.current,
    precio,
    color,
    "imagen": imagen[0].asset->url,
    categoria->{title, slug}
  }
`

export const productoPorSlugQuery = `
  *[_type == "producto" && slug.current == $slug][0]{
    _id,
    title,
    precio,
    color,
    "slug": slug.current,
    "imagen": imagen[].asset->{
      url
    },
    categoria->{
      title,
      slug
    }
  }
`
