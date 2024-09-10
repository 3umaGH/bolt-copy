import clsx from 'clsx'
import { useEffect } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { Dish } from '../../../../types/restaurant'

type DishDetails = {
  dish: Dish
  isOpen: boolean
  onClose: () => void
}

export const DishDetails = ({ dish, isOpen, onClose }: DishDetails) => {
  const isDiscounted = dish.price.discounted_price

  useEffect(() => {
    if (isOpen) {
      //document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div className='relative'>
      {isOpen ? (
        <div className='w-screen h-screen bg-black opacity-20 fixed top-0 left-0 z-[12]' onClick={onClose} />
      ) : null}

      <div
        className={clsx(
          'fixed top-20 bg-gray-100 z-[12] w-screen h-screen transition-all overflow-auto rounded-2xl pb-48',
          {
            'translate-y-[100%]': !isOpen,
          }
        )}>
        <div className='w-full'>
          <img src={dish.image} className='object-contain w-full max-h-auto' />
        </div>
        <div className='flex flex-col gap-2 px-4 py-4 bg-white rounded-xl'>
          <span className='text-xl font-bold whitespace-wrap'>{dish.name}</span>
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

          <hr className='mt-2' />

          <p className='mt-2 text-gray-500'>{dish.ingredients.join(', ')}</p>
        </div>

        {dish.options.map(category => {
          const isMultiselect = category.maximum_options > 1

          return (
            <div key={category.id} className='px-4 py-2 mt-2 bg-white rounded-xl'>
              <div className='flex items-center gap-2 whitespace-wrap'>
                <span className='text-lg font-bold'>{category.name}</span>

                {category.required ? (
                  <span className='px-2 py-0.5 text-xs font-bold text-white bg-red-500 rounded-md'>Required</span>
                ) : null}
              </div>
              {isMultiselect ? (
                <span className='text-xs text-gray-500'>Not more than {category.maximum_options}.</span>
              ) : null}

              <div className='mt-2'>
                {category.options.map((option, index) => (
                  <div key={option.id}>
                    <div className='flex justify-between py-4'>
                      <span className='flex items-center gap-2'>
                        {/* Todo checkbox/radiobox */}
                        {isMultiselect ? (
                          <div className='w-5 h-5 border-2 rounded-md' />
                        ) : (
                          <div className='w-5 h-5 border-2 rounded-full' />
                        )}

                        {option.name}
                      </span>
                      <span className='text-gray-500 text-[1rem] tracking-wide'>
                        {option.price >= 0 ? '+' : '-'}
                        {option.price.toFixed(2).replace('.', ',')} €
                      </span>
                    </div>
                    {index !== category.options.length - 1 ? <hr /> : null}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className='fixed bottom-0 bg-white z-[13] w-full'>
        <hr />
        <div className='flex items-center justify-between gap-4 p-2'>
          <div className=' max-w-[500px] flex items-center flex-grow-[0.25] justify-between gap-4 py-2 px-4 font-bold border-[1px] border-gray-300 rounded-full'>
            <FaMinus className='text-gray-400' />
            <span>1</span>
            <FaPlus />
          </div>
          <button className='flex-1 px-4 py-1 font-bold text-white bg-green-500 rounded-full max-w-[500px]'>
            <div className='flex flex-col items-center justify-center'>
              <span className='text-sm'>Add</span>
              <span className='text-xs'>{isDiscounted ? dish.price.discounted_price : dish.price.price} €</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
