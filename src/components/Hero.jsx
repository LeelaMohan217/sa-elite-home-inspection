import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import AvatarCircles from "./AvatarCircles";
import heroImage from "../assets/hero.png";

const EASE = [0.16, 1, 0.3, 1];

function formatCompact(value) {
  if (value >= 1000) return `${(value / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return `${value}`;
}

function Hero({
  headline = "Know the home before you make it yours.",
  lead = "We check the structure, electrical, plumbing and roofing before you sign anything, and send you a detailed report within 24 hours.",
  primaryCta = { label: "Book an Inspection", to: "/contact" },
  secondaryCta = { label: "View Our Services", to: "/services" },
  stat = { value: 1200, suffix: "+", label: "Homes Inspected" },
  reviewers = ["MG", "DR", "PK"],
  image = {
    src: heroImage,
    alt: "A certified inspector kneeling to examine the flooring in an empty room during a home inspection.",
    width: 1536,
    height: 1024,
  },
}) {
  const headlineWords = headline.split(" ");
  const emphasisWord = headlineWords.pop();
  const headlineLead = headlineWords.join(" ");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="mx-auto grid w-full max-w-7xl gap-16 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-10 lg:py-16">
        {/* LEFT — copy */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/45">
            Home Inspection Services
          </p>

          <h1 className="mt-4 text-ink/90 text-4xl font-bold sm:text-5xl lg:text-6xl ">
            {headlineLead} {emphasisWord}
          </h1>

          <p className="mt-6 text-base leading-relaxed text-ink/55 lg:text-[17px]">
            {lead}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to={primaryCta.to}
              className="inline-flex items-center justify-center rounded-[3px] bg-blue-700 px-6 py-2.5 text-[15px] font-semibold text-paper transition-colors duration-500 ease-in-out hover:bg-blue-600"
            >
              {primaryCta.label}
            </Link>

            <Link
              to={secondaryCta.to}
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-blue-700"
            >
              {secondaryCta.label}
              <ArrowRight
                size={16}
                strokeWidth={2.25}
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT — photograph with floating cards */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] border border-ink/10"
          >
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-[68%_35%] saturate-[0.85] contrast-[1.05]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
            className="absolute -bottom-6 left-1/2 flex w-max -translate-x-1/2 items-center gap-3 rounded-2xl border border-ink/10 bg-paper px-4 py-3.5 shadow-elevate-hover"
          >
            <AvatarCircles avatars={reviewers} total={formatCompact(stat.value)} />

            <span className="h-8 w-px shrink-0 bg-hairline" aria-hidden="true" />

            <span>
              <span className="flex gap-0.5 text-accent-vivid">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <span className="mt-1 block text-xs text-ink/55">
                Trusted by {stat.value.toLocaleString("en-US")}
                {stat.suffix} homeowners
              </span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
