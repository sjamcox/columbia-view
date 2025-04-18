import type { LinkProps } from 'next/link'

import { ArrowRightIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

type ColorVariant = 'light' | 'dark' | 'blue'

export type ButtonProps = {
  arrow?: boolean
  children: string
  color?: ColorVariant
} & LinkProps

const colorVariants = {
  light:
    'bg-gradient-to-b from-secondary-blue-black/20 to-neutral-dark-gray/20',
  dark: 'bg-gradient-to-b from-secondary-blue-black/40 to-neutral-dark-gray/40',
  blue: 'bg-gradient-to-r from-primary-light-blue to-secondary-aqua',
}

export default function Button({
  arrow = false,
  children,
  color = 'light',
  ...rest
}: ButtonProps) {
  const minWidth = arrow ? 'min-w-75' : 'min-w-50'
  const justify = arrow ? 'justify-between' : 'justify-center'

  return (
    <Link {...rest}>
      <div
        className={`flex w-fit items-center gap-15 rounded-full px-7 py-5 ${colorVariants[color]} ${minWidth} ${justify}`}
      >
        <p className="text-base font-semibold text-white uppercase">
          {children}
        </p>
        {arrow && <ArrowRightIcon className="-mr-2 h-6 w-6 fill-white" />}
      </div>
    </Link>
  )
}
