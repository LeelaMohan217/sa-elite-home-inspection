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

const stats = [
  { label: 'Homes Inspected', value: '1,200+' },
  { label: 'Years of Experience', value: '15+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Avg. Report Turnaround', value: '24 hrs' },
]

const steps = [
  {
    step: '1',
    title: 'Book Online or by Phone',
    description: "Pick a time that works for you — we'll confirm within minutes.",
  },
  {
    step: '2',
    title: 'We Inspect the Property',
    description: 'A certified inspector examines every major system, top to bottom.',
  },
  {
    step: '3',
    title: 'Get Your Digital Report',
    description: 'Receive a clear, photo-backed report within 24 hours.',
  },
  {
    step: '4',
    title: 'Ask Us Anything',
    description: "We're available to walk through the findings and answer questions.",
  },
]

const servicePreviews = [
  {
    title: 'General Home Inspection',
    description: 'Full top-to-bottom evaluation of structure, systems, and safety.',
  },
  {
    title: 'Pre-Listing Inspection',
    description: "Know your home's condition before you list it for sale.",
  },
  {
    title: 'New Construction Inspection',
    description: 'An independent check before your final builder walkthrough.',
  },
]

const testimonials = [
  {
    quote:
      'SA Elite caught a foundation issue our first inspector missed entirely. Saved us from a costly mistake.',
    author: 'Maria G., Homebuyer',
  },
  {
    quote:
      'Fast, professional, and the report was easy to understand. Highly recommend before any closing.',
    author: 'David R., Realtor',
  },
  {
    quote:
      'They walked me through every finding in person. Never felt rushed or upsold on anything.',
    author: 'Priya K., Homeowner',
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

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">How It Works</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                {item.step}
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Popular Services</h2>
            <Link to="/services" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
              View all services →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {servicePreviews.map((service) => (
              <div key={service.title} className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">What Our Clients Say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author} className="rounded-lg border border-slate-200 p-6">
              <blockquote className="text-sm text-slate-600">"{testimonial.quote}"</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-900">
                {testimonial.author}
              </figcaption>
            </figure>
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
