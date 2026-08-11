import Reveal from './Reveal'

function StatBlock({ value, label, index = 0 }) {
  return (
    <Reveal index={index} className="text-center">
      <p className="font-mono text-3xl font-semibold tabular-nums text-brass sm:text-4xl">{value}</p>
      <p className="mt-2 text-sm text-ink/70">{label}</p>
    </Reveal>
  )
}

export default StatBlock
