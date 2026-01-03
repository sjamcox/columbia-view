'use client'

import type { TooltipProps } from 'recharts'

import { useState } from 'react'
import {
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPie,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

type Entry = {
  name: string
  percentage: number
  color: string
}

type PieChartProps = {
  data: Entry[]
}

export default function PieChart({ data }: PieChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | undefined>()

  const onHover = (_: unknown, index: number) => {
    setActiveIndex(index)
  }

  return (
    <ResponsiveContainer
      width="100%"
      height={360}
      className="bg-neutral-light-gray flex flex-col items-center justify-center rounded-2xl pb-3"
    >
      <RechartsPie>
        <Pie
          data={data}
          dataKey="percentage"
          activeIndex={activeIndex}
          onMouseEnter={onHover}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend />
        <Tooltip content={<CustomTooltip />} />
      </RechartsPie>
    </ResponsiveContainer>
  )
}

function CustomTooltip({ active, payload }: TooltipProps<number, string>) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-white p-3">
        <p className="label">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    )
  }

  return null
}
