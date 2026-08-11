import PageHero from '../components/PageHero'

const values = [
  {
    title: 'Integrity First',
    description: 'We report exactly what we find — no upselling, no conflicts of interest.',
  },
  {
    title: 'Thoroughness',
    description: 'Every inspection follows a rigorous, standardized checklist from roof to foundation.',
  },
  {
    title: 'Clear Communication',
    description: "We explain findings in plain language, so you know what's serious and what isn't.",
  },
]

function About() {
  return (
    <div>
      <PageHero
        title="About SA Elite Home Inspection"
        subtitle="A locally owned inspection company built on trust, training, and attention to detail."
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900">Our Story</h2>
        <p className="mt-4 text-slate-600">
          SA Elite Home Inspection was founded to give homebuyers and sellers in the San
          Antonio area an honest, detailed picture of a property's condition. We know that
          for most people, a home is the biggest purchase they'll ever make — our job is to
          make sure you go into that purchase with your eyes open.
        </p>
        <p className="mt-4 text-slate-600">
          Our inspectors are licensed and continually trained on the latest building codes,
          safety standards, and inspection techniques, so you get a report you can actually
          rely on.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">What We Stand For</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
