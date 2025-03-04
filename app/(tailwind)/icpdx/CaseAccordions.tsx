'use client'

import { useState } from 'react'
import Accordion from 'components/Accordion'

export default function CaseAccordions() {
  const [expanded, setExpanded] = useState<string>('east')

  const handleClick = (name: string) => {
    setExpanded((prev) => {
      if (prev === name) {
        return ''
      }

      return name
    })
  }

  return (
    <div className="flex flex-col gap-8">
      <Accordion
        summary="East County’s Growing Immigrant Population"
        color="aqua"
        open={expanded === 'east'}
        onClick={() => handleClick('east')}
      >
        <p className="mb-4 text-base">
          East County is home to a large and diverse immigrant community,
          particularly from Latin America, Southeast Asia, East Africa, and
          Eastern Europe. Many face barriers such as language difficulties,
          cultural differences, and economic hardship, making access to legal
          immigration services crucial.
        </p>
        <p className="text-base">
          Portland’s foreign-born population exceeds 13%, with East Portland
          having an even higher concentration. An estimated 50,000 undocumented
          immigrants reside in the metro area, facing challenges in securing
          employment, healthcare, and education without legal status.
        </p>
      </Accordion>
      <Accordion
        summary="Barriers in the Immigration System"
        color="red"
        open={expanded === 'barriers'}
        onClick={() => handleClick('barriers')}
      >
        <p className="mb-4 text-base">
          The U.S. immigration system is complex, costly, and difficult to
          navigate, especially for low-income immigrants. Legal services are
          scarce in East Portland, with most immigration law firms concentrated
          on the Westside and beyond the financial reach of many residents.
        </p>
        <p className="text-base">
          Nonprofit and volunteer legal services exist but are overwhelmed,
          leading to long wait times and insufficient resources to meet demand.
          Without legal assistance, immigrants remain vulnerable to exploitation
          in low-wage jobs, lack healthcare access, and have limited educational
          and economic opportunities.
        </p>
      </Accordion>
      <Accordion
        summary="Critical Need for Immigration Legal Services"
        color="yellow"
        open={expanded === 'critical'}
        onClick={() => handleClick('critical')}
      >
        <p className="mb-4 text-base">
          Gaining lawful immigration status significantly improves economic
          stability, access to healthcare, and educational opportunities while
          reducing stress and anxiety. Studies show that legal status enables
          stable employment, better healthcare access, and improved academic
          performance for immigrants’ children.
        </p>
        <p className="text-base">
          East Portland, particularly Rockwood, has a dense immigrant population
          where over 88 languages are spoken, yet affordable and culturally
          competent legal services remain limited. Across Oregon, nearly half a
          million foreign-born individuals reside, but only 23 DOJ-recognized
          immigration offices exist to serve the entire state.
        </p>
      </Accordion>
      <Accordion
        summary="The Role of Immigrant Connection PDX"
        color="green"
        open={expanded === 'icpdx'}
        onClick={() => handleClick('icpdx')}
      >
        <p className="mb-4 text-base">
          Immigrant Connection PDX provides affordable, culturally competent
          immigration legal services in East Portland, filling a crucial gap in
          the community. Our nonprofit offers guidance through the complex legal
          system, collaborates with local churches and schools, and supports
          mental and emotional well-being.
        </p>
        <p className="text-base">
          Because of the generosity of church communities and individual donors,
          we keep costs low while delivering high-quality legal services.
          Without accessible legal support, immigrants face deportation risks,
          family separation, and barriers to housing and job stability. As the
          demand for services outpaces supply, our work remains more essential
          than ever.
        </p>
      </Accordion>
    </div>
  )
}
