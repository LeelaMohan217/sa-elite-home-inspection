import PageHero from '../components/PageHero'

const services = [
  {
    title: 'General Home Inspection',
    description:
      'A full top-to-bottom evaluation covering roof, structure, electrical, plumbing, HVAC, and more.',
  },
  {
    title: 'Pre-Listing Inspection',
    description: 'Know your home\'s condition before you list, so there are no surprises during negotiations.',
  },
  {
    title: 'New Construction Inspection',
    description: 'A independent check of newly built homes before your final walkthrough.',
  },
  {
    title: 'Roof Inspection',
    description: 'A close look at shingles, flashing, gutters, and drainage to spot issues early.',
  },
  {
    title: 'Termite & Wood-Destroying Insect Inspection',
    description: 'Identify signs of termite damage or other wood-destroying pests.',
  },
  {
    title: 'Sprinkler System Inspection',
    description: 'Verify irrigation system coverage, controllers, and valves are functioning properly.',
  },
]

function Services() {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive inspection services tailored to buyers, sellers, and homeowners."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
