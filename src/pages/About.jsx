import PageHero from '../components/PageHero'
import SectionEyebrow from '../components/SectionEyebrow'
import Reveal from '../components/Reveal'
import InspectionCard from '../components/InspectionCard'
import { values } from '../content/about'

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="About Akshara Elite Home Inspections"
        subtitle="A locally owned inspection company built on trust, training, and attention to detail."
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionEyebrow>Our Story</SectionEyebrow>
        <Reveal>
          <h2 className="mt-3 text-3xl text-accent">A closer look, every time.</h2>
          <p className="mt-6 text-ink/70">
            Akshara Elite Home Inspections was founded to give homebuyers and sellers in Hyderabad
            an honest, detailed picture of a property's condition. We know that
            for most people, a home is the biggest purchase they'll ever make — our job is to
            make sure you go into that purchase with your eyes open.
          </p>
          <p className="mt-4 text-ink/70">
            Our inspectors are licensed and continually trained on the latest building codes,
            safety standards, and inspection techniques, so you get a report you can actually
            rely on.
          </p>
        </Reveal>

        <div className="mt-16">
          <SectionEyebrow>Our Values</SectionEyebrow>
          <h2 className="mt-3 text-3xl text-accent">What we stand for.</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {values.map((value, i) => (
              <InspectionCard key={value.title} index={i}>
                <value.icon size={22} className="text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-bold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{value.description}</p>
              </InspectionCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
