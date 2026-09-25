import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Home, Search, Ruler, KeyRound, Droplets, ClipboardCheck } from "lucide-react";
import CountUp from "./CountUp";
import HeroOrbit, { Chip } from "./HeroOrbit";

const EASE = [0.16, 1, 0.3, 1];

// Entrance timeline, in seconds: each block rises after the one before it.
const T = {
  eyebrow: 0.1,
  headline: 0.3,
  lead: 0.5,
  primary: 0.7,
  secondary: 0.85,
  stats: 1.0,
  statStagger: 0.15,
};

// Whole-block rise from below, the same motion as the section reveals.
const rise = (delay, skip) => ({
  initial: skip ? false : { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, delay, ease: EASE },
});

// Phones only: a still icon placed in one of the gaps around the text
// (above the eyebrow, between the buttons and the stats, below the stats).
function PhoneIcon({ icon, className, delay, skip }) {
  return (
    <motion.span
      aria-hidden="true"
      initial={skip ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: EASE }}
      className={`pointer-events-none absolute h-[46px] w-[46px] sm:hidden ${className}`}
    >
      <Chip icon={icon} size={21} />
    </motion.span>
  );
}

function Hero({
  eyebrow = "Certified Home Inspections",
  headline = "Know the home before you make it yours.",
  lead = "We check the structure, electrical, plumbing and roofing before you sign anything, and send you a detailed report within 48 hours.",
  primaryCta = { label: "Book an Inspection", to: "/contact" },
  secondaryCta = { label: "View Our Services", to: "/services" },
  stats = [],
}) {
  // The last word of the headline is set in the serif italic as the one
  // expressive accent in an otherwise all-sans hero.
  const splitAt = headline.lastIndexOf(" ");
  const headlineStart = headline.slice(0, splitAt + 1);
  const emphasis = headline.slice(splitAt + 1);
  const skip = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden pt-20">
      {/* Orbiting home and inspection symbols */}
      <HeroOrbit />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-16 text-center sm:px-8 lg:px-10">
        <div className="relative flex w-full justify-center">
          <PhoneIcon icon={Home} className="-top-[62px] left-[4%]" delay={1.0} skip={skip} />
          <PhoneIcon icon={Search} className="-top-[50px] right-[10%]" delay={1.1} skip={skip} />
          <motion.span
            {...rise(T.eyebrow, skip)}
            className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-paper/80 whitespace-nowrap px-4 py-2 text-eyebrow leading-none font-medium uppercase text-stone backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {eyebrow}
          </motion.span>
        </div>

        <motion.h1
          {...rise(T.headline, skip)}
          className="mt-8 max-w-4xl text-balance text-display font-medium text-ink"
        >
          {headlineStart}
          <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">
            {emphasis}
          </span>
        </motion.h1>

        <motion.p
          {...rise(T.lead, skip)}
          className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-stone sm:text-[17px]"
        >
          {lead}
        </motion.p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <motion.div {...rise(T.primary, skip)} className="w-full sm:w-auto">
            <Link
              to={primaryCta.to}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink h-10 px-5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-ink-800 sm:w-auto"
            >
              {primaryCta.label}
              <ArrowRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          <motion.div {...rise(T.secondary, skip)} className="w-full sm:w-auto">
            <Link
              to={secondaryCta.to}
              className="inline-flex w-full items-center justify-center rounded-full border border-hairline bg-paper h-10 px-5 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink/25 sm:w-auto"
            >
              {secondaryCta.label}
            </Link>
          </motion.div>
        </div>

        {stats.length > 0 && (
          <div className="relative mt-16 w-full max-w-2xl">
            <PhoneIcon icon={Ruler} className="-top-[55px] left-[2%]" delay={1.2} skip={skip} />
            <PhoneIcon icon={KeyRound} className="-top-[55px] right-[16%]" delay={1.3} skip={skip} />
            <PhoneIcon icon={Droplets} className="-bottom-[60px] left-[18%]" delay={1.4} skip={skip} />
            <PhoneIcon icon={ClipboardCheck} className="-bottom-[52px] right-[3%]" delay={1.5} skip={skip} />
            <motion.dl
              initial={skip ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: T.stats, ease: EASE }}
              className="grid w-full grid-cols-3 divide-x divide-hairline border-t border-hairline pt-8"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  {...rise(T.stats + i * T.statStagger, skip)}
                  className="flex flex-col items-center gap-1.5 px-2"
                >
                  <dt className="order-2 text-xs text-stone sm:text-sm">{stat.label}</dt>
                  <dd className="order-1 text-h3 font-medium tracking-tight text-ink">
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      startAfter={T.stats + i * T.statStagger}
                    />
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
