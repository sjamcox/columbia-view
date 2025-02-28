'use client'

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export default function RevenueChart() {
  const data = [
    {
      year: '2020',
      revenue: 9641,
      net: 6982,
    },
    {
      year: '2021',
      revenue: 38673,
      net: 26224,
    },
    {
      year: '2022',
      revenue: 61032,
      net: 3223,
    },
    {
      year: '2023',
      revenue: 99499,
      net: 14247,
    },
    {
      year: '2024',
      revenue: 154000,
      net: 32900,
    },
  ]

  const toThousands = (number: number) => {
    return number !== 0 ? (number / 1000).toFixed(0) + 'K' : ''
  }

  return (
    <ResponsiveContainer
      width="100%"
      height={360}
      className="bg-neutral-light-gray flex flex-col items-center justify-center rounded-2xl pt-8 pb-3"
    >
      <LineChart data={data}>
        <CartesianGrid
          vertical={false}
          strokeDasharray={4}
          stroke="var(--color-neutral-mid-gray)"
        />
        <Line
          dataKey="revenue"
          stroke="var(--color-primary-light-blue)"
          strokeWidth={2}
        />
        <Line
          dataKey="net"
          stroke="var(--color-secondary-green)"
          strokeWidth={2}
        />
        <XAxis dataKey="year" />
        <YAxis tickFormatter={toThousands} />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )
}
