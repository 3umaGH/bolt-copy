export const DishCard = () => {
  return (
    <div>
      <div className='grid w-full grid-cols-12 gap-4 overflow-hidden min-h-auto'>
        <div className='flex flex-col justify-center col-span-6 gap-2'>
          <span className='text-sm font-bold whitespace-wrap'>Wok with Honey chicken</span>

          <span className='overflow-hidden text-sm leading-4 text-gray-500 whitespace-nowrap text-ellipsis'>
            Tasty meat dish
          </span>
          <span className='overflow-hidden text-gray-700 whitespace-nowrap text-ellipsis'>11,40 €</span>
        </div>

        <div className='flex justify-end col-span-6'>
          <div className='max-w-[200px] overflow-hidden rounded-xl'>
            <img
              src='https://images.squarespace-cdn.com/content/v1/5d59e48b1f704e0001e5d414/1671079014552-YLGGQAE5VE1ZQZDCA0P8/marcus+samuelsson+Helga%E2%80%99s+meatballs.jpg?format=500w'
              className='object-cover w-full h-full aspect-[8/6]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
