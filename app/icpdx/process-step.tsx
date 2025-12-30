import { ReactNode } from 'react'

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
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="bg-primary-dark-blue flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white">
          {number}
        </div>
        <h3 className="font-display text-2xl font-bold">{title}</h3>
      </div>
      <div className="text-neutral-dark-gray/80 flex flex-col gap-4 text-base">
        {children}
      </div>
    </div>
  )
}
