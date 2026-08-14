'use client'

import { useState } from 'react'
import Accordion from '@/components/ui/accordion'
import { ContentSection } from '@/components/ui/section'
import { visitFaqs } from './faqs'

export default function AccordionSection() {
  const [expanded, setExpanded] = useState('')

  const handleClick = (panel: string) => {
    setExpanded(panel === expanded ? '' : panel)
  }

  return (
    <ContentSection className="bg-gray-50">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display mb-10 text-center text-3xl font-bold text-primary-dark-blue lg:text-4xl">
          What to Expect During Your Visit
        </h2>
        <div className="flex flex-col gap-4">
          {visitFaqs.map((faq) => (
            <Accordion
              key={faq.id}
              summary={faq.question}
              color={faq.color}
              open={expanded === faq.id}
              onClick={() => handleClick(faq.id)}
            >
              <p className="text-base/relaxed text-neutral-dark-gray">
                {faq.answer}
              </p>
            </Accordion>
          ))}
        </div>
      </div>
    </ContentSection>
  )
}
