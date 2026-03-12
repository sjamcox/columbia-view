'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function YouTubePlayer({ videoId }: { videoId: string }) {
  const [activated, setActivated] = useState(false)

  if (activated) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-black shadow-2xl transition-transform duration-300 ease-in-out hover:scale-[1.02]"
      aria-label="Play video"
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
        fill
        className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary-light-blue to-secondary-aqua shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="h-8 w-8 fill-white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  )
}
