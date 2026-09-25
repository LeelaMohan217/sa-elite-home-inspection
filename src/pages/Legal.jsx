import { NavLink } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { legalPages, legalNav, LAST_UPDATED } from '../content/legal'

function Block({ item }) {
  if (typeof item === 'string') {
    return <p className="text-pretty text-[15px] leading-relaxed text-stone sm:text-base">{item}</p>
  }
  return (
    <ul className="space-y-2.5">
      {item.list.map((line) => (
        <li key={line} className="flex gap-3 text-pretty text-[15px] leading-relaxed text-stone sm:text-base">
          <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-ink/40" aria-hidden="true" />
          <span>{line}</span>
        </li>
      ))}
    </ul>
  )
}

// Links to every legal page, used beside each document.
export function LegalNav() {
  return (
    <nav aria-label="Legal" className="lg:sticky lg:top-28">
      <p className="text-eyebrow font-medium uppercase text-stone">Legal</p>
      <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
        {legalNav.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `inline-flex rounded-full px-3 py-1.5 text-sm transition-colors lg:-ml-3 ${
                  isActive ? 'bg-surface font-medium text-ink' : 'text-stone hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Legal({ page }) {
  const doc = legalPages[page]

  return (
    <div>
      <PageHero eyebrow="Legal" title={doc.title} subtitle={doc.summary} />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 sm:px-8 sm:pb-24 lg:grid-cols-12 lg:px-10">
        <aside className="lg:col-span-3">
          <LegalNav />
        </aside>

        <article className="max-w-3xl lg:col-span-8 lg:col-start-5">
          <p className="border-b border-hairline pb-6 text-sm text-stone">Last updated: {LAST_UPDATED}</p>
          <ol>
            {doc.sections.map((section, i) => (
              <li key={section.title} className="border-b border-hairline py-8">
                <h2 className="flex items-baseline gap-4 text-h3 font-medium tracking-tight text-ink">
                  <span className="text-sm tabular-nums text-stone">{String(i + 1).padStart(2, '0')}</span>
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 sm:pl-9">
                  {section.body.map((item, k) => (
                    <Block key={k} item={item} />
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </article>
      </section>
    </div>
  )
}

export default Legal
