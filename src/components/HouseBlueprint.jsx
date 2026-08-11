import { motion, useReducedMotion } from 'framer-motion'

const CHECKPOINTS = [
  { id: 'roof', label: 'ROOF', x: 160, y: 34 },
  { id: 'foundation', label: 'FOUNDATION', x: 150, y: 222 },
  { id: 'electrical', label: 'ELECTRICAL', x: 58, y: 128 },
  { id: 'plumbing', label: 'PLUMBING', x: 260, y: 150 },
]

function HouseBlueprint({ className = '' }) {
  const reduce = useReducedMotion()

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay) => ({
      pathLength: 1,
      opacity: 1,
      transition: reduce
        ? { duration: 0.2, delay: 0 }
        : { duration: 0.4, delay, ease: [0.65, 0, 0.35, 1] },
    }),
  }

  const dotVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: reduce
        ? { duration: 0.15, delay: 0 }
        : { type: 'spring', stiffness: 320, damping: 22, delay },
    }),
  }

  const stageDelay = (i) => (reduce ? 0 : 0.15 * i)

  return (
    <svg viewBox="0 0 340 240" className={className} role="img" aria-hidden="true">
      <motion.path
        d="M60 120 L60 214 L260 214 L260 120"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        custom={stageDelay(0)}
      />
      <motion.path
        d="M40 120 L160 40 L280 120"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        custom={stageDelay(1)}
      />
      <motion.path
        d="M210 55 L210 92"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        custom={stageDelay(2)}
      />
      <motion.path
        d="M140 214 L140 162 L180 162 L180 214"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        custom={stageDelay(3)}
      />
      <motion.rect
        x="80"
        y="142"
        width="30"
        height="30"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        custom={stageDelay(4)}
      />
      <motion.rect
        x="210"
        y="142"
        width="30"
        height="30"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        custom={stageDelay(4.3)}
      />

      {CHECKPOINTS.map((cp, i) => (
        <motion.g
          key={cp.id}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          custom={reduce ? 0.05 * i : 1.0 + i * 0.12}
        >
          <circle cx={cp.x} cy={cp.y} r="4" fill="var(--color-brass)" />
          <text
            x={cp.x + 9}
            y={cp.y + 3.5}
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1.4"
            fill="var(--color-brass-dark)"
          >
            {cp.label}
          </text>
        </motion.g>
      ))}
    </svg>
  )
}

export default HouseBlueprint
