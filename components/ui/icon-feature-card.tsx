import type { StaticImageData } from 'next/image'
import Image from 'next/image'

export type IconFeatureCardProps = {
  title: string
  description: string | string[]
  icon: {
    src: StaticImageData | string
    alt: string
  }
  highlight?: {
    text: string
    verse?: string
  }
  color: 'aqua' | 'green' | 'yellow' | 'red' | 'blue'
}

export default function IconFeatureCard({
  title,
  description,
  icon,
  highlight,
  color = 'aqua',
}: IconFeatureCardProps) {
  const colorVariants = {
    aqua: {
      text: 'text-secondary-aqua',
      background: 'bg-secondary-aqua',
      icon: 'fill-secondary-aqua',
    },
    green: {
      text: 'text-secondary-green',
      background: 'bg-secondary-green',
      icon: 'fill-secondary-green',
    },
    yellow: {
      text: 'text-secondary-yellow',
      background: 'bg-secondary-yellow',
      icon: 'fill-secondary-yellow',
    },
    red: {
      text: 'text-secondary-red',
      background: 'bg-secondary-red',
      icon: 'fill-secondary-red',
    },
    blue: {
      text: 'text-primary-light-blue',
      background: 'bg-primary-light-blue',
      icon: 'fill-primary-light-blue',
    },
  }

  return (
    <div className="flex flex-col items-center p-7">
      <Image
        className={`mb-6 h-20 w-20 ${colorVariants[color].icon}`}
        {...icon}
      />
      <h3
        className={`font-display mb-4 text-center text-4xl font-bold ${colorVariants[color].text}`}
      >
        {title}
      </h3>
      <div className="mb-4 flex flex-col gap-4 text-center">
        {Array.isArray(description) ? (
          description.map((string, i) => (
            <p key={i} className="text-base">
              {string}
            </p>
          ))
        ) : (
          <p className="text-base">{description}</p>
        )}
      </div>
      {highlight && (
        <div
          className={`rounded-lg p-3 text-center text-base text-white italic ${colorVariants[color].background}`}
        >
          <p>{highlight.text}</p>
          {highlight.verse && <p>{highlight.verse}</p>}
        </div>
      )}
    </div>
  )
}
