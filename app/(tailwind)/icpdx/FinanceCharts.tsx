import PieChart from 'components/PieChart'

const incomeData = [
  { name: 'Donors', percentage: 10, color: 'var(--color-secondary-yellow)' },
  { name: 'Grants', percentage: 23, color: 'var(--color-secondary-aqua)' },
  { name: 'In-Kind', percentage: 16, color: 'var(--color-secondary-red)' },
  {
    name: 'Client Fees',
    percentage: 51,
    color: 'var(--color-secondary-green)',
  },
]

const expenseData = [
  {
    name: 'Case Management',
    percentage: 70,
    color: 'var(--color-secondary-aqua)',
  },
  {
    name: 'Office Equipment & Supplies',
    percentage: 14,
    color: 'var(--color-secondary-green)',
  },
  { name: 'In-Kind', percentage: 16, color: 'var(--color-secondary-yellow)' },
]

export function IncomeChart() {
  return <PieChart data={incomeData} />
}

export function ExpenseChart() {
  return <PieChart data={expenseData} />
}
