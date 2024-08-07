export default function sitemap() {
  return [
    {
      url: 'https://unofficialmerchandise.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://unofficialmerchandise.vercel.app/All',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}