'use client'

import Button from '@/components/ui/button'

export default function HeroVideo() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-auto min-h-[60vh] w-full object-cover md:min-h-[70vh]"
        style={{ aspectRatio: '16/9' }}
      >
        <source src="/videos/hero-banner-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay - aggressive dark blue */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0E496F] via-[#0E496F]/60 to-transparent" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 pb-24 md:pb-28 lg:pb-32">
          <div className="max-w-3xl">
            <h1 className="font-display mb-4 text-5xl font-black tracking-tight text-white drop-shadow-xl md:text-7xl lg:text-8xl">
              <span className="font-light">Welcome to</span> <br />
              Columbia View
            </h1>
            <p className="mb-8 text-xl font-semibold text-white drop-shadow-lg md:text-2xl lg:text-3xl">
              A place to belong, believe, and become
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/plan-your-visit" color="blue">
                Plan Your Visit
              </Button>
              <Button
                href="https://columbiaview.churchcenter.com/giving"
                color="lime"
              >
                Give
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy bottom shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-16 w-full md:h-24 lg:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ transform: 'scaleY(-1)' }}
        >
          <path
            d="M0,0V32.4c47.79,15.54,103.59,22.52,158,19.6,70.36-3.76,136.33-23.32,206.8-26.25C438.64,22.7,512.34,37.57,583,50.44c69.27,12.6,138.3,17.42,209.4,9.16,36.15-4.2,69.85-12.49,104.45-20.54C989.49,17.5,1113-10,1200,36.73V0Z"
            fill="#BCE6FB"
            opacity=".6"
          />
          <path
            d="M0,0V11.07C13,25.84,27.64,39.8,47.69,50.44,99.41,77.89,165,77.7,224.58,64.11c31.15-7.11,60.09-18.25,89.67-27.86,40.92-13.3,84.73-32.2,130.83-34.77,36.26-2,70.9,6.59,98.6,22.09,31.77,17.77,62.32,43.4,103.63,51.1,40.44,7.55,81.35-4.68,119.13-17s75.16-27.3,116.92-30.14c59.73-4.1,113.28,16.02,168.9,27.19,30.2,6.06,59,4.32,87.09-5.25,22.43-7.62,48-18.85,60.65-34.47V0Z"
            fill="#BCE6FB"
            opacity=".85"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}
