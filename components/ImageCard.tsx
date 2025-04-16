import type { ImageProps } from 'next/image'

import Image from 'next/image'

export type ImageCardProps = {
  children: React.ReactNode
  imageProps: ImageProps
}

export default function ImageCard({ children, imageProps }: ImageCardProps) {
  return (
    <div className="relative h-full min-h-125 w-full overflow-hidden rounded-2xl">
      <Image
        className="absolute top-0 h-full object-cover opacity-80"
        {...imageProps}
      />
      <div className="from-neutral-dark-gray/0 via-neutral-dark-gray/50 absolute bottom-0 h-full w-full bg-gradient-to-b to-black/60" />
      <div className="absolute flex h-full w-full items-end p-8">
        {children}
      </div>
    </div>
  )
}
