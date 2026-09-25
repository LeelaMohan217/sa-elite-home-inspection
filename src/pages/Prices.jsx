import { Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import InspectionCard from '../components/InspectionCard'
import Tag from '../components/Tag'
import Button from '../components/Button'
import { plans } from '../content/prices'

function Prices() {
  return (
    <div>
      <PageHero
        eyebrow="Pricing"
        title="Pricing"
        subtitle="Transparent, flat-rate pricing based on home size and services needed. Final quote confirmed at booking."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <InspectionCard
              key={plan.name}
              tone="paper"
                            index={i}
              className={`flex flex-col p-8 ${plan.featured ? 'bg-glow ring-1 ring-accent/30' : ''}`}
            >
              {plan.featured && (
                <Tag tone="accent" className="mb-4 w-fit">
                  Most Popular
                </Tag>
              )}
              <h3 className={`text-xl font-bold ${'text-ink'}`}>
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-4xl font-extrabold tabular-nums ${
                  'text-accent'
                }`}
              >
                {plan.price}
              </p>
              <p className={`mt-2 text-sm ${'text-stone'}`}>
                {plan.description}
              </p>
              <ul className={`mt-6 flex-1 space-y-2 text-sm ${'text-stone'}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                to="/contact"
                variant={plan.featured ? 'primary' : 'secondary'}
                className="mt-8 w-full"
              >
                Book This Plan
              </Button>
            </InspectionCard>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Prices
