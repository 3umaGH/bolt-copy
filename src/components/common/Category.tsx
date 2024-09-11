import clsx from 'clsx'
import { CommonProps } from '../../types/common'

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
