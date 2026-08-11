import { Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import InspectionCard from '../components/InspectionCard'
import Tag from '../components/Tag'
import Button from '../components/Button'

const plans = [
  {
    name: 'Essential',
    price: '$299',
    description: 'Ideal for condos and homes under 1,500 sq ft.',
    features: ['Full structural & systems review', 'Digital report within 24 hrs', 'Roof & attic inspection'],
  },
  {
    name: 'Standard',
    price: '$399',
    description: 'Our most popular plan for homes 1,500–3,000 sq ft.',
    features: [
      'Everything in Essential',
      'Sprinkler system check',
      'Termite & wood-destroying insect check',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '$499',
    description: 'For larger homes over 3,000 sq ft or added peace of mind.',
    features: ['Everything in Standard', 'New construction walkthrough', 'Priority scheduling'],
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
            <InspectionCard key={plan.name} featured={plan.featured} index={i} className="flex flex-col p-8">
              {plan.featured && (
                <Tag tone="brass" className="mb-4 w-fit">
                  Most Popular
                </Tag>
              )}
              <h3 className={`text-xl font-semibold ${plan.featured ? 'text-paper' : 'text-ink'}`}>
                {plan.name}
              </h3>
              <p
                className={`mt-1 font-mono text-4xl font-semibold tabular-nums ${
                  plan.featured ? 'text-paper' : 'text-brass-dark'
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
