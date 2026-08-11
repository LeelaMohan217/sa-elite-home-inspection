import Reveal from './Reveal'

function InspectionCard({ as = 'div', featured = false, index = 0, className = '', children }) {
  const surface = featured
    ? 'bg-ink-800 border border-ink-800 text-paper'
    : 'bg-paper border border-hairline text-ink'
  const tickColor = featured ? 'border-brass-light' : 'border-brass/70 group-hover:border-brass'

  return (
    <Reveal
      as={as}
      index={index}
      className={`group relative rounded-sm p-6 transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.015] motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 ${surface} ${className}`}
    >
      <span
        className={`pointer-events-none absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 transition-colors duration-200 ${tickColor}`}
        aria-hidden="true"
      />
      <span
        className={`pointer-events-none absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 transition-colors duration-200 ${tickColor}`}
        aria-hidden="true"
      />
      <span
        className={`pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 transition-colors duration-200 ${tickColor}`}
        aria-hidden="true"
      />
      <span
        className={`pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 transition-colors duration-200 ${tickColor}`}
        aria-hidden="true"
      />
      {children}
    </Reveal>
  )
}

export default InspectionCard
