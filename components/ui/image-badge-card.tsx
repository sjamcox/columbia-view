import ImageCard, { ImageCardProps } from '@/components/ImageCard'

export type ImageBadgeCardProps = {
  title: string
  badgeText: string
  color: 'aqua' | 'green' | 'red' | 'yellow' | 'blue'
  description: string
} & Omit<ImageCardProps, 'children'>

export default function ImageBadgeCard({
  title,
  badgeText,
  color,
  description,
  imageProps,
}: ImageBadgeCardProps) {
  const colorVariants = {
    aqua: 'bg-secondary-aqua',
    green: 'bg-secondary-green',
    red: 'bg-secondary-red',
    yellow: 'bg-secondary-yellow',
    blue: 'bg-primary-light-blue',
  }

  return (
    <ImageCard imageProps={imageProps}>
      <div className="flex flex-col">
        <p className="font-display mb-2 text-4xl font-bold text-white">
          {title}
        </p>
        <div
          className={`mb-3 px-3 py-1 ${colorVariants[color]} w-fit rounded-full`}
        >
          <p className="text-sm font-semibold text-white uppercase">{badgeText}</p>
        </div>
        <p className="text-base text-white">{description}</p>
      </div>
    </ImageCard>
  )
}
