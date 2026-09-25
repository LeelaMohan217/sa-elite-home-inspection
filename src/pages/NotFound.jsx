import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Button from '../components/Button'

const EASE = [0.16, 1, 0.3, 1]

const rise = (delay, skip) => ({
  initial: skip ? false : { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, delay, ease: EASE },
})

const suggestions = [
  { to: '/services', title: 'Services', description: 'Inspections, multi stage and dampness checks' },
  { to: '/prices', title: 'Pricing', description: 'Flat rates for flats and villas' },
  { to: '/about', title: 'About us', description: 'Who we are and how we work' },
  { to: '/contact', title: 'Contact', description: 'Book an inspection or ask a question' },
]

// Shown for any address the site doesn't have.
function NotFound() {
  const skip = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden pt-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-hairline)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-hairline)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black_20%,transparent_75%)] opacity-70"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 pt-16 pb-16 text-center sm:px-8 sm:pt-24 sm:pb-24 lg:px-10">
        <motion.span
          {...rise(0.1, skip)}
          className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-paper/80 px-4 py-2 text-eyebrow leading-none font-medium uppercase text-stone backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          Error 404
        </motion.span>

        <motion.p
          {...rise(0.25, skip)}
          aria-hidden="true"
          className="mt-6 font-serif text-[clamp(7rem,5rem+10vw,13rem)] leading-none italic tracking-[-0.04em] text-accent"
        >
          404
        </motion.p>

        <motion.h1 {...rise(0.4, skip)} className="mt-2 text-balance text-h1 font-medium text-ink">
          This page isn't here.
        </motion.h1>

        <motion.p
          {...rise(0.55, skip)}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-stone sm:text-[17px]"
        >
          The link may be broken, or the page may have moved. Here are a few places to start instead.
        </motion.p>

        <motion.div {...rise(0.7, skip)} className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Button to="/" icon={ArrowRight} className="w-full sm:w-auto">
            Back to Home
          </Button>
          <Button to="/contact" variant="secondary" className="w-full sm:w-auto">
            Contact Us
          </Button>
        </motion.div>

        <motion.ul
          {...rise(0.85, skip)}
          className="mt-16 grid w-full gap-3 border-t border-hairline pt-10 text-left sm:grid-cols-2"
        >
          {suggestions.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-hairline bg-paper p-5 transition-colors duration-300 hover:border-ink/20"
              >
                <span>
                  <span className="block text-[17px] font-medium tracking-tight text-ink">{item.title}</span>
                  <span className="mt-1 block text-sm text-stone">{item.description}</span>
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                  <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default NotFound
