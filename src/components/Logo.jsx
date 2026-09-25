import wordmarkDark from '../assets/Logo.svg'
import wordmarkLight from '../assets/Logo-light.svg'

// Akshara Elite Home Inspections logo: the Kalnia "A" mark beside the two-line
// name. Size it by giving it a width (className).
function Logo({ tone = 'dark', className = '' }) {
  return (
    <img
      src={tone === 'light' ? wordmarkLight : wordmarkDark}
      alt="Akshara Elite Home Inspections"
      width={622}
      height={94}
      className={`h-auto ${className}`}
    />
  )
}

export default Logo
