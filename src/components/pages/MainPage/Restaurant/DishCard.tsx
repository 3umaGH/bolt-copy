import { Dish } from '../../../../types/restaurant'

type DishCard = {
  dish: Dish
  onClick: (dish: Dish) => void
}

export const DishCard = ({ dish, onClick }: DishCard) => {
  const isDiscounted = dish.price.discounted_price

  return (
    <div className='cursor-pointer' onClick={() => onClick(dish)}>
      <div className='grid w-full grid-cols-12 gap-4 overflow-hidden min-h-auto'>
        <div className='flex flex-col justify-center col-span-6 gap-2'>
          <span className='text-sm font-bold whitespace-wrap'>{dish.name}</span>

          <span className='overflow-hidden text-sm leading-4 text-gray-500 whitespace-nowrap text-ellipsis'>
            {dish.description}
          </span>
          <span className='overflow-hidden text-gray-700 whitespace-nowrap text-ellipsis'>
            {isDiscounted ? (
              <>
                <span className='text-red-600'>{dish.price.discounted_price.toFixed(2)} € </span>
                <span className='text-xs text-gray-500 line-through'>{dish.price.price.toFixed(2)} € </span>
              </>
            ) : (
              <span>{dish.price.price.toFixed(2)} € </span>
            )}
          </span>
        </div>

        <div className='flex justify-end col-span-6'>
          <div className='max-w-[200px] overflow-hidden rounded-xl'>
            <img src={dish.image} className='object-cover w-full h-full aspect-[8/6]' />
          </div>
        </div>
      </div>
    </div>
  )
}
