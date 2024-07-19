import AddToBag from '@/app/components/AddToBag'
import CheckoutNow from '@/app/components/CheckoutNow'
import ImageGallery from '@/app/components/ImageGallery'
import {Button} from '@/components/ui/button'
import {client} from '@/app/lib/sanity'
import {Star, Truck} from 'lucide-react'

async function getData(slug) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          price_id
      }`

  const data = await client.fetch(query)

  return data
}

export const dynamic = 'force-dynamic'

export default async function ProductPge({params}) {
  const data = await getData(params.slug)

  return (
    <div>
      <div className='mx-auto max-w-screen-xl px-4 pb-8 md:px-8'>
        <div className='grid gap-8 md:grid-cols-2'>
          <ImageGallery images={data.images} />

          <div className='md:py-8'>
            <div className='mb-2 md:mb-3'>
              <span className='mb-0.5 inline-block text-gray-300'>{data.categoryName}</span>
              <h2 className='text-2xl font-bold text-gray-400 lg:text-3xl'>{data.name}</h2>
            </div>

            <div className='mb-6 flex items-center gap-3 md:mb-10'>
              <Button className='gap-x-2 rounded-3xl bg-primary/70'>
                <span className='text-sm'>4.8</span>
                <Star className='size-4' />
              </Button>
              <span className='text-sm text-gray-300 transition duration-100'>68 Ratings</span>
            </div>

            <div className='mb-4'>
              <div className='flex items-end gap-2'>
                <span className='text-xl font-bold text-gray-300 md:text-2xl'>${data.price}</span>
                <span className='mb-0.5 text-primary line-through'>${data.price + 10.01}</span>
              </div>

              <span className='text-sm text-gray-300'>shipping at checkout</span>
            </div>

            <div className='mb-6 flex items-center gap-2 text-gray-500'>
              <Truck className='h-6 w-6' />
              <span className='text-sm'>3-5 Day Shipping</span>
            </div>

            <div className='flex gap-2.5'>
              <AddToBag
                currency='USD'
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency='USD'
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
            </div>

            <p className='mt-12 text-base tracking-wide text-gray-500'>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
