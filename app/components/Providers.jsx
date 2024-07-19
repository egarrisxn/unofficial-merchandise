'use client'
import * as React from 'react'
import {CartProvider as USCProvider} from 'use-shopping-cart'

export default function CartProvider({children}) {
  return (
    <USCProvider
      mode='payment'
      cartMode='client-only'
      stripe={
        process.env.NEXT_PUBLIC_STRIPE_KEY ||
        'pk_test_51PPCgBKD11DvxmN15FvbQ984nufA46EdeEZiMINt8JY3gU5oCDKhUFSsKuKJYKAteXFmYBtdzsUrL3TRmiqiK6x700FyJ5Ehb3'
      }
      successUrl='stripe.com'
      cancelUrl='egxworld.net'
      currency='USD'
      billingAddressCollection={false}
      shouldPersist={true}
      language='en-US'
    >
      {children}
    </USCProvider>
  )
}
