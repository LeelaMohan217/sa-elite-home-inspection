import { Home, ClipboardList, HardHat, Layers, Bug, Droplets } from 'lucide-react'
import PageHero from '../components/PageHero'
import InspectionCard from '../components/InspectionCard'

const services = [
  {
    icon: Home,
    title: 'General Home Inspection',
    description:
      'A full top-to-bottom evaluation covering roof, structure, electrical, plumbing, HVAC, and more.',
  },
  {
    icon: ClipboardList,
    title: 'Pre-Listing Inspection',
    description: "Know your home's condition before you list, so there are no surprises during negotiations.",
  },
  {
    icon: HardHat,
    title: 'New Construction Inspection',
    description: 'An independent check of newly built homes before your final walkthrough.',
  },
  {
    icon: Layers,
    title: 'Roof Inspection',
    description: 'A close look at shingles, flashing, gutters, and drainage to spot issues early.',
  },
  {
    icon: Bug,
    title: 'Termite & Wood-Destroying Insect Inspection',
    description: 'Identify signs of termite damage or other wood-destroying pests.',
  },
  {
    icon: Droplets,
    title: 'Sprinkler System Inspection',
    description: 'Verify irrigation system coverage, controllers, and valves are functioning properly.',
  },
]

function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Our Services"
        title="Our Services"
        subtitle="Comprehensive inspection services tailored to buyers, sellers, and homeowners."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <InspectionCard key={service.title} index={i}>
              <service.icon size={22} className="text-brass" aria-hidden="true" />
              <h3 className="mt-4 font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{service.description}</p>
            </InspectionCard>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
