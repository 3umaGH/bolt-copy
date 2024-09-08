import clsx from 'clsx'
import { FaStar } from 'react-icons/fa'
import { CommonProps } from '../../../types/common'

const GOLD_RATING_THRESHOLD = 4.7
const RATING_CUTOFF_THRESHOLD = 500

type RatingBadge = {
  averageRating: number
  totalRatings: number
} & CommonProps

export const RatingBadge = ({ className, averageRating, totalRatings }: RatingBadge) => {
  const isRatingGold = averageRating >= GOLD_RATING_THRESHOLD

  return (
    <div
      className={clsx(
        'w-fit h-fit px-2 py-1 rounded-md flex items-center gap-2 text-sm',
        { 'bg-white': !isRatingGold, 'bg-yellow-100': isRatingGold },
        className
      )}>
      <FaStar className={clsx({ 'text-orange-500': isRatingGold })} />
      <span className='font-bold'>{averageRating}</span>
      <span>({totalRatings > RATING_CUTOFF_THRESHOLD ? '500+' : totalRatings})</span>
    </div>
  )
}
