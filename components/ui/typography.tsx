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
  from: string
  to: string
}

export function GradientText({
  children,
  from,
  to,
  className = '',
}: GradientTextProps) {
  return (
    <span
      className={`bg-linear-to-b bg-clip-text text-transparent ${from} ${to} ${className}`}
    >
      {children}
    </span>
  )
}
