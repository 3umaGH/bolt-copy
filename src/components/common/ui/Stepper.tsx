import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'

type Stepper = {
  min: number
  max: number
  onChange?: (newValue: number, prevValue: number) => void
}

export const Stepper = ({ min, max, onChange }: Stepper) => {
  const [value, setValue] = useState<number>(min)

  const handleIncrease = () => {
    setValue(p => {
      const newValue = p + 1 >= max ? max : p + 1
      if (onChange) onChange(newValue, p)
      return newValue
    })
  }

  const handleDecrease = () => {
    setValue(p => {
      const newValue = p - 1 <= min ? min : p - 1
      if (onChange) onChange(newValue, p)
      return newValue
    })
  }

  return (
    <div className='select-none max-w-[500px] flex items-center flex-grow-[0.25] justify-between gap-4 py-2 px-4 font-bold border-[1px] border-gray-300 rounded-full'>
      <FaMinus className={`cursor-pointer ${value === min ? 'text-gray-400' : ''}`} onClick={handleDecrease} />
      <span className='min-w-[25px] text-center'>{value}</span>
      <FaPlus className={`cursor-pointer ${value === max ? 'text-gray-400' : ''}`} onClick={handleIncrease} />
    </div>
  )
}
