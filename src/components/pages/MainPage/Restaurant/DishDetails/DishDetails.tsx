import clsx from 'clsx'
import { useEffect } from 'react'
import { Dish } from '../../../../../types/restaurant'
import { Footer } from './Footer'
import { OptionCategorySection } from './OptionCategorySection'
import { IoClose } from 'react-icons/io5'

type DishDetails = {
  dish: Dish
  isOpen: boolean
  onClose: () => void
}

export const DishDetails = ({ dish, isOpen, onClose }: DishDetails) => {
  const isDiscounted = dish.price.discounted_price

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
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
        <div
          className='fixed p-2 bg-white rounded-full top-24 right-2 cursor-pointer active:scale-[0.98]'
          onClick={onClose}>
          <IoClose className='h-auto min-w-5' />
        </div>

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

          <p className='mt-2 text-gray-500'>{dish.ingredients.slice(1, 3).join(', ').toString()}</p>
        </div>

        {dish.options.map(category => (
          <OptionCategorySection key={category.id} category={category} />
        ))}

        <Footer onSubmit={() => {}} price={isDiscounted ? dish.price.discounted_price : dish.price.price} />
      </div>
    </div>
  )
}
