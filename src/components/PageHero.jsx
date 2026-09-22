import { motion } from 'framer-motion'
import SectionEyebrow from './SectionEyebrow'
import heroImage from '../assets/hero.png'

const EASE = [0.16, 1, 0.3, 1]

function PageHero({
  eyebrow,
  title,
  subtitle,
  image = heroImage,
  imageAlt = 'A certified inspector kneeling to examine the flooring in an empty room during a home inspection.',
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-paper">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
          <h1 className="mt-4 max-w-2xl text-4xl text-ink sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-2xl text-lg text-ink/70">{subtitle}</p>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-[3px] border border-ink/10 md:aspect-[4/3]"
        >
          <img
            src={image}
            alt={imageAlt}
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-[62%_30%] saturate-[0.85] contrast-[1.05]"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default PageHero
