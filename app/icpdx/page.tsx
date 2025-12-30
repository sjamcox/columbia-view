import type { Metadata } from 'next'

import Link from 'next/link'

import {
  ImageSection,
  GradientSection,
  ContentSection,
} from '@/components/ui/section'
import { ExpenseChart, IncomeChart } from './FinanceCharts'
import Image from 'next/image'
import Divider from '@/components/Divider'
import ValueCard from './ValueCard'
import CaseAccordions from './CaseAccordions'
import Testimonial from './Testimonial'
import ClientsChart from './ClientsChart'
import PartnerList from './PartnerList'
import ProcessStep from './process-step'
import GivingProgressBar from './giving-progress-bar'
import immigrantSuccess from '@/public/immigrant-success-stories.webp'
import icpdxLogo from '@/public/logos/icpdx-logo-white.svg'
import icpdxStaff from '@/public/icpdx/icpdx-staff-conf.jpeg'
import whyICPDX from '@/public/icpdx/icpdx-why.jpeg'
import officeChat from '@/public/icpdx/icpdx-office-chat.jpeg'
import immigrationClass from '@/public/icpdx/immigration-class.jpg'
import sofia from '@/public/icpdx/mexican-woman.png'
import carlos from '@/public/icpdx/honduran-man.png'
import amina from '@/public/icpdx/somalian-woman.png'
import listen from '@/public/icons/listen.svg'
import advise from '@/public/icons/advise.svg'
import speak from '@/public/icons/speak.svg'
import empower from '@/public/icons/empower.svg'
import together from '@/public/icons/together.svg'
import celebrate from '@/public/icons/celebrate.svg'
import Hero from '@/components/Hero'
import Button from '@/components/ui/button'
import FadeIn from '@/components/ui/fade-in'

export const metadata: Metadata = {
  title: 'Partner With Us | Immigrant Connection',
  description:
    'Immigrant Connection is committed to seeing immigrant families in East Portland thrive. See how you can get involved today.',
  alternates: {
    canonical: '/icpdx',
  },
}

