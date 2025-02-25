import Link from 'next/link'

type ColorVariant =
  | 'primary-dark-blue'
  | 'primary-light-blue'
  | 'secondary-aqua'
  | 'secondary-green'
  | 'secondary-yellow'
  | 'secondary-red'
  | 'secondary-blue-black'
  | 'neutral-dark-gray'
  | 'neutral-mid-gray'
  | 'neutral-light-gray'
  | 'neutral-light-blue'

type Size = 'small' | 'medium' | 'large'

interface ButtonLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  color?: ColorVariant
  size?: Size
}

const getColorClasses = (color: ColorVariant) => {
  const colorMap: Record<ColorVariant, string> = {
    'primary-dark-blue': 'bg-primary-dark-blue',
    'primary-light-blue': 'bg-primary-light-blue',
    'secondary-aqua': 'bg-secondary-aqua',
    'secondary-green': 'bg-secondary-green',
    'secondary-yellow': 'bg-secondary-yellow',
    'secondary-red': 'bg-secondary-red',
    'secondary-blue-black': 'bg-secondary-blue-black',
    'neutral-dark-gray': 'bg-neutral-dark-gray',
    'neutral-mid-gray': 'bg-neutral-mid-gray',
    'neutral-light-gray': 'bg-neutral-light-gray',
    'neutral-light-blue': 'bg-neutral-light-blue',
  }

  return colorMap[color]
}

const getSizeClasses = (size: Size) => {
  const sizeMap: Record<Size, string> = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  }

  return sizeMap[size]
}

export default function ButtonLink({
  href,
  children,
  className = '',
  color = 'primary-light-blue',
  size = 'medium',
}: ButtonLinkProps) {
  const colorClasses = getColorClasses(color)
  const sizeClasses = getSizeClasses(size)

  return (
    <Link
      href={href}
      className={`text-white visited:text-white hover:text-white active:text-white inline-block rounded-sm no-underline transition-all hover:brightness-90 ${colorClasses} ${sizeClasses} ${className}`}
    >
      {children}
    </Link>
  )
}
