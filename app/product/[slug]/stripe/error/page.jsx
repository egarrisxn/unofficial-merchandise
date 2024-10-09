import Link from 'next/link'
import {Button} from '@/components/ui/button'

export default function StripeError() {
  return (
    <div className='h-screen'>
      <div className='mx-auto mt-32 md:max-w-[50vw]'>
        <div className='text-center'>
          <h3 className='text-base font-semibold text-gray-500 md:text-2xl'>
            Something went wrong....
          </h3>
          <p className='my-2 text-gray-300'>Please try again.</p>
          <Button asChild className='mt-5'>
            <Link href='/'>Back</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
