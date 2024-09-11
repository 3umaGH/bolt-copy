import clsx from 'clsx'
import React, { useState } from 'react'
import { CiCalendar } from 'react-icons/ci'
import { FaWalking } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa6'
import { IoMdBicycle } from 'react-icons/io'
import { HorizontalContainer } from '../components/pages/MainPage/HorizontalContainer'
import { DishCard } from '../components/pages/MainPage/Restaurant/DishCard'
import { DishDetails } from '../components/pages/MainPage/Restaurant/DishDetails/DishDetails'
import { DishGrid } from '../components/pages/MainPage/Restaurant/DishGrid'
import { FoodCategory } from '../components/pages/MainPage/Restaurant/FoodCategory'
import { Rating } from '../components/pages/MainPage/Restaurant/Rating'
import { MOCK_RESTAURANTS, mockDish } from '../mockData'
import { Dish } from '../types/restaurant'
import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const iconClassName = 'min-w-4 h-auto'

export const Restaurant = () => {
  const [selectedDish, setSelectedDish] = useState<Dish>(mockDish)
  const [isDishModalVisible, setDishModalVisible] = useState(false)
  const navigate = useNavigate()

  const restaurant = MOCK_RESTAURANTS[0]
  const dishes = [mockDish]

  const handleDishClick = (dish: Dish) => {
    setSelectedDish(dish)
    setDishModalVisible(true)
  }

  const handleModalClose = () => {
    setDishModalVisible(false)
  }

  const handleNavigateBack = () => {
    navigate(-1)
  }

  return (
    <div className={clsx('relative min-h-screen bg-gray-100')}>
      <DishDetails dish={selectedDish} isOpen={isDishModalVisible} onClose={handleModalClose} />

      <img src={restaurant.restaurant.image} className='w-full' />

      <div
        className='absolute p-2 bg-white rounded-full top-2 left-2 cursor-pointer active:scale-[0.98]'
        onClick={handleNavigateBack}>
        <IoMdArrowBack className='h-auto min-w-5' />
      </div>

      <div className='relative z-10 flex flex-col min-h-screen gap-2 overflow-hidden rounded-xl -top-4'>
        <div className='flex flex-col gap-2 px-4 py-4 bg-white rounded-2xl'>
          <p className='text-xl font-bold text-left'>{restaurant.restaurant.name}</p>

          <div className='flex flex-wrap items-center -mt-1 gap-x-2 gap-y-1'>
            <Rating
              averageRating={restaurant.restaurant.ratings.average_rating}
              totalRatings={restaurant.restaurant.ratings.total_ratings}
            />

            <span className='mx-0.5'>·</span>

            <div className='flex items-center gap-1'>
              <IoMdBicycle className={iconClassName} /> Delivery
              <span className='mx-0.5'>·</span>
            </div>

            <div className='flex items-center gap-1'>
              <FaWalking className={`${iconClassName}`} /> Pickup
              <span className='mx-0.5'>·</span>
            </div>

            <div className='flex items-center gap-1'>
              <CiCalendar className={iconClassName} /> Scheduling
              <span className='mx-0.5'>·</span>
            </div>

            <div className='flex items-center gap-1'>
              <span className='font-bold'>More info</span>
              <FaAngleRight className={`${iconClassName} mt-0.5`} />
            </div>
          </div>

          <hr className='mt-2' />

          <div className='flex items-center justify-between mt-2'>
            <div className='flex items-center gap-2'>
              <IoMdBicycle className='h-auto min-w-8' />

              <div className='flex flex-col'>
                <div className='flex flex-wrap gap-1'>
                  {restaurant.delivery.price.discounted_price ? (
                    <>
                      <span className='font-bold text-red-600'>
                        {restaurant.delivery.price.discounted_price.toFixed(2)} €
                      </span>
                      <span className='text-gray-400 mx-0.5'>·</span>
                    </>
                  ) : null}

                  <span className={clsx({ 'line-through text-gray-500': restaurant.delivery.price.discounted_price })}>
                    {restaurant.delivery.price.price.toFixed(2)} €
                  </span>
                </div>

                <p className='text-sm'>
                  {restaurant.delivery.time_range[0]}-{restaurant.delivery.time_range[1]} min
                </p>
              </div>
            </div>

            <FaAngleRight className='h-auto text-gray-400 min-w-5' />
          </div>
        </div>

        <div className='flex flex-col gap-4 py-4 bg-white rounded-2xl'>
          <FoodCategory value='Most Popular' className='mx-4' />
          <HorizontalContainer>
            {dishes.map(dish => (
              <DishGrid key={dish.id} dish={dish} onClick={handleDishClick} />
            ))}
          </HorizontalContainer>

          <FoodCategory value='Woks' className='mx-4 mt-8' />
          <div className='flex flex-col w-full gap-8 px-4'>
            {dishes.map(dish => (
              <React.Fragment key={dish.id}>
                <DishCard dish={dish} onClick={handleDishClick} />
                <hr />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
