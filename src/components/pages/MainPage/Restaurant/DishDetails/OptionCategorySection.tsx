import { OptionCategory } from '../../../../../types/restaurant'
import { Checkbox } from '../../../../common/ui/Checkbox'
import { RadioButton } from '../../../../common/ui/RadioButton'

type OptionCategorySection = {
  category: OptionCategory
}

export const OptionCategorySection = ({ category }: OptionCategorySection) => {
  const isMultiselect = category.maximum_options > 1

  return (
    <div className='px-4 py-2 mt-2 bg-white rounded-xl'>
      <div className='flex items-center gap-2 whitespace-wrap'>
        <span className='text-lg font-bold'>{category.name}</span>

        {category.required ? (
          <span className='px-2 py-0.5 text-xs font-bold text-white bg-red-500 rounded-md'>Required</span>
        ) : null}
      </div>
      {isMultiselect ? <span className='text-xs text-gray-500'>Not more than {category.maximum_options}.</span> : null}

      <div className='mt-2'>
        {category.options.map((option, index) => (
          <div key={option.id}>
            <div className='flex justify-between py-4'>
              <span className='flex items-center gap-2'>
                {isMultiselect ? (
                  <Checkbox label={option.name} id={option.name} />
                ) : (
                  <RadioButton name={category.name} label={option.name} id={option.name} />
                )}
              </span>
              <span className='text-gray-500 text-[1rem] tracking-wide'>
                {option.price >= 0 ? '+' : '-'}
                {option.price.toFixed(2).replace('.', ',')} €
              </span>
            </div>
            {index !== category.options.length - 1 ? <hr /> : null}
          </div>
        ))}
      </div>
    </div>
  )
}
