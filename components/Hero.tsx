import type { ButtonProps } from './Button'

import { ImageSection, ImageSectionProps } from './Section'
import Button from './Button'

export type HeroProps = {
  buttonProps?: Omit<ButtonProps, 'children'> & { text: string }
  imageProps: Omit<ImageSectionProps, 'children'>
  title: string
  subtitle: string
}

export default function Hero({
  title,
  subtitle,
  buttonProps,
  imageProps,
}: HeroProps) {
  return (
    <ImageSection {...imageProps}>
      <div className="flex justify-center lg:min-h-150">
        <div className="my-15 flex w-full max-w-7xl items-end lg:mx-30 lg:my-25">
          <div className="flex w-full items-end justify-between gap-25">
            <div className="max-w-2xl">
              <h1 className="font-display pb-4 text-7xl/18 font-bold text-white uppercase">
                {title}
              </h1>
              <p className="font-display text-3xl/tight text-white">
                {subtitle}
              </p>
            </div>
            <div>
              {buttonProps && (
                <Button {...buttonProps} arrow>
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
