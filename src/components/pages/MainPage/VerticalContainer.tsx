import React from 'react'
import { CommonProps } from '../../../types/common'
import clsx from 'clsx'

type VerticalContainer = {
  children: React.ReactNode
} & CommonProps

export const VerticalContainer = ({ className, children }: VerticalContainer) => {
  return (
    <div className={clsx('hide-scrollbar flex flex-col items-center gap-4 overflow-auto w-screen px-4', className)}>
      {children}
    </div>
  )
}
