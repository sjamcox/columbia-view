import type { Metadata } from 'next'

import { ImageSection } from 'components/Section'
import immigrantSuccess from 'public/immigrant-success-stories.webp'
import icpdxLogo from 'public/logos/icpdx-logo-white.svg'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Partner With Us | Immigrant Connection',
  description:
    'Immigrant Connection is committed to seeing immigrant families in East Portland thrive. See how you can get involved today.',
}

export default function ImmigrantConnection() {
  return (
    <main>
      <ImageSection src={immigrantSuccess} alt="Immigrant family celebrating">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-32">
          <Image
            src={icpdxLogo}
            alt="Immigrant Connection PDX logo"
            width={272}
            height={272}
          />
          <h1 className="font-display text-7xl/tight font-bold text-white">
            Partner With Immigrant Connection PDX
          </h1>
        </div>
      </ImageSection>
    </main>
  )
}
