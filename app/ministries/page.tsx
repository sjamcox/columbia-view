import type { Metadata } from 'next'
import Image from 'next/image'

import Hero from '@/components/Hero'
import { ContentSection, GradientSection } from '@/components/ui/section'
import Button from '@/components/ui/button'
import blakeFamily from '@/public/blake-family.webp'
import cheneyFamily from '@/public/cheney-family.webp'
import dunbarFamily from '@/public/dunbar-family.webp'
import jonesFamily from '@/public/jones-family.webp'
import lobbyGroup from '@/public/lobby-group.webp'

export const metadata: Metadata = {
  title: 'Ministries | Columbia View Church',
  description:
    'Discover ways to connect, serve, and grow in faith through our worship services, NextGen kids ministry, life groups, and global missions.',
  alternates: {
    canonical: '/ministries',
  },
}

export default function Ministries() {
  return (
    <main>
      <Hero
        title="Ministries"
        subtitle="Discover ways to connect, serve, and grow in faith"
        imageProps={{
          src: lobbyGroup,
          alt: 'Columbia View members connecting in the lobby',
          color: 'blue',
        }}
      />

      <ContentSection className="flex flex-col gap-12 py-20 lg:gap-20">
        {/* Worship Service */}
        <div id="sunday-worship" className="scroll-mt-32">
          <div className="grid gap-10 md:grid-cols-3">
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
        </div>

        {/* NextGen */}
        <div id="nextgen" className="scroll-mt-32 rounded-3xl bg-secondary-green/5 p-8 lg:p-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="font-display mb-6 text-3xl font-bold text-primary-dark-blue lg:text-4xl">
                NextGen
              </h2>
              <p className="mb-8 text-xl/relaxed text-neutral-dark-gray">
                We have nursery staff on-site for families with infants through
                age 3. We also offer kids programming for age 4 - grade 5 during
                the preaching portion of our worship service. All nursery and
                children volunteers are background checked and trained.
              </p>
            </div>

            <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm border border-secondary-green/10">
              <h3 className="mb-3 text-lg font-bold text-primary-dark-blue">
                Ages & Locations
              </h3>
              <p className="mb-2 text-neutral-dark-gray">Ages 0-3 in the nursery</p>
              <p className="text-neutral-dark-gray">Age 4-Grade 5 in the kids room</p>
            </div>

            <div className="flex justify-center">
              <Button href="/nextgen" color="blue" arrow>
                Learn More About NextGen
              </Button>
            </div>
          </div>
        </div>

        {/* Life Groups */}
        <div id="life-groups" className="scroll-mt-32">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="font-display mb-6 text-3xl font-bold text-primary-dark-blue lg:text-4xl">
                Life Groups
              </h2>
              <p className="mb-6 text-lg/relaxed text-neutral-dark-gray">
                Life groups are the heartbeat of our church as we seek to live
                out the practice of Acts 2:42-47. All are welcome and encouraged
                to join a Life Group that best fits them regardless of Biblical
                experience.
              </p>
            </div>

            <div className="rounded-2xl bg-secondary-aqua/10 p-8">
              <h3 className="mb-4 text-lg font-bold text-primary-dark-blue">
                Meeting Times & Locations
              </h3>
              <p className="text-base text-neutral-dark-gray">
                Check{' '}
                <a
                  href="https://columbiaview.churchcenter.com/groups"
                  className="font-semibold text-primary-light-blue underline hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Planning Center
                </a>{' '}
                for meeting times
              </p>
            </div>
          </div>
        </div>

        {/* Immigrant Connection */}
        <div id="immigrant-connection" className="scroll-mt-32">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="font-display mb-6 text-3xl font-bold text-primary-dark-blue lg:text-4xl">
                Immigrant Connection
              </h2>
              <p className="mb-6 text-lg/relaxed text-neutral-dark-gray">
                Immigrant Connection PDX is a low-cost immigration legal services
                office. Our Department of Justice Accredited Representatives
                provide affordable immigration legal services for our clients. Our
                vision is to build bridges for a hope-filled future, and our
                mission is to provide affordable immigration legal services to
                immigrants in our community.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md border border-gray-100">
              <h3 className="mb-4 text-lg font-bold text-primary-dark-blue">
                Office Hours & Location
              </h3>
              <p className="mb-1 text-base text-neutral-dark-gray">
                Tuesdays and Thursdays
              </p>
              <p className="mb-4 text-base text-neutral-dark-gray">
                10:00 am – 4:00 pm
              </p>
              <p className="mb-4 text-sm text-neutral-dark-gray">
                Columbia View Church
                <br />
                16700 NE Halsey St.
                <br />
                Portland, OR 97230
              </p>
              <p className="text-sm">
                <a
                  href="tel:+19712022073"
                  className="font-semibold text-primary-light-blue hover:underline"
                >
                  971.202.2073
                </a>
                <br />
                <a
                  href="mailto:info.icpdx@gmail.com"
                  className="font-semibold text-primary-light-blue hover:underline"
                >
                  info.icpdx@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Love INC */}
      <GradientSection id="love-inc" color="blue-aqua" className="scroll-mt-25">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-6 text-center text-4xl font-bold text-white lg:text-5xl">
            Love INC
          </h2>
          <p className="mb-6 text-center text-xl/relaxed text-white">
            The local church is God's answer to community brokenness and a part
            of His plan of redemption and restoration. We're proud to partner
            with Love INC, uniting East Multnomah County churches to care for
            people in all areas of life: spiritual, mental, emotional,
            relational, material, and physical.
          </p>
          <p className="mb-8 text-center text-lg/relaxed text-white/90">
            If you're interested in using your God given talents to serve the
            needs in our community, fill out this quick questionnaire. This is
            for informational purposes only, it is not a commitment to serve.
          </p>
          <div className="flex justify-center">
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSdxIQFvEZN1t9o7qDPsPwc3fkhToDp2J1-HKc6tIqsoO6V8Yw/viewform"
              color="dark"
              arrow
            >
              Fill Out Questionnaire
            </Button>
          </div>
        </div>
      </GradientSection>

      {/* Global Missions */}
      <ContentSection id="global-missions" className="scroll-mt-25">
        <h2 className="font-display mb-10 text-center text-4xl font-bold text-primary-dark-blue lg:lg:text-5xl">
          Global Missions
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-15">
          {/* Blake Family */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="relative aspect-video w-full">
              <Image
                src={blakeFamily}
                alt="Blake family photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <h3 className="font-display mb-2 text-2xl font-bold text-primary-dark-blue">
                Blake Family
              </h3>
              <p className="mb-4 text-lg font-semibold text-secondary-aqua">
                Czech Republic
              </p>
              <p className="mb-6 text-base/relaxed text-neutral-dark-gray">
                The Blake family has been serving in Czech Republic since 2003.
                They are currently focused on developing relationships,
                discipleship and church leadership.
              </p>
              <Button
                href="https://www.globalpartnersonline.org/missionary/wm04-0264/"
                color="blue"
              >
                Learn More or Donate
              </Button>
            </div>
          </div>

          {/* Cheney Family */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="relative aspect-video w-full">
              <Image
                src={cheneyFamily}
                alt="Cheney family photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <h3 className="font-display mb-2 text-2xl font-bold text-primary-dark-blue">
                Cheney Family
              </h3>
              <p className="mb-4 text-lg font-semibold text-secondary-aqua">
                Swaziland
              </p>
              <p className="mb-6 text-base/relaxed text-neutral-dark-gray">
                The Cheney's have been missionaries with Global Partners since
                2010. They currently live in South Africa. Recently, their focus
                is in developing and strengthening churches and communities
                through theological education and health initiatives.
              </p>
              <Button
                href="https://www.globalpartnersonline.org/missionary/wm04-0368/"
                color="blue"
              >
                Learn More or Donate
              </Button>
            </div>
          </div>

          {/* Dunbar Family */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="relative aspect-video w-full">
              <Image
                src={dunbarFamily}
                alt="Dunbar family photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <h3 className="font-display mb-2 text-2xl font-bold text-primary-dark-blue">
                Mark and Serena Dunbar
              </h3>
              <p className="mb-4 text-lg font-semibold text-secondary-aqua">
                Mexico
              </p>
              <p className="mb-6 text-base/relaxed text-neutral-dark-gray">
                The Dunbars have been missionaries with World Gospel Missions
                for 25+ years. They currently serve alongside Mexican church in
                the area of theological education, employment skills, and
                discipleship.
              </p>
              <Button
                href="https://www.wgm.org/missionary/dunbar"
                color="blue"
              >
                Learn More or Donate
              </Button>
            </div>
          </div>

          {/* Jones Family */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="relative aspect-video w-full">
              <Image
                src={jonesFamily}
                alt="Jones family photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <h3 className="font-display mb-2 text-2xl font-bold text-primary-dark-blue">
                Jones Family
              </h3>
              <p className="mb-4 text-lg font-semibold text-secondary-aqua">
                Wycliffe Bible Translators
              </p>
              <p className="mb-6 text-base/relaxed text-neutral-dark-gray">
                Milt and Becky Jones have served with the Seed Company working
                alongside Wycliffe Bible Translators. Recently, Milt has been
                asked to support and oversee translations for the continents of
                Africa and Asia.
              </p>
              <Button
                href="https://www.wycliffe.org/partner/E7666D"
                color="blue"
              >
                Learn More or Donate
              </Button>
            </div>
          </div>
        </div>
      </ContentSection>
    </main>
  )
}
