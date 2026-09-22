import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Check,
  AlertTriangle,
  ShieldCheck,
  Star,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionEyebrow from "../components/SectionEyebrow";
import Button from "../components/Button";
import FaqItem from "../components/FaqItem";
import Hero from "../components/Hero";
import StatBlock from "../components/StatBlock";
import aboutImage from "../assets/hero.png";
import inspectorImage from "../assets/hero.png";
import logoMark from "../assets/favicon.svg";
import {
  hero,
  trustBadges,
  inspectorCredentials,
  serviceAreas,
  serviceAreaIntro,
  aboutBlocks,
  highlights,
  stats,
  reportItems,
  services,
  steps,
  featuredTestimonial,
  testimonials,
  faqs,
} from "../content/home";

function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div>
      <Hero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        lead={hero.lead}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        stats={[stats[0], stats[1], stats[3]]}
      />

      {/* Stats */}
      {/* <section className="border-y border-hairline">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-hairline px-4 sm:grid-cols-4 sm:divide-x sm:divide-y-0 sm:px-6">
          {stats.map((stat, i) => (
            <StatBlock
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={i}
            />
          ))}
        </div>
      </section> */}

      {/* Trust Badges */}
      <section className="mx-auto max-w-7xl px-5 pt-4 sm:px-8 sm:pt-8 lg:px-10">
        <ul className="grid grid-cols-1 gap-px overflow-hidden border-y border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge, i) => (
            <Reveal
              as="li"
              key={badge.label}
              index={i}
              className="flex gap-4 bg-paper py-7 sm:flex-col sm:gap-5 sm:px-7 sm:py-9 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline">
                <badge.icon
                  size={18}
                  strokeWidth={1.75}
                  className="text-ink"
                  aria-hidden="true"
                />
              </span>

              <span className="flex flex-col gap-1.5 pt-2 sm:pt-0">
                <span className="text-[15px] font-medium tracking-tight text-ink">
                  {badge.label}
                </span>
                <span className="text-sm leading-relaxed text-stone">
                  {badge.description}
                </span>
              </span>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* About Us */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <Reveal className="max-w-2xl lg:order-2 lg:col-span-5 lg:col-start-8 lg:max-w-none">
            <SectionEyebrow>
              <span className="h-px w-6 bg-stone/60" aria-hidden="true" />
              About us
            </SectionEyebrow>

            <h2 className="mt-5 text-balance text-h2 text-ink">
              A clearer look at your home. A more confident{" "}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                decision.
              </span>
            </h2>

            <p className="mt-6 text-pretty text-lead text-stone">
              Every inspection is carried out in person by a licensed
              professional who walks the entire property, roof to foundation,
              and documents what they find with photos, not guesswork. You get a
              report that holds up, whether you're negotiating a purchase or
              getting ready to sell.
            </p>

            <ul className="mt-8 border-t border-hairline">
              {highlights.map((line) => (
                <li
                  key={line}
                  className="flex items-center gap-3.5 border-b border-hairline py-4 text-[15px] text-ink"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-light/60">
                    <Check
                      size={13}
                      strokeWidth={2.5}
                      className="text-accent"
                      aria-hidden="true"
                    />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <Button
              to="/services"
              variant="secondary"
              icon={ArrowRight}
              className="mt-9 w-full sm:w-fit"
            >
              View Our Services
            </Button>
          </Reveal>

          <Reveal
            index={1}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface sm:aspect-[4/3] lg:order-1 lg:col-span-6 lg:aspect-[4/5]"
          >
            <img
              src={aboutImage}
              alt="A certified inspector kneeling to examine the flooring in an empty room during a home inspection."
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-[62%_40%] saturate-[0.8] contrast-[1.03]"
            />
          </Reveal>
        </div>
      </section>

      {/* Meet Your Inspector */}
      {/* <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] border border-ink/10 md:order-2">
            <img
              src={inspectorImage}
              alt="A certified inspector kneeling to examine the flooring in an empty room during a home inspection."
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-[65%_30%] saturate-[0.85] contrast-[1.05]"
            />
          </Reveal>

          <Reveal index={1} className="md:order-1">
            <SectionEyebrow>Meet Your Inspector</SectionEyebrow>

            <h2 className="mt-3 text-3xl text-ink sm:text-4xl md:text-5xl">
              The person who shows up at your door.
            </h2>

            <p className="mt-6 text-ink/70">
              Arjun Rao leads every AKSHARA Elite inspection personally. He
              walks the full property with you if you're available, explains
              what he's checking as he goes, and answers questions on the spot —
              no jargon, no rushing.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-ink/70">
              {inspectorCredentials.map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <Check
                    size={16}
                    strokeWidth={3}
                    className="mt-0.5 shrink-0 text-verified"
                    aria-hidden="true"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section> */}

      {/* Sample Report */}
      <section className="border-y border-hairline bg-surface py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-10">
          <Reveal className="max-w-2xl lg:col-span-5 lg:max-w-none">
            <SectionEyebrow>
              <span className="h-px w-6 bg-stone/60" aria-hidden="true" />
              The deliverable
            </SectionEyebrow>

            <h2 className="mt-5 text-balance text-h2 text-ink">
              See exactly what you'll{" "}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                receive.
              </span>
            </h2>

            <p className="mt-6 text-pretty text-lead text-stone">
              Every inspection ends with a clear, photo-backed digital report,
              not a checklist full of jargon. Each system is marked as good to
              go or flagged for follow-up, with photos and plain-language notes
              so you know exactly what it means.
            </p>

            <Button
              to="/contact"
              variant="secondary"
              icon={ArrowRight}
              className="mt-9 w-full sm:w-fit"
            >
              Ask About Sample Reports
            </Button>
          </Reveal>

          {/* Mock report, with a second sheet peeking out behind it */}
          <Reveal index={1} className="relative pr-2.5 pb-2.5 sm:pr-4 sm:pb-4 lg:col-span-6 lg:col-start-7">
            <div
              aria-hidden="true"
              className="absolute top-2.5 right-0 bottom-0 left-2.5 rounded-2xl border border-hairline bg-paper sm:top-4 sm:left-4"
            />

            <div className="relative rounded-2xl border border-hairline bg-paper p-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)] sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2.5">
                  <img src={logoMark} alt="" className="h-5 w-5" />
                  <span className="text-[15px] font-medium tracking-tight text-ink">
                    Inspection Report
                  </span>
                </span>
                <span className="rounded-full border border-hairline px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-stone">
                  Sample
                </span>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-hairline py-5 text-sm">
                <div>
                  <dt className="text-xs text-stone">Property</dt>
                  <dd className="mt-1 font-medium text-ink">Sample home, Hyderabad</dd>
                </div>
                <div>
                  <dt className="text-xs text-stone">Delivered</dt>
                  <dd className="mt-1 font-medium text-ink">Within 24 hours</dd>
                </div>
              </dl>

              <div className="mt-5">
                <p className="flex items-baseline justify-between gap-4 text-sm">
                  <span className="font-medium text-ink">Summary</span>
                  <span className="text-stone">
                    {reportItems.filter((item) => item.status === "ok").length} of{" "}
                    {reportItems.length}
                    <span className="hidden sm:inline"> systems in good condition</span>
                    <span className="sm:hidden"> good</span>
                  </span>
                </p>
                <div className="mt-3 flex gap-1" aria-hidden="true">
                  {reportItems.map((item) => (
                    <span
                      key={item.label}
                      className={`h-1.5 flex-1 rounded-full ${
                        item.status === "ok" ? "bg-accent" : "bg-caution"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <ul className="mt-6 divide-y divide-hairline">
                {reportItems.map((item) => (
                  <li key={item.label} className="py-3.5">
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-ink">{item.label}</span>
                      {item.status === "ok" ? (
                        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent-light/60 px-2.5 py-1 text-xs font-medium text-accent">
                          <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                          Good
                        </span>
                      ) : (
                        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-caution-light px-2.5 py-1 text-xs font-medium text-caution">
                          <AlertTriangle size={12} strokeWidth={2.5} aria-hidden="true" />
                          Follow up
                        </span>
                      )}
                    </div>

                    {item.note && (
                      <p className="mt-3 rounded-lg bg-caution-light/60 px-3.5 py-3 text-[13px] leading-relaxed text-ink/80">
                        {item.note}
                      </p>
                    )}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs text-stone">
                Sample report, for illustration only.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <Reveal className="lg:col-span-6">
            <SectionEyebrow>
              <span className="h-px w-6 bg-stone/60" aria-hidden="true" />
              Our process
            </SectionEyebrow>

            <h2 className="mt-5 text-balance text-h2 text-ink">
              Four steps from booking to{" "}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                clarity.
              </span>
            </h2>
          </Reveal>

          <Reveal index={1} className="max-w-xl lg:col-span-5 lg:col-start-8">
            <p className="text-pretty text-lead text-stone">
              A simple process built around clear communication, so you always
              know exactly what's happening and what it means for your home.
            </p>
          </Reveal>
        </div>

        {/* Timeline: vertical on phones; horizontal rows (2x2, then 1x4) from sm.
            Each step draws its own line across the gap; overflow-hidden trims
            the end of each row. */}
        <ol className="relative mt-14 grid gap-10 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-hairline sm:mt-16 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 sm:overflow-hidden sm:before:hidden lg:grid-cols-4">
          {steps.map((item, i) => (
            <Reveal
              as="li"
              key={item.step}
              index={i}
              className="relative pl-10 sm:pt-12 sm:pl-0 sm:before:absolute sm:before:top-[7px] sm:before:left-0 sm:before:h-px sm:before:w-[calc(100%+2rem)] sm:before:bg-hairline"
            >
              <span
                aria-hidden="true"
                className="absolute top-1 left-0 z-10 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-ink/25 bg-paper sm:top-0"
              >
                <span className="h-[5px] w-[5px] rounded-full bg-ink" />
              </span>

              <p className="text-sm tabular-nums text-stone">Step {item.step}</p>

              <h3 className="mt-3 text-h3 text-ink">{item.title}</h3>

              <p className="mt-2.5 max-w-sm text-[15px] leading-relaxed text-stone">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Popular Services */}
      <section className="border-y border-hairline bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <Reveal className="max-w-2xl">
              <SectionEyebrow>
                <span className="h-px w-6 bg-stone/60" aria-hidden="true" />
                Popular services
              </SectionEyebrow>

              <h2 className="mt-5 text-balance text-h2 text-ink">
                Services tailored to every{" "}
                <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                  home.
                </span>
              </h2>
            </Reveal>

            <div className="hidden shrink-0 md:block">
              <Button to="/services" variant="secondary" icon={ArrowRight}>
                View all services
              </Button>
            </div>
          </div>

          <ul className="mt-12 grid gap-4 sm:mt-14 lg:grid-cols-3 lg:gap-5">
            {services.map((service, i) => (
              <Reveal as="li" key={service.title} index={i}>
                <Link
                  to="/services"
                  className="group flex h-full flex-col rounded-2xl border border-hairline bg-paper p-6 transition-colors duration-300 hover:border-ink/20 sm:p-8 md:grid md:grid-cols-[auto_1fr_auto] md:items-start md:gap-8 lg:flex lg:min-h-[21rem] lg:items-stretch lg:gap-0"
                >
                  <div className="flex items-start justify-between md:contents lg:flex">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline">
                      <service.icon
                        size={19}
                        strokeWidth={1.75}
                        className="text-ink"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink transition-colors md:order-3 lg:order-none duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                      <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                  </div>

                  <div className="mt-10 md:order-2 md:mt-0 lg:order-none lg:mt-auto">
                    <p className="text-sm tabular-nums text-stone">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-h3 text-ink">{service.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-stone">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>

          <Button
            to="/services"
            variant="secondary"
            icon={ArrowRight}
            className="mt-8 w-full md:hidden"
          >
            View all services
          </Button>
        </div>
      </section>

      {/* Service Area */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-6">
            <SectionEyebrow>
              <span className="h-px w-6 bg-stone/60" aria-hidden="true" />
              Service area
            </SectionEyebrow>

            <h2 className="mt-5 text-balance text-h2 text-ink">
              Wherever you are in{" "}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                Hyderabad,
              </span>{" "}
              we've got you covered.
            </h2>
          </Reveal>

          <Reveal index={1} className="max-w-xl lg:col-span-5 lg:col-start-8 lg:pt-10">
            <p className="text-pretty text-lead text-stone">{serviceAreaIntro}</p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-paper px-3.5 py-2 text-sm text-ink"
                >
                  <MapPin size={13} strokeWidth={1.75} className="text-stone" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-stone">
              Don't see your area?{" "}
              <Link
                to="/contact"
                className="font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
              >
                Ask us about availability
              </Link>
              .
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-10 sm:mt-20 md:grid-cols-2">
          {aboutBlocks.map((block, i) => (
            <Reveal key={block.title} index={i % 2} className="border-t border-hairline pt-6">
              <h3 className="text-h3 text-ink">{block.title}</h3>
              <p className="mt-3 text-pretty text-[15px] leading-relaxed text-stone">
                {block.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="bg-ink py-20 text-paper sm:py-32">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8 lg:px-10">
          <SectionEyebrow tone="dark" className="text-paper/55">
            <span className="h-px w-6 bg-paper/30" aria-hidden="true" />
            Success story
            <span className="h-px w-6 bg-paper/30" aria-hidden="true" />
          </SectionEyebrow>

          <span
            aria-hidden="true"
            className="mt-10 h-10 font-serif text-7xl leading-none text-paper/25 sm:text-8xl"
          >
            &ldquo;
          </span>

          <figure className="mt-4">
            <blockquote className="text-balance font-serif text-[clamp(1.875rem,1.25rem+2.6vw,3.25rem)] leading-[1.15] tracking-[-0.01em] text-paper">
              {featuredTestimonial.quote}
            </blockquote>

            <figcaption className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-sm font-medium text-paper">
                {featuredTestimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>

              <span className="flex flex-col items-center gap-1 sm:items-start">
                <span className="text-[15px] font-medium text-paper">
                  {featuredTestimonial.name}
                  <span className="font-normal text-paper/50"> · {featuredTestimonial.role}</span>
                </span>
                <span className="flex gap-0.5 text-paper/80" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                  ))}
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <Reveal>
          <SectionEyebrow>
            <span className="h-px w-6 bg-stone/60" aria-hidden="true" />
            Client stories
          </SectionEyebrow>

          <h2 className="mt-5 text-balance text-h2 text-ink">
            What our clients{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
              say.
            </span>
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:mt-14 lg:grid-cols-3 lg:gap-5">
          {testimonials.map((testimonial, i) => {
            const [name, role] = testimonial.author.split(", ");
            const initials = name
              .split(" ")
              .map((part) => part[0])
              .join("");

            return (
              <Reveal as="li" key={testimonial.author} index={i}>
                <figure className="flex h-full flex-col rounded-2xl border border-hairline bg-paper p-6 sm:p-8">
                  <span className="flex gap-0.5 text-ink" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} size={14} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                    ))}
                  </span>

                  <blockquote className="mt-5 flex-1 text-pretty text-[17px] leading-relaxed text-ink">
                    {testimonial.quote}
                  </blockquote>

                  <figcaption className="mt-8 flex items-center gap-3 border-t border-hairline pt-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-xs font-medium text-ink">
                      {initials}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-medium text-ink">{name}</span>
                      {role && <span className="text-sm text-stone">{role}</span>}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* FAQ */}
      <section className="border-y border-hairline bg-surface py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10">
          <Reveal className="lg:col-span-4">
            <SectionEyebrow>
              <span className="h-px w-6 bg-stone/60" aria-hidden="true" />
              FAQ
            </SectionEyebrow>

            <h2 className="mt-5 text-balance text-h2 text-ink">
              Got questions? We've got{" "}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                answers.
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-stone">
              Still have a question?{" "}
              <Link
                to="/contact"
                className="font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
              >
                Talk to an inspector
              </Link>
              .
            </p>
          </Reveal>

          <Reveal index={1} className="border-t border-hairline lg:col-span-7 lg:col-start-6">
            {faqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                open={openFaq === faq.question}
                onToggle={() =>
                  setOpenFaq((prev) =>
                    prev === faq.question ? null : faq.question
                  )
                }
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA + promise */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <Reveal className="relative isolate overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center text-paper sm:px-12 sm:py-24">
          {/* Same faint grid as the hero, in reverse */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(250_250_248/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(250_250_248/0.07)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_45%,black_20%,transparent_75%)]"
          />

          <SectionEyebrow tone="dark" className="justify-center text-paper/55">
            <span className="h-px w-6 bg-paper/30" aria-hidden="true" />
            Ready when you are
            <span className="h-px w-6 bg-paper/30" aria-hidden="true" />
          </SectionEyebrow>

          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-h1 text-paper">
            Ready to book your{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-accent-light">
              inspection?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lead text-paper/65">
            Reach out today and we'll get you scheduled with one of our
            certified inspectors.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/contact" variant="invert" icon={ArrowRight} className="w-full sm:w-auto">
              Book an Inspection
            </Button>
            <Button to="/prices" variant="outline" className="w-full sm:w-auto">
              View Pricing
            </Button>
          </div>

          <p className="mx-auto mt-12 flex max-w-xl items-start justify-center gap-3 border-t border-paper/10 pt-8 text-left text-sm leading-relaxed text-paper/60 sm:items-center">
            <ShieldCheck
              size={18}
              strokeWidth={1.75}
              className="mt-0.5 shrink-0 text-paper/80 sm:mt-0"
              aria-hidden="true"
            />
            <span>
              <span className="font-medium text-paper">Our promise:</span> if
              anything in your report isn't clear, we'll walk through the
              findings with you again, at no extra charge.
            </span>
          </p>
        </Reveal>
      </section>
    </div>
  );
}

export default Home;
