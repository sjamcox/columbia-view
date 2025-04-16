import type { Metadata } from 'next'

import Hero from 'components/Hero'
import immigrantSuccess from 'public/immigrant-success-stories.webp'
import KeywordCard from 'components/KeywordCard'

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
      <section className="mx-auto w-full max-w-6xl px-6 py-15 lg:py-25">
        <h2 className="font-display from-primary-light-blue to-secondary-aqua mb-15 bg-gradient-to-b bg-clip-text text-center text-4xl/12 text-transparent">
          Sundays are the primary day that Columbia View Kids gather to play,
          learn from Scripture, pray, and be in community. Our classrooms are{' '}
          <span className="font-bold">safe</span>,{' '}
          <span className="font-bold">fun</span>, and{' '}
          <span className="font-bold">Jesus-centered</span> environments.
        </h2>
        <div className="grid grid-cols-3 grid-rows-1 gap-15">
          <KeywordCard
            keyword="Safe"
            text={`We comply with the state of Oregon's safety standards for childcare including cleanliness, as well as, background checks, and proper training for adult volunteers. You can rest assured that your kids are in a safe place each week!`}
            imageProps={{
              src: immigrantSuccess,
              alt: '',
            }}
          />
          <KeywordCard
            keyword="Fun"
            text={`Kids are built for fun and we want to provide an environment where they can be who they were created to be! Each week our schedule is carefully crafted to create an engaging experience of learning that each kid will enjoy and want more of!`}
            imageProps={{
              src: immigrantSuccess,
              alt: '',
            }}
          />
          <KeywordCard
            keyword="All About Jesus"
            text={`Our desire is to point kids to the hope of the world: Jesus. We want every kid to hear about Jesus every week so they can know him by his love, forgiveness, and sacrifice for them. Jesus loves your kids and we want them to know that love!`}
            imageProps={{
              src: immigrantSuccess,
              alt: '',
            }}
          />
        </div>
      </section>
        </div>
      </section>
    </main>
  )
}
