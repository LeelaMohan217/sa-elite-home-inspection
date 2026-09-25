import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

// Whole-block rise from below, as in the home hero.
const rise = (delay, skip) => ({
  initial: skip ? false : { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, delay, ease: EASE },
})

// Centred, text-only header for inner pages. Eyebrow pill, heading and
// subtitle rise in turn on load. `accent` is an optional last phrase of the
// heading, set in the navy serif italic.
function PageHero({ eyebrow, title, accent, subtitle, children }) {
  const skip = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden pt-20">
      {/* Faint architectural grid, faded out towards the edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-hairline)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-hairline)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_45%,black_20%,transparent_75%)] opacity-70"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 pt-16 pb-16 text-center sm:px-8 sm:pt-24 sm:pb-20 lg:px-10">
        {eyebrow && (
          <motion.span
            {...rise(0.1, skip)}
            className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-paper/80 whitespace-nowrap px-4 py-2 text-eyebrow leading-none font-medium uppercase text-stone backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {eyebrow}
          </motion.span>
        )}

        <motion.h1 {...rise(0.3, skip)} className="mt-7 text-balance text-h1 font-medium text-ink">
          {title}
          {accent && (
            <>
              {' '}
              <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">
                {accent}
              </span>
            </>
          )}
        </motion.h1>

        {subtitle && (
          <motion.p
            {...rise(0.5, skip)}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-stone sm:text-[17px]"
          >
            {subtitle}
          </motion.p>
        )}

        {children && <motion.div {...rise(0.7, skip)} className="mt-9">{children}</motion.div>}
      </div>
    </section>
  )
}

export default PageHero
