import {client} from './sanity'

export async function sitemapData() {
  const productQuery = `*[_type == "product"]{ "slug": slug.current, _updatedAt }`
  const products = await client.fetch(productQuery)
  return products
}
