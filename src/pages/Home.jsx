import { useState } from "react";
import {
  ArrowRight,
  Check,
  AlertTriangle,
  FileText,
  ShieldCheck,
  Star,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionEyebrow from "../components/SectionEyebrow";
import Button from "../components/Button";
import FaqItem from "../components/FaqItem";
import Hero from "../components/Hero";
import InspectionCard from "../components/InspectionCard";
import StatBlock from "../components/StatBlock";
import Tag from "../components/Tag";
import aboutImage from "../assets/hero.png";
import inspectorImage from "../assets/hero.png";
import {
  hero,
  trustBadges,
  inspectorCredentials,
  serviceAreas,
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
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {trustBadges.map((badge, i) => (
            <Reveal
              key={badge.label}
              index={i}
              className="flex flex-col items-center gap-3 rounded-2xl border border-hairline bg-paper p-6 text-center shadow-elevate"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
                <badge.icon
                  size={20}
                  className="text-accent-vivid"
                  aria-hidden="true"
                />
              </span>
              <span className="text-sm font-semibold text-ink">
                {badge.label}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow className="justify-center">ABOUT US</SectionEyebrow>

          <h2 className="mt-3 text-3xl text-ink sm:text-4xl md:text-5xl">
            A Clearer Look at Your Home. A More Confident{" "}
            <em className="text-accent not-italic">Decision.</em>
          </h2>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start md:gap-14">
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] border border-ink/10">
            <img
              src={aboutImage}
              alt="A certified inspector kneeling to examine the flooring in an empty room during a home inspection."
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-[30%_40%] saturate-[0.85] contrast-[1.05]"
            />
          </Reveal>

          <Reveal index={1} className="flex h-full flex-col">
            <p className="text-ink/70">
              Every inspection is carried out in person by a licensed
              professional who walks the entire property, roof to foundation,
              and documents what they find with photos, not guesswork. You get a
              report that holds up, whether you're negotiating a purchase or
              getting ready to sell.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-ink/70">
              {highlights.map((line) => (
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

            <Button
              to="/services"
              variant="secondary"
              icon={ArrowRight}
              className="mt-8 w-fit md:mt-auto"
            >
              View Our Services
            </Button>
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
      <section className="border-t border-hairline bg-surface/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
            <Reveal>
              <SectionEyebrow>The Deliverable</SectionEyebrow>

              <h2 className="mt-3 text-3xl text-ink sm:text-4xl md:text-5xl">
                See exactly what you'll receive.
              </h2>

              <p className="mt-6 text-ink/70">
                Every inspection ends with a clear, photo-backed digital report,
                not a checklist full of jargon. Each system is marked as good to
                go or flagged for follow-up, with photos and plain-language
                notes so you know exactly what it means.
              </p>

              <Button
                to="/contact"
                variant="secondary"
                icon={ArrowRight}
                className="mt-8"
              >
                Ask About Sample Reports
              </Button>
            </Reveal>

            <Reveal
              index={1}
              className="overflow-hidden rounded-[3px] border border-ink/10 bg-paper shadow-elevate"
            >
              <div className="flex items-center gap-2.5 border-b border-hairline bg-surface/80 px-5 py-3.5">
                <FileText
                  size={16}
                  className="shrink-0 text-ink/50"
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold text-ink/60">
                  Inspection-Report.pdf
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-ink/40">
                  Sample Property, Hyderabad
                </p>
                <p className="mt-1 text-sm text-ink/60">
                  Sample report — for illustration only
                </p>

                <ul className="mt-6 divide-y divide-hairline">
                  {reportItems.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between gap-4 py-3 text-sm"
                    >
                      <span className="font-medium text-ink">{item.label}</span>
                      {item.status === "ok" ? (
                        <span className="flex items-center gap-1.5 text-verified">
                          <Check size={14} strokeWidth={3} aria-hidden="true" />
                          Good condition
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-ink/60">
                          <AlertTriangle size={14} aria-hidden="true" />
                          Flagged for follow-up
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <SectionEyebrow className="justify-center">Our Process</SectionEyebrow>

          <h2 className="mt-3 text-3xl text-ink sm:text-4xl md:text-5xl">
            A simple, four-step process built around clear communication, so
            you always know exactly what's happening and what it means for
            your home.
          </h2>
        </div>

        <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <Reveal
              key={item.step}
              index={i}
              className="relative rounded-2xl border border-hairline bg-paper p-6 shadow-elevate"
            >
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-sm font-extrabold text-paper">
                {item.step}
              </span>

              <h3 className="mt-5 font-bold text-ink">{item.title}</h3>

              <p className="mt-2 text-sm text-ink/70">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Popular Services */}
      <section className="border-t border-hairline bg-surface/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <SectionEyebrow>Popular Services</SectionEyebrow>

              <h2 className="mt-3 max-w-sm text-3xl text-ink sm:text-5xl">
                Services tailored to every home.
              </h2>
            </div>

            <Button to="/services" variant="ghost" icon={ArrowRight}>
              View all services
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {services.map((service, i) => (
              <InspectionCard key={service.title} index={i}>
                <service.icon
                  size={22}
                  className="text-accent-vivid"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-bold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm text-ink/70">
                  {service.description}
                </p>
              </InspectionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow className="justify-center">Service Area</SectionEyebrow>

          <h2 className="mt-3 text-3xl text-ink sm:text-4xl md:text-5xl">
            Wherever you are in Hyderabad, we've got you covered.
          </h2>
        </div>

        <div className="mt-6 space-y-4 text-ink/70">
          <p>
            AKSHARA Elite Home Inspection is a locally owned inspection
            company built on trust, training, and attention to detail. We
            were founded with a simple belief: that every homebuyer and
            seller in Hyderabad deserves an honest, detailed picture of a
            property's condition before any decision is made. Unlike
            inspectors who rush through a walkthrough with a generic
            checklist, our team takes the time to understand the specific
            construction style, age, and quirks of each property, so
            nothing gets overlooked. We've worked with first-time buyers
            navigating their very first purchase, seasoned investors
            comparing multiple properties, and sellers who want a clear
            record of a home's condition before it goes on the market.
          </p>

          <p>
            Our process is designed to be simple and transparent from start
            to finish. You can book online or by phone, and we'll confirm a
            time that works for you, usually within minutes. On the day of
            the inspection, a licensed professional walks the entire
            property in person — roof to foundation — documenting
            everything with photos rather than vague notes. Within 24
            hours, you'll receive a clear, easy-to-read digital report that
            explains exactly what was found and what it means for you. If
            anything in the report needs further explanation, you can call
            us directly and talk it through with the inspector who was
            actually on site, not a call center reading from a script.
          </p>

          <p>
            Every inspection covers the systems that matter most:
            structural integrity, electrical wiring and panels, plumbing,
            and safety features, along with a dedicated dampness and
            moisture check that's especially important during Hyderabad's
            monsoon season. Whether you're buying a compact 1BHK flat, a
            spacious villa, or evaluating a property mid-construction, we
            tailor the inspection checklist to match the property type so
            you're never paying for checks that don't apply to your home.
            For under-construction properties, we also offer multi-stage
            inspections timed to key milestones, so structural issues are
            caught while they're still easy and affordable to fix.
          </p>

          <p>
            Our inspectors are licensed, background-checked, and
            continually trained on the latest building codes and safety
            standards, so you can trust the findings in every report. We
            never upsell repairs or push you toward contractors we have a
            relationship with — our only job is to report exactly what we
            find, so you can negotiate, plan, or walk away with complete
            confidence in your decision. That independence is the whole
            point: a report is only useful if you can trust that it wasn't
            written to sell you something, and we take that seriously on
            every single job we take on, large or small.
          </p>

          <p>
            We inspect flats, villas, and independent houses across
            Hyderabad and the surrounding areas, working with homebuyers,
            sellers, real estate agents, and builders alike. Below are some
            of the neighborhoods we serve on a regular basis, but this list
            isn't exhaustive — if you don't see your area listed, reach out
            and we'll be happy to confirm availability and scheduling for
            your specific location. As we grow, we're continually adding
            coverage to nearby townships and gated communities as well, so
            it's always worth asking even if you're just outside the areas
            listed here.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {serviceAreas.map((area) => (
            <Tag key={area} tone="outline">
              {area}
            </Tag>
          ))}
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:px-10 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-14">
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px]">
            <img
              src={inspectorImage}
              alt="A certified inspector kneeling to examine the flooring in an empty room during a home inspection."
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-[65%_30%] saturate-[0.85] contrast-[1.05]"
            />
          </Reveal>

          <Reveal index={1}>
            <SectionEyebrow tone="dark">Success Story</SectionEyebrow>

            <div className="mt-5 flex gap-1 text-accent-vivid">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>

            <blockquote className="mt-5 text-2xl font-medium leading-snug text-paper text-pretty sm:text-3xl">
              "{featuredTestimonial.quote}"
            </blockquote>

            <p className="mt-6 text-sm font-semibold text-paper/70">
              {featuredTestimonial.name}{" "}
              <span className="font-normal text-paper/40">
                — {featuredTestimonial.role}
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <SectionEyebrow>Client Stories</SectionEyebrow>

        <h2 className="mt-3 text-3xl text-ink sm:text-5xl">
          What our clients say.
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal
              key={testimonial.author}
              index={i}
              className="relative border-hairline pl-6"
            >
              <span
                className="pointer-events-none absolute -left-2 -top-4 text-6xl font-black text-ink/10"
                aria-hidden="true"
              >
                "
              </span>

              <blockquote className="text-sm leading-relaxed text-ink/80">
                "{testimonial.quote}"
              </blockquote>

              <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.08em] text-ink/60">
                {testimonial.author}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-hairline bg-surface/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr]">
            <Reveal>
              <SectionEyebrow>FAQ</SectionEyebrow>

              <h2 className="mt-3 text-3xl text-ink sm:text-5xl">
                Got Questions? We've Got Answers.
              </h2>
            </Reveal>

            <Reveal
              index={1}
              className="divide-y divide-hairline rounded-2xl border border-hairline bg-paper"
            >
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
        </div>
      </section>

      {/* Guarantee */}
      <section className="border-t border-hairline">
        <Reveal className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 py-14 text-center sm:px-8 sm:flex-row sm:gap-5 sm:text-left lg:px-10">
          <ShieldCheck
            size={32}
            strokeWidth={1.5}
            className="shrink-0 text-accent-vivid"
            aria-hidden="true"
          />
          <p className="text-ink/70">
            <span className="font-bold text-ink">Our Promise:</span> if anything
            in your report isn't clear, we'll walk through the findings with you
            again — at no extra charge.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-accent-dark">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:px-10 md:grid-cols-2 md:items-center md:gap-14">
          <Reveal>
            <SectionEyebrow tone="dark">Ready When You Are</SectionEyebrow>

            <h2 className="mt-3 text-3xl text-paper sm:text-4xl">
              Ready to book your{" "}
              <em className="text-accent-light not-italic">inspection</em>?
            </h2>

            <p className="mt-4 max-w-xl text-paper/70">
              Reach out today and we'll get you scheduled with one of our
              certified inspectors.
            </p>

            <Button
              to="/contact"
              variant="invert"
              icon={ArrowRight}
              className="mt-8"
            >
              Get in Touch
            </Button>
          </Reveal>

          <Reveal
            index={1}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px]"
          >
            <img
              src={inspectorImage}
              alt="A certified inspector kneeling to examine the flooring in an empty room during a home inspection."
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-[68%_35%] saturate-[0.85] contrast-[1.05]"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default Home;
