import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, ClipboardCheck, FileText, Droplets, PhoneCall } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionEyebrow from '../components/SectionEyebrow'
import Button from '../components/Button'
import FaqItem from '../components/FaqItem'
import { RevealGroup, RiseUp } from '../components/ScrollReveal'
import { plans, included, pricingFaqs } from '../content/prices'

const INCLUDED_ICONS = [ClipboardCheck, FileText, Droplets, PhoneCall]

function Prices() {
  const [openFaq, setOpenFaq] = useState(pricingFaqs[0].question)

  return (
    <div>
      <PageHero
        eyebrow="Pricing"
        title={"Simple, flat\u2011rate"}
        accent="pricing."
        subtitle="One clear price by home size, with the full checklist and report included. Your final quote is confirmed at booking."
      />

      {/* Plans */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10">
        <RevealGroup as="ul" className="grid gap-4 md:grid-cols-3 md:items-stretch lg:gap-5">
          {plans.map((plan, i) => (
            <RiseUp
              as="li"
              key={plan.name}
              delay={0.1 + i * 0.15}
              className={`relative flex flex-col rounded-2xl border p-7 sm:p-8 ${
                plan.featured
                  ? 'border-accent/30 bg-surface shadow-[0_24px_60px_-40px_rgb(31_58_95/0.45)]'
                  : 'border-hairline bg-paper'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-h3 font-medium tracking-tight text-ink">{plan.name}</h2>
                {plan.featured && (
                  <span className="rounded-full bg-accent-light px-3 py-1 text-eyebrow font-medium uppercase text-accent">
                    Most popular
                  </span>
                )}
              </div>
              {/* Two lines reserved so prices line up across the row */}
              <p className="mt-2 text-[15px] leading-relaxed text-stone md:min-h-[2lh]">{plan.description}</p>

              <p className="mt-8 text-h1 font-medium tabular-nums tracking-tight text-ink">{plan.price}</p>
              <p className="mt-1 text-sm text-stone">per inspection</p>

              <ul className="mt-8 flex-1 space-y-3 border-t border-hairline pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[15px] leading-snug text-ink">
                    <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-light">
                      <Check size={11} strokeWidth={2.75} className="text-accent" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                to="/contact"
                variant={plan.featured ? 'primary' : 'secondary'}
                icon={ArrowRight}
                className="mt-10 w-full"
              >
                Book This Plan
              </Button>
            </RiseUp>
          ))}
        </RevealGroup>

        <RevealGroup>
          <RiseUp as="p" delay={0.2} className="mt-8 text-center text-sm text-stone">
            Larger home, or not sure which plan fits?{' '}
            <Link
              to="/contact"
              className="font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
            >
              Ask us for a quote
            </Link>
            .
          </RiseUp>
        </RevealGroup>
      </section>

      {/* Included in every plan */}
      <section className="border-y border-hairline bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <RevealGroup className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <RiseUp delay={0}>
              <SectionEyebrow className="justify-center">Every plan includes</SectionEyebrow>
            </RiseUp>
            <RiseUp as="h2" delay={0.2} className="mt-5 text-balance text-h2 text-ink">
              No add-ons, no{' '}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                surprises.
              </span>
            </RiseUp>
          </RevealGroup>

          <RevealGroup as="ul" className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {included.map((item, i) => {
              const Icon = INCLUDED_ICONS[i % INCLUDED_ICONS.length]
              return (
                <RiseUp
                  as="li"
                  key={item.title}
                  delay={0.15 + i * 0.12}
                  className="rounded-2xl border border-hairline bg-paper p-6 sm:p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-light">
                    <Icon size={19} strokeWidth={1.75} className="text-accent" aria-hidden="true" />
                  </span>
                  <h3 className="mt-8 text-[17px] font-medium tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone">{item.description}</p>
                </RiseUp>
              )
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Pricing questions */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <RevealGroup className="lg:col-span-4">
          <RiseUp delay={0}>
            <SectionEyebrow>Pricing FAQ</SectionEyebrow>
          </RiseUp>
          <RiseUp as="h2" delay={0.2} className="mt-5 text-balance text-h2 text-ink">
            Questions about{' '}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
              cost?
            </span>
          </RiseUp>
          <RiseUp as="p" delay={0.4} className="mt-6 max-w-sm text-[15px] leading-relaxed text-stone">
            Anything else you'd like to know?{' '}
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
          {pricingFaqs.map((faq, i) => (
            <RiseUp key={faq.question} delay={0.15 + i * 0.1}>
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                open={openFaq === faq.question}
                onToggle={() => setOpenFaq((prev) => (prev === faq.question ? null : faq.question))}
              />
            </RiseUp>
          ))}
        </RevealGroup>
      </section>
    </div>
  )
}

export default Prices
