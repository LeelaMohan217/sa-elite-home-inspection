import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionEyebrow from '../components/SectionEyebrow'
import Button from '../components/Button'
import WaveWash from '../components/WaveWash'
import { RevealGroup, RiseUp } from '../components/ScrollReveal'
import { services, checklist } from '../content/services'

const countChecks = (category) => category.groups.reduce((n, g) => n + g.items.length, 0)
const totalChecks = checklist.reduce((n, c) => n + countChecks(c), 0)

function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Our services"
        title="An inspection for every"
        accent="home."
        subtitle="Whether you're buying a finished flat, building a villa, or chasing a damp patch, we check what matters and explain it in plain language."
      >
        <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Button to="/contact" icon={ArrowRight} className="w-full sm:w-auto">
            Book an Inspection
          </Button>
          <Button to="/prices" variant="secondary" className="w-full sm:w-auto">
            View Pricing
          </Button>
        </div>
      </PageHero>

      {/* The three services */}
      <section className="border-y border-hairline bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <RevealGroup className="max-w-2xl">
            <RiseUp delay={0}>
              <SectionEyebrow>What we offer</SectionEyebrow>
            </RiseUp>
            <RiseUp as="h2" delay={0.2} className="mt-5 text-balance text-h2 text-ink">
              Three ways to know your{' '}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                home.
              </span>
            </RiseUp>
          </RevealGroup>

          <RevealGroup as="ul" className="mt-12 grid gap-4 sm:mt-14 lg:grid-cols-3 lg:gap-5">
            {services.map((service, i) => (
              <RiseUp as="li" key={service.title} delay={0.15 + i * 0.15}>
                <Link
                  to="/contact"
                  className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-paper p-6 transition-colors duration-300 hover:border-accent/25 sm:p-8"
                >
                  <WaveWash />

                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-paper">
                      <service.icon size={19} strokeWidth={1.75} className="text-ink" aria-hidden="true" />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-paper text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                      <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                  </div>

                  <div className="mt-10 lg:mt-16">
                    <p className="text-sm tabular-nums text-stone">{String(i + 1).padStart(2, '0')}</p>
                    <h3 className="mt-2 text-h3 text-ink">{service.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-stone">{service.description}</p>
                  </div>

                  <p className="mt-6 border-t border-hairline pt-4 text-sm text-ink lg:mt-auto">
                    <span className="text-stone">Best for: </span>
                    {service.bestFor}
                  </p>
                </Link>
              </RiseUp>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* The snagging checklist */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <RevealGroup className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <RiseUp delay={0}>
            <SectionEyebrow className="justify-center">What we check</SectionEyebrow>
          </RiseUp>
          <RiseUp as="h2" delay={0.2} className="mt-5 text-balance text-h2 text-ink">
            {totalChecks} checks, room by{' '}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
              room.
            </span>
          </RiseUp>
          <RiseUp as="p" delay={0.4} className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-stone sm:text-[17px]">
            Our professional snagging checklist, worked through on every
            inspection. Each point is tested by hand and recorded with photos
            in your report.
          </RiseUp>
        </RevealGroup>

        <ol className="mt-12 border-t border-hairline sm:mt-14">
          {checklist.map((category, i) => (
            <RevealGroup
              as="li"
              key={category.title}
              className="grid gap-8 border-b border-hairline py-10 sm:py-12 lg:grid-cols-12 lg:gap-10"
            >
              <RiseUp delay={0} className="flex items-start gap-4 lg:col-span-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline">
                  <category.icon size={19} strokeWidth={1.75} className="text-ink" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm tabular-nums text-stone">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-1 text-h3 font-medium tracking-tight text-ink">{category.title}</h3>
                  <p className="mt-1 text-sm text-stone">{countChecks(category)} checks</p>
                </div>
              </RiseUp>

              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:gap-10">
                {category.groups.map((group, g) => (
                  <RiseUp
                    key={group.name ?? g}
                    delay={0.15 + g * 0.15}
                    className={category.groups.length === 1 ? 'sm:col-span-2' : ''}
                  >
                    {group.name && (
                      <p className="mb-4 text-eyebrow font-medium uppercase text-stone">{group.name}</p>
                    )}
                    <ul
                      className={`grid gap-x-8 gap-y-3 ${category.groups.length === 1 ? 'sm:grid-cols-2' : ''}`}
                    >
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-ink">
                          <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-light/60">
                            <Check size={11} strokeWidth={2.75} className="text-accent" aria-hidden="true" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </RiseUp>
                ))}
              </div>
            </RevealGroup>
          ))}
        </ol>
      </section>
    </div>
  )
}

export default Services
