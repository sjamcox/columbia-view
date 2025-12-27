'use client'

import Image from 'next/image'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import davidLight from '@/public/easter/2025/david-light.webp'
import easterParty from '@/public/easter/2025/easter-party.webp'
import bubblesOutside from '@/public/easter/2025/bubbles-outside.webp'
import selenaFamily from '@/public/easter/2025/selena-family.webp'
import jenniferPeace from '@/public/easter/2025/jennifer-peace.webp'
import rannabargarFamily from '@/public/easter/2025/rannabargar-family.webp'
import crowdOutside1 from '@/public/easter/2025/crowd-outside-1.webp'
import noyaFamily from '@/public/easter/2025/noya-family.webp'
import joshTestimony from '@/public/sunday/josh-testimony.webp'
import cisnerosKids from '@/public/kids/cisneroz-buckets.webp'
import potluck from '@/public/potluck/christmas-tables.webp'

const fadeImages = [
  davidLight,
  easterParty,
  bubblesOutside,
  cisnerosKids,
  joshTestimony,
  selenaFamily,
  jenniferPeace,
  potluck,
  rannabargarFamily,
  crowdOutside1,
  noyaFamily,
]

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Fade duration={5000} transitionDuration={500} infinite>
        {fadeImages.map((image, i) => (
          <div key={'easter' + i} className="each-fade">
            <Image src={image} alt="" priority={i === 0} />
          </div>
        ))}
      </Fade>
    </div>
  )
}
