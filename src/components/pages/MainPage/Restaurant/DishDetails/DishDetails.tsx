import clsx from 'clsx'
import { useEffect } from 'react'
import { Dish } from '../../../../../types/restaurant'
import { Checkbox } from '../../../../common/ui/Checkbox'
import { RadioButton } from '../../../../common/ui/RadioButton'
import { Footer } from './Footer'

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
                        {isMultiselect ? (
                          <Checkbox label={option.name} id={option.name} />
                        ) : (
                          <RadioButton name={category.name} label={option.name} id={option.name} />
                        )}
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
        <Footer price={isDiscounted ? dish.price.discounted_price : dish.price.price} />
      </div>
    </div>
  )
}
