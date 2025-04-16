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
      <section className="mx-auto w-full max-w-6xl flex-col px-6 py-15 lg:py-25">
        <h2 className="font-display from-primary-light-blue to-secondary-aqua mb-15 bg-gradient-to-b bg-clip-text text-center text-4xl/12 text-transparent">
          Sundays are the primary day that Columbia View Kids gather to play,
          learn from Scripture, pray, and be in community. Our classrooms are{' '}
          <span className="font-bold">safe</span>,{' '}
          <span className="font-bold">fun</span>, and{' '}
          <span className="font-bold">Jesus-centered</span> environments.
        </h2>
        <div className="grid grid-cols-3 grid-rows-1 gap-20">
          <div className="h-10 bg-black"></div>
          <div className="h-10 bg-black"></div>
          <div className="h-10 bg-black"></div>
        </div>
      </section>
    </main>
  )
}
