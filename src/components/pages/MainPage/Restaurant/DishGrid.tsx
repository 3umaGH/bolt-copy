import { FaPlus } from 'react-icons/fa6'
import { Dish } from '../../../../types/restaurant'

type DishGrid = {
  dish: Dish
  onClick: (dish: Dish) => void
}

export const DishGrid = ({ dish, onClick }: DishGrid) => {
  const isDiscounted = dish.price.discounted_price

  return (
    <div className='cursor-pointer' onClick={() => onClick(dish)}>
      <div className='min-w-[100px] w-[100px] min-h-auto overflow-hidden'>
        <div className='relative'>
          <div className='absolute p-2 bg-white rounded-full bottom-2 right-2'>
            <FaPlus className='h-auto min-w-5' />
          </div>

          <img src={dish.image} className='object-cover w-full h-full rounded-md aspect-square' />
        </div>

        <div className='flex flex-col'>
          <span className='overflow-hidden text-sm font-bold whitespace-nowrap text-ellipsis'>
            {isDiscounted ? (
              <>
                <span className='text-red-600'>{dish.price.discounted_price.toFixed(2)} € </span>
                <span className='text-xs text-gray-500 line-through'>{dish.price.price.toFixed(2)} € </span>
              </>
            ) : (
              <span>{dish.price.price.toFixed(2)} € </span>
            )}
          </span>
          <span className='overflow-hidden text-xs text-gray-500 whitespace-nowrap text-ellipsis'>{dish.name}</span>
        </div>
      </div>
    </div>
  )
}
