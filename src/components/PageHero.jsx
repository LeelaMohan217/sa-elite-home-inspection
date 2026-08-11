import { motion } from 'framer-motion'
import SectionEyebrow from './SectionEyebrow'

function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="border-b border-hairline bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
          <h1 className="mt-4 max-w-2xl font-display text-4xl text-ink sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-2xl text-lg text-ink/70">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  )
}

export default PageHero
