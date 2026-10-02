import type { Metadata } from 'next'
import IcpdxSchema from '@/components/features/seo/icpdx-schema'
import Button from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Jobs | Immigrant Connection PDX',
  description:
    'View open positions at Immigrant Connection PDX, a DOJ-recognized immigration legal services office in East Portland. Join our team and make a difference.',
  alternates: {
    canonical: '/immigrant-connection-pdx/jobs',
  },
}

export default function JobsPage() {
  return (
    <>
      <IcpdxSchema />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="font-display mb-12 text-center text-5xl font-normal text-neutral-800 lg:text-6xl">
          Available Positions
        </h1>

        <div className="space-y-12">
          {/* Job */}
          <div className="rounded-2xl border border-neutral-light-gray bg-white p-8 shadow-sm">
            <h2 className="mb-2 text-2xl font-bold text-primary-dark-blue">
              DOJ Accredited Representative
            </h2>
            <p className="mb-4 text-base leading-relaxed text-neutral-dark-gray">
              A DOJ Accredited Representative provides competent, ethical,
              client-centered immigration legal services, from consultations and
              case strategy to filings and representation before USCIS, while
              supervising Legal Assistants. 32-40 hours/week.
            </p>
            <p className="mb-6 text-base leading-relaxed text-neutral-dark-gray">
              This Immigrant Connection PDX staff position starts as a legal
              assistant under the supervision of a DOJ accredited representative
              with the intention that within 12-18 months you will submit your
              DOJ accreditation application.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                color="blue"
                href="/icpdx/jobs/doj-accredited-representative.pdf"
                prefetch={false}
              >
                View Position Details
              </Button>
              <Button
                color="blue"
                href="https://columbiaview.churchcenter.com/people/forms/981496"
              >
                Apply
              </Button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 rounded-xl bg-secondary-aqua/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-neutral-800">
              Contact Us
            </h2>
            <p className="text-lg text-neutral-dark-gray">
              If you have any questions about an open position or are interested
              in applying, please contact our office:
            </p>
            <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
              <a
                href="tel:503.253.7939"
                className="text-lg font-medium text-primary-light-blue transition-colors hover:text-primary-dark-blue hover:underline"
              >
                503.253.7939
              </a>
              <span className="hidden text-neutral-mid-gray sm:inline">|</span>
              <a
                href="mailto:office.cvwc@gmail.com"
                className="text-lg font-medium text-primary-light-blue transition-colors hover:text-primary-dark-blue hover:underline"
              >
                office.cvwc@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
