import Reveal from './Reveal'
import BlobShape from './BlobShape'

const TONES = {
  paper: 'bg-paper border border-hairline text-ink shadow-elevate',
  ink: 'bg-ink text-paper shadow-cta',
  accent: 'bg-accent-vivid text-paper shadow-cta',
}

const BLOB_TONES = {
  ink: { from: 'var(--color-accent-dark)', to: 'var(--color-ink)' },
  accent: { from: 'var(--color-accent)', to: 'var(--color-accent-vivid)' },
}

function InspectionCard({ as = 'div', tone = 'paper', decorated = false, index = 0, className = '', children }) {
  const blob = decorated ? BLOB_TONES[tone] : null

  return (
    <Reveal
      as={as}
      index={index}
      className={`relative rounded-3xl p-7 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-elevate-hover motion-reduce:hover:translate-y-0 ${TONES[tone]} ${className}`}
    >
      {blob && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl" aria-hidden="true">
          <BlobShape className="absolute -right-14 -top-14 h-56 w-56 opacity-30" from={blob.from} to={blob.to} />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </Reveal>
  )
}

export default InspectionCard
