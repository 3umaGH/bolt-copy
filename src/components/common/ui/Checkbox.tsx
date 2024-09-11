import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

type Checkbox = {
  id: string
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({ id, className, label, ...rest }: Checkbox) => {
  return (
    <div className={clsx('inline-flex items-center', className)}>
      <label className='relative flex items-center cursor-pointer' htmlFor={id}>
        <input
          type='checkbox'
          className='w-5 h-5 transition-all border rounded shadow appearance-none cursor-pointer peer hover:shadow-md border-slate-300 checked:bg-green-500 checked:border-green-500'
          id={id}
          {...rest}
        />
        <span className='absolute text-white transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-3.5 w-3.5'
            viewBox='0 0 20 20'
            fill='currentColor'
            stroke='currentColor'
            strokeWidth='1'>
            <path
              fillRule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clipRule='evenodd'></path>
          </svg>
        </span>
      </label>
      <label className='ml-2 cursor-pointer' htmlFor={id}>
        {label}
      </label>
    </div>
  )
}
