import { ComponentPropsWithoutRef, ReactNode } from 'react'

interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  as?: 'section' | 'div' | 'article' | 'main'
}

export function ContentSection({
  children,
  className = '',
  as: Component = 'section',
  ...props
}: SectionProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-6xl px-6 py-15 lg:py-25 ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

interface GradientSectionProps extends ComponentPropsWithoutRef<'section'> {
  color:
    | 'green-blue'
    | 'yellow-green'
    | 'blue-aqua'
    | 'dark-blue'
    | 'green-yellow'
    | 'yellow-orange'
}

const gradientVariants = {
  'green-blue': 'from-secondary-green to-primary-light-blue',
  'yellow-green': 'from-secondary-yellow to-secondary-green',
  'blue-aqua': 'from-primary-light-blue to-secondary-aqua',
  'dark-blue': 'from-primary-dark-blue to-secondary-blue-black',
  'green-yellow': 'from-secondary-green to-secondary-yellow',
  'yellow-orange': 'from-secondary-yellow to-orange-400',
}

export function GradientSection({
  children,
  className = '',
  color,
  ...props
}: GradientSectionProps) {
  return (
    <section
      className={`bg-linear-to-b ${gradientVariants[color]} ${className}`}
      {...props}
    >
      <ContentSection as="div">{children}</ContentSection>
    </section>
  )
}


interface MediaSectionProps extends SectionProps {
  media: ReactNode
  reverse?: boolean
  mediaClassName?: string
}

export function MediaSection({
  children,
  media,
  reverse = false,
  className = '',
  mediaClassName = '',
  ...props
}: MediaSectionProps) {
  return (
    <ContentSection className={className} {...props}>
      <div className="grid gap-10 md:grid-cols-2 md:gap-20 lg:gap-30">
        <div
          className={`flex h-full items-center ${reverse ? 'md:order-2' : ''}`}
        >
          <div>{children}</div>
        </div>
        <div className={mediaClassName}>{media}</div>
      </div>
    </ContentSection>
  )
}

import type { StaticImageData } from 'next/image'
import Image from 'next/image'

export interface ImageSectionProps {
  children: ReactNode
  src: StaticImageData | string
  alt: string
  color?: 'red' | 'blue'
  className?: string
}

export function ImageSection({
  children,
  src,
  alt,
  color,
  className = '',
}: ImageSectionProps) {
  const colorVariants = {
    blue: 'from-primary-dark-blue to-primary-light-blue',
    red: 'from-secondary-yellow to-secondary-red',
  }

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill priority className="object-cover" />
      {color && (
        <div
          className={`${colorVariants[color]} absolute inset-0 bg-linear-to-b opacity-50`}
        />
      )}
      <div className="relative">{children}</div>
    </section>
  )
}
