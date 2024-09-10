import clsx from 'clsx'
import { IoMdBicycle } from 'react-icons/io'
import { PiTimer } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { CommonProps } from '../../../types/common'
import { RestaurantOptions } from '../../../types/restaurant'
import { OfferBadge } from './OfferBadge'
import { RatingBadge } from './RatingBadge'

type RestaurantCard = {
  size: 'sm' | 'lg'

  options: RestaurantOptions
} & CommonProps

export const RestaurantCard = ({ className, size, options }: RestaurantCard) => {
  const iconClass = clsx('h-auto', { 'w-5': size === 'lg', 'w-4': size === 'sm' })

  return (
    <Link to={`restaurant/${options.restaurant.id}`} className={clsx('leading-5', className)}>
      <div
        className={clsx('relative overflow-hidden min-w-[225px] lg:min-w-[425px] xl:min-w-[625px]', {
          'max-w-[600px]': size === 'sm',
          'max-w-[800px]': size === 'lg',
        })}>
        <div className='absolute w-full h-full p-2'>
          <div className='flex justify-between h-1/2'>
            {options.restaurant.badge_text ? <OfferBadge text={options.restaurant.badge_text} /> : null}
          </div>

          <div className='flex items-end justify-end h-1/2'>
            <RatingBadge
              averageRating={options.restaurant.ratings.average_rating}
              totalRatings={options.restaurant.ratings.total_ratings}
            />
          </div>
        </div>

        <img className='w-full overflow-hidden rounded-md' src={options.restaurant.image} />
      </div>
      <div className='mt-2'>
        <p className='font-bold tracking-wide'>{options.restaurant.name}</p>

        <div
          className={clsx('flex text-nowrap w-full overflow-hidden', {
            'gap-4 text-sm': size === 'lg',
            'gap-2 text-[0.75rem]': size === 'sm',
          })}>
          <span className='flex items-center gap-1'>
            <IoMdBicycle className={iconClass} />

            {options.delivery.price.discounted_price ? (
              <>
                <span className='font-bold text-red-500'>{options.delivery.price.discounted_price.toFixed(2)} €</span>
                <span className='text-gray-400 mx-0.5'>·</span>
              </>
            ) : null}

            <span className={clsx({ 'line-through text-gray-500': options.delivery.price.discounted_price })}>
              {options.delivery.price.price.toFixed(2)} €
            </span>
          </span>

          <span className='flex items-center gap-1'>
            <PiTimer className={iconClass} /> {options.delivery.time_range[0]}-{options.delivery.time_range[1]} min
          </span>
        </div>
      </div>
    </Link>
  )
}
