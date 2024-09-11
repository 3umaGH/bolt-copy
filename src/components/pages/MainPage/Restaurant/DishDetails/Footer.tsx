import { memo, useState } from 'react'
import { Stepper } from '../../../../common/ui/Stepper'

type Footer = {
  price: number
}
export const Footer = memo(({ price }: Footer) => {
  const [amount, setAmount] = useState(1)

  return (
    <div className='fixed bottom-0 bg-white z-[13] w-full'>
      <hr />
      <div className='flex items-center justify-between gap-4 p-2'>
        <Stepper min={1} max={10} onChange={setAmount} />
        <button className='flex-1 px-4 py-1 font-bold text-white bg-green-500 hover:bg-green-400 transition-all active:scale-[0.98] rounded-full max-w-[500px]'>
          <div className='flex flex-col items-center justify-center'>
            <span className='text-sm'>Add</span>
            <span className='text-xs'>{(price * amount).toFixed(2)} €</span>
          </div>
        </button>
      </div>
    </div>
  )
})
