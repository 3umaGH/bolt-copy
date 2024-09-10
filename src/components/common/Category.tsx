import { CommonProps } from '@mui/material/OverridableComponent'
import clsx from 'clsx'

type Category = {
  value: string
} & CommonProps

export const Category = ({ value, className }: Category) => {
  return (
    <div className={clsx('w-full mt-2', className)}>
      <p className='text-lg font-black text-left'>{value}</p>
    </div>
  )
}