export default function ImmigrantConnection() {
  return (
    <main>
      <Hero
        title="Partner With Immigrant Connection PDX"
        imageProps={{
          src: immigrantSuccess,
          alt: 'Immigrant family celebrating',
          color: 'blue',
        }}
        buttonProps={{
          text: 'Partner With Us',
          href: 'https://columbiaview.churchcenter.com/people/forms/34910',
        }}
      />
      <Divider />
      <GradientSection color="dark-blue">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col gap-6 text-center text-white">
            <h2 className="font-display text-4xl font-bold uppercase md:text-5xl">
              Support Local Immigrant Families
            </h2>
            <p className="max-w-4xl text-lg sm:text-xl">
              Your gift funds trusted, affordable immigration legal services for
              individuals and families in 2026. Every dollar supports case
              preparation, legal support, and ongoing client care—helping
              immigrant neighbors navigate a complex system with clarity and
              dignity. Help us fully fund our 2026 operating needs.
            </p>
          </div>
          <GivingProgressBar raised={2985} goal={10000} />
          <Button
            color="blue"
            href="https://columbiaview.churchcenter.com/giving"
          >
            Give Today
          </Button>
        </div>
      </GradientSection>
      <section className="mx-auto grid w-full max-w-6xl grid-cols-12 gap-x-2 px-6 py-15 max-md:gap-y-10 lg:py-25">
        <div className="relative h-fit overflow-hidden rounded-2xl max-md:col-span-12 md:col-start-2 md:col-end-7">
          <Image
            src={icpdxStaff}
            alt="Immigrant Connection staff at a conference"
            width={768}
            height={1024}
          />
        </div>
        <div className="flex items-center max-md:col-span-8 md:col-start-8 md:col-end-12">
          <div>
            <h2 className="text-primary-dark-blue font-display text-6xl/16 font-bold uppercase md:text-7xl/28">
              Vision
            </h2>
            <p className="mb-10">Building bridges for a hope-filled future.</p>
            <h2 className="text-primary-dark-blue font-display text-6xl/16 font-bold uppercase md:text-7xl/28">
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
      <GradientSection color="dark-blue">
          <h2 className="font-display mb-10 text-center text-6xl/16 font-bold text-white uppercase md:text-7xl/28">
            Our Values
          </h2>
          <div className="grid grid-cols-12 gap-y-8 sm:grid-rows-3 sm:gap-y-13">
            <FadeIn className="col-start-2 col-end-12 sm:col-end-10">
              <ValueCard
                title="Listening"
                subtitle="with compassion"
                description="Because the stories of immigrants are often filled with deep challenges and trauma, we listen with care, empathy, and understanding. We recognize the human side of every case, offering a safe space for each person's story."
                icon={listen}
              />
            </FadeIn>
            <FadeIn className="col-start-2 col-end-12 sm:col-start-4">
              <ValueCard
                title="Advising"
                subtitle="with expertise"
                description="Because immigration laws are constantly evolving, we continuously learn and adapt to provide our clients with the most accurate, up-to-date pathways. Our expertise is a bridge to clarity and confidence in the journey ahead."
                icon={advise}
              />
            </FadeIn>
            <FadeIn className="col-start-2 col-end-12 sm:col-end-10">
              <ValueCard
                title="Speaking"
                subtitle="the truth"
                description="Because the immigration journey is complex and every step matters, we are committed to building trust by being honest and transparent with our clients. Accurate immigration filings are the foundation of safe and successful futures."
                icon={speak}
              />
            </FadeIn>
            <FadeIn className="col-start-2 col-end-12 sm:col-start-4">
              <ValueCard
                title="Empowering"
                subtitle="through knowledge"
                description="Because navigating the immigration process can be overwhelming, we empower our clients with the knowledge and resources they need to take an active role in their journey, making informed decisions along the way."
                icon={empower}
              />
            </FadeIn>
            <FadeIn className="col-start-2 col-end-12 sm:col-end-10">
              <ValueCard
                title="Walking"
                subtitle="with you"
                description="Because the immigration process can be long and uncertain, we stand beside our clients throughout the journey, staying engaged, informed, and ready to support them every step of the way."
                icon={together}
              />
            </FadeIn>
            <FadeIn className="col-start-2 col-end-12 sm:col-start-4">
              <ValueCard
                title="Celebrating"
                subtitle="the milestones"
                description="Because the ultimate goal of immigration is stability, opportunity, and family reunification, we celebrate each step forward. Every milestone, big or small, brings us closer to the goal of building lasting futures."
                icon={celebrate}
              />
            </FadeIn>
          </div>
      </GradientSection>
      <Divider />
      <ContentSection>
        <div className="mb-16 md:mb-24">
          <h2 className="text-primary-dark-blue font-display mb-6 text-6xl/16 font-bold uppercase md:text-7xl/28">
            Our Process
          </h2>
          <p className="max-w-3xl text-lg text-neutral-600 md:text-xl">
            Immigration is complicated. Our process is not.
          </p>
          <p className="mt-6 max-w-4xl text-base text-neutral-600">
            We walk each client through the immigration journey step by
            step—from first conversation to final outcome. While each case is
            unique and the experience of every client will be slightly different
            depending on their situation, below is a high level overview of what
            someone can expect from ICPDX:
          </p>
        </div>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          <ProcessStep number="1" title="Initial Consultation">
            <p>
              Clients schedule an initial legal consultation and meet with an
              Accredited Representative.
            </p>
            <p>
              We prepare in advance, listen to the client’s story, assess
              whether a legal pathway exists, and explain options honestly and
              clearly—including both risks and rewards.
            </p>
          </ProcessStep>
          <ProcessStep number="2" title="Client Service Agreement">
            <p>
              If a pathway exists and the client chooses to move forward, a
              formal client services agreement is signed. We provide a clear
              scope of services, timeline, costs, and responsibilities for both
              the client and our office—ensuring transparency and clarity for
              everyone involved.
            </p>
          </ProcessStep>
          <ProcessStep number="3" title="Case Built">
            <p>
              Clients submit required forms, questionnaires, and supporting
              documents. Once everything is received and verified, our team
              builds the case—completing forms carefully, conducting legal
              research as needed, and reviewing for accuracy, quality, and
              compliance.
            </p>
          </ProcessStep>
          <ProcessStep number="4" title="Case Submitted">
            <p>
              Applications are reviewed, signed, and submitted to the
              government. Every filing follows a consistent quality-control
              process.
            </p>
          </ProcessStep>
          <ProcessStep number="5" title="Ongoing Support">
            <p>
              We stay engaged with clients after submission. We track government
              notices, respond to requests, and prepare clients for interviews
              when required. Immigration cases often take months or years—we
              remain engaged throughout.
            </p>
          </ProcessStep>
          <ProcessStep number="6" title="Decision & Case Closed">
            <p>
              While we prepare strong, lawful applications, final decisions
              always rest with the government. We celebrate with clients when
              their cases are approved and immigration benefits are granted. A
              formal closing letter is submitted to the client.
            </p>
          </ProcessStep>
        </div>
      </ContentSection>
      <Divider />
      <ImageSection src={immigrationClass} alt="" color="red">
        <div className="mx-auto flex min-h-150 w-full max-w-6xl items-end px-6 py-15 lg:py-25">
          <p className="font-display bg-primary-dark-blue max-w-4xl p-10 text-2xl font-semibold text-white italic">
            "Arriving in the U.S. is only the beginning of a long and often
            difficult journey for immigrants and refugees who face the daunting
            task of navigating the "maze with moving walls" that is the
            immigration system."
          </p>
        </div>
      </ImageSection>
      <Divider />
      <section className="mx-auto w-full max-w-6xl flex-col px-6 py-15 lg:py-25">
        <h2 className="font-display mb-8 text-center text-3xl/tight font-light md:mb-16 md:text-5xl/tight">
          A case for why{' '}
          <span className="font-semibold">
            low-cost immigration legal services
          </span>{' '}
          are <i>essential</i> in East County
        </h2>
        <div className="grid grid-cols-12 grid-rows-1 gap-y-10 md:gap-5">
          <div className="col-span-12 md:col-span-6">
            <CaseAccordions />
          </div>
          <div className="col-span-9 col-start-3 grid h-100 grid-cols-4 grid-rows-8 gap-y-8 md:col-span-8 md:col-start-8 md:h-150">
            <div className="bg-neutral-light-gray relative col-span-full row-span-5 overflow-hidden rounded-3xl">
              <Image
                src={whyICPDX}
                alt="Immigrant Connection leader explaining the importance of Immigrant Connection"
                fill
                objectFit="cover"
              />
            </div>
            <div className="bg-neutral-light-gray relative col-span-2 row-span-3 overflow-hidden rounded-3xl max-md:col-start-3">
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
      <GradientSection color="green-blue">
          <p className="mb-20 text-center text-2xl/snug font-light text-white md:text-4xl/snug">
            Since receiving recognition and accreditation from the Department of Justice in 2020, our office has provided immigration legal services for over{' '}
            <span className="font-semibold">
              1,500+ foreign-born individuals
            </span>{' '}
            from over <span className="font-semibold">65 countries</span>{' '}
            resulting in nearly{' '}
            <span className="font-semibold">600 immigration cases</span> being
            submitted to the government with a{' '}
            <span className="font-semibold">
              99% immigration benefit approval rating
            </span>
            .
          </p>
          <div className="flex flex-col gap-20">
            <div className="grid gap-8 md:grid-cols-2 md:grid-rows-1 md:gap-20">
              <p className="font-display text-4xl font-bold text-white uppercase md:text-right md:text-7xl">
                Clients Served
              </p>
              <ClientsChart />
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:grid-rows-1 md:gap-20">
              <p className="font-display text-4xl font-bold text-white uppercase md:text-right md:text-7xl">
                Income
              </p>
              <IncomeChart />
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:grid-rows-1 md:gap-20">
              <p className="font-display text-4xl font-bold text-white uppercase md:text-right md:text-7xl">
                Expenses
              </p>
              <ExpenseChart />
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:grid-rows-1 md:gap-20">
              <p className="font-display text-4xl font-bold text-white uppercase md:text-right md:text-7xl">
                Average Cost
              </p>
              <div>
                <p className="font-display mb-2 text-4xl text-white md:text-7xl">
                  4–10x less
                </p>
                <p className="text-white">
                  than traditional attorneys. What would cost our clients $4,000
                  from a fully barred lawyer we can do for $400.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                color="light"
                href="https://columbiaview.churchcenter.com/giving"
              >
                Support Our Mission
              </Button>
            </div>
          </div>
      </GradientSection>
      <Divider />
      <section className="mx-auto flex w-full max-w-6xl flex-col px-6 py-15 lg:py-25">
        <h2 className="text-primary-dark-blue font-display text-center text-4xl/tight font-bold uppercase md:text-7xl/20">
          Client
          <br />
          Testimonials
        </h2>
        <small className="text-neutral-mid-gray mb-12 text-center text-sm">
          For anonymity and security purposes, we have used alias names and
          changed the identifying details of their stories.
        </small>
        <div className="grid grid-cols-1 gap-11 lg:grid-cols-3 lg:grid-rows-1">
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
              treated us like family, and I'm so grateful for the stability
              they've helped bring into our lives.
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
              and connected me with legal resources I didn't even know existed.
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
              one of the hardest things I've ever endured. I knew I wanted to
              bring them to the U.S. so we could be together again, but the
              immigration process seemed so complicated, and I didn't know where
              to begin. That's when I turned to Immigrant Connection PDX. They
              helped me petition for my children to join me here, guiding me
              through every step with patience and care.
            </p>
            <p>
              Thanks to their expertise, I was able to petition for my children
              to come to the States. Though the government processing times take
              very very long, immigrant Connection PDX continues to walk with me
              providing support and waiting well with me."
            </p>
          </Testimonial>
        </div>
      </section>

      <Divider />
      <section className="mx-auto flex w-full max-w-5xl flex-col px-6 py-15 lg:py-25">
        <h2 className="text-primary-dark-blue font-display mb-2 text-center text-4xl/tight font-bold uppercase md:text-7xl/20">
          Partner
          <br />
          Organizations
        </h2>
        <small className="text-neutral-mid-gray mb-12 max-w-150 self-center text-center text-base md:mb-16">
          A heartfelt thank you to each of the organizations below for their
          support. Together we are able to accomplish so much.
        </small>
        <PartnerList />
      </section>
      <Divider />
      <GradientSection color="yellow-green">
        <div className="mx-auto flex min-h-50 w-full max-w-6xl flex-col items-start justify-end gap-6">
          <p className="font-display text-5xl font-bold text-white">
            2023 Annual Report
          </p>
          <Link
            href="https://drive.google.com/file/d/1wU-Hmam19gN4CeHlemYWDsIDZESEFPcd/view"
            className="bg-neutral-dark-gray/20 rounded-full px-6 py-3 text-sm font-semibold text-white uppercase sm:px-10 sm:py-4 sm:text-base"
          >
            View our Annual Report
          </Link>
        </div>
      </GradientSection>
    </main>
  )
}
