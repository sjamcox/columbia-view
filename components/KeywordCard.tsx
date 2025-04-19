import type { ImageProps } from 'next/image'

import Image from 'next/image'

export type KeywordCardProps = {
  keyword: string
  text: string
  imageProps: ImageProps
}

export default function KeywordCard({
  keyword,
  text,
  imageProps,
}: KeywordCardProps) {
  return (
    <div className="h-full min-h-125 w-full overflow-hidden rounded-2xl bg-white shadow-md">
      <div className="relative flex aspect-4/3 items-center justify-center">
        <Image
          className="absolute top-0 h-full object-cover opacity-80"
          {...imageProps}
        />
        <p
          className="font-display absolute max-w-70 text-center text-6xl font-light text-white uppercase"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
          {keyword}
        </p>
      </div>
      <div className="p-12">
        <p className="text-center text-base">{text}</p>
      </div>
    </div>
  )
}
