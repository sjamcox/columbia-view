import type { ButtonProps } from './ui/button'

import { ImageSection, ImageSectionProps } from './Section'
import Button from './ui/button'

export type HeroProps = {
  buttonProps?: Omit<ButtonProps, 'children'> & { text: string }
  imageProps: Omit<ImageSectionProps, 'children'>
  title: string
  subtitle?: string
}

export default function Hero({
  title,
  subtitle,
  buttonProps,
  imageProps,
}: HeroProps) {
  return (
    <ImageSection {...imageProps}>
      <div className="flex min-h-150 justify-center lg:min-h-175">
        <div className="mx-auto flex w-full max-w-7xl items-end px-6 py-15 lg:py-25">
          <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-end lg:gap-25">
            <div className="max-w-2xl">
              <h1 className="font-display pb-4 text-5xl/14 font-bold text-white uppercase lg:text-7xl/18">
                {title}
              </h1>
              {subtitle && (
                <p className="font-display text-2xl/tight text-white lg:text-3xl/tight">
                  {subtitle}
                </p>
              )}
            </div>
            <div>
              {buttonProps && (
                <Button {...buttonProps} arrow color="dark">
                  {buttonProps.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </ImageSection>
  )
}
