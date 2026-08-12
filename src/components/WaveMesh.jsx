import { useId, useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const LINE_COUNT = 14
const WIDTH = 400
const HEIGHT = 400

function buildPath(i) {
  const t = i / (LINE_COUNT - 1)
  const yBase = 40 + t * (HEIGHT - 80)
  const drift = -50 + t * 100
  const amp = 55 - Math.abs(t - 0.5) * 40
  const phase = i * 0.85
  const yStart = yBase + amp * 0.3 * Math.sin(phase)
  const y1 = yBase + drift * 0.4 + amp * Math.sin(phase + 1.3)
  const y2 = yBase + drift * 0.7 - amp * Math.sin(phase + 2.6)
  const yEnd = yBase + drift + amp * 0.4 * Math.sin(phase + 3.9)
  return `M-10,${yStart.toFixed(1)} C${(WIDTH * 0.3).toFixed(1)},${y1.toFixed(1)} ${(WIDTH * 0.45).toFixed(1)},${y1.toFixed(1)} ${(WIDTH * 0.55).toFixed(1)},${y2.toFixed(1)} S${(WIDTH * 0.85).toFixed(1)},${y2.toFixed(1)} ${WIDTH + 10},${yEnd.toFixed(1)}`
}

function WaveMesh({ className = '' }) {
  const id = useId()
  const reduce = useReducedMotion()

  const lines = useMemo(
    () =>
      Array.from({ length: LINE_COUNT }, (_, i) => {
        const t = i / (LINE_COUNT - 1)
        return {
          d: buildPath(i),
          opacity: 0.55 - Math.abs(t - 0.5) * 0.7,
          width: i % 4 === 0 ? 1.6 : 1,
        }
      }),
    [],
  )

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent-light)" />
          <stop offset="50%" stopColor="var(--color-accent-vivid)" />
          <stop offset="100%" stopColor="var(--color-accent)" />
        </linearGradient>
      </defs>
      {lines.map((line, i) => (
        <motion.path
          key={`line-${i}`}
          d={line.d}
          fill="none"
          stroke={`url(#${id}-grad)`}
          strokeWidth={line.width}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: line.opacity }}
          transition={
            reduce
              ? { duration: 0.4 }
              : { duration: 1.4, delay: i * 0.06, ease: [0.65, 0, 0.35, 1] }
          }
        />
      ))}
    </svg>
  )
}

export default WaveMesh
