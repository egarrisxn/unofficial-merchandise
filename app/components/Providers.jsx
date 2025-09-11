'use client'
import * as React from 'react'
import {CartProvider as USCProvider} from 'use-shopping-cart'

const key = process.env.NEXT_PUBLIC_STRIPE_KEY

const isProduction = process.env.NODE_ENV === 'production'

const successUrl = isProduction
  ? 'https://unofficialmerchandise.vercel.app/stripe/success'
  : 'http://localhost:3000/stripe/success'

const cancelUrl = isProduction
  ? 'https://unofficialmerchandise.vercel.app/stripe/error'
  : 'http://localhost:3000/stripe/error'

export default function CartProvider({children}) {
  return (
    <USCProvider
      mode='payment'
      cartMode='client-only'
      stripe={key}
      successUrl={successUrl}
      cancelUrl={cancelUrl}
      currency='USD'
      billingAddressCollection={false}
      shouldPersist={true}
      language='en-US'
    >
      {children}
    </USCProvider>
  )
}
