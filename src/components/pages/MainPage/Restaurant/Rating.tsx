import { CommonProps } from '@mui/material/OverridableComponent'
import clsx from 'clsx'
import { FaStar } from 'react-icons/fa'

const GOLD_RATING_THRESHOLD = 4.7
const RATING_CUTOFF_THRESHOLD = 500

type RatingBadge = {
  averageRating: number
  totalRatings: number
} & CommonProps

export const Rating = ({ className, averageRating, totalRatings }: RatingBadge) => {
  const isRatingGold = averageRating >= GOLD_RATING_THRESHOLD

  return (
    <div className={clsx('w-fit h-fit flex items-center gap-1', className)}>
      <FaStar className={clsx({ 'text-orange-500': isRatingGold })} />
      <span className='font-bold'>{averageRating}</span>
      <span>({totalRatings > RATING_CUTOFF_THRESHOLD ? '500+' : totalRatings})</span>
    </div>
  )
}
