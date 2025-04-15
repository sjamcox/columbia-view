import type { Metadata } from 'next'

import Hero from 'components/Hero'
import immigrantSuccess from 'public/immigrant-success-stories.webp'

export const metadata: Metadata = {
  title: 'NextGen Ministries | Columbia View Church',
}

export default function NextGen() {
  return (
    <main>
      <Hero
        title="NextGen Ministries"
        subtitle="Partnering with parents to pass on faith to the next generation."
        imageProps={{
          src: immigrantSuccess,
          alt: '',
          color: 'blue',
        }}
        buttonProps={{
          href: '',
          text: 'PRE-REGISTER',
        }}
      />
    </main>
  )
}
