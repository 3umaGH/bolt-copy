import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

type Checkbox = {
  id: string
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export const RadioButton = ({ id, className, label, ...rest }: Checkbox) => {
  return (
    <div className={clsx('inline-flex items-center', className)}>
      <label className='relative flex items-center cursor-pointer' htmlFor={id}>
        <input
          type='radio'
          className='w-5 h-5 transition-all border rounded-full appearance-none cursor-pointer peer border-slate-300 checked:border-green-500'
          id={id}
          {...rest}
        />
        <span className='absolute w-3 h-3 transition-opacity duration-200 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full opacity-0 peer-checked:opacity-100 top-1/2 left-1/2'></span>
      </label>
      <label className='ml-2 cursor-pointer' htmlFor={id}>
        {label}
      </label>
    </div>
  )
}
