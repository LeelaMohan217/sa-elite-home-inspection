import { Search, Layers, Droplets } from 'lucide-react'
import PageHero from '../components/PageHero'
import InspectionCard from '../components/InspectionCard'

const services = [
  {
    icon: Search,
    title: 'Inspection',
    description:
      'A complete top-to-bottom inspection covering structure, electrical, plumbing, and safety — for flats and villas alike.',
  },
  {
    icon: Layers,
    title: 'Multi Stage Inspection',
    description:
      "Checks at every key construction stage, so structural or material issues are caught early — before walls and finishes hide them.",
  },
  {
    icon: Droplets,
    title: 'Dampness Inspection',
    description:
      'A focused check for moisture, seepage, and dampness issues common in flats and older buildings, especially during monsoon season.',
  },
]

function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Our Services"
        title="Our Services"
        subtitle="Comprehensive inspection services tailored to buyers, sellers, and homeowners in Hyderabad."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((service, i) => (
            <InspectionCard key={service.title} index={i}>
              <service.icon size={22} className="text-accent-vivid" aria-hidden="true" />
              <h3 className="mt-4 font-bold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{service.description}</p>
            </InspectionCard>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
