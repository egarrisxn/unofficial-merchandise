import Link from 'next/link'
import Image from 'next/image'
import {client} from '../lib/sanity'
import {ArrowRight} from 'lucide-react'

async function getData() {
  const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
        _id,
          price,
        name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`

  const data = await client.fetch(query)

  return data
}

export default async function Newest() {
  const data = await getData()

  return (
    <div>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-300'>New Products</h2>

          <Link className='text-primary flex items-center gap-x-1' href='/All'>
            See All{' '}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {data.map((product) => (
            <div key={product._id} className='group relative'>
              <Link href={`/product/${product.slug}`}>
                <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-100 shadow-sm shadow-gray-100 group-hover:opacity-80 lg:h-80'>
                  <Image
                    src={product.imageUrl}
                    alt='Product image'
                    className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                    width={300}
                    height={300}
                  />
                </div>

                <div className='mt-4 flex justify-between'>
                  <div>
                    <h3 className='text-sm text-gray-400 hover:text-white'>{product.name}</h3>
                    <p className='mt-1 text-sm text-gray-300'>{product.categoryName}</p>
                  </div>
                  <p className='text-sm font-medium text-gray-300'>${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
