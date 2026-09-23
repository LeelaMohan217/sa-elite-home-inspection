import wordmarkDark from '../assets/Logo.svg'
import wordmarkLight from '../assets/Logo-light.svg'

const TAGLINE = 'ELITE HOME INSPECTIONS'

// AKSHARA wordmark with the tagline underneath, spread to exactly the
// wordmark's width. Size the lockup by giving it a width (className); the
// tagline's font size and spacing scale with it via container units.
function Logo({ tone = 'dark', className = '' }) {
  const light = tone === 'light'

  return (
    <span className={`inline-flex flex-col [container-type:inline-size] ${className}`}>
      <img
        src={light ? wordmarkLight : wordmarkDark}
        alt="AKSHARA Elite Home Inspections"
        width={354}
        height={51}
        className="h-auto w-full"
      />
      <span
        aria-hidden="true"
        className={`mt-[4.5cqw] flex justify-between text-[5.2cqw] leading-none font-medium ${
          light ? 'text-paper' : 'text-ink'
        }`}
      >
        {[...TAGLINE].map((char, i) =>
          char === ' ' ? <span key={i} className="w-[0.45em]" /> : <span key={i}>{char}</span>,
        )}
      </span>
    </span>
  )
}

export default Logo
