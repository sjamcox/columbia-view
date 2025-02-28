'use client'

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Legend,
  CartesianGrid,
  LabelList,
} from 'recharts'

export default function ClientsChart() {
  const data = [
    {
      year: '2020',
      clients: 50,
      submissions: 8,
    },
    {
      year: '2021',
      clients: 80,
      submissions: 24,
    },
    {
      year: '2022',
      clients: 190,
      submissions: 70,
    },
    {
      year: '2023',
      clients: 330,
      submissions: 130,
    },
    {
      year: '2024',
      clients: 350,
      submissions: 200,
    },
  ]

  return (
    <ResponsiveContainer
      width="100%"
      height={320}
      className="bg-neutral-light-gray flex items-center justify-center rounded-2xl"
    >
      <BarChart
        data={data}
        barGap={5}
        margin={{ top: 40, bottom: 20, left: 30, right: 30 }}
      >
        <CartesianGrid
          vertical={false}
          strokeDasharray={4}
          stroke="var(--color-neutral-mid-gray)"
        />
        <Bar
          dataKey="clients"
          fill="var(--color-primary-light-blue)"
          radius={[4, 4, 0, 0]}
        >
          <LabelList
            dataKey="clients"
            position="top"
            fill="var(--color-primary-light-blue)"
          />
        </Bar>
        <Bar
          dataKey="submissions"
          fill="var(--color-secondary-green)"
          radius={[4, 4, 0, 0]}
        >
          <LabelList
            dataKey="submissions"
            position="top"
            fill="var(--color-secondary-green)"
          />
        </Bar>
        <XAxis dataKey="year" stroke="var(--color-neutral-dark-gray)" />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  )
}
