import { FiMapPin } from 'react-icons/fi'
import { Category } from './components/common/Category'
import { RestaurantCard } from './components/common/RestaurantCard/RestaurantCard'
import { Searchbar } from './components/pages/MainPage/Searchbar'

export const MockList = () => {
  return (
    <div className='hide-scrollbar flex gap-4 overflow-auto w-screen px-4'>
      <RestaurantCard
        img='https://static.vecteezy.com/system/resources/thumbnails/005/577/796/small_2x/salad-quail-egg-tomato-mix-leaves-vegetable-healthy-meal-vegan-or-vegetarian-food-photo.jpg'
        size='sm'
        options={{
          restaurant: {
            name: 'Bolt Market Soola',
            //badge_text: '16% off, up to 3 Eur',
            ratings: {
              average_rating: 4.6,
              total_ratings: 500,
            },
          },
          delivery: {
            time_range: [20, 60],
            price: { price: 12.7, discounted_price: 11.5 },
          },
        }}
      />

      <RestaurantCard
        img='https://static.vecteezy.com/system/resources/thumbnails/005/577/796/small_2x/salad-quail-egg-tomato-mix-leaves-vegetable-healthy-meal-vegan-or-vegetarian-food-photo.jpg'
        size='sm'
        options={{
          restaurant: {
            name: 'Bolt Market Soola',
            //badge_text: '16% off, up to 3 Eur',
            ratings: {
              average_rating: 4.6,
              total_ratings: 500,
            },
          },
          delivery: {
            time_range: [20, 60],
            price: { price: 2.7, discounted_price: 1.5 },
          },
        }}
      />

      <RestaurantCard
        img='https://static.vecteezy.com/system/resources/thumbnails/005/577/796/small_2x/salad-quail-egg-tomato-mix-leaves-vegetable-healthy-meal-vegan-or-vegetarian-food-photo.jpg'
        size='sm'
        options={{
          restaurant: {
            name: 'Bolt Market Soola',
            //badge_text: '16% off, up to 3 Eur',
            ratings: {
              average_rating: 4.6,
              total_ratings: 500,
            },
          },
          delivery: {
            time_range: [20, 60],
            price: { price: 2.7, discounted_price: 1.5 },
          },
        }}
      />
    </div>
  )
}

function App() {
  return (
    <div className='flex flex-col justify-center items-center font-lato px-4 gap-4'>
      <div className='flex gap-2 items-center py-4 justify-start w-full text-sm'>
        <FiMapPin className='min-w-6 h-auto' />
        Random tee, Tartu 51012
      </div>

      <div className='w-full relative'>
        <Searchbar />
      </div>

      <Category value='🥕 Groceries by Bolt' />

      <RestaurantCard
        img='https://static.vecteezy.com/system/resources/thumbnails/005/577/796/small_2x/salad-quail-egg-tomato-mix-leaves-vegetable-healthy-meal-vegan-or-vegetarian-food-photo.jpg'
        size='lg'
        options={{
          restaurant: {
            name: 'Bolt Market Soola',
            //badge_text: '16% off, up to 3 Eur',
            ratings: {
              average_rating: 4.6,
              total_ratings: 500,
            },
          },
          delivery: {
            time_range: [20, 60],
            price: { price: 2.7, discounted_price: 1.5 },
          },
        }}
      />

      <Category value='😋 Must Try' />
      <MockList />

      <Category value='Your local favorites ✨' />
      <MockList />

      <Category value='🍔 Burgers' />
      <MockList />

      <Category value='🍱 Asian' />
      <MockList />

      <Category value='🍕 Pizza' />
      <MockList />
    </div>
  )
}

export default App
