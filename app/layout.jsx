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
  description: 'The unofficial merchs tore for Unofficial Merchandise.',
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
    description: 'The unofficial merch store for Unofficial Merchandise.',
    url: 'https://unofficialmerchandise.vercel.app',
    siteName: 'Unofficial Merchandise',
  },
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
