'use client'
import * as React from 'react'
import {CartProvider as USCProvider} from 'use-shopping-cart'

const key = process.env.NEXT_PUBLIC_STRIPE_KEY
const url = process.env.NEXT_PUBLIC_STRIPE_URL

export default function CartProvider({children}) {
  return (
    <USCProvider
      mode='payment'
      cartMode='client-only'
      stripe={key}
      successUrl={`${url}/stripe/sucess`}
      cancelUrl={`${url}/stripe/error`}
      currency='USD'
      billingAddressCollection={false}
      shouldPersist={true}
      language='en-US'
    >
      {children}
    </USCProvider>
  )
}
