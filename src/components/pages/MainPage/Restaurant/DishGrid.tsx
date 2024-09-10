import { FaPlus } from 'react-icons/fa6'

export const DishGrid = () => {
  return (
    <div>
      <div className='min-w-[130px] w-[130px] min-h-auto overflow-hidden'>
        <div className='relative'>
          <div className='absolute p-2 bg-white rounded-full bottom-2 right-2'>
            <FaPlus className='h-auto min-w-5' />
          </div>

          <img
            src='https://images.squarespace-cdn.com/content/v1/5d59e48b1f704e0001e5d414/1671079014552-YLGGQAE5VE1ZQZDCA0P8/marcus+samuelsson+Helga%E2%80%99s+meatballs.jpg?format=500w'
            className='object-cover w-full h-full rounded-md aspect-square'
          />
        </div>

        <div className='flex flex-col'>
          <span className='overflow-hidden text-sm font-bold whitespace-nowrap text-ellipsis'>11,40 €</span>
          <span className='overflow-hidden text-sm leading-4 text-gray-500 whitespace-nowrap text-ellipsis'>
            Tasty meat dish
          </span>
        </div>
      </div>
    </div>
  )
}
