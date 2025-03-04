import type { StaticImageData } from 'next/image'

import Image from 'next/image'

type TestimonialProps = {
  children: React.ReactNode
  country: string
  imageSrc: StaticImageData | string
  name: string
  quoteColor: 'red' | 'green' | 'aqua'
}

export default function Testimonial({
  children,
  country,
  imageSrc,
  name,
  quoteColor,
}: TestimonialProps) {
  const colorVariants = {
    red: 'text-secondary-red',
    green: 'text-secondary-green',
    aqua: 'text-secondary-aqua',
  }

  return (
    <div className="bg-primary-dark-blue relative flex w-full flex-col rounded-3xl text-base/6 text-white">
      <p
        className={`${colorVariants[quoteColor]} font-display absolute top-5 left-5 text-7xl font-bold`}
      >
        &#x201C;
      </p>
      <div className="grow pt-7 pr-8 pb-10 pl-15">{children}</div>
      <hr className="border-white" />
      <div className="relative p-5 pb-8 pl-15">
        <p>
          <span className="font-bold">{name}</span>
          {` from ${country}`}
        </p>
        <div className="bg-neutral-light-gray absolute top-0 right-0 h-15 w-15 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
          <Image src={imageSrc} alt={`Picture of ${name}`} />
        </div>
      </div>
    </div>
  )
}
