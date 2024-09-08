import { CiSearch } from 'react-icons/ci'
import { LuSettings2 } from 'react-icons/lu'

export const Searchbar = () => {
  return (
    <div className='relative'>
      <CiSearch className='absolute top-2 left-2 w-6 h-auto' />
      <LuSettings2 className='absolute top-2 right-2 w-6 h-auto ' />
      <input placeholder='Restaurants and stores' type='text' className='bg-gray-100 p-2 px-10 rounded-md w-full' />
    </div>
  )
}
