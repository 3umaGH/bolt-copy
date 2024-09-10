import { useLayoutEffect, useRef } from 'react'

const slideClassName = 'w-[90svw] max-h-[300px] h-full rounded-md snap-center'

export type Slide = {
  id: number
  img: string
  href: string
}

type HorizontalSlider = {
  data: Slide[]
}

export const HorizontalSlider = ({ data }: HorizontalSlider) => {
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

    const scrollInterval = setInterval(() => {
      handleScrollNext()
    }, 2000)

    return () => {
      clearInterval(scrollInterval)
    }
  }, [sliderRef])

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
