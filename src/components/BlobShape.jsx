import { useId } from 'react'

const PATH =
  'M421,320Q436,410,350,460Q264,510,180,450Q96,390,110,300Q124,210,210,170Q296,130,370,180Q444,230,421,320Z'

function BlobShape({ className = '', from = 'var(--color-accent)', to = 'var(--color-ink)' }) {
  const id = useId()
  return (
    <svg viewBox="0 0 500 500" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <path fill={`url(#${id})`} d={PATH} />
    </svg>
  )
}

export default BlobShape
