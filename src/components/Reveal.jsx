import { motion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1]

function Reveal({
  children,
  as = 'div',
  index = 0,
  delay = 0,
  stagger = 0.06,
  y = 20,
  duration = 0.5,
  once = true,
  margin = '-10% 0px -10% 0px',
  className,
  ...rest
}) {
  const Component = motion[as] ?? motion.div
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin }}
      transition={{ duration, delay: delay + index * stagger, ease: EASE_OUT }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Reveal
