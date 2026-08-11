import { Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import InspectionCard from '../components/InspectionCard'
import Tag from '../components/Tag'
import Button from '../components/Button'

const plans = [
  {
    name: '1BHK Flat',
    price: '₹5,500',
    description: 'Ideal for 1BHK apartments and compact flats.',
    features: ['Full structural & systems review', 'Digital report within 24 hrs', 'Dampness check included'],
  },
  {
    name: '2BHK Flat',
    price: '₹6,700',
    description: 'Our most popular plan for 2BHK apartments.',
    features: ['Everything in 1BHK Flat', 'Detailed electrical & plumbing check', 'Priority scheduling'],
    featured: true,
  },
  {
    name: 'Villa',
    price: '₹7,500',
    description: 'For independent villas and larger homes.',
    features: ['Everything in 2BHK Flat', 'Multi stage inspection option', 'Extended on-site walkthrough'],
  },
]

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
              tone={plan.featured ? 'ink' : 'paper'}
              decorated={plan.featured}
              index={i}
              className="flex flex-col p-8"
            >
              {plan.featured && (
                <Tag tone="accent" className="mb-4 w-fit">
                  Most Popular
                </Tag>
              )}
              <h3 className={`text-xl font-bold ${plan.featured ? 'text-paper' : 'text-ink'}`}>
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-4xl font-extrabold tabular-nums ${
                  plan.featured ? 'text-paper' : 'text-accent'
                }`}
              >
                {plan.price}
              </p>
              <p className={`mt-2 text-sm ${plan.featured ? 'text-paper/70' : 'text-ink/70'}`}>
                {plan.description}
              </p>
              <ul className={`mt-6 flex-1 space-y-2 text-sm ${plan.featured ? 'text-paper/80' : 'text-ink/70'}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-verified" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                to="/contact"
                variant={plan.featured ? 'invert' : 'primary'}
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
