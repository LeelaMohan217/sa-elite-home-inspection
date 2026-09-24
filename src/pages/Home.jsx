import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  AlertTriangle,
  CircleAlert,
  Paintbrush,
  ShieldCheck,
  Star,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { RevealGroup, RiseUp, RiseImage } from "../components/ScrollReveal";
import SectionEyebrow from "../components/SectionEyebrow";
import Button from "../components/Button";
import FaqItem from "../components/FaqItem";
import Hero from "../components/Hero";
import AreaCarousel from "../components/AreaCarousel";
import StatBlock from "../components/StatBlock";
import aboutImage from "../assets/hero.png";
import inspectorImage from "../assets/hero.png";
import logoMark from "../assets/Logo-mark.svg";
import {
  hero,
  trustBadges,
  inspectorCredentials,
  serviceAreas,
  serviceAreaIntro,
  highlights,
  stats,
  reportItems,
  services,
  steps,
  featuredTestimonial,
  testimonials,
  faqs,
} from "../content/home";

// Sample report statuses. Severity levels follow the guide in AKSHARA
// reports: major (function, safety or durability), minor (workmanship or
// fitment) and cosmetic (finish only).
const REPORT_STATUS = {
  ok: { label: "Good", icon: Check, pill: "bg-accent-light/60 text-accent", bar: "bg-accent" },
  major: { label: "Major", icon: AlertTriangle, pill: "bg-caution text-paper", bar: "bg-caution" },
  minor: { label: "Minor", icon: CircleAlert, pill: "bg-caution-light text-caution", bar: "bg-caution/45" },
  cosmetic: { label: "Cosmetic", icon: Paintbrush, pill: "bg-surface text-stone", bar: "bg-stone/35" },
};
const SEVERITIES = ["major", "minor", "cosmetic"];

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
        stats={stats}
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

      {/* Trust Badges (hidden for now) */}
      {/*<section className="mx-auto max-w-7xl px-5 pt-2 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <p className="text-sm text-stone">Why homeowners trust us</p>

          <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {trustBadges.map((badge) => (
              <li
                key={badge.label}
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-paper px-4 py-2.5 text-sm font-medium text-ink sm:px-5"
              >
                <badge.icon
                  size={16}
                  strokeWidth={1.75}
                  className="shrink-0 text-accent"
                  aria-hidden="true"
                />
                {badge.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </section> */}

      {/* About Us */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          {/* Label, heading, paragraph, checklist rows and button rise in turn */}
          <RevealGroup className="max-w-2xl lg:order-2 lg:col-span-6 lg:col-start-7 lg:max-w-none lg:pl-6">
            <RiseUp delay={0}>
              <SectionEyebrow>About us</SectionEyebrow>
            </RiseUp>

            <RiseUp as="h2" delay={0.2} className="mt-5 text-balance text-h2 text-ink">
              A clearer look at your home. A more confident{" "}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                decision.
              </span>
            </RiseUp>

            <RiseUp as="p" delay={0.4} className="mt-6 text-pretty text-base leading-relaxed text-stone sm:text-[17px]">
              Every inspection is carried out in person by a licensed
              professional who walks the entire property, roof to foundation,
              and documents what they find with photos, not guesswork. You get a
              report that holds up, whether you're negotiating a purchase or
              getting ready to sell.
            </RiseUp>

            <ul className="mt-8 border-t border-hairline">
              {highlights.map((line, i) => (
                <RiseUp
                  as="li"
                  key={line}
                  delay={0.6 + i * 0.15}
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
                </RiseUp>
              ))}
            </ul>

            <RiseUp delay={0.6 + highlights.length * 0.15} className="mt-9">
              <Button
                to="/services"
                variant="secondary"
                icon={ArrowRight}
                className="w-full sm:w-fit"
              >
                View Our Services
              </Button>
            </RiseUp>
          </RevealGroup>

          <RiseImage
            className="relative aspect-[4/5] w-full rounded-2xl sm:aspect-[4/3] lg:order-1 lg:col-span-6 lg:aspect-auto lg:h-full"
            src={aboutImage}
            alt="A certified inspector kneeling to examine the flooring in an empty room during a home inspection."
            loading="lazy"
            decoding="async"
            imgClassName="object-[62%_40%] saturate-[0.8] contrast-[1.03]"
          />
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
                    className="mt-0.5 shrink-0 text-accent"
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
          <RevealGroup className="max-w-2xl lg:col-span-6 lg:max-w-none lg:pr-6">
            <RiseUp delay={0}>
              <SectionEyebrow>The deliverable</SectionEyebrow>
            </RiseUp>

            <RiseUp as="h2" delay={0.2} className="mt-5 text-balance text-h2 text-ink">
              See exactly what you'll{" "}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                receive.
              </span>
            </RiseUp>

            <RiseUp as="p" delay={0.4} className="mt-6 text-pretty text-base leading-relaxed text-stone sm:text-[17px]">
              Every inspection ends with a clear, photo-backed digital report,
              not a checklist full of jargon. Each finding is graded as major,
              minor or cosmetic, with photos and plain-language notes so you
              know exactly what it means.
            </RiseUp>

            <RiseUp delay={0.6} className="mt-9">
              <Button
                to="/contact"
                variant="secondary"
                icon={ArrowRight}
                className="w-full sm:w-fit"
              >
                Ask About Sample Reports
              </Button>
            </RiseUp>
          </RevealGroup>

          {/* Mock report, with a second sheet peeking out behind it. The card
              rises in, then its rows follow one by one. */}
          <RevealGroup className="lg:col-span-6 lg:col-start-7">
            <RiseUp delay={0.2} className="relative pr-2.5 pb-2.5 sm:pr-4 sm:pb-4">
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
                  <span className="rounded-full border border-hairline px-2.5 py-1 text-xs font-medium uppercase tracking-[0.12em] text-stone">
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
                    <dd className="mt-1 font-medium text-ink">Within 48 hours</dd>
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
                        className={`h-1.5 flex-1 rounded-full ${REPORT_STATUS[item.status].bar}`}
                      />
                    ))}
                  </div>
                  <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone">
                    {SEVERITIES.map((severity) => (
                      <span key={severity} className="inline-flex items-center gap-1.5">
                        <span
                          className={`h-2 w-2 rounded-full ${REPORT_STATUS[severity].bar}`}
                          aria-hidden="true"
                        />
                        {reportItems.filter((item) => item.status === severity).length}{" "}
                        {REPORT_STATUS[severity].label}
                      </span>
                    ))}
                  </p>
                </div>

                <ul className="mt-6 divide-y divide-hairline">
                  {reportItems.map((item, i) => {
                    const status = REPORT_STATUS[item.status];
                    return (
                      <RiseUp as="li" key={item.label} delay={0.5 + i * 0.12} className="py-3.5">
                        <div className="flex items-center justify-between gap-4 text-sm">
                          <span className="text-ink">{item.label}</span>
                          <span
                            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${status.pill}`}
                          >
                            <status.icon size={12} strokeWidth={2.5} aria-hidden="true" />
                            {status.label}
                          </span>
                        </div>

                        {item.note && (
                          <p className="mt-3 rounded-lg bg-caution-light/60 px-3.5 py-3 text-sm leading-relaxed text-ink">
                            {item.note}
                          </p>
                        )}
                      </RiseUp>
                    );
                  })}
                </ul>

                <p className="mt-4 text-xs text-stone">
                  Sample report, for illustration only.
                </p>
              </div>
            </RiseUp>
          </RevealGroup>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <RevealGroup className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <RiseUp delay={0}>
            <SectionEyebrow className="justify-center">Our process</SectionEyebrow>
          </RiseUp>

          <RiseUp as="h2" delay={0.2} className="mt-5 text-balance text-h2 text-ink">
            Four steps from booking to{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
              clarity.
            </span>
          </RiseUp>

          <RiseUp as="p" delay={0.4} className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-stone sm:text-[17px]">
            A simple process built around clear communication, so you always
            know exactly what's happening and what it means for your home.
          </RiseUp>
        </RevealGroup>

        {/* Light step cards: surface fill, hairline border, faint corner grid */}
        <RevealGroup as="ol" className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((item, i) => (
            <RiseUp
              as="li"
              key={item.step}
              delay={0.15 + i * 0.15}
              className="relative isolate flex min-h-[15rem] flex-col overflow-hidden rounded-2xl border border-hairline bg-surface p-7 text-ink sm:min-h-[17rem] sm:p-8 lg:min-h-[19rem]"
            >
              {/* Faint grid, echoing the hero */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-hairline)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-hairline)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_90%_70%_at_100%_0%,black_10%,transparent_70%)]"
              />

              <div className="flex items-center justify-between">
                <span className="text-eyebrow font-medium uppercase text-stone">
                  Step {item.step}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-paper">
                  <item.icon size={18} strokeWidth={1.75} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-auto pt-10">
                {/* On desktop, reserve two title lines and three description
                    lines so titles share a baseline and descriptions start level */}
                <h3 className="text-[1.375rem] leading-snug font-medium tracking-tight lg:flex lg:min-h-[2lh] lg:items-end">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-stone lg:min-h-[3lh]">
                  {item.description}
                </p>
              </div>
            </RiseUp>
          ))}
        </RevealGroup>
      </section>

      {/* Popular Services */}
      <section className="border-y border-hairline bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Label, heading and button rise in turn, then each card */}
          <RevealGroup className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <RiseUp delay={0}>
                <SectionEyebrow>Popular services</SectionEyebrow>
              </RiseUp>

              <RiseUp as="h2" delay={0.2} className="mt-5 text-balance text-h2 text-ink">
                Services tailored to every{" "}
                <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                  home.
                </span>
              </RiseUp>
            </div>

            <RiseUp delay={0.4} className="hidden shrink-0 md:block">
              <Button to="/services" variant="secondary" icon={ArrowRight}>
                View all services
              </Button>
            </RiseUp>
          </RevealGroup>

          <RevealGroup as="ul" className="mt-12 grid gap-4 sm:mt-14 lg:grid-cols-3 lg:gap-5">
            {services.map((service, i) => (
              <RiseUp as="li" key={service.title} delay={0.15 + i * 0.15}>
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
              </RiseUp>
            ))}
          </RevealGroup>

          <RevealGroup className="mt-8 md:hidden">
            <RiseUp delay={0}>
              <Button to="/services" variant="secondary" icon={ArrowRight} className="w-full">
                View all services
              </Button>
            </RiseUp>
          </RevealGroup>
        </div>
      </section>

      {/* Service Area */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <RevealGroup className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <RiseUp delay={0}>
            <SectionEyebrow className="justify-center">Service area</SectionEyebrow>
          </RiseUp>

          <RiseUp as="h2" delay={0.2} className="mt-5 text-balance text-h2 text-ink">
            Wherever you are in{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
              Hyderabad,
            </span>{" "}
            we've got you covered.
          </RiseUp>

          <RiseUp as="p" delay={0.4} className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-stone sm:text-[17px]">
            {serviceAreaIntro}
          </RiseUp>
        </RevealGroup>

        {/* Neighbourhoods as a carousel of square cards (arrow buttons slide
            it); the availability line follows */}
        <RevealGroup className="mt-12 sm:mt-14">
          <AreaCarousel areas={serviceAreas} />

          <RiseUp as="p" delay={0.6} className="mt-8 text-center text-sm text-stone">
            Don't see your area?{" "}
            <Link
              to="/contact"
              className="font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
            >
              Ask us about availability
            </Link>
            .
          </RiseUp>
        </RevealGroup>
      </section>

      {/* Featured Testimonial */}
      <section className="bg-ink py-20 text-paper sm:py-32">
        <RevealGroup className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8 lg:px-10">
          <RiseUp delay={0}>
            <SectionEyebrow tone="dark">Success story</SectionEyebrow>
          </RiseUp>

          <RiseUp
            as="span"
            delay={0.15}
            aria-hidden="true"
            className="mt-10 h-10 font-serif text-h1 leading-none text-paper/15"
          >
            &ldquo;
          </RiseUp>

          <figure className="mt-4">
            <RiseUp as="blockquote" delay={0.3} className="text-balance font-serif text-h2 leading-[1.15] tracking-[-0.01em] text-paper">
              {featuredTestimonial.quote}
            </RiseUp>

            <RiseUp as="figcaption" delay={0.5} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-sm font-medium text-paper">
                {featuredTestimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>

              <span className="flex flex-col items-center gap-1 sm:items-start">
                <span className="text-[15px] font-medium text-paper">
                  {featuredTestimonial.name}
                  <span className="font-normal text-paper/70"> · {featuredTestimonial.role}</span>
                </span>
                <span className="flex gap-0.5 text-paper/70" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                  ))}
                </span>
              </span>
            </RiseUp>
          </figure>
        </RevealGroup>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <RevealGroup>
          <RiseUp delay={0}>
            <SectionEyebrow>Client stories</SectionEyebrow>
          </RiseUp>

          <RiseUp as="h2" delay={0.2} className="mt-5 text-balance text-h2 text-ink">
            What our clients{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
              say.
            </span>
          </RiseUp>
        </RevealGroup>

        <RevealGroup as="ul" className="mt-12 grid gap-4 sm:mt-14 lg:grid-cols-3 lg:gap-5">
          {testimonials.map((testimonial, i) => {
            const [name, role] = testimonial.author.split(", ");
            const initials = name
              .split(" ")
              .map((part) => part[0])
              .join("");

            return (
              <RiseUp as="li" key={testimonial.author} delay={0.15 + i * 0.15}>
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
              </RiseUp>
            );
          })}
        </RevealGroup>
      </section>

      {/* FAQ */}
      <section className="border-y border-hairline bg-surface py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10">
          <RevealGroup className="lg:col-span-4">
            <RiseUp delay={0}>
              <SectionEyebrow>FAQ</SectionEyebrow>
            </RiseUp>

            <RiseUp as="h2" delay={0.2} className="mt-5 text-balance text-h2 text-ink">
              Got questions? We've got{" "}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                answers.
              </span>
            </RiseUp>

            <RiseUp as="p" delay={0.4} className="mt-6 max-w-sm text-[15px] leading-relaxed text-stone">
              Still have a question?{" "}
              <Link
                to="/contact"
                className="font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
              >
                Talk to an inspector
              </Link>
              .
            </RiseUp>
          </RevealGroup>

          <RevealGroup className="border-t border-hairline lg:col-span-7 lg:col-start-6">
            {faqs.map((faq, i) => (
              <RiseUp key={faq.question} delay={0.15 + i * 0.1}>
                <FaqItem
                  question={faq.question}
                  answer={faq.answer}
                  open={openFaq === faq.question}
                  onToggle={() =>
                    setOpenFaq((prev) =>
                      prev === faq.question ? null : faq.question
                    )
                  }
                />
              </RiseUp>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA + promise */}
      {/* The panel rises in, then its contents follow in turn */}
      <RevealGroup as="section" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <RiseUp delay={0} className="relative isolate overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center text-paper sm:px-12 sm:py-24">
          {/* Same faint grid as the hero, in reverse */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(250_250_248/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(250_250_248/0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_45%,black_20%,transparent_75%)]"
          />

          <RiseUp delay={0.25}>
            <SectionEyebrow tone="dark" className="justify-center">Ready when you are</SectionEyebrow>
          </RiseUp>

          <RiseUp as="h2" delay={0.4} className="mx-auto mt-6 max-w-3xl text-balance text-h1 text-paper">
            Ready to book your{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-accent-light">
              inspection?
            </span>
          </RiseUp>

          <RiseUp as="p" delay={0.55} className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-paper/70 sm:text-[17px]">
            Reach out today and we'll get you scheduled with one of our
            certified inspectors.
          </RiseUp>

          <RiseUp delay={0.7} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/contact" variant="invert" icon={ArrowRight} className="w-full sm:w-auto">
              Book an Inspection
            </Button>
            <Button to="/prices" variant="outline" className="w-full sm:w-auto">
              View Pricing
            </Button>
          </RiseUp>

          <RiseUp as="p" delay={0.85} className="mx-auto mt-12 flex max-w-xl items-start justify-center gap-3 border-t border-paper/15 pt-8 text-left text-sm leading-relaxed text-paper/70 sm:items-center">
            <ShieldCheck
              size={18}
              strokeWidth={1.75}
              className="mt-0.5 shrink-0 text-paper/70 sm:mt-0"
              aria-hidden="true"
            />
            <span>
              <span className="font-medium text-paper">Our promise:</span> if
              anything in your report isn't clear, we'll walk through the
              findings with you again, at no extra charge.
            </span>
          </RiseUp>
        </RiseUp>
      </RevealGroup>
    </div>
  );
}

export default Home;
