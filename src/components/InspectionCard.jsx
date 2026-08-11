import Reveal from './Reveal'

const TONES = {
  paper: 'bg-paper border border-hairline text-ink shadow-elevate',
  ink: 'bg-ink text-paper shadow-cta',
  accent: 'bg-accent-vivid text-paper shadow-cta',
}

function InspectionCard({ as = 'div', tone = 'paper', index = 0, className = '', children }) {
  return (
    <Reveal
      as={as}
      index={index}
      className={`relative rounded-3xl p-7 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-elevate-hover motion-reduce:hover:translate-y-0 ${TONES[tone]} ${className}`}
    >
      {children}
    </Reveal>
  )
}

export default InspectionCard
