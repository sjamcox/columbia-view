type GivingProgressBarProps = {
  raised: number
  goal: number
}

export default function GivingProgressBar({
  raised,
  goal,
}: GivingProgressBarProps) {
  const percentage = Math.min((raised / goal) * 100, 100)

  return (
    <div className="w-full max-w-4xl">
      <div className="mb-6 flex flex-col items-center gap-4 text-center font-display text-2xl font-black text-white sm:flex-row sm:justify-between sm:text-left sm:text-3xl">
        <span className="drop-shadow-sm">Raised: ${raised.toLocaleString()}</span>
        <span className="drop-shadow-sm">Goal: ${goal.toLocaleString()}</span>
      </div>
      <div className="bg-white/10 relative h-12 w-full overflow-hidden rounded-full border-2 border-white/30 backdrop-blur-sm shadow-2xl">
        <div
          className="h-full rounded-full bg-linear-to-r from-secondary-aqua via-secondary-green to-secondary-aqua shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
