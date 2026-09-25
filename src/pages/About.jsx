import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionEyebrow from '../components/SectionEyebrow'
import Button from '../components/Button'
import CountUp from '../components/CountUp'
import { RevealGroup, RiseUp, RiseImage } from '../components/ScrollReveal'
import { values } from '../content/about'
import { aboutBlocks, stats } from '../content/home'
import houseImage from '../assets/about-house.webp'

// "Who we are" leads the story; the other blocks become the "How we work" rows.
const [story, ...principles] = aboutBlocks

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About us"
        title="A closer look, every"
        accent="time."
        subtitle="A locally owned inspection company in Hyderabad, built on trust, training, and attention to detail."
      />

      {/* Who we are: photo beside the story, with the numbers below */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          <RevealGroup className="max-w-2xl lg:order-2 lg:col-span-6 lg:col-start-7 lg:max-w-none lg:pl-6">
            <RiseUp delay={0}>
              <SectionEyebrow>{story.title}</SectionEyebrow>
            </RiseUp>

            <RiseUp as="h2" delay={0.2} className="mt-5 text-balance text-h2 text-ink">
              Every home deserves an honest{' '}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                look.
              </span>
            </RiseUp>

            <RiseUp as="p" delay={0.4} className="mt-6 text-pretty text-base leading-relaxed text-stone sm:text-[17px]">
              {story.body}
            </RiseUp>

            <RiseUp
              as="dl"
              delay={0.6}
              className="mt-10 grid grid-cols-3 divide-x divide-hairline border-t border-hairline pt-8"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex flex-col gap-1.5 px-3 first:pl-0">
                  <dt className="order-2 text-xs text-stone sm:text-sm">{stat.label}</dt>
                  <dd className="order-1 text-h3 font-medium tracking-tight text-ink">
                    <CountUp value={stat.value} suffix={stat.suffix} startAfter={0.8 + i * 0.15} />
                  </dd>
                </div>
              ))}
            </RiseUp>
          </RevealGroup>

          <RiseImage
            effect="slide"
            className="relative aspect-[4/5] w-full rounded-2xl sm:aspect-[4/3] lg:order-1 lg:col-span-6 lg:aspect-auto lg:h-full lg:min-h-[34rem]"
            src={houseImage}
            alt="A modern two-storey home with a clean white facade, dark windows and a landscaped front garden."
            loading="lazy"
            decoding="async"
            imgClassName="object-[50%_60%]"
          />
        </div>
      </section>

      {/* How we work: numbered rows, title on the left and detail on the right */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <RevealGroup className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <RiseUp delay={0}>
              <SectionEyebrow className="justify-center">How we work</SectionEyebrow>
            </RiseUp>
            <RiseUp as="h2" delay={0.2} className="mt-5 text-balance text-h2 text-ink">
              Thorough, transparent and{' '}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                independent.
              </span>
            </RiseUp>
          </RevealGroup>

          <ol className="mt-12 border-t border-hairline sm:mt-14">
            {principles.map((block, i) => (
              <RevealGroup
                as="li"
                key={block.title}
                className="grid gap-4 border-b border-hairline py-10 sm:py-12 lg:grid-cols-12 lg:gap-10"
              >
                <RiseUp delay={0} className="flex items-baseline gap-5 lg:col-span-5">
                  <span className="text-sm tabular-nums text-stone">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-h3 font-medium tracking-tight text-ink">{block.title}</h3>
                </RiseUp>
                <RiseUp
                  as="p"
                  delay={0.2}
                  className="max-w-2xl text-pretty text-base leading-relaxed text-stone lg:col-span-7 lg:text-[17px]"
                >
                  {block.body}
                </RiseUp>
              </RevealGroup>
            ))}
          </ol>
        </div>
      </section>

      {/* What we stand for */}
      <section className="border-y border-hairline bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <RevealGroup className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <RiseUp delay={0}>
                <SectionEyebrow>Our values</SectionEyebrow>
              </RiseUp>
              <RiseUp as="h2" delay={0.2} className="mt-5 text-balance text-h2 text-ink">
                What we stand{' '}
                <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                  for.
                </span>
              </RiseUp>
            </div>

            <RiseUp delay={0.4} className="hidden shrink-0 md:block">
              <Button to="/contact" variant="secondary" icon={ArrowRight}>
                Talk to an Inspector
              </Button>
            </RiseUp>
          </RevealGroup>

          <RevealGroup as="ul" className="mt-12 grid gap-4 sm:mt-14 lg:grid-cols-3 lg:gap-5">
            {values.map((value, i) => (
              <RiseUp
                as="li"
                key={value.title}
                delay={0.15 + i * 0.15}
                className="flex flex-col rounded-2xl border border-hairline bg-paper p-6 sm:p-8 lg:min-h-[17rem]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline">
                  <value.icon size={19} strokeWidth={1.75} className="text-ink" aria-hidden="true" />
                </span>
                <div className="mt-10 lg:mt-auto">
                  <p className="text-sm tabular-nums text-stone">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-2 text-h3 text-ink">{value.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-stone">{value.description}</p>
                </div>
              </RiseUp>
            ))}
          </RevealGroup>

          <RevealGroup className="mt-8 md:hidden">
            <RiseUp delay={0}>
              <Button to="/contact" variant="secondary" icon={ArrowRight} className="w-full">
                Talk to an Inspector
              </Button>
            </RiseUp>
          </RevealGroup>
        </div>
      </section>
    </div>
  )
}

export default About
