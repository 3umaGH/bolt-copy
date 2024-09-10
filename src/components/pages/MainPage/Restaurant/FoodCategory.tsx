import clsx from 'clsx'
import { CommonProps } from '../../../../types/common'

type FoodCategory = {
  value: string
} & CommonProps

export const FoodCategory = ({ value, className }: FoodCategory) => {
  return (
    <div className={clsx('w-full', className)}>
      <p className='text-xl font-bold text-left'>{value}</p>
    </div>
  )
}
