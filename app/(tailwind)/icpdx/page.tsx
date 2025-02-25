import type { Metadata } from 'next'

import { ImageSection } from 'components/Section'
import immigrantSuccess from 'public/immigrant-success-stories.webp'
import icpdxLogo from 'public/logos/icpdx-logo-white.svg'
import icpdxStaff from 'public/icpdx/icpdx-staff-conf.jpeg'
import Image from 'next/image'
import Divider from 'components/Divider'
import ValueCard from './ValueCard'

export const metadata: Metadata = {
  title: 'Partner With Us | Immigrant Connection',
  description:
    'Immigrant Connection is committed to seeing immigrant families in East Portland thrive. See how you can get involved today.',
}

export default function ImmigrantConnection() {
  return (
    <main>
      <ImageSection src={immigrantSuccess} alt="Immigrant family celebrating">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-25">
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
      <Divider />
      <section className="mx-auto grid w-full max-w-6xl grid-cols-12 flex-col gap-x-2 px-4 py-25">
        <div className="relative col-start-2 col-end-7 overflow-hidden rounded-2xl">
          <Image
            src={icpdxStaff}
            alt="Immigrant Connection staff at a conference"
            width={768}
            height={1024}
          />
        </div>
        <div className="col-start-8 col-end-12 flex items-center">
          <div>
            <h2 className="text-primary-dark-blue font-display text-7xl/28 font-bold uppercase">
              Vision
            </h2>
            <p className="mb-10">Building bridges for a hope-filled future.</p>
            <h2 className="text-primary-dark-blue font-display text-7xl/28 font-bold uppercase">
              Mission
            </h2>
            <p>
              Providing low-cost immigration legal services to the
              under-resourced communities of the Portland metro area and beyond.
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="bg-primary-dark-blue w-full">
        <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-25">
          <h2 className="font-display mb-10 self-center text-7xl/28 font-bold text-white uppercase">
            Our Values
          </h2>
          <div className="grid grid-cols-12 grid-rows-3 gap-y-13">
            <div className="col-start-2 col-end-10">
              <ValueCard
                title="Listening"
                subtitle="with compassion"
                description="Because the stories of immigrants are often filled with deep challenges and trauma, we listen with care, empathy, and understanding. We recognize the human side of every case, offering a safe space for each person’s story."
              />
            </div>
            <div className="col-start-4 col-end-12">
              <ValueCard
                title="Advising"
                subtitle="with expertise"
                description="Because immigration laws are constantly evolving, we continuously learn and adapt to provide our clients with the most accurate, up-to-date pathways. Our expertise is a bridge to clarity and confidence in the journey ahead."
              />
            </div>
            <div className="col-start-2 col-end-10">
              <ValueCard
                title="Speaking"
                subtitle="the truth"
                description="Because the immigration journey is complex and every step matters, we are committed to building trust by being honest and transparent with our clients. Accurate immigration filings are the foundation of safe and successful futures."
              />
            </div>
            <div className="col-start-4 col-end-12">
              <ValueCard
                title="Empowering"
                subtitle="through knowledge"
                description="Because navigating the immigration process can be overwhelming, we empower our clients with the knowledge and resources they need to take an active role in their journey, making informed decisions along the way."
              />
            </div>
            <div className="col-start-2 col-end-10">
              <ValueCard
                title="Walking"
                subtitle="with you"
                description="Because the immigration process can be long and uncertain, we stand beside our clients throughout the journey, staying engaged, informed, and ready to support them every step of the way."
              />
            </div>
            <div className="col-start-4 col-end-12">
              <ValueCard
                title="Celebrating"
                subtitle="the milestones"
                description="Because the ultimate goal of immigration is stability, opportunity, and family reunification, we celebrate each step forward. Every milestone, big or small, brings us closer to the goal of building lasting futures."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
