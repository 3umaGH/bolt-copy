type Category = {
  value: string
}

export const Category = ({ value }: Category) => {
  return (
    <div className='w-full mt-2'>
      <p className='text-left font-black text-lg'>{value}</p>
    </div>
  )
}
