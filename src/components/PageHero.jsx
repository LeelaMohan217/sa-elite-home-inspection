import { motion } from 'framer-motion'
import SectionEyebrow from './SectionEyebrow'
import GradientOrb from './GradientOrb'

function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-paper">
      <GradientOrb tone="accent" className="-right-24 -top-32 h-80 w-80 opacity-70" />
      <div className="relative mx-auto max-w-6xl px-4 pt-32 pb-20 sm:px-6 sm:pt-36 sm:pb-24 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
          <h1 className="mt-4 max-w-2xl text-4xl text-ink sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-2xl text-lg text-ink/70">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  )
}

export default PageHero
