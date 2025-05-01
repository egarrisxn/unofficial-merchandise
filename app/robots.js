export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://unofficialmerchandise.vercel.app/sitemap.xml',
  }
}
