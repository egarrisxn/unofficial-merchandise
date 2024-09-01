import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {CheckCheck} from 'lucide-react'

export default function StripeSuccess() {
  return (
    <div className='h-screen'>
      <div className='mx-auto mt-32 md:max-w-[50vw]'>
        <CheckCheck className='mx-auto my-6 size-16 text-green-600' />
        <div className='text-center'>
          <h3 className='text-base font-semibold text-gray-500 md:text-2xl'>Payment Done!</h3>
          <p className='my-2 text-gray-300'>Thank you for you purchase.</p>
          <p>Have a great day!</p>
          <Button asChild className='mt-5'>
            <Link href='/'>Back</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
