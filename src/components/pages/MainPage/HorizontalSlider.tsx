import clsx from 'clsx'
import { useLayoutEffect, useRef } from 'react'

export type Slide = {
  id: number
  img: string
  href: string
}

type HorizontalSlider = {
  data: Slide[]
  slideSize: 'sm' | 'lg'
  autoScrollMs?: number
}

export const HorizontalSlider = ({ data, autoScrollMs, slideSize }: HorizontalSlider) => {
  const slideClassName = clsx('w-[90svw] h-full rounded-md snap-center', {
    'max-h-[110px] lg:max-h-[200px]': slideSize === 'sm',
    'max-h-[300px]': slideSize === 'lg',
  })

  const baseImages = [data[data.length - 1], ...data, ...data, data[0]]
  const slides = [...baseImages]
  const sliderRef = useRef<HTMLDivElement>(null)
  const firstSlideRef = useRef<HTMLImageElement>(null) // Used to retreive slide width to scroll it correctly.

  const handleScrollNext = () => {
    if (!sliderRef.current || !firstSlideRef.current) {
      return
    }

    const slider = sliderRef.current
    const currentScroll = slider.scrollLeft

    slider.scrollTo({
      left: currentScroll + firstSlideRef.current.clientWidth,
      behavior: 'smooth',
    })
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      handleScrollNext()
    }, 200)

    if (autoScrollMs) {
      const scrollInterval = setInterval(() => {
        handleScrollNext()
      }, autoScrollMs)

      return () => {
        clearInterval(scrollInterval)
      }
    }
  }, [autoScrollMs, sliderRef])

  const handleScroll = () => {
    if (!sliderRef.current) return

    const slider = sliderRef.current
    const slideWidth = slider.offsetWidth
    const scrollLeft = slider.scrollLeft

    if (scrollLeft + 5 >= slider.scrollWidth - slideWidth) {
      slider.scrollTo({
        left: slideWidth,
        behavior: 'instant',
      })
    }

    if (scrollLeft === 0) {
      slider.scrollTo({
        left: slider.scrollWidth - slideWidth * 2,
        behavior: 'instant',
      })
    }
  }

  return (
    <div
      ref={sliderRef}
      onScroll={handleScroll}
      className='flex w-screen gap-4 px-4 mt-2 overflow-auto snap-mandatory snap-x hide-scrollbar'>
      {slides.map((slide, index) => (
        <img
          ref={index === 0 ? firstSlideRef : null}
          src={slide.img}
          key={`${slide.id}_${index}`}
          className={slideClassName}
        />
      ))}
    </div>
  )
}
