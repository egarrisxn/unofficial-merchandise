import {sitemapData} from './lib/data'

export default async function sitemap() {
  const products = await sitemapData()

  const baseUrl = 'https://unofficialmerchandise.vercel.app'

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/Shirts`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/Outerwear`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/Accessories`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/All`,
      lastModified: new Date().toISOString(),
    },
  ]

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: product._updatedAt,
  }))

  return [...staticRoutes, ...productRoutes]
}
