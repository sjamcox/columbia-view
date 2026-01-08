import type { LinkProps } from 'next/link'

import { ArrowRightIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

type ColorVariant = 'light' | 'dark' | 'blue' | 'lime'

export type ButtonProps = {
  arrow?: boolean
  children: string
  color?: ColorVariant
  className?: string
} & LinkProps

const colorVariants = {
  light:
    'bg-gradient-to-b from-secondary-blue-black/20 to-neutral-dark-gray/20',
  dark: 'bg-gradient-to-b from-secondary-blue-black/40 to-neutral-dark-gray/40',
  blue: 'bg-gradient-to-r from-primary-light-blue to-secondary-aqua',
  lime: 'bg-gradient-to-r from-secondary-yellow to-secondary-green',
}

export default function Button({
  arrow = false,
  children,
  color = 'light',
  className = '',
  ...rest
}: ButtonProps) {
  const minWidth = arrow ? 'md:min-w-75' : 'md:min-w-50'
  const justify = arrow ? 'justify-between' : 'justify-center'

  return (
    <Link className={className} {...rest}>
      <div
        className={`flex w-fit items-center gap-4 rounded-full px-7 py-5 md:gap-15 ${colorVariants[color]} ${minWidth} ${justify} transition-transform duration-300 ease-in-out hover:scale-103`}
      >
        <p className="text-base font-semibold text-white uppercase">
          {children}
        </p>
        {arrow && <ArrowRightIcon className="-mr-2 h-6 w-6 fill-white" />}
      </div>
    </Link>
  )
}
