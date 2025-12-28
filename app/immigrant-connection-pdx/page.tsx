import type { Metadata } from 'next'
import Image from 'next/image'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

import ServiceList from './ServiceList'
import Button from '@/components/ui/button'
import { ContentSection } from '@/components/ui/section'
import icpdxLogo from '@/public/logos/icpdx-logo-transparent.png'
import daca from '@/public/daca.webp'
import family from '@/public/family.webp'
import residence from '@/public/residence.webp'
import status from '@/public/status.webp'
import visa from '@/public/visa.webp'
import world from '@/public/world.webp'

export const metadata: Metadata = {
  title: 'Immigrant Connection PDX | Low-Cost Immigration Legal Services',
  description:
    "We're a church-based, low-cost immigration legal services office in East Portland. We serve those seeking legal assistance with issues relating to immigration.",
  alternates: {
    canonical: '/immigrant-connection-pdx',
  },
}


export default function ImmigrantConnection() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* Header */}
      <div className="mb-6 flex flex-col-reverse justify-between gap-8 sm:flex-row sm:items-end">
        <div className="w-full sm:w-2/3">
          <h1 className="font-display text-5xl font-normal text-neutral-800 lg:text-6xl">
            Immigrant Connection PDX
          </h1>
        </div>
        <div className="flex w-full justify-center sm:w-1/3 sm:justify-end">
          <div className="w-36 md:w-64">
            <Image
              src={icpdxLogo}
              alt="Immigrant Connection PDX logo"
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      <p className="mb-12 text-3xl font-normal text-neutral-dark-gray">
        A Department of Justice recognized legal office that provides low-cost
        immigration legal services.
      </p>

      {/* Main Content Grid */}
      <div className="grid gap-10 lg:grid-cols-12">
        {/* Left Column */}
        <div className="lg:col-span-8">
          <p className="mb-4 text-base">
            <strong>We are currently receiving new clients!</strong>
          </p>

          {/* Alert */}
          <div className="mb-8 flex gap-4 rounded-md bg-secondary-yellow/25 p-4 text-blue-900">
            <InformationCircleIcon className="h-6 w-6 shrink-0" />
            <div>
              Our office is not currently processing Asylum, U Visa, VAWA or
              Employment-based immigration (ie. H-1B, L-1, O-1, TN, E-2, EB-1,
              EB-2, EB-3, EB-4, EB-5, etc.) cases at this time. We apologize for
              any inconvenience.
            </div>
          </div>

          <div className="space-y-6 text-base text-neutral-dark-gray">
            <p>
              Immigrant Connection PDX is a church-based, low-cost, immigration
              legal services office located in east Portland that provides legal
              assistance to individuals who are seeking assistance with issues
              relating to immigration, such as Family and Marriage Based
              Petitions, Naturalization Petitions, Legal Permanent Resident and
              Employment Authorization renewals, Adjustment of Status, Consular
              Processing, DACA, TPS, Non-Immigrant Visas, and Religious Worker
              Visas.
            </p>
            <p>
              A $40 office visit/legal consultation fee is due at your first
              appointment and must be paid prior to speaking with the
              Immigration Legal Representative. This is in addition to any legal
              or filing fees that will be required for your case.
            </p>
            <p>
              If you need advice or assistance with any of these services, or
              simply need help understanding what options you may have under the
              law, you can schedule an initial consultation with one of our
              Legal Representatives. During the consultation, we will carefully
              review your case and make sure you understand the benefits and
              risks associated with your situation, then offer you advice on how
              to proceed.
            </p>
            <p>
              Defensive Asylum is outside of the scope of our practice. Please
              visit the{' '}
              <a
                href="https://www.ailalawyer.com/"
                className="text-primary-light-blue hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                American Immigration Lawyers Association
              </a>{' '}
              (AILA) website for assistance regarding Defensive Asylum.
            </p>
            <p>
              <strong>
                Please click the “schedule an appointment” button below or call
                our legal office at{' '}
                <a
                  href="tel:+19712022073"
                  className="text-primary-light-blue hover:underline"
                >
                  971.202.2073
                </a>{' '}
                to schedule an appointment.
              </strong>{' '}
              An initial consultation costs $40.
            </p>
            <p>
              We are a part of the Immigrant Connection National Network of
              church-based, low-cost, immigration legal services offices. For
              more info:{' '}
              <a
                href="https://www.icwelcome.org"
                className="text-primary-light-blue hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                icwelcome.org
              </a>
              .
            </p>
          </div>

          <div className="mt-8 mb-8">
            <Button
              href="https://immigrantconnectionpdx.as.me/?appointmentType=category:1.%20Initial%20Consultation%20%2F%20%20Consulta%20Inicial"
              color="blue"
            >
              Schedule an appointment
            </Button>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="lg:col-span-4">
          <div className="text-[15px] space-y-4 text-neutral-dark-gray">
            <p className="font-bold text-black">Office Hours & Location</p>
            
            <div>
              <p>Mondays</p>
              <p>11:00 am – 5:00 pm</p>
            </div>

            <div>
              <p>Tuesdays, Wednesdays and Thursdays</p>
              <p>9:00 am – 6:00 pm</p>
            </div>

            <div>
              <p>Columbia View Church</p>
              <p>16700 NE Halsey St.</p>
              <p>Portland, OR 97230</p>
            </div>

            <div>
              <p>
                <a
                  href="tel:+19712022073"
                  className="text-primary-light-blue hover:underline"
                >
                  971.202.2073
                </a>
              </p>
              <p>
                <a
                  href="mailto:info.icpdx@gmail.com"
                  className="text-primary-light-blue hover:underline"
                >
                  info.icpdx@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <h2 className="mt-16 mb-8 text-center text-4xl font-bold text-neutral-800">
        Services
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {[
          { src: world, label: 'Naturalization / Citizenship' },
          { src: family, label: 'Family-Based Petitions' },
          { src: daca, label: 'DACA' },
          { src: status, label: 'Adjustment of Status' },
          { src: residence, label: 'Renew Permanent Resident Card' },
          { src: visa, label: 'Work Authorization' },
        ].map((item) => (
          <div key={item.label} className="mt-4 flex flex-col items-center">
            <Image
              src={item.src}
              alt={`Illustration for ${item.label}`}
              width={128}
              height={128}
            />
            <p className="mt-3 text-center text-base font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <ServiceList />
    </main>
  )
}
