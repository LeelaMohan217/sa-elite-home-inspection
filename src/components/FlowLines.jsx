import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const LINES = [
  { d: 'M-100,140 C250,20 550,300 900,120 S1350,240 1650,90', width: 2, opacity: 0.4 },
  { d: 'M-100,320 C300,460 650,180 1000,420 S1450,260 1650,440', width: 1.5, opacity: 0.28 },
  { d: 'M-100,480 C320,360 700,560 1080,440 S1480,520 1650,480', width: 1.5, opacity: 0.22 },
  { d: 'M-100,600 C280,660 620,500 980,640 S1420,560 1650,630', width: 1, opacity: 0.16 },
]

function FlowLines({ className = '' }) {
  const id = useId()
  const reduce = useReducedMotion()

  return (
    <svg viewBox="0 0 1600 720" className={className} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-accent-light)" stopOpacity="0" />
          <stop offset="45%" stopColor="var(--color-accent-vivid)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {LINES.map((line, i) => (
        <motion.path
          key={line.d}
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
              : { duration: 1.8, delay: i * 0.22, ease: [0.65, 0, 0.35, 1] }
          }
        />
      ))}
    </svg>
  )
}

export default FlowLines
