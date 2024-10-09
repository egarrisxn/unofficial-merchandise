const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://unofficialmerchandise.vercel.app'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}

// export default function robots() {
//   return {
//     rules: [
//       {
//         userAgent: '*',
//         allow: ['/'],
//       },
//     ],
//     sitemap: 'https://unofficialmerchandise.vercel.app/sitemap.xml',
//     host: 'https://unofficialmerchandise.vercel.app',
//   }
// }
