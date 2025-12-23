import type { ImageProps } from 'next/image'
import Image from 'next/image'

interface OverlappingImageGridProps {
  images: {
    src: ImageProps['src']
    alt: string
  }[]
  className?: string
}

export default function OverlappingImageGrid({
  images,
  className = '',
}: OverlappingImageGridProps) {
  // This component specifically handles the 3-image overlapping pattern from the NextGen page
  const [img1, img2, img3] = images

  return (
    <div className={`grid grid-cols-6 ${className}`}>
      {img1 && (
        <div className="col-start-3 col-end-7 aspect-4/3 overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src={img1.src}
            alt={img1.alt}
            className="h-full object-cover"
          />
        </div>
      )}
      {img2 && (
        <div className="col-start-1 col-end-5 -mt-12 aspect-4/3 overflow-hidden rounded-2xl bg-black shadow-2xl">
          <Image
            src={img2.src}
            alt={img2.alt}
            className="h-full object-cover"
          />
        </div>
      )}
      {img3 && (
        <div className="col-start-3 col-end-7 -mt-12 aspect-4/3 overflow-hidden rounded-2xl bg-black shadow-2xl">
          <Image
            src={img3.src}
            alt={img3.alt}
            className="h-full object-cover"
          />
        </div>
      )}
    </div>
  )
}
