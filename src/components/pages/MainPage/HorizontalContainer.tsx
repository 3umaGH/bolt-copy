import React from 'react'
import { CommonProps } from '../../../types/common'
import clsx from 'clsx'

type HorizontalContainer = {
  children: React.ReactNode
} & CommonProps

export const HorizontalContainer = ({ className, children }: HorizontalContainer) => {
  return <div className={clsx('hide-scrollbar flex gap-4 overflow-auto w-screen px-4', className)}>{children}</div>
}
