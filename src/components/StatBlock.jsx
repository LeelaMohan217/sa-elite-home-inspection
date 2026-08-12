import Reveal from './Reveal'

function StatBlock({ value, label, index = 0 }) {
  return (
    <Reveal index={index} className="rounded-2xl p-6">
      <p className="text-3xl font-extrabold tabular-nums text-ink sm:text-4xl">{value}</p>
      <p className="mt-2 text-sm text-ink/60">{label}</p>
    </Reveal>
  )
}

export default StatBlock
