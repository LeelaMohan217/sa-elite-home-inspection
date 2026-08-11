import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

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
        title="Pricing"
        subtitle="Transparent, flat-rate pricing based on home size and services needed. Final quote confirmed at booking."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-lg border p-8 ${
                plan.featured ? 'border-blue-700 shadow-lg' : 'border-slate-200'
              }`}
            >
              {plan.featured && (
                <span className="mb-3 w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              <p className="mt-1 text-3xl font-bold text-slate-900">{plan.price}</p>
              <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 text-blue-700">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 rounded-md px-4 py-2 text-center text-sm font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-blue-700 text-white hover:bg-blue-800'
                    : 'border border-slate-300 text-slate-900 hover:border-slate-400'
                }`}
              >
                Book This Plan
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Prices
