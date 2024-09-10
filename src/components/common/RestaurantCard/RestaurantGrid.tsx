import clsx from 'clsx'
import { CommonProps } from '../../../types/common'
import { RestaurantOptions } from '../../../types/restaurant'

type RestaurantGrid = {
  size: 'sm' | 'lg'

  options: RestaurantOptions
} & CommonProps

export const RestaurantGrid = ({ className, size, options }: RestaurantGrid) => {
  return (
    <div className={clsx('leading-5', className)}>
      <div
        className={clsx('relative overflow-hidden min-w-[90px] w-screen', {
          'max-w-[100px] lg:max-w-[200px]': size === 'sm',
          'max-w-[140px] lg:max-w-[250px]': size === 'lg',
        })}>
        <img className='object-cover w-full overflow-hidden rounded-md aspect-square' src={options.restaurant.image} />
        <div className='mt-2 overflow-hidden text-sm text-center'>
          <span className='overflow-hidden font-bold whitespace-normal line-clamp-2 text-ellipsis'>
            {options.restaurant.name}
          </span>
        </div>
      </div>
    </div>
  )
}
