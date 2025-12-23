import { ReactNode } from 'react'

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function SectionHeading({ children, className = '' }: TypographyProps) {
  return (
    <h2
      className={`font-display text-primary-dark-blue mb-6 text-5xl font-bold uppercase ${className}`}
    >
      {children}
    </h2>
  )
}

export function DisplayHeading({ children, className = '' }: TypographyProps) {
  return (
    <h2
      className={`font-display pb-4 text-center text-7xl/18 font-bold text-white uppercase ${className}`}
    >
      {children}
    </h2>
  )
}

interface GradientTextProps extends TypographyProps {
  color: 'blue-aqua' | 'green-blue' | 'yellow-green' | 'dark-blue'
}

const gradientVariants = {
  'blue-aqua': 'from-primary-light-blue to-secondary-aqua',
  'green-blue': 'from-secondary-green to-primary-light-blue',
  'yellow-green': 'from-secondary-yellow to-secondary-green',
  'dark-blue': 'from-primary-dark-blue to-secondary-blue-black',
}

export function GradientText({
  children,
  color,
  className = '',
}: GradientTextProps) {
  return (
    <span
      className={`bg-linear-to-b bg-clip-text text-transparent ${gradientVariants[color]} ${className}`}
    >
      {children}
    </span>
  )
}
