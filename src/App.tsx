import { FiMapPin } from 'react-icons/fi'
import { Category } from './components/common/Category'
import { RestaurantCard } from './components/common/RestaurantCard/RestaurantCard'
import { Searchbar } from './components/pages/MainPage/Searchbar'
import { FEATURED_RESTAURANT, MOCK_RESTAURANTS } from './mockData'
import { HorizontalContainer } from './components/pages/MainPage/HorizontalContainer'

const randomSort = () => Math.random() - 0.5

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

      <RestaurantCard size='lg' options={FEATURED_RESTAURANT} />

      <Category value='😋 Must Try' />
      <HorizontalContainer>
        {MOCK_RESTAURANTS.sort(randomSort).map(restaurant => (
          <RestaurantCard key={restaurant.restaurant.name} size='sm' options={restaurant} />
        ))}
      </HorizontalContainer>

      <Category value='Your local favorites ✨' />
      <HorizontalContainer>
        {MOCK_RESTAURANTS.sort(randomSort).map(restaurant => (
          <RestaurantCard key={restaurant.restaurant.name} size='sm' options={restaurant} />
        ))}
      </HorizontalContainer>

      <Category value='🍔 Burgers' />
      <HorizontalContainer>
        {MOCK_RESTAURANTS.sort(randomSort).map(restaurant => (
          <RestaurantCard key={restaurant.restaurant.name} size='sm' options={restaurant} />
        ))}
      </HorizontalContainer>

      <Category value='🍱 Asian' />
      <HorizontalContainer>
        {MOCK_RESTAURANTS.sort(randomSort).map(restaurant => (
          <RestaurantCard key={restaurant.restaurant.name} size='sm' options={restaurant} />
        ))}
      </HorizontalContainer>

      <Category value='🍕 Pizza' />
      <HorizontalContainer>
        {MOCK_RESTAURANTS.sort(randomSort).map(restaurant => (
          <RestaurantCard key={restaurant.restaurant.name} size='sm' options={restaurant} />
        ))}
      </HorizontalContainer>
    </div>
  )
}

export default App
