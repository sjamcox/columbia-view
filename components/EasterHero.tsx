'use client'

import Image, { type StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import Button from '@/components/ui/button'

import bubbles from '@/public/easter/2025/bubbles-outside.webp'
import david from '@/public/easter/2025/david-light.webp'
import party from '@/public/easter/2025/easter-party.webp'
import jennifer from '@/public/easter/2025/jennifer-peace.webp'
import noya from '@/public/easter/2025/noya-family.webp'
import rannabargar from '@/public/easter/2025/rannabargar-family.webp'
import selena from '@/public/easter/2025/selena-family.webp'

const slides: { src: StaticImageData; alt: string }[] = [
  { src: david, alt: 'Pastor David speaking at Easter service' },
  { src: bubbles, alt: 'Bubbles floating outside at Easter celebration' },
  { src: party, alt: 'Easter party celebration' },
  { src: noya, alt: 'The Noya family at Easter' },
  { src: jennifer, alt: 'Jennifer at Easter service' },
  { src: rannabargar, alt: 'The Rannabargar family at Easter' },
  { src: selena, alt: 'The Selena family at Easter' },
]

export default function EasterHero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slideshow */}
      <div className="relative min-h-[calc(60vh+100px)] w-full md:min-h-[70vh]">
        {slides.map((slide, i) => (
          <div
            key={slide.alt}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className={`object-cover transition-transform duration-[6000ms] ease-out ${
                i === current ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary-dark-blue via-primary-dark-blue/60 to-transparent" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 pb-24 md:pb-28 lg:pb-32">
          <div className="max-w-3xl">
            <h1 className="font-display relative mb-2 text-5xl font-black tracking-tight text-white md:text-7xl lg:text-8xl">
              <span
                aria-hidden="true"
                className="absolute left-[3px] top-[3px] text-primary-light-blue md:left-[5px] md:top-[5px]"
              >
                Easter Sunday
              </span>
              <span className="relative">Easter Sunday</span>
            </h1>
            <p className="font-display mb-3 text-3xl font-bold text-white drop-shadow-lg md:text-4xl lg:text-5xl">
              April 5, 2026
            </p>
            <p className="mb-1 text-lg font-medium text-white/90 drop-shadow-lg md:text-xl">
              Doors open at 9:30a
            </p>
            <p className="mb-8 text-lg text-white/70 drop-shadow-lg md:text-xl">
              Kids egg hunt after service
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="https://columbiaview.churchcenter.com/registrations/events/3486581"
                color="blue"
              >
                Register
              </Button>
              <Button href="/plan-your-visit" color="lime">
                Plan Your Visit
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy bottom shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          role="img"
          aria-hidden="true"
          className="relative block h-16 w-full md:h-24 lg:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ transform: 'scaleY(-1)' }}
        >
          <path
            d="M0,0V32.4c47.79,15.54,103.59,22.52,158,19.6,70.36-3.76,136.33-23.32,206.8-26.25C438.64,22.7,512.34,37.57,583,50.44c69.27,12.6,138.3,17.42,209.4,9.16,36.15-4.2,69.85-12.49,104.45-20.54C989.49,17.5,1113-10,1200,36.73V0Z"
            className="fill-neutral-light-blue"
            opacity=".6"
          />
          <path
            d="M0,0V11.07C13,25.84,27.64,39.8,47.69,50.44,99.41,77.89,165,77.7,224.58,64.11c31.15-7.11,60.09-18.25,89.67-27.86,40.92-13.3,84.73-32.2,130.83-34.77,36.26-2,70.9,6.59,98.6,22.09,31.77,17.77,62.32,43.4,103.63,51.1,40.44,7.55,81.35-4.68,119.13-17s75.16-27.3,116.92-30.14c59.73-4.1,113.28,16.02,168.9,27.19,30.2,6.06,59,4.32,87.09-5.25,22.43-7.62,48-18.85,60.65-34.47V0Z"
            className="fill-neutral-light-blue"
            opacity=".85"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-white"
          />
        </svg>
      </div>
    </div>
  )
}
