import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

function Hero({
  eyebrow = "Certified Home Inspections",
  headline = "Know the home before you make it yours.",
  lead = "We check the structure, electrical, plumbing and roofing before you sign anything, and send you a detailed report within 24 hours.",
  primaryCta = { label: "Book an Inspection", to: "/contact" },
  secondaryCta = { label: "View Our Services", to: "/services" },
  stats = [],
}) {
  // The last word of the headline is set in the serif italic as the one
  // expressive accent in an otherwise all-sans hero.
  const headlineWords = headline.split(" ");
  const emphasisWord = headlineWords.pop();
  const headlineLead = headlineWords.join(" ");

  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden pt-20">
      {/* Faint architectural grid, faded out towards the edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-hairline)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-hairline)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_45%,black_20%,transparent_75%)] opacity-70"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.08 }}
        className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-16 text-center sm:px-8 lg:px-10"
      >
        <motion.p
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-paper/80 whitespace-nowrap px-4 py-2 text-[10.5px] leading-none font-medium uppercase tracking-[0.12em] text-stone backdrop-blur sm:text-eyebrow sm:tracking-[0.16em]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {eyebrow}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-8 max-w-4xl text-balance text-display font-medium text-ink"
        >
          {headlineLead}{" "}
          <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">
            {emphasisWord}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-xl text-pretty sm:max-w-2xl text-lead text-stone"
        >
          {lead}
        </motion.p>

        <motion.div
          variants={fadeUp}
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
            variants={fadeUp}
            className="mt-16 grid w-full max-w-2xl grid-cols-3 divide-x divide-hairline border-t border-hairline pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 px-2">
                <dt className="order-2 text-xs text-stone sm:text-sm">{stat.label}</dt>
                <dd className="order-1 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                  {stat.value.toLocaleString("en-US")}
                  {stat.suffix}
                </dd>
              </div>
            ))}
          </motion.dl>
        )}
      </motion.div>
    </section>
  );
}

export default Hero;
