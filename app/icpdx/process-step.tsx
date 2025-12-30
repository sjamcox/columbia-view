'use client'

import { ReactNode, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

type ProcessStepProps = {
  number: string
  title: string
  children: ReactNode
}

export default function ProcessStep({
  number,
  title,
  children,
}: ProcessStepProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between gap-4 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className="bg-primary-dark-blue flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white transition-transform group-hover:scale-110">
            {number}
          </div>
          <h3 className="font-display text-2xl font-bold transition-colors group-hover:text-primary-dark-blue">
            {title}
          </h3>
        </div>
        <ChevronDownIcon
          className={`h-6 w-6 shrink-0 text-neutral-400 transition-all duration-300 ${
            isOpen ? 'rotate-180 text-primary-dark-blue' : 'group-hover:text-primary-dark-blue'
          }`}
        />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <div className="text-neutral-dark-gray/80 flex flex-col gap-4 pt-2 text-base">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
