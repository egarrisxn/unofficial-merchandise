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
  keywords: ['sanity', 'next', 'react', 'tailwindcss', 'cms', 'ecommerce', 'egarrisxn'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Unofficial Merchandise',
    description: 'The unofficial ecommerce webstore for Unofficial Merchandise.',
    url: 'https://unofficialmerchandise.vercel.app',
    siteName: 'Unofficial Merchandise',
    images: [
      {
        url: `https://unofficialmerchandise.vercel.app/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'The unofficial ecommerce webstore for Unofficial Merchandise.',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    creator: 'eg__xo',
    site: 'https://twitter.com/eg_xo_',
    title: 'EG. | Blog',
    description: 'SPEND A LITTLE TIME INSIDE MY HEAD.',
    images: [
      {
        url: `https://unofficialmerchandise.vercel.app/twitter-image.png`,
        width: 1200,
        height: 630,
        alt: 'The unofficial ecommerce webstore for Unofficial Merchandise.',
      },
    ],
  },
  icons: {
    shortcut: 'https://unofficialmerchandise.vercel.app/favicon.ico',
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
