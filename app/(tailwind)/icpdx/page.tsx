import type { Metadata } from 'next'

import { ImageSection } from 'components/Section'
import immigrantSuccess from 'public/immigrant-success-stories.webp'
import icpdxLogo from 'public/logos/icpdx-logo-white.svg'
import icpdxStaff from 'public/icpdx/icpdx-staff-conf.jpeg'
import whyICPDX from 'public/icpdx/icpdx-why.jpeg'
import officeChat from 'public/icpdx/icpdx-office-chat.jpeg'
import immigrationClass from 'public/icpdx/immigration-class.jpg'
import sofia from 'public/icpdx/mexican-woman.png'
import carlos from 'public/icpdx/honduran-man.png'
import amina from 'public/icpdx/somalian-woman.png'
import Image from 'next/image'
import Divider from 'components/Divider'
import ValueCard from './ValueCard'
import CaseAccordions from './CaseAccordions'
import Testimonial from './Testimonial'
import ClientsChart from './ClientsChart'

export const metadata: Metadata = {
  title: 'Partner With Us | Immigrant Connection',
  description:
    'Immigrant Connection is committed to seeing immigrant families in East Portland thrive. See how you can get involved today.',
}

export default function ImmigrantConnection() {
  return (
    <main>
      <ImageSection
        src={immigrantSuccess}
        alt="Immigrant family celebrating"
        color="blue"
      >
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
      <section className="from-primary-dark-blue to-secondary-blue-black w-full bg-gradient-to-b">
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
      <Divider />
      <section className="mx-auto w-full max-w-6xl flex-col px-4 py-25">
        <h2 className="font-display mb-16 text-center text-5xl/tight font-light">
          A case for why{' '}
          <span className="font-semibold">
            low-cost immigration legal services
          </span>{' '}
          are <i>essential</i> in East County
        </h2>
        <div className="grid grid-cols-12 grid-rows-1 gap-5">
          <div className="col-span-6">
            <CaseAccordions />
          </div>
          <div className="col-span-6 col-start-8 grid h-150 grid-cols-4 grid-rows-8 gap-y-8">
            <div className="bg-neutral-light-gray relative col-span-full row-span-5 overflow-hidden rounded-3xl">
              <Image
                src={whyICPDX}
                alt="Immigrant Connection leader explaining the importance of Immigrant Connection"
                fill
                objectFit="cover"
              />
            </div>
            <div className="bg-neutral-light-gray relative col-span-2 row-span-3 overflow-hidden rounded-3xl">
              <Image
                src={officeChat}
                alt="Man talks to woman in office about becoming a citizen"
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <ImageSection src={immigrationClass} alt="" color="red">
        <div className="mx-auto flex min-h-150 w-full max-w-6xl items-end px-4 py-25">
          <p className="font-display bg-primary-dark-blue max-w-4xl p-10 text-2xl text-white italic">
            “Arriving in the U.S. is only the beginning of a long and often
            difficult journey for immigrants and refugees who face the daunting
            task of navigating the “maze with moving walls” that is the
            immigration system.”
          </p>
        </div>
      </ImageSection>
      <Divider />
      <section className="mx-auto flex w-full max-w-6xl flex-col px-4 py-25">
        <h2 className="text-primary-dark-blue font-display text-center text-7xl/20 font-bold uppercase">
          Client
          <br />
          Testimonials
        </h2>
        <small className="text-neutral-mid-gray mb-12 text-center text-sm">
          For anonymity and security purposes, we have used alias names and
          changed the identifying details of their stories.
        </small>
        <div className="grid grid-cols-3 grid-rows-1 gap-11">
          <Testimonial
            quoteColor="green"
            name="Sofia"
            country="Mexico"
            imageSrc={sofia}
          >
            <p className="mb-4">
              I came to Immigrant Connection PDX at one of the most stressful
              points in my life. My family had been living in the U.S. without
              legal status for years, and I was terrified about the future. The
              team at Immigrant Connection PDX not only helped us understand our
              options but walked us through every step of the process, from
              paperwork to filing for the proper visas.
            </p>
            <p>
              Fortunately, our situation had a lawful pathway forward. Thanks to
              their guidance, I finally received my work permit, and my family
              and I now feel a sense of security we never had before. They
              treated us like family, and I’m so grateful for the stability
              they’ve helped bring into our lives.
            </p>
          </Testimonial>
          <Testimonial
            quoteColor="aqua"
            name="Carlos"
            country="Honduras"
            imageSrc={carlos}
          >
            <p className="mb-4">
              After years of struggling to get legal status and facing constant
              uncertainty, finding Immigrant Connection PDX was a game-changer.
              Their team worked tirelessly to help me with my immigration case
              and connected me with legal resources I didn’t even know existed.
              The personalized support they provided made all the difference,
              and they were with me every step of the way, from preparing
              documents to answering my questions.
            </p>
            <p>
              Now that I have my green card, I feel like I finally have a future
              here. Immigrant Connection PDX gave me hope when I thought all was
              lost.
            </p>
          </Testimonial>
          <Testimonial
            quoteColor="red"
            name="Amina"
            country="Somalia"
            imageSrc={amina}
          >
            <p className="mb-4">
              As a single mother, being separated from my children for years was
              one of the hardest things I’ve ever endured. I knew I wanted to
              bring them to the U.S. so we could be together again, but the
              immigration process seemed so complicated, and I didn’t know where
              to begin. That’s when I turned to Immigrant Connection PDX. They
              helped me petition for my children to join me here, guiding me
              through every step with patience and care.
            </p>
            <p>
              Thanks to their expertise, I was able to petition for my children
              to come to the States. Though the government processing times take
              very very long, immigrant Connection PDX continues to walk with me
              providing support and waiting well with me.”
            </p>
          </Testimonial>
        </div>
      </section>
      <Divider />
      <section className="from-secondary-green to-primary-light-blue w-full bg-gradient-to-b">
        <div className="mx-auto flex w-full max-w-5xl flex-col px-4 py-25">
          <p className="mb-20 text-center text-4xl/snug font-light text-white">
            Since receiving our recognition and accreditation from the
            Department of Justice in 2020, our office has provided immigration
            legal services for over{' '}
            <span className="font-semibold">
              1,200+ foreign-born individuals
            </span>{' '}
            from over <span className="font-semibold">60 countries</span>{' '}
            resulting in nearly{' '}
            <span className="font-semibold">500 immigration cases</span> being
            submitted to the government with a{' '}
            <span className="font-semibold">
              99.8% immigration benefit approval rating
            </span>
            .
          </p>
          <div className="flex flex-col gap-20">
            <div className="grid grid-cols-2 grid-rows-1 gap-20">
              <p className="font-display text-right text-7xl font-bold text-white uppercase">
                Clients Served
              </p>
              <ClientsChart />
            </div>
            <div className="grid grid-cols-2 grid-rows-1 gap-20">
              <p className="font-display text-right text-7xl font-bold text-white uppercase">
                Revenue/
                <br />
                Net Income
              </p>
              <div className="bg-neutral-light-gray h-75"></div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 gap-20">
              <p className="font-display text-right text-7xl font-bold text-white uppercase">
                Average Cost
              </p>
              <div>
                <p className="font-display mb-2 text-7xl text-white">
                  4–10x less
                </p>
                <p className="text-white">
                  than traditional attorneys. What would cost our clients $4,000
                  from a fully barred lawyer we can do for $400.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />
    </main>
  )
}
