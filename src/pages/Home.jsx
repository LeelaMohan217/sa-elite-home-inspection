import { ShieldCheck, Clock, FileCheck, ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionEyebrow from '../components/SectionEyebrow'
import Button from '../components/Button'
import StatBlock from '../components/StatBlock'
import InspectionCard from '../components/InspectionCard'
import HouseBlueprint from '../components/HouseBlueprint'

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Certified Inspectors',
    description: 'Licensed, experienced inspectors who know what to look for.',
  },
  {
    icon: Clock,
    title: 'Same-Week Availability',
    description: 'Flexible scheduling so you never miss a closing deadline.',
  },
  {
    icon: FileCheck,
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
    step: '01',
    title: 'Book Online or by Phone',
    description: "Pick a time that works for you — we'll confirm within minutes.",
  },
  {
    step: '02',
    title: 'We Inspect the Property',
    description: 'A certified inspector examines every major system, top to bottom.',
  },
  {
    step: '03',
    title: 'Get Your Digital Report',
    description: 'Receive a clear, photo-backed report within 24 hours.',
  },
  {
    step: '04',
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
      <section className="relative overflow-hidden border-b border-hairline bg-blueprint-grid">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-2">
          <div>
            <Reveal index={0}>
              <SectionEyebrow>Certified Inspections · San Antonio, TX</SectionEyebrow>
            </Reveal>
            <Reveal index={1}>
              <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink sm:text-6xl">
                Nothing about your home goes <em className="italic text-accent-dark">unseen</em>.
              </h1>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-6 max-w-md text-lg text-ink/70">
                Thorough, honest home inspections that help you make informed decisions — whether
                you're buying, selling, or maintaining your home.
              </p>
            </Reveal>
            <Reveal index={3} className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" variant="primary" icon={ArrowRight}>
                Schedule an Inspection
              </Button>
              <Button to="/services" variant="secondary">
                View Services
              </Button>
            </Reveal>
          </div>

          <Reveal index={1} className="relative mx-auto w-full max-w-md">
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-accent/20 blur-3xl"
              aria-hidden="true"
            />
            <HouseBlueprint className="w-full" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionEyebrow>Why Choose Us</SectionEyebrow>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Built on precision, not guesswork.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item, i) => (
            <InspectionCard key={item.title} index={i}>
              <item.icon size={22} className="text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{item.description}</p>
            </InspectionCard>
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-ink-800/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatBlock key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionEyebrow>Our Process</SectionEyebrow>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">How it works.</h2>
        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute inset-x-0 top-5 hidden h-px bg-hairline lg:block" aria-hidden="true" />
          {steps.map((item, i) => (
            <Reveal key={item.step} index={i}>
              <span className="relative z-10 flex h-10 w-10 items-center justify-center border border-accent bg-paper font-mono text-xs font-semibold text-accent-dark">
                {item.step}
              </span>
              <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-hairline bg-ink-800/[0.02] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionEyebrow>Popular Services</SectionEyebrow>
              <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">What we inspect.</h2>
            </div>
            <Button to="/services" variant="ghost" icon={ArrowRight}>
              View all services
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {servicePreviews.map((service, i) => (
              <InspectionCard key={service.title} index={i}>
                <h3 className="font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{service.description}</p>
              </InspectionCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionEyebrow>Client Stories</SectionEyebrow>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">What our clients say.</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.author} index={i} className="relative border-l border-hairline pl-6">
              <span
                className="pointer-events-none absolute -left-2 -top-4 font-display text-6xl italic text-ink/10"
                aria-hidden="true"
              >
                "
              </span>
              <blockquote className="text-sm leading-relaxed text-ink/80">"{testimonial.quote}"</blockquote>
              <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-ink/60">
                {testimonial.author}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-20 text-center sm:px-6">
          <SectionEyebrow tone="dark">Ready When You Are</SectionEyebrow>
          <h2 className="font-display text-3xl text-paper sm:text-4xl">
            Ready to book your inspection?
          </h2>
          <p className="max-w-xl text-paper/70">
            Reach out today and we'll get you scheduled with one of our certified inspectors.
          </p>
          <Button to="/contact" variant="invert" icon={ArrowRight} className="mt-2">
            Get in Touch
          </Button>
        </div>
      </Reveal>
    </div>
  )
}

export default Home
