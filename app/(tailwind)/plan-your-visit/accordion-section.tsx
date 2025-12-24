'use client'

import { useState } from 'react'
import Accordion from '@/components/ui/accordion'
import { ContentSection } from '@/components/ui/section'

export default function AccordionSection() {
  const [expanded, setExpanded] = useState('')

  const handleClick = (panel: string) => {
    panel === expanded ? setExpanded('') : setExpanded(panel)
  }

  return (
    <ContentSection className="bg-gray-50">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display mb-10 text-center text-3xl font-bold text-primary-dark-blue lg:text-4xl">
          What to Expect During Your Visit
        </h2>
        <div className="flex flex-col gap-4">
          <Accordion
            summary="On Arrival"
            color="aqua"
            open={expanded === 'arrival'}
            onClick={() => handleClick('arrival')}
          >
            <p className="text-base/relaxed text-neutral-dark-gray">
              After parking in our parking lot, you will walk through the main
              entrance double doors. You will be greeted by a few smiling faces
              and offered complementary coffee and baked goods. Sunday morning
              worship service begins at 10:00 am. Our people are very laid back
              and friendly.
            </p>
          </Accordion>

          <Accordion
            summary="Infants & Children"
            color="green"
            open={expanded === 'children'}
            onClick={() => handleClick('children')}
          >
            <p className="text-base/relaxed text-neutral-dark-gray">
              We have nursery staff on-site for families with infants through
              age 3. We also offer kids programming for age 4 - grade 5 during
              the preaching portion of our worship service. All nursery and
              children volunteers are background checked and trained.
            </p>
          </Accordion>

          <Accordion
            summary="Parking"
            color="yellow"
            open={expanded === 'parking'}
            onClick={() => handleClick('parking')}
          >
            <p className="text-base/relaxed text-neutral-dark-gray">
              We have parking available at the front, side, and the back of the
              building.
            </p>
          </Accordion>

          <Accordion
            summary="Music"
            color="red"
            open={expanded === 'music'}
            onClick={() => handleClick('music')}
          >
            <p className="text-base/relaxed text-neutral-dark-gray">
              We promote music that reflects the congregation, so we generally
              worship with a blend of hymns and contemporary music.
            </p>
          </Accordion>

          <Accordion
            summary="Gathering Size"
            color="aqua"
            open={expanded === 'attendance'}
            onClick={() => handleClick('attendance')}
          >
            <p className="text-base/relaxed text-neutral-dark-gray">
              Our directory has around 100 names, and on a given Sunday we will
              have between 50-60 people in attendance.
            </p>
          </Accordion>
        </div>
      </div>
    </ContentSection>
  )
}
