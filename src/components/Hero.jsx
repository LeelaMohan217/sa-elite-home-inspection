import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CountUp from "./CountUp";

const EASE = [0.16, 1, 0.3, 1];

// Entrance timeline, in seconds.
const T = {
  eyebrow: 0.1,
  headline: 0.25,
  wordStagger: 0.07,
  lead: 0.8,
  leadStagger: 0.012,
  ctas: 0.85,
  stats: 0.9,
};

// Masked "rise" reveal: the content slides up from below an invisible
// baseline. The padding/negative margin keeps descenders and the italic
// overhang from being clipped by the mask.
function Rise({ children, delay = 0, duration = 0.9, className = "", skip }) {
  return (
    <span className={`inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] pr-[0.08em] -mr-[0.08em] align-bottom ${className}`}>
      <motion.span
        className="inline-block"
        initial={skip ? false : { y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const fadeUp = (delay, skip) => ({
  initial: skip ? false : { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

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
  const headlineWords = headline.split(" ");
  const emphasisIndex = headlineWords.length - 1;
  const leadWords = lead.split(" ");
  const skip = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden pt-20">
      {/* Faint architectural grid, faded out towards the edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-hairline)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-hairline)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_45%,black_20%,transparent_75%)] opacity-70"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-16 text-center sm:px-8 lg:px-10">
        <Rise delay={T.eyebrow} skip={skip}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-paper/80 whitespace-nowrap px-4 py-2 text-eyebrow leading-none font-medium uppercase text-stone backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {eyebrow}
          </span>
        </Rise>

        <h1 className="mt-8 max-w-4xl text-balance text-display font-medium text-ink">
          {headlineWords.map((word, i) => (
            <span key={i}>
              <Rise delay={T.headline + i * T.wordStagger} skip={skip}>
                {i === emphasisIndex ? (
                  <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </Rise>
              {i < emphasisIndex && " "}
            </span>
          ))}
        </h1>

        <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-stone sm:text-[17px]">
          {leadWords.map((word, i) => (
            <span key={i}>
              <Rise delay={T.lead + i * T.leadStagger} duration={0.8} skip={skip}>
                {word}
              </Rise>
              {i < leadWords.length - 1 && " "}
            </span>
          ))}
        </p>

        <motion.div
          {...fadeUp(T.ctas, skip)}
          className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <Link
            to={primaryCta.to}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-paper transition-colors duration-300 hover:bg-ink-800 sm:w-auto"
          >
            {primaryCta.label}
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            to={secondaryCta.to}
            className="inline-flex w-full items-center justify-center rounded-full border border-hairline bg-paper px-7 py-3.5 text-[15px] font-medium text-ink transition-colors duration-300 hover:border-ink/25 sm:w-auto"
          >
            {secondaryCta.label}
          </Link>
        </motion.div>

        {stats.length > 0 && (
          <motion.dl
            {...fadeUp(T.stats, skip)}
            className="mt-16 grid w-full max-w-2xl grid-cols-3 divide-x divide-hairline border-t border-hairline pt-8"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 px-2">
                <dt className="order-2 text-xs text-stone sm:text-sm">{stat.label}</dt>
                <dd className="order-1 text-h3 font-medium tracking-tight text-ink">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    startAfter={T.stats + i * 0.08}
                  />
                </dd>
              </div>
            ))}
          </motion.dl>
        )}
      </div>
    </section>
  );
}

export default Hero;
