import { FiMapPin } from 'react-icons/fi'
import { Category } from './components/common/Category'
import { RestaurantCard } from './components/common/RestaurantCard/RestaurantCard'
import { Searchbar } from './components/pages/MainPage/Searchbar'
import { FEATURED_RESTAURANT, MOCK_GENERIC_SLIDES, MOCK_OFFERS_SLIDES, MOCK_RESTAURANTS } from './mockData'
import { HorizontalContainer } from './components/pages/MainPage/HorizontalContainer'
import { HorizontalSlider } from './components/pages/MainPage/HorizontalSlider'
import { RestaurantGrid } from './components/common/RestaurantCard/RestaurantGrid'
import { VerticalContainer } from './components/pages/MainPage/VerticalContainer'

const randomSort = () => Math.random() - 0.5

function App() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 px-4 font-lato'>
      <div className='flex items-center justify-start w-full gap-2 py-4 text-sm'>
        <FiMapPin className='h-auto min-w-6' />
        Random tee, Tartu 51012
      </div>

      <div className='relative w-full'>
        <Searchbar />
      </div>

      <Category value='🥕 Groceries by Bolt' />

      <RestaurantCard size='lg' options={FEATURED_RESTAURANT} />

      <HorizontalSlider data={MOCK_OFFERS_SLIDES} autoScrollMs={6000} slideSize='lg' />

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

      <HorizontalSlider data={MOCK_GENERIC_SLIDES} autoScrollMs={8000} slideSize='sm' />

      <Category value='👜 Stores' />
      <HorizontalContainer>
        {MOCK_RESTAURANTS.sort(randomSort).map(restaurant => (
          <RestaurantGrid key={restaurant.restaurant.name} size='sm' options={restaurant} />
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

      <Category value='All restaurants and stores' />
      <VerticalContainer>
        {MOCK_RESTAURANTS.sort(randomSort).map(restaurant => (
          <RestaurantCard key={restaurant.restaurant.name} size='sm' options={restaurant} />
        ))}
      </VerticalContainer>
    </div>
  )
}

export default App
