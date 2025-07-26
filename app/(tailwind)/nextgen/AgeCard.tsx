import ImageCard, { ImageCardProps } from '@/components/ImageCard'

export type AgeCardProps = {
  title: string
  ages: string
  color: 'aqua' | 'green' | 'red'
  description: string
} & Omit<ImageCardProps, 'children'>

export default function AgeCard({
  title,
  ages,
  color,
  description,
  imageProps,
}: AgeCardProps) {
  const colorVariants = {
    aqua: 'bg-secondary-aqua',
    green: 'bg-secondary-green',
    red: 'bg-secondary-red',
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
          <p className="text-sm font-semibold text-white uppercase">{ages}</p>
        </div>
        <p className="text-base text-white">{description}</p>
      </div>
    </ImageCard>
  )
}
