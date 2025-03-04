'use client'

type AccordionProps = {
  summary: string
  children: React.ReactNode
  color: 'aqua' | 'red' | 'yellow' | 'green'
  onClick: () => void
  open: boolean
}

export default function Accordion({
  summary,
  children,
  color,
  onClick,
  open,
}: AccordionProps) {
  const colorVariants = {
    aqua: 'bg-secondary-aqua',
    red: 'bg-secondary-red',
    yellow: 'bg-secondary-yellow',
    green: 'bg-secondary-green',
  }

  return (
    <details {...(open ? { open: true } : {})} className="w-full">
      <summary
        className={`flex w-full cursor-pointer items-center justify-between gap-4 rounded-full border-none py-6 text-left ${colorVariants[color]}`}
        onClick={(e) => {
          e.preventDefault()
          onClick()
        }}
      >
        <span className="ml-8 text-lg/tight font-semibold opacity-50">
          {summary}
        </span>
        <span
          className="font-display mr-6 text-4xl/4 font-semibold text-white"
          aria-hidden="true"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </span>
      </summary>
      <div className="bg-neutral-light-gray mt-4 rounded-3xl p-8">
        {children}
      </div>
    </details>
  )
}
