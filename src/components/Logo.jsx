import wordmarkDark from '../assets/Logo.svg'
import wordmarkLight from '../assets/Logo-light.svg'

// AKSHARA wordmark. Size it by giving it a width (className).
function Logo({ tone = 'dark', className = '' }) {
  return (
    <img
      src={tone === 'light' ? wordmarkLight : wordmarkDark}
      alt="AKSHARA Elite Home Inspections"
      width={354}
      height={51}
      className={`h-auto ${className}`}
    />
  )
}

export default Logo
