import { Link } from 'react-router-dom'

const highlights = [
  {
    title: 'Certified Inspectors',
    description: 'Licensed, experienced inspectors who know what to look for.',
  },
  {
    title: 'Same-Week Availability',
    description: 'Flexible scheduling so you never miss a closing deadline.',
  },
  {
    title: 'Detailed Digital Reports',
    description: 'Clear, photo-backed reports delivered within 24 hours.',
  },
]

function Home() {
  return (
    <div>
      <section className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Buy with Confidence. Inspect with SA Elite.
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Thorough, honest home inspections that help you make informed decisions —
              whether you're buying, selling, or maintaining your home.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-md bg-blue-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
              >
                Schedule an Inspection
              </Link>
              <Link
                to="/services"
                className="rounded-md border border-slate-500 px-6 py-3 font-semibold text-white transition-colors hover:border-slate-300"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-800 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
              Why homeowners trust us
            </p>
            <p className="mt-3 text-slate-300">
              Over the years we've helped hundreds of San Antonio families understand
              exactly what they're buying, with no surprises after closing.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-14 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to book your inspection?
          </h2>
          <p className="max-w-xl text-blue-100">
            Reach out today and we'll get you scheduled with one of our certified inspectors.
          </p>
          <Link
            to="/contact"
            className="mt-2 rounded-md bg-white px-6 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
