import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import heroImage from "../assets/hero.png";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Home hero.
 *
 * Two-column layout — copy on the left, an inspector-at-work photograph on
 * the right — held inside the same max-w-7xl / padding rhythm as the navbar
 * so both line up edge to edge. The photo keeps its own fixed, moderate
 * aspect ratio rather than stretching to match the text column. It keeps a
 * touch of color but is pulled slightly toward neutral (desaturated,
 * contrast lifted) and framed with the same hairline border and near-square
 * corner radius as the rest of the UI, so it reads as part of the same
 * system rather than a pasted-in stock photo. Stacks (text above image)
 * below `lg`. No section background — it sits directly on the page's white,
 * same as the rest of the site.
 *
 * Two quiet entrances only: the text block eases up once, the photograph fades
 * in. Both are dropped for `prefers-reduced-motion` by the app-level
 * <MotionConfig reducedMotion="user">.
 */
function Hero({
  headline = "Know the home before you make it yours.",
  lead = "We check the structure, electrical, plumbing and roofing before you sign anything, and send you a detailed report within 24 hours.",
  primaryCta = { label: "Book an Inspection", to: "/contact" },
  secondaryCta = { label: "View Our Services", to: "/services" },
  trust = [
    "Certified inspectors. Digital reports within 24 hours.",
    "Serving Hyderabad and surrounding areas.",
  ],
  image = {
    src: heroImage,
    alt: "A certified inspector kneeling to examine the flooring in an empty room during a home inspection.",
    width: 1536,
    height: 1024,
  },
}) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-10 lg:py-16">
        {/* LEFT — copy */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/45">
            Home Inspection Services
          </p>

          <h1 className="mt-4 text-[2.9rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-black text-pretty sm:text-[3.3rem] lg:text-[3.1rem] xl:text-[3.6rem]">
            {headline}
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-black/55 lg:text-[17px]">
            {lead}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to={primaryCta.to}
              className="inline-flex items-center justify-center rounded-[3px] bg-black px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-black/80"
            >
              {primaryCta.label}
            </Link>

            <Link
              to={secondaryCta.to}
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-black"
            >
              {secondaryCta.label}
              <ArrowRight
                size={16}
                strokeWidth={2.25}
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              />
            </Link>
          </div>

          {trust?.length > 0 && (
            <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
              {trust.map((line) => (
                <span
                  key={line}
                  className="flex items-center gap-2.5 text-[13px] leading-relaxed text-black/55"
                >
                  <Check
                    size={14}
                    strokeWidth={3}
                    className="shrink-0 text-black"
                  />
                  {line}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* RIGHT — photograph */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] border border-black/10"
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
      </div>
    </section>
  );
}

export default Hero;
