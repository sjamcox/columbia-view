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
    <div className="flex items-center gap-7">
      <div className="from-primary-light-blue to-secondary-aqua flex h-30 w-30 shrink-0 items-center justify-center rounded-full bg-gradient-to-b">
        <Image src={icon} alt="" />
      </div>
      <div className="rounded-2xl bg-white p-7">
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
