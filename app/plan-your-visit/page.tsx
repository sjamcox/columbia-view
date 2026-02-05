import type { Metadata } from 'next'
import Image from 'next/image'

import Hero from '@/components/Hero'
import { ContentSection, GradientSection } from '@/components/ui/section'
import Button from '@/components/ui/button'
import worship from '@/public/sunday/worship-team.webp'
import testimony from '@/public/sunday/mark-baptism-testimony.webp'
import kidsSermon from '@/public/sunday/sermon-in-a-sack.webp'
import communion from '@/public/sunday/sermon-communion-table.webp'
import discoverColumbia from '@/public/discover-columbia.jpeg'
import AccordionSection from './accordion-section'

export const metadata: Metadata = {
  title: 'Plan Your Visit | Columbia View Church',
  description:
    "We're excited to have you join us for worship! Find service times, what to expect, parking information, and everything you need to know for your first visit.",
  alternates: {
    canonical: '/plan-your-visit',
  },
}

export default function PlanYourVisit() {
  return (
    <main>
      <Hero
        title="Plan Your Visit"
        subtitle="We're excited to have you join us for worship!"
        imageProps={{
          src: worship,
          alt: 'Worship team leading Sunday morning worship',
          color: 'blue',
        }}
      />

      <ContentSection>
        {/* Service Time & Location */}
        <div className="mb-15 grid gap-10 md:grid-cols-3 lg:mb-20">
          <div className="md:col-span-2">
            <h2 className="font-display mb-6 text-3xl font-bold text-primary-dark-blue lg:text-4xl">
              Worship Service
            </h2>
            <p className="mb-6 text-lg/relaxed text-neutral-dark-gray">
              Every Sunday, we gather and worship through music, prayer,
              preaching/teaching of God's word, giving, and testimony. Worship
              for us is the response of a life that is seeking after Jesus. If
              you are a guest with us, we encourage you to come with an open
              heart to what God may want to do in your life.
            </p>
          </div>

          <div className="rounded-2xl bg-linear-to-br from-primary-light-blue to-secondary-aqua p-8 text-white shadow-lg">
            <h3 className="mb-4 text-xl font-bold">Service Time & Location</h3>
            <p className="mb-2 text-lg font-semibold">10:00 AM</p>
            <p className="mb-6 opacity-90">In the sanctuary</p>
            <p className="text-sm opacity-90">
              We also livestream our worship services via{' '}
              <a
                href="https://www.youtube.com/@columbiaviewwesleyanchurch2805/streams"
                className="font-semibold underline hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>{' '}
              each Sunday
            </p>
          </div>
        </div>

        {/* Kids & Nursery Highlight */}
        <div className="mb-15 rounded-2xl bg-secondary-green/10 p-8 lg:mb-20 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display mb-4 text-3xl font-bold text-primary-dark-blue lg:text-4xl">
              Bringing Kids?
            </h2>
            <p className="mb-6 text-lg/relaxed text-neutral-dark-gray">
              We have nursery care for infants through age 3, and engaging kids
              programming for ages 4-12. All volunteers are background checked
              and trained. Your kids will be safe, have fun, and learn about
              Jesus!
            </p>
            <div className="flex justify-center">
              <Button href="/nextgen" color="blue" arrow>
                Learn About NextGen Kids
              </Button>
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="overflow-hidden rounded-2xl">
          <div className="grid grid-cols-12 gap-2">
            <div className="relative col-span-7 h-60 md:col-span-8 md:h-80">
              <Image
                src={worship}
                alt="Three guitar players leading worship on a Sunday morning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 58vw, 66vw"
              />
            </div>
            <div className="relative col-span-5 h-60 md:col-span-4 md:h-80">
              <Image
                src={testimony}
                alt="A man sharing his testimony"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 42vw, 33vw"
              />
            </div>
            <div className="relative col-span-5 h-60 md:col-span-4 md:h-80">
              <Image
                src={kidsSermon}
                alt="A pastor teaching a crowd of kids gathered around him"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 42vw, 33vw"
              />
            </div>
            <div className="relative col-span-7 h-60 md:col-span-8 md:h-80">
              <Image
                src={communion}
                alt='A communion table that reads "Do this in remembrance of me"'
                fill
                className="object-cover"
                sizes="(max-width: 768px) 58vw, 66vw"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      {/* What to Expect Accordion */}
      <AccordionSection />

      {/* Discover Columbia Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[400px] md:min-h-[600px]">
          <Image
            src={discoverColumbia}
            alt="People laughing at Discover Columbia luncheon"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center bg-primary-dark-blue p-8 text-white lg:p-20">
          <h2 className="font-display mb-8 text-4xl font-bold lg:text-6xl">
            Discover Columbia
          </h2>
          <div className="space-y-6 text-lg/relaxed font-light opacity-90 lg:text-xl">
            <p>
              This is a luncheon hosted by our Columbia View team to help you
              discover more about our church. Lunch will be held immediately
              following Sunday service at the nearby Rockwood Market Hall.
            </p>
            <p>
              Learn more about what we offer at the church and how we desire to
              come alongside you in your spiritual journey. There is no
              commitment required, we just want to share more about ourselves
              and have fun doing it.
            </p>
            <p>We hope to see you soon!</p>
          </div>
          <div className="mt-10">
            <Button
              href="https://columbiaview.churchcenter.com/registrations/events/3430643"
              color="blue"
              arrow
            >
              Register for Discover Columbia
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GradientSection color="blue-aqua">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="font-display mb-6 text-4xl font-bold text-white lg:text-5xl">
            We Can't Wait to Meet You!
          </h2>
          <p className="mb-8 text-xl/relaxed text-white">
            Have questions? Want to connect before you visit? We'd love to hear
            from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/nextgen" color="dark" arrow>
              Learn About Kids Ministry
            </Button>
          </div>
        </div>
      </GradientSection>
    </main>
  )
}
