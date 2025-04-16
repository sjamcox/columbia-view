'use client'

import Image from 'next/image'
import { Fade } from 'react-slideshow-image'
import { Button } from '@mui/material'
import 'react-slideshow-image/dist/styles.css'

import easter1 from 'public/easter/easter-1.jpg'
import easter2 from 'public/easter/easter-2.jpg'
import easter3 from 'public/easter/easter-3.jpg'
import easter4 from 'public/easter/easter-4.jpg'
import easter5 from 'public/easter/easter-5.jpg'
import easter6 from 'public/easter/easter-6.jpg'
import easter7 from 'public/easter/easter-7.jpg'

const fadeImages = [
  easter1,
  easter2,
  easter3,
  easter4,
  easter5,
  easter6,
  easter7,
]

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Fade duration={5000} transitionDuration={500} infinite indicators>
        {fadeImages.map((image, i) => (
          <div key={'easter' + i} className="each-fade">
            <Image src={image} alt="" priority={i === 0} />
          </div>
        ))}
      </Fade>
    </div>
  )
}
