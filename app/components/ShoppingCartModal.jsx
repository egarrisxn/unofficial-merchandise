'use client'
import Image from 'next/image'
import {Sheet, SheetContent, SheetHeader, SheetTitle} from '@/components/ui/sheet'
import {Button} from '@/components/ui/button'
import {useShoppingCart} from 'use-shopping-cart'

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart()

  async function handleCheckoutClick(event) {
    event.preventDefault()
    try {
      const result = await redirectToCheckout()
      if (result?.error) {
        console.log('result')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className='w-[90vw] sm:max-w-lg'>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className='flex h-full flex-col justify-between'>
          <div className='mt-8 flex-1 overflow-y-auto'>
            <ul className='-my-6 divide-y divide-gray-200'>
              {cartCount === 0 ? (
                <h1 className='py-6'>You dont have any items</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className='flex py-6'>
                      <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                        <Image src={entry.image} alt='Product image' width={100} height={100} />
                      </div>

                      <div className='ml-4 flex flex-1 flex-col'>
                        <div>
                          <div className='flex justify-between text-base font-medium text-gray-500'>
                            <h3>{entry.name}</h3>
                            <p className='ml-4'>${entry.price}</p>
                          </div>
                          <p className='mt-1 line-clamp-2 text-sm text-gray-300'>
                            {entry.description}
                          </p>
                        </div>

                        <div className='flex flex-1 items-end justify-between text-sm'>
                          <p className='text-gray-300'>QTY: {entry.quantity}</p>

                          <div className='flex'>
                            <button
                              type='button'
                              onClick={() => removeItem(entry.id)}
                              className='text-primary hover:text-primary/80 font-medium'
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
            <div className='flex justify-between text-base font-medium text-gray-500'>
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className='mt-0.5 text-sm text-gray-300'>
              Shipping and taxes are calculated at checkout.
            </p>

            <div className='mt-6'>
              <Button onClick={handleCheckoutClick} className='w-full'>
                Checkout
              </Button>
            </div>

            <div className='mt-6 flex justify-center text-center text-sm text-gray-300'>
              <p>
                OR{' '}
                <button
                  onClick={() => handleCartClick()}
                  className='text-primary hover:text-primary/80 font-medium'
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
