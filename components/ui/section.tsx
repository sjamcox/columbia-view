import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  as?: 'section' | 'div'
}

export function ContentSection({
  children,
  className = '',
  as: Component = 'section',
}: SectionProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-6xl px-6 py-15 lg:py-25 ${className}`}
    >
      {children}
    </Component>
  )
}

interface GradientSectionProps {
  children: ReactNode
  className?: string
  color: 'green-blue' | 'yellow-green'
}

const gradientVariants = {
  'green-blue': 'from-secondary-green to-primary-light-blue',
  'yellow-green': 'from-secondary-yellow to-secondary-green',
}

export function GradientSection({
  children,
  className = '',
  color,
}: GradientSectionProps) {
  return (
    <section
      className={`${gradientVariants[color]} bg-linear-to-b ${className}`}
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
}: MediaSectionProps) {
  return (
    <ContentSection className={className}>
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
