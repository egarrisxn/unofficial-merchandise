import './globals.css'
import {Inter} from 'next/font/google'
import CartProvider from './components/Providers'
import MyNavbar from './components/MyNavbar'
import ShoppingCartModal from './components/ShoppingCartModal'
import MyFooter from './components/MyFooter'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  metadataBase: new URL('https://unofficialmerchandise.vercel.app'),
  title: 'Unofficial Merchandise',
  description: 'The unofficial ecommerce webstore for Unofficial Merchandise.',
  referrer: 'origin-when-cross-origin',
  creator: 'https://egxo.dev.',
  keywords: ['sanity', 'next', 'react', 'tailwindcss', 'cms', 'ecommerce', 'egarrisxn'],
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Unofficial Merchandise',
    description: 'The unofficial ecommerce webstore for Unofficial Merchandise.',
    url: 'https://unofficialmerchandise.vercel.app',
    siteName: 'Unofficial Merchandise',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'The unofficial ecommerce webstore for Unofficial Merchandise.',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unofficial Merchandise',
    description: 'The unofficial ecommerce webstore for Unofficial Merchandise.',
    creator: '@eg__xo',
    site: '@eg__xo',
    images: [
      {
        url: '/twitter-image.png',
        width: 1200,
        height: 630,
        alt: 'The unofficial ecommerce webstore for Unofficial Merchandise.',
      },
    ],
  },
  icons: {
    icon: [
      {url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon'},
      {url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png'},
      {url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
    ],
    apple: [{url: '/apple-icon-192x192.png', sizes: '192x192', type: 'image/png'}],
    other: [
      {
        rel: 'apple-icon-precomposed',
        url: '/apple-icon-precomposed.png',
      },
    ],
  },
}

export const viewport = {
  themeColor: '#040f2a',
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <CartProvider>
          <MyNavbar />
          <ShoppingCartModal />
          <main>{children}</main>
          <MyFooter />
        </CartProvider>
      </body>
    </html>
  )
}
