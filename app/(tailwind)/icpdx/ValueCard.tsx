import type { StaticImageData } from 'next/image'

import Image from 'next/image'

type ValueCardProps = {
  title: string
  subtitle: string
  description: string
  icon: StaticImageData
}

export default function ValueCard({
  title,
  subtitle,
  description,
  icon,
}: ValueCardProps) {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:gap-7">
      <div className="from-primary-light-blue to-secondary-aqua border-primary-dark-blue z-10 flex h-30 w-30 shrink-0 items-center justify-center rounded-full bg-gradient-to-b max-sm:border-5">
        <Image src={icon} alt="" />
      </div>
      <div className="rounded-2xl bg-white p-7 max-sm:-mt-3 max-sm:text-center">
        <h3 className="font-display mb-4 text-2xl font-semibold">
          {title}{' '}
          <span className="text-neutral-mid-gray font-normal italic">
            {subtitle}
          </span>
        </h3>
        <p className="text-base">{description}</p>
      </div>
    </div>
  )
}
