import clsx from 'clsx'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

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
  const slideClassName = clsx('h-full rounded-md snap-center', {
    'min-w-[200px] lg:min-w-[400px]': slideSize === 'sm',
    'min-w-[300px] lg:min-w-[500px]': slideSize === 'lg',
  })

  const baseImages = [data[data.length - 1], ...data, ...data, data[0]]
  const slides = [...baseImages]
  const sliderRef = useRef<HTMLDivElement>(null)
  const firstSlideRef = useRef<HTMLImageElement>(null) // Used to retreive slide width to scroll it correctly.
  const [userScrolled, setUserScrolled] = useState(false)

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
  }, [])

  useEffect(() => {
    if (autoScrollMs) {
      const scrollInterval = setInterval(() => {
        if (userScrolled) {
          setUserScrolled(false)
        } else {
          handleScrollNext()
        }
      }, autoScrollMs)

      return () => {
        clearInterval(scrollInterval)
      }
    }
  }, [autoScrollMs, sliderRef, userScrolled])

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

  // If user touches/clicks the component, we pause the autoscroll
  const handleTouchStart = () => {
    setUserScrolled(true)
  }

  return (
    <div
      ref={sliderRef}
      onScroll={handleScroll}
      onTouchStart={handleTouchStart}
      onClick={handleTouchStart}
      className='flex w-screen gap-4 px-4 mt-2 overflow-auto snap-mandatory snap-x hide-scrollbar'>
      {slides.map((slide, index) => (
        <Link to={slide.href} key={`${slide.id}_${index}`} className={slideClassName}>
          <img ref={index === 0 ? firstSlideRef : null} src={slide.img} className='w-full h-full' />
        </Link>
      ))}
    </div>
  )
}
