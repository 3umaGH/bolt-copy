import { CommonProps } from '@mui/material/OverridableComponent'
import clsx from 'clsx'

type OfferBadge = {
  text: string
} & CommonProps

export const OfferBadge = ({ className, text }: OfferBadge) => {
  return (
    <div
      className={clsx(
        'w-fit h-fit px-2 py-1 rounded-md flex items-center gap-2 text-sm bg-[rgba(0,0,0,0.5)]',
        className
      )}>
      <span className='text-white font-semibold'>{text}</span>
    </div>
  )
}
